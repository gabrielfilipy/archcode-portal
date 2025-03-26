const BaseRepository = require('../../domain/repository/BaseRepository');
const User = require('../model/user');

class UserRepository extends BaseRepository {
  constructor() {
    super(User);
  }

  async findByLogin(login) {
    try {
      const user = await this.model.findOne({ where: { userLogin: login } });
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = new UserRepository();
