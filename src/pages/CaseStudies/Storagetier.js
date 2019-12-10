import * as React from "react"
import { Helmet } from "react-helmet"
import st from "../../images/StorageTier_CS.jpg"
import Layout from "../../components/layout"

const brdr = {
  borderRadius: "0 0.25rem 0.25rem 0",
}

export class Storagetier extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Layout>
        <div className="bg-lightgrey container">
          <div className="d-flex mt-5 justify-content-around align-items-center flex-col text-center">
            <div className="w-40 pt-5 pb-3">
              <img src={st} width="100%" alt="Cloud Backup" />{" "}
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
            <h1 className="text-center">
              Indian Meteorology Department - Case Study
            </h1>
          </div>

          <div className="px-5 ">
            <p className="lineHeight-24">
              Background - Indian Meteorology Department is an agency of the
              Ministry of Earth Sciences of the Government of India. The agency
              harvests the meteorological observations, weather forecasting and
              seismology reports and also responsible for communicating and
              forecasting weather services.
            </p>
            <br />
          </div>
          <div className="bg-logoblue text-center text-white d-flex justify-content-around flex-col p-5 col-lg-12">
            <div className="col-md-4">
              <h3>Industry</h3>
              <p>Automobiles</p>
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
              Background- Indian Meteorology Department is an agency of the
              Ministry of Earth Sciences of the Government of India. The agency
              harvests the meteorological observations, weather forecasting and
              seismology reports and also responsible for communicating and
              forecasting weather services.
            </p>

            <h2>Challenges</h2>
            <p className="lineHeight-24">
              They wanted a lightweight script that must integrate into their
              existing application environment which is Java Based Image
              Processing UI.
              <br />
              The solution must cater multi-staging data protection(D2D2T).
              <br />
              The backup storage should scale out low-cost NAS storage.
              <br />
            </p>
            <h2>Solutions</h2>
            <p className="lineHeight-24">
              <ul>
                <li>
                  After analyzing and understanding their core problem, we
                  initiated our process with the help of Alfresco Content
                  Management solution.
                </li>
                <li>
                  This management tool stores all the files and allows to search
                  all the multiple folders for content.
                </li>
                <li>
                  The next step is to map the different tiers of storage to
                  separate folder and write automation script.
                </li>
                <li>
                  This automation script checks the capacity of primary storage
                  periodically and moves data to secondary storage based on some
                  rules.
                </li>
                <li>
                  We integrated the original data processing application with
                  Alfresco API, to store and access the data.
                </li>
                <li>
                  We rebuilt and revamped the existing applications to meet
                  today’s agility and scalability demands in the market.
                </li>
                <li>
                  This automation script checks the capacity of primary storage
                  periodically and moves data to secondary storage based on some
                  rules.
                </li>
              </ul>
            </p>

            <p className="lineHeight-24">
              <b>
                Mapping a Multi-Tier data staging solution with incredible ease.
              </b>
              <br />
              “Stop looking at the problem like a problem” sounds great but the
              sentence proved correct when we implemented the same.
              Understanding the problem and getting to the roots of it fetched
              excellent results. IMD leveraged our strategic solutions to fast
              forward their current scenario into a better vision that became a
              reality by embracing our services. IMD wanted an answer to stage
              large volume of satellite data staging in multi-tiered storage as
              per customers configurable SLA (if the capacity > 70% move to next
              tier). Also, the respective application server should find the
              data automatically in case they get staged to a net tier. Not to
              mention that need a specific solution which is lightweight, simple
              and open. <br />
              After digesting the requirements, what our technical connoisseurs
              did was something incredible. We used Alfresco Content Management
              solution to store all the files. The management solution puts the
              business flow in a fast track mode and integrates very
              intelligently. We mapped the different tiers of storage to a
              different folder and penned an automation script to check the
              capacity of primary storage to secondary periodically. Then we
              integrated the original data processing application with Alfresco
              API, to store and access data.{" "}
            </p>

            <h2>OUTCOME</h2>
            <p className="lineHeight-24">
              The resulted solution helped IMD to save cost on primary storage
              by 50%. They also reduced 90% operations job of moving data in
              different storage tiers. We helped them stage huge data without
              changing any of their existing application. The entire
              infrastructure is maintained with the code that we created and
              tailored as per their business requests. The final product is a
              lightweight solution that is easy and open.
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
export default Storagetier
