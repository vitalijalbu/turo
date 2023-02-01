import React, { useRef, useState, useCallback, useEffect } from "react";
import { List, ListInput, f7 } from "framework7-react";

const AddressField = ({ label, name, placeholder, required, selectChange }) => {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState();

  //console.log('query', query);

  const autocompleteDropdownAjax = useRef(null);
  const onPageBeforeRemove = () => {
    // Destroy all autocompletes
    autocompleteDropdownAjax.current.destroy();
  };

  useEffect(() => {
    autocompleteDropdownAjax.current = f7.autocomplete.create({
      inputEl: "#autocomplete-dropdown",
      openIn: "dropdown",
      autoFocus: true,
      notFoundText: "Nessun indirizzo trovato",
      autoFocus: true,
      closeOnSelect: true,
      expandInput: true, // expand input
      preloader: true, // enable preloader
      valueProperty: "long_name", // object's "value" property long_name
      textProperty: "long_name", // object's "text" property long_name
      dropdownPlaceholderText: "Inserisci l'indirizzo completo",
      on: {
        change: function (value) {
          //console.log('Autocomplete change', value[0].long_name);
          selectChange({ formatted_address: value[0].long_name });
        },
      },
      source(query, render) {
        var autocomplete = this;
        const results = [];
        addressSearch(query)
          .then(({ data }) => {
            autocomplete.preloaderHide();
            //console.table(data);
            //results.push(data?.data || []);
            render(data);
          })
          .catch((err) => {
            console.log("err", err);
            f7.toast.show({
              text: err.message,
              horizontalPosition: "center",
              closeTimeout: 2500,
              cssClass: "danger",
            });
          });
      },
    });
  }, []);

  return (
    <List form>
      <ListInput
        label={label}
        name="formatted_address"
        placeholder={placeholder}
        clearButton
        required={required}
        validate
        autoComplete={false}
        value={query}
        onInput={(e) => setQuery(e.target.value)}
        type="text"
        inputId="autocomplete-dropdown"
      />
    </List>
  );
};

export default AddressField;
