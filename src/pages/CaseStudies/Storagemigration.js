import * as React from "react"
import { Helmet } from "react-helmet"
import cb from "../../images/Storagemigration.jpg"
import as from "../../images/Application-Services-Slider.png"
import Layout from "../../components/layout"

const brdr = {
  borderRadius: "0 0.25rem 0.25rem 0",
}

class Storagemigration extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Layout>
        <div className="bg-lightgrey container">
          <div className="d-flex mt-5 justify-content-around align-items-center flex-col text-center">
            <div className="w-40 pt-5 pb-3">
              <img src={cb} width="100%" alt="Cloud Backup" />{" "}
            </div>
          </div>
          <div>
            <a href="/casestudy/index.html">
              <button
                className="btn text-white bg-logoblue btnLearn"
                style={brdr}
              >
                <span className="fa fa-angle-double-left"></span>&nbsp;Back to
                Success Stories
              </button>
            </a>
          </div>
          <div className="px-5 pb-2">
            <h1 className="text-center">Storage Migration</h1>
          </div>
          <div className="px-5 pt-3">
            <h4 className="lineHeight-24 text-center">
              SAN connectivity via Synectiks Storage Network Solutions
            </h4>
            <br />
          </div>

          <div className="d-flex justify-content-around flex-col px-5 py-3 col-lg-12">
            <div className="col-md-6">
              <h3>Cloud Implement Services</h3>
              <p>
                Production servers require storage consolidation to scale the
                growth of digital data. Business requires efficient and robust
                storage solutions based on application needs. ERP, Big Data
                Analysis and IOT require a latest all-flash solution.
                <br />
                Synectiks provides a wide range of storage solutions and has
                years of expertise in this domain. We enable enterprises, around
                the globe to connect to cloud-based IT capabilities, help
                optimize costs, enhance productivity and bring innovation to IT
                operations.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img className="w-75" src={as} alt="Card image cap" />
            </div>
          </div>

          <div className="text-center p-5">
            <h3>Synectiks SAN model</h3>
            <p className="px-2">
              Over the years, we have developed expertise around SAN storage
              that led us in creating robust solutions for organizations across
              the globe in different domains and stages
            </p>
          </div>
          <div className="bg-logoblue text-center text-white d-flex justify-content-around flex-col p-5 col-lg-12">
            <div className="col-md-4">
              <h3>Network Model</h3>
              <p>
                Our unique core-edge SAN network offering works best for the
                applications providing availability and load balancing.
              </p>
            </div>

            <div className="col-md-4 border-block">
              <h3>Block Model</h3>
              <p className="px-2">
                Our strength in offering raw block devices of various sizes
                delivers best i/o response time with a high-end performance of
                the applications. We design and implement 3 data center, 4 data
                center block replications.
              </p>
            </div>
            <div className="col-md-4">
              <h3>File Model</h3>
              <p>
                We design and build customized NAS solutions for enterprises
                based on their needs and demands. We construct robust networking
                file access to windows and Unix based clients.
              </p>
            </div>
          </div>

          <div className="text-center p-5">
            <h3>Synectiks Cloud Solutions</h3>
          </div>

          <div className="bg-logoblue text-center text-white d-flex justify-content-around flex-col p-5 col-lg-12">
            <div className="col-md-4">
              <h3>L1-L2-L3-L4 support</h3>
              <p>
                It is our support to enterprises at various levels brought us
                where we are today. We support operations at multiple stages to
                achieve customer SLAs and we succeeded. Desktops or applications
                to be accessed anytime, anywhere and in any device.
              </p>
            </div>

            <div className="col-md-4 border-block">
              <h3>Build Solutions</h3>
              <p className="px-2">
                We offer a wide range of industry-specific storage box builds
                for specific niche industry domains.
              </p>
            </div>
            <div className="col-md-4">
              <h3>Active - Active Solutions</h3>
              <p>
                Our active/active solutions enable application clusters to work
                and maintain zero downtime.
              </p>
            </div>
          </div>

          <div className="text-center p-5">
            <h4>
              We follow ITIL process and methodologies to support various levels
              of supports for the enterperises.
            </h4>
          </div>

          <div className="bg-logoblue text-center text-white d-flex justify-content-around flex-col p-5 col-lg-12">
            <div className="col-md-6">
              <h3>Storage Automation</h3>
              <p>
                Our core strength is to automate the end to end storage
                operations. We use various DevOps tools to automate most of the
                storage jobs and with this, we receive customer requests at a
                faster rate.
              </p>
            </div>

            <div className="col-md-6">
              <h3>Block and File migration</h3>
              <p className="px-2">
                We are experts in migrating block data across multiple storage
                boxes. We offer solutions and services to accelerate the
                migration of storage hardware and data.
              </p>
            </div>
          </div>

          <div className="text-center px-5 pt-5 pb-3">
            <h3>Cloud across the globe with 187 data centers foot print.</h3>
          </div>
          <div className=" d-flex justify-content-around flex-col px-5 py-3 col-lg-12">
            <div className="col-md-6">
              <ul>
                <li>180+ Data centers across the globe.</li>
                <li>50+ Storage experts.</li>
                <li>Handled 150 + PB of storage Data.</li>
                <li>10+ cloud services offering with successful POCs.</li>
                <li>3 partnerships for joint solutions.</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li>Storage assessment.</li>
                <li>Storage Implementations.</li>
                <li>Latest innovations in cloud.</li>
                <li>Building competencies.</li>
                <li>
                  Domain experience for industries like BFSI, healthcare
                  manufacturing and others.
                </li>
              </ul>
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
export default Storagemigration
