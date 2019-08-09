//this is where our middlewhere and express app will live
const express = require('express');
const app = express();
const path = require("path");


const db = require('./database');
const apiRouter = require('./routes');

// NOTE: this option of "force": true is a destructive operation --- it will drop all of your tables --- so you might need two terminals open if this is passed in --- one for running the application and one for seeding your data;

async function syncDatabase() {
  await db.sync();
}

function configureApp() {
    // serve up certain files to the client;
  // app.use(express.static(path.dirname(require.main.filename)));
  app.use("/api", apiRouter);

  // Error handling (if a file/resource that is being requested does not exist --- attach a 404 to the Error object and pass it the error handling endware at the very bottom of this configuration function);
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found');
      err.status = 404;
      next(err);
    }
    else {
      next();
    }
  });

   // serve up the index html on any request at this point;
  // proof of concept --- we don't have an index html currently
  // app.use("*", (req, res) => {
  //   res.sendFile(path.join(__dirname, "..", "public/index.html"));
  // });


  // More error handling (all of our errors that we pass to `next` will hit this single block of code --- allowing us to minimize the amount of error handling logic we'll have to write in our express routes);
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });

app.listen(3000, ()=> {
console.log("listening on port 3000");
})
}

async function bootApp() {
  await syncDatabase();
  await configureApp();
}

bootApp(); 