import { Request, Response } from "express";
import { PokemonModel } from "../models/PokemonModel";

class PokemonController {
    async create(req: Request, res: Response) {
        const {name, pokedexID, type0, type1, description, height, weight, 
        hp, attack, special_attack, defense, special_defense, speed, 
        front_sprite, back_sprite, front_artwork} = req.body;
        const pokemon = await PokemonModel.create({
            name,
            pokedexID,
            type0,
            type1,
            description,
            height,
            weight,
            hp,
            attack,
            special_attack,
            defense,
            special_defense,
            speed,
            front_sprite,
            back_sprite,
            front_artwork
        });
        return res.status(201).json(pokemon);
    }

    async findAll(req: Request, res: Response) {
        const pokemons = await PokemonModel.findAll();
        return pokemons.length > 0
            ? res.status(200).json(pokemons)
            : res.status(204).send();
    }

    async findById(req: Request, res: Response) {
        const { pokemonId } = req.params;
        const pokemon = await PokemonModel.findOne({
            where: {
                pokedexID: pokemonId,
            },
        });
        return pokemon ? res.status(200).json(pokemon) : res.status(404).send();
    }

    async update(req: Request, res: Response) {
        const { pokemonId } = req.params;
        await PokemonModel.update(req.body, {where: { pokedexID: pokemonId }});
        return res.status(204).send();
    }

    async destroy(req: Request, res: Response) {
        const { pokemonId } = req.params;
        await PokemonModel.destroy({ where: { pokedexID: pokemonId } });
        return res.status(204).send();
    }
}

export default new PokemonController();