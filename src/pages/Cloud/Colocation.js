import * as React from "react"
import { Helmet } from "react-helmet"
import { Modal, ModalHeader, ModalBody } from "reactstrap"
import ModalContact from "../../components/ModalContact"
import Layout from "../../components/layout"
import Costcontrol from "../../images/Costcontrol.png"
import ITModern from "../../images/ITModern.png"
import CloudCommon from "../../images/CloudCommon.png"
import colocation from "../../images/Colocation.png"
import Staff from "../../images/Staff.png"
import Scale from "../../images/Scale.png"

export class Colocation extends React.Component {
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
          <div className=" text-black w-100 container-fluid text-white px-5 flex-col d-flex text-justify">
            <div className="mt-2 pt-3 text-black">
              <div className="d-flex">
                <h1 className=" ">CLOUD&nbsp; &#8208;</h1>
                <h1 className="">
                  <i>&nbsp;Cloud Your Way!</i>
                </h1>
              </div>
              <p className="pht lineHeight-24">
                SYNECTIKS provides industry-leading expertise services and
                solutions that allow you to address your specific needs and
                execute on the best-agreed approach to build and manage a
                cloud-enabled enterprise, that aligns with your transformation
                goals.
              </p>
              <p className="pht lineHeight-24">
                Whether you are yet to explore or have already started your
                cloud journey, we help you to accelerate your company’s digital
                transformation and empower your business to stay ahead of the
                game.
              </p>
              <p className="pht lineHeight-24">
                With our expertise on Cloud Solutions we will deliver it the way
                you need it – on-premise or private, public or hybrid cloud. Get
                no-cost expert guidance.
              </p>
              <p className="pht lineHeight-24">
                We’ll listen to You! Your business objectives and growth
                strategy. Schedule a 30-minute consultation to get your
                expedition to cloud started.
              </p>
            </div>

            <div className=" pl-5 py-3 mt-3 w-60">
              <img
                height="auto"
                className="img100 img-fluid"
                src={CloudCommon}
                alt="Cloud"
              />
            </div>
          </div>
          <div className=" bg-white d-flex justify-content-around align-items-center px-2 flex-col text-center col-lg-12">
            <div className="py-3 col-md-2 nav-item dropdown">
              <a
                href="/HostedInfrastructure/index.html"
                className="text-black bg-white noLine "
              >
                <a className="noLine" href="#" id="" data-toggle="dropdown">
                  <b className="text-logoblue">
                    Cloud&nbsp;Hosted&nbsp;Services&nbsp;&#9660;
                  </b>
                </a>
                <div className="dropdown-menu w17em">
                  <a
                    className="dropdown-item"
                    href="/HostedInfrastructure/index.html"
                  >
                    {" "}
                    Hosted Infrastructure{" "}
                  </a>
                  <a
                    className="dropdown-item"
                    href="/CloudManagedBackup/index.html"
                  >
                    {" "}
                    Cloud Managed Backup{" "}
                  </a>
                  <a
                    className="dropdown-item"
                    href="/CloudDisasterRecovery/index.html"
                  >
                    {" "}
                    Cloud Disaster Recovery{" "}
                  </a>
                </div>
              </a>
            </div>

            <div className="py-3 col-md-2">
              <a
                href="/privatecloud/index.html"
                className="text-logoblue bg-white noLine"
              >
                <b>Private Cloud</b>
              </a>
            </div>
            <div className="py-3 col-md-2">
              <a
                href="/hybridcloud/index.html"
                className="text-logoblue bg-white noLine"
              >
                <b>Hybrid Cloud</b>
              </a>
            </div>
            <div className="py-3 col-md-2">
              <a
                href="/publiccloud/index.html"
                className="text-logoblue bg-white noLine"
              >
                <b>Public Cloud</b>
              </a>
            </div>
            <div className="py-3 col-md-2 bg-logoblue brdr025">
              <a
                href="/colocation/index.html"
                id="colocation"
                className="text-white noLine"
              >
                Colocation
              </a>
            </div>
          </div>

          <div className=" text-black w-100 mt-3 text-white px-5 py-2 flex-col d-flex text-justify">
            <div className="w-100 ">
              <img
                height="auto"
                width="100%"
                className=""
                src={colocation}
                alt="Colocation"
              />
            </div>

            <div className="w-100 px-5 text-black">
              <h2 className="mt-1">Colocation Services</h2>
              <p className="lineHeight-24">
                Quickly evaluate and select any secure, highly available,
                best-in-class data center, anywhere in the world (more than 200+
                colocation facilities on five continents).
                <br />{" "}
              </p>
              <p className="lineHeight-24">
                Colocation services help reduce costs and provide a better
                roadmap to the cloud by offering facility management and
                monitoring of client-owned equipment in a secured SYNECTIKS data
                center environment.
                <br />{" "}
              </p>
              <p className="lineHeight-24">
                Organizations are exploring cloud solutions to scale capacity
                according to changing business requirements quickly.
                <br />{" "}
              </p>
              <p className="lineHeight-24">
                SYNECTIKS Colocation Services host and care for your IT
                equipment in highly efficient and secure data center facilities.
                As your organization grows, SYNECTIKS can assist in transforming
                your environment to a traditional, managed cloud or a hybrid
                environment and we can manage and monitor that environment for
                you.
                <br />{" "}
              </p>
            </div>
          </div>

          <div className="w-100 px-5 text-black text-justify">
            <p className="lineHeight-24">
              You can add data center capacity as you need it &amp; when you
              need it, without capital outlay, by hosting client-owned and
              operated hardware in our best-in-class facilities on a
              "pay-for-what-you-use" basis.
              <br />{" "}
            </p>
            <p className="lineHeight-24 pt-3">
              <h3 className="text-center"> Key Benefits</h3>
              <br />{" "}
            </p>
          </div>
          <div
            className="d-flex justify-content-around col-lg-12 py-5 text-center flex-col"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="col-md-3">
              <img
                className="py-3"
                src={Costcontrol}
                width="60%"
                alt="Costcontrol"
              />
              <p>Cost Control</p>
            </div>
            <div className="col-md-3">
              <img
                className="   py-3"
                src={ITModern}
                width="75%"
                alt="IT Modernization"
              />
              <p>IT Modernization</p>
            </div>
            <div className="col-md-3">
              <img className="   py-3" src={Staff} width="81%" alt="Staff" />
              <p>Knowledgeable Staff</p>
            </div>
            <div className="col-md-3">
              <img className="   py-3 " src={Scale} width="89%" alt="Scale" />
              <p>Scale Up or Down</p>
            </div>
          </div>

          <div className="w-100 px-5 text-black text-justify">
            <p className="lineHeight-24">
              <a
                className="navlink navfont noLine text-logoblue cursPoint"
                onClick={this.toggle}
              >
                <small>Contact&nbsp;Us&nbsp;</small>
              </a>
              to learn more about SYNECTIKS Colocation Services.
              <br />{" "}
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

          <div className="container">
            <div className="d-flex justify-content-around align-items-center mt-5 flex-col" />
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

export default Colocation
