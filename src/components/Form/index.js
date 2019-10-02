import React, { Component } from 'react';
import { FormStyled, List } from './styles';
import { Container, Content, } from '../Main/styles';
import api from '../../services/api';

export default class Form extends Component {

  state = {
    carList: []
  };

  componentDidMount() { }

  componentDidUpdate() { }

  handleInputChange = async e => {
    const response = await api.get(`/cars?search=${e.target.value}`);
    this.setState({ carList: response });
  };



  render() {
    const { carList } = this.state;
    return (
      <div>
        <FormStyled onSubmit={this.handlesubmit}>
          <input type="text"
            placeholder="Pesquise por um veículo"
            value={newCar}
            onChange={this.handleInputChange}
          />
          <button type="submit">Cadastrar</button>
        </FormStyled>

        <List>
          {carList.map(car =>
            <li key={car.id}>
              <p>{car.title}</p>
              <span>{car.title, car.brand, car.km}</span>
              <p>{car.price}</p>
              <span>{car.year}</span>
            </li>
          )}
        </List>
      </div>
    );
  }
}