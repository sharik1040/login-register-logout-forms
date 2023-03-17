import { Link } from "react-router-dom";
import { UIFrameworklist } from "../data/uiframeworkslist";
import "./styles.css";

export const Homepage = () => {
    return (
        <main className="homepage">
            <h2 className="title">Login forms:</h2>
            <ul>
                {
                    UIFrameworklist.map(item => (
                        <li key={UIFrameworklist.id} >
                            <Link to={`login-forms/${item.name}`}>
                                {item.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}