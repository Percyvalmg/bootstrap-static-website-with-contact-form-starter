import axios from "axios";
import {
  getFirstName,
  getLastName,
  handleHubspotFormSubmissionErrorResponse,
} from "../../../utils";

export const submitContactForm = (contactFormData: {
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message?: string;
}) => {
  const contactFormURI = `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID}/${process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID}`;
  const body = createContactFormData(
    contactFormData.name,
    contactFormData.email,
    contactFormData.phone,
    contactFormData.subject,
    contactFormData.message
  );

  return axios
    .post(contactFormURI, body)
    .then((response) => {
      return { status: response.status, message: "Success" };
    })
    .catch((error) => {
      if (error.response) {
        return handleHubspotFormSubmissionErrorResponse(error.response);
      } else {
        return { status: 400, message: error.message };
      }
    });
};

const createContactFormData = (
  name: string,
  email: string,
  phone: string,
  subject = "",
  message = ""
) => {
  return {
    submittedAt: Date.now(),
    fields: [
      {
        name: "firstname",
        value: getFirstName(name),
      },
      {
        name: "lastname",
        value: getLastName(name),
      },
      {
        name: "email",
        value: email,
      },
      {
        name: "phone",
        value: phone,
      },
      {
        name: "subject",
        value: subject,
      },
      {
        name: "message",
        value: message,
      },
      {
        name: "hs_lead_status",
        value: "New",
      },
    ],
    context: {
      pageUri: "https://companyname.domain",
      pageName: "Contact Page",
    },
  };
};
