import * as React from "react"
import Microservicemain from "../../images/Microservicesmain.jpg"
import Microservice2 from "../../images/Microservice_2.png"
import Layout from "../../components/layout"

export class Microserviceexample extends React.Component {
  render() {
    return (
      <Layout>
        <div className="bg-lightgrey text-justify container">
          <div className="w-100">
            <img
              height="auto"
              width="100%"
              className=""
              src={Microservicemain}
              alt="Devopsmain Services"
            />
          </div>

          <div className="px-5">
            <div className="pb-3">
              <a href="/microservices/index.html">
                <button className="btn text-white bg-logoblue btnLearn">
                  <span className="fa fa-angle-double-left"></span>&nbsp;Back to
                  Microservices
                </button>
              </a>
            </div>
            <h2>Example</h2>
            <p className="lineHeight-24">
              Say a Travel &amp; Tourism business have major functionalities
              like Booking/CRM/Finance/Service
              Desk/Analytics/Recommendation/Ratings/Reviews, some AI/ML... and
              most of them have some basic features like Session/Preference
              Config Management/workflows/content (Attachments &amp; Text/wiki
              content)/search/ session/notification. If we maintain a single
              business application with all those functionalities bundled inside
              one installer, having 500+ people team manage the entire product,
              you will gradually find that you would face challenges to meet the
              business agility, the entire team will mostly be spent time in
              regression and emails. It makes a lot of sense to maintain a
              separate small team which is end to end responsible for booking
              functionality which in turn uses some common services like
              search/config/workflows/content/session/notification) and deliver
              independent releases.
            </p>
            <p>The typical product component diagram will be as follows:</p>
            <div className="w-40 p-5 text-center bg-white border-grey-2px">
              <img
                className="imgBx"
                src={Microservice2}
                width="75%"
                alt="DevOps Transformation"
              />{" "}
            </div>
          </div>
          <div className="py-3 px-5">
            <a href="/microservices/index.html">
              <button className="btn text-white bg-logoblue btnLearn">
                <span className="fa fa-angle-double-left"></span>&nbsp;Back to
                Microservices
              </button>
            </a>
          </div>
        </div>
      </Layout>
    )
  }
}
export default Microserviceexample
