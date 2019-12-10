import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../../components/layout"
import nd from "../../images/NetworkDesign_CS.jpg"

const brdr = {
  borderRadius: "0 0.25rem 0.25rem 0",
}

export class Networkdesign extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Layout>
        <div className="bg-lightgrey container">
          <div className="d-flex mt-5 justify-content-around align-items-center flex-col text-center">
            <div className="w-40 pt-5 pb-3">
              <img src={nd} width="100%" alt="Cloud Backup" />{" "}
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
          <div className="px-5 pb-4">
            <h1 className="text-center">Cloud Automation For Medfusion Inc</h1>
          </div>

          <div className="bg-logoblue text-center text-white d-flex justify-content-around flex-col p-5 col-lg-12">
            <div className="col-md-4">
              <h3>Industry</h3>
              <p>Medfusion</p>
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
              Medfusion is a leading patient-provider communications platform
              and it is used to streamline workflows that enable healthcare
              facilities to function more efficiently. The Medfusion’s
              development and deployment team communicate via an email to the
              data center admin with an attached form that specifies resource
              details. Then the admin takes an approval from the manager by
              email and manually go to vSphere administration console and create
              the resources as per the requirements. The process includes
              creating the virtual machine from existing template, and then
              doing the custom configuration as requested by the user and
              finally allocating and fixing the IP’s in the resources to send an
              email to the customer on completing the necessary tasks. However,
              in case the resources retire, the requestor then emails to admin
              and the admin fulfills the request. Apparently, things were quite
              intense and weren’t going along perfectly fine when the resources
              get retired. They had to face the challenges below.
            </p>

            <h2>Challenges</h2>
            <p className="lineHeight-24">
              Medfusion wanted a solution based on their existing tools which is
              much easier to build and manage their operations. They need a
              solution to cater any automations that can be hooked with ease.
              The resource provisioning should create virtual machines and also
              the initial bootstrap configuration like the IP/DNS/Security
              configuration. Medfusion’s clientele wanted a solution to be
              intelligent enough to substantiate available capacity and create a
              resource pool accordingly.
            </p>
            <h2>Solutions</h2>
            <p className="lineHeight-24">
              <ul>
                <li>
                  Medfusion was already using Jira service desk as their
                  ticketing tool and Jenkins for their CI/CD.
                </li>
                <li>
                  We designed a complete business process in Jira in aggregation
                  with some automation task in Jenkin.
                </li>
                <li>
                  When the dev team sends an email or raise a service desk
                  request, the service desk tickets gets automatically created.
                </li>
                <li>
                  Then the admin would approve the request and on approval, the
                  Jenkin job engine would trigger a provisioning job.
                </li>
                <li>
                  Once the job is successful, job engine will notify Jira about
                  the completion along with resource details.
                </li>
                <li>
                  Then the ticket status is changed automatically and the
                  customer gets the acknowledgment through email about the
                  completion.
                </li>
              </ul>
            </p>

            <p className="lineHeight-24">
              <b>Automating their current resource provisioning process</b>
              <br />
              When Medfusion approached Synectiks, they were handling most of
              the requests from service desk manually and once approved the
              resources would be provisioned from an automation script, it then
              sends the log to the request ticket, here the process is set to
              closure with notification to the requestor. The heavy downpour of
              requests and tackling it manually to take the requests from
              service desk consumed their time and resources. After all the
              assessment and planning we did come up with a solution that caters
              not only the creations of virtual machines but also to bootstrap
              their current security configurations. We implemented a complete
              business process in Jira in conjunction with some automation task
              in Jenkins. It goes this way, when the Dev team sends an email or
              a service request, the service desk tickets gets automatically
              created and the admin would approve the request. Next, the Jenkin
              job engine triggers a provisioning job and the job engine will
              notify Jira about the completion of the task along with the
              resource information. Voila! the ticket status will be changed
              automatically, and their customer would get an email about the
              completion of the job process.
            </p>

            <p className="lineHeight-24">
              <b>
                How did Synectiks Consolidate, Validate and Outline the issues
                of Large Motor Systems ?{" "}
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
              We tailored a complete automation solution with their existing
              tools. On the first note, we saved 60% time and 50% operations
              cost. We improved the resource provisioning SLA time to 80%. A
              smart solution that is intelligent enough to verify the available
              capacity and create a resource pool. With just a few added scripts
              the customized solution merges with their existing framework.
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

export default Networkdesign
