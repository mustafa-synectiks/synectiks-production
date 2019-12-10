import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../../components/layout"
import ContinuousAutomationOperations from "../../images/ContinuousAutomationOperations.png"
import ContinuousDeliveryOperations from "../../images/ContinuousDeliveryOperations.png"
import ContinuousBillingOperations from "../../images/ContinuousBillingOperations.png"
import ContinuousComplianceOperations from "../../images/ContinuousComplianceOperations.png"
import DiscoveryAssessmentOperation from "../../images/DiscoveryAssessmentOperation.png"
import OperationsGraph from "../../images/OperationsGraph.png"
import Solutions from "../../images/Solutions.png"
import Transformation from "../../images/Transformation.png"
import OpenPlatform from "../../images/OpenPlatform.png"

class Operations extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Layout>
        <div className="bg-lightgrey container">
          <div className="pb-5">
            <div className="row">
              <div className="btn col-sm-12 col-md-4 col-lg-4 col-xl-4 pt-3 h-100">
                <div class="card-shadow card ">
                  <a href="/foundation/index.html" className="noLine">
                    <img
                      className="card-img-top"
                      src={OpenPlatform}
                      alt="Foundation"
                    />
                    <div className="card-body">
                      <h2 className="text-center text-uppercase">
                        Open Platform
                      </h2>
                      <h6 className="pointerDown text-center">&#187;</h6>
                    </div>
                  </a>
                </div>
              </div>

              <div className="btn col-sm-12 col-md-4 col-lg-4 col-xl-4 pt-3 h-75">
                <div class="card-shadow card">
                  <a href="/transformation/index.html" className="noLine">
                    <img
                      className="card-img-top"
                      src={Transformation}
                      alt="Transformation"
                    />
                    <div className="card-body">
                      <h2 className="text-center text-uppercase">
                        Transformation
                      </h2>
                      <h6 className="pointerDown text-center">&#187;</h6>
                    </div>
                  </a>
                </div>
              </div>

              <div className="btn col-sm-12 col-md-4 col-lg-4 col-xl-4 pt-3 h-75">
                <div class="card-shadow card cardHeight">
                  <a href="/operations/index.html" className="noLine">
                    <img
                      className="card-img-top"
                      src={Solutions}
                      alt="Operation"
                    />
                    <div className="card-body">
                      <h2 className="text-center text-uppercase">Solutions</h2>
                      <h6 className="pointer text-center">&#187;</h6>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="cardContent">
            <div className="text-center px-4">
              <h3 className="py-2">
                24x7 Operations for enterprise managed services
              </h3>
            </div>
            <div className="pb-5 pt-3 text-center">
              <div>
                <img
                  className="imgBx"
                  src={OperationsGraph}
                  width="75%"
                  alt="Operations for enterprise managed services"
                />{" "}
              </div>
            </div>

            <div
              className="container-fluid py-5"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="row justify-content-around align-items-center">
                <div className="card card-hd mx-3">
                  <div className="w-100 card-bd bg-maroon">
                    <img
                      className="card-hd-img text-center brdr-maroon"
                      src={DiscoveryAssessmentOperation}
                      width="75%"
                      alt="Discovery Assessment"
                    />
                  </div>
                  <div className="card-body">
                    <small className="text-center  ">
                      We advise on assessment, migration, multi cloud hybrid
                      architecture adoption coupled with our services, software,
                      methodologies to accelerate enterprise transformation
                      towards operation excellence.
                    </small>
                  </div>
                </div>

                <div className="card card-hd mx-3">
                  <div className="w-100 card-bd bg-teal">
                    <img
                      className="card-hd-img text-center brdr-teal"
                      src={ContinuousComplianceOperations}
                      width="75%"
                      alt="Continuous Compliance"
                    />
                  </div>
                  <div className="card-body">
                    <small className="text-center">
                      Synectiks xformation platform perform continuous audits on
                      infrastructure, application, access management and ensure
                      security compliances (CISP, HIPPA,PCI-DSS, DISA, NIST)
                      across clouds, products and environments.
                    </small>
                  </div>
                </div>
                <div className="card card-hd mx-3">
                  <div className="w-100 card-bd bg-orange">
                    <img
                      className="card-hd-img text-center brdr-orange"
                      src={ContinuousBillingOperations}
                      width="75%"
                      alt="Continuous Billing"
                    />
                  </div>
                  <div className="card-body">
                    <small className="text-center">
                      Synectiks xformation platform perform continuous billing
                      monitoring across the accounts, services, environments,
                      identifies capex spending and underutilized resources.
                    </small>
                  </div>
                </div>
              </div>
              <div className="row justify-content-around align-items-center mt-5">
              <div className="card card-hd mx-auto mt-5">
                <div className="w-100 card-bd bg-green">
                  <img
                    className="card-hd-img text-center brdr-green"
                    src={ContinuousDeliveryOperations}
                    width="75%"
                    alt="Continuous Delivery"
                  />
                </div>
                <div className="card-body">
                  <small className="text-center">
                    Synectiks continuous delivery platform enables you to
                    continuously release new features and changes with
                    superior quality. The delivery mechanism includes multiple
                    quality gates and staged deployment, that ensures rapid
                    releases with less tests efforts.
                    </small>
                </div>
              </div>
              <div className="card card-hd mx-auto mt-5">
                <div className="w-100 card-bd bg-pink">
                  <img
                    className="card-hd-img text-center brdr-pink"
                    src={ContinuousAutomationOperations}
                    width="75%"
                    alt="Continuous Automation"
                  />
                </div>
                <div className="card-body">
                  <small className="text-center">
                    Synectiks automation platform automates frequently
                    occurring IT tasks, reducing IT tickets 80%. The
                    intelligent diagnostics platform auto fixes more that 50%
                    general alarms.
                    </small>
                </div>
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

export default Operations
