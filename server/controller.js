module.exports = {
  getInventory(req, res) {
    let db = req.app.get("db");
    db.get_inventory().then(dbRes => {
      res.status(200).send(dbRes);
    });
  },

  getProduct(req, res) {
    let db = req.app.get("db");
    db.get_product().then(dbRes => {
      res.status(200).send(dbRes);
    });
  }
};
