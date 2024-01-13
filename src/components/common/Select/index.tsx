import React, { useCallback, useEffect, useRef, useState } from "react";
import { Component } from "./Select.styled";
import Chevron from "../../../../public/icons/chevron";
import Typography from "../Typography";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { usePagination } from "@/contexts/Pagination";
import Stack from "../Stack";
import styled from "styled-components";
import useCreateQuery from "@/hooks/useCreateQuery";

const Select: React.FC = () => {
  const { get } = useSearchParams()

  const param = get("itemsPerPage")

  const { createQuery } = useCreateQuery();
  const { handleChangeItemsPerPage } = usePagination();

  const options = [5, 10, 15]; // Os números que você quer que apareçam no dropdown

  const handleSelect = (option: any) => {
    // console.log("Selecionado:", option);
    // Coloque aqui o código que deve rodar quando uma opção é selecionada
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(Number(param) || options[0]);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
    handleSelect(option);
    handleChangeItemsPerPage(option);

    createQuery("itemsPerPage", String(option));
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

  const Container = styled.div`
    position: relative;

    .select-value {
      text-decoration: underline;
      text-decoration-color: #9296ac;
    }

    svg {
      rotate: ${isOpen ? "180deg" : "0deg"};
    }
  `;

  return (
    <Container>
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
          {selectedOption}
        </Typography>
        <Chevron />
      </Stack>
      {isOpen && (
        <div
          ref={modalRef}
          style={{
            color: "#010311",
            position: "absolute",
            backgroundColor: "#fff",
            zIndex: 9999,
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
        </div>
      )}
    </Container>
  );
};

export default Select;
