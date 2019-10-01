import React from 'react';
import { Container, Content, Title, Sidebar, Navbar, Banner } from './styles'

import Form from '../Form';


export default function Main() {
  return (
    <div>
      <Form />
      <Sidebar />
      <Container>
        <Navbar />
        <Content>
          <Title>
            <Banner>
              Pesquisa de veículos do <span>TradersClub</span>
            </Banner>
          </Title>
        </Content>
      </Container>
    </div>
  )
}