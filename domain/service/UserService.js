const BaseService = require('./BaseService');
const UserRepository = require('../repository/UserRepository');
const bcrypt = require('bcryptjs');

class UserService extends BaseService {
  constructor() {
    super(UserRepository);
  }

  async findByLogin(login) {
    try {
      const user = await this.repository.findByLogin(login);
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async save(userData) {
    try {
      // Gerar login automático
      const nameParts = userData.userName.trim().split(' ');
      const firstName = nameParts[0].toLowerCase();
      const lastName = nameParts[nameParts.length - 1].toLowerCase();
      const generatedLogin = `${firstName}.${lastName}`;

      // Verificar se o login já existe no banco de dados
      let uniqueLogin = generatedLogin;
      let count = 1;
      while (await this.repository.findByLogin(uniqueLogin)) {
        uniqueLogin = `${generatedLogin}${count}`;
        count++;
      }

      // Gerar senha automática de 6 dígitos
      const generatedPassword = Math.random().toString(36).slice(-6);
      const hashedPassword = await bcrypt.hash(generatedPassword, 10);

      // Criar usuário no banco de dados
      const newUser = await this.repository.create({
        userName: userData.userName,
        userLogin: uniqueLogin,
        userPassword: hashedPassword,
        userEmail: userData.userEmail
      });

      // Retornar o usuário criado (sem a senha para segurança)
      return { 
        userId: newUser.userId, 
        userName: newUser.userName,
        userLogin: newUser.userLogin,
        userEmail: newUser.userEmail
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

}

module.exports = new UserService();
