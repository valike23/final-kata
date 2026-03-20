import { DataTypes } from 'sequelize';
import { sequelize } from '../db';
import BaseModel from './base.model';

class Competition extends BaseModel {
  declare competition_name: string;
  declare competition_banner: string;
  declare active: boolean
}

Competition.init(
  {
    competition_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    competition_banner: {
      type: DataTypes.STRING, 
      allowNull: true,
    },
    active: {
      type: DataTypes.BOOLEAN, 
      allowNull: false,
      defaultValue: false
    },
  },
  {
    sequelize,
    modelName: 'Competition',
    tableName: 'competitions',
    timestamps: true, 
  }
);
Competition.sync({alter: true});
export default Competition;
