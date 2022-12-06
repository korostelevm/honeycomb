const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();
app.use(express.json()); 
app.use(router);

router.get("/", async (req, res) => {

    return res.json({
        hello: 'world'
    });
});

app.listen(3000, () => {});
