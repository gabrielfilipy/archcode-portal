const BaseService = require('./BaseService');
const UserRepository = require('../repository/UserRepository');

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

}

module.exports = new UserService();
