const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const { all } = require("./routes/jwtAuth");

var PORT = process.env.PORT || 5000;

//====middleware====//
app.use(cors());
app.use(express.json()); //req.body
//====//

//====ROUTES====//

//register and login routes
app.use("/auth", require("./routes/jwtAuth"));

//user home  route
app.use("/userHomePage", require("./routes/userHomePage"));

//get all cars
app.get("/car", async (req, res) => {
    try {
        const allCars = await pool.query(
            "SELECT * FROM car"
        )
        res.json(allCars.rows);

    } catch (error) {
        console.error(error.message)
    }
})

//get all cars of one make
app.get("/car/:make", async (req, res) => {
    try {
        const { make } = req.params;
        const allCars = await pool.query(
            "SELECT * FROM car WHERE make = $1", [make]
        );
        res.json(allCars.rows);

    } catch (error) {
        console.error(error.message)
    }
})

//get all cars of one color
app.get("/car/:color", async (req, res) => {
    try {
        const { color } = req.params;
        const allCars = await pool.query(
            "SELECT * FROM car WHERE color = $1", [color]
        );
        res.json(allCars.rows);

    } catch (error) {
        console.error(error.message)
    }
})

//get all cars of make and color
app.get("/car/:make/:color", async (req, res) => {
    try {
        const { make } = req.params;
        const { color } = req.params;
        const allCars = await pool.query(
            "SELECT * FROM car WHERE make = $1 && color = $2", [make], [color]
        );
        res.json(allCars.rows);

    } catch (error) {
        console.error(error.message)
    }
})

app.listen(PORT, () => {
    console.log("server has started on port " + PORT)
});