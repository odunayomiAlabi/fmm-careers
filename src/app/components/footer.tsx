import React, { ReactNode } from "react";
import MktButton from "./buttons";
import FooterGrid from "@/public/assets/svg/footer_grid.svg";
import Copyright from "@/public/assets/svg/copyright.svg";
import NigeriaFlag from "@/public/assets/svg/nigeria.svg";
import GhanaFlag from "@/public/assets/svg/ghana.svg";
import KenyaFlag from "@/public/assets/svg/kenya.svg";
import SouthAfricaFlag from "@/public/assets/svg/south_africa.svg";
import FMMLogo from "@/public/assets/svg/fmm-logo.svg";
import Link from "next/link";
import InstagramIcon from "@/public/assets/svg/instagram.svg";
import TwitterIcon from "@/public/assets/svg/twitter.svg";
import FacebookIcon from "@/public/assets/svg/facebook.svg";
import LinkedInIcon from "@/public/assets/svg/linkedin.svg";
import { motion } from "framer-motion";
import { FooterStyle } from "../styles/footerStyle";

const ServicedCountry = ({
  country,
  flag,
}: {
  country: string;
  flag: ReactNode;
}) => {
  return (
    <div className="servicedCountry">
      {flag}
      <p className="servicedCountryText">{country}</p>
    </div>
  );
};

function QuickLinkSection({
  sectionName,
  links,
}: {
  sectionName: string;
  links: { name: string; link: string }[];
}) {
  return (
    <div className="quickLinkSection">
      <h3 className="sectionTitle">{sectionName}</h3>
      <div className="linksWrapper">
        {links.map((link: { name: string; link: string }) => (
          <Link key={link.name} href={link.link} className="link">
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  const services01 = [
    { name: "Tent", link: "/#" },
    { name: "Trailer", link: "/#" },
    { name: "Welfare", link: "/#" },
    { name: "Cast", link: "/#" },
    { name: "Crew", link: "/#" },
  ];
  const services02 = [
    { name: "Equipments", link: "/#" },
    { name: "Location", link: "/#" },
    { name: "Accommodation", link: "/#" },
    { name: "Mobile Toilets", link: "/#" },
    { name: "Transportation", link: "/#" },
  ];
  const company = [
    { name: "About Us", link: "/#" },
    { name: "Testimonials", link: "/#testimonials" },
    { name: "Contact Us", link: "/#" },
    { name: "Pricing", link: "/#" },
    { name: "Terms & Privacy Policy", link: "/#" },
  ];
  const resources = [
    { name: "FAQs", link: "/#" },
    { name: "Service Providers", link: "/#" },
    { name: "Brief", link: "/#" },
    { name: "Permit", link: "/#" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, delay: 0.5 },
      }}
      viewport={{ once: true }}
      className="w-full"
    >
      <FooterStyle>
        <div className="getStartedCTA">
          <FooterGrid className="grid" />
          <div className="cta">
            <h3 className="ctaTitle">
              No specific positions open, but you still want to join?
            </h3>
            <p className="ctaText">
              if you will like to join us but don’t see any position that match
              your skill, reach out and send your cv to be the first to know
              about new open roles.
            </p>
            <div className="button">Submit Your CV</div>
            {/* <MktButton
              label="Submit Your CV"
              type="primary"
              $width="197px"
              $height={48}
              $className="getStartedBtn"
            /> */}
          </div>
        </div>
        <div className="quickLinks">
          <div className="companyDetails">
            <div className="companyNameWrapper">
              <div className="companyName">
                <FMMLogo
                  className="companyLogo"
                  onClick={() => window.scrollTo(0, 0)}
                />
                <h3 className="companyTitle">Filmmakers Mart</h3>
              </div>
              <p className="companyText">
                The number one leading marketplace for everything production.
              </p>
            </div>
            <div className="companyContact lgScreen">
              <a href="mailto:info@filmmakersmart.com" className="companyEmail">
                info@filmmakersmart.com
              </a>
              <a href="tel:+234 904 168 3514" className="companyPhone">
                Call +234 904 168 3514
              </a>
            </div>
          </div>
          <div className="quickLinksWrapper">
            <QuickLinkSection sectionName="Services" links={services01} />
            <QuickLinkSection sectionName="Services" links={services02} />
            <QuickLinkSection sectionName="Company" links={company} />
            <QuickLinkSection sectionName="Resources" links={resources} />
          </div>
          <div className="companyAddress">
            <div className="companyLocation">
              <h3 className="addressTitle">Location</h3>
              <p className="addressText">
                <span>4th floor, MJS House,</span>
                <span>366 Murtala Mohammed Way,</span>
                <span>Yaba, Lagos</span>
              </p>
            </div>
            <div className="companyContact smScreen">
              <a href="mailto:info@filmmakersmart.com" className="companyEmail">
                info@filmmakersmart.com
              </a>
              <a href="tel:+234 904 168 3514" className="companyPhone">
                Call +234 904 168 3514
              </a>
            </div>
            <div className="socialWrapper smScreen">
              <Link
                href={"http://instagram.com/filmmakers_mart"}
                target="_blank"
                className="socialIconWrapper"
              >
                <InstagramIcon className="socialIcon" />
              </Link>
              <Link
                href={"https://www.facebook.com/filmmakersmart/"}
                target="_blank"
                className="socialIconWrapper"
              >
                <FacebookIcon className="socialIcon" />
              </Link>
              <Link
                href={"http://twitter.com/filmmakers_mart"}
                target="_blank"
                className="socialIconWrapper"
              >
                <TwitterIcon className="socialIcon" />
              </Link>
              <Link
                href={"https://www.linkedin.com/company/recce-solutions"}
                target="_blank"
                className="socialIconWrapper"
              >
                <LinkedInIcon className="socialIcon" />
              </Link>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="copyrightWrapper">
            <Copyright className="copyrightIcon" />
            <span>
              {new Date().getFullYear()} Filmmakers Mart. All rights reserved.
            </span>
          </div>
          <div className="servicedCountriesWrapper">
            <div className="paired">
              <ServicedCountry
                country="Nigeria"
                flag={<NigeriaFlag className="servicedCountryFlag" />}
              />
              <ServicedCountry
                country="Ghana"
                flag={<GhanaFlag className="servicedCountryFlag" />}
              />
            </div>
            <div className="paired">
              <ServicedCountry
                country="Kenya"
                flag={<KenyaFlag className="servicedCountryFlag" />}
              />
              <ServicedCountry
                country="South Africa"
                flag={<SouthAfricaFlag className="servicedCountryFlag" />}
              />
            </div>
          </div>
          <div className="socialWrapper lgScreen">
            <Link
              href={"http://instagram.com/filmmakers_mart"}
              target="_blank"
              className="socialIconWrapper"
            >
              <InstagramIcon className="socialIcon" />
            </Link>
            <Link
              href={"https://www.facebook.com/filmmakersmart/"}
              target="_blank"
              className="socialIconWrapper"
            >
              <FacebookIcon className="socialIcon" />
            </Link>
            <Link
              href={"http://twitter.com/filmmakers_mart"}
              target="_blank"
              className="socialIconWrapper"
            >
              <TwitterIcon className="socialIcon" />
            </Link>
            <Link
              href={"https://www.linkedin.com/company/recce-solutions"}
              target="_blank"
              className="socialIconWrapper"
            >
              <LinkedInIcon className="socialIcon" />
            </Link>
          </div>
        </div>
      </FooterStyle>
    </motion.div>
  );
}

export default Footer;
