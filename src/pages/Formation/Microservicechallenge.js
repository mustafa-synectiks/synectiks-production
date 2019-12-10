import * as React from "react"
import Microservicesmain from "../../images/Microservicesmain.jpg"
import Microservice7 from "../../images/Microservice_7.png"
import Microservice8 from "../../images/Microservice_8.png"
import Microservice9 from "../../images/Microservice_9.png"
import Layout from "../../components/layout"
export class Microservicechallenge extends React.Component {
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

            <h4>Key Challenges of Microservices:</h4>

            <div className="d-flex px-5 py-3 flex-col text-center col-lg-12">
              <div className="p-3 m-1 col-md-4 border-grey-2px text-center">
                <div className="w-100 ">
                  <p className="borderbtm-grey-1px">
                    <b>Cultural Challenges</b>
                  </p>
                  <p className=" text-left lineHeight-34">
                    <ul>
                      <li>You built, you run it</li>
                    </ul>
                  </p>
                </div>
              </div>

              <div className="p-3 m-1 col-md-4 border-grey-2px text-center">
                <div className="w-100 ">
                  <p className="borderbtm-grey-1px">
                    <b>Architectural Challenges</b>
                  </p>
                  <p className="text-left lineHeight-34">
                    <ul>
                      <li>Dealing with asynchronicity</li>
                      <li>Cascading Failures</li>
                      <li>Discovery and Authentication of Services</li>
                      <li>Integration Tests</li>
                    </ul>
                  </p>
                </div>
              </div>

              <div className="p-3 m-1 col-md-4 border-grey-2px text-center">
                <div className="w-100 ">
                  <p className="borderbtm-grey-1px">
                    <b>Operational Challenges</b>
                  </p>
                  <p className=" text-left lineHeight-34">
                    <ul>
                      <li>Duplication of processes and tools</li>
                      <li>Complexity moves from components to interactions</li>
                      <li>Debugging across components</li>
                      <li>Deployment</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>

            <p className="lineHeight-24">
              Thankfully, current cloud-based distributed technologies alleviate
              the burden of managing monolithic applications by providing a
              platform to develop and deploy on a dime.
            </p>
            <p className="lineHeight-24">
              Three key Technology Drivers to Address Microservices Challenges:
            </p>
            <br />
            <h4>Hardware Aggregation:</h4>
            <br />
            <p className="lineHeight-24">
              As you refactor one large monolith application into multiple
              independent services with their own services and data layer, you
              probably would end up having 25+ services, 50+ databases (Cache,
              Relational, NoSQL, Graph, Bigtable, Bigdata). Having them to
              deploy in Discrete Hardware (server by server), the deployment
              complexity itself will multiply to 50X at least. So, you
              essentially need to aggregate the hardware, say you aggregate your
              Compute/Network/Storage so that it looks like ONE big unit with
              combined capacity and you keep deploying your services &amp;
              databases inside that aggregated cluster transparent of underlying
              Compute/Network/Storage. Thankfully, current cloud-based
              distributed technologies offer many avenues to aggregate hardware
              across data centers and geographies.
            </p>
            <br />
            <h4>Containerization &amp; Continuous Delivery:</h4>
            <br />
            <p className="lineHeight-24">
              As you transform monolith to microservices, your big X become 100
              small x. If you deploy those 100 x as layered stack in discrete
              servers in different way, your deployment complexity would
              multiply to 1000X. To address this challenge, you definitely need
              to unify the delivery of services, make sure your services are
              delivered in same way and they are staged to production
              environment through some stringent quality gates. To unify the
              delivery of multiple services in same way, Containerization play a
              big role and Containers along with Continuous Delivery channel
              brings down your 1000X complexity to a factor of X.
            </p>
            <br />
            <h4>Operation Automation:</h4>
            <br />
            <p className="lineHeight-24">
              An ideal microservices hosting platform is based on geographically
              spanned cluster and hardware agnostic. While this platform
              alleviates the burden of managing many servers, operating systems
              etc., it brings a new set of operational challenges like
              debugging, logs tracing, many processes and tools running for
              single application. The operation management paradigm is shifted
              from managing Compute/Network/Storage and operating system to
              managing geographically distributed clusters and services
              management, their interaction. Thankfully, current cloud-based
              service discovery and cluster wide operation management
              technologies offer avenues to aggregate those operational
              challenges.
            </p>
            <br />
            <p className="lineHeight-24">
              Essentially in a microservices ecosystem, you will aggregate,
              extent &amp; automate. You will aggregate your hardware across
              DC’s and geographies, develop microservices, bigdata, IOT
              applications based on libraries and reusable services and continue
              to do cluster and services automation toward running everything in
              auto pilot mode.
            </p>
            <div className="w-40 p-5 text-center">
              <img
                className="imgBx"
                src={Microservice7}
                width="75%"
                alt="DevOps Transformation"
              />
            </div>
            <div className="w-40 p-5 text-center">
              <img
                className="imgBx"
                src={Microservice8}
                width="75%"
                alt="DevOps Transformation"
              />
            </div>
            <p className="lineHeight-24">
              <h2>One Key Cultural Driver</h2>
              <br />
              <p>
                {" "}
                Simply speaking the microservice world is <br />
                “Solve small problems, with small teams with measurable outcomes
                vs solving 1 big problem with 1 large team.”
                <br />
              </p>
              <p>
                {" "}
                Since its small teams being responsible for end to end success,
                it’s much essential to establish a culture that
                <br />
                “You built it, you run it”. Dev &amp; Ops married, become
                DevOps.
                <br />{" "}
              </p>
              <p>
                {" "}
                It means each employee are skilled to Develop small services and
                able to maintain its complete lifecycle. That involves a big
                change in structure &amp; skills of the organization. Most of
                the microservices adoption will be successful if this cultural
                transformation is done right, we opine that it contributes 90%
                towards your success. A typical culturally changed organization
                will look like as below:
              </p>
            </p>

            <div className="w-40 p-5 text-center">
              <img
                className="imgBx"
                src={Microservice9}
                width="75%"
                alt="DevOps Transformation"
              />{" "}
            </div>
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

export default Microservicechallenge
