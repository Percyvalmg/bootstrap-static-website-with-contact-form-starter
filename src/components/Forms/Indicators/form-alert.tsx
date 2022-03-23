/* eslint-disable react/jsx-key */
import * as React from "react";
import { Alert } from "react-bootstrap";

const FormAlert = ({
  status,
  doOnClose,
}: {
  status: { sent: boolean; message: string };
  doOnClose: () => void;
}) => {
  return (
    <Alert
      variant={status.sent ? "success" : "danger"}
      onClose={doOnClose}
      dismissible={true}
    >
      {status.message}
    </Alert>
  );
};

export default FormAlert;
