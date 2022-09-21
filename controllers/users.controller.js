import { UsersService } from '../services/users.service.js';

export class UsersController {
  static async register(req, res) {
    res.status(201);
    res.send({ token: await UsersService.register(req.body) });
  }

  static async login(req, res) {
    const token = await UsersService.login(req.body.username, req.body.password);
    if (!token) {
      res.status(401);
      res.send();
      return;
    }
    res.send({ token });
  }
}
