import styled from "styled-components";

export const ContainerPagination = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px 10px;
  gap: 5px;
`;

export const ButtonPagination = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid #1f2445;
  border-radius: 12px;
  background-color: ${(props) => (props.page ? "#1F2445" : "transparent")};
  color: ${(props) => (props.page ? "#fff" : "#1F2445")};
  width: 30px;
  height: 30px;
`;
