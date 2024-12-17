
import sequelize from "../config/connection";
import { GameFactory } from "./Games";
import { UserFactory } from "./Users";

const User = UserFactory(sequelize)
const Game = GameFactory(sequelize)

User.hasMany(Game, {
    onDelete: 'CASCADE'
});

export { sequelize, User, Game }