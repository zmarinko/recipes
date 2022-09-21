import { Router } from 'express';
import { expressjwt } from 'express-jwt';
import { RecipesController } from '../controllers/recipes.controller.js';

const route = '/api/recipes';

const router = Router();
router.get(route, RecipesController.get);
router.get(route + '/:id', RecipesController.getById);
router.post(
  route,
  expressjwt({ secret: 'teskasifra', algorithms: ['HS256'] }),
  RecipesController.create
);
router.patch(
  route + '/:id',
  expressjwt({ secret: 'teskasifra', algorithms: ['HS256'] }),
  RecipesController.update
);
router.delete(
  route + '/:id',
  expressjwt({ secret: 'teskasifra', algorithms: ['HS256'] }),
  RecipesController.delete
);

export default router;
