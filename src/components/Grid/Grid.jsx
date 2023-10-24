import React from 'react'
import GridItem from "../GridItem/GridItem";
import { Table, Thead, Tbody, Tr, Th } from "./GridStyle";

const Grid = ({ itens, setItens}) => {
    const onDelete = (ID) => {
        const newArray = itens.filter((transaction) => transaction.id !== ID);
        setItens(newArray);
        localStorage.setItem("transactions", JSON.stringify(newArray));
    };  

  return (
    <Table>
        <Thead>
            <Tr>
                <Th width={40}>Descrição</Th>
                <Th width={40}>Valor</Th>
                <Th width={40} alignCenter>Tipo</Th>
                <Th width={40}></Th>
            </Tr>
        </Thead>
        <Tbody>
            {itens?.map((item, index) => (
            <GridItem key={index} item={item} onDelete={onDelete} />
            ))}
        </Tbody>
    </Table>
  )
}

export default Grid