import React from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import "./daily.css"
import * as Yup from "yup"
import { DatePickerField } from "./components/DatePicker"
import "react-datepicker/dist/react-datepicker.css"

const Daily = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  // const [startDate, setStartDate] = useState(new Date())
  return (
    <div className={"Dailyform"}>
      <h1>Daily Data Entry</h1>
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
          date: Date.now(),
        }}
        validationSchema={Yup.object({
          MS: Yup.number()
            .typeError("Number is Required")
            .required("Required")
            .positive("Cannot be Negative"),
          HSD: Yup.number()
            .typeError("Number is Required")
            .required("Required")
            .positive("Cannot be Negative"),
          MS_DIP: Yup.number()
            .typeError("Number is Required")
            .required("Required")
            .positive("Cannot be Negative"),
          HSD_DIP1: Yup.number()
            .typeError("Number is Required")
            .required("Required")
            .positive("Cannot be Negative"),
          HSD_DIP2: Yup.number()
            .typeError("Number is Required")
            .required("Required")
            .positive("Cannot be Negative"),
          Closing_Reading_MS_Dispenser_1_Nozle_1: Yup.string().required(
            "Required"
          ),
          Closing_Reading_MS_Dispenser_1_Nozle_2: Yup.string().required(
            "Required"
          ),
          Testing_MS_Dispenser_1_Nozle_1: Yup.number()
            .typeError("Number is Required")
            .required("Required")
            .positive("Cannot be Negative"),
          Testing_MS_Dispenser_1_Nozle_2: Yup.number()
            .typeError("Number is Required")
            .required("Required")
            .positive("Cannot be Negative"),
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
          Testing_HSD_Dispenser_1_Nozle_1: Yup.number()
            .typeError("Number is Required")
            .required("Required")
            .positive("Cannot be Negative"),
          Testing_HSD_Dispenser_1_Nozle_2: Yup.number()
            .typeError("Number is Required")
            .required("Required")
            .positive("Cannot be Negative"),
          Testing_HSD_Dispenser_2_Nozle_1: Yup.number()
            .typeError("Number is Required")
            .required("Required")
            .positive("Cannot be Negative"),
          Testing_HSD_Dispenser_2_Nozle_2: Yup.number()
            .typeError("Number is Required")
            .required("Required")
            .positive("Cannot be Negative"),
          Testing_HSD_Dispenser_3_Nozle_1: Yup.number()
            .typeError("Number is Required")
            .required("Required")
            .positive("Cannot be Negative"),
          Testing_HSD_Dispenser_3_Nozle_2: Yup.number()
            .typeError("Number is Required")
            .required("Required")
            .positive("Cannot be Negative"),
        })}
        onSubmit={async values => {
          fetch("/api/daily", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then(res => res.json())
            .then(res => {
              alert(`Volume of MS:${res.Volume_in_MS} 
            Volume of HSD1:${res.Volume_in_HSD_DIP1}
            Volume of HSD2:${res.Volume_in_HSD_DIP1}`)
            })
        }}
      >
        <Form>
          <div className={"row"}>
            <label htmlFor="date">Date</label>
            <DatePickerField name="date" />
          </div>
          <div className={"row"}>
            <div>
              <label htmlFor="MS">MS</label>
              <Field name="MS" type="text" />
              <ErrorMessage name="MS" />
            </div>
            <div>
              <label htmlFor="HSD">HSD</label>
              <Field name="HSD" type="text" />
              <ErrorMessage name="HSD" />
            </div>
          </div>
          <div className={"row"}>
            <div>
              <label htmlFor="MS_DIP">MS DIP</label>
              <Field name="MS_DIP" type="text" />
              <ErrorMessage name="MS_DIP" />
            </div>
            <div>
              <label htmlFor="HSD_DIP1">HSD DIP1</label>
              <Field name="HSD_DIP1" type="text" />
              <ErrorMessage name="HSD_DIP1" />
            </div>
            <div>
              <label htmlFor="HSD_DIP2">HSD DIP2</label>
              <Field name="HSD_DIP2" type="text" />
              <ErrorMessage name="HSD_DIP2" />
            </div>
          </div>
          <div className={"row"}>
            <div className={"rowChild"}>
              <div>
                <div>
                  <label htmlFor="Closing_Reading_MS_Dispenser_1_Nozle_1">
                    Closing Reading MS Dispenser 1 Nozle 1
                  </label>
                  <Field
                    name="Closing_Reading_MS_Dispenser_1_Nozle_1"
                    type="text"
                  />
                  <ErrorMessage name="Closing_Reading_MS_Dispenser_1_Nozle_1" />
                </div>
                <div>
                  <label htmlFor="Closing_Reading_MS_Dispenser_1_Nozle_2">
                    Closing Reading MS Dispenser 1 Nozle 2
                  </label>
                  <Field
                    name="Closing_Reading_MS_Dispenser_1_Nozle_2"
                    type="text"
                  />
                  <ErrorMessage name="Closing_Reading_MS_Dispenser_1_Nozle_2" />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="Testing_MS_Dispenser_1_Nozle_1">
                    Testing MS Dispenser 1 Nozle 1
                  </label>
                  <Field name="Testing_MS_Dispenser_1_Nozle_1" type="text" />
                  <ErrorMessage name="Testing_MS_Dispenser_1_Nozle_1" />
                </div>
                <div>
                  <label htmlFor="Testing_MS_Dispenser_1_Nozle_2">
                    Testing MS Dispenser 1 Nozle 2
                  </label>
                  <Field name="Testing_MS_Dispenser_1_Nozle_2" type="text" />
                  <ErrorMessage name="Testing_MS_Dispenser_1_Nozle_2" />
                </div>
              </div>
            </div>
            <div className={"rowChild"}>
              <div>
                <div>
                  <label htmlFor="Closing_Reading_HSD_Dispenser_1_Nozle_1">
                    Closing Reading HSD Dispenser 1 Nozle 1
                  </label>
                  <Field
                    name="Closing_Reading_HSD_Dispenser_1_Nozle_1"
                    type="text"
                  />
                  <ErrorMessage name="Closing_Reading_HSD_Dispenser_1_Nozle_1" />
                </div>
                <div>
                  <label htmlFor="Closing_Reading_HSD_Dispenser_1_Nozle_2">
                    Closing Reading HSD Dispenser 1 Nozle 2
                  </label>
                  <Field
                    name="Closing_Reading_HSD_Dispenser_1_Nozle_2"
                    type="text"
                  />
                  <ErrorMessage name="Closing_Reading_HSD_Dispenser_1_Nozle_2" />
                </div>
                <div>
                  <label htmlFor="Closing_Reading_HSD_Dispenser_2_Nozle_1">
                    Closing Reading HSD Dispenser 2 Nozle 1
                  </label>
                  <Field
                    name="Closing_Reading_HSD_Dispenser_2_Nozle_1"
                    type="text"
                  />
                  <ErrorMessage name="Closing_Reading_HSD_Dispenser_2_Nozle_1" />
                </div>
                <div>
                  <label htmlFor="Closing_Reading_HSD_Dispenser_2_Nozle_2">
                    Closing Reading HSD Dispenser 2 Nozle 2
                  </label>
                  <Field
                    name="Closing_Reading_HSD_Dispenser_2_Nozle_2"
                    type="text"
                  />
                  <ErrorMessage name="Closing_Reading_HSD_Dispenser_2_Nozle_2" />
                </div>
                <div>
                  <label htmlFor="Closing_Reading_HSD_Dispenser_3_Nozle_1">
                    Closing Reading HSD Dispenser 3 Nozle 1
                  </label>
                  <Field
                    name="Closing_Reading_HSD_Dispenser_3_Nozle_1"
                    type="text"
                  />
                  <ErrorMessage name="Closing_Reading_HSD_Dispenser_3_Nozle_1" />
                </div>
                <div>
                  <label htmlFor="Closing_Reading_HSD_Dispenser_3_Nozle_2">
                    Closing Reading HSD Dispenser 3 Nozle 2
                  </label>
                  <Field
                    name="Closing_Reading_HSD_Dispenser_3_Nozle_2"
                    type="text"
                  />
                  <ErrorMessage name="Closing_Reading_HSD_Dispenser_3_Nozle_2" />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="Testing_HSD_Dispenser_1_Nozle_1">
                    Testing HSD Dispenser 1 Nozle 1
                  </label>
                  <Field name="Testing_HSD_Dispenser_1_Nozle_1" type="text" />
                  <ErrorMessage name="Testing_HSD_Dispenser_1_Nozle_1" />
                </div>
                <div>
                  <label htmlFor="Testing_HSD_Dispenser_1_Nozle_2">
                    Testing HSD Dispenser 1 Nozle 2
                  </label>
                  <Field name="Testing_HSD_Dispenser_1_Nozle_2" type="text" />
                  <ErrorMessage name="Testing_HSD_Dispenser_1_Nozle_2" />
                </div>
                <div>
                  <label htmlFor="Testing_HSD_Dispenser_2_Nozle_1">
                    Testing HSD Dispenser 2 Nozle 1
                  </label>
                  <Field name="Testing_HSD_Dispenser_2_Nozle_1" type="text" />
                  <ErrorMessage name="Testing_HSD_Dispenser_2_Nozle_1" />
                </div>
                <div>
                  <label htmlFor="Testing_HSD_Dispenser_2_Nozle_2">
                    Testing HSD Dispenser 2 Nozle 2
                  </label>
                  <Field name="Testing_HSD_Dispenser_2_Nozle_2" type="text" />
                  <ErrorMessage name="Testing_HSD_Dispenser_2_Nozle_2" />
                </div>
                <div>
                  <label htmlFor="Testing_HSD_Dispenser_3_Nozle_1">
                    Testing HSD Dispenser 3 Nozle 1
                  </label>
                  <Field name="Testing_HSD_Dispenser_3_Nozle_1" type="text" />
                  <ErrorMessage name="Testing_HSD_Dispenser_3_Nozle_1" />
                </div>
                <div>
                  <label htmlFor="Testing_HSD_Dispenser_3_Nozle_2">
                    Testing HSD Dispenser 3 Nozle 2
                  </label>
                  <Field name="Testing_HSD_Dispenser_3_Nozle_2" type="text" />
                  <ErrorMessage name="Testing_HSD_Dispenser_3_Nozle_2" />
                </div>
              </div>
            </div>
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}
Daily.whyDidYouRender = true
export default Daily
