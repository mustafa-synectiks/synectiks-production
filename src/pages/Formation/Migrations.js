import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../../components/layout"
import MP from "../../images/CloudMigrationOptimization.jpg"
import rh from "../../images/Rehost.png"
import rf from "../../images/Refactor.png"
import lam from "../../images/LegacyApp2.png"
import fd from "../../images/Foundation.svg"
import tr from "../../images/transformation_2.png"
import rm from "../../images/Redevelopment.jpg"
import ba from "../../images/Enterprise-Platform.png"

export class Migrations extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Layout>
        <div className="bg-lightgrey">
          <div className="w-100">
            <img
              height="auto"
              width="100%"
              className=""
              src={MP}
              alt="Microservices"
            />
          </div>
          <div className="container">
            <div className="px-5 mt-4">
              <p className="lineHeight-24">
                Synectiks accelerated migration allows customer to leverage the
                data processing benefits of cloud sooner, providing cost-savings
                and solving scalability issues. Our approach is to use a
                combination of the latest industry tools, processes, experience
                and best practices providing the best solutions to our
                customers. The teams perform a quick requirements analysis and
                GAP analysis to understand the current setup and provide
                solutions to optimize your applications, storage, databases and
                overall infrastructure. Synectiks optimization services provides
                customer the ability to optimize the existing application and
                infrastructure as follows:
              </p>
              <p className="lineHeight-24">
                <i>
                  <ul>
                    <li>
                      By taking advantage of cloud native services without
                      having to rewrite the code
                    </li>
                    <li>
                      By doing Monolith to SOA transformation. Customers enjoy
                      the flexibility to reuse the Synectiks Foundation
                      Microservices components across many applications.
                    </li>
                    <li>
                      By adopting the hybrid model where some workload moves to
                      public cloud in private address space ensuring security
                      and performance.
                    </li>
                  </ul>
                </i>
              </p>
            </div>
            <div
              className="px-5 pt-3"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h4>Rehost :</h4>
              <div className="d-flex justify-content-around align-items-center flex-col">
                <div className="text-center">
                  <img src={rh} width="75%" alt="Rehost" className="imgBx" />{" "}
                </div>
              </div>
            </div>

            <div
              className="px-5 pt-3"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h4>Refactor :</h4>
              <div className="d-flex justify-content-around align-items-center flex-col">
                <div className="text-center">
                  <img src={rf} width="75%" alt="Refactor" className="imgBx" />{" "}
                </div>
              </div>
            </div>

            <div
              className="px-5 pt-3"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h4>Legacy Application Migration :</h4>
              <p className="lineHeight-24 pt-3">
                Two ways to extract value from legacy apps Extracting the data
                in a Data Lake and exposing that data through analytical tools.
                Business Logic: Creating microservices that become APIs enabling
                business user to assemble various functionalities and truly
                become a API driven organization with a API centric application
                architecture. This allows the organization to become a low-code
                organization where they 'assemble apps' rather than write apps.
              </p>
              <div className="d-flex justify-content-around align-items-center flex-col">
                <div className="text-center">
                  <img
                    src={lam}
                    width="75%"
                    alt="Legacy App Migration"
                    className="imgBx"
                  />{" "}
                </div>
              </div>
            </div>

            <div
              className="px-5 pt-3"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h4>Accelerated Migration :</h4>
              <p className="lineHeight-24 pt-3">
                With synectiks xformation platform, companies can take advantage
                of an API-driven cloud architecture and get moving faster.
                Synectiks open xformation platform offers App/ Delivery/
                Automation blocks based on cloud native services that customers
                can leverage to build application and services rapidly with
                adequate security and governance.
              </p>
              <div className=" text-center">
                <img
                  src={fd}
                  width="65%"
                  alt="Accelerated Migration"
                  className="imgBx"
                />{" "}
              </div>
            </div>

            <div
              className="px-5 pt-3"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h4>Delivery Pipeline :</h4>
              <p className="lineHeight-24 pt-3">
                Synectiks xformation platform comes with industry standard CI/CD
                blueprint infrastructure provisioning and validation, container
                driven services delivery across clouds, functional testing,
                performance testing and security testing and stagewise
                production deployment tasks. By truly adopting a DevOps based
                cultural adoption, customers can ensure their product quality ,
                security and compliance posture is continually maintained along
                with the capability to rapidly deliver features and services
                with ever increasing security and compliance guidelines.
              </p>
              <div className=" text-center">
                <img
                  src={tr}
                  width="65%"
                  alt="Transformation"
                  className="imgBx"
                />{" "}
              </div>
            </div>

            <div
              className="px-5 pt-3"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h4>Redevelopment – Microservices Based App Development :</h4>
              <p className="lineHeight-24 pt-3">
                Synectiks application development service offering allow
                customers to realize the real benefit of using cloud native
                services and boosting innovation agility. The offerings involves
                application redevelopment to implement use cases for batch
                processing, workflow processing , transient server less
                functionality or container based microservices. Synectiks open
                xformation platform offers App/ Delivery/ Automation blocks
                based on cloud native services that customers can leverage to
                build application and services rapidly. A typical microservice
                based enterprise application component diagram is below:
              </p>
              <div className=" text-center">
                <img
                  src={rm}
                  width="65%"
                  alt=" Redevelopment Microservices"
                  className="imgBx"
                />
              </div>
            </div>

            <div
              className="px-5 py-3"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h4>Bigdata Analytic :</h4>
              <p className="lineHeight-24 pt-3">
                Synectiks analytic service offering allow customers to create
                data lake for their unstructured, semi structured and structured
                data and derive real time visibility across their business
                processes by doing bigdata processing projects. Synectiks
                simplify the operations complexity by running the multistage
                transactional services, batch workloads and analytics inside a
                single platform. Synectiks deep expertise on hardware
                aggregations coupled with its analytics services offerings,
                customers can seamlessly run every mission critical workloads
                inside a single cluster platform and can truly focus on
                outcomes.
              </p>
              <div className=" text-center pb-5">
                <img
                  src={ba}
                  width="75%"
                  alt="Bigdata Analytic"
                  className="imgBx"
                />{" "}
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

export default Migrations
