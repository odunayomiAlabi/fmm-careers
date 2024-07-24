import { message } from 'antd';
import { UploadChangeParam } from 'antd/lib/upload';
import axios from 'axios';
import short from 'short-uuid';
import usePlacesAutocomplete from 'use-places-autocomplete';
import useOnclickOutside from "react-cool-onclickoutside";
import { Tag } from "antd";

export const beforeUpload = (file: { size: number }, max = 20) => {
  const isLt2M = file.size / 1024 / 1024 <= max;
  if (!isLt2M) {
    message.error(`File size can not be more than ${max}MB!`);
  }
  return isLt2M;
};

export const dummyRequest = (req: any) => {
  setTimeout(() => {
    req.onSuccess('ok');
  }, 0);
};

export const handleMediaChange = async (info: UploadChangeParam, props: any, field: string, token: string, multiple: boolean, setUploaded: React.Dispatch<React.SetStateAction<boolean>>,) => {
  let newFileList = [...info.fileList];
  props.setFieldValue('fmmMedia', newFileList);
  setUploaded && setUploaded(false);
  if (info.file.status === 'done' && token) {
    const promises = info.fileList.map(async (file) => {
      const res = await axios.post(
        'https://staging-api.filmmakersmart.com/utility/get-signed-url',
        {
          name: `${short().new()}${Date.now()}`,
          type: file.type,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      axios.put(`${res.data.data.data.signedRequest}`, file.originFileObj)
        .then(res => {
          if (res.status == 200) {
            // message.success(`${info.file.name} file uploaded successfully`);
            setUploaded && setUploaded(true);
          }
        });
      const value = multiple ? {
        url: res.data.data.data.url,
        type: file.type as string,
      } : res.data.data.data.url;
      return value;
    });

    try {
      const values = await Promise.all(promises);
      // console.log(values, promises);
      // Add all values to the field using props.setFieldValue
      multiple ? props.setFieldValue(field, values) : props.setFieldValue(field, values[0]);
      message.success(`${info.file.name} file uploaded successfully`);
    } catch (error) {
      // Handle error if any request fails
      console.error(error);
    }
  } else if (info.file.status === 'error') {
    message.error(`${info.file.name} file upload failed.`);
  }
};


export const handleDocChange = async (info: UploadChangeParam, props: any, field: string, token: string, multiple: boolean, setUploaded: React.Dispatch<React.SetStateAction<boolean | undefined>>) => {

  let newFileList = [...info.fileList];
  props.setFieldValue('fmmDoc', newFileList);
  setUploaded && setUploaded(false);

  if (info.file.status === 'done' && token) {
    info.fileList.map((file) => {
      axios.post('https://staging-api.filmmakersmart.com/utility/get-signed-url', {
        name: `${short().new()}${Date.now()}`,
        type: file.type,
      }, {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then((res) => {
          const value = multiple ? [...props.values[field], {
            url: res.data.data.data.url,
            type: file.type as string,
          }] : res.data.data.data.url;
          props.setFieldValue(field, value);
          axios.put(`${res.data.data.data.signedRequest}`, file.originFileObj)
            .then(res => {
              if (res.status == 200) {
                message.success(`${info.file.name} file uploaded successfully`);
                setUploaded && setUploaded(true);
              }
            });
        })
        .catch((error) => error);
    });
  } else if (info.file.status === 'error') {
    message.error(`${info.file.name} file upload failed.`);
  }
};


export const PlacesAutocomplete = ({
  onAddressSelect,
  field,
  props,
}: {
  onAddressSelect?: (address: string) => void;
  field: string, props: any
}) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({

    debounce: 300,
    cache: 86400,
  });

  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });


  const renderSuggestions = () => {
    return data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
        description,
      } = suggestion;

      return (
        <li
          key={place_id}
          onClick={() => {
            setValue(description, false);
            props.setFieldValue(field, description)
            clearSuggestions();
            onAddressSelect && onAddressSelect(description);

            let val = description.split(',');
            props.setFieldValue('city', val[1]);
            props.setFieldValue('state', val[val.length - 2]);
            props.setFieldValue('country', val[val.length - 1]);
          }}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });
  };

  return (
    <div ref={ref}>
      <input
        value={props.values[field]}
        disabled={!ready}
        onChange={(e) => {
          props.setFieldValue(field, e.target.value)
          setValue(e.target.value)
        }}
        placeholder="Enter address here"
      />
      {/* <p style={{ padding: status === 'OK' ?  '0' : '0.5rem 0'  }} className='label'>&nbsp; Address not on map? &nbsp; <span>Enter address here</span></p> */}

      {status === 'OK' && (
        <ul >{renderSuggestions()}</ul>
      )}
    </div>
  );
};


export const Tags = ({ status }: { status: string | undefined }) => {
  return (
    <Tag
      color={status === 'available' || status === 'approved' || status === 'completed' || status === 'inspected' || status === 'confirmed' || status === 'accepted' || status === 'booked' || status === 'successful'
        ? '#38CB89'
        : status === 'awaiting' || status === 'ongoing' || status === 'inprogress' || status === 'pending'
          ? 'yellow'
          : 'red'}
      style={{ borderRadius: '15px' }}
    >
      {status}
    </Tag>
  )
}
