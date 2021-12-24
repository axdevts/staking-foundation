import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import indexRouter from './routes/index';
import { httpLogger, errorHandler } from './middleware';

const app = express();

// http logger
app.use(httpLogger);

// allow cross origin requests
app.use(cors());

// parsing request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// routes
app.use('/api', indexRouter);

// error handling
app.use(errorHandler);

export default app;
