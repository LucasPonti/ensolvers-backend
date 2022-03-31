import carpetaModel from './carpeta.model.js';
import CarpetaRepository from './carpeta.repository.js';

const carpetaRepository = new CarpetaRepository(carpetaModel);
export default class CarpetaController {
  constructor() {}

  async findAll(req, res) {
    return await carpetaRepository.findAll(req, res);
  }

  async create(req, res) {
    return await carpetaRepository.create(req, res);
  }

  async delete(req, res) {
    return await carpetaRepository.delete(req, res);
  }
}
