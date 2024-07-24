import styled from 'styled-components';
import { FMMTheme } from '@/app/components/theme';

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const HiddenRadio = styled.input`
  position: absolute;
  cursor: pointer;
  opacity: 0;
`;

export const StyledCheckbox = styled('div')<{ checked?: boolean }>`
  width: 17px;
  cursor: pointer;
  height: 17px;
  border: 1px solid ${({ checked }) => (checked ? '#FF6029' : '#d9d9d9')};
  box-shadow: ${({ checked }) => (checked ? '0 0 0 2px #FFDBCF' : '')};
  border-radius: 3px;
  background-color: ${({ checked }) => (checked ? '#FF6029' : '#fff')};
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: ${({ checked }) => (checked ? "'\\2713'" : "''")};
    margin-top: 1.2rem;
    margin-left: 0.6rem;
    transform: translate(-50%, -50%);
    color: #ffff;
    font-size: 12px;
    display: ${({ checked }) => (checked ? 'block' : 'none')};
  }
`;

export const FmmFormStyles = styled.div<{
  small?: boolean;
  icon?: React.ReactNode;
  $noMargin?: boolean;
  $width?: string;
  $maxWidth?: string;
  $height?: string;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: ${(props) => (props.$noMargin ? 'none' : '0.5rem 0 0')};
  position: relative;

  max-width: ${(props) => `${props.$maxWidth} !important`};
  height: ${(props) => `${props.$height} !important`};

  .field-error {
    font-size: 13px;
    color: ${(props) => props.theme.colors.text.primary};
  }

  .fieldInfo {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .wordCount {
    display: flex;
    justify-content: flex-end;
  }

  .ant-input {
    padding: ${(props) => props.theme.padding.input};
  }

  .dynamicInput {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    input {
      width: 100%;
      padding: 8px 14px;
      height: 44px;
      border: 1px solid #d0d5dd;
      border-radius: 8px;
      outline-color: #d0d5dd;
    }
  }

  .buttonInfo {
    flex-direction: column;
    padding: 1rem;

    p {
      font-size: 0.7em !important;
    }
  }

  .ant-btn-default {
    background-color: transparent !important;
    border-radius: 44px !important;
  }

  .dateContainer {
    display: flex;
    flex-direction: column;
    /* margin-right: 1rem; */

    @media (max-width: 662px) {
      margin-right: 0;
    }

    .ant-picker {
      border: 1px solid ${(props) => props.theme.colors.border};
      border-radius: 0.375rem;
      padding: 0.6rem;
    }

    .ant-picker-focused {
      border: 2px solid ${(props) => props.theme.colors.border};
      border-right-width: 2px !important;
    }
    .ant-picker-suffix span,
    .ant-picker-clear span {
      color: ${(props) => props.theme.colors.border} !important;
    }
  }

  .PhoneInput {
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 8px;
    padding: 0 15px;
    max-width: 100%;
  }

  .PhoneInputInput {
    border: none;
    background-color: transparent;
    outline: none;
    margin-bottom: 0;
    margin-left: 2rem;
  }

  .uploadDocument{
      color: #0029FF;
      font-weight: 600;
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 5px;
      cursor: pointer;
  }
 
  .PhoneInputCountryFlag-borderColor {
    border-color: #f2f4f7;
  }

  .fmmPhoneNumberInput {
    border: 1px solid ${FMMTheme.colors.border.grey_200};
    border-radius: 0.5rem;
    height: 44px;
    display: flex;
    align-items: center;
    position: relative;
  }

  .PhoneInputCountrySelectArrow {
    display: none;
  }

  .selectChevron {
    position: absolute;
    left: 3rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .amount {
    padding: 8px 14px;
    font-size: 13px;
  }

  .amount:focus {
    outline: none !important;
    border: 1px solid ${(props) => props.theme.colors.border};
  }

  .TextAreaForm {
    :where(.css-dev-only-do-not-override-2i2tap).ant-input:focus,
    :where(.css-dev-only-do-not-override-2i2tap).ant-input:focus-within,
    :where(.css-dev-only-do-not-override-2i2tap).ant-input:hover,
    :where(.css-2i2tap).ant-input:hover {
      border-color: #d9d9d9;
      box-shadow: none;
      outline: none;
    }
  }

  .gm-style {
    top: 50px !important;
  }

  .mapInput {
    position: absolute;
    top: 50px;
    width: 80%;
    left: 10%;
    background-color: ${(props) => props.theme.colors.pryBg};
    border-radius: 10rem;
    display: flex;
    justify-content: center;
    z-index: 2;

    @media (max-width: 991px) {
      border-radius: 2rem;
    }

    div {
      width: inherit;
    }

    input {
      width: 100%;
      border: none;
      background-color: transparent;
      border-bottom: 1px solid #f2f4f7;
      outline: #ff6029;
      padding: 8px 14px;
    }

    ul {
      padding: 0;
      :hover {
        background-color: #f2f4f7;
        cursor: pointer;
      }
    }

    li {
      padding: 0.2rem;
    }

    .label {
      span {
        color: ${(props) => props.theme.colors.text.primary};
      }
    }
  }

  .selects {
    cursor: default !important;
    margin: 0 !important;
    width: 100%;
    padding: 0 !important;
    border-radius: ${(props) => props.theme.borderRadius.button};
    border: 1px dashed ${(props) => props.theme.colors.border} !important;

    .icon {
      color: ${(props) => props.theme.colors.text.header};
    }
    .ant-upload.ant-upload-select,
    .ant-btn {
      border: 0.5px solid ${(props) => props.theme.colors.text.header};
      border-radius: 5px;
      span {
        font-size: 13px;
        color: ${(props) => props.theme.colors.text.header};
      }
    }
    .ant-btn {
      display: flex;
      align-items: center;
      height: auto;
      > * {
        margin-right: 0.5rem;
      }

      :hover {
        color: inherit !important;
      }
    }

    .ant-upload.ant-upload-select,
    .ant-btn {
      border: none !important;
      width: 100%;

      p {
        font-size: 0.9em !important;
      }

      span {
        width: auto;

        button {
          width: 100%;
          display: flex;
          justify-content: center;
          border: 1px dashed #98a2b3 !important;

          span {
            width: auto;
          }
        }
      }
    }

    :where(.css-dev-only-do-not-override-2i2tap).ant-btn-default:not(
        :disabled
      ):not(.ant-btn-disabled):hover {
      color: #ff6029;
    }
  }
  /* +++++++++++++ NEW UPDATED STYLES +++++++++++++ */

  .datePickerWrapper {
    position: relative;

    .datePickerIcon {
      position: absolute;
      top: 50%;
      left: 12px;
      transform: translateY(-50%);
      /* color: red !important; */
    }

    .ant-picker-input {
      padding-left: 30px;
    }
  }
  .datePicker {
    width: 100%;
    border: 1px solid ${FMMTheme.colors.border.grey_200} !important;
    height: ${(props) => (props.small ? '40px' : '44px')};
  }

  label {
    font-size: 0.875rem;
    line-height: ${(props) => props.theme.HeaderLineHeight.sm};
    color: ${(props) => props.theme.colors.text.grey_700};
    font-weight: 500;
  }

  .fmmSelect {
    height: ${(props) => (props.small ? '40px' : '44px')};
    height: ${(props) => props.$height && props.$height};
    border-radius: 0.5rem;
    box-shadow: none !important;
    width: ${(props) => props.$width ?? '100%'};
    ::placeholder {
      color: ${(props) => props.theme.colors.text.body};
      font-weight: 600 !important;
    }

    /* +++++++++++++ ant-select-selector++++++++++++ */
   
  }
  .selectWrapper {
    position: relative;
    border: 1px solid ${FMMTheme.colors.border.grey_200};
    border-radius: 0.5rem;

    .selectIcon {
      position: absolute;
      top: 50%;
      left: 12px;
      transform: translateY(-50%);
      z-index: 1;
      color: ${FMMTheme.colors.text.grey_400};
    }
  }

  .menu {
    border: 1px solid #d0d5dd;
  }

  .fmmInput {
    border: 1px solid ${FMMTheme.colors.border.grey_200};
    border-radius: 0.5rem;
    height: ${(props) => (props.small ? '40px' : '44px')};
  }

  .ant-input-affix-wrapper:focus,
  .ant-input-affix-wrapper:focus-within,
  .ant-picker {
    box-shadow: none !important;
    outline: 0;
  }

  .ant-input-prefix {
    color: ${FMMTheme.colors.text.grey_400} !important;
    margin-right: 0.75rem;
  }

  .ant-select:not(.ant-select-customize-input)
    .ant-select-selector
    .ant-select-selection-search-input {
    padding-left: 30px;
  }

  /* +++++++++++++ NEW UPDATED STYLES +++++++++++++ */
`;
