import { Link } from "react-router-dom";
import { UIFrameworklist } from "../data/uiframeworkslist";

export const Homepage = () => {
    return (
        <main>
            <h2>Login forms:</h2>
            <ul>
                {
                    UIFrameworklist.map(item => (
                        <li key={UIFrameworklist.id} >
                            <Link to={`/login-forms/${item.name}`}>
                                {item.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}