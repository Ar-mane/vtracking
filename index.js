// Add Express
const express = require("express");
const app = express();
const tracking = require("./tracking.js");

app.use(express.json({ extended: false }));

app.use("/api/Tracking", tracking);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
