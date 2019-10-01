import React, { Component } from 'react';
import { FormStyled } from './styles';

export default class Form extends Component {

  render() {
    return (
      <FormStyled>
        <input type="text" />
        <button>Cadastrar</button>
      </FormStyled>
    )
  }
}