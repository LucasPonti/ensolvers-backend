import tareaModel from './tarea.model.js';
import TareaRepository from './tarea.repository.js';

const tareaRepository = new TareaRepository(tareaModel);
export default class TareaController {
  constructor() {}

  async findAll(req, res) {
    return await tareaRepository.findAll(req, res);
  }

  async create(req, res) {
    return await tareaRepository.create(req, res);
  }

  async delete(req, res) {
    return await tareaRepository.delete(req, res);
  }
}
