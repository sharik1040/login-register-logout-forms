import { ThemeProvider } from '@mui/material/styles';
import { MaterialUIForm } from "./index";
import theme from './theme';

export const MaterialUIFormExample = () => {
    return (
        <ThemeProvider theme={theme}>
            <section className="form-usage">
                <MaterialUIForm />
            </section>
        </ThemeProvider>
    )
}
