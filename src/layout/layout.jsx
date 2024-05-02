import { Outlet } from "react-router-dom";

import MovieFooter from "../components/MovieFooter";

const Layout = () => {
    return (
        <>
            <div className="">
                <Outlet />
                <MovieFooter />
            </div>
        </>
    );
}

export default Layout;