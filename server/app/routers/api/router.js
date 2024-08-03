const express = require("express");

const router = express.Router();

/* ************************** USER *********************************** */

const usersRouter = require("./users/router");

router.use("/users", usersRouter);

/* ******************************** PROJECT *********************************** */

const projectRouter = require("./project/router");

router.use("/project", projectRouter);

/* ******************************** EVENT *********************************** */

const eventRouter = require("./event/router");

router.use("/event", eventRouter);

/* ******************************** DIRECTORY *********************************** */

const directoryRouter = require("./directory/router");

router.use("/directory", directoryRouter);

module.exports = router;
