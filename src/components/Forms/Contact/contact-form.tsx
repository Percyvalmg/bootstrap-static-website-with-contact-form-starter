/* eslint-disable react/jsx-key */
import * as React from "react";
import { Formik, Form } from "formik";
import InputField from "../Fields/input-field";
import { contactFormSchema } from "./contact-form-schema";
import { submitContactForm } from "./contact-form-factory";
import FormAlert from "../Indicators/form-alert";
import FormLoadingIndicator from "../Indicators/form-loading-indicator";

const handleContactFormSubmission = (
  response: { status: number; message: string },
  setStatus: {
    (status?: any): void;
    (arg0: { sent: boolean; message: string }): void;
  }
) => {
  if (response.status === 200) {
    setStatus({
      sent: true,
      message: "Your message has been sent. Thank you!",
    });
  } else {
    setStatus({
      sent: false,
      message:
        "An error occurred while submitting your form, please try again later",
    });
  }
};

export const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      }}
      validationSchema={contactFormSchema}
      onSubmit={async (values, { setSubmitting, setStatus }) => {
        setSubmitting(true);
        const response = await submitContactForm(values);
        setSubmitting(false);
        handleContactFormSubmission(response, setStatus);
      }}
    >
      {({ isSubmitting, isValid, status, resetForm, setStatus }) => (
        <Form id={"contact-form"}>
          <div className="row">
            <div className="col-md-4 form-group">
              <InputField
                name={"name"}
                placeholder={"Name Surname"}
                type={"text"}
              />
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <InputField
                name={"email"}
                placeholder={"example@mail.com"}
                type={"email"}
              />
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <InputField
                name={"phone"}
                placeholder={"+27 00 000 0000"}
                type={"tel"}
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <InputField
              name={"subject"}
              placeholder={"Subject"}
              type={"text"}
            />
          </div>
          <div className="form-group mt-3">
            <InputField
              name={"message"}
              placeholder={"Ask us something?"}
              as={"textarea"}
              rows={"5"}
            />
          </div>
          <div className="my-3">
            {isSubmitting && <FormLoadingIndicator />}
            {status && status.message && (
              <FormAlert
                status={status}
                doOnClose={() => {
                  if (status.sent) {
                    resetForm();
                  } else {
                    setStatus(null);
                    console.log("closing without resetting form");
                  }
                }}
              />
            )}
          </div>
          <div className="text-center">
            <button type="submit" disabled={isSubmitting || !isValid}>
              Send Message
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
