import styled from 'styled-components'

const bgImage = require('../../assets/img/car-wireframe.png')

export const Container = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  z-index: -1;
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: white;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  padding: 160px 0;
  background-color: rgba(1, 19, 41, 0.88);
`;

const logoTC = require('../../assets/img/logo-tc.png');

export const Sidebar = styled.div`
  position: absolute;
  top: 0px;
  padding: 50px;
  width: 250px;
  height: 100vh;
  background-color: #0e1823;
  text-align: center;
  `;

export const Logo = styled.div` 
    position: absolute;
    top: 30px;
    left: 85px;
    margin: 25px 0 0;
    display: inline-block;
    background: url(${logoTC}) no-repeat;
    width: 80px;
    height: 80px;
    text-indent: -999em;
    z-index: 2;
`;

export const Banner = styled.h1`
  font-family: 'Lobster Two', cursive;
  font-size: 100px;
  font-weight: normal;
  text-align: right;
  margin: 80px 50px 0 0;
  span {
    display: inline;
    padding: 0 30px 0 20px;
    background-color: rgba(44, 70, 103, 0.6);
  }
`