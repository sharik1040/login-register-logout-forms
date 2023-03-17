import { Outlet } from "react-router-dom";
import "./Layout.style.css";

export const Layout = () => {
    return (
        <div className="form-usage">
            <Outlet />
            <div className="decor-wrapper">
                <div className="form-usage__decor"/>
            </div>
        </div>
    )
}