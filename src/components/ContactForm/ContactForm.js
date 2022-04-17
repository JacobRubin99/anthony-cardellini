import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./ContactForm.css";

// Contact Form inspiration:
// https://www.derekaspaulding.com/blog/simple-contact-form-with-gatsby-formik-and-netlify/
export const ContactForm = () => (
  <div className="formik-container">
    <h1>Contact Me</h1>
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      onSubmit={(values, actions) => {
        console.log("Submitting form");
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
      validate={(values) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const errors = {};
        if (!values.name) {
          errors.name = "Name Required";
        }
        if (!values.email || !emailRegex.test(values.email)) {
          errors.email = "Email Required";
        }
        if (!values.message) {
          errors.message = "Message Required";
        }
        return errors;
      }}
    >
      {() => (
        <Form className="form-container">
          <div className="input-container">
            <label htmlFor="name">
              Name <span>*</span>{" "}
            </label>
            <Field name="name" />
            <div class="error">
              <ErrorMessage name="name" />
            </div>
          </div>

          <div className="input-container">
            <label htmlFor="email">
              Email <span>*</span>{" "}
            </label>
            <Field name="email" />
            <div class="error">
              <ErrorMessage name="email" />
            </div>
          </div>

          <div className="input-container">
            <label htmlFor="message">
              Message <span>*</span>
            </label>
            <Field name="message" component="textarea" />
            <div class="error">
              <ErrorMessage name="message" />
            </div>
          </div>

          <button className="submit" type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);
