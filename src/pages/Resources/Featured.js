import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../../components/layout"
import Cr from "../../images/Careers.png"
import FS from "../../images/FeDevOps-Strategies.png"
import FT from "../../images/FeEnterprise-Transformation.png"
import FMP from "../../images/FeMicroservice-Platform.png"
import FP from "../../images/FeOpen-Platform.png"
import "../../components/layout.css"

export class Featured extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Layout>
        <div className="bg-lightgrey">
          <div>
            <img
              className="text-center"
              src={Cr}
              width="100%"
              alt="Resources"
            />
            <div className="text-center centered ">
              <div className="text-white">
                <h3>Resources</h3>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="d-flex justify-content-around pt-2 flex-fill  align-items-center flex-col">
              <div>
                <div className="p-5">
                  <img
                    src={FS}
                    width="100%"
                    alt="Enterprise-DevOps"
                    className="imgBx"
                  />
                  <div className="text-group align-self-center">
                    <h6 className="font-weight-bold pt-2">
                      Discover the business value of Synectiks Open Xformation
                      Platform and how it optimizes Enterprise DevOps
                      Strategies.{" "}
                    </h6>
                    <a
                      href="https://synectiks-website.s3.amazonaws.com/doc/Synectiks-Enterprise-DevOps-Strategies.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn more <i className="fa fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className="p-5">
                  <img
                    className="border-grey-2px imgBx"
                    src={FT}
                    width="100%"
                    alt="Enterprise-Transformation"
                  />
                  <div className="text-group align-self-center ">
                    <h6 className="font-weight-bold pt-2">
                      Discover how Synectiks open products based service
                      delivery approach creating significant differences in
                      service sector.{" "}
                    </h6>
                    <a
                      href="https://synectiks-website.s3.amazonaws.com/doc/Synectiks-Enterprise-Transformation.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn more <i className="fa fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="d-flex justify-content-around pt-2 flex-fill  align-items-center flex-col">
                <div>
                  <div className="p-5">
                    <img
                      src={FMP}
                      width="100%"
                      alt="Enterprise-Transformation"
                      className="imgBx"
                    />{" "}
                    <div className="text-group align-self-center">
                      <h6 className="font-weight-bold pt-2">
                        {" "}
                        Why to choose Synectiks as your preferred microservices
                        delivery partner.{" "}
                      </h6>

                      <a
                        href="https://synectiks-website.s3.amazonaws.com/doc/Synectiks-Microservice-Platform.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn more <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="p-5">
                    <img
                      src={FP}
                      width="100%"
                      alt="Enterprise-Transformation"
                      className="imgBx"
                    />{" "}
                    <div className="text-group align-self-center">
                      <h6 className="font-weight-bold pt-2">
                        Synectiks Xformation Platform accelerate any
                        transformation project @50% cost &amp; Time.
                      </h6>

                      <a
                        href="https://synectiks-website.s3.amazonaws.com/doc/Synectiks-Open-Platform.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn more <i className="fa fa-arrow-right" />
                      </a>
                    </div>
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
export default Featured
