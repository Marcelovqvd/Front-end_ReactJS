import styled from 'styled-components'

export const FormStyled = styled.form`
  display: flex;
  align-items: center;
  height: 100px;
  background: #000;
  input {
    width: 35vw;
    height: 40px;
    margin: 0 50px 0 450px;
  }

  button {
    width: 15vw;
    height: 40px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 100vh;
  li {
    border: 1px solid white;
  }
`;

