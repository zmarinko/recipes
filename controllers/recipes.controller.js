import { RecipesService } from '../services/recipes.service.js';

export class RecipesController {
  static async get(req, res) {
    res.send(await RecipesService.find());
  }

  static async getById(req, res) {
    res.send(await RecipesService.findById(req.params.id));
  }

  static async create(req, res) {
    req.body.userId = req.auth.id;
    res.status(201);
    res.send(await RecipesService.create(req.body));
  }

  static async update(req, res) {
    res.send(await RecipesService.update(req.params.id, req.body));
  }

  static async delete(req, res) {
    await RecipesService.delete(req.params.id);
    res.send();
  }
}
