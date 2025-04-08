// waitlistService.js
const WaitlistRepository = require('../repositories/waitlistRepository');

class WaitlistService {
  constructor() {
    this.waitlistRepository = new WaitlistRepository();
  }

  async getWaitlistById(id) {
    return await this.waitlistRepository.findById(id);
  }

  async getAllWaitlist() {
    return await this.waitlistRepository.findAll();
  }

  async createWaitlist(waitlist) {
    return await this.waitlistRepository.create(waitlist);
  }

  async updateWaitlist(id, waitlistData) {
    return await this.waitlistRepository.update(id, waitlistData);
  }

  async deleteWailtlist(id) {
    return await this.waitlistRepository.delete(id);
  }
}

module.exports = WaitlistService;