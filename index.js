import express, { json, static as estatic } from 'express';
import recipesRouter from './routes/recipes.router.js';
import usersRouter from './routes/users.router.js';
import path from 'path';
const app = express();
app.use(estatic(path.join('client', 'dist', 'client')))
app.use(json({ limit: '200mb' }));
app.use(recipesRouter);
app.use(usersRouter);
app.listen(process.env.PORT || 3000);
