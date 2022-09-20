import ReactDOM from 'react-dom/client';
import {App} from "app/App";

import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "shared/theme-context/ThemeProvider";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ThemeProvider>
        <App/>
        </ThemeProvider>
    </BrowserRouter>
    )