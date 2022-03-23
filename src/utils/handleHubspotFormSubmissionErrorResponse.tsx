export const handleHubspotFormSubmissionErrorResponse = (response: any) => {
  switch (response.data.errors[0].errorType) {
    case "INVALID_EMAIL":
      return {
        status: response.status,
        message: "The email address you entered does not exist.",
      };
    case "BLOCKED_EMAIL":
      return {
        status: response.status,
        message:
          "The email address you entered is blocked, please try using a different email.",
      };
    default:
      return {
        status: response.status,
        message: response.data.errors[0].message,
      };
  }
};
