import React from "react";
import { CareersPageStyle } from "./style";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import OurMission from "../../components/landingPage/ourMission";
import OurValues from "../../components/landingPage/ourValues";
import Openings from "../../components/landingPage/openings";
import Image from "next/image";

const CareersPage = () => {
  return (
    <div>
      <CareersPageStyle>
        <Navbar />
        <section className="pageContainer">
          <div className="gridWrapper">
            <Image src={'/assets/svg/hero-background.svg'} alt='hero-background' className='grid' width={1440} height={1010} />
          </div>
          <div className="background">
            <div className="heroContainer">
              <h1>Let's Shape Tomorrow's Film Industry</h1>
              <p>
                At Filmmakers Mart (FMM), we're passionate about empowering
                African filmmakers. We provide a platform that connects creators
                with the resources they need to bring their stories to life. Our
                team is growing, and we're looking for talented individuals to
                join us on this exciting journey.
              </p>
              <div className="button">See Open Positions</div>
            </div>
          </div>
          <div className="gridImage">
            <Image src={'/hero/image1.svg'} alt='image1' width={463} height={376} className="gridImage" />
            <Image src={'/hero/image2.svg'} alt='image2' width={463} height={376} className="gridImage" />
            <Image src={'/hero/image3.svg'} alt='image3'  width={463} height={376} className="gridImage"/>
          </div>
        </section>
        <OurMission />
        <OurValues />
        <Openings />
        <Footer />
      </CareersPageStyle>
    </div>
  );
};

export default CareersPage;
