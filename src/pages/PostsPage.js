import { connect } from "react-redux";
import { fetchPosts } from "../actions/postsActions";
import { useEffect } from "react";
import { Post } from "../components/Post";


// Redux State is now in the props of the component
const PostsPage = ({dispatch, loading, posts, hasErrors}) => {
    useEffect(() => {
        dispatch(fetchPosts())
    },  [dispatch])


    // show loading, error or success state
    const renderPosts = () => {
        if (loading) return <p>Loading posts...</p>
        if (hasErrors) return <p>Unable to display posts.</p>
        return posts.map((post) => <Post key={post.id} post={post} />)
    }

   
    return(
        <section>
            <h1>Posts</h1>
            {renderPosts()}
        </section>
    )
}

 // Map Redux state to React component prop
 const mapStateToProps = (state) => ({
    loading: state.posts.loading,
    posts: state.posts.posts,
    hasErrors: state.posts.hasErrors,
})



export default connect(mapStateToProps)(PostsPage);