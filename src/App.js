import { Routes, Route } from "react-router-dom";
import { MaterialUIFormExample } from "./components/MaterialUIForm/MaterialUIFormExample";
import { VanillaLoginFormExample } from "./components/VanillaLoginForm/VanillaLoginFormExample";
import { Homepage } from "./pages/Homepage";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes path="/">
        <Route path="/" element={<Homepage />}/>
        <Route path="/login-forms/vanilla-css" element={<VanillaLoginFormExample />}/>
        <Route path="/login-forms/material-ui" element={<MaterialUIFormExample />}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;
