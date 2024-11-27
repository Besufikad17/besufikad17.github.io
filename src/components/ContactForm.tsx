import { useState } from "react";
import { Icon } from "@iconify/react";
import { useFormik } from "formik";
import * as yup from "yup";
import { sendEmail } from "../utils/functions/mail";
import { ContactProps } from "../types/component";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});

export default function ContactForm(props: ContactProps) {
  const { setShowToast, setToastMessage, setToastType } = props;

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async(values: ContactForm) => {
      console.log(values);
      setLoading(true);
      try {
        await sendEmail({ email: values.email, subject: values.subject, message: values.message });
        setToastType("success");
        setToastMessage("Email sent :)");
        setLoading(false);
        setShowToast(true);
        formik.resetForm();
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      }catch(error) {
        console.log(error);
        setToastType("error");
        setToastMessage("Error :(");
        setLoading(false);
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      }
    },
  });

  return (
    <form className="flex flex-col items-center justify-center gap-6 p-4 w-full lg:w-3/5" onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-2 w-full">
        <input
          autoComplete="false"
          className="w-full p-2 bg-secondary-50 dark:bg-primary-800 text-primary-950 rounded-md focus:outline-none focus:ring-0"
          type="email"
          placeholder="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && formik.touched.email ? (
          <span className="text-red-500 text-sm">{formik.errors.email}</span>
        ) : null}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <input
          autoComplete="false"
          className="w-full p-2 bg-secondary-50 dark:bg-primary-800 text-primary-950 rounded-md focus:outline-none focus:ring-0"
          type="text"
          placeholder="subject"
          name="subject"
          value={formik.values.subject}
          onChange={formik.handleChange}
        />
        {formik.errors.subject && formik.touched.subject ? (
          <span className="text-red-500 text-sm">{formik.errors.subject}</span>
        ) : null}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <textarea
          autoComplete="false"
          className="w-full p-2 bg-secondary-50 dark:bg-primary-800 text-primary-950 rounded-md focus:outline-none focus:ring-0"
          placeholder="message"
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
        ></textarea>
        {formik.errors.message && formik.touched.message ? (
          <span className="text-red-500 text-sm">{formik.errors.message}</span>
        ) : null}
      </div>
      <button type="submit" className="w-full flex items-center justify-center gap-2 p-2 rounded-md bg-primary-950 dark:bg-secondary-200 text-secondary-200 dark:text-primary-950">
        Send
        { loading && (
          <Icon icon="eos-icons:loading" />
        )}
      </button>
    </form>
  );
}
