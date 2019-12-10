import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../../components/layout"
import OpenPlatform from "../../images/OpenPlatform.png"
import ApplicationBlockArchitechture from "../../images/ApplicationBlockArchitechture.jpg"
import OpenXformationPlatform from "../../images/OpenXformationPlatform.png"
import Video from "../../images/Video.png"
import foundation from "../../images/Foundation.svg"
import Solutions from "../../images/Solutions.png"
import Transformation from "../../images/Transformation.png"
import Microservice from "../../images/Microservice_7.png"

const Foundation = () => {
  return (
    <Layout>
      <div className="bg-lightgrey container">
        <div className="pb-5">
          <div className="row">
            <div className="btn col-sm-12 col-md-4 col-lg-4 col-xl-4 pt-3 h-100">
              <div class="card-shadow card cardHeight cardBotomShadow">
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
                    <h6 className="pointer text-center">&#187;</h6>
                  </div>
                </a>
              </div>
            </div>

            <div className="btn col-sm-12 col-md-4 col-lg-4 col-xl-4 pt-3">
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
          <div className="p-2 mt-5 text-justify">
            <h3 className="fh3 text-center">
              Synectiks&nbsp;Open&nbsp;Xformation Platform
            </h3>
            <p className="lineHeight-24 pt-3">
              As every business today need to address volume/velocity
              challenges, it must evolve to stay ahead of demand. Cloud adoption
              requires a secure and consistent Foundation to allow enterprises
              migrate their workloads at speed. Smart tooling and automation
              hugely streamline delivery and management within organization. We
              don’t want to waste our customers resources on ‘reinventing the
              wheel’. By productizing our expertise and carefully researching
              the best tool, we aim to deliver to you a complete solution which
              offers cost-efficient secure cloud and on the top of it, extremely
              scalable, reliable, secure application done right. The goal of
              Xformation platform is to simplify the digital transformation,
              make customers life simpler, give them flexibility to go to any
              cloud, create container clusters, develop and deploy
              microservices/Bigdata/IOT applications seamlessly and manage
              operations with our automation bots.
            </p>
            <p className="lineHeight-24">
              SYNECTIKS Open Xformation platform is consolidation of
              tools/utilities within a simplified and extensible architecture.
              The Xformation platform can use all the existing assets and best
              practices accelerating Digital Transformation journey and reduce
              time to do modernization in most defined and secure way.
            </p>
            <p className="lineHeight-24">
              SYNECTIKS Open Xformation platform and its Software-Defined
              Foundation services help in building the Landing Zone with Network
              Security to protect applications and data, allowing customers to
              scale and accelerate their cloud adoption. The comprehensive
              compliance foundation service includes the creation of a landing
              zone which is a pre-configured secure environment that implements
              DISA's Secure Cloud Computing Architecture (SCCA) requirements.
            </p>
            <p className="lineHeight-24">
              With SYNECTIKS Xformation platform, companies can take advantage
              of an API-driven cloud architecture and get going faster.
            </p>
          </div>

          <div
            className="  text-justify"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h3 className="fh3 text-center pb-3">
              How&nbsp;does&nbsp;it&nbsp;actually&nbsp;work?
            </h3>
            <div className="text-center">
              <img
                className="text-center imgBx"
                src={foundation}
                width="60%"
                alt="How Foundation Works?"
              />
            </div>

            <p className="pt-3" data-aos="fade-up" data-aos-duration="2000">
              The Foundation Platform creates at least 3 enclaves to take your
              products and services in cloud:
            </p>
            <ol
              type="1"
              className="lineHeight-24"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <li>
                <h4 className="fh4">
                  &nbsp;Virtual Data Center Management Services
                </h4>
              </li>
              <ul>
                <li>
                  &nbsp;Primarily all management backplane managing multiple
                  products and services. Typical services include (Operation
                  Automation, Monitoring, Log Analysis, Alerting, Authentication
                  &amp; Authorization (AD/LDAP), SSO, OCSP, DHCP, DNS, NTP,
                  PATCH, ACAS, ALM (Application Lifecycle Management Services)
                </li>
              </ul>
              <li>
                <h4 className="fh4">
                  &nbsp;Virtual Data Center Security Services
                </h4>
              </li>
              <ul>
                <li>
                  &nbsp;Software-defined Network Security, Firewall, IDS/IPS
                  (Intrusion Detection &amp; Protection System), HBSS (Host
                  Based Security System) and Compliance Audit system
                  (PCI-DSS/HIPPA/CISP...)
                </li>
              </ul>
              <li>
                <h4 className="fh4">&nbsp;Application Enclaves</h4>
              </li>
              <ul>
                <li>
                  &nbsp; Secure landing zones for mission critical workloads in
                  cloud, provisioned and managed by VDMS/VDSS platforms. The
                  VDMS platform provision a landing zone with quick start
                  Account Setup, Network, Security, Identity &amp; Access based
                  on best practices and standards that can be leveraged across
                  all applications migration.
                </li>
              </ul>
            </ol>

            <div
              className=" px-5 py-3"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h3 className="fh3 text-center">Key&nbsp;Features</h3>
            </div>
            <div className="  py-3" data-aos="fade-up" data-aos-duration="2000">
              <h3 className="fh3 text-center">
                Synectiks Open Xformation Platform
              </h3>
            </div>
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                className="imgBx"
                src={OpenXformationPlatform}
                width="75%"
                alt="Synectiks Open Xformation Platform"
              />{" "}
            </div>

            <ol
              type="1"
              className="lineHeight-24 pt-3"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <li>
                <h4 className="fh4">
                  &nbsp;Everything Software defined (IaC &amp; Container
                  Orchestration)
                </h4>
              </li>
              <p className="lineHeight-24">
                Through our code, customers can go to any cloud
                (Private/Public), aggregate hardware resources in pure
                software-defined way and populate highly secured elastic
                platform to deliver application services. It will help customers
                to create and maintain Container delivery clusters (AWS ECS,
                Kubernetes, Messos DCOS, SWARM) across cloud (Private/Public) in
                a most efficient manner. It will create a landing platform in
                cloud which is highly secure and elastic and services can just
                be deployed across cloud in a controlled manner.
              </p>
              <li>
                <h4 className="fh4">&nbsp;Continuous Delivery</h4>
              </li>
              <p className="lineHeight-24">
                It will help to deliver containerized microservices through
                quality gates, that will ensure the highest level of software
                quality, agility and reliability.
              </p>
              <li>
                <h4 className="fh4">&nbsp;Rapid Application Delivery</h4>
              </li>
              <p className="lineHeight-24">
                It will help customers to rapidly develop/deploy/maintain
                microservices/Bigdata/IOT applications seamlessly. The base
                application templates along with delivery and operation
                automations will be provided so that customers can rapidly build
                highly scalable applications.
              </p>
              <li>
                <h4 className="fh4">&nbsp;Operation Automation</h4>
              </li>
              <p className="lineHeight-24">
                It will help customers to manage day to day operations and
                diagnostics ability with automation bots. Most operation
                automation bots are written in server less programming.
              </p>
            </ol>
          </div>

          <div
            className="text-justify lineHeight-24"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h3 className="fh3 text-center pb-3">
              System Architecture of Xformation Platform
            </h3>
            <div className=" text-center">
              <img
                className="imgBx"
                src={Microservice}
                width="75%"
                alt="System Architecture of Xformation Platform"
              />{" "}
            </div>
            <b className="pt-3">Notes :</b>
            <p>
              This is overall system architecture. The architecture attempts to
              ensure scalability across every layer (Infrastructure/Application
              Services) to ensure horizontal scalability everywhere. This is the
              master architecture to write a highly scale-out application, it
              talks about application services, compute and network platform.
            </p>
            <ul>
              <li>
                <h4 className="fh4">Section 1</h4>
              </li>
              <p>
                The upper half deals with the hardware aggregation on the top of
                cloud layer. With the available container orchestrator, we
                aggregate CPU/Network/Storage and it looks like One big
                consolidated resource. You can deploy application services
                seamlessly through the Continuous Delivery pipeline, and they
                run being transparent to the underneath computing resources. At
                application level, the scalability is achieved at individual
                service level as well as elastic resource pool level.
              </p>
              <li>
                <h4 className="fh4">Section 2</h4>
              </li>
              <p>
                The layer no section 2, primarily involves creating resources
                across Private/Public cloud. In case of Hybrid cloud, we prefer
                opting for our Equinix IBX/IOA implementation so that
                Private/Public clouds are hosted in same private address space.
                Equinix is doing that.
              </p>
              <li>
                <h4 className="fh4">Section 3</h4>
              </li>
              <p>
                The bottom half deals with hardware and network scale-out. The
                architecture assumes hyper scaling (
                <b>Intel RSD Implementation</b>) to seamlessly add
                CPU/Memory/Storage and create any private cloud on top of it.
              </p>
              <li>
                <h4 className="fh4">Section 4</h4>
              </li>
              <p>
                At the network layer, it assumes that, private and public cloud
                are hosted in same colocation ensuring minimal hop between them
                as well as they stay in same private network space. We
                collaborate with Equinix colocation platform and use their
                IBX/IOA based communication to guarantee the
                scalability/performance and security at network layer.
                <br />
                SYNECTIKS Xformation platform currently implements the
                Automation and Orchestration of the cloud, Container
                Orchestrator, DevOps and ALM Layer, primarily Layer 1 &amp; 2.
              </p>
            </ul>
          </div>

          <div
            className="text-justify "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h3 className="fh3 text-center pb-3">
              Application Block Architecture
            </h3>
            <div className="text-center bg-white imgBx">
              <img
                src={ApplicationBlockArchitechture}
                width="75%"
                alt="Application Block Architecture"
              />{" "}
            </div>

            <p className="pt-2">
              <b>Notes :</b>
              <br />
              This is a standard microservice based basic application
              architecture. We tried to carefully refactor the basic services
              what any enterprise application would require and provision them
              separately. Each microservice uses some combination of
              Cache/SQL/NoSQL/GRAPH/Bigdata databases to make them individually
              scalable. The real challenges lie in deploying and maintaining so
              many services along with their databases. We deploy and manage all
              the components of services in aggregated hardware platform so that
              we can properly address their lifecycle. <br />
              Here follows the list of basic services along with their
              functionality and database components:
            </p>
            <ol type="1" className="lineHeight-34">
              <li>
                &nbsp;<b>Session &amp; Security Management</b> - Primarily
                serves session/security/role-based access control. This uses
                REDIS Cluster (cache DB) and NoSQL database (Dynamo).
              </li>
              <li>
                &nbsp;<b>Configuration Management</b> - Serves application
                configuration and config customization abilities. This uses
                Dynamo DB (NoSQL) at the backend.
              </li>
              <li>
                &nbsp;<b>Workflow Service</b>-- Serves business workflow
                services. It uses Dynamo DB (NoSQL) at the backend.
              </li>
              <li>
                &nbsp;<b>Content Service</b>-- Serves storing and accessing and
                searching of all documents and attachments. It uses mongo DB and
                distributed filesystem (CEPH) at the backend.
              </li>
              <li>
                &nbsp;<b>Search Service</b> -- Perform elastic and intelligent
                searches on any record. Uses distributed filesystem for
                indexing.
              </li>
              <li>
                &nbsp;<b>WIKI Service</b> -- It store and manages the text
                contents. It uses Aurora RDS.
              </li>
              <li>
                &nbsp;<b>SSO Service</b> -- It manages the Single-Sign-On
                service.
              </li>
              <li>
                &nbsp;<b>Rating / Feedback Service</b> -- - It manages some
                basic rating/feedback services. It uses NEo4j and couch cache
                database.
              </li>
              <li>
                &nbsp;<b>Bigdata Analytic Service</b> -- It implements bigdata
                based analytic services. It uses DRUID on top of HDFS for OLAP
                on bigdata.
              </li>
              <li>
                &nbsp;<b>Web UI</b> -- Application Web based UI.
              </li>
              <li>
                &nbsp;<b>API GATEWAY</b> -- API gateway for API serving.
              </li>
            </ol>
            <p>
              Workflow service use JCR content service, WIKI service to cater
              horizontal scalability.
            </p>
            <p>
              Apart from this, any application will have its own domain driven
              services depending on its functionalities. A highly scale-out
              application should deploy all its basic services along with its
              domain drive services to an aggregated container cluster. Each
              individual service uses some combination of
              Cache/SQL/NoSQL/GRAPH/Bigdata database and they also get deployed
              in aggregated container cluster.
            </p>
          </div>
          <div
            className="container"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="d-flex justify-content-around align-items-center mt-5 pb-5 flex-col">
              {/* <div className="">
                <a
                  href="https://www.youtube.com/channel/UChsy8OZwS-JpNQUpC24ff2g/videos"
                  target="_blank"
                  aria-hidden="true"
                  rel="noopener noreferer"
                >
                  <img
                    className="imgBx"
                    src={Video}
                    width="80%"
                    alt="Synectiks Enterprise Transformtaion"
                  />{" "}
                </a>
              </div> */}
              <div className="text-group  align-self-center">
                <h4 className="font-weight-bold pt-3">
                  Synectiks&nbsp;Enterprise Transformtaion{" "}
                </h4>
                <p>
                  Moving to AWS cloud with Data Center retirement for Motor
                  Industry.
                </p>
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

export default Foundation
