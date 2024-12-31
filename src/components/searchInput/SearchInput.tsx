import React, { useState } from "react";
import { Input, Dropdown, DropdownItem, DropdownMenu } from "reactstrap";
import { SearchInputProps } from "./SearchInputProps";
import { stringIsNotEmpty } from "../../utils/validationUtils/validationUtils";

const SearchInput: React.FC<SearchInputProps> = ({
  data,
  onSelect,
  searchType,
}) => {
  const [query, setQuery] = useState<string>("");
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const handleInputChange = (e: any) => {
    const value = e.target.value;
    setQuery(value);

    if (stringIsNotEmpty(value)) {
      const results = data.filter((item) =>
        item[searchType].toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(results);
      setShowSuggestions(true);
    } else {
      setFilteredData([]);
      setShowSuggestions(false);
    }
  };

  const handleSelect = (item: any) => {
    setQuery(item.name);
    setShowSuggestions(false);
    onSelect(item);
  };

  const handleBlur = () => {
    setTimeout(() => setShowSuggestions(false), 100);
  };

  return (
    <>
      <Input
        type="text"
        value={query}
        onChange={handleInputChange}
        onFocus={() => setShowSuggestions(true)}
        onBlur={handleBlur}
        placeholder="Search..."
      />
      {showSuggestions && filteredData.length > 0 && (
        <Dropdown isOpen={showSuggestions} toggle={() => {}}>
          <DropdownMenu
            style={{
              width: "100%",
              maxHeight: "150px",
              overflowY: "auto",
            }}
          >
            {filteredData.map((item) => (
              <DropdownItem
                key={item.id}
                onClick={() => handleSelect(item)}
                style={{ cursor: "pointer" }}
              >
                {item.name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      )}
    </>
  );
};

export default SearchInput;
