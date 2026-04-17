import './searchresult.css'
import { useState } from 'react'
import Autosuggest from 'react-autosuggest'
import theme from './theme.module.css'
// https://github.com/moroshko/react-autosuggest#installation

const getSuggestions = (value, data) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  if (inputLength === 0) return [];

	// add where if array length 0 return dummy suggestion
  const suggestions = data.filter(
    (element) =>
      element.name.toLowerCase().includes(inputValue)
  );
	if (suggestions.length === 0) return [{name: "No results"}];
	return suggestions;
};

const getSuggestionValue = (suggestion) => {
  return suggestion?.name ?? "";
};

const renderSuggestion = (suggestion) => (
  	<div>{suggestion.name}</div>
);

const AutoInput = ({ value, onChange, placeholder, inputStyle, data}) => {
  const [suggestions, setSuggestions] = useState([]);

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value, data));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder,
    value: value ?? "",
    onChange
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
	  theme={theme}
    />
  );
}

export default AutoInput;
