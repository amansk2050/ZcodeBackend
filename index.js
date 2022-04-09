const mysql = require("mysql");
const util = require("util");
const express = require("express");
const bodyParser = require("body-parser");
var app = express();
var cors = require("cors");
app.use(cors());
app.use(bodyParser.json());

// MYSQL details
console.log("hello aman");
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Final@2050",
//   database: "affilicate_code",
// });

//-- for production --
var connection = mysql.createConnection({
  host: "localhost",
  user: "zcodedog_db_user",
  password: "%XjCy]SZCzLQ",
  database: "zcodedog_data",
});


const query = util.promisify(connection.query).bind(connection);

// get wallet address by code // with query params
// request url - http://localhost:3000/getdata
app.get("/getdata", async (req, res) => {
  try {
    console.log("hello :: ", req.query.code);
    const code = await query(
      `select address from affiliate where id = '${req.query.code}';`
    );
    var data = JSON.stringify(code);
    var data1 = JSON.parse(data);
    console.log("data ! ", data1);
    res.status(200).json({
      message: "Address found",
      address: data1[0].address,
    });
  } catch (error) {
    console.log("error :: ", error);
    res.status(400).json({
      message: "error",
      code: error,
    });
  }
});

// app.listen(3000, function () {
//   console.log("app is runnig");
// });

/* 

CREATE TABLE affiliate (
    address varchar(255) NOT NULL ,
    nft_minted int default 0,
    UNIQUE(address)
);


ALTER TABLE affiliate ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY,
    AUTO_INCREMENT=100000;
*/

app.post("/generate", async (req, res) => {
  console.log("inside generate ");
  try {
    const code = await query(
      `select id from affiliate where address = '${req.body.address}';`
    );
    var data = JSON.stringify(code);
    var data1 = JSON.parse(data);
    if (code.length == 0) {
      const insert = await query(
        `insert into affiliate (address) values('${req.body.address}');`
      );
      const getId = await query(
        `select id from affiliate where address = '${req.body.address}';`
      );
      var data2 = JSON.stringify(getId);
      var data3 = JSON.parse(data2);
      console.log("code :: ", data3);
      res.status(200).json({
        message: "Code generated",
        code: `${data3[0].id}ZCODE`,
      });
    } else {
      res.status(200).json({
        message: "code found",
        code: `${data1[0].id}ZCODE`,
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
      `select *  from affiliate offset order by nft_minted desc limit 10 offset ${
        (req.query.page - 1) * 10
      };`
    );
    var data = JSON.stringify(code);
    var data1 = JSON.parse(data);
    res.status(200).json({
      count: data1.length,
      code: data1,
    });
  } catch (error) {
    console.log("error :: ", error);
    res.status(400).json({
      message: "error",
      code: error,
    });
  }
});
