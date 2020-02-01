import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import ModalContact from '../../../components/ModalContact';
import Layout from '../../../components/layout';
import HostedInfra from '../../../images/HostedInfra.png';
import CommonCloud from '../../../images/CloudCommon.png';
import '../../../components/layout.css';
import AP from '../../../images/Hosted Infrastructure/AffordablePricing.png';
import ARP from '../../../images/Hosted Infrastructure/Availability&ReliablePerformance.png';
import HW from '../../../images/Hosted Infrastructure/Hostanyworkload.png';
import MS from '../../../images/Hosted Infrastructure/MigrationServices.png';
import MSGL from '../../../images/Hosted Infrastructure/MultiSecureGeoLocations.png';
import SCR from '../../../images/Hosted Infrastructure/Security.png';
import ST from '../../../images/Hosted Infrastructure/StorageTypesavailable.png';
import SPT from '../../../images/Hosted Infrastructure/Support.png';

const wid = {
	width: '91%'
};

export class HostedInfrastructure extends React.Component {
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

	handleValidation() {
		let fields = this.state.fields;
		let errors = {};
		let formIsValid = true;

		if (!fields['email']) {
			formIsValid = false;
			errors['email'] = 'Cannot be empty';
		}

		if (typeof fields['email'] !== 'undefined') {
			let lastAtPos = fields['email'].lastIndexOf('@');
			let lastDotPos = fields['email'].lastIndexOf('.');

			if (
				!(
					lastAtPos < lastDotPos &&
					lastAtPos > 0 &&
					fields['email'].indexOf('@@') === -1 &&
					lastDotPos > 2 &&
					fields['email'].length - lastDotPos > 2
				)
			) {
				formIsValid = false;
				errors['email'] = 'Email is not valid';
			}
		}

		this.setState({ errors: errors });
		return formIsValid;
	}

	contactSubmit(e) {
		e.preventDefault();
		if (this.handleValidation()) {
			alert('Form submitted');
		} else {
			alert('Form has errors.');
		}
	}

	handleChange(field, e) {
		let fields = this.state.fields;
		fields[field] = e.target.value;
		this.setState({ fields });
	}

	render() {
		return (
			<Layout>
				<div className='bg-lightgrey container mb-0 pb-3'>
					<div className=''>
						<div className='text-black w-100 mt-3 py-4 flex-col d-flex text-justify'>
							<div className='w-100  pl-3 pr-3 text-black'>
								<h3 className='my-3'> Cloud Hosted Infrastructure</h3>
								<p className='lineHeight-24 text-justify mt-4'>
									Synectiks Secure Cloud Hosted Services supports a variety of workloads & Disaster
									Recovery with a high degree of control, security and simplicity. Support your
									mission-critical applications and workloads with instant and scalable
									infrastructure. With Synectiks Cloud Hosted Services, you can focus on your business
									needs instead of spending the time and money it takes to plan, procure, secure and
									manage the right infrastructure to meet your application demands.
								</p>
							</div>
							<div className='w-100' data-aos='fade-up'>
								<img class='w-75 ml-3' src={HostedInfra} width='100%' alt='Hosted Infrastructure' />
							</div>
						</div>
						<h4> Why choose SYNECTIKS Cloud Hosted Infrastructure Services? </h4>
						<div className='d-flex align-items-start align-items-md-start mt-5'>
							<img class='w-12 mr-3' src={SCR} alt='Security' />
							<div>
								<h5 className='h5'>Security</h5>
								<p className='mt-2'>
									Never trade-off security when moving to cloud, Synectiks Secure Cloud incorporates
									Multifactor authentication, SSL-VPN, Data-At-Rest Encryption, Antivirus,
									Anti-Malware, Vulnerability Scans, Intrusion Prevention System (IPS), Denial of
									Service (DoS), IOC Detection with traffic segmentation.
								</p>
							</div>
						</div>
						<div className='d-flex align-items-start align-items-md-center mt-3'>
							<img class='w-12 mr-3' src={ARP} alt='Availability & Reliable Performance' />
							<div>
								<h5 className='h5'>Availability & Reliable Performance</h5>
								<p className='mt-2'>
									Built with best of the bread technologies, our infrastructure can support any
									workload with reliable and consistent performance.
								</p>
							</div>
						</div>
						<div className='d-flex align-items-start align-items-md-start mt-5'>
							<img class='w-12 mr-3' src={AP} alt='Affordable Pricing' />
							<div>
								<h5 className='h5'>Affordable Pricing</h5>
								<p className='mt-2'>
									we believe we have competitive affordable pricing when compared all major
									Vendors/public clouds currently available in the Market. <br />Contact us at&nbsp;
									<a href='mailto:info@synectiks.com' target='_top'>
										info@synectiks.com
									</a>{' '}
									for a quick affordable customized quote.
								</p>
							</div>
						</div>
						<div className='d-flex align-items-start  align-items-md-end mt-5'>
							<img class='w-10 mr-3' src={MSGL} alt='Multi Secure Geo Locations' />
							<div>
								<h5 className='h5'>Multi Secure Geo Locations</h5>
								<p className='mt-2'>
									Different Secure Geo locations for customers to choose. Different power grid
									locations to make sure your infrastructure is available when disaster strikes a
									location.
								</p>
							</div>
						</div>
						<div className='d-flex align-items-start  align-items-md-start  mt-5'>
							<img class='w-12 mr-3' src={HW} alt='Host any workload' />
							<div>
								<h5 className='h5'>Host any workload</h5>
								<p className='mt-2'>
									Whether your mission-critical applications powered by Linux, Windows Server, all
									Major Applications and Databases, Synectiks offers support for these and other
									workloads, including your favorite Open Source technologies, choose from a wide
									variety of virtual machine sizes and storage performance classes configured for
									specific types of workloads.
								</p>
							</div>
						</div>
						<div className='d-flex align-items-start align-items-md-center mt-4'>
							<img class='w-12 mr-3' src={ST} alt='Storage Types available:' />
							<div>
								<h5 className='h5'>Storage Types available</h5>
								<p className='mt-2'>S3, NAS, SAN, Cloud file & share.</p>
							</div>
						</div>
						<div className='d-flex align-items-start  align-items-md-center mt-5'>
							<img class='w-12 mr-3' src={MS} alt='' />
							<div>
								<h5 className='h5'>Migration Services</h5>
								<p className='mt-2'>
									we have expert professional team to migrate your current on premises workloads to
									cloud.
								</p>
							</div>
						</div>
						<div className='d-flex align-items-start align-items-md-center mt-5'>
							<img class='w-12 mr-3' src={SPT} alt='' />
							<div>
								<h5 className='h5'>Support</h5>
								<p className='mt-2'>
									Follow the Sun model - 24/7/365 days support from both onshore and offshore Teams.
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
        `
						}}
					/>
				</Helmet>
			</Layout>
		);
	}
}

export default HostedInfrastructure;
