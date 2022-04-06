const mysql = require("mysql");
const util = require("util");
const express = require("express");
const bodyParser = require("body-parser");
const { nanoid } = require("nanoid");
var app = express();

app.use(bodyParser.json());

// MYSQL details

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Final@2050",
  database: "affilicate_code",
});
const query = util.promisify(connection.query).bind(connection);

// get wallet address by code // with query params
// request url - http://localhost:3000/getdata
app.get("/getdata", async (req, res) => {
  try {
    console.log("hello");
    const code = await query(
      `select address from affiliate where code = '${req.query.code}';`
    );
    var data = JSON.stringify(code);
    var data1 = JSON.parse(data);
    res.status(200).json({
      message: "Address found",
      code: data1[0].address,
    });
  } catch (error) {
    console.log("error :: ", err);
    res.status(400).json({
      message: "error",
      code: error,
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});

/* 

CREATE TABLE affiliate (
    id int NOT NULL AUTO_INCREMENT,
    address varchar(255) NOT NULL ,
    code varchar(255) NOT NULL ,
    nft_minted int,
    PRIMARY KEY (id),
    UNIQUE(address),
    UNIQUE(code)
);
*/

app.post("/generate", async (req, res) => {
  try {
    const code = await query(
      `select code from affiliate where address = '${req.body.address}';`
    );
    var data = JSON.stringify(code);
    var data1 = JSON.parse(data);
    if (code.length == 0) {
      var gen = nanoid(7);
      const insert = await query(
        `insert into affiliate (code,address) values('${gen}','${req.body.address}');`
      );
      res.status(200).json({
        message: "Code generated",
        code: gen,
      });
    } else {
      res.status(200).json({
        message: "code found",
        code: data1[0].code,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "error",
      code: error,
    });
  }
});

//-- count increment --

app.post("/countIncrement", async (req, res) => {
  try {
    const insert = `UPDATE affiliate SET nft_minted = nft_minted + 1 where address = '${req.body.address}';`;
    console.log("query :: ", insert);
    await query(insert);
    res.status(200).json({
      message: "count increment",
    });
  } catch (error) {
    res.status(400).json({
      message: "error",
      code: error,
    });
  }
});

//--get top most ---
app.get("/getTop", async (req, res) => {
  try {
    console.log("hello");
    const code = await query(
      `select *  from affiliate offset order by nft_minted desc limit 10 offset ${(req.query.page - 1) * 10};`
    );
    var data = JSON.stringify(code);
    var data1 = JSON.parse(data);
    res.status(200).json({
      count: data1.length,
      code: data1
    });
  } catch (error) {
    console.log("error :: ", error);
    res.status(400).json({
      message: "error",
      code: error,
    });
  }
});
