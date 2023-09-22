const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const server = express();

server.use(bodyParser.json({ limit: '10mb' }));

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200')
  res.header('Access-Control-Allow-Methods','POST, GET, PUT, PATCH, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers','Content-Type, Option, Authorization')
  return next()
})

//Establish the database connection

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

db.connect(function (error) {
  if (error) {
    console.log("Error Connecting to DB");
  } else {
    console.log("successfully Connected to DB");
  }
});

//Establish the Port

server.listen(8080, function check(error) {
  if (error) {
    console.log("Error....dddd!!!!");
  } else {
    console.log("Started....!!!! 8080");
  }
});

//successfully//


//----------------------------------Account API----------------------------------//

// Handle login request Admin
server.post("/api/admin/login", (req, res) => {

  const { mail, pass } = req.body;
  db.query(
    "SELECT * FROM account WHERE mail = ? AND pass = ? AND st_user = 'ADMIN'",
    [mail, pass],
    (error, results) => {
      if (error) {
        console.error("Error authenticating user:", error);
        res.status(500).send({ status: false, message: "Internal server error" });
      } else if (results.length > 0) {
        // Successful login
        res.send({ status: true, message: "Login Admin successful" });

      } else {
        // Login failed
        res.send({ status: false, message: "Login failed" });

      }
    }
  );
});

//----------------------------------Product API----------------------------------//

//Create the Records
server.post("/api/product/add", (req, res) => {
  let details = {
    name    : req.body.name,
    price   : req.body.price,
    stcode  : req.body.stcode,
    date_pd   : req.body.date_pd,
    image   : req.body.image,
  };

  let sql = "INSERT INTO product_test SET ?";

  db.query(sql, details, (error) => {
    if (error) {
      console.log("Error Connecting to DB");
      res.send({ status: false, message: " creation Failed" });
    } else {
      console.log("Success Connecting to DB");
      res.send({ status: true, message: " created successfully" });
    }
  });
});

//view the Records
server.get("/api/product/get", (req, res) => {
  var sql = "SELECT * FROM product_test";

  db.query(sql, function (error, result) {
    if (error) {
      console.log("Error Connecting to DB");
      res.send({ status: false, message: "Error Connecting to DB" });
    } else {
      res.send({ status: true, data: result });
    }
  });
});

//Search the Records
server.get("/api/product/get/:id", (req, res) => {
  var id = req.params.id;
  var sql = "SELECT * FROM product_test WHERE id=?";
  var values = [id];

  db.query(sql, values, function (error, result) {
    if (error) {
      console.log("Error Connecting to DB");
      res.send({ status: false, message: "Error Connecting to DB" });
    } else {
      if (result.length > 0) {
        res.send({ status: true, data: result });
      } else {
        res.send({ status: false, message: "Product not found" });
      }
    }
  });
});

//Update the Records
server.put("/api/update/:id", (req, res) => {
  let sql =
    "UPDATE product_test SET name=?, price=?, stcode=?, date_pd=?, image=? WHERE id=?";
  let values = [
    req.body.name,
    req.body.price,
    req.body.stcode,
    req.body.date_pd,
    req.body.image,
    req.params.id
  ];

  db.query(sql, values, (error, result) => {
    if (error) {
      res.send({ status: false, message: "Student Update Failed" });
    } else {
      res.send({ status: true, message: "Student Updated successfully" });
    }
  });
});

//Update the Status
server.put("/api/updatestatus/:id", (req, res) => {
  let sql =
    "UPDATE product_test SET stcode=? WHERE id=?";

  let values = [
    req.body.stcode,
    req.params.id,
  ];

  db.query(sql, values, (error, result) => {
    if (error) {
      res.send({ status: false, message: " Update Failed" });
    } else {
      res.send({ status: true, message: " Updated successfully" });
    }
  });
});

//Delete the Status
server.delete("/api/delete/:id", (req, res) => {
  let sql = "DELETE FROM product_test WHERE id = ?";
  let values = [req.params.id];

  db.query(sql, values, (error) => {
    if (error) {
      res.send({ status: false, message: " Delete Failed" });
    } else {
      res.send({ status: true, message: " Deleted successfully" });
    }
  });
});

//------------------------------End APi Product--------------------------------//
