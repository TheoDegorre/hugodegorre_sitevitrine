const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "directory" as configuration
    super({ table: "directory" });
  }

  // The C of CRUD - Create operation

  async create(directory) {
    // Execute the SQL INSERT query to add a new directory to the "directory" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, directory_id) values (?, ?)`,
      [directory.title, directory.directory_id]
    );

    // Return the ID of the newly inserted directory
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific directory by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the directory
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all directorys from the "directory" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of directorys
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing directory

  // async update(directory) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an directory by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = UserRepository;
