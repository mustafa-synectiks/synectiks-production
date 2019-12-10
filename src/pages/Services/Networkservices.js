import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../../components/layout"
import N from "../../images/NetworkServices.jpg"

export class Networkservices extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Layout>
        <div className="bg-lightgrey container">
          <div className="w-100 pb-3">
            <img
              height="auto"
              width="100%"
              className=""
              src={N}
              alt="Network Services"
            />
          </div>

          <div className=" text-black w-100  text-white px-5 flex-col d-flex text-justify">
            <div className="w-100  text-black">
              <p className="w-100  text-black">
                <h2 className="mt-3">Network Services</h2>
              </p>
              <p className="lineHeight-24">
                Networks are the most critical component of an effective
                enterprise IT environment. Software-defined environments
                incorporate flexibility, automation, high availability and open
                standards into your IT landscape so you can meet next-generation
                agility, innovation and application demand in the cloud.
                <br />{" "}
              </p>
              <p className="lineHeight-24">
                Network services from SYNECTIKS support your network’s growing
                need for agility, security and scalability in a multi-vendor,
                multi-technology environment. We provide straightforward
                guidance and extensive knowledge on networking across industries
                and we use a lifecycle approach that spans strategy, assessment,
                planning, design, implementation and management. Our services
                range from network connectivity consulting and integration to
                managed network services and software-defined networking.
                <br />{" "}
              </p>
            </div>
          </div>

          <div
            className=" text-black w-100 text-white px-5 py-2 flex-col d-flex text-justify"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="w-100  text-black">
              <p className="lineHeight-24 ">
                <p>
                  <b>Services Offered</b>
                </p>
                <ul className="lineHeight-34">
                  <li>
                    <b>Managed Network Services:</b> Improve agility while
                    reducing cost and complexity across all your hybrid cloud,
                    data center, local and hybrid or software-defined wide area
                    networks.
                  </li>
                  <li>
                    <b>Network Connectivity Consulting and Integration:</b>{" "}
                    Unify your network and infrastructure and lay the foundation
                    for your network transformation to adopt cloud and new
                    technologies.
                  </li>
                  <li>
                    <b>Software Defined Networking:</b> Modernize your network
                    so that it can sense traffic and automatically reconfigure
                    the network for new workloads and business conditions in a
                    security-rich manner.
                  </li>
                </ul>
              </p>
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
export default Networkservices
