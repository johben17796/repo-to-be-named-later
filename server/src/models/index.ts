
import sequelize from "../config/connection.js";
import { GameFactory } from "./Games.js";
import { UserFactory } from "./Users.js";

const User = UserFactory(sequelize)
const Game = GameFactory(sequelize)

User.hasMany(Game, {
    onDelete: 'CASCADE'
});

export { sequelize, User, Game }