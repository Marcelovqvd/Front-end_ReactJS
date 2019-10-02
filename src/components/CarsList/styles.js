import styled from 'styled-components'

const bgImage = require('../../assets/img/car-wireframe.png')

export const Container = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: white;
  background-image: url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
`

export const Content = styled.div`
  padding: 160px 0;
  background-color: rgba(1, 19, 41, 0.88);
  overflow-y: auto;
  p {
    margin: 0;
  }
`

export const Navbar = styled.form`
  padding: 20px 50px;
  background-color: #1a2533;
  display: flex;
`;

