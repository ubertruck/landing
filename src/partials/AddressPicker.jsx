import React, { useState } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
// import 'react-places-autocomplete/dist/assets/index.css';

function AddressPicker({ label, onSelectAddress }) {
  const [address, setAddress] = useState('');

  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = async (address) => {
    setAddress(address);
    try {
      const results = await geocodeByAddress(address);
      // const latLng = await getLatLng(results[0]);
      onSelectAddress(results[0]?.formatted_address);
    } catch (error) {
      console.error('Error fetching address:', error);
    }
  };

  return (
      <div className="mb-4">
        <label htmlFor={label} className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1">
          {label}
        </label>
        <PlacesAutocomplete value={address} onChange={handleChange} onSelect={handleSelect}>
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <input
                    {...getInputProps({
                      placeholder: 'Enter your address...',
                      className: 'form-input w-full dark:text-white placeholder-gray-400 dark:placeholder-white',
                    })}
                />
                <div className="absolute z-10 mt-2 bg-white shadow-lg rounded-lg">
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion) => {
                    const style = suggestion.active
                        ? 'bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-300 cursor-pointer py-2 px-4'
                        : 'cursor-pointer py-2 px-4';
                    return (
                        <div
                            key={suggestion.placeId}
                            {...getSuggestionItemProps(suggestion, {
                              className: style,
                            })}
                        >
                          {suggestion.description}
                        </div>
                    );
                  })}
                </div>
              </div>
          )}
        </PlacesAutocomplete>
      </div>
  );
}

export default AddressPicker;
