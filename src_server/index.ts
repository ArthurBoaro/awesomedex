// Import Modules

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { db } from "./db"
import { pokemonRouter } from "./router/PokemonRoutes";
import { errorHandler } from "./middleware/error.middleware"
import { notFoundHandler } from "./middleware/not-found.midleware"

// Initialize configurations
dotenv.config();

if (!process.env.SERVER_PORT) {
    process.exit(1);
}
 
const PORT: number = parseInt(process.env.SERVER_PORT as string, 10);
const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(pokemonRouter);
app.use(errorHandler);
app.use(notFoundHandler);

// Open server
app.listen(PORT, async () => {
    await db.sync();
    console.log(`Server is up! Listening on port ${PORT}.`);
});
