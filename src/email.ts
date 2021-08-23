import sgMail from "@sendgrid/mail";
import { Invoice } from "./type";
import moment from "moment";

const user = "scribberinvoice@gmail.com"; // process.env.SENDGRID_EMAIL
const API_KEY = process.env.SENDGRID_API_KEY

sgMail.setApiKey(API_KEY);

export function sendEmail(invoice: Invoice) {
  const msg = {
    from: user,
    to: invoice.email,
    subject: "Scribbr Invoice",
    text: `Here is your Scribbr Invoice. Name: ${invoice.firstName} ${invoice.lastName} | Price: ${invoice.price} | Due Date: ${invoice.dueDate}`, // plain text body
    html: `<h1>Scribbr</h1>
    <h4>Here is your Scribbr Invoice:</h4>

    <p>Name: ${invoice.firstName} ${invoice.lastName}</p>
    <p>Price: ${invoice.price}</p>
    <p>Due Date: ${moment(invoice.dueDate).format("YYYY-MM-DD")}</p>
    `,
  };

  sgMail
    .send(msg)
    .then(() => console.log("Email is sent."))
    .catch((err) => {
      console.log(err);
    });
}
