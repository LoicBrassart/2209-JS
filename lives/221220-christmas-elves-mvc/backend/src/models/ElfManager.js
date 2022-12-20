const AbstractManager = require("./AbstractManager");

class elfManager extends AbstractManager {
  constructor() {
    super({ table: "elf" });
  }

  insert(elf) {
    return this.connection.query(
      `insert into ${this.table} (name, experience) values (?, ?)`,
      [elf.name, elf.experience]
    );
  }

  update(elf) {
    return this.connection.query(
      `update ${this.table} set name = ?, experience = ? where id = ?`,
      [elf.name, elf.experience, elf.id]
    );
  }
}

module.exports = elfManager;
