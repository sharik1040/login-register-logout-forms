import { LoginForm } from "./index";
import "./VanillaLoginForm.css";

export const VanillaLoginFormExample = () => {
    return (
        <section className="form-usage">
            <LoginForm />
            <div className="decor-wrapper">
                <div className="form-usage__decor"/>
            </div>
        </section>
    )
}
