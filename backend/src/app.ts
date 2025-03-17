/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import config from './config';
import router from './routes';
import globalErrorHandler from './errors/globalErrorhandler';
import { notFound } from './errors/notFound';
import cookieParser from 'cookie-parser';
const app: Application = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('uploads'));
app.use(
  cors({
    origin: ['http://localhost:1100'],
    credentials: true,
  }),
);
app.use(cookieParser());

app.get('/', (req: Request, res: Response) => {
  res.send(`server is running on port ${config.PORT} 🏃‍♂️‍➡️`);
});

// use Routes
app.use('/api', router);

// global error handler
app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
