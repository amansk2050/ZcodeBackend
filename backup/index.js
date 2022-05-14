const mysql = require("mysql");
const util = require("util");
const express = require("express");
const bodyParser = require("body-parser");
var app = express();
var cors = require("cors");
app.use(cors());
app.use(bodyParser.json());

// MYSQL details
// var connection = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "Final@2050",
//   database: "affilicate_code",
// });
process.on("uncaughtException", function (err) {
  console.log(err);
});

//-- for production --
var connection = mysql.createPool({
  user: "zcodedog_db_user",
  password: "%XjCy]SZCzLQ",
  database: "zcodedog_data",
  socketPath: "/var/lib/mysql/mysql.sock",
});

const query = util.promisify(connection.query).bind(connection);

const connect = util.promisify(connection.getConnection).bind(connection);

app.listen(3000);

app.post("/getdata", async (req, res) => {
  const client = await connect();
  try {
    const cod = connection.escape(req.body.code);
    console.log("hello :: ", req.body.code);
    const code = await query(
      `select address from affiliate where id = ${cod};`
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
  } finally {
    client.release();
  }
});

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
  const client = await connect();
  try {
    const add = connection.escape(req.body.address);
    const code = await query(
      `select id from affiliate where address = ${add};`
    );
    var data = JSON.stringify(code);
    var data1 = JSON.parse(data);
    if (code.length == 0) {
      const insert = await query(
        `insert into affiliate (address) values(${add});`
      );
      const getId = await query(
        `select id from affiliate where address = ${add};`
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
  } finally {
    client.release();
  }
});

// //-- count increment --

// app.post("/countIncrement", async (req, res) => {
//   const client = await connect();
//   try {
//     const addr = connection.escape(req.body.address);
//     const insert = `UPDATE affiliate SET nft_minted = nft_minted + 1 where address = ${addr};`;
//     console.log("query :: ", insert);
//     await query(insert);
//     res.status(200).json({
//       message: "count increment",
//       address: req.body.address,
//     });
//   } catch (error) {
//     res.status(400).json({
//       message: "error",
//       code: error,
//     });
//   } finally {
//     client.release();
//   }
// });



///---increment + count 

//-- count increment --

app.post("/countIncrement", async (req, res) => {
  const client = await connect();
  try {
    const cod = connection.escape(req.body.code);
    const insert = `UPDATE affiliate SET nft_minted = nft_minted + 1 where id = ${cod};`;
    console.log("query :: ", insert);
    await query(insert);
    console.log("hello :: ", cod);
    const code = await query(
      `select address from affiliate where id = ${cod};`
    );
    var data = JSON.stringify(code);
    var data1 = JSON.parse(data);
    console.log("data ! ", data1);
    res.status(200).json({
      message: "count increment, address found",
      address: data1[0].address,
    });
  } catch (error) {
    res.status(400).json({
      message: "error",
      code: error,
    });
  } finally {
    client.release();
  }
});


//--get top most ---
app.get("/getTop", async (req, res) => {
  const client = await connect();
  try {
    const pag = connection.escape(req.query.page);
    console.log("hello");
    const code = await query(
      `select *  from affiliate offset order by nft_minted desc limit 10 offset ${
        (pag - 1) * 10
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
  } finally {
    client.release();
  }
});

app.use("/", express.static("public"));
app.use("/mint", express.static("public/mint.html"));
app.use("/admin", express.static("public/admin.html"));
