// just for the record, GAME in this really means "favorited game"


import { DataTypes, Sequelize, Model } from 'sequelize';

interface GameAttributes {
    game_id: number;
    name: string;
    slug: string;

}

interface GameCreationAttributes extends GameAttributes {}


export class Game extends Model<GameAttributes, GameCreationAttributes> implements GameAttributes {
    public game_id!: number;
    public name!: string;
    public slug!: string;
  


}

export function GameFactory(sequelize: Sequelize): typeof Game {
  Game.init(
    {
      game_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      slug: {
        type: DataTypes.STRING,
      }
      

    },
    {
      sequelize,

      tableName: 'Game',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
    }
  );

  return Game;
}
