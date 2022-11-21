
import React from "react";
import Card from "../../components/card";
import { TextButton } from "../../components/card/style";
import { Container } from "./style";

const Cardpage = () =>{

    const [ back, setBack] = React.useState();
    
    return(
        <Container>
          <Card />
        </Container>
    );
};

export default Cardpage;