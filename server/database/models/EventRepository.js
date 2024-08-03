const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "event" as configuration
    super({ table: "event" });
  }

  // The C of CRUD - Create operation

  async create(event) {
    // Execute the SQL INSERT query to add a new event to the "event" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, event_id) values (?, ?)`,
      [event.title, event.event_id]
    );

    // Return the ID of the newly inserted event
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific event by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the event
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all events from the "event" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of events
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing event

  // async update(event) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an event by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = UserRepository;
