import { Routes, Route } from "react-router-dom";
import { MaterialUIFormExample } from "./components/MaterialUIForm/MaterialUIFormExample";
import { VanillaLoginFormExample } from "./components/VanillaLoginForm/VanillaLoginFormExample";

function App() {
  return (
    <>
      <Routes>
        <Route path="/vanilla-css" element={<VanillaLoginFormExample />}/>
        <Route path="/material-ui" element={<MaterialUIFormExample />}/>
      </Routes>
    </>
  );
}

export default App;
