class BaseService {
    constructor(repository) {
      this.repository = repository;
    }
  
    async create(data) {
      try {
        const instance = await this.repository.create(data);
        return instance;
      } catch (error) {
        throw new Error(error.message);
      }
    }
  
    async findAll(options = {}) {
      try {
        const instances = await this.repository.findAll(options);
        return instances;
      } catch (error) {
        throw new Error(error.message);
      }
    }
  
    async findById(id) {
      try {
        const instance = await this.repository.findById(id);
        return instance;
      } catch (error) {
        throw new Error(error.message);
      }
    }
  
    async update(id, data) {
      try {
        const instance = await this.repository.update(id, data);
        return instance;
      } catch (error) {
        throw new Error(error.message);
      }
    }
  
    async delete(id) {
      try {
        const result = await this.repository.delete(id);
        return result;
      } catch (error) {
        throw new Error(error.message);
      }
    }
  }
  
  module.exports = BaseService;
  