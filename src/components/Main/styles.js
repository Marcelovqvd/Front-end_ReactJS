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

const logoTC = require('../../assets/img/logo-tc.png');

export const Sidebar = styled.div`
  padding: 50px;
  width: 250px;
  height: 100vh;
  background-color: #0e1823;
  text-align: center;
 h1 {
    margin: 25px 0 0;
    display: inline-block;
    background: url(${logoTC}) no-repeat;
    width: 80px;
    height: 80px;
    text-indent: -999em;
  }
`

export const Navbar = styled.form`
  padding: 20px 50px;
  background-color: #1a2533;
  display: flex;

  input {
    background-color: transparent;
    border: solid 1.5px #fff;
    border-radius: 5px;
    margin-right: 20px;
    height: 40px;
    color: #fff;
    padding: 0 10px;
    font-size: 16px;
    flex: 1;

    ::placeholder {
      color: #4d5b6d;
    }
   
  }
  button {
    border: none;
    border-radius: 5px;
    background-color: #fff;
    font-size: 20px;
    padding: 0 20px;
    cursor: pointer;
  }
`

export const Banner = styled.h1`
  font-family: 'Lobster Two', cursive;
  font-size: 100px;
  font-weight: normal;
  text-align: right;
  margin: 60px 0 60px;
  cursor: default;

  span {
    display: inline;
    padding: 0 30px 0 20px;
    background-color: rgba(44, 70, 103, 0.6);
  }
`