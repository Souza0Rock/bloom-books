import styled from "styled-components";

export const ButtonPage = styled.button<{ selected?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid #1f2445;
  border-radius: 12px;
  background-color: ${({ selected = false }) =>
    selected ? "#1F2445" : "transparent"};
  color: ${({ selected = false }) => (selected ? "#fff" : "#1F2445")};
  width: 30px;
  height: 30px;

  &:disabled {
    opacity: 0.6;
  }
`;
