import { DataTypes } from "sequelize";
import { db } from "../db";

// Define Pokemon Model
const PokemonModel = db.define("pokemon", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true, 
    },
    pokedexID: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type0: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type1: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    height: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    weight: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    hp: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    attack: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    special_attack: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    defense: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    special_defense: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    speed: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    front_sprite: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    back_sprite: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    front_artwork: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export { PokemonModel }