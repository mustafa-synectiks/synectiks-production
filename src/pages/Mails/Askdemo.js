import * as React from "react"
import { Helmet } from "react-helmet"
// import { Formik } from "formik"
// import * as Yup from "yup"
// import NiceToMeet from "../../images/NiceToMeet.png"
import Layout from "../../components/layout"
import "../../components/layout.css"
import ContactM from "../../components/ContactMe"
const s = {
  textAlign: "center",
  marginTop: "2rem",
  marginBottom: "2rem",
}
const h = {
  paddingTop: "2rem",
}
export class Contact extends React.Component {
  render() {
    return (
      <Layout>
        <div class="container">
          <div style={s}>
            <h1 style={h}>Ask For Demo</h1>
          </div>
          <ContactM />
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

export default Contact
