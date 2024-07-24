import React from "react";
import { OpeningsStyle } from "../../pages/landing/style";
import { ArrowCircleRight2 } from "iconsax-react";
const openings = () => {
  return (
    <OpeningsStyle>
      <div className="openingsWrapper">
        <div className="topOpenings">
          <div className="Values">Current Openings</div>
          <p>
            Browse through vacancies. internships and job postings at Filmmakers
            Mart
          </p>
        </div>
        <div className="Openings">
          <div className="card1">
            <p>Filmmakers Mart</p>
          </div>
          <div className="subCard">
            <div className="cardText">Front End Engineer </div>
            <p>
              Full Time - <span>Hybrid</span>
            </p>
            <p>
              Filmmakers Mart is in need of a talented Product Designer with
              more tha 3 years of past experience in tech sector.
            </p>
            <div className="arrowIcon">
              <ArrowCircleRight2 size="32" color="#747474" />
            </div>
          </div>
          <div className="subCard">
            <div className="cardText">UI/UX Designer</div>
            <p>
              Full Time - <span>On Site</span>
            </p>
            <p>
              Filmmakers Mart is in need of a talented Product Designer with
              more tha 3 years of past experience in tech sector.
            </p>
            <div className="arrowIcon"></div>
            <div className="arrowIcon">
              <ArrowCircleRight2 size="32" color="#747474" />
            </div>
          </div>
        </div>

        <div className="Openings">
          <div className="card2">
            <p>RollPay Africa </p>
          </div>
          <div className="subCard">
            <div className="cardText">Front End Engineer </div>
            <p>
              Full Time - <span>Hybrid</span>
            </p>
            <p>
              Filmmakers Mart is in need of a talented Product Designer with
              more tha 3 years of past experience in tech sector.
            </p>
            <div className="arrowIcon">
              <ArrowCircleRight2 size="32" color="#747474" />
            </div>
          </div>
          <div className="subCard">
            <div className="cardText">UI/UX Designer </div>
            <p>
              Full Time - <span>On Site</span>
            </p>
            <p>
              Filmmakers Mart is in need of a talented Product Designer with
              more tha 3 years of past experience in tech sector.
            </p>
            <div className="arrowIcon">
              <ArrowCircleRight2 size="32" color="#747474" />
            </div>
          </div>
        </div>
      </div>
    </OpeningsStyle>
  );
};

export default openings;
