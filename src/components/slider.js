import React from "react"
import "./layout.css"
// import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from "react-bootstrap/Carousel"
// import Button from "react-bootstrap/Button"
import s1 from "../images/Slider_1.jpg"
import s2 from "../images/Slider2.jpg"
import s3 from "../images/Slider3.jpg"
import s4 from "../images/Slider4.jpg"
import s5 from "../images/Slider5.jpg"
import s6 from "../images/Slider6.jpg"
import OpenPlatform from "../images/OpenPlatform.png"
import Transformation from "../images/Transformation.png"
import Solutions from "../images/Solutions.png"
import PoweredBySynectiks from "../images/PoweredBySynectiks.png"
import SoftwareMigration from "../images/CS_Software_Migration.jpg"
import RealtimeMonitoring from "../images/CS_Realtime_Monitoring.jpg"
import SoftwareDefinedTransformation from "../images/CS_SoftwareDefinedTransformation.jpg"
import NetworkDesign from "../images/CS_NetworkDesign.jpg"
import StorageTier from "../images/CS_StorageTier.jpg"
import DisasterRecovery from "../images/CS_DisasterRecovery.jpg"

const Slider = () => {
  return (
    <section>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={s1}
            alt="Synectiks Open Xformation"
          />
          <Carousel.Caption>
            <div className="clearfix">
              <a
                href="/foundation/index.html"
                className="btn text-white bg-yellow text-uppercase btnLearn float-left posRT"
              >
                Learn More
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={s2}
            alt="Enterprise Transformation"
          />

          <Carousel.Caption>
            <div className="clearfix">
              <a
                href="/devops/index.html"
                className="btn text-white bg-yellow text-uppercase btnLearn float-left posRT"
              >
                learn more
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={s3} alt="AWS Security" />

          <Carousel.Caption>
            <div className="clearfix">
              {/* <a
                href="/audit/index.html"
                className="btn text-white bg-logoblue text-uppercase btnLearn float-left"
              >
                learn more
              </a> */}
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={s4}
            alt="Enterprise Managed Services"
          />

          <Carousel.Caption>
            <div className="clearfix">
              <a
                href="/managedservices/index.html"
                className="btn text-white bg-yellow text-uppercase btnLearn float-left posRT "
              >
                learn more
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={s5} alt="Cloud Managed Backup" />
          <Carousel.Caption>
            <div className="clearfix">
              <a
                href="/CloudManagedBackup/index.html"
                className="btn text-white bg-yellow text-uppercase btnLearn float-left posRT"
              >
                learn more
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={s6} alt="Why Synectiks" />
        </Carousel.Item>
      </Carousel>
      <div className="bg-lightgrey">
        <div className="text-center w-100">
          <h4 className="py-1 stripfont bg-primary text-white">
            ACCELERATING MULTICLOUD SOA TRANSFORMATION THROUGH OPEN PLATFORM
          </h4>
        </div>
        <div className="container">
          <div>
            <div className="text-center w-100 my-4 txt mt-card ">
              <h3 className="">
                <b>Outcome-based Solution Offerings</b>
              </h3>
            </div>
            <div className="row">
              <div className="btn col-sm-12 col-md-4 col-lg-4 col-xl-4 pt-3">
                <div className="Homecard-shadow card">
                  <a href="/foundation/index.html" className="noLine">
                    <img
                      className="card-img-top"
                      src={OpenPlatform}
                      alt="Foundation"
                    />
                    <div className="card-body">
                      <h2 className="text-center text-uppercase">
                        Open Platform
                      </h2>
                      <h6 className="pointerDown text-center">&#187;</h6>
                    </div>
                  </a>
                </div>
              </div>

              <div className="btn col-sm-12 col-md-4 col-lg-4 col-xl-4 pt-3">
                <div className="Homecard-shadow card">
                  <a href="/transformation/index.html" className="noLine">
                    <img
                      className="card-img-top"
                      src={Transformation}
                      alt="Transformation"
                    />
                    <div className="card-body">
                      <h2 className="text-center text-uppercase">
                        Transformation
                      </h2>
                      <h6 className="pointerDown text-center">&#187;</h6>
                    </div>
                  </a>
                </div>
              </div>

              <div className="btn col-sm-12 col-md-4 col-lg-4 col-xl-4 pt-3">
                <div className="Homecard-shadow card">
                  <a href="/operations/index.html" className="noLine">
                    <img
                      className="card-img-top"
                      src={Solutions}
                      alt="Operation"
                    />
                    <div className="card-body">
                      <h2 className="text-center text-uppercase">Solutions</h2>
                      <h6 className="pointerDown text-center">&#187;</h6>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <a
              className="btn btn-demo noLine noLine text-white z"
              href="https://synectiks.com/contactus/index.html"
            >
              Ask For Demo
            </a>
          </div>
          {/* Card Ends */}

          <div className="pt-5 flex-fill mt-8">
            <img
              src={PoweredBySynectiks}
              width="100%"
              alt=""
              className="w-100"
            />
            <div className="text-center text-white pt-4 ">
              <p>
                <a
                  href="/foundation/index.html"
                  className="btn text-white bg-logoblue text-uppercase btnLearn"
                >
                  learn more
                </a>
              </p>
            </div>
          </div>

          <div className="text-center w-100 pt-5 mt-1 txt mt-card ">
            <h3 className="">
              <b>Success Stories</b>
            </h3>
          </div>

          <div
            className="d-flex justify-content-around pt-2 flex-fill mt-2 align-items-center flex-col"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <a
              href="/softwaredefined/index.html"
              className="noLine col-sm-12 col-md-4 "
            >
              <div className="p-3">
                <div className="border-grey-2px cs_boxshadow">
                  <div className="img_zoom">
                    <img
                      src={SoftwareDefinedTransformation}
                      width="100%"
                      alt="Enterprise-DevOps"
                    />
                  </div>
                  <div className="text-group p-3 align-self-center">
                    <h4 className="font-weight-bold pt-2 text-black">
                      Software Defined Transformation
                    </h4>
                    <p className="text-black">
                      Moving to AWS cloud with Data Center retirement for Motor
                      Industry.
                    </p>{" "}
                    Learn more <i className="fa fa-arrow-right" />
                  </div>
                </div>
              </div>
            </a>
            <a
              href="/realtime/index.html"
              className="noLine wcol-sm-12 col-md-4"
            >
              <div className="p-3">
                <div className="border-grey-2px cs_boxshadow">
                  <div className="img_zoom">
                    <img
                      src={RealtimeMonitoring}
                      width="100%"
                      alt="Enterprise-Transformation"
                    />{" "}
                  </div>
                  <div className="text-group p-3 align-self-center ">
                    <h4 className="font-weight-bold pt-2 text-black">
                      Realtime Monitoring{" "}
                    </h4>
                    <p className="text-black">
                      Highly Scalable extremely customizable realtime monitoring
                      platform for a large telco.
                    </p>{" "}
                    Learn more <i className="fa fa-arrow-right" />
                  </div>
                </div>
              </div>
            </a>
            <a
              href="/storagemigration/index.html"
              className="noLine col-sm-12 col-md-4 "
            >
              <div className="p-3">
                <div className="border-grey-2px cs_boxshadow">
                  <div className="img_zoom">
                    <img
                      src={SoftwareMigration}
                      width="100%"
                      alt="Enterprise-Transformation"
                    />{" "}
                  </div>
                  <div className="text-group p-3 align-self-center">
                    <h4 className="font-weight-bold pt-2 text-black">
                      Storage Migration{" "}
                    </h4>
                    <p className="text-black">
                      Zero downtime, Zero Fault Petabytes storage migration of
                      Largest Financial Sector.
                    </p>{" "}
                    Learn more <i className="fa fa-arrow-right" />
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div
            className="d-flex justify-content-around pt-2 flex-fill mt-3 pb-3 align-items-center flex-col"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <a
              href="/networkdesign/index.html"
              className="noLine col-sm-12 col-md-4"
            >
              <div className="p-3">
                <div className="border-grey-2px cs_boxshadow">
                  <div className="img_zoom">
                    <img src={NetworkDesign} width="100%" alt="NetworkDesign" />{" "}
                  </div>
                  <div className="text-group p-3 align-self-center">
                    <h4 className="font-weight-bold text-black">
                      Network Design{" "}
                    </h4>
                    <p className="text-black">
                      Complete Network Backbone Design with highest security for
                      retail.
                    </p>{" "}
                    Learn more <i className="fa fa-arrow-right" />
                  </div>
                </div>
              </div>
            </a>
            <a
              href="/storagetier/index.html"
              className="noLine col-sm-12 col-md-4"
            >
              <div className="p-3">
                <div className="border-grey-2px cs_boxshadow">
                  <div className="img_zoom">
                    <img src={StorageTier} width="100%" alt="StorageTier" />{" "}
                  </div>
                  <div className="text-group p-3 align-self-center">
                    <h4 className="font-weight-bold text-black">
                      Storage Tier{" "}
                    </h4>
                    <p className="text-black">
                      Moving Bigdata Workloads to aggregated platform for a
                      large telco.
                    </p>{" "}
                    Learn more <i className="fa fa-arrow-right" />
                  </div>
                </div>
              </div>
            </a>
            <a
              href="/disasterrecovery/index.html"
              className="noLine col-sm-12 col-md-4"
            >
              <div className="p-3">
                <div className="border-grey-2px cs_boxshadow">
                  <div className="img_zoom">
                    <img
                      src={DisasterRecovery}
                      width="100%"
                      alt="Disaster Recovery"
                    />{" "}
                  </div>
                  <div className="text-group p-3 align-self-center">
                    <h4 className="font-weight-bold text-black">
                      Disaster Recovery{" "}
                    </h4>
                    <p className="text-black">
                      Lightweight disaster recovery platform for Indian Defense.
                    </p>{" "}
                    Learn more <i className="fa fa-arrow-right" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slider
