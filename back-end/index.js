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

//get username
app.get("/name/:id", async (req, res) => {
    try {
        const { id } = req.params
        const name = await pool.query(
            "SELECT username FROM user_profile WHERE id = $1", [id]
        );
        res.json(name.rows);
    }
    catch (error) {
        console.error(error.message);
    }
})

//get userID
app.get("/id/:user_email", async (req, res) => {
    try {
        const { user_email } = req.params
        const id = await pool.query(
            "SELECT id FROM user_profile WHERE user_email = $1", [user_email]
        );
        res.json(id.rows);
    }
    catch (error) {
        console.error(error.message);
    }
})

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
app.get("/car/make/:make", async (req, res) => {
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
app.get("/car/color/:color", async (req, res) => {


    try {
        const { color } = req.params;
        console.log(req.params)
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
        const { make, color } = req.params;
        const allCars = await pool.query(
            "SELECT * FROM car WHERE make = $1 AND color = $2", [make, color]
        );
        res.json(allCars.rows);
    } catch (error) {
        console.error(error.message)
    }
})

//get all information of one vehicle
app.get("/view/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const selection = await pool.query(
            "SELECT * FROM car WHERE id = $1", [id]
        );
        res.json(selection.rows);
    } catch (error) {
        console.error(error.message)
    }
})

//checkout
app.post("/checkout", async (req, res) => {

    const { confirmation_number, user_id, vehicle_id } = req.body;
    console.log(req.body)
    pool
        .query("INSERT INTO transaction (confirmation_number, user_id, vehicle_id) VALUES ($1, $2, $3) RETURNING *", [confirmation_number, user_id, vehicle_id])
        .then(res => console.log(res.rows))
        .catch(err => console.error('Error executing query', err.stack))

})

app.listen(PORT, () => {
    console.log("server has started on port " + PORT)
});