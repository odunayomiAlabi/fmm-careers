import styled from "styled-components";
import { FMMTheme } from "@/app/components/theme";

export const CareersPageStyle = styled.div`
  width: 100vw;
  min-height: 100vh;

  .pageContainer {
    width: 1400px;
    /* height: 1010px; */
    margin: auto;
    position: relative;
  }
  .gridWrapper {
    width: 100vw;
    height: 945px;
    position: absolute;
    top: -34px;
    left: transform(translateX(-50%));
    z-index: -1;
    background: rgba(255, 245, 241, 0.3);
    display: grid;
    place-items: center;
    overflow: hidden;
  }

  .gridImage {
    margin: 2px;
    display: grid;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr 1fr;
    top: 586px;
    place-items: center;
    margin-bottom: 10px;
  }
  .background {
    width: 100vw;
    height: 60vh;
  }
  .heroContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      width: 629px;
      text-align: center;
      font-family: Aeonik;
      font-size: 50px;
      font-weight: 700;
    }
    p {
      height: 92px;
      width: 50vw;
      color: ${FMMTheme.colors.grey_700};
      text-align: center;
      font-size: 18px;
      font-weight: 400;
      word-break: break-word;
      margin-top: 5px;
    }
    .button {
      display: flex;
      padding: 12px;
      justify-content: center;
      align-items: center;
      gap: 8px;
      border-radius: 12px;
      background: ${FMMTheme.colors.primary_500};
      color: #fff;
      box-shadow: 0px 0px 0px 2px #ffcebd;
      margin: 24px;
      cursor: pointer;
    }
    .gridImage {
      width: 463px;
      height: 376px;
      border: 1px solid red;
    }
  }
`;

export const MissionStyle = styled.div`
  display: inline-flex;
  padding: 147px 104px 147px 103px;
  justify-content: center;
  align-items: center;

  .missionWrapper {
    display: flex;
    align-items: flex-start;
    gap: 128px;
  }
  .left {
    display: flex;
    width: 533px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;

    h4 {
      display: flex;
      padding: 8px 16px;
      align-items: flex-start;
      gap: 10px;
      border-radius: 40px;
      background: ${FMMTheme.colors.teal_50};
      color: #008080;
      text-align: center;

      /* Aeonik/16px: Medium */
      font-family: Aeonik;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px; /* 150% */
    }
  }
  .top {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
  }
`;

export const OurValuesStyle = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 80px 80px;
  /* justify-content: center;
  align-items: center; */
  background: #f4f4f4;

  .valuesWrapper {
    display: flex;
    width: 1280px;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    .topValues {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;

      p {
        font-family: Aeonik;
        font-size: 20px;
        font-weight: 400;
        color: #808080;
        width: 550px;
        height: 60px;
        gap: 0px;
        opacity: 0px;
      }
    }
    .ourValues {
      display: flex;
      padding: 6px 16px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 8px;
      background: var(--Foundation-Orange-orange-100, #ffcebd);
      color: #000;
      text-align: center;
      font-family: Aeonik;
      font-size: 14px;
      font-weight: 500;
      line-height: 150%;
      letter-spacing: 0.56px;
    }
    .values {
      width: 446px;
      color: ${FMMTheme.colors.grey_900};
      text-align: center;
      font-family: Aeonik;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 38px;
    }
    .valueCards {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
    .valueCard {
      background-color: ${FMMTheme.colors.white};
      border-radius: 12px;
      padding: 32px 24px;
    }
    .iconWrapper {
      display: grid;
      place-content: center;
      width: 40px;
      height: 40px;
      background-color: ${FMMTheme.colors.primary_50};
      border-radius: 50%;
      color: ${FMMTheme.colors.primary_500};
      margin-bottom: 24px;
    }
    .icon {
      color: ${FMMTheme.colors.primary_500};
      width: 20px;
      height: 20px;
      position: relative;
    }
    .cardTitle {
      font-size: 24px;
      font-weight: 700;
      color: ${FMMTheme.colors.grey_900};
      margin-bottom: 12px;
    }
    .cardSubText {
      font-size: 16px;
      font-weight: 400;
      color: ${FMMTheme.colors.grey_700};
      line-height: 24px;
    }
  }
`;

export const OpeningsStyle = styled.div`
  width: 100vw;
  height: 130vh;
  top: 3017px;
  padding: 60.94px 80px 60.06px 80px;
  gap: 0px;
  opacity: 0px;
  background: #f4f4f4;
  /* color: ${FMMTheme.colors.background.grey_300}; */

  .openingsWrapper {
    display: flex;
    width: 1280px;
    flex-direction: column;
    align-items: center;
    /* gap: 40px; */

    .topOpenings {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;

      p {
        font-family: Aeonik;
        font-size: 16px;
        font-weight: 400;
        color: ${FMMTheme.colors.grey_900};
        width: 547px;
        height: 24px;
        text-align: center;
        gap: 0px;
        opacity: 0px;
      }
    }
    .Values {
      width: 267px;
      color: ${FMMTheme.colors.secondary_500};
      text-align: center;
      font-family: Aeonik;
      font-size: 32px;
      font-weight: 700;
      line-height: 38px;
    }

    .Openings {
      width: 100%;
      /* height: 100%; */
      gap: 60px;
      opacity: 0px;
      /* border: 1px solid red; */

      .card1 {
        width: 100%;
        display: flex;
        p {
          font-family: Aeonik;
          font-size: 20px;
          font-weight: 700;
          line-height: 30px;
          text-align: left;
          width: 156px;
          height: 30px;
          gap: 0px;
          opacity: 0px;
          color: ${FMMTheme.colors.primary_500};
        }
      }

      .card2 {
        width: 100%;
        display: flex;
        p {
          font-family: Aeonik;
          font-size: 20px;
          font-weight: 700;
          line-height: 30px;
          text-align: left;
          width: 156px;
          height: 30px;
          gap: 0px;
          opacity: 0px;
          color: ${FMMTheme.colors.green_100};
        }
      }

      .subCard {
        width: 1230px;
        height: 140px;
        padding: 20px 20.5px 20px 20.5px;
        margin-bottom: 12px;
        border-radius: 8px;
        border: 1px solid #eff0f6;
        opacity: 0px;
        background-color: ${FMMTheme.colors.white};

        .cardText {
          width: 173px;
          height: 30px;
          gap: 0px;
          opacity: 0px;
          color: #272422;
          font-family: Aeonik;
          font-size: 20px;
          font-weight: 500;
          line-height: 30px;
          text-align: left;
        }
        p {
          font-family: Aeonik;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          text-align: left;
          color: #8b857f;

          span {
            color: #ff6029;
          }
        }
      }

      .arrowIcon {
        position: absolute;
        right: 100px;
      }
    }
  }
`;
