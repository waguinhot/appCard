import React  from "react";
import { Container, Input, TextSubmit, Title, ButtonSubmit, SubTitle } from "./style";


const Login = () =>{
    return(
        <Container>
            <Title> Login </Title>
            <SubTitle > How new world!</SubTitle>
            <Input placeholder="Email" />
            <Input placeholder="Password" secureTextEntry/>
            <ButtonSubmit> 
                    <TextSubmit> Entrar </TextSubmit>
            </ButtonSubmit>
        </Container>
    );
}

export default Login;