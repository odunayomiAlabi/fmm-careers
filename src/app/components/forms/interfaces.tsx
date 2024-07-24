import { UploadFile } from "antd/es/upload/interface";
import dayjs, { Dayjs } from 'dayjs';
import { FocusEventHandler, KeyboardEventHandler } from "react";


export interface ITheme {
  colors: {
    accent: {
      prices: string;
      success: string;
      pending: string;
      ongoing: string;
      gold: string;
    },
    text: {
      header: string;
      body: string;
      primary: string;
      white: string;
      purple: string;
    },
    icons: {
      primary: string;
      secondary: string;
    },
    border: string;
    divider: string;
    pryBg: string;
    secBg: string;
    button: {
      secondary: string;
      primary: string;
      white: string;
    },
    primary: string;

  },
  padding: {
    lg: string;
    bg: string;
    sm: string;
  },
  margin: {
    lg: string;
    sm: string;
  },

  headerSize: {
    xs: string;
    sm: string;
    md: string;
    l: string;
    xl: string;
    xxl: string;
  },

  textSize: {
    xs: string;
    sm: string;
    md: string;
    l: string;
    xl: string;
  },

  textLineHeight: {
    xs: string;
    sm: string;
    md: string;
    l: string;
    xl: string;
  },

  HeaderLineHeight: {
    xs: string;
    sm: string;
    md: string;
    l: string;
    xl: string;
    xxl: string;
  },

  borderRadius: {
    button: string;
    info: string;

  }
}

export interface IPInput {
  label?: string,
  type?: string,
  $height?: string,
  $maxWidth?: string,
  testId?: string,
  selectedCountry?: any,
  placeholder?: string,
  props?: any,
  value?: string | boolean | number | null,
  field?: string,
  objectTitle?: string,
  minAllowedDate?: Dayjs,
  objectProperty?: string,
  nested?: boolean;
  edit?: boolean;
  amount?: boolean;
  prefix?: React.ReactNode
  disabledDate?: (currentDate: {
    isAfter: (arg0: dayjs.Dayjs) => boolean;
  }) => any,
  small?: boolean;
  icon?: React.ReactNode;
  onDateChange?: (date: dayjs.Dayjs | null, dateString: string) => void;
  onSelectChange?: (value: string) => void;
  $noMargin?: boolean
  onPressEnter?: KeyboardEventHandler<HTMLInputElement> | undefined;
  startDate?: string;
  endDate?: string;
  onFocusPress?: FocusEventHandler<HTMLInputElement> | undefined;
  disableAutoFill?: boolean
}


export interface ICheckbox {
  label: string,
  props?: any,
  field: string,
  options: {
    title: string;
    value: string;
  }[]
}

export interface IPSelect extends IPInput {
  options: Array<{
    value: string | boolean | number,
    title: string | JSX.Element,
  }>;
  tags?: boolean;
  showSearch?: boolean;
  edit?: boolean;
  prefix?: React.ReactNode
  $height?: string;
  testId?: string;
  $width?: string;
}


export interface IPCountrySelect {
  label: string, props: any, field: string,
  states?: Array<string>
  edit?: boolean;
}

export interface DynamicInputProps {
  name: string;
  label: string;
}

export interface IMedia {
  label: string,
  props: any,
  field: string,
  button_text?: string,
  button_description?: string,
  button_description_part?: string,
  width?: string,
  accept?: string,
  edit?: boolean,
  multiple?: boolean,
  setUploaded?: any;
  uploadDoc?: boolean
}

export interface IMapInput {
  props: any,
  field: string,
}
