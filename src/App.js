import { Routes, Route } from "react-router-dom";
import PrincipalScreen from "./screen/PantallaPrincipal/PrincipalScreen.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<PrincipalScreen />} />
      </Routes>
    </div>
  );
}

export default App;
