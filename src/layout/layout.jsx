import { Outlet } from "react-router-dom";
import ScrollTop from "../components/ScrollTop";
import MovieFooter from "../components/MovieFooter";

const Layout = () => {
    return (
        <>
        <ScrollTop /> 
            <div className="">
                <Outlet />
                <MovieFooter />
            </div>
        </>
    );
}

export default Layout;