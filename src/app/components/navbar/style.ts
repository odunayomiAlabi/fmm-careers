import styled from 'styled-components';
import { FMMTheme } from '../theme';

export const NavBarStyle = styled.div`
  /* width: 100%; */
  height: 96px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  gap: 40px;
  padding-inline: 80px;

  .navSection:first-child {
    min-width: 95px;
  }

  .navSection {
    width: calc(100% / 3);
  }

  .navSection:first-child {
    .logo {
      cursor: pointer;
      width: 100px;
    }
  }

  .navSection:nth-child(2) {
    min-width: 300px;
    display: flex;
    gap: 32px;
    justify-content: center;
    align-items: center;

    .link {
      cursor: pointer;
      font-size: 16px;
      font-weight: 400;
      color: ${FMMTheme.colors.grey_900};
      transition: color 0.3s ease-in-out;
      &:hover {
        color: ${FMMTheme.colors.primary_500};
      }
    }
  }

  .cta {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 8px;

    .loginBtn {
      padding-inline: 20px;
      font-size: ${FMMTheme.fontSize.base};
      font-weight: ${FMMTheme.fontWeight.medium};
      color: ${FMMTheme.colors.teal_500};
      cursor: pointer;
      transition: color 0.3s ease-in-out;
      white-space: nowrap;
      &:hover {
        color: ${FMMTheme.colors.primary_500};
      }
    }
  }

  .smallMenu {
    display: none;
    position: relative;
    height: 24px;
    width: 24px;
    cursor: pointer;
    border-radius: 4px;

    .bar1,
    .bar2,
    .bar3 {
      position: absolute;
      height: 2px;
      border-radius: 1px;
      background-color: ${FMMTheme.colors.grey_900};
    }

    .bar1,
    .bar3 {
      width: 90%;
    }
    .bar2 {
      width: 70%;
    }
  }

  @media (max-width: 1024px) {
    padding-inline: 64px;
    justify-content: space-between;
    .navSection:nth-child(2),
    .navSection:last-child,
    .cta {
      display: none;
    }
    .smallMenu {
      display: block;
    }
    .navSection {
      min-width: fit-content;
    }
  }

  @media screen and (max-width: 576px) {
    padding-inline: 24px;
    .navSection:first-child {
      min-width: 75px;
    }
  }
`;

export const MobileMenuStyle = styled.div`
  width: 100vw;

  .mobileMenu {
    width: 100vw;
    min-height: 80px;
    background-color: #fff;
    border-top: 1px solid ${FMMTheme.colors.grey_200};
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 64px;
    gap: 40px;

    .navSection:first-child {
      min-width: 300px;
      display: flex;
      gap: 24px;
      justify-content: center;
      align-items: center;

      .link {
        cursor: pointer;
        font-size: 16px;
        font-weight: 400;
        color: ${FMMTheme.colors.grey_900};
        transition: color 0.3s ease-in-out;
        &:hover {
          color: ${FMMTheme.colors.primary_500};
        }
      }
    }

    .cta {
      display: flex;
      justify-content: end;
      align-items: center;
      gap: 8px;

      .loginBtn {
        padding-inline: 20px;
        font-size: ${FMMTheme.fontSize.base};
        font-weight: ${FMMTheme.fontWeight.medium};
        color: ${FMMTheme.colors.teal_500};
        cursor: pointer;
        transition: color 0.3s ease-in-out;
        white-space: nowrap;
        &:hover {
          color: ${FMMTheme.colors.primary_500};
        }
      }
    }

    @media (max-width: 576px) {
      padding: 24px;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;

      .navSection {
        width: 100% !important;
        flex-direction: column;
        align-items: flex-start !important;
        gap: 16px !important;
        .link {
          width: fit-content;
        }
      }

      .cta {
        gap: 12px !important;
      }

      .productionBtn {
        max-width: 100%;
      }
      .loginBtn {
        width: 100%;
        border: 1px solid ${FMMTheme.colors.teal_500};
        height: 38px;
        border-radius: 8px;
        display: grid;
        place-content: center;
      }
    }
  }
`;
