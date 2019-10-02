import React from 'react';
import { Container, Content, Sidebar, Navbar, Banner } from './styles'

import Form from '../Form';


export default function Main() {
  return (
    <div>
      <Form />
      <Sidebar />
      <Container>
        <Navbar />
        <Content>
          <Banner>
            Pesquisa de veículos do <span>TradersClub</span>
          </Banner>
        </Content>
      </Container>
    </div>
  )
}