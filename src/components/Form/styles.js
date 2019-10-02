import styled from 'styled-components'

export const FormStyled = styled.form`
  padding: 20px 50px;
  background-color: #1a2533;
  display: flex;
  input {    
    max-width: 80vw;
    background-color: transparent;
    border: solid 1px #fff;
    border-radius: 5px;
    margin: 0 20px 0 260px;
    height: 40px;
    color: #fff;
    padding: 0 10px;
    font-size: 16px;
    flex: 1;
  }
  button {
    width: 15vw;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: #fff;
    font-size: 20px;
    padding: 0 20px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 50vw;
  li {
    border: 1px solid white;
  }
`;

