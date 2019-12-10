import * as React from "react"
import Microservicesmain from "../../images/Microservicesmain.jpg"
import Microservices3 from "../../images/Microservice_3.png"
import Layout from "../../components/layout"

export class Microservicebenefit extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Layout>
        <div className="bg-lightgrey text-justify">
          <div className="w-100">
            <img
              height="auto"
              width="100%"
              className=""
              src={Microservicesmain}
              alt="Devopsmain Services"
            />
          </div>

          <div className="container">
            <div className="pb-3">
              <a href="/microservices/index.html">
                <button className="btn text-white bg-logoblue btnLearn">
                  <span className="fa fa-angle-double-left"></span>&nbsp;Back to
                  Microservices
                </button>
              </a>
            </div>

            <h4>Key Benefits of Microservices</h4>
            <div className="d-flex col-lg-12 lineHeight-34 flex-col pt-3">
              <div className="col-sm-6">
                <ul>
                  <h5>Product Quality:</h5>
                  <li>
                    <b>Optimize Scalability</b>: React fluidly with smaller,
                    self-contained components
                  </li>
                  <li>
                    <b>Achieve High Quality</b>: Continuously and confidently
                    develop and test
                  </li>
                  <li>
                    <b>Maximize Resource Utilization</b>: Utilize containers for
                    efficient infrastructure consumption
                  </li>
                  <li>
                    <b>Minimize Downtime</b>: Perform isolated maintenance
                  </li>
                  <li>
                    <b>Increase Reuse and Decrease Overhead</b>: Encourage
                    sharing on API driven architecture
                  </li>
                </ul>
              </div>

              <div className="col-sm-6">
                <ul>
                  <h5>Process &amp; Culture:</h5>
                  <li>
                    <b>Streamline Feature Development</b>: Sprint faster to keep
                    up with changing needs
                  </li>
                  <li>
                    <b>Increase Innovation</b>: Reorganize into domain specific,
                    end-to-end service teams
                  </li>
                  <li>
                    <b>Avoid Tool/Expertise Lock-in</b>: Choose the best
                    technique/technology for the specific problem
                  </li>
                  <li>
                    <b>Adopt Existing Third-party Tools</b>: Integrate easily
                    into API driven ecosystems
                  </li>
                  <li>
                    <b>Grow User Base/Expand Market</b>: Extend capabilities to
                    external parties
                  </li>
                  <li>
                    <b>Enable Business Consumption</b>: Solve small problems
                    with measurable outcomes
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-40 p-5 text-center">
              <img
                className="imgBx"
                src={Microservices3}
                width="75%"
                alt="DevOps Transformation"
              />{" "}
            </div>
            <p className="lineHeight-24">
              Maintaining monolithic applications often proves challenging
              because it’s difficult to test and release millions of lines of
              code for tiny changes (in most cases only a few lines). But
              migrating to microservices is not as simple as it sounds. It
              requires a big change management process that often includes new
              team structures (to say nothing of altering the mindset of the
              organization!). To support the approach, technology stack must
              also be upgraded. In the microservices scheme, an application is
              built with a modular approach, making it scalable and easier to
              deploy. With the right tools, governance and automation in place,
              updates come much easier.
              <br />{" "}
            </p>
            <p>
              While Monolith has complexity in codebase, microservices poses the
              complexity of interaction between many services.
            </p>
            <br />
          </div>

          <div className="pb-3 px-5">
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

export default Microservicebenefit
