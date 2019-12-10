import * as React from "react"
import { Helmet } from "react-helmet"
import { Modal, ModalHeader, ModalBody } from "reactstrap"
import ModalContact from "../../components/ModalContact"
import Layout from "../../components/layout"
import mm from "../../images/monovsmicro.png"
import ms from "../../images/Microservice_1.png"
import mcs from "../../images/Microservicesmain.jpg"

export class Microservices extends React.Component {
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
        <div className="bg-lightgrey text-justify">
          <div className="w-100">
            <img
              height="auto"
              width="100%"
              className=""
              src={mcs}
              alt="Microservices"
            />
            <div className="container">
              <div className="sidenav mt-5">
                <a
                  href="/microserviceexample/index.html"
                  className="text-white"
                >
                  Example&nbsp;of&nbsp;Microservices
                </a>
                <a
                  href="/microservicebenefit/index.html"
                  className="text-white"
                >
                  Benefits&nbsp;of&nbsp;Microservices
                </a>
                <a
                  href="/microservicechallenge/index.html"
                  className="text-white"
                >
                  Challenges&nbsp;of&nbsp;Microservices
                </a>
                <a href="/microservicehelp/index.html" className="text-white">
                  How&nbsp;we&nbsp;can help you?
                </a>
              </div>

              <div className="main pr-5">
                <div className="container pt-5 lineHeight-24">
                  <p className="">
                    To accommodate the increasing complexity of functional
                    requirements, IT applications have embraced a variety of
                    architectural patterns. Organizations must meet
                    ever-changing business demands — from mainframe applications
                    and client-server to service oriented architecture (SOA) and
                    microservices.
                    <br />{" "}
                  </p>
                  <p>
                    <i>
                      Microservices architecture is a combination of successful
                      and proven concepts of software engineering such as agile
                      software development, SOA, API-first design and continuous
                      delivery (CD). This architecture and organizational
                      approach to software development is designed to accelerate
                      development cycles, foster innovation and ownership and
                      improve the ability to maintain and scale applications.
                      <br />{" "}
                    </i>
                  </p>
                  <p>
                    Despite technological advancements, 90 percent of business
                    IT applications are legacy and what are known as
                    “monolithic”. These range from mainframe apps where UI,
                    business logic and data storage reside on machines, to
                    client-server applications where layered technologies that
                    support UI, business functionality and data are stored
                    horizontally. Microservices architecture, on the other hand,
                    divides the functionality into cohesive verticals by
                    implementing a specific domain.
                  </p>
                </div>

                <div
                  className="pt-3 text-center"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <img
                    src={ms}
                    width="60%"
                    alt="Microservices Migration"
                    className="imgBx"
                  />{" "}
                </div>
                <div
                  className="pt-3 px-5"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <h2 className="container text-center px-5 py-3">
                    Monolith Vs Microservices
                  </h2>
                  <div className="text-center">
                    <img
                      src={mm}
                      width="75%"
                      alt="Monolith Vs Microservices"
                      className="imgBx"
                    />{" "}
                  </div>
                </div>
                <div className="container d-flex  px-5 py-4 flex-col ">
                  <p>
                    <a
                      className="navlink navfont noLine text-logoblue cursPoint"
                      href="https://synectiks.com/contactus/index.html"
                    >
                      <small>Contact&nbsp;Us&nbsp;</small>
                    </a>
                    to learn more about SYNECTIKS MicroServices.
                  </p>
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

export default Microservices
