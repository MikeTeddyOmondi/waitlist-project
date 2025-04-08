// userService.js
const UserRepository = require('../repositories/userRepository');

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async getUserById(id) {
    return await this.userRepository.findById(id);
  }

  async getAllUsers() {
    return await this.userRepository.findAll();
  }

  async createUser(user) {
    return await this.userRepository.create(user);
  }

  async updateUser(id, userData) {
    return await this.userRepository.update(id, userData);
  }

  async deleteUser(id) {
    return await this.userRepository.delete(id);
  }
}

module.exports = UserService;