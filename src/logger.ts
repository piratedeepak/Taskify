// src/logger.ts
import { createLogger, format, transports } from 'winston';
import * as fs from 'fs';

// Ensure logs/ exists
if (!fs.existsSync('logs')) {
  fs.mkdirSync('logs');
}

export const taskLogger = createLogger({
  level: 'info',
  format: format.json(),
  transports: [
    new transports.File({ filename: 'logs/todo.log' }),
  ],
});
