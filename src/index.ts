import express from "express";
import cors from "cors";
import fs from "fs";
import { sendEmail } from "./email";

const port = 3001;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (_, res) => {
  const txt = fs.readFileSync("src/storage.json", "utf8");
  res.send({ invoiceList: txt });
});

app.post("/", (req, res) => {
  fs.writeFileSync("src/storage.json", JSON.stringify(req.body.invoiceList));
  res.sendStatus(200);
});

app.post("/email", (req, res) => {
  sendEmail(req.body.invoice);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Invoice backend listening at http://localhost:${port}`);
});
