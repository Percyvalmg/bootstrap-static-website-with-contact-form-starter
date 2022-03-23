import * as Yup from "yup";

export const contactFormSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/\w\s\w/, "please include surname too")
    .min(1, "too short!")
    .required("required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "please enter a valid 10 digit number")
    .min(10, "please enter a valid 10 digit number")
    .max(10, "please enter a valid 10 digit number")
    .required("required"),
  subject: Yup.string(),
  message: Yup.string().min(5, "too short!"),
  email: Yup.string().email("invalid email").required("required"),
});
