import * as React from "react"
import { Helmet } from "react-helmet"
import { Modal, ModalHeader, ModalBody } from "reactstrap"
import ModalContact from "../../components/ModalContact"
import Layout from "../../components/layout"
import privateCloud from "../../images/PrivateCloud.jpg"
import CloudCommon from "../../images/CloudCommon.png"

class Privatecloud extends React.Component {
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

  render() {
    return (
      <Layout>
        <div className="bg-lightgrey">
          <div
            className=" text-black w-100 container-fluid text-white px-5
          flex-col d-flex text-justify"
          >
            <div className="mt-2 pt-3 text-black">
              <div className="d-flex">
                <h1>CLOUD&nbsp; &#8208;</h1>
                <h1>
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
                className="text-logoblue bg-white noLine"
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
                    Hosted Infrastructure
                  </a>
                  <a
                    className="dropdown-item"
                    href="/CloudManagedBackup/index.html"
                  >
                    Cloud Managed Backup
                  </a>
                  <a
                    className="dropdown-item"
                    href="/CloudDisasterRecovery/index.html"
                  >
                    Cloud Disaster Recovery
                  </a>
                </div>
              </a>
            </div>

            <div className="py-3 col-md-2  bg-logoblue brdr025">
              <a
                href="/privatecloud/index.html"
                id="private"
                className="text-white noLine"
              >
                Private Cloud
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
            <div className="py-3 col-md-2">
              <a
                href="/colocation/index.html"
                className="text-logoblue bg-white noLine"
              >
                <b>Colocation</b>
              </a>
            </div>
          </div>

          <div className="text-center mt-3 lineHeight-24"></div>

          <div className=" text-black w-100 mt-3 text-white px-5 py-2 flex-col d-flex text-justify">
            <div className="w-100">
              <img
                height="auto"
                width="100%"
                className=""
                src={privateCloud}
                alt="Private Cloud"
              />
            </div>

            <div className="w-100  px-5 text-black">
              <h2>Private Cloud</h2>
              <p>
                <b>
                  <i>Power of the cloud while protecting your enterprise!</i>
                </b>
              </p>
              <p className="lineHeight-24">
                SYNECTIKS Cloud Private is a reliable and scalable cloud
                platform that runs your infrastructure - built on open-source
                frameworks like Containers, Kubernetes, etc. with standard
                services for deployment, monitoring, logging and security.
                <br />
              </p>
            </div>
          </div>

          <p className="px-5 py-3" data-aos="fade-up" data-aos-duration="2000">
            <b>How Private Cloud Helps Your Business:</b>
          </p>
          <div
            className="container-fluid px-5"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="row justify-content-around align-items-center">
              <div className="card card-pvtcld mx-2 mb-3">
                <div className="w-100 card-bd  py-4 text-white bg-logoblue text-center">
                  <span>Optimize &amp; Secure</span>
                </div>
                <div className="card-body">
                  <p className="lineHeight-24">
                    Securing data is essential in building mission-critical
                    applications. Connecting that data to modern cloud services
                    is also a priority. SYNECTIKS Cloud Private lets you do both
                    with consistency.
                    <br />
                  </p>
                </div>
              </div>

              <div className="card card-pvtcld mx-2 mb-3">
                <div className="w-100 card-bd  py-4 text-white bg-logoblue text-center">
                  Harness Powerful Cloud Services
                </div>
                <div className="card-body">
                  <p className="lineHeight-24">
                    For your open-source application run times, choose the
                    prescriptive development approach of Cloud Foundry or the
                    more customizable and portable method of Kubernetes
                    Orchestration and Docker Containers.
                    <br />
                  </p>
                </div>
              </div>

              <div className="card card-pvtcld mx-2 mb-3">
                <div className="w-100 card-bd py-4 text-white bg-logoblue text-center">
                  Modernize Your Existing Applications
                </div>
                <div className="card-body">
                  <p className="lineHeight-24">
                    Modernize and migrate your applications, build new
                    cloud-based applications and transform your architecture and
                    infrastructure while moving to a new technology operating
                    model.
                    <br />
                  </p>
                </div>
              </div>

              <div className="card card-pvtcld mx-2 mb-3">
                <div className="w-100 card-bd py-4 text-white bg-logoblue text-center">
                  Customize Your Resources
                </div>
                <div className="card-body">
                  <p className="lineHeight-24">
                    Employ cloud bursting, within a private cloud offering, in
                    the event of spikes in demand. Customize the dedicated
                    compute, storage and networking components to best suit your
                    needs.
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-100 px-5 pt-5 text-black text-justify">
            <p className="lineHeight-24">
              Begin your journey with SYNECTIKS Cloud Private.
              <a
                className="navlink navfont noLine text-logoblue cursPoint"
                onClick={this.toggle}
              >
                <small> Contact&nbsp;Us&nbsp;</small>
              </a>
              to learn more.
              <br />
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
export default Privatecloud
