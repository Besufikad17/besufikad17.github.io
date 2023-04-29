import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});

type IForm = {
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: IForm) => {
      console.log(values);
    },
  });

  return (
    <div className="form">
      <div className="form-card">
        <form onSubmit={formik.handleSubmit}>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
           {formik.errors.email && formik.touched.email ? (<div>{formik.errors.email}</div>) : (null) }
          <input
            type="text"
            placeholder="subject"
            name="subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
          />
           {formik.errors.subject && formik.touched.subject ? (<div>{formik.errors.subject}</div>) : (null) }
          <textarea
            placeholder="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
          ></textarea>
           {formik.errors.message && formik.touched.message ? (<div>{formik.errors.message}</div>) : (null) }
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}
