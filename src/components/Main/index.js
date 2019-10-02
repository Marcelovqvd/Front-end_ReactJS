import React from 'react';
import { Container, Content, Banner, Sidebar, Logo } from './styles'

import Form from '../Form';


export default function Main() {
  return (
    <div>
      <Form />
      <Logo />
      <Sidebar />
      <Container>
        <Content>
          <Banner>
            Pesquisa de veículos do <span>TradersClub</span>
          </Banner>
        </Content>
      </Container>
    </div>
  )
}