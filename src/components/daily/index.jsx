import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./daily.css";
import * as Yup from "yup";

const Daily = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  return (
    <Formik
      initialValues={{
        MS: "",
        HSD: "",
        MS_DIP: "",
        HSD_DIP1: "",
        HSD_DIP2: "",
        Closing_Reading_MS_Dispenser_1_Nozle_1: "",
        Closing_Reading_MS_Dispenser_1_Nozle_2: "",
        Testing_MS_Dispenser_1_Nozle_1: "15",
        Testing_MS_Dispenser_1_Nozle_2: "15",
        Closing_Reading_HSD_Dispenser_1_Nozle_1: "",
        Closing_Reading_HSD_Dispenser_1_Nozle_2: "",
        Closing_Reading_HSD_Dispenser_2_Nozle_1: "",
        Closing_Reading_HSD_Dispenser_2_Nozle_2: "",
        Closing_Reading_HSD_Dispenser_3_Nozle_1: "",
        Closing_Reading_HSD_Dispenser_3_Nozle_2: "",
        Testing_HSD_Dispenser_1_Nozle_1: "15",
        Testing_HSD_Dispenser_1_Nozle_2: "15",
        Testing_HSD_Dispenser_2_Nozle_1: "15",
        Testing_HSD_Dispenser_2_Nozle_2: "15",
        Testing_HSD_Dispenser_3_Nozle_1: "15",
        Testing_HSD_Dispenser_3_Nozle_2: "15",
      }}
      validationSchema={Yup.object({
        MS: Yup.string().required("Required"),
        HSD: Yup.string().required("Required"),
        MS_DIP: Yup.string().required("Required"),
        HSD_DIP1: Yup.string().required("Required"),
        HSD_DIP2: Yup.string().required("Required"),
        Closing_Reading_MS_Dispenser_1_Nozle_1: Yup.string().required(
          "Required"
        ),
        Closing_Reading_MS_Dispenser_1_Nozle_2: Yup.string().required(
          "Required"
        ),
        Testing_MS_Dispenser_1_Nozle_1: Yup.string().required("Required"),
        Testing_MS_Dispenser_1_Nozle_2: Yup.string().required("Required"),
        Closing_Reading_HSD_Dispenser_1_Nozle_1: Yup.string().required(
          "Required"
        ),
        Closing_Reading_HSD_Dispenser_1_Nozle_2: Yup.string().required(
          "Required"
        ),
        Closing_Reading_HSD_Dispenser_2_Nozle_1: Yup.string().required(
          "Required"
        ),
        Closing_Reading_HSD_Dispenser_2_Nozle_2: Yup.string().required(
          "Required"
        ),
        Closing_Reading_HSD_Dispenser_3_Nozle_1: Yup.string().required(
          "Required"
        ),
        Closing_Reading_HSD_Dispenser_3_Nozle_2: Yup.string().required(
          "Required"
        ),
        Testing_HSD_Dispenser_1_Nozle_1: Yup.string().required("Required"),
        Testing_HSD_Dispenser_1_Nozle_2: Yup.string().required("Required"),
        Testing_HSD_Dispenser_2_Nozle_1: Yup.string().required("Required"),
        Testing_HSD_Dispenser_2_Nozle_2: Yup.string().required("Required"),
        Testing_HSD_Dispenser_3_Nozle_1: Yup.string().required("Required"),
        Testing_HSD_Dispenser_3_Nozle_2: Yup.string().required("Required"),
      })}
      onSubmit={async (values) => {
        fetch("/api/daily", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((res) =>{
            alert(`Volume of MS:${res.Volume_in_MS} 
            Volume of HSD1:${res.Volume_in_HSD_DIP1}
            Volume of HSD2:${res.Volume_in_HSD_DIP1}`)
          });
        // console.log(values);
        // alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <label htmlFor="MS">MS</label>
        <Field name="MS" type="text" />
        <ErrorMessage name="MS" />
        <label htmlFor="HSD">HSD</label>
        <Field name="HSD" type="text" />
        <ErrorMessage name="HSD" />
        <label htmlFor="MS_DIP">MS_DIP</label>
        <Field name="MS_DIP" type="text" />
        <ErrorMessage name="MS_DIP" />
        <label htmlFor="HSD_DIP1">HSD_DIP1</label>
        <Field name="HSD_DIP1" type="text" />
        <ErrorMessage name="HSD_DIP1" />
        <label htmlFor="HSD_DIP2">HSD_DIP2</label>
        <Field name="HSD_DIP2" type="text" />
        <ErrorMessage name="HSD_DIP2" />
        <label htmlFor="Closing_Reading_MS_Dispenser_1_Nozle_1">
          Closing_Reading_MS_Dispenser_1_Nozle_1
        </label>
        <Field name="Closing_Reading_MS_Dispenser_1_Nozle_1" type="text" />
        <ErrorMessage name="Closing_Reading_MS_Dispenser_1_Nozle_1" />
        <label htmlFor="Closing_Reading_MS_Dispenser_1_Nozle_2">
          Closing_Reading_MS_Dispenser_1_Nozle_2
        </label>
        <Field name="Closing_Reading_MS_Dispenser_1_Nozle_2" type="text" />
        <ErrorMessage name="Closing_Reading_MS_Dispenser_1_Nozle_2" />
        <label htmlFor="Testing_MS_Dispenser_1_Nozle_1">
          Testing_MS_Dispenser_1_Nozle_1
        </label>
        <Field name="Testing_MS_Dispenser_1_Nozle_1" type="text" />
        <ErrorMessage name="Testing_MS_Dispenser_1_Nozle_1" />
        <label htmlFor="Testing_MS_Dispenser_1_Nozle_2">
          Testing_MS_Dispenser_1_Nozle_2
        </label>
        <Field name="Testing_MS_Dispenser_1_Nozle_2" type="text" />
        <ErrorMessage name="Testing_MS_Dispenser_1_Nozle_2" />
        <label htmlFor="Closing_Reading_HSD_Dispenser_1_Nozle_1">
          Closing_Reading_HSD_Dispenser_1_Nozle_1
        </label>
        <Field name="Closing_Reading_HSD_Dispenser_1_Nozle_1" type="text" />
        <ErrorMessage name="Closing_Reading_HSD_Dispenser_1_Nozle_1" />
        <label htmlFor="Closing_Reading_HSD_Dispenser_1_Nozle_2">
          Closing_Reading_HSD_Dispenser_1_Nozle_2
        </label>
        <Field name="Closing_Reading_HSD_Dispenser_1_Nozle_2" type="text" />
        <ErrorMessage name="Closing_Reading_HSD_Dispenser_1_Nozle_2" />
        <label htmlFor="Closing_Reading_HSD_Dispenser_2_Nozle_1">
          Closing_Reading_HSD_Dispenser_2_Nozle_1
        </label>
        <Field name="Closing_Reading_HSD_Dispenser_2_Nozle_1" type="text" />
        <ErrorMessage name="Closing_Reading_HSD_Dispenser_2_Nozle_1" />
        <label htmlFor="Closing_Reading_HSD_Dispenser_2_Nozle_2">
          Closing_Reading_HSD_Dispenser_2_Nozle_2
        </label>
        <Field name="Closing_Reading_HSD_Dispenser_2_Nozle_2" type="text" />
        <ErrorMessage name="Closing_Reading_HSD_Dispenser_2_Nozle_2" />
        <label htmlFor="Closing_Reading_HSD_Dispenser_3_Nozle_1">
          Closing_Reading_HSD_Dispenser_3_Nozle_1
        </label>
        <Field name="Closing_Reading_HSD_Dispenser_3_Nozle_1" type="text" />
        <ErrorMessage name="Closing_Reading_HSD_Dispenser_3_Nozle_1" />
        <label htmlFor="Closing_Reading_HSD_Dispenser_3_Nozle_2">
          Closing_Reading_HSD_Dispenser_3_Nozle_2
        </label>
        <Field name="Closing_Reading_HSD_Dispenser_3_Nozle_2" type="text" />
        <ErrorMessage name="Closing_Reading_HSD_Dispenser_3_Nozle_2" />
        <label htmlFor="Testing_HSD_Dispenser_1_Nozle_1">
          Testing_HSD_Dispenser_1_Nozle_1
        </label>
        <Field name="Testing_HSD_Dispenser_1_Nozle_1" type="text" />
        <ErrorMessage name="Testing_HSD_Dispenser_1_Nozle_1" />
        <label htmlFor="Testing_HSD_Dispenser_1_Nozle_2">
          Testing_HSD_Dispenser_1_Nozle_2
        </label>
        <Field name="Testing_HSD_Dispenser_1_Nozle_2" type="text" />
        <ErrorMessage name="Testing_HSD_Dispenser_1_Nozle_2" />
        <label htmlFor="Testing_HSD_Dispenser_2_Nozle_1">
          Testing_HSD_Dispenser_2_Nozle_1
        </label>
        <Field name="Testing_HSD_Dispenser_2_Nozle_1" type="text" />
        <ErrorMessage name="Testing_HSD_Dispenser_2_Nozle_1" />
        <label htmlFor="Testing_HSD_Dispenser_2_Nozle_2">
          Testing_HSD_Dispenser_2_Nozle_2
        </label>
        <Field name="Testing_HSD_Dispenser_2_Nozle_2" type="text" />
        <ErrorMessage name="Testing_HSD_Dispenser_2_Nozle_2" />
        <label htmlFor="Testing_HSD_Dispenser_3_Nozle_1">
          Testing_HSD_Dispenser_3_Nozle_1
        </label>
        <Field name="Testing_HSD_Dispenser_3_Nozle_1" type="text" />
        <ErrorMessage name="Testing_HSD_Dispenser_3_Nozle_1" />
        <label htmlFor="Testing_HSD_Dispenser_3_Nozle_2">
          Testing_HSD_Dispenser_3_Nozle_2
        </label>
        <Field name="Testing_HSD_Dispenser_3_Nozle_2" type="text" />
        <ErrorMessage name="Testing_HSD_Dispenser_3_Nozle_2" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default Daily;
