const AbstractManager = require("./AbstractManager");

class childManager extends AbstractManager {
  constructor() {
    super({ table: "child" });
  }

  insert(child) {
    return this.connection.query(
      `insert into ${this.table} (name, age, address) values (?, ?, ?)`,
      [child.name, child.age, child.address]
    );
  }

  update(child) {
    return this.connection.query(
      `update ${this.table} set name = ?, age = ?, address = ? where id = ?`,
      [child.name, child.age, child.address, child.id]
    );
  }
}

module.exports = childManager;
