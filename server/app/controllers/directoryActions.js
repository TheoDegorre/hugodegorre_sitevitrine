// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all directorys from the database
    const directorys = await tables.directory.readAll();

    // Respond with the directorys in JSON format
    res.json(directorys);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific directory from the database based on the provided ID
    const directory = await tables.directory.read(req.params.id);

    // If the directory is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the directory in JSON format
    if (directory == null) {
      res.sendStatus(404);
    } else {
      res.json(directory);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the directory data from the request body
  const directory = req.body;

  try {
    // Insert the directory into the database
    const insertId = await tables.directory.create(directory);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted directory
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  // destroy,
};
