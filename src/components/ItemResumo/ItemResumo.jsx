import React from 'react'
import { Container, Header, HeaderTitle, Total } from './ItemResumoStyle'

const ItemResumo = ({ title, Icon, value }) => {
  return (
    <Container>
        <Header>
            <HeaderTitle>{title}</HeaderTitle>
            <Icon />
        </Header>
        <Total>{value}</Total>
    </Container>
  )
}

export default ItemResumo