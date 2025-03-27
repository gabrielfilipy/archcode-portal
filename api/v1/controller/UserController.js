const UserService = require('../../../domain/service/UserService');

class UserController {
  
  async getAll(req, res) {
    try {
      const users = await UserService.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    try {
      const user = await UserService.findById(id);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "Usuário não encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async create(req, res) {
    const data = req.body;
  
    if (!data.userName || !data.userLogin || !data.userPassword || !data.userEmail) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }
  
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(data.userEmail)) {
      return res.status(400).json({ message: "Email inválido" });
    }

    try {
      const newUser = await UserService.create(data);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async findByLogin(req, res) {
    const { login } = req.params;
    try {
      const user = await UserService.findByLogin(login);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "Usuário não encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      const updatedUser = await UserService.update(id, data);
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const result = await UserService.delete(id);
      if (result) {
        res.json({ message: "Usuário deletado com sucesso" });
      } else {
        res.status(404).json({ message: "Usuário não encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new UserController();
