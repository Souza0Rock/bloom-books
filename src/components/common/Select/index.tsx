import React, { useEffect, useRef, useState } from "react";
import { Component } from "./Select.styled";
import Chevron from "../../../../public/icons/chevron";
import Typography from "../Typography";

// import { Container } from './styles';

const Select: React.FC = () => {
  const options = [5, 10, 15]; // Os números que você quer que apareçam no dropdown

  const handleSelect = (option: any) => {
    // console.log("Selecionado:", option);
    // Coloque aqui o código que deve rodar quando uma opção é selecionada
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
    handleSelect(option);
  };

  const modalRef = useRef<HTMLDivElement>(null);

  function handleEscKey(event: KeyboardEvent) {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
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
    <div style={{ position: "relative" }}>
      <div
        onClick={toggleOpen}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}
        ref={modalRef}
      >
        <Typography
          fontSize={12}
          lineHeigth={1}
          color="#010311"
          className="select-value"
        >
          {selectedOption}
        </Typography>
        <Chevron />
      </div>
      {isOpen && (
        <ul
          style={{
            color: "#010311",
            position: "absolute",
            backgroundColor: "#fff",
          }}
        >
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              style={{
                cursor: "pointer",
                listStyle: "none",
                borderBottom: "1px solid black",
                padding: "0.5rem",
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
