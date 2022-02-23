import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import DashboardPage from './pages/DashboardPage'
import PostsPage from './pages/PostsPage.js'


const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardPage/>}></Route>
                <Route path="/posts" element={<PostsPage/>}></Route>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;