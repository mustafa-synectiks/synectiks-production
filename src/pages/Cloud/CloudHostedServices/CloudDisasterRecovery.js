import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import ModalContact from '../../../components/ModalContact';
import Layout from '../../../components/layout';
import cd from '../../../images/DisasterRecovery_Subpage.jpg';
import cc from '../../../images/CloudCommon.png';
import '../../../components/layout.css';

// const wid = {
//   width: "91%",
// }

export class CloudDisasterRecovery extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			modal: false,
			fields: {},
			errors: {}
		};

		this.toggle = this.toggle.bind(this);
	}
	toggle() {
		this.setState((prevState) => ({
			modal: !prevState.modal
		}));
	}
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<Layout>
				<div className='bg-lightgrey container'>
					<div className=' text-black w-100 text-white flex-col d-flex text-justify'>
						<div className='mt-2 pt-3 text-black'>
							<div className='d-flex'>
								<h1>CLOUD&nbsp; &#8208;</h1>
								<h1>
									<i>&nbsp;Cloud Your Way!</i>
								</h1>
							</div>
							<p className='pht lineHeight-24'>
								SYNECTIKS provides industry-leading expertise services and solutions that allow you to
								address your specific needs and execute on the best-agreed approach to build and manage
								a cloud-enabled enterprise, that aligns with your transformation goals.
							</p>
							<p className='pht lineHeight-24'>
								Whether you are yet to explore or have already started your cloud journey, we help you
								to accelerate your company’s digital transformation and empower your business to stay
								ahead of the game.
							</p>
							<p className='pht lineHeight-24'>
								With our expertise on Cloud Solutions we will deliver it the way you need it –
								on-premise or private, public or hybrid cloud. Get no-cost expert guidance.
							</p>
							<p className='pht lineHeight-24'>
								We’ll listen to You! Your business objectives and growth strategy. Schedule a 30-minute
								consultation to get your expedition to cloud started.
							</p>
						</div>

						<div className=' pl-5 py-3 mt-3 w-60'>
							<img height='auto' className='img100 img-fluid' src={cc} alt='Cloud' />
						</div>
					</div>

					<div className=' bg-white d-flex justify-content-around align-items-center flex-col text-center col-lg-12'>
						<div className='py-3 col-md-4'>
							<a className='text-logoblue bg-white noLine' href='/HostedInfrastructure/index.html'>
								Hosted Infrastructure
							</a>
						</div>
						<div className='py-3 col-md-4'>
							<a className='text-logoblue bg-white noLine' href='/CloudManagedBackup/index.html'>
								Cloud Managed Backup
							</a>
						</div>
						<div className='py-3 col-md-4 bg-logoblue brdr025'>
							<a className='text-white  noLine' href='/CloudDisasterRecovery/index.html'>
								Cloud Disaster Recovery
							</a>
						</div>
					</div>
					<div className='text-black w-100 mt-3 py-2 flex-col d-flex text-justify'>
						<div className='w-50 px-3 mt-3'>
							<img height='auto' width='100%' className='' src={cd} alt='Cloud Disaster Recovery' />
						</div>

						<div className='w-100 px-3 pt-2 text-black'>
							<h4 className=''>
								Protect your enterprise data with recovery capabilities that keep the lights on!
							</h4>
							<p className='lineHeight-34 '>
								<ul>
									<li>Data integrity for large, enterprise-class applications.</li>
									<li>Back to business as per our requirements.</li>
								</ul>
							</p>

							<p className='my-3'>
								<h3>Why&nbsp;choose&nbsp;SYNECTIKS?</h3>
							</p>

							<p className='lineHeight-34'>
								We design and build DR solutions according to your unique business needs, offering:
								<br />{' '}
								<ul>
									<li>
										<b>Customization:</b> We build the solution according to your business
										continuity needs. With RPO, RTO, Secondary Site Location, Failover and Failback
										options, we choose the best solution.
									</li>
									<li>
										<b>Security:</b> Maintain the safety of your data with our state-of-the-art
										encryption.
									</li>
									<li>
										<b>Tiering:</b> Leverage our solutions for optimizing cost – whether it is
										active-active, active-passive
									</li>
									<li>
										<b>Technology:</b> We leverage VMware and native device replication capabilities
										to deliver industry-leading capabilities.
									</li>
								</ul>
							</p>
						</div>
					</div>

					<div className='px-5'>
						<p className='lineHeight-24'>
							<a
								className='navlink navfont noLine text-logoblue cursPoint'
								href='https://synectiks.com/contactus/index.html'>
								<small>Contact&nbsp;Us&nbsp;</small>
							</a>
							to learn more about SYNECTIKS Disaster Recover as a Service.
							<br />{' '}
						</p>
					</div>
					<div className='container'>
						<div className='d-flex justify-content-around align-items-center mt-5 flex-col' />
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
        `
						}}
					/>
				</Helmet>
			</Layout>
		);
	}
}
export default CloudDisasterRecovery;
