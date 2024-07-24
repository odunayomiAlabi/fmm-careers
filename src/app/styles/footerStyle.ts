import styled from "styled-components";
import { FMMTheme } from "@/app/components/theme";

export const FooterStyle = styled.div`
  width: 100vw;

  .getStartedCTA {
    width: 100%;
    height: 276px;
    background-color: #e6e7e9;
    position: relative;
    .cta {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    .ctaTitle {
      font-size: 24px;
      font-weight: 700;
      line-height: 150%;
      color: ${FMMTheme.colors.grey_900};
      margin-bottom: 8px;
      .highlight {
        color: ${FMMTheme.colors.primary_500};
      }
    }
    .ctaText {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      margin-bottom: 40px;
      color: ${FMMTheme.colors.grey_500};
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
    .grid {
      width: 80%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
      z-index: 0;
    }
  }
  .quickLinks {
    width: 100%;
    min-height: 488px;
    padding-block: 88px;
    background-color: ${FMMTheme.colors.secondary_500};
    color: ${FMMTheme.colors.white};
    display: flex;
    gap: 48px;

    .companyDetails {
      width: 25%;
    }

    .companyName {
      display: flex;
      flex-direction: column;
      row-gap: 8px;
      column-gap: 12px;
      margin-bottom: 12px;
    }
    .companyLogo {
      width: 40px;
      height: 40px;
      cursor: pointer;
    }
    .companyTitle {
      font-size: 24px;
      font-weight: 700;
    }
    .companyText {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      color: ${FMMTheme.colors.grey_300};
      margin-bottom: 28px;
    }
    .companyContact {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .companyEmail,
    .companyPhone {
      font-size: 16px;
      font-weight: 500;
    }

    .quickLinksWrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 48px;

      .quickLinkSection {
        width: fit-content;
        .sectionTitle {
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          margin-bottom: 12px;
        }
        .linksWrapper {
          display: flex;
          flex-direction: column;
          gap: 12px;
          .link {
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            cursor: pointer;
            color: ${FMMTheme.colors.grey_400};
            white-space: nowrap;
            transition: color 0.3s ease-in-out;
            &:hover {
              color: ${FMMTheme.colors.grey_300};
            }
          }
        }
      }
    }

    .companyAddress {
      display: flex;
      flex-direction: column;
      gap: 32px;
      .addressTitle {
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        margin-bottom: 12px;
      }
      .addressText {
        display: flex;
        flex-direction: column;
        gap: 12px;
        span {
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          color: ${FMMTheme.colors.grey_200};
        }
      }
      .smScreen {
        display: none;
      }
    }
  }

  .copyright {
    width: 100%;
    min-height: 112px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .copyrightWrapper,
    .servicedCountriesWrapper,
    .socialWrapper {
      display: flex;
      align-items: center;
    }

    .copyrightWrapper {
      gap: 8px;
      font-size: 16px;
      font-weight: 400;
      color: ${FMMTheme.colors.grey_700};
    }
    .servicedCountriesWrapper {
      gap: 32px;

      .paired {
        display: flex;
        gap: 32px;
      }
    }
  }

  .socialWrapper {
    gap: 16px;
    .socialIconWrapper {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background-color: ${FMMTheme.colors.grey_200};
      display: grid;
      place-content: center;
      cursor: pointer;
    }

    .socialIcon {
      width: 20px;
      height: 20px;
      color: #1d2939;
    }
  }

  .servicedCountry {
    display: flex;
    align-items: center;
    gap: 12px;
    .servicedCountryFlag {
      width: 28px;
      height: 21px;
    }
    .servicedCountryText {
      font-size: 14px;
      color: ${FMMTheme.colors.grey_700};
      font-weight: 400;
      white-space: nowrap;
    }
  }

  .getStartedCTA,
  .quickLinks,
  .copyright {
    padding-inline: 80px;
  }

  @media (max-width: 1024px) {
    .getStartedCTA,
    .quickLinks,
    .copyright {
      padding-inline: 64px;
    }
    .quickLinks {
      flex-direction: column;
      padding-block: 64px;

      .companyName {
        flex-direction: row;
        align-items: center;
      }
      .companyDetails {
        width: 100%;
        max-width: 300px;
      }

      .companyTitle {
        font-size: 20px;
        line-height: 1;
      }
    }
    .lgScreen {
      display: none !important;
    }
    .smScreen {
      display: flex !important;
    }
    .copyright {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center !important;
      gap: 32px;
      padding-block: 32px;
      align-items: start;
    }
  }
  @media (max-width: 576px) {
    .getStartedCTA,
    .quickLinks,
    .copyright {
      padding-inline: 24px;
    }
    .servicedCountriesWrapper {
      flex-wrap: wrap;
      gap: 24px;
    }
    .copyright {
      padding-block: 42px;
      align-items: flex-start !important;
    }
    .ctaText {
      max-width: 300px;
    }
  }
`;