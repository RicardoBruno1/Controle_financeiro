import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 50px;
    text-align: center;
    background: #004680;
    position: fixed;
    bottom: 0;
    width: 100%;
`;

const FooterH1 = styled.h1`
    font-size: 18px;
    text-align: center;
    
`;

const Title = styled.div`
    padding-top: 10px;
    color: #fff;
`;

const Footer = () => {
    return (
        <Container>
            <FooterH1>
                <Title>Ricardo Bruno Dev</Title>
            </FooterH1>
        </Container>
    );
};

export default Footer;