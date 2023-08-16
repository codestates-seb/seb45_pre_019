import { styled } from "styled-components";

const Card = (props) => {
  return <Container>{props.children}</Container>;
};

const Container = styled.div`
  width: 100%;
  max-width: 288px;
  margin: 24px 0;
  padding: 24px;
  border-radius: 6px;
  background-color: var(--color-white);
  box-shadow:
    0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05),
    0 1px 4px hsla(0, 0%, 0%, 0.1);
`;

export default Card;
