import AddPokemonPage from "./components/AddPokemonPage";
import EditPokemonPage from "./components/EditPokemonPage";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPokemonPage from "./components/DetailsPokemonPage";
import AppNavbar from "./components/Navbars/AppNavbar";

function AppRouter() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/AddPokemon" element={<AddPokemonPage />} />
        <Route path="/EditPokemon" element={<EditPokemonPage />} />
        <Route path="/DetailsPokemon" element={<DetailsPokemonPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
