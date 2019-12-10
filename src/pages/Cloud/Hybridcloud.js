import * as React from "react"
import { Helmet } from "react-helmet"
// import { Modal, ModalHeader, ModalBody } from "reactstrap"
// import ModalContact from "../../components/ModalContact"
// import { FiAlignLeft } from "react-icons/fi"
import Layout from "../../components/layout"
import CloudCommon from "../../images/CloudCommon.png"
import HybridCloud from "../../images/HybridCloud.jpg"
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap"
import classnames from "classnames"
import AI from "../../images/accelerateinnovation.png"
import RC from "../../images/RightCloud.png"
import BCC from "../../images/balancecost&control.png"
import EVL from "../../images/eliminatevendor.png"
import WM from "../../images/WorkLoadMigration.png"
import IC from "../../images/Integratingclouds.png"
import WC from "../../images/Workloadfragmentation.png"
import SPRT from "../../images/Supportassistance.png"
import DRB from "../../images/disasterrecovery.png"
import scr from "../../images/Screenshot_3.png"
// import scrs from "../../images/Screenshot_4.png"
import WS from "../../images/Webserver.png"
import ETL from "../../images/dataextraction.png"
import HRP from "../../images/Hrppayroll.png"
import SLDR from "../../images/dataregulations.png"
import GGEC from "../../images/edgecomputing.png"
import SCR5 from "../../images/Screenshot_5.png"
import ADT from "../../images/applicationdevelopment.png"
import HC from "../../images/Hybridcloud.png"
import ECC from "../../images/embraceculturalchange.png"
import RCM from "../../images/changemanagement.png"
import ICO from "../../images/Integratecloudoperations.png"
import AS from "../../images/automatesupport.png"
import ST from "../../images/ShadowIT.png"
import TS from "../../images/Transformationservices.png"
import EM from "../../images/Engagement.svg"
import LTR from "../../images/customerretention.svg"
import WO from "../../images/web-optimization.svg"
import DE from "../../images/demo.png"
import EA from "../../images/automation.svg"
import PCP from "../../images/partnership.svg"
import SCP from "../../images/Singlecontolpane.svg"
import CS from "../../images/compliance.svg"
import TM from "../../images/money-stack-and-sand-clock.svg"
import EE from "../../images/E2e.svg"
import EX from "../../images/Experience.png"
import EXP from "../../images/Expertise.svg"
import GSHC from "../../images/GettingStartedwithHybridCloud.png"
import HSCH from "../../images/HowSynectiksCanhelp.png"
import SD from "../../images/SynectiksDifferentiator.png"
import UHC from "../../images/UnderstandingHybridCloud.png"
import styled from 'styled-components'

export class Hybridcloud extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      fields: {},
      errors: {},
      activeTab: "1",
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      })
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Layout>
      <HybridWrapper>
        <div className="bg-lightgrey container">
          <div className=" text-black w-100 text-white flex-col d-flex text-justify">
            <div className="mt-2 pt-3 text-black">
              <div className="d-flex">
                <h1 className='hbh1'>CLOUD&nbsp; &#8208;</h1>
                <h1 className='hbh1'>
                  <i>&nbsp;Cloud Your Way!</i>
                </h1>
              </div>
              <p className="pht lineHeight-24">
                SYNECTIKS provides industry-leading expertise services and
                solutions that allow you to address your specific needs and
                execute on the best-agreed approach to build and manage a
                cloud-enabled enterprise, that aligns with your transformation
                goals.
              </p>
              <p className="pht lineHeight-24">
                Whether you are yet to explore or have already started your
                cloud journey, we help you to accelerate your company’s digital
                transformation and empower your business to stay ahead of the
                game.
              </p>
              <p className="pht lineHeight-24">
                With our expertise on Cloud Solutions we will deliver it the way
                you need it – on-premise or private, public or hybrid cloud. Get
                no-cost expert guidance.
              </p>
              <p className="pht lineHeight-24">
                We’ll listen to You! Your business objectives and growth
                strategy. Schedule a 30-minute consultation to get your
                expedition to cloud started.
              </p>
            </div>

            <div className=" pl-5 py-3 mt-3 w-60">
              <img
                height="auto"
                className="img100 img-fluid"
                src={CloudCommon}
                alt="Cloud"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className=" bg-white d-flex justify-content-start align-items-center px-0 flex-col text-center col-md-6">
            <div className="py-3 col-md-6">
              <a
                href="/publiccloud/index.html"
                className="text-logoblue bg-white noLine"
              >
                <b>Public Cloud</b>
              </a>
            </div>
            <div className="py-3 col-md-6 bg-logoblue brdr025">
              <a
                href="/hybridcloud/index.html"
                id="hybrid"
                className="text-white noLine arrrow d-arrow"
              >
                Hybrid Cloud
              </a>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="px-5 py-2 text-justify"></div>
          <div className="">
            <Row className="position-relative">
              <div className="">
                <Nav vertical className="tabList">
                  <NavItem className="one">
                    <span>
                      <img src={UHC} alt="" />
                    </span>
                    <NavLink
                      id="bgL"
                      className={classnames({
                        active: this.state.activeTab === "1",
                      })}
                      onClick={() => {
                        this.toggle("1")
                      }}
                    >
                      UNDERSTANDING THE HYBRID CLOUD
                    </NavLink>
                  </NavItem>
                  <NavItem className="one">
                    <span>
                      <img src={GSHC} alt="" />
                    </span>
                    <NavLink
                      id="bgLL"
                      className={classnames({
                        active: this.state.activeTab === "2",
                      })}
                      onClick={() => {
                        this.toggle("2")
                      }}
                    >
                      GETTING STARTED TO HYBRID CLOUD
                    </NavLink>
                  </NavItem>
                  <NavItem className="one">
                    <span>
                      <img src={HSCH} atl="" />
                    </span>
                    <NavLink
                      id="bgLLL"
                      className={classnames({
                        active: this.state.activeTab === "3",
                      })}
                      onClick={() => {
                        this.toggle("3")
                      }}
                    >
                      HOW SYNECTIKS CAN HELP
                    </NavLink>
                  </NavItem>
                  <NavItem className="one">
                    <span>
                      <img src={SD} alt="" />
                    </span>
                    <NavLink
                      id="bgLLL"
                      className={classnames({
                        active: this.state.activeTab === "4",
                      })}
                      onClick={() => {
                        this.toggle("4")
                      }}
                    >
                      SYNECTIKS DIFFERENTIATOR
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
              <Col className="hPtabs mb-3">
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <div>
                      <div className="">
                        <div className="w-100 ">
                          <img
                            className="himage"
                            height="auto"
                            src={HybridCloud}
                            alt="Hybrid Cloud"
                          />
                          {/* </div>
                        <div className="hp ml-5"> */}
                          <h2 className='hybmt'>Why Hybrid Cloud?</h2>
                          <h4>Public, Private, and Hybrid Clouds</h4>
                          <p>
                            Public cloud is what people think of when they hear
                            the word “cloud.” It’s ideal for application
                            development, scientific data processing, and
                            web-scale applications. On the downside, SLAs can be
                            weak and security can be limited. Exclusive use of
                            the public cloud becomes less economically feasible
                            as usage scales. Once applications hit a certain
                            usage/cost threshold, or have strict requirements,
                            such as security or data protec¬tion, that cannot be
                            met by the public cloud, organizations often
                            consider a private cloud. IT favors the private
                            cloud for core enterprise security; applications run
                            on infrastructure that is solely assigned to your
                            company and that facilitates auditing and
                            compliance. The reality is that most organizations
                            will need a blend of these options for different
                            purposes. This is referred to as a hybrid cloud. It
                            allows organizations to use the public cloud where
                            it makes sense, to create private clouds to sup¬port
                            certain application types, and to use advanced
                            techniques such as cloud hubbing—situating critical
                            hardware in network data centers in close proximity
                            to telecom providers, content distribution networks,
                            and application component providers—to place their
                            applications optimally to ensure rapid response
                            time. Hybrid cloud automates and modernizes the
                            applications estate, places workloads in their
                            optimal location, embeds security, enables an IT
                            brokerage model and creates a simple, agile,
                            on-demand environment. Hybrid Cloud also lays the
                            foundation for embracing new technologies such as
                            containerization , serverless, platform as a service
                            (PaaS), IoT and edge computing — all with an eye
                            toward improving business outcomes.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="shadow p-4">
                      <h3>Key Drivers for Hybrid cloud adoption is:</h3>
                      <div className="">
                        <div className="my-3 d-flex flex-row justify-content-around align-items-center">
                          <img src={AI} alt="" className="w15" />
                          <p className="marHybrid">
                            Experiment with new ideas on the cloud. Build once
                            and run anywhere. With secure, easily managed,
                            low-cost cloud resources, companies can finally
                            break the 6-to-18-month application development
                            cycle. Many businesses take advantage of the initial
                            low cost and speed of provisioning servers in the
                            cloud to test new applications, then move production
                            apps to a private or hybrid cloud for better
                            performance and cost savings.
                          </p>
                        </div>
                        <div className="my-3 d-flex flex-row justify-content-around align-items-center">
                          <img src={RC} alt="" className="w15" />
                          <p className="marHybrid">
                            Choose the best cloud to meet cost, performance,
                            regulatory, or data governance requirements.
                            Organizations that demand greater operational
                            flexibility and scalability, data that needs to stay
                            on-premises for compliance reasons can remain in
                            your data center, while application development and
                            testing, HPC, and capacity can take place in the
                            cloud. Also, a hybrid cloud environment allows for
                            “bursting,” or the temporary allocation of cloud
                            capacity for short periods, at a lower cost than
                            using physical and owned IT resources. This helps
                            prevent over-provisioning and resource abandonment
                            when the instances (virtual servers in the cloud)
                            are no longer needed.
                          </p>
                        </div>
                        <div className="my-3 d-flex flex-row justify-content-around align-items-center">
                          <img src={BCC} alt="" className="w15" />
                          <p className="marHybrid">
                            Choose the best cloud to meet cost, performance,
                            regulatory, or data governance requirements.
                            Organizations that demand greater operational
                            flexibility and scalability, data that needs to stay
                            on-premises for compliance reasons can remain in
                            your data center, while application development and
                            testing, HPC, and capacity can take place in the
                         cloud. Also, a hybrid cloud environment allows for
                            “bursting,” or the temporary allocation of cloud
                            capacity for short periods, at a lower cost than
                            using physical and owned IT resources. This helps
                            prevent over-provisioning and resource abandonment
                            when the instances (virtual servers in the cloud)
                            are no longer needed.
                          </p>
                        </div>
                        <div className="my-3 d-flex flex-row justify-content-around align-items-center">
                          <img src={EVL} alt="" className="w15" />
                          <p className="marHybrid">
                            Reduce dependency on proprietary services,
                            application tools, and cloud providers. To support
                            global delivery, companies are paying increasing
                            attention to the network performance from their end
                            users back to the applications being con¬sumed.
                            Placing application servers close to the customer
                            and directly connecting with relevant networks helps
                            to ensure an optimal end-user experience.
                          </p>
                        </div>
                        <p>
                          Ultimately, a hybrid IT environment enables a whole
                          new style of execution characterized by collaborative
                          development environments, consumer-controlled
                          personalized experiences, a cloud-first strategy, and
                          data-driven decisions arrived at with the help of
                          machine learning & AI.
                          <br /> <br /> For example, in a manufacturing
                          scenario, data from IoT sensors monitoring the
                          performance of machines on the factory floor can be
                          ingested using an edge computing infrastructure. Data
                          analytics is first performed locally; then the data is
                          transferred to a data lake in a cloud environment
                          where advanced analytics, AI and machine learning are
                          applied to larger data sets to gain critical insights.
                          These insights can be used to automatically initiate
                          actions in production & supply chain systems that
                          execute in a traditional infrastructure environment.
                          The hybrid IT components are managed in an integrated
                          fashion to deliver the end-to-end business processes.
                          <br /> <br /> As these examples demonstrate, the
                          potential benefits of hybrid IT are compelling, yet
                          there are notable challenges facing CIOs as they work
                          to embrace or accelerate hybrid cloud.
                        </p>
                      </div>
                      <h3>Hybrid Cloud Challenges</h3>
                      <p>
                        Migration of workloads and integration between the
                        private and public clouds are primary challenges.
                        Ensuring that applications and data do not become
                        fragmented between clouds is a key issue as well. The
                        challenge is how to accelerate the pace of change by
                        stitching together legacy environments — which aren’t
                        going away anytime soon for a variety of business,
                        security, compliance or technical reasons — with
                        emerging capabilities, creating a seamless hybrid IT
                        environment. Some of the key challenges are:
                      </p>
                      <div>
                        <div className="row">
                          <div className="col-sm-6 col-md-6 text-center">
                            <div>
                              <img src={WM} alt="" className="w15 m-0" />
                              <h4 className="my-3">Workload Migration</h4>
                            </div>
                            <p>
                              Choosing when to use what cloud provider is
                              daunting task as well as shifting legacy
                              applications present challenges.
                            </p>
                          </div>
                          <div className="col-sm-6 col-md-6 text-center">
                            <div>
                              <img src={IC} alt="" className="w15 m-0" />
                              <h4 className="my-4">Integrating Clouds</h4>
                            </div>
                            <p>
                              Manage the public and private clouds together that
                              administration tasks become more difficult.
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6 col-md-6 text-center">
                            <div>
                              <img src={WC} alt="" className="w15 m-0" />
                              <h4 className="my-3">Workload Fragmentation</h4>
                            </div>
                            <p>
                              Tracking resources and decommissioning them in
                              timely manner when they are migrated.
                            </p>
                          </div>
                          <div className="col-sm-6 col-md-6 text-center">
                            <div>
                              <img src={SPRT} alt="" className="w15 m-0" />
                              <h4 className="my-3">Support & Assistance</h4>
                            </div>
                            <p>
                              Obtaining a unified support experience across
                              cloud providers during outage and anomalies.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h2> How Can I Use a Hybrid Cloud?</h2>
                        <p>
                          From being able to migrate between clouds to
                          supporting local data regulations, hybrid cloud
                          enables the advanced level of management of computing
                          resources that is necessary to gain competitive
                          advantage in today’s business climate. However, simple
                          migration isn’t enough. It takes the ability to
                          seamlessly manage and move workloads and jobs between
                          clouds that provides the next level. Some of the
                          entry-level use cases for a hybrid cloud include:
                        </p>
                        <ul>
                          <li>Disaster Recovery/Backup</li>
                          <li>Application Development and Testing</li>
                          <li>Web Servers</li>
                          <li>
                            Data Extract, Transform, and Load (ETL) processes
                          </li>
                          <li>Machine learning and other analysis tasks</li>
                          <li>HR, Payroll, Productivity Applications</li>
                          <li>Supporting Local Data Regulations</li>
                          <li>Go Global and edge computing</li>
                        </ul>
                      </div>

                      <div>
                        <div className="d-flex align-items-center my-3">
                          <img src={DRB} alt="" className="whbd7 mr-3 my-3" />
                          <h4>Disaster Recovery/Backup</h4>
                        </div>
                        <div>
                          <p>
                            Backup and disaster recovery is the most common use
                            case as it serves two primary benefits. First, it
                            allows you to use a non-production workload as a
                            proof-of-concept for your initial entr into a cloud
                            environment. Second, it allows you to create
                            immediate value for your organization by elevating
                            and testing your business continuity strategy.
                          </p>
                        </div>
                      </div>

                      <div className="text-center">
                        <img src={scr} className='imgBx wimg' alt="" />
                      </div>
                      <div>
                        <div className="d-flex align-items-center">
                          <img
                            src={ADT}
                            alt=""
                            className="whbd7 mr-3 my-3 b-1"
                          />
                          <h4>Application Development and Testing</h4>
                        </div>
                        <p>
                          Application development and testing or “DevTest” is
                          another popular use case, particularly in
                          organizations focused on innovation. Many customers
                          move their dev/test environments to the cloud to gain
                          access to elastic and on-demand IT resources, while
                          leaving their production application and database on
                          premises.
                        </p>
                      </div>
                      <div>
                        <div className="d-flex align-items-center">
                          <img src={WS} alt="" className="whbd9 mr-3 my-3" />
                          <h4>Web Servers</h4>
                        </div>
                        <p>
                          Third, customers move web servers to the cloud to take
                          advantage of elastic compute resources. This allows a
                          customer to leverage auto-scaling to right-size
                          compute resources as demand spikes or declines.
                          Organizations can also use the cloud for content
                          delivery, placing their content closer to their
                          end-users to reduce latency. This also adds another
                          layer of business continuity as these customer-facing
                          applications can be dispersed and stored across
                          multiple locations to prevent a single point of
                          failure.
                        </p>
                      </div>
                      <div className="text-center">
                        <img src={SCR5} className='imgBx wimg' alt="" />
                      </div>
                      <div>
                        <div className="d-flex align-items-center">
                          <img
                            src={ETL}
                            alt=""
                            className="whbd7 mr-3 my-3 b-1"
                          />
                          <h4>
                            Data Extract, Transform, and Load (ETL) processes
                          </h4>
                        </div>
                        <p>
                          Data Extract, Transform, and Load (ETL) processes can
                          be quite resource-intensive and thus overwhelm the
                          capabilities of an internal cloud and datacenter.
                          Machine learning and other analysis tasks can also be
                          moved based on lowest cost and availability.
                        </p>
                      </div>
                      <div>
                        <div className="d-flex align-items-center">
                          <img src={HRP} alt="" className="whbd9 mr-3 my-3" />
                          <h4>HR, Payroll, Productivity Applications</h4>
                        </div>
                        <p>
                          Many customers are moving first-workload applications
                          to the cloud as their entry point. These entry-point
                          applications include Microsoft Active Directory,
                          Microsoft SharePoint, Microsoft Exchange, and
                          collaboration tools. Customers may also choose to move
                          front-office workloads, such as CRM, or operational
                          applications, such as HR and payroll. Moving these to
                          the cloud will provide:
                        </p>
                        <ul>
                          <li>
                            Scalable resources for applications and ever-growing
                            data consumption
                          </li>
                          <li>
                            Improved accessibility – access data anywhere and
                            from any device
                          </li>
                          <li>Improved business productivity</li>
                          <li>Easier to address compliance</li>
                          <li>
                            Common compute architecture built on Intel
                            delivering industry leading performance, security,
                            and support for the widest set of Enterprise
                            applications.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="d-flex align-items-center">
                          <img src={SLDR} alt="" className="whbd7 mr-3 my-3" />
                          <h4>Supporting Local Data Regulations</h4>
                        </div>
                        <p>
                          There are increasing legal and regulatory requirements
                          for data storage and processing. For example, European
                          data protection laws require protections for personal
                          information that are significantly different from
                          regulations in the United States and other regions. In
                          the United States, medical privacy laws such as HIPAA
                          and others create strict requirements on storage and
                          use of medical data. Utilizing a hybrid cloud is a
                          step in the right direction because you can use public
                          cloud providers in specific regions to support the
                          regulations for processing and storage.{" "}
                        </p>
                      </div>
                      <div>
                        <div className="d-flex align-items-center">
                          <img src={GGEC} alt="" className="whbd9 mr-3 my-3" />
                          <h4>Go Global and edge computing </h4>
                        </div>
                        <p>
                          To deliver a good experience, enterprises need to be
                          as close to customers as possible, and they need to
                          understand how customers consume applications, as well
                          as what components (payments, ads, videos) are
                          required from outside sources. Using a hybrid cloud,
                          enterprises can set up multiple availability zones
                          under their control, connect with cloud service
                          providers in regional markets, and use edge computing
                          techniques to forge a direct con¬nection to public
                          cloud resources.
                        </p>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="2">
                    <div>
                      <h2 className='hybmt'>GETTING STARTED TO HYBRID CLOUD</h2>
                      <p>
                        The first step is for CIOs to connect with the business
                        to establish clear lines of communication and to set
                        common goals. Within the IT organization, CIOs must set
                        policies that identify the need to prepare for hybrid
                        cloud as a priority for overall IT strategies. Then we
                        recommend assessing the company’s applications and IT
                        estate and creating a roadmap to guide the journey to
                        optimal hybrid cloud. This roadmap should compare
                        current and future run costs to create a business case
                        for change; assess application and workload placement
                        and data locality options; recommend application
                        transformation requirements; consider IT policy and
                        operating model factors; and ultimately produce clear,
                        data-based recommendations with a proposed execution
                        plan to enable hybrid IT transformation to happen.
                        Getting there will require transforming and migrating
                        applications, integrating and orchestrating
                        environments, automating and monitoring business
                        services, enabling digital processes, and integrating
                        data and security.{" "}
                      </p>
                      <div className="text-center">
                        <img src={HC} alt="" className="w-50" />
                      </div>
                      <div>
                        <h4>Key Strategic Drivers</h4>
                        <p>
                          As companies embrace hybrid Cloud, they must address
                          both technology and the human side of change. There
                          are several key actions to take:
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-sm-4 col-md-4 text-center">
                          <img src={ECC} alt="" className="w-22" />
                          <h4>Embrace Cultural Changes</h4>
                        </div>
                        <div className="col-sm-8 col-md-8">
                          <p>
                            As the organization start embracing hybrid cloud and
                            take benefits of Serverless, PaaS, IoT and edge
                            computing, so the workforce should become more
                            integrated, multifunctional, flexible and agile.
                            Existing and new IT stuffs must adept cloud
                            technologies, agile methodologies so that they can
                            build, deploy and scale applications across multiple
                            infrastructure environments using Agile and DevOps
                            processes. Most importantly companies need to foster
                            a culture of learning at scale.
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-4 col-md-4 text-center">
                          <img src={RCM} alt="" className="w-25" />
                          <h4>Revamp change management</h4>
                        </div>
                        <div class="col-ms-8 col-md-8">
                          <p>
                            The existing governance processes, gates and
                            approval procedures designed for traditional legacy
                            IT environments are no longer appropriate in a cloud
                            environment. Companies should revamp their change
                            management systems to allow changes to happen
                            quickly and, using automated workflows, to reduce
                            manual intervention.
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-4 col-md-4 text-center">
                          <img src={ICO} alt="" className="w-22" />
                          <h4>Integrate cloud operations</h4>
                        </div>
                        <div class="col-ms-8 col-md-8">
                          <p>
                            As organizations move workloads to the cloud, the IT
                            operations function should adapt to manage both
                            on-premises and cloud-based applications. This new
                            model, called CloudOps, can provide continuous
                            integrated operations in a multi-cloud environment
                            to enable rapid response to events, incidents and
                            requests. Adding DevOps to the mix then utilizes
                            automation, integration and organizational change to
                            enable more frequent enhancements that result in
                            higher quality software.
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 col-md-4 text-center">
                          <img src={AS} alt="" className="w-22" />
                          <h4>Automate support</h4>
                        </div>
                        <div class="col-sm-12 col-md-8">
                          <p>
                            To the extent possible, automate IT support
                            functions. For example, the traditional trouble
                            ticket system can be manually intensive and
                            inefficient. Automation can improve service and free
                            up IT personnel for higher-level activities. Longer
                            term, companies will be able to deploy machine
                            learning and AI to take log data from cloud-based
                            systems and automatically take actions to resolve or
                            even prevent incidents. The idea is to learn once,
                            fix with code and share learnings to improve code
                            over time and scale knowledge.
                          </p>
                        </div>
                      </div>
                      <div className="row mlr ">
                        <div className="col-sm-12 col-md-4 text-center">
                          <img src={ST} alt="" className="w-22" />
                          <h4>Manage “shadow IT”</h4>
                        </div>
                        <div class="col-sm-12 col-md-8">
                          <p>
                            Business units are often acquiring the cloud
                            services they need because IT moves too slowly. At
                            some point, those services must be integrated back
                            into the traditional IT environment for operational
                            and security reasons through a services governance
                            model that encompasses hybrid IT elements. In
                            addition, it’s important for CIOs to have a handle
                            on what the enterprise is spending on IT services.
                            The only way to accomplish this is to adopt hybrid
                            IT and demonstrate to business units that IT can
                            support the pace and scale that the business
                            requires.
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="3">
                    <div>
                      <h2 className='hybmt'>HOW SYNECTIKS CAN HELP</h2>
                      <p className="py-4">
                        Synectiks can enable your enterprise journey to hybrid
                        IT, regardless of your starting point.
                      </p>
                      <div className="row my-5">
                        <div className="col-md-4 text-center">
                          <img src={ST} alt="" className="w-25 mt-n5" />
                          <h4>Discovery & Assessment</h4>
                        </div>
                        <div className="col-md-8">
                          <p>
                            Our discovery and assessment services can help you
                            draft a hybrid IT roadmap with a clearly defined
                            business case and prioritized recommendations by
                            workload or accelerate efforts already underway. Our
                            recommendations reflect deep industry knowledge and
                            contextual knowledge about your business.
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4 text-center">
                          <img src={TS} alt="" className="w-25 mt-3" />
                          <h4>Transformation Services</h4>
                        </div>
                        <div className="col-md-8">
                          <p>
                            You can access our open Xformation platform products
                            and resource teams to adopt change quickly — from
                            application migration, transformation and
                            integration to cloud-native apps development,
                            containerization, platform services and
                            microservices — to enable your enterprise to thrive
                            in public and virtual private environments.
                            Synectiks xformation platform coupled with its
                            Hybrid cross cloud infrastructure delivers you the
                            maximum flexibility to run/move your high performant
                            workloads across clouds and manage them through a
                            single pane of glass.
                          </p>
                        </div>
                      </div>
                      <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded my-5">
                        <div className="blockquote-custom-icon bg-info shadow-sm">
                          <i className="fa fa-quote-left text-white"></i>
                        </div>
                        <p className="mb-0 mt-2 font-italic">
                          "Synectiks managed services helped us to consolidate
                          our entire business from 4 different DC’s to a hybrid
                          cloud that is fully software defined and microservices
                          based ensuring our scalability and performance SLA."
                        </p>
                        <footer className="blockquote-footer pt-4 mt-4 border-top">
                          Top 2 Motor Industry
                          <br />
                          <cite title="Source Title">
                            (Did complete software defined transformation
                            Modernization)
                          </cite>
                        </footer>
                      </blockquote>
                    </div>
                  </TabPane>
                  <TabPane tabId="4">
                    <div>
                      <div className="my-3">
                        <h3>
                          <b>Synectiks</b> Differentiator
                        </h3>
                        <p>
                          We go beyond creating a strategy: Synectiks helps you
                          plan it, do it, run it and manage it.
                        </p>

                        <h4>
                          Top 12 Reasons to select Synectiks as your Hybrid
                          Cloud Partner:
                        </h4>
                      </div>

                      <div className="my-4">
                        <div className="row">
                          <div className="col-sm-4 col-md-4 text-center">
                            <div>
                              <img src={EX} alt="" className="tw m-0" />
                              <h4 className="my-3">Experience</h4>
                            </div>
                            <p> 10+ Large Scale Hybrid Cloud Transformation</p>
                          </div>
                          <div className="col-sm-4 col-md-4 text-center">
                            <div>
                              <img src={EXP} alt="" className="tw m-0" />
                              <h4 className="my-4">Expertise</h4>
                            </div>
                            <p>
                              Experience Team with proven track record of
                              CloudOps delivery enabled with DevSecOps
                              Capabilities
                            </p>
                          </div>
                          <div className="col-sm-4 col-md-4 text-center">
                            <div>
                              <img src={TM} alt="" className="tw m-0" />
                              <h4 className="my-3">Time & Money</h4>
                            </div>
                            <p>
                              {" "}
                              Our open Product Driven Delivery Model allows
                              customers to quickly build, deliver and
                              orchestrate cross cloud services @50% time & cost.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="row">
                          <div className="col-sm-4 col-md-4 text-center">
                            <div>
                              <img src={EE} alt="" className="tw m-0" />
                              <h4 className="my-4">E2E Solution</h4>
                            </div>
                            <p>
                              Single point of contact for Application Migration,
                              Transformation and Integration to cloud-native
                              Apps services.
                            </p>
                          </div>
                          <div className="col-sm-4 col-md-4 text-center">
                            <div>
                              <img src={SCP} alt="" className="tw m-0" />
                              <h4 className="my-3">Single Control plane</h4>
                            </div>
                            <p> Xformation is a single interface and platform to manage all your workloads distributed across multiple clouds and boundaries within a single control plane.</p>
                          </div>
                          <div className="col-sm-4 col-md-4 text-center">
                            <div>
                              <img src={CS} alt="" className="tw m-0" />
                              <h4 className="my-4">Compliance & Security</h4>
                            </div>
                            <p>
                              Our compliance and security assessment tools makes
                              sure your hybrid cloud journey meet your business
                              compliance.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="row">
                          <div className="col-sm-4 col-md-4 text-center">
                            <div>
                              <img src={EA} alt="" className="tw m-0" />
                              <h4 className="my-3">Extreme Automation</h4>
                            </div>
                            <p>
                              {" "}
                              Use our existing automation capabilities to
                              automate infrastructure , operations, security in
                              hybrid IT environment.
                            </p>
                          </div>
                          <div className="col-sm-4 col-md-4 text-center">
                            <div>
                              <img src={PCP} alt="" className="tw m-0" />
                              <h4 className="my-4">Public Cloud Partnership</h4>
                            </div>
                            <p>
                              Our advanced partnership with major public cloud
                              providers help you to get support at every stage.
                            </p>
                          </div>
                          <div className="col-sm-4 col-md-4 text-center">
                            <div className="d-flex text-center px-5">
                              <div>
                                <div>
                                  <img src={DE} alt="" className="tw m-0" />
                                  <h4 className="my-3">Demo Environment</h4>
                                </div>
                                <p>
                                  Avail the opportunity to quickly create demo
                                  hybrid cloud setup in our existing hybrid IT
                                  environment and testify you key business use
                                  cases.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="row">
                          <div className="col-sm-4 col-md-4 text-center">
                            <div>
                              <img src={WO} alt="" className="tw m-0" />
                              <h4 className="my-4">Optimization Service</h4>
                            </div>
                            <p>
                              We do optimal resource pooling from multiple
                              clouds.
                            </p>
                          </div>
                          <div className="col-sm-4 col-md-4 text-center">
                            <div>
                              <img src={EM} alt="" className="tw m-0" />
                              <h4 className="my-3">Engagement Model</h4>
                            </div>
                            <p>
                              Our every engagement focused on empowerment – not
                              dependency
                            </p>
                          </div>
                          <div className="col-sm-4 col-md-4 text-center">
                            <div>
                              <img src={LTR} alt="" className="tw m-0" />
                              <h4 className="my-4">Long Term Retention</h4>
                            </div>
                            <p>100% Customer Retention Rate.</p>
                          </div>
                        </div>
                        <p>
                          Finally, we help you run it all at a lower cost using
                          CloudOps delivery enabled with DevSecOps capabilities
                          and extreme automation from our Synectiks Xformation
                          platform driven services delivery model. Xformation
                          Platform allows to quickly build and deliver and
                          orchestrate cross cloud services , at-scale,
                          repeatable offerings and solutions that help to drive
                          your Hybrid Cloud journey @50% time & cost. Xformation
                          is a single interface and platform to manage all your
                          workloads distributed across multiple clouds and
                          boundaries within a single control plane. <br />
                          Now is the time to act. Don’t be disrupted — be the
                          disruptor. Let us help you innovate and transform to
                          differentiate with speed and quality. That’s
                          Synectiks. That’s transformation Delivered in open
                          product based solutioning model.
                        </p>
                      </div>
                    </div>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
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
        </HybridWrapper>
      </Layout>
    )
  }
}

export default Hybridcloud

const HybridWrapper = styled.div`
h1{
  font-size:1.4rem;
}
h2{
 font-size: 1.3rem;
}
h3{
  font-size:1.2rem;
}
h4{
  font-size:1.1rem;
}
.hybmt{
  margin-top: 1.5rem;
}
.nav-link.active{
  background: rgba(0,0,0,0);
}
@media (min-width: 576px){
  	.himage {
		width: 50%;
		height: auto;
		box-shadow: 5px 5px 5px #789;
		float: left;
		margin-right: 2rem;
		margin-bottom: 10px;
	}
  .nav-link.active{
  background: rgba(0,0,0,0);
}
.hbh1 {
    font-size: 2.5rem;
}
h2{
  font-size: 2rem;
}
h3{
  font-size:1.75rem;
}
h4{
   font-size: 1.5rem;
}
}
@media(min-width:768px){
  	.himage {
		width: 100%;
		height: auto;
		box-shadow: 5px 5px 5px #789;
		margin-right: 2rem;
		margin-bottom: 10px;
	}
}
@media(min-width:1024px){
 	.himage {
		width: 50%;
		height: auto;
		box-shadow: 5px 5px 5px #789;
		float: left;
		margin-right: 2rem;
		margin-bottom: 10px;
	}
}
`

