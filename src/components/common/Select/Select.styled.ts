import styled from "styled-components";
import Stack from "../Stack";

export const Container = styled.div<{ isOpenOptions: boolean }>`
  position: relative;

  .select-value {
    text-decoration: underline;
    text-decoration-color: #9296ac;
  }

  svg {
    rotate: ${({ isOpenOptions }) => (isOpenOptions ? "180deg" : "0deg")};
  }
`;

export const Option = styled(Stack)`
  border-bottom: 1px solid #9296ac;

  * {
    cursor: pointer;
  }
`;

export const Popup = styled.div`
  z-index: 9999;
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;
  background-color: #fff;
`;
