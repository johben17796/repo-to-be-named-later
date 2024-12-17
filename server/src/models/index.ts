import sequelize from '../config/connection.js'
import { UserFactory } from './Users.js';
import { GameFactory } from './Games.js';

const User = UserFactory(sequelize);
const Game = GameFactory(sequelize);

export { User, Game };
