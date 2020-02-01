import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import ModalContact from '../../../components/ModalContact';
import Layout from '../../../components/layout';
import cc from '../../../images/CloudCommon.png';
import cb from '../../../images/CloudBackup2.png';
import AP from '../../../images/Cloud Managed Backup/Affordable Pricing.png';
import DMBSA from '../../../images/Cloud Managed Backup/Different Modes of Backup Storage available.png';
import EBSU from '../../../images/Cloud Managed Backup/Efficient Backup Storage Usage.png';
import FR from '../../../images/Cloud Managed Backup/Fast Recovery.png';
import MSGL from '../../../images/Cloud Managed Backup/Multi Secure Geo Locations.png';
import PRAW from '../../../images/Cloud Managed Backup/Protection for any workload.png';
import SCRT from '../../../images/Cloud Managed Backup/Security.png';
import SPRT from '../../../images/Cloud Managed Backup/Support.png';
import '../../../components/layout.css';
export class CloudManagedBackup extends React.Component {
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
				<div className='bg-lightgrey container'>
					<div>
						<div className='text-black w-100 mt-3 py-4 flex-col d-flex text-justify'>
							<div className='w-100 pt-3 text-black text-justify mr-3'>
								<h3>Secure, Reliable & Very Affordable Cloud Backup Solution</h3>
								<p className='text-justify'>
									At Synectiks, Data Protection is at the topmost priority and is monitored with
									utmost vigilance. Synectiks Cloud Backup with front line innovation reinforcement
									arrangements offers a simple, secure and moderate cloud offsite backup needs. You
									can have your backup offsite with sureness at Synectiks Cloud establishment at
									Preferred Geo Locations. Synectiks backup solutions provide exceptional,
									customizable backup and storage management solutions for any system setup: physical
									servers, virtual machines, PCs, business-critical applications, Databases and more.
								</p>
							</div>
							<div className='w-100'>
								<img height='auto' width='100%' className='' src={cb} alt='Cloud Backup' />
							</div>
						</div>
						<h4> Why choose SYNECTIKS Cloud Backup Solution?</h4>
						<div className='d-flex align-items-start align-items-md-start mt-5'>
							<img src={SCRT} alt='' className='w-12 mr-3' />
							<div>
								<h5 className='h5'>Security</h5>
								<p className='text-justify'>
									Make sure your vendor offers strong security, including encryption. It doesn't
									matter how well you have protected your primary systems if your backup systems
									present an easy target for attackers. Any cloud backup service you use needs to have
									the same level of security that your primary systems have.
								</p>
								<ul>
									<li>END to END Encryption: In-Flight and Data-At-Rest Encryption.</li>
									<li>AI-based ransomware protection. </li>
								</ul>
							</div>
						</div>
					</div>
					<div className='d-flex align-items-start align-items-md-center'>
						<img src={DMBSA} alt='' className='w-12 mr-3' />
						<div>
							<h5 className='h5'>Different Modes of Backup Storage available</h5>
							<p className='mt-2'>S3, NAS, SAN, ABGP.</p>
						</div>
					</div>
					<div className='d-flex align-items-start align-items-md-center mt-5'>
						<img src={AP} alt='' className='w-12 mr-3' />
						<div>
							<h5 className='h5'>Affordable Price</h5>
							<p className='mt-2'>
								Cloud Backup storage as low as $0.018/GB per Month (only charged for the storage
								consumed).
							</p>
						</div>
					</div>
					<div className='d-flex align-items-start align-items-md-center mt-5'>
						<img src={EBSU} alt='' className='w-12 mr-3' />
						<div>
							<h5 className='h5'>Efficient Backup Storage Usage</h5>
							<p className='mt-2'>
								De-duplication and Compression technologies optimize backup storage capacity.
							</p>
						</div>
					</div>
					<div className='d-flex align-items-start align-items-md-start mt-5'>
						<img src={MSGL} alt='' className='w-12 mr-3 mn-1p' />
						<div>
							<h5 className='h5'>Multi Secure Geo Locations</h5>
							<p className='text-justify'>
								We at Synectiks aim for 3-2-1 rule of Thumb to protect the Data, which implies that you
								should always have three copies of your data, that you keep it backed up on at least two
								different types of storage media, and that you have at least one copy of the data
								offsite. Synectiks have different backup Secure Geo locations with different power grids
								to make sure your data is available when disaster strikes a location.
							</p>
						</div>
					</div>
					<div className='d-flex align-items-start align-items-md-start mt-3'>
						<img src={PRAW} alt='' className='w-12 mr-3' />
						<div>
							<h5 className='h5'>Protection for any workload</h5>
							<p className='mt-2'>
								Protect Windows, Linux, Macs, eight major hypervisors, iOS, Android, Complete Office 365
								Protection, all Major Applications and Databases.
							</p>
						</div>
					</div>
					<div className='d-flex align-items-start align-items-md-center mt-5'>
						<img src={FR} alt='' className='w-12 mr-3' />
						<div>
							<h5 className='h5'> Fast Recovery</h5>
							<p className='mt-2'>Recover the Data faster, transfer rate up to 1GB/sec.</p>
						</div>
					</div>
					<div className='d-flex align-items-start align-items-md-center mt-5 pb-3'>
						<img src={SPRT} alt='' className='w-12 mr-3' />
						<div>
							<h5 className='h5'>Support</h5>
							<p className='mt-2'>
								Follow the Sun model - 24/7/365 days support from both onshore and offshore Teams.
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
        `
						}}
					/>
				</Helmet>
			</Layout>
		);
	}
}

export default CloudManagedBackup;
