import React, { useEffect, useRef, useState } from "react";
import { Container, Option, Popup } from "./Select.styled";
import Chevron from "../../../../public/icons/chevron";
import Typography from "../Typography";
import Stack from "../Stack";

const Select: React.FC<{
  value: any;
  onChange: (e: any) => void;
  options: any[];
}> = ({ value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: any) => {
    onChange(option);
    setIsOpen(false);
  };

  const selectRef = useRef<HTMLDivElement>(null);

  function handleEscKey(event: KeyboardEvent) {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <Container isOpen={isOpen}>
      <Stack
        onClick={toggleOpen}
        flexDirection="row"
        alignItems="center"
        gap={0.25}
        cursorPointer
      >
        <Typography
          fontSize={12}
          lineHeigth={1}
          color="#010311"
          className="select-value"
          cursorPointer
        >
          {value}
        </Typography>
        <Chevron />
      </Stack>
      {isOpen && (
        <Popup ref={selectRef}>
          {options.map((option, index) => (
            <Option
              p={0.35}
              key={index}
              alignItems="center"
              onClick={() => handleOptionClick(option)}
            >
              <Typography color="#01031">{option}</Typography>
            </Option>
          ))}
        </Popup>
      )}
    </Container>
  );
};

export default Select;
