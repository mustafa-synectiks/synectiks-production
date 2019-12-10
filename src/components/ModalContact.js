import * as React from "react"
// import { Helmet } from "react-helmet"
import { Formik } from "formik"
import * as Yup from "yup"

// const mcontact = {
//   width: "100%",
// }

const ModalContact = () => (
  <Formik
    initialValues={{
      firstname: "",
      lastname: "",
      email: "",
      company: "",
      jobtitle: "",
      country: "",
      contact: "",
      source: "",
      service: "",
      otherservice: "",
      othersource: "",
    }}
    onSubmit={(values, { setSubmitting, resetForm, setStatus }) => {
      setTimeout(() => {
        console.log("Logging in", values)
        resetForm()
        setStatus({
          success: "Thank You ! We will get in touch with you soon.",
        })
        setSubmitting(false)
      }, 500)
    }}
    //********Using Yum for validation********/

    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Email Id is Required")
        // .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/, "Enter valid Email address"),
        .matches(
          " /^([w-.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!abc.com)(?!xyz.com)(?!pqr.com)(?!rediffmail.com)(?!live.com)(?!outlook.com)(?!me.com)(?!msn.com)(?!ymail.com)([w-]+.)+[w-]{2,4})?$/",
          "Enter valid Business Email address"
        ),
      contact: Yup.string()
        .required("No Contact Number  provided.")
        .min(10, "Contact number should be 10 numerics minimum.")
        .matches(
          /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          "Contact number should be 10 numerics"
        ),
      firstname: Yup.string().required("No First Name provided."),
      // .matches(/^[a-zA-Z0-9]+[a-zA-Z0-9]*$/, "Enter your First Name"),
      lastname: Yup.string().required("No Last Name provided."),
      // .matches(/^[a-zA-Z0-9]+[a-zA-Z0-9]*$/, "Enter your Last Name"),
      company: Yup.string().required("No Company Name provided."),
      // .matches(/^[a-zA-Z0-9]+[a-zA-Z0-9]*$/, "Enter your Company Name"),
      jobtitle: Yup.string().required("No Job Title Name provided."),
      // .matches(/^[a-zA-Z0-9]+[a-zA-Z0-9]*$/, "Enter your Job title"),
      country: Yup.string().required("No Country Name provided."),
      // .matches(/^[a-zA-Z0-9]+[a-zA-Z0-9]*$/, "Enter your Country"),
      source: Yup.string()
        .required("No Option selected.")
        .matches(/^[a-zA-Z0-9]+[a-zA-Z0-9]*$/, "Select your option"),
      service: Yup.string()
        .required("No Option selected.")
        .matches(/^[a-zA-Z0-9]+[a-zA-Z0-9]*$/, "Select your option"),
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        status,
      } = props
      return (
        <form
          id="servicecontactform"
          className="py-3"
          onSubmit={handleSubmit}
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
          method="POST"
        >
          <input type="hidden" name="oid" value="00D1I000000kz7k" />
          <div className="modalContact">
            <div className="rows">
              <div>
                <label>First&nbsp;Name</label>
                <input
                  name="firstname"
                  type="text"
                  placeholder="Enter Your First Name"
                  value={values.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.firstname && touched.firstname && "error"}
                />
                {errors.firstname && touched.firstname && (
                  <div className="input-feedback">{errors.firstname}</div>
                )}
              </div>
              <div>
                <label>Last&nbsp;Name</label>
                <input
                  name="lastname"
                  type="text"
                  placeholder="Enter Your Last Name"
                  value={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.lastname && touched.lastname && "error"}
                />
                {errors.lastname && touched.lastname && (
                  <div className="input-feedback">{errors.lastname}</div>
                )}
              </div>
            </div>
            <div className="rows">
              <div className="mcf">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  type="text"
                  placeholder="Enter Your Business Email Address"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email && "error"}
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
              </div>
            </div>
            <div className="rows">
              <div>
                <label>Select&nbsp;Company</label>
                <input
                  name="company"
                  type="text"
                  placeholder="Enter Your Company Name"
                  value={values.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.company && touched.company && "error"}
                />
                {errors.company && touched.company && (
                  <div className="input-feedback">{errors.company}</div>
                )}
              </div>
              <div>
                <label>Job Title</label>
                <input
                  name="jobtitle"
                  type="text"
                  placeholder="Enter Your Job Title"
                  value={values.jobtitle}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.jobtitle && touched.jobtitle && "error"}
                />
                {errors.jobtitle && touched.jobtitle && (
                  <div className="input-feedback">{errors.jobtitle}</div>
                )}
              </div>
            </div>
            <div className="rows">
              <div>
                <label>Contact Number</label>
                <input
                  name="contact"
                  type="tel"
                  placeholder="Enter Your Contact Number"
                  value={values.contact}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.contact && touched.contact && "error"}
                />
                {errors.contact && touched.contact && (
                  <div className="input-feedback">{errors.contact}</div>
                )}
              </div>
              <div>
                <label>Country/Region</label>
                <input
                  name="country"
                  type="text"
                  placeholder="Enter Your Country/Region"
                  value={values.country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.country && touched.country && "error"}
                />
                {errors.country && touched.country && (
                  <div className="input-feedback">{errors.country}</div>
                )}
              </div>
            </div>
            <div className="rows">
              <div>
                <label>Select&nbsp;Source</label>
                <select
                  name="source"
                  id=""
                  value={values.source}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.source && touched.source && "error"}
                >
                  <option value="" className="bg-logoblue text-white">
                    &nbsp;Contact&nbsp;Source
                  </option>
                  <option value="Advertisement">&nbsp;Advertisement</option>
                  <option value="CustomerEvent">
                    &nbsp;Customer&nbsp;Event
                  </option>
                  <option value="EmployeeReferral">
                    &nbsp;Employee&nbsp;Referral
                  </option>
                  <option value="GoogleAdwords">
                    &nbsp;Google&nbsp;Adwords
                  </option>
                  <option value="Partner">&nbsp;Partner</option>
                  <option value="PurchasedList">
                    &nbsp;Purchased&nbsp;List
                  </option>
                  <option value="TradeShow">&nbsp;Trade&nbsp;Show</option>
                  <option value="Webinar">&nbsp;Webinar</option>
                  <option value="Website">&nbsp;Website</option>
                  <option value="Othersource" id="othersrc">
                    &nbsp;Other
                  </option>
                </select>
                <textarea
                  form="input"
                  id="othersource"
                  style={{ display: "none" }}
                  placeholder="Enter your source here..."
                  name="othersource"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.othersource}
                  className={
                    errors.othersource && touched.othersource && "error"
                  }
                ></textarea>
                {errors.source && touched.source && (
                  <div className="input-feedback">{errors.source}</div>
                )}
              </div>
              <div>
                <label>Select&nbsp;Service</label>
                <select
                  name="service"
                  value={values.service}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.service && touched.service && "error"}
                >
                  >
                  {/* <option value="enterprise" className="bg-logoblue text-white">&nbsp;Select&nbsp;Service</option> */}
                  <option value="" className="bg-logoblue text-white">
                    &nbsp;Select&nbsp;Service
                  </option>
                  <option value="Cloud">&nbsp;Cloud</option>
                  <option value="EnterpriseTransformation">
                    &nbsp;Enterprise&nbsp;Transformation
                  </option>
                  <option value="Foundation">&nbsp;Foundation</option>
                  <option value="MigrationDeployment">
                    &nbsp;Migration&nbsp;&amp;&nbsp;Deployment
                  </option>
                  <option value="Operations">&nbsp;Operations</option>
                  <option value="Optimization">&nbsp;Optimization</option>
                  <option value="Others">&nbsp;Others</option>
                </select>
                <textarea
                  form="input"
                  id="otherservice"
                  style={{ display: "none" }}
                  placeholder="Enter required service here..."
                  name="otherservice"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.otherservice}
                  className={
                    errors.otherservice && touched.otherservice && "error"
                  }
                ></textarea>
                {errors.otherservice && touched.otherservice && (
                  <div className="input-feedback">{errors.otherservice}</div>
                )}
                {errors.service && touched.service && (
                  <div className="input-feedback">{errors.service}</div>
                )}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn  bg-green text-white fright mt-3"
            disabled={isSubmitting}
          >
            Submit
          </button>
          <div className="text-center text-logoblue pt-3">
            <h3>{status ? status.success : ""}</h3>
          </div>
        </form>
      )
    }}
  </Formik>
)

export default ModalContact
