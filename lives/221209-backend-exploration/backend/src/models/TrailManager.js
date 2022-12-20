const AbstractManager = require("./AbstractManager");

class TrailManager extends AbstractManager {
  constructor() {
    super({ table: "trail" });
  }

  insert(trail) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [trail.title]
    );
  }

  update(trail) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [trail.title, trail.id]
    );
  }
}

module.exports = TrailManager;
