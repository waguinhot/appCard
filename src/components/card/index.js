import React from "react";
import { Container, ButtonColor, ViewButtons, CardView, LogoMaster, ViewMaster, LogoChip, LogoNu, ViewChip, WireChip, ViewLogoName, TextName, InputName } from "./style";

import { Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Mastercard from "../../assets/mastercard.png";
import Chip from "../../assets/Chip.png";
import Logo from '../../assets/traced.png';
import Wire from "../../assets/Wireless.png";


const Card = () => {


    const [corprimary, setCorprimary] = React.useState('#612f74');
    const [corsecundary, setCorsecundary] = React.useState('#790BA7');
    const [name, setName] = React.useState('Desconhecido');

    function rose() {
        setCorprimary('#7d11ab');
        setCorsecundary('#a654d2');

    }


    function yellow() {
        setCorprimary('#d1b001');
        setCorsecundary('#fad305');
    }


    function red() {
        setCorprimary('#A80C0C');
        setCorsecundary('#D55959');
    }


    function blue() {
        setCorprimary('#0C4AA8');
        setCorsecundary('#5992D5');
    }

    function green() {
        setCorprimary('#14ac59');
        setCorsecundary('#4bcc80');
    }

    function black() {
        setCorprimary('#3f3f3f');
        setCorsecundary('#bebbb8');
    }


    function newName(text) {
        if (text.length >= 20) {
            return;
        }

        setName(text)
    }
    return (
        <Container>
            <LinearGradient
                colors={[corprimary, corsecundary]}
                style={{ borderRadius: 10 }}
                start={{ y: 0.1, x: 1 }}
            >
                <CardView>


                    <ViewMaster>
                        <LogoMaster source={Mastercard} style={{ resizeMode: 'stretch' }} />
                    </ViewMaster>

                    <ViewChip>
                        <LogoChip source={Chip} style={{ resizeMode: 'stretch' }} />
                        <WireChip source={Wire} style={{ resizeMode: 'stretch' }} />
                    </ViewChip>

                    <ViewLogoName>
                        <LogoNu source={Logo} style={{ resizeMode: 'stretch' }} />
                        <TextName> {name} </TextName>
                    </ViewLogoName>

                </CardView>
            </LinearGradient>
            <InputName onChangeText={text => newName(text)}  placeholder="Name from user!!!"/>
            <ViewButtons >
                <ButtonColor backcolor="#790BA7" onPress={rose} />

                <ButtonColor backcolor="#A80C0C" onPress={red} />

                <ButtonColor backcolor="#d1b001" onPress={yellow} />

                <ButtonColor backcolor="#0C4AA8" onPress={blue} />

                <ButtonColor backcolor="#0DA854" onPress={green} />

                <ButtonColor backcolor="#333" onPress={black} />
            </ViewButtons>



        </Container>
    );
}

export default Card;