import styled from "styled-components";
import { MenuProps } from "./interface";

export const CartContainer = styled.div<MenuProps>`
  position: fixed;
  height: 100vh;
  width: 20%;
  right: 0;
  margin-top: 3.45rem;
  background-color: #3761A8;
  display: flex;
  justify-content: flex-start;
  visibility: ${({show}:MenuProps ) => show ? "visible" : "hidden"};
  opacity: ${({show}:MenuProps) => (show ? "1" : "0")};
  transition: all 0.3s ease;

  p {
    color: #222222;
  }
`;