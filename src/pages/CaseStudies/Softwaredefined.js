import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../../components/layout"
import lc from "../../images/LargeMotorCompany.jpg"

const brdr = {
  borderRadius: "0 0.25rem 0.25rem 0",
}

export class Softwaredefined extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Layout>
        <div className="bg-lightgrey container">
          <div className="d-flex mt-5 justify-content-around align-items-center flex-col text-center">
            <div className="w-40 pt-5 pb-3">
              <img
                src={lc}
                width="100%"
                alt="Software Defined Transformation"
              />{" "}
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
            <h1 className="text-center">Large Motor Company</h1>
          </div>
          <div className="px-5 pt-2">
            <p className="lineHeight-24 pt-2">
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
              Four data centers and more than two thousand servers running 24/7,
              with twenty plus applications and two hundred operations team,
              Large Motor Company handles massive daily operations round the
              clock to give the best world class service to their customers.
            </p>

            <h2>Challenges</h2>
            <p className="lineHeight-24">
              <b>Scalability:</b> This was the primary and pertinent challenge
              of Large Motor Company as their applications were not horizontally
              scalable due to which their applications, faced many performance
              issues.
              <br />
              <b>Reliability:</b> They had difficulty in confronting hardware
              downtime, unplanned outages have directly impacted software
              downtime and baffled their IT operations, applications and data.
              <br />
              <b>Vendor Dependency:</b> They were running licensed products for
              HA clustering, system monitoring and security. Most of the
              products were licensed.
              <br />
              <b>Traditional IT infrastructure:</b> With traditional
              Infrastructure, it is not only difficult to manage a data center
              but also hard to improve costs in maintaining the physical
              resources. The Large Motor company was not using more than 10% of
              their physical resources.
            </p>
            <h2>Solutions</h2>
            <p className="lineHeight-24">
              <ul>
                <li>
                  {" "}
                  We remodeled their legacy IT infrastructure into an entirely
                  software-defined architecture.
                </li>
                <li>
                  Entire operations effort have been shortened and condensed to
                  maintain the four data centers.
                </li>
                <li>
                  We provided a centralized source, valid data and advanced data
                  governance technology.
                </li>
                <li>
                  We designed the entire application layer with statelessness,
                  ensuring horizontal scalability, better security and
                  visibility to the exposed API.
                </li>
                <li>
                  We proved our expertise once again by delivering fast and
                  accurate releases to meet the growing business demand.
                </li>
                <li>
                  We rebuilt and revamped the existing applications to meet
                  today’s agility and scalability demands in the market.
                </li>
                <li>
                  We reduced high CAPEX and OPEX and made them achieve more with
                  less IT budget.
                </li>
                <li>We offered a complete license agnostic solution.</li>
              </ul>
            </p>

            <p className="lineHeight-24">
              <b>
                Synectiks providing a customized solution and targeting the pain
                points of Large Motor Systems.
              </b>
              <br />
              When Large Motor Company approached Synectiks, they were handling
              multiple tasks with traditional infrastructure model. They have
              reached a point on the edge where they can no longer withstand the
              outage issues that rippled their business to two folds and finally
              resulted in high potential cost for their business. Initially,
              Large Motor Company’s infrastructure was not tailored as per their
              requirements that resulted in maintaining huge operations effort
              to manage their data centers. They were expecting quick and
              accurate releases to meet their growing business needs. With
              almost high CAPEX and OPEX, their IT budget was already
              skyrocketing and was going beyond their expectations. Their
              primary focus areas were on scalability, agility and reliability
              issues. Once fixed, they can outperform in their core areas and
              compete in their line of business for better business prospects.
            </p>

            <p className="lineHeight-24">
              <b>
                How did Synectiks Consolidate, Validate and Outline the issues
                of Large Motor Systems?{" "}
              </b>
              <br />
              We believe in harvesting information as much as possible that will
              yield a better solution. That is exactly what we did with Large
              Motor Company. Upon analyzing their queries on a broader spectrum,
              we did a quick 360° audit on their existing infrastructure and
              harvested some vital insights on key improvement areas and a plan
              for any migration path and risks involved in the following
              process. We conducted multiple PoC’S with Large Motor Company to
              channel a solid understanding of the technologies and modernize
              their IT infrastructure. By translating the entire hardware
              infrastructure into a few lines of software code, we crafted a
              backbone infrastructure effortlessly. Also, we refactored monolith
              applications to multiple microservices and established a complete
              application lifecycle management and operation support system to
              maintain their business operations. Ultimately, by achieving the
              required data security, governance and compliance requirements in
              the cloud.
            </p>
            <h2>OUTCOME</h2>
            <p className="lineHeight-24">
              The entire business system is now managed by few resources
              reducing CAPEX by 80% and OPEX by 70%. Large Motor Company’s
              legacy infrastructure is entirely a new transformed
              software-defined infrastructure. As we promised, they achieved
              scalability, reliability, security, agility and operation SLA’s.
              The entire infrastructure is maintained with the code that we
              created and tailored as per their business requests. Large Motor
              Company achieved elasticity to create, modify, shrink and remove
              infrastructure needs dynamically in no time. For a successful
              delivery pipeline, our DevOps automation helps them to manage the
              lifecycle of multiple microservices through the automated
              platform. To achieve continuous delivery, we release quality codes
              every hour.
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

export default Softwaredefined
