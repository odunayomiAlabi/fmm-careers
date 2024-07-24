import styled from 'styled-components';
import { Modal } from 'antd';
import { FMMTheme } from "@/app/components/theme";

type IModal = {
  showModal?: boolean;
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalWrapper = styled(Modal)<IModal>`
  border-radius: 1.5rem !important;
  width: 524px !important;

  .modalContentWrapper {
    width: 100%;
  }

  .modalContainer {
    width: 100%;
    padding: 0 1%;

    h1 {
      font-size: 18px;
      font-weight: 700;
      color: #1d2939;
    }
  }

  .ant-modal-close {
    right: 5%;
    top: auto;
  }

  .FormGrid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }

  .searchDescription {
    color: #667085;
  }

  .searchForm {
    margin: 20px 0;
    button {
      margin: 5px;
      padding: 10px;
      border: none;
      cursor: pointer;
      width: 80px;
      border-radius: 8px;
      padding: 6px 4px;
      font-size: 16px;
    }
  }

  .suggestions {
    color: #667085;
    span {
      width: 23px;
      height: 18px;
      border: 5px;
      padding: 2px 4px;
      background-color: #f2f4f7;
    }
  }

  .suggestionContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
    cursor: pointer;

    .suggestionNames {
      display: flex;
      align-items: center;
    }

    .suggestionAvatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: #ffece5;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
    }
  }

  .suggestionContainer:hover {
    background-color: #f2f4f7;
  }
`;

export const UserFilterModalStyle = styled(Modal)`
  border-radius: 1.5rem !important;
  width: 524px !important;
  .ant-modal-body {
    padding: 0;
    background-color: #fff;
  }
`;

export const ModalIconStyle = styled.div<{ type: string }>`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.type === 'red' ? '#FFEFEA' : '#ECFDF3'};
  display: grid;
  place-items: center;
  .innerCircle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(props) =>
      props.type === 'red' ? '#FFCEBD' : '#D1FADF'};
    display: grid;
    place-items: center;

    .icon {
      color: ${(props) => (props.type === 'red' ? '#FF6029' : '#039855')};
    }
  }
`;

export const CreateAccountModalStyle = styled(Modal)`
  border-radius: 1.5rem !important;
  width: 491px !important;
  .ant-modal-body {
    padding: 0;
    background-color: #fff;
  }

  .description {
    color: ${FMMTheme.colors.text.grey_600};
    font-size: 1rem;
    margin-top: -0.5rem;
    font-weight: 300;
  }

  .form {
    width: 100%;
  }

  .submitBtn {
    margin-top: 1.25rem;
    margin-bottom: 0.25rem;
    width: 100%;
  }
`;

export const CreateAccountSuccessModalStyle = styled(Modal)`
  border-radius: 1.5rem !important;
  width: 524px !important;
  .ant-modal-body {
    padding: 1.5rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    margin-block: 1.25rem 0.5rem;
    color: ${FMMTheme.colors.text.grey_700};
    font-size: 1.125rem;
    font-weight: 600;
  }

  .text {
    font-size: 1rem;
    font-weight: 300;
    color: ${FMMTheme.colors.text.grey_500};
    text-align: center;
    max-width: 95%;
    margin-bottom: 1.25rem;
  }
`;

export const FmmModalStyle = styled(Modal)<{ $width?: number }>`
  border-radius: 1.5rem !important;
  width: ${({ $width }) => ($width ? `${$width}px` : '524px')} !important;
  .ant-modal-body {
    padding: 1.5rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
  }

  .modalHeader {
    display: flex;
    flex-direction: column;
    margin-bottom: 2.5rem;
    .header {
      color: ${FMMTheme.colors.text.grey_700};
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 0;
      margin-top: 16px;
    }
    .subheading {
      font-size: 1rem;
      font-weight: 300;
      color: ${FMMTheme.colors.text.grey_500};
      margin-bottom: 0;
    }
  }

  .editAccountWrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .form {
    margin-bottom: 40px;
  }

  .buttonGroup {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 1.25rem;
  }

  .successModalWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      .title {
        font-size: 1.125rem;
        font-weight: 600;
        color: ${FMMTheme.colors.text.grey_700};
      }
      .text {
        font-size: 1rem;
        font-weight: 300;
        color: ${FMMTheme.colors.text.grey_600};
      }
    }
  }
`;

export const BookingCardStyle = styled.div`
  width: 100%;
  position: relative;
  border-radius: 0 0 12px 12px;
  border-bottom: 2px solid ${FMMTheme.colors.border};

  .image {
    width: 100%;
    height: 184px;
    background-color: #ddd;
    overflow: hidden;
    border-radius: 12px 12px 0 0;

    .imageCarousel {
      width: 100%;
      height: 184px;
      .wrapperStyle {
        margin: 0;
        height: 184px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
      }
    }
    :where(.css-dev-only-do-not-override-15rg2km).ant-carousel
      .slick-dots
      li
      button,
    :where(.css-15rg2km).ant-carousel .slick-dots li button {
      width: 8px;
      height: 8px;
      border: 1px solid #fff;
      background-color: transparent;
      border-radius: 50%;
      opacity: 0.4;
    }

    :where(.css-dev-only-do-not-override-15rg2km).ant-carousel
      .slick-dots
      li.slick-active
      button,
    :where(.css-15rg2km).ant-carousel .slick-dots li.slick-active button {
      background: #ffffff;
      opacity: 0.8;
    }

    .slick-dots li.slick-active button:before,
    .slick-dots li button:before {
      display: none;
    }

    .button {
      position: absolute;
      right: 0.75rem;
      top: 92px;
      background-color: rgba(255, 255, 255, 0.4);
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: rgba(255, 255, 255, 1);
      }
      .icon {
        font-size: 1rem;
        color: ${FMMTheme.colors.text.header};
        opacity: 0.75;
      }
    }
  }

  .locationDetails {
    padding: 12px 5px;

    .value {
      font-size: 14px;
      color: #475467;
    }
  }
`;

export const SearchWrapperStyle = styled.div`
  border-radius: 1.5rem;
  width: 100%;
  max-width: 440px;
  position: absolute;
  background-color: #ffff;
  top: 100px;
  left: 290px;
  z-index: 20;
  background-clip: padding-box;
  border: 0;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  pointer-events: auto;
  padding: 20px 24px;

  .searchDescription {
    color: #667085;
  }

  .searchForm {
    margin: 20px 0;
    button {
      margin: 5px;
      padding: 10px;
      border: none;
      cursor: pointer;
      width: 80px;
      border-radius: 8px;
      padding: 6px 4px;
      font-size: 16px;
    }
  }

  .suggestions {
    color: #667085;
    span {
      width: 23px;
      height: 18px;
      border: 5px;
      padding: 2px 4px;
      background-color: #f2f4f7;
    }
  }

  .suggestionContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
    cursor: pointer;

    .suggestionNames {
      display: flex;
      align-items: center;
    }

    .suggestionAvatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: #ffece5;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
    }
  }

  .suggestionContainer:hover {
    background-color: #f2f4f7;
  }
`;
