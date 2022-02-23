import { NavLink } from "react-router-dom";

const DashboardPage = () => {
    <section>
        <h1>Dashboard</h1>
        <p>This is the dashboard.</p>

        <NavLink to="/posts" className="button">View Posts</NavLink>
    </section>;
};
export default DashboardPage;
