import React from "react";
import { Container } from "./ResumoStyle";
import ItemResumo from "../ItemResumo/ItemResumo";
import { FaArrowAltCircleUp, FaArrowAltCircleDown, FaDollarSign, } from 'react-icons/fa';

const Resumo = ({income, expense, total}) => {
  return (
    <Container>
      <ItemResumo title="Entradas" Icon={FaArrowAltCircleUp} value={income}/>
      <ItemResumo title="Saídas" Icon={FaArrowAltCircleDown} value={expense}/>
      <ItemResumo title="Total" Icon={FaDollarSign} value={total}/>
    </Container>
  );
};

export default Resumo;
