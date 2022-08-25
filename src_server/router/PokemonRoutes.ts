import express from "express";
import PokemonController from "../controllers/PokemonController";

// Define Pokemon Routes
const pokemonRouter = express.Router();

pokemonRouter.post("/pokemons", PokemonController.create);

pokemonRouter.get("/pokemons", PokemonController.findAll);

pokemonRouter.get("/pokemons/:pokemonId", PokemonController.findById);

pokemonRouter.put("/pokemons/:pokemonId", PokemonController.update);

pokemonRouter.delete("/pokemons/:pokemonId", PokemonController.destroy);

export { pokemonRouter };