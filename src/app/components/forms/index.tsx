import { useState } from 'react';
import { CheckboxWrapper, FmmFormStyles, HiddenRadio, StyledCheckbox } from './style';
import { Button, DatePicker, Input, Select, TimePicker, Upload } from 'antd';
import { NumericFormat } from 'react-number-format';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { DynamicInputProps, ICheckbox, IMedia, IPCountrySelect, IPInput, IPSelect } from './interfaces';
import { ThemeProvider } from 'styled-components';
import { FMMTheme } from "@/app/components/theme";
import dayjs, { Dayjs } from 'dayjs';
import { IconCalendarEvent, IconUpload, IconLock, IconPaperclip, IconPlus, IconMapPin, IconChevronDown, IconFileUpload } from '@tabler/icons-react';
import { servicedCountries } from '@/app/utilities/data';
import FmmButton from '../buttons'; 
import { PlacesAutocomplete, beforeUpload, dummyRequest, handleDocChange, handleMediaChange } from './helper';
import { ErrorMessage, FieldArray } from 'formik';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useSession } from 'next-auth/react';

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;


export const FmmInput = ({ label, type = 'text', placeholder = 'Enter Response', props, value, field, amount = false, nested = false, objectTitle = '', objectProperty = '', prefix, small, $noMargin, onPressEnter, $height, testId, onFocusPress }: IPInput) => {
  return (
    <ThemeProvider theme={FMMTheme}>
      <FmmFormStyles small={small} $noMargin={$noMargin}>
        <label htmlFor='fmmInput'>{label}</label>
        {
          amount ? (
            <NumericFormat
              thousandSeparator=","
              decimalSeparator="."
              // prefix="₦ "
              onChange={props?.handleChange(field)}
              onBlur={props?.handleBlur(field)}
              value={nested ? props?.values[objectTitle][objectProperty] : props?.values[field ?? '']}
              placeholder={placeholder}
              onFocus={() => {
                if (type === 'number' && value === 0) props?.setFieldValue(field, '');
              }}
              className='fmmInput amount'
              id='fmmInput'
              data-testid={testId ? testId : "FmmInput-input"}
            />
          ) : (
            <Input
              type={type}
              placeholder={placeholder}
              prefix={prefix}
              onBlur={props?.handleBlur(field)}
              onChange={props?.handleChange(field)}
              value={nested ? props?.values[objectTitle][objectProperty] : props?.values[field ?? '']}
              onFocus={(e) => {
                onFocusPress && onFocusPress(e);
                if (type === 'number' && value === 0) props?.setFieldValue(field, '');
              }}
              variant='borderless'
              onPressEnter={onPressEnter}
              className='fmmInput'
              style={{ height: `${$height}` }}
              id='fmmInput'
              data-testid={testId ? testId : "FmmInput-input"}
            />
          )
        }

        {nested && props?.touched[objectTitle] && props?.touched[objectTitle][objectProperty] &&
          props?.errors[objectTitle] && props?.errors[objectTitle][objectProperty] && (<small className='field-error'>{props?.errors[objectTitle][objectProperty]}</small>)}
        {props?.touched[field ? field : ''] && props?.errors[field ? field : ''] && <small className='field-error'>{props?.errors[field ? field : '']}</small>}
      </FmmFormStyles>
    </ThemeProvider>
  );
}

export const FmmPasswordInput = ({ label, type = 'text', placeholder = 'Enter Response', props, value, field, amount = false, nested = false, objectTitle = '', objectProperty = '', prefix, small, $noMargin, disableAutoFill }: IPInput) => {
  return (
    <ThemeProvider theme={FMMTheme}>
      <FmmFormStyles small={small} $noMargin={$noMargin}>
        <label htmlFor={`${field}-passwordField` || 'fmmPasswordInput'}>{label}</label>
        {
          <Input.Password
            type={type}
            placeholder={placeholder}
            prefix={prefix || <IconLock size={18} />}
            onBlur={props?.handleBlur(field)}
            onChange={props?.handleChange(field)}
            value={nested ? props?.values[objectTitle][objectProperty] : props?.values[field ?? '']}
            onFocus={() => {
              if (type === 'number' && value === 0) props?.setFieldValue(field, '');
            }}
            variant='borderless'
            className='fmmInput'
            id={`${field}-passwordField` || 'fmmPasswordInput'}
            autoComplete={disableAutoFill ? 'new-password' : undefined}
          />
        }

        {nested && props?.touched[objectTitle] && props?.touched[objectTitle][objectProperty] &&
          props?.errors[objectTitle] && props?.errors[objectTitle][objectProperty] && (<small className='field-error'>{props?.errors[objectTitle][objectProperty]}</small>)}
        {props?.touched[field ? field : ''] && props?.errors[field ? field : ''] && <small className='field-error'>{props?.errors[field ? field : '']}</small>}
      </FmmFormStyles>
    </ThemeProvider>
  );
}

export const FmmSelect = ({ label, placeholder = 'Select Response', props, field, options, tags = false, nested = false, objectTitle = '', objectProperty = '', small, icon, onSelectChange, $maxWidth, testId, showSearch }: IPSelect) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const filteredOptions = options.filter((o: { title: string | JSX.Element }) => !selectedItems.includes(o.title as string));
  if (props?.values[field ? field : ''] === '' && tags) {
    props.values[field ? field : ''] = null;
  }
  return (
    <ThemeProvider theme={FMMTheme}>
      <FmmFormStyles small={small} icon={icon} $maxWidth={$maxWidth}>
        <>
          <label htmlFor={'selectInput'}>{label}</label>
          {
            tags ? <div className='selectWrapper'>
              {icon && <div className="selectIcon">
                {icon}
              </div>}
              <Select
                defaultActiveFirstOption={true}
                suffixIcon={<IconChevronDown className='selectChevronIcon' />}
                className='fmmSelect'
                placeholder={placeholder}
                onBlur={props?.handleBlur(field)}
                onChange={onSelectChange ? onSelectChange : (val) => {
                  let value = val.toString();
                  (props?.setFieldValue(field, value));
                  setSelectedItems(val);
                }}
                value={Array.isArray(props?.values[field ? field : '']) ? props?.values[field ? field : ''] : props?.values[field ? field : '']?.split(',')}
                mode={'tags'}
                tokenSeparators={[',']}
                id='selectInput'
                variant='borderless'
                data-testid={testId ? testId : "FmmSelect-input"}
              >
                {filteredOptions.map((opt, index) => <Select.Option style={{ textTransform: 'capitalize' }} key={index} value={opt.value}>{opt.title}</Select.Option>)}
              </Select></div> :
              <div className='selectWrapper'>
                {icon && <div className="selectIcon">
                  {icon}
                </div>}
                <Select
                  defaultActiveFirstOption={true}
                  showSearch={showSearch}
                  suffixIcon={<IconChevronDown className='selectChevronIcon' />}
                  className='fmmSelect'
                  placeholder={placeholder}
                  onBlur={props?.handleBlur(field)}
                  onChange={onSelectChange ? onSelectChange : (val) => props?.setFieldValue(field, val)}
                  value={nested ? props?.values[objectTitle][objectProperty] : props?.values[field ? field : '']}
                  id='selectInput'
                  variant='borderless'
                  data-testid={testId ? testId : "FmmSelect-input"}
                >
                  {
                    options.map((opt, index) => <Select.Option style={{ textTransform: 'capitalize' }} key={index} value={opt.value}>{opt.title}</Select.Option>)
                  }
                </Select></div>
          }
          {nested && props?.touched[objectTitle] && props?.touched[objectTitle][objectProperty] &&
            props?.errors[objectTitle] && props?.errors[objectTitle][objectProperty] && (<small className='field-error'>{props?.errors[objectTitle][objectProperty]}</small>)}
          {props?.touched[field ? field : ''] && props?.errors[field ? field : ''] && <small className='field-error'>{props?.errors[field ? field : '']}</small>}
        </>
      </FmmFormStyles>
    </ThemeProvider>
  );
};

export const FmmPhoneNumberInput = ({ label, type = 'text', props, value, field, selectedCountry = 'NG' }: IPInput) => {
  return (
    <ThemeProvider theme={FMMTheme}>
      <FmmFormStyles>
        <label htmlFor={'FmmPhoneNumberInput'}>{label}</label>
        <div className='fmmPhoneNumberInput'>
          <PhoneInput
            international
            countryCallingCodeEditable={false}
            defaultCountry={selectedCountry}
            onBlur={props?.handleBlur(field)}
            onChange={props?.handleChange(field)}
            className={'select'}
            value={props?.values?.[field ?? '']}
            onFocus={() => {
              if (type === 'number' && value === 0) props?.setFieldValue(field, '');
            }}
            id='FmmPhoneNumberInput'
          />
          <IconChevronDown size={18} className='selectChevron' />
        </div>
        {props?.touched?.[field ?? ''] && props?.errors?.[field ?? ''] && <small className='field-error'>{props?.errors?.[field ?? '']}</small>}
      </FmmFormStyles>
    </ThemeProvider>
  );
};

export const FmmTimePicker = ({ label, value, placeholder = 'Enter Response', props, field }: IPInput) => {
  return (
    <ThemeProvider theme={FMMTheme}>
      <FmmFormStyles>
        <div className='AddLocationFormContainer dateContainer'>
          <label htmlFor='FmmTimePicker'>{label}</label>
          <TimePicker
            use12Hours
            format='h:mm a'
            onBlur={props?.handleBlur(field)}
            // onChange={(time: Dayjs | null, timeString: string) => {
            //     (props?.setFieldValue(field, timeString));
            //   }}
            placeholder={placeholder}
            value={value ? dayjs(value?.toString(), 'hh:mm a') : undefined}
            id='FmmTimePicker'
            data-testid='FmmTimePicker'
          />
          {props?.touched[field ?? ''] && props?.errors[field ?? ''] && <small className='field-error'>{props?.errors[field ?? '']}</small>}
        </div>
      </FmmFormStyles>
    </ThemeProvider>
  );
};

export const FmmDatePicker = ({ label, placeholder = 'Enter Response', props, field, disabledDate, minAllowedDate = dayjs().subtract(18, 'year'), small, value, onDateChange }: IPInput) => {
  return (
    <ThemeProvider theme={FMMTheme}>
      <FmmFormStyles small={small}>
        <div className='AddLocationFormContainer dateContainer'>
          <label htmlFor='FmmDatePicker'>{label}</label>
          <div className="datePickerWrapper">
          <DatePicker
              format="YYYY-MM-DD"
              onBlur={props?.handleBlur(field)}
            //   onChange={onDateChange ? onDateChange : (date: dayjs.ConfigType | null, dateString: string) => { props?.setFieldValue(field, dateString) }}
              placeholder={placeholder}
              value={field && props.values[field] ? dayjs(props.values[field]?.toString(), 'YYYY-MM-DD') : minAllowedDate}
              disabledDate={disabledDate}
              className='datePicker'
              suffixIcon={false}
              id='FmmDatePicker'
              data-testid='FmmDatePicker'
            />
            <IconCalendarEvent size={20} color={FMMTheme.colors.text.grey_600} className='datePickerIcon' />
          </div>
          {props?.touched[field ?? ''] && props?.errors[field ?? ''] && <small className='field-error'>{props?.errors[field ?? '']}</small>}
        </div>
      </FmmFormStyles>
    </ThemeProvider>
  );
};

export const FmmDateRangePicker = ({ label, props, field, disabledDate, minAllowedDate = dayjs().subtract(18, 'year'), small, onDateChange, $maxWidth, startDate, endDate, $noMargin }: IPInput) => {
  const handleDateChange = (dates: [dayjs.Dayjs | null, dayjs.Dayjs | null], dateStrings: [string, string]) => {
    const dateString = dateStrings.join('%2C');
    if (onDateChange) {
      const selectedDate = dates && dates[0];
      onDateChange(selectedDate, dateString);
    }
    props?.setFieldValue(field, dateStrings);
  };
  return (
    <ThemeProvider theme={FMMTheme}>
      <FmmFormStyles small={small} $maxWidth={$maxWidth} $noMargin={$noMargin} >
        <div className='AddLocationFormContainer dateContainer'>
          {label && <label htmlFor='FmmDatePicker'>{label}</label>}
          <div className="datePickerWrapper">
            <RangePicker
              format={'YYYY-MM-DD'}
              onBlur={props?.handleBlur(field)}
              placeholder={[startDate as string, endDate as string]}
              onChange={handleDateChange as any} // update it later
              disabledDate={disabledDate}
              className='datePicker'
              suffixIcon={false}
              id='FmmDatePicker'
              data-testid='FmmDatePicker'
            />
            <IconCalendarEvent size={20} color={FMMTheme.colors.text.grey_600} className='datePickerIcon' />
          </div>
          {props?.touched[field ?? ''] && props?.errors[field ?? ''] && <small className='field-error'>{props?.errors[field ?? '']}</small>}
        </div>
      </FmmFormStyles>
    </ThemeProvider>
  );
};

export const FmmCountrySelect = ({ label, props, field, edit = false }: IPCountrySelect) => (
  <ThemeProvider theme={FMMTheme}>
    <FmmFormStyles>
      <label htmlFor='FmmCountrySelect'>{label}</label>
      <Select
        showSearch
        suffixIcon={<IconChevronDown className='selectChevronIcon' />}
        defaultActiveFirstOption={true}
        disabled={edit ? true : false}
        className={'fmmSelect selectWrapper'}
        placeholder='Select Country'
        onBlur={props.handleBlur(field)}
        onChange={(val) => {
          props.setFieldValue(field, val);
          props.setFieldValue('state', '');
        }}
        value={props.values[field]}
        id={'FmmCountrySelect'}
        variant='borderless'
      >
        {servicedCountries.map((item) => (
          <Select.Option
            value={item.country}
            key={item.country}
          >
            {item.country}
          </Select.Option>
        ))}
      </Select>
      {props.touched[field] && props.errors[field] && <small className='field-error'>{props.errors[field]}</small>}
    </FmmFormStyles>
  </ThemeProvider>
);

export const FmmStateSelect = ({ label, props, field, states, edit = false }: IPCountrySelect) => (
  <ThemeProvider theme={FMMTheme}>
    <FmmFormStyles>
      <label htmlFor='FmmStateSelect'>{label}</label>
      <Select
        showSearch
        suffixIcon={<IconChevronDown className='selectChevronIcon' />}
        defaultActiveFirstOption={true}
        disabled={edit ? true : false}
        className={'fmmSelect selectWrapper'}
        placeholder={'Select State'}
        onBlur={props.handleBlur(field)}
        onChange={(val) => props.setFieldValue(field, val)}
        value={props.values[field]}
        id={'FmmStateSelect'}
        variant='borderless'
      >
        {states && states.map((item) => (
          <Select.Option
            value={item}
            key={item}
          >
            {item}
          </Select.Option>
        ))}
      </Select>
      {props.touched[field] && props.errors[field] && <small className='field-error'>{props.errors[field]}</small>}
    </FmmFormStyles>
  </ThemeProvider>
);

export const FmmCheckboxInput = ({ label, props, field, options }: ICheckbox) => {
  const handleCheckboxChange = (value: string) => {
    props.handleChange(field)(value);
  };
  return (
    <ThemeProvider theme={FMMTheme}>
      <FmmFormStyles>
        <label htmlFor='FmmCheckbox'>{label}</label>
        <div className='flex gap-6'>
          {options.map((option: { title: string, value: string }) => (
            <CheckboxWrapper key={option.title}>
              <HiddenRadio
                data-testid={`radio-${option.value}`}
                type='radio'
                name={field}
                value={option.value}
                checked={props.values?.[field] === option.title}
                onChange={() => handleCheckboxChange(option.title)}
              />
              <StyledCheckbox checked={props.values?.[field] === option.title} />
              {option.title}
            </CheckboxWrapper>
          ))}
        </div>
        {props?.touched[field ?? ''] && props?.errors[field ?? ''] && <small className='field-error'>{props?.errors[field ?? '']}</small>}
      </FmmFormStyles>
    </ThemeProvider>
  );
};

export const FmmTextArea = ({ label, placeholder, field, props }: { label: string, placeholder: string, field: string, props: any, value: string }) => {
  const { TextArea } = Input;
  const maxWordCount = 300;

  const countWords = (text: string) => {
    return text.split(/\s+/).filter(word => word !== '').length;
  };

  const currentWordCount = countWords(props.values[field]);
  const handleTextAreaChange = (e: { target: { value: any; }; }) => {
    const newValue = e.target.value;
    if (countWords(newValue) <= maxWordCount) {
      props.handleChange(field)(newValue);
    }
  };

  return (
    <ThemeProvider theme={FMMTheme}>
      <FmmFormStyles $noMargin={true}>
        <div className='TextAreaForm'>
          <label>{label}</label>
          <TextArea
            onBlur={props.handleBlur(field)}
            onChange={handleTextAreaChange}
            value={props.values[field]}
            className={'select'}
            placeholder={placeholder}
            autoSize={{ minRows: 4 }}
          />
          <div className='fieldInfo'>
            {props.touched[field] && props.errors[field] ? <small className='field-error'>{props.errors[field]}</small> : <small> &nbsp; </small>}
            <p className="wordCount">
              {currentWordCount}/{maxWordCount} words
            </p>
          </div>
        </div>
      </FmmFormStyles>
    </ThemeProvider>
  );
};

export const FmmSelectMenu = ({ options, small, icon, $height, $maxWidth, placeholder, onSelectChange, $width }: IPSelect) => {
  return (
    <ThemeProvider theme={FMMTheme}>
      <FmmFormStyles small={small} icon={icon} $height={$height} $maxWidth={$maxWidth} $width={$width} style={{ margin: '0px 0px 0px 0px', padding: '0px 0px 0px 0px' }}>
        <>
          {
            <div className='selectWrapper menu'>
              {icon && <div className="selectIcon">
                {icon}
              </div>}
              <Select
                suffixIcon={<IconChevronDown className='selectChevronIcon' />}
                className='fmmSelect'
                placeholder={placeholder}
                onChange={onSelectChange}
                id='selectInput'
                variant='borderless'
                data-testid="FmmSelect-input"
              >
                {
                  options.map((opt, index) => <Select.Option style={{ textTransform: 'capitalize' }} key={index} value={opt.value}>{opt.title}</Select.Option>)
                }
              </Select>
            </div>
          }
        </>
      </FmmFormStyles>
    </ThemeProvider>
  );
};

// export const FmmMapInput = ({ props, field, }: IMapInput) => {

//   const [lat, setLat] = useState(6.5095);
//   const [lng, setLng] = useState(3.3711);

//   const libraries = useMemo(() => ['places'], []);
//   const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);

//   const mapOptions = useMemo<google.maps.MapOptions>(
//     () => ({
//       disableDefaultUI: true,
//       clickableIcons: true,
//       scrollwheel: false,
//     }),
//     []
//   );

//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
//     libraries: libraries as any,
//   });

//   if (!isLoaded) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <ThemeProvider theme={FmmTheme}>
//       <FmmFormStyles>
//         <label> Where is your place located</label>
//         <GoogleMap
//             options={mapOptions}
//             zoom={14}
//             center={mapCenter}
//             mapTypeId={google.maps.MapTypeId.ROADMAP}
//             mapContainerStyle={{ width: '100%', height: '250px', paddingTop: '10rem', borderRadius: '15px' }}
//             >
//             <MarkerF position={mapCenter} onLoad={() => {}} />
//         </GoogleMap>
//         <div className='mapInput bg-white' >
//           <IconMapPin className='mt-2' size={20} />
//           <PlacesAutocomplete
//             field={'address'}
//             props={props}
//             onAddressSelect={(address) => {
//               getGeocode({ address: address }).then((results) => {
//                 const { lat, lng } = getLatLng(results[0])
//                 setLat(lat);
//                 setLng(lng);
//               });
//             }}
//           />
//         </div>
//       </FmmFormStyles>
//     </ThemeProvider>
//   )
// };


export const FmmDynamicInput: React.FC<DynamicInputProps> = ({ name, label }: { name: string, label: string }) => {
  return (
    <ThemeProvider theme={FMMTheme}>
      <FmmFormStyles>
        <label>
          {label}
        </label>
        <FieldArray name={name}>
          {({ push, remove, form }) => (
            <div>
              {form.values[name].map((input: string, index: number) => (
                <>
                  <div className='dynamicInput' key={index}>
                    <input
                      name={`${name}.${index}`}
                      value={input.startsWith(`${index + 1}.`) ? input : `${index + 1}. ${input}`}
                      onChange={(event) => {
                        const updatedInputs = [...form.values[name]];
                        updatedInputs[index] = event.target.value;
                        form.setFieldValue(name, updatedInputs);
                      }}
                    />
                    {index > 0 && (
                      <FmmButton
                        label='Remove'
                        $maxWidth={100}
                        $height={44}
                        margin='0.5rem 0'
                        $borderColor={`${FMMTheme.colors.border}`}
                        onClick={() => remove(index)}
                        $color={FMMTheme.colors.text.header}
                        $backgroundcolor={FMMTheme.colors.button.secondary}
                      />
                    )}
                  </div>
                  <ErrorMessage className='field-error' name={`${name}.${index}`} component="div" />
                </>
              ))}
              <FmmButton
                label='Add Rule'
                icon={<IconPlus size={18} />}
                $maxWidth={137}
                margin='0.5rem 0'
                $height={44}
                onClick={() => push('')}
                $color={FMMTheme.colors.text.purple}
                $backgroundcolor={FMMTheme.colors.button.secondary}
              />
            </div>
          )}
        </FieldArray>
      </FmmFormStyles>
    </ThemeProvider>
  );
};


// export const FmmUploadMedia = ({ label, props, field, token, edit = false , 
//   multiple = true, button_text = 'Attach File', 
//   button_description = '1600x1200 or higher recommended. Max 10mb', 
//   button_description_part =' each (20mb for videos)',
//   accept ='.png, .jpg, .jpeg, .mov, .mp4, .avi',
//   setUploaded,   
// }: IMedia) => {
//   return (
//     <ThemeProvider theme={FmmTheme}>
//       <FmmFormStyles>
//         <label> {label} </label>
//         <div style={{height: '100%'}} className={'selects'}>
//           <Upload
//             customRequest={dummyRequest}
//             onChange={(info) => handleMediaChange(info, props, field, token, multiple, setUploaded)}
//             multiple
//             accept={accept}
//             beforeUpload={(file) => beforeUpload(file, 50)}
//             fileList={props.values.fmmMedia}
//           >
//             <Button className='buttonInfo'>
//               <div>
//                 <IconUpload className='icon' size={38} />
//               </div>
//               <h2> {button_text} </h2> 
//               <p> {button_description} <br /> {button_description_part}</p>
//               <h4> <u> Upload from your device </u> </h4>
//             </Button>
//           </Upload>
//         </div>
//         {/* <label>Jpeg, Mp4 etc</label> */}
//         <br/>
//         {props.touched[field] && props.errors[field] && <small className='field-error'>{props.errors[field]}</small>}
//       </FmmFormStyles>
//     </ThemeProvider>
//   )
// };

export const FmmUploadDoc = ({ label, props, field, button_text = 'Attach File', width = 'max-content', accept = '.doc, .docx, .pdf', setUploaded, uploadDoc }: IMedia) => {
  const session = useSession();
  const token = session?.data?.user.accessToken;
  return token && (
    <ThemeProvider theme={FMMTheme}>
      <FmmFormStyles>
        <label>{label}</label>
        <div style={{ height: '100%', maxWidth: width }} className={'selects'}>
          <Upload
            customRequest={dummyRequest}
            onChange={(info) => handleDocChange(info, props, field, token, false, setUploaded)}
            accept={accept}
            beforeUpload={(file) => beforeUpload(file, 20)}
            fileList={props.values.fmmDoc}
          >
            {
              uploadDoc ?
                <div className='uploadDocument'>
                  <IconFileUpload size={16} />
                  Upload document
                </div> :
                <Button>
                  <IconPaperclip className='icon' /> {''} {''} <p> {button_text} </p>
                </Button>
            }
          </Upload>
        </div>
        {/* <label>DOC, PDF etc...</label> */}
        {props.touched[field] && props.errors[field] && <small className='field-error'>{props.errors[field]}</small>}
      </FmmFormStyles>
    </ThemeProvider>
  )
};

