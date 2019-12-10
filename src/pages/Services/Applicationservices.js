import * as React from "react"
import { Helmet } from "react-helmet";
import Layout from '../../components/layout'
import ApplicationServices from '../../images/ApplicationServices.jpg'
import Office365 from '../../images/Office365.jpg'
import '../../components/layout.css'
// import Growth from '../../images/Growth.png'
// import Migration from '../../images/Migration.png'
// import Replatform from '../../images/Replatform.png'
// import Remedition from '../../images/Remedition.png'
// import Discovery from '../../images/Discovery.png'
// import CheckMark from '../../images/CheckMark.png'
// import ApplicationServicesErp from '../../images/ApplicationServices_Erp.jpg'

    export class Applicationservices extends React.Component {

        componentDidMount() {
            window.scrollTo(0, 0)
          }

        render() {
            return (
                <Layout>

        <div className='bg-lightgrey'>

            <div className="w-100 pb-3" >
                <img height="auto" width="100%"
                    className=""
                    src={ApplicationServices}
                    alt="Application Services"
                />
            </div>
                        <div class="container">
                            <div>
                                                         </div>
                            <div className="px-1 " data-aos="fade-up" data-aos-duration="2000">
                                <div className="">
                                    <div className="pt-3 text-center">
                                        <img src={Office365} width="100%" alt="Office365" className="imgBx"/>{" "}
                                    </div>
                                </div>
                            </div>

                            <div className=' text-black w-100 mt-3 text-white px-5 pb-2 pt-5 flex-col d-flex text-justify'
                                data-aos="fade-up" data-aos-duration="2000">
                                <div className="w-100  text-black">
                                    <p className="lineHeight-24">
                                        Microsoft is the recognized leader in cloud productivity solutions for business with Office 365 - transforming the workplace experience.
                    </p>
                                    <p className="lineHeight-24">
                                        With a certified team of Microsoft Partner Professionals, SYNECTIKS delivers on all Microsoft Cloud Solutions, including
                                        Office 365, SharePoint, Skype for Business, Teams, Power BI, Microsoft 365 (Office 365 + Enterprise Mobility + Security) and Azure.
                    <br />
                                    </p>
                                    <p className="lineHeight-24">
                                        Imagine what we can do for you!
                    <br />
                                    </p>
                                    <p className="lineHeight-24">
                                        We don’t just move you to Office 365. We help you create and sustain a cost-efficient, highly responsive and
                                        secure evergreen workplace platform. We provide a holistic set of transformational and managed services to modernize your workplace.
                    <br />
                                    </p>
                                    <p className="lineHeight-24">
                                        <p><b>We can help accelerate your move to a digital workplace through our :</b>
                                        </p>
                                        <ul className="lineHeight-34">
                                            <li>Experience in unlocking the full productivity potential of Office 365</li>
                                            <li>Giving you cost-effective and collaborative tools, including Microsoft Teams, Skype for Business and SharePoint Online.</li>
                                            <li>Insights from self-service and data discovery with Microsoft Power BI for Office 365.</li>
                                            <li>Ability to extend standard Office 365 service offerings with managed services</li>
                                        </ul>
                                    </p>

                                </div>
                            </div>

                            <div className="w-100 px-5  text-black" data-aos="fade-up" data-aos-duration="2000">
                                <p className="lineHeight-24">
                                    <b>Find Out Why Users Are Choosing Office 365</b>
                                </p>
                            </div>
                            <div className="d-flex px-5 py-3 flex-col text-center col-lg-12" data-aos="fade-up" data-aos-duration="2000">

                                <div className="p-3 m-1 col-sm-3 border-grey-2px text-center" >
                                    <div className="w-100 ">
                                        <p><b>Work Better Together</b></p>
                                        <p>
                                            Work Anywhere, Anytime, on Any Device with Office 365. Empower your employees the tools they need.
                    </p>
                                    </div>
                                </div>

                                <div className="p-3 m-1 col-sm-3 border-grey-2px text-center" >
                                    <div className="w-100 ">
                                        <p><b>Get More Done</b></p>
                                        <p >
                                            Enjoy access to the latest versions, security updates and feature releases.
                    </p>
                                    </div>
                                </div>

                                <div className="p-3 m-1 col-sm-3 border-grey-2px text-center" >
                                    <div className="w-100 ">
                                        <p><b>Work Securely</b></p>
                                        <p>
                                            Work and Share files confidently with built-in security and privacy controls that help keep your data safe and secure.
                    </p>
                                    </div>
                                </div>
                                <div className="p-3 m-1 col-sm-3 border-grey-2px text-center" >
                                    <div className="w-100 ">
                                        <p><b>Simplified for You</b></p>
                                        <p >
                                            Choose solutions that are right for your business. Get more value for your money.
                    </p>
                                    </div>
                                </div>
                            </div>

                            <div className=' text-black w-100 mt-3 text-white px-5 py-2 flex-col d-flex text-justify'
                                data-aos="fade-up" data-aos-duration="2000">
                                <div className="w-100  text-black">
                                    <p className="lineHeight-24 ">
                                        <p><b>Built by Microsoft, Made Easy by SYNECTIKS</b>
                                        </p>
                                        <ul className="lineHeight-34">
                                            <li><b>Reliable Support:</b> 24x7x365 support via phone or ticket. 15-minute response time
                            on Sev-1 tickets. SLA based proactive support with Microsoft support escalations.</li>
                                            <li><b>Migration Assistance:</b> Let our dedicated team of specialists help you plan and perform your email data migration.</li>
                                            <li><b>Dedicated to Your Success:</b> It’s our mission to enable your continued success by advising you and your team on the right technologies &amp; tools to deliver the desired results.</li>
                                            <li><b>Licensing Management:</b> We can provide all required Office 365 licensing for your organization on one consolidated invoice.</li>
                                        </ul>
                                    </p>
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
    );
};
    }

export default Applicationservices;
