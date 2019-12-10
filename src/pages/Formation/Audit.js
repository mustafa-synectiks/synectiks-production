import * as React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import adt from "../../images/Audit_Central.png"
import partner from "../../images/Aws-Standard-Consulting-Partner-logo.png"
import mgcap from "../../images/4-icons.png"
import icn from "../../images/Tick-icon.png"
import "../../components/layout.css"

export const Audit = () => {
  return (
    <Layout>
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

      <div>
        <img
          className="  text-center pt-5 mt-5"
          src={adt}
          width="100%"
          alt="Resource"
        />
      </div>
      <div class="container">
        <div className="row col-md-12 mx-auto middleSquare text-center">
          <div className="col-md-4 text-blue p-3">
            <h3>Security &amp; Best Practices</h3>
          </div>
          <div className="col-md-4 text-center">
            <div className="diamond my-3 mx-auto text-center">
              <img
                className="text-center"
                src={partner}
                width="85%"
                id="AWS"
                alt=" Resource"
              />
            </div>
          </div>
          <div className="col-md-4 text-blue p-3">
            <h3>Cost &amp; Time Optimization</h3>
          </div>
        </div>

        <div className="d-flex col-lg-12 justify-content-around align-items-center flex-col m-3">
          <div className="col-md-6 bg-skyblue  h-300 p-5">
            <h3 className="text-center text-uppercase text-white">
              Optimize your Cloud Utilization and Billing
            </h3>
            <ul className="text-white">
              <li>Adopt containerization and server less</li>
              <li>Optimal dynamic instance selection</li>
              <li>Reclaim under utilized resources</li>
            </ul>
          </div>

          <div className="col-md-6">
            <img className="card-img-top" src={icn} alt="Card cap" />
          </div>
        </div>

        <div className="d-flex col-lg-12 justify-content-around align-items-center flex-col m-3">
          <div className="col-md-6 w-75">
            <img className="card-img-top w-75" src={mgcap} alt=" cap" />
          </div>
          <div className="col-md-6 bg-skyblue h-300 p-5">
            <h3 className="text-center text-uppercase text-white">
              Continuous Security and Governance
            </h3>
            <h6 className="text-white">
              Ensure security and compliance across multiple account / product /
              environment. Compliance Check for CIS, HIPPA, PCI-DSS. Ensure
              account wise security role and policies.
            </h6>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Audit
