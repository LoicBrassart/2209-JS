const AbstractManager = require("./AbstractManager");

class videoManager extends AbstractManager {
  constructor() {
    super({ table: "video" });
  }

  insert(video) {
    return this.connection.query(
      `insert into ${this.table} (title, source, website, tags) values (?, ?, ?, ?)`,
      [video.title, video.source, video.website, video.tags]
    );
  }

  update(video) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [video.title, video.id]
    );
  }
}

module.exports = videoManager;
