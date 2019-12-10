import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../../components/layout"
import rjc from "../../images/RelianceJioCasestudy.jpg"

const brdr = {
  borderRadius: "0 0.25rem 0.25rem 0",
}
class Realtime extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Layout>
        <div className="bg-lightgrey container">
          <div className="d-flex mt-5 justify-content-around align-items-center flex-col text-center">
            <div className="w-40 pt-5 pb-3">
              <img src={rjc} width="100%" alt="Cloud Backup" />{" "}
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
            <h1 className="text-center">Reliance Jio Casestudy</h1>
          </div>
          <div className="px-5 pt-2">
            <p className="lineHeight-24">
              The leadership took a decision to become
              Harwdare/OS/Operation/vendor agnostic and achive scalability and
              reliability across the organisation. We helped them with all the
              technologies, training to make that happen. Our open platform
              helped them to become complete software defined, automate all
              operations. We helped them to learn to manage IT in most modern
              way.
            </p>
            <br />
          </div>
          <div className="bg-logoblue text-center text-white d-flex justify-content-around flex-col p-5 col-lg-12">
            <div className="col-md-4">
              <h3>Industry</h3>
              <p>Telecom</p>
            </div>
            <div className="col-md-4 border-block">
              <h3>BUSINESS OBJECTIVE</h3>
              <p className="px-2">
                Transformation towards becoming hardware / Os / Vender /
                Operation agnostic. Make everything software defined.
              </p>
            </div>
            <div className="col-md-4">
              <h3>Technologies</h3>
              <p>AWS, Infrastructure as a code, microservices, devops</p>
            </div>
          </div>

          <div className="p-5">
            <h2>Overview</h2>
            <p className="lineHeight-24">
              Reliance Jio Infocom Limited is a leading mobile network operator
              in India. We all know that their network is enormous and immense
              and too often the operations team has to handle colossal workflows
              at all times of the day, the workloads become very intense and
              affect the performance of the data. Reliance Jio operations get
              piled up with tedious tasks every minute and extensively needs
              real-time business processes to monitor their workloads. From new
              service activations to monitoring tons of data, the telecom
              company had a tough time in doing RCA with its existing licensed
              monitoring applications. While at it, when dealing with a mammoth
              telecom company and assuring them that we can handle and provide a
              solution which is 100% scalable was a tough part for us. Once we
              succeeded in gaining their trust, we moved on to analyze and plan
              a panacea that was expected by the telecom company.
            </p>

            <h2>Challenges</h2>
            <p className="lineHeight-24">
              <b>Licenced Monitoring Software:</b> Reliance Jio was mostly using
              licensed products for more than 30 applications to maintain a
              large amount of data. Most of these applications were service
              based and big data related. They needed a customized open source
              tool to manage and run tons of data via millions of network
              elements.
              <br />
              <b>Customized Tool:</b> The telecom company required a
              personalized tool to monitor and provide an outright solution that
              helps in taking more viable decisions.
              <br />
              <b>Massive data:</b> Generating high volumes of data in petabytes
              and processing it in real rear time with more profound insights
              was another challenge to the telecom company.
              <br />
            </p>
            <h2>Solutions</h2>
            <p className="lineHeight-24">
              <ul>
                <li>
                  {" "}
                  We designed and developed a real-time monitoring framework for
                  business use case implementations.
                </li>
                <li>
                  The solution is customized and scalable using sophisticated
                  analytic tools.
                </li>
                <li>
                  Visibility on certain key metrics is the prime factor that
                  reliance Jio achieved through our real-time monitoring
                  services.
                </li>
                <li>
                  Knowing the workflow orchestration of their applications
                  widened their business payoffs in a short span of time.
                </li>
              </ul>
            </p>

            <p className="lineHeight-24">
              <b>
                How did we handle the problem and customized a tool for better
                visibility?
              </b>
              <br />
              We used Prometheus a powerful systems &amp; service monitoring
              tool and Influxdb as a time series database, with Grafana metric
              analysis for visualizing time series data. We hosted the entire
              technology stack in Kubernetes platform so that it can scale
              elastically with minimal operations. Intelligent plugin scripts
              were embedded to work with Prometheus data collection engine and
              extract intuitive data from the large dataset. Smart analytics
              were built on intelligent data stored in time series database and
              this resulted in important business monitoring views.
            </p>
            <h2>OUTCOME</h2>
            <p className="lineHeight-24">
              The telecom company was able to achieve a 100% open and highly
              scalable monitoring platform. We helped them in harvesting right
              business insights in real time that responds to their business
              needs. Finally, Reliance Jio got the flexibility to have complete
              visibility on the valuable business information instead of being
              flooded with clear data. The telecom company now can rapidly
              develop any business monitoring capability as needed. A highly
              cost-effective scalable monitoring platform.
            </p>
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
export default Realtime
