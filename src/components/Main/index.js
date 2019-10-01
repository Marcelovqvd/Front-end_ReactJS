import React from 'react';
import { Container, Content, Title, Sidebar, Navbar, Banner } from './styles'


export default function Main() {
  return (
    <div>
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