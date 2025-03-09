import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db';

class BaseModel extends Model {
  declare id: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}

BaseModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: true,
    modelName: 'BaseModel',
    tableName: 'base_model',
  }
);

export default BaseModel;
