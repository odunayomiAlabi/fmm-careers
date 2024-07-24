import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { JobDetailsStyle } from "./style";
import Image from "next/image";
import { TickCircle } from "iconsax-react";

const index = () => {
  return (
    <JobDetailsStyle>
      <Navbar />
      <section className="pageContainer">
        <div className="gridWrapper">
          <Image
            src={"/assets/svg/hero-background.svg"}
            alt="hero-background"
            className="grid"
            width={1440}
            height={1010}
          />
        </div>
        <div className="background">
          <div className="heroContainer">
            <div>JOIN FILMMAKERS MART</div>
            <h1>Let's Shape Tomorrow's Film Industry</h1>
            <div className="floating">
              <h3>
                Location: <span>Lagos</span>
              </h3>
              <h3>
                Department: <span>Engineering</span>
              </h3>
              <h3>
                Work Type: <span>Hybrid</span>
              </h3>
            </div>
            <div className="button">Apply Now</div>
          </div>
        </div>
        <div className="jobDescription">
          <h1>Job Description</h1>
          <p>
            Filmmakers Mart is seeking a skilled and passionate Front-End
            Engineer to join our dynamic team. As a Front-End Engineer, you will
            be responsible for translating UI/UX design wireframes into high
            quality code and ensuring the application’s look and feel are
            consistent with the design vision. You will collaborate with
            designers, back-end developers, and other stakeholders to create
            intuitive and visually appealing user interfaces for our web
            applications.
          </p>
          <div className="benefits">
            <h1>Benefits</h1>
            <ul>
              <li> <TickCircle size="32" color="#FF8A65"/>  Competitive Salary</li>
              <li> <TickCircle size="32" color="#FF8A65"/>  Health Insurance</li>
              <li> <TickCircle size="32" color="#FF8A65"/>  Paid Time Off</li>
              <li> <TickCircle size="32" color="#FF8A65"/>  Flexible Working Hours</li>
              <li> <TickCircle size="32" color="#FF8A65"/>  Hybrid Work Culture</li>
              <li> <TickCircle size="32" color="#FF8A65"/>  Birthday Celebration</li>
              <li> <TickCircle size="32" color="#FF8A65"/>  Team Bonding</li>
              <li> <TickCircle size="32" color="#FF8A65"/>  Employee Referral Bonus</li>
            </ul>
            <div className="responsibilities">
              <h1>Key Responsibilities</h1>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </JobDetailsStyle>
  );
};

export default index;
