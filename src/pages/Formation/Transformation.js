import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../../components/layout"
import OpenPlatform from "../../images/OpenPlatform.png"
import Rehost from "../../images/Rehost.png"
import EnterprisePlatform from "../../images/Enterprise-Platform.png"
import Redevelopment from "../../images/Redevelopment.png"
import Solutions from "../../images/Solutions.png"
import Transformation from "../../images/Transformation.png"
import Refactor from "../../images/Refactor.png"
import transformation2 from "../../images/transformation_2.png"
// import "../../components/layout.css"

export class Tformation extends React.Component {
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
                <div class="card-shadow card cardHeight">
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
                      <h6 className="pointer text-center">&#187;</h6>
                    </div>
                  </a>
                </div>
              </div>

              <div className="btn col-sm-12 col-md-4 col-lg-4 col-xl-4 pt-3 h-75">
                <div class="card-shadow card">
                  <a href="/operations/index.html" className="noLine">
                    <img
                      className="card-img-top"
                      src={Solutions}
                      alt="Operation"
                    />
                    <div className="card-body">
                      <h2 className="text-center text-uppercase">Solutions</h2>
                      <h6 className="pointerDown text-center">&#187;</h6>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="cardContent">
            <div className="my-5">
              <img src={Refactor} className="w-100 imgBx" alt="Refactor" />
            </div>
            <div className="my-3">
              <img
                data-aos="fade-up"
                data-aos-duration="2000"
                className="w-100 imgBx"
                src={transformation2}
                alt="Transformation"
              />
            </div>
            <div className="my-3">
              <img
                data-aos="fade-up"
                data-aos-duration="2000"
                className="w-100 imgBx"
                src={EnterprisePlatform}
                alt="Redevelopment Microservice"
              />
            </div>
            <div className="my-3">
              <img
                data-aos="fade-up"
                data-aos-duration="2000"
                className="w-100 imgBx"
                src={Redevelopment}
                alt="Redevelopment Analytics"
              />
            </div>
            <div className="my-3">
              <img
                data-aos="fade-up"
                data-aos-duration="2000"
                className="w-100 imgBx"
                src={Rehost}
                alt="Rehost"
              />
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
export default Tformation
