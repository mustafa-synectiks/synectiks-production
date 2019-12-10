import * as React from "react"
import { Helmet } from "react-helmet"
import ModalContact from "../../components/ModalContact"
import { Modal, ModalHeader, ModalBody } from "reactstrap"
import Layout from "../../components/layout"
import Devopsmain from "../../images/Devopsmain.jpg"
import Microservice from "../../images/Microservice_9.png"
import DevopsMaturity from "../../images/Devops_Maturity.png"
import Devopsscale from "../../images/Devopsscale.png"
import Devopssecurity from "../../images/Devopssecurity.png"
import Devopsspeed from "../../images/Devopsspeed.png"
import devops from "../../images/Devops.png"

export class Devops extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modal: false,
      fields: {},
      errors: {},
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }))
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  handleValidation() {
    let fields = this.state.fields
    let errors = {}
    let formIsValid = true

    if (!fields["email"]) {
      formIsValid = false
      errors["email"] = "Cannot be empty"
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@")
      let lastDotPos = fields["email"].lastIndexOf(".")

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false
        errors["email"] = "Email is not valid"
      }
    }

    this.setState({ errors: errors })
    return formIsValid
  }

  contactSubmit(e) {
    e.preventDefault()
    if (this.handleValidation()) {
      alert("Form submitted")
    } else {
      alert("Form has errors.")
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields
    fields[field] = e.target.value
    this.setState({ fields })
  }

  render() {
    return (
      <Layout>
        <div className="bg-lightgrey">
          <div className="w-100">
            <img
              height="auto"
              width="101%"
              className=""
              src={Devopsmain}
              alt="Devopsmain Services"
            />
          </div>
          <div class="container">
            <div className="text-center">
              <h4>
                <i>Transformation for Todays Digital Business!</i>
              </h4>
            </div>
            <div className="pt-3">
              <p className="lineHeight-24 text-justify">
                Enterprises looking for modernization of their legacy stack and
                operate to faster and competitive way, can use SYNECTIKS - Open
                Platform to bring the cultural transformation and agility needed
                for today’s business. Whether it is a new business application
                or transformation of legacy applications, our open platform
                coupled with our experience and expertise accelerates the
                project execution @50% time &amp; cost.
              </p>
              <p className="lineHeight-24 text-justify">
                <i>
                  “DevOps is the combination of cultural philosophies, practices
                  and tools that increase an organization’s ability to deliver
                  applications and services at high velocity: evolving and
                  improving products at a faster pace than organizations using
                  traditional software development and infrastructure management
                  processes. This speed enables organizations to better serve
                  their customers and compete more effectively in the market.”
                </i>
              </p>
            </div>
            <div className="pt-3" data-aos="fade-up" data-aos-duration="2000">
              <h4>Technology Transformation:</h4>
              <p className="lineHeight-24 text-justify">
                SYNECTIKS build the most powerful open product that helps
                customers to provision resources across clouds in complete
                Software-Defined way and deliver modern Container and FAAS
                driven workloads on it. The platform take care of Continuous
                Delivery, Test Automation, Continuous Security, Continuous
                Compliance and does Continuous Automation to make sure the
                workload runs seamlessly with the highest security, performance,
                scalability and availability.
              </p>
              <div className="d-flex justify-content-around align-items-center flex-col">
                <div className="">
                  <img
                    src={devops}
                    width="100%"
                    alt="DevOps  Transformation"
                    className="imgBx"
                  />{" "}
                </div>
              </div>
              <p className="lineHeight-24 pt-3 text-justify">
                <i>
                  “Over 85% of enterprise IT organizations will commit to
                  multi-cloud architectures by 2018, IDC. End User experience,
                  Security, Agility, Flexibility, Consumption Based pricing are
                  most important five priorities for CIO’s today. Synectiks is
                  one of very few technology companies, who delivers managed
                  services on advanced technologies backed by an open xformation
                  platform that accelerates your DevOps transformation journey
                  @50% time &amp; cost.”
                </i>
              </p>
            </div>

            <div className=" py-3" data-aos="fade-up" data-aos-duration="2000">
              <h4 className="px-5 pb-3">Cultural Transformation:</h4>
              <div className="text-center bg-night imgBx">
                <img
                  src={Microservice}
                  width="75%"
                  alt="Cultural Transformation"
                />{" "}
              </div>
              <p
                className="lineHeight-24 px-5 pt-5 text-justify"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <h4>Why Transformation Matter?</h4>
                <br />
                Competition, new products and continuing pressure to monetize
                older services severely taxing many businesses driven by legacy
                applications and infrastructure. To maintain competitive edge in
                a highly dynamic market, business need to re-imagine the
                customer experience in lower economics. Synectiks xformation
                platform can help with the rapid development and delivery of
                microservices oriented applications across clouds and
                geographies, address operational complexity and the need for
                monitoring/tracing/resilience. Modernize your legacy application
                and infrastructure with ease and speed with our open platform.
              </p>
              <p
                className="px-5 text-justify"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Ensuring that you stay ahead of race and keep disrupting by
                adopting most modern technologies intelligently and effectively,
                requires a managed services partner who understand your
                requirements for:
              </p>
            </div>

            <div
              className="d-flex  px-5 py-2 flex-col text-center col-lg-12"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="p-3 m-1 col-sm-4 text-center border-grey-2px">
                <div className=" ">
                  <img
                    height="auto"
                    width="50%"
                    className="pb-3"
                    src={Devopsspeed}
                    alt="Devopsspeed"
                  />
                  <p>
                    <b>SPEED</b>
                  </p>
                  <p className="">
                    Introduction of New products or transforming your existing
                    legacy monolith applications to microservices faster while
                    maintaining Operational Control and Customer Visibility.
                  </p>
                </div>
              </div>
              <div className="p-3 m-1 col-sm-4 text-center border-grey-2px">
                <div className="">
                  <img
                    height="auto"
                    width="50%"
                    className="pb-3"
                    src={Devopsscale}
                    alt="Devopsscale"
                  />
                  <p>
                    <b>SCALE</b>
                  </p>
                  <p className="">
                    Grow cost-effectively to meet new organizational and
                    business requirements across the enterprise using a highly
                    scalable architecture that can distribute the workloads
                    across clouds, enables hybrid cloud adoption with maximum
                    security and highest flexibility.
                  </p>
                </div>
              </div>
              <div className="p-3 m-1 col-sm-4 text-center border-grey-2px">
                <div className=" ">
                  <img
                    height="auto"
                    width="30%"
                    className="pb-3"
                    src={Devopssecurity}
                    alt="Devopssecurity"
                  />
                  <p>
                    <b>SECURITY</b>
                  </p>
                  <p className="">
                    Provision and Manage infrastructure, application services in
                    complete software-defined way with maximum automation so
                    that you never fall into security loopholes. Enables
                    Continuous Audit, Continuous Security/Compliance to have
                    real time checks and visibility on security guidelines.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="px-5 pt-3"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h4>Traditional Vs Multi-Cloud, Hybrid System</h4>
            </div>

            <div
              className="d-flex px-5 py-3 flex-col text-center col-lg-12"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="p-3 m-1 col-md-6 border-grey-2px text-center">
                <div className="w-100 ">
                  <p className="borderbtm-grey-1px">
                    <b>Traditional System</b>
                  </p>
                  <p>
                    99% application doesn’t scale, manual configuration, 50%
                    time spent on repeated activities, lack of flexibility to
                    move &amp; migrate, Vendor locks, absence of real-time
                    monitoring, infinite mails, 90% unused hardware.
                  </p>
                </div>
              </div>

              <div className="p-3 m-1 col-md-6 border-grey-2px text-center">
                <div className="w-100 ">
                  <p className="borderbtm-grey-1px">
                    <b>Multi-Cloud, Hybrid System</b>
                  </p>
                  <p>
                    SYNECTIKS Xformation platform gives you the flexibility to
                    craft your high performant hybrid cloud in most secure way.
                    Run your workloads and might as well use some native
                    services in private cloud space. Our Open Platform helps to
                    orchestrate Container delivery platform in any cloud
                    strategy, be it Private, Public or Hybrid.
                  </p>
                </div>
              </div>
            </div>

            <p
              className="px-5 pt-3 lineHeight-24 text-justify"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              To leverage the lower TCO, performance and scalability, security
              and compliance, there is a need to operate in complete
              software-defined way, reduce CAPEX and OPEX significantly,
              aggregate and optimize resources across clouds to run any
              workloads in most secure way.
            </p>

            <div
              className="px-5 pt-3"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h4 className="">Key Benefits</h4>
            </div>

            <div
              className="d-flex px-5 py-3 flex-col text-center col-lg-12"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="p-3 m-1 col-md-3 border-grey-2px text-center">
                <div className="w-100 ">
                  <p className="borderbtm-grey-1px">
                    <b>Maximum Flexibility</b>
                  </p>
                  <p className="">
                    Synectiks Xformation platform coupled with its cross-cloud
                    infrastructure delivers the maximum flexibility to run/move
                    your high performant workloads across clouds and manage them
                    through a single pane of glass.
                  </p>
                </div>
              </div>

              <div className="p-3 m-1 col-md-3 border-grey-2px text-center">
                <div className="w-100 ">
                  <p className="borderbtm-grey-1px">
                    <b>Faster Delivery</b>
                  </p>
                  <p className="">
                    Synectiks Xformation platform enabled infrastructure and
                    application provisioning is complete software defined manner
                    with regulatory compliant architectures. The existing assets
                    and best practices enable project delivery in weeks than
                    months.
                  </p>
                </div>
              </div>

              <div className="p-3 m-1 col-md-3 border-grey-2px text-center">
                <div className="w-100 ">
                  <p className="borderbtm-grey-1px">
                    <b>Better Quality</b>
                  </p>
                  <p className="">
                    Through Synectiks Xformation platform, you can continuously
                    delivering containerized and serverless microservices
                    verified through stringent quality gates that run across
                    clouds and geographies ensuring 100% availability and
                    maximum performance.
                  </p>
                </div>
              </div>

              <div className="p-3 m-1 col-md-3 border-grey-2px text-center">
                <div className="w-100 ">
                  <p className="borderbtm-grey-1px">
                    <b>Lower Costs</b>
                  </p>
                  <p className="">
                    Everything software-defined and maximum automation ensure
                    lowest TCO. A successful Digital Modernization project
                    delivers 10X agility, 30X reliability and 10X operational
                    efficiency. At least 50% TCO reduction due to 80%
                    operations, 50% hardware and 100% license cost savings.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="px-5 pt-3 lineHeight-24"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h4 className="pb-3">
                Where do you find your current DevOps Maturity!
              </h4>
              <div className="text-center pb-3">
                <img
                  src={DevopsMaturity}
                  width="75%"
                  alt="DevOps Maturity"
                  className="imgBx"
                />
              </div>
              <p>Want to Asses in Detail?</p>
              <p>
                <a
                  className="navlink navfont noLine text-logoblue cursPoint"
                  href="https://synectiks.com/contactus/index.html"
                >
                  <small>Contact&nbsp;Us&nbsp;</small>
                </a>
                to learn more about SYNECTIKS DevOps Transformation Service.
              </p>
            </div>

            <div className="container">
              <div className="d-flex justify-content-around align-items-center mt-5 flex-col" />
            </div>

            <div className="">
              <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader className="bg-lightgrey" toggle={this.toggle}>
                  Contact Us
                </ModalHeader>
                <ModalBody className="bg-lightgrey brdr-btm-030">
                  <ModalContact />
                </ModalBody>
              </Modal>
            </div>
          </div>
        </div>
        <Helmet>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            var vv_base_id = 'q00IB13hyn';
var vv_ext_id = '5d53ed9a';
var __ibaseUrl = (("https:" == document.location.protocol) ? "https://frontend.id-visitors.com" : "http://frontend.id-visitors.com");
(function () {
var va = document.createElement('script'); va.type = 'text/javascript'; va.async = true; va.src = __ibaseUrl + '/cscripts/' + vv_base_id + '-' + vv_ext_id + '.js'; var sv = document.getElementsByTagName('script')[0]; sv.parentNode.insertBefore(va, sv); })();
        `,
            }}
          />
        </Helmet>
      </Layout>
    )
  }
}

export default Devops
