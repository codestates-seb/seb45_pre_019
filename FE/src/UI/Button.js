import { styled } from "styled-components";

const Button = (props) => {
  return <ButtonContainer>{props.children}</ButtonContainer>;
};

const ButtonContainer = styled.button`
  border: none;
  padding: 10px;
  width: 100%;
  background-color: var(--color-sub-blue);
  color: var(--color-white);

  &:hover {
    background-color: #0074cc;
  }
`;

export default Button;
