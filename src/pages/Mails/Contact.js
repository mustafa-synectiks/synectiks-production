import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import { IoIosMail, IoIosCall } from 'react-icons/io';
// import NiceToMeet from "../../images/NiceToMeet.png"
import '../../components/layout.css';
import ContactM from '../../components/ContactMe';
import Particles from 'react-particles-js';
import styled from 'styled-components';

export class Contact extends React.Component {
	render() {
		return (
			<Layout>
				<contactWrapper>
					<div class='bg-lightgrey pb-4'>
						<div id='particle-js'>
							<Particles
								params={{
									particles: {
										number: {
											value: 120,
											density: {
												enable: true,
												value_area: 800
											}
										},
										color: {
											value: '#007cc2'
										},
										shape: {
											type: 'circle',
											stroke: {
												width: 0,
												color: '#000000'
											},
											polygon: {
												nb_sides: 8
											}
										},
										opacity: {
											value: 0.5,
											random: false,
											anim: {
												enable: false,
												speed: 8,
												opacity_min: 0.1,
												sync: false
											}
										},
										size: {
											value: 2,
											random: true,
											anim: {
												enable: false,
												speed: 140,
												size_min: 0.1,
												sync: false
											}
										},
										line_linked: {
											enable: true,
											distance: 150,
											color: '#007cc2',
											opacity: 0.4,
											width: 1
										},
										move: {
											enable: true,
											speed: 5,
											direction: 'none',
											random: false,
											straight: false,
											out_mode: 'out',
											bounce: false,
											attract: {
												enable: false,
												rotateX: 600,
												rotateY: 1200
											}
										}
									},
									interactivity: {
										detect_on: 'canvas',
										events: {
											onhover: {
												enable: true,
												mode: 'grab'
											},
											onclick: {
												enable: true,
												mode: 'push'
											},
											resize: true
										},
										modes: {
											grab: {
												distance: 150,
												line_linked: {
													opacity: 1
												}
											},
											bubble: {
												distance: 400,
												size: 40,
												duration: 2,
												opacity: 8,
												speed: 3
											},
											repulse: {
												distance: 200,
												duration: 0.4
											},
											push: {
												particles_nb: 4
											},
											remove: {
												particles_nb: 2
											}
										}
									},
									retina_detect: true
								}}
							/>
						</div>

						<div class='container bg-white mtn-11 partikle '>
							<div className='mx-auto text-center'>
								<h2 className='ch1'>Get In Touch</h2>
								<div className='cFlex'>
									<span>
										<IoIosMail className='rIcon' /> info@synectiks.com
									</span>
									<span>
										<IoIosCall className='rIcon' />
										609 608 0429 X 102
									</span>
								</div>
								<h6>Get in Touch to See How We Can Help Achieve Your IT Goals</h6>
								<ContactM />
								<small className='conctFon'>
									We protect your privacy and don’t share personal data with third parties. Read our
									privacy notice
									<a href='https://synectiks.com/privacypolicy/index.html'>Here</a>
									.
								</small>
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
				</contactWrapper>
			</Layout>
		);
	}
}

export default Contact;

const contactWrapper = styled.div`
	.cFlex {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	@media (min-width: 768px) {
		.cFlex {
			display: flex;
			justify-content: center;
			flex-direction: row;
		}
	}
`;
