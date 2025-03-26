class BaseRepository {
    constructor(model) {
      this.model = model;
    }
  
    async create(data) {
      try {
        const instance = await this.model.create(data);
        return instance;
      } catch (error) {
        throw new Error(error.message);
      }
    }
  
    async findAll(options = {}) {
      try {
        const instances = await this.model.findAll(options);
        return instances;
      } catch (error) {
        throw new Error(error.message);
      }
    }
  
    async findById(id) {
      try {
        const instance = await this.model.findByPk(id);
        if (!instance) {
          throw new Error('Item not found');
        }
        return instance;
      } catch (error) {
        throw new Error(error.message);
      }
    }
  
    async update(id, data) {
      try {
        const instance = await this.model.findByPk(id);
        if (!instance) {
          throw new Error('Item not found');
        }
        await instance.update(data);
        return instance;
      } catch (error) {
        throw new Error(error.message);
      }
    }
  
    async delete(id) {
      try {
        const instance = await this.model.findByPk(id);
        if (!instance) {
          throw new Error('Item not found');
        }
        await instance.destroy();
        return { message: 'Item deleted successfully' };
      } catch (error) {
        throw new Error(error.message);
      }
    }
  }
  
  module.exports = BaseRepository;
  