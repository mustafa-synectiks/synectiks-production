import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import Topbar from './Topbar';
import logo from '../images/logo.png';

// const z = {
//   zIndex: "9999 !important",
// }

const Header = () => {
	return (
		<div className='FixedHeader'>
			<div className='bg-top'>
				<Topbar />
			</div>
			<Navbar expand='lg' className='z'>
				<Container>
					<Navbar.Brand href='/'>
						<img src={logo} alt='synectiks' />
					</Navbar.Brand>
					<Navbar.Toggle className='ml-auto' aria-controls='basic-navbar-nav'>
						<FaBars />
					</Navbar.Toggle>
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<NavDropdown title='Transformation' id='basic-nav-dropdown'>
								<NavDropdown.Item href='/devops/index.html'>DevOps Transformation</NavDropdown.Item>
								<NavDropdown.Item href='/foundation/index.html'>Foundation</NavDropdown.Item>
								<NavDropdown.Item href='/migrations/index.html'>
									Migrations & Optimization
								</NavDropdown.Item>
								<NavDropdown.Item href='/microservices/index.html'>
									Microservices Transformation
								</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title='Hosted Services' id='basic-nav-dropdown'>
								<NavDropdown.Item href='/HostedInfrastructure/index.html'>
									Hosted Infrastructure
								</NavDropdown.Item>
								<NavDropdown.Item href='/CloudManagedBackup/index.html'>
									Cloud Managed Backup
								</NavDropdown.Item>
								<NavDropdown.Item href='/CloudDisasterRecovery/index.html'>
									Cloud Disaster Recovery
								</NavDropdown.Item>
							</NavDropdown>

							<NavDropdown title='Solutions' id='basic-nav-dropdown'>
								<NavDropdown.Item href='/publiccloud/index.html'>Public Cloud</NavDropdown.Item>
								<NavDropdown.Item href='/hybridcloud/index.html'>Hybrid Cloud</NavDropdown.Item>
								{/* <NavDropdown.Item href="/privatecloud/index.html">
                  Monitoring & Analytics
                </NavDropdown.Item> */}
								{/* <NavDropdown.Item href="/colocation/index.html">
                  Colocation
                </NavDropdown.Item> */}
							</NavDropdown>
							<NavDropdown title='Services' id='basic-nav-dropdown'>
								<NavDropdown.Item href='/applicationservices/index.html'>
									O365 Services
								</NavDropdown.Item>
								<NavDropdown.Item href='/managedservices/index.html'>Managed Services</NavDropdown.Item>
								{/* <NavDropdown.Item href="/networkservices/index.html">
                  Network Services
                </NavDropdown.Item> */}
							</NavDropdown>
							<NavDropdown title='Resources' id='basic-nav-dropdown'>
								<NavDropdown.Item href='/featured/index.html'>Featured</NavDropdown.Item>
								<NavDropdown.Item href='/casestudy/index.html'>Success Stories</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title='Company' id='basic-nav-dropdown'>
								<NavDropdown.Item href='/about/index.html'>About</NavDropdown.Item>
								<NavDropdown.Item href='/careers/index.html'>Careers</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
