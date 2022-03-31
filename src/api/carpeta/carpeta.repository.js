export default class CarpetaRepository {
  model;
  constructor(model) {
    this.model = model;
    this.findAll = this.findAll.bind(this);
    this.create = this.create.bind(this);
    this.delete = this.delete.bind(this);
  }

  async findAll(req, res) {
    this.model.find({}, (err, docs) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(docs);
      }
    });
  }

  async create(req, res) {
    /*const body = !Array.isArray(req.body) ? req.body : req.body[0];
    const [err] = await to(this.model.insertMany([body]));
    if (err) {
      throwDBError(err);
    }
    return Ok(res, body);*/
    let file = req.body;
    console.log(req.body);
    let mongoRecords = [];
    mongoRecords.push({
      files: file.files,
    });

    this.model.create(mongoRecords, (err, records) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(records);
      }
    });
  }

  async delete(req, res) {
    let id = req.body.id;
    this.model.findByIdAndDelete(id, (err) => {
      res.status(500).send(err);
    });
  }
}
