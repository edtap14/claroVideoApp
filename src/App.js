import { Routes, Route } from "react-router-dom";
import DetailFilsm from "./screen/DetailFilms/DetailFilsm.jsx";
import PrincipalScreen from "./screen/PantallaPrincipal/PrincipalScreen.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<PrincipalScreen />} />
        <Route exact path="/:id" element={<DetailFilsm />} />
      </Routes>
    </div>
  );
}

export default App;
