import React, { useEffect, useState } from 'react';
import { SearchWrapperStyle } from "./style";
import { SearchModalProps } from './interface';
import { IconArrowNarrowRight } from '@tabler/icons-react';

const results = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    serviceType: 'Service'
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    serviceType: 'Brief'
  },
  {
    id: 3,
    firstName: "Alice",
    lastName: "Johnson",
    serviceType: 'Permit'
  },
  {
    id: 4,
    firstName: "Bob",
    lastName: "Williams",
    serviceType: 'Client'
  },
  {
    id: 5,
    firstName: "Eva",
    lastName: "Davis",
    serviceType: 'Cast'
  },
  {
    id: 6,
    firstName: "Tom",
    lastName: "Brown",
    serviceType: 'Provider'
  },
  {
    id: 7,
    firstName: "Lucy",
    lastName: "Miller",
    serviceType: 'Crew'
  },
  {
    id: 8,
    firstName: "David",
    lastName: "Johnson",
    serviceType: 'Service'
  },
  {
    id: 9,
    firstName: "Emma",
    lastName: "Smith",
    serviceType: 'Brief'
  },
  {
    id: 10,
    firstName: "Michael",
    lastName: "Davis",
    serviceType: 'Permit'
  },
];


function SearchModal({ result }: SearchModalProps) {
  const initialData = [
    { id: 1, value: 'Service', selected: false },
    { id: 2, value: 'Brief', selected: false },
    { id: 3, value: 'Permit', selected: false },
    { id: 4, value: 'Client', selected: false },
    { id: 5, value: 'Cast', selected: false },
    { id: 6, value: 'Provider', selected: false },
    { id: 7, value: 'Crew', selected: false },
  ];

  const [data, setData] = useState(initialData);
  const [filteredResults, setFilteredResults] = useState(results);
  // const suggestions = data.filter((button) => button.selected).map((selectedButton) => (selectedButton.value));


  const handleClick = (id: number) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };
  
  useEffect(() => {
    const selectedValues = data.filter((button) => button.selected).map((selectedButton) => selectedButton.value);
  
    const filteredValues = selectedValues.length === 0 ? results : results.filter((suggestion) => selectedValues.includes(suggestion.serviceType));

    setFilteredResults(filteredValues);
  }, [data]);

  return (
    <SearchWrapperStyle id="suggestionModal">
      <p className="searchDescription">Search for...</p>
      <div data-testid='search-modal'>
        <div className='searchForm'>
          {data.map((button) => (
            <button
              key={button.id}
              onClick={() => handleClick(button.id)}
              style={{
                backgroundColor: button.selected ? '#FF6029' : '#F9FAFB',
                color: button.selected ? '#FFFF' : '#1D2939',
              }}
            >
              {button.value}
            </button>
          ))}
        </div>
        {filteredResults.length > 0 ? (
          <div className='suggestions'>
            <p>Suggestions <span>{filteredResults.length}</span></p>
            {filteredResults.map((suggestion) => (
              <div key={suggestion.id} className='suggestionContainer'>
                <div className='suggestionNames'>
                  <div className='suggestionAvatar'>
                    {`${suggestion.firstName?.charAt(0)}${suggestion.lastName?.charAt(0)}`}
                  </div>
                  <div>
                    <p style={{ margin: 0 }}>{`${suggestion.firstName} ${suggestion.lastName}`}</p>
                  </div>
                </div>
                <div>
                  <IconArrowNarrowRight />
                </div>
              </div>
            ))}
          </div>
        ) : <p>loading...</p>}
      </div>
    </SearchWrapperStyle>
  );
}

export default SearchModal;
