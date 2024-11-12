import { ContactFormData } from "@/types";
import emailjs from "@emailjs/browser";

export const sendEmail = (data: ContactFormData) => {
    const templateParams = {
      user_email: data.email,
      user_name: data.name,
      message: data.message,
    };

  emailjs
    .send(
      "service_tvk0sin",
      "template_e41uzjd",
      templateParams,
      "v3179Takr1EXEB0ig",
    )
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
    })
    .catch((err) => {
      console.error("FAILED...", err);
    });
};
