import express from "express";
import "dotenv/config.js";
import morgan from "morgan";
import DB from "./config/db.js";

const app = express();

// log
app.use(morgan("dev"));
// json ajax
app.use(express.json());
// korean
app.use(express.urlencoded({ extended: true}))

app.get("/ping", (req, res) => {
    res.send("pong")
    console.log('pong')
    res.status(200).json(user)
})

app.post("/test/addReminder", async (req, res) => {
    const connection = await DB.getConnection();
    try {
        let QUERY = `
        INSERT INTO Reminder (title, memo, isStar) VALUES (?, ?, ?);
        INSERT INTO Checklist (pIdx)`
    } catch (err) {

    } finally {

    }
})

app.post("/", async (req, res) => {
    const connection = await DB.getConnection();
    try {
        let QUERY = `INSERT INTO Reminder (title, memo) VALUES (?, ?);`;
        await connection.beginTransaction();
        await connection.query(QUERY, [req.body.title, req.body.memo]);
        await connection.commit();
        res.status(201).json("create");
        console.log('success')
    } catch (err) {
        await connection.rollback();
        res.status(400).json("BAD REQUEST");
    } finally {
        connection.release();
        console.log('finally')
    }
})

app.listen(process.env.SERVER_PORT, () => {})