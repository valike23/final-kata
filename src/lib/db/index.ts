import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); 


export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: true, 
});

// Test the connection
(async () => {
  try {
    await sequelize.authenticate();
    
    console.log('SQLite database connected successfully!');
  } catch (error) {
    console.error('Database connection error:', error);
  }
})();
