/* eslint-disable react/jsx-key */
import { ErrorMessage, Field } from "formik";
import * as React from "react";

const InputField = ({
  name,
  placeholder,
  type,
  rows,
  as,
  label,
  min,
}: {
  name: string;
  placeholder: string;
  type?: string;
  rows?: string;
  as?: string;
  label?: string;
  min?: string;
}) => (
  <div>
    {label && <label htmlFor={`#${name}`}>{label}</label>}
    <Field
      as={as}
      rows={rows}
      type={type}
      name={name}
      className="form-control"
      id={name}
      placeholder={placeholder}
      min={min}
    />
    <ErrorMessage
      name={name}
      render={(msg) => (
        <div
          style={{
            color: "red",
            margin: "0 0 15px 0",
            fontWeight: 400,
            fontSize: "13px",
          }}
        >
          {msg}
        </div>
      )}
    />
  </div>
);

export default InputField;
