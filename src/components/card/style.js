import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`

    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: # f8f9fa;
`;

export const ButtonColor = styled.TouchableOpacity`
    width: 50px;
    margin: 30px;
    height: 50px;
    background-color: ${  props => props.backcolor};
    padding: 5px;
    border-radius: 10px;
   
`;

export const TextButton = styled.Text`
    color: black;
`;

export const CardView = styled.View`

    width: 300px;
    height: 200px;
    padding: 10px;

`;

export const ViewChip = styled.View`

    flex: 1;
    flex-direction: row;

`;

export const LogoMaster = styled.Image`

    width: 70px;
    height: 42px;

`;

export const LogoChip = styled.Image`

    margin-left: 10px;
    width: 55px;
    height: 32px;
    margin-bottom: 20px;

`;

export const WireChip = styled.Image`
     width: 15px;
    height: 20px;
    margin-top: 8px;
    margin-left: 4px;
`;

export const ViewLogoName = styled.View`
     flex: 1;
    flex-direction: row;
`;
export const LogoNu = styled.Image`

    margin-left: 10px;
    width: 60px;
    height: 50px;
    margin-bottom: 20px;

`;
export const ViewMaster = styled.View`
   flex: 1;
   flex-direction: row-reverse;
`;


export const ViewButtons = styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
    background-color: '#808080';
`;

export const InputName = styled.TextInput`

    background: white;

    margin-top: 40px;
    margin-bottom: 10px;
    width: 300px;
    height: 40px;
    border-radius: 8px;
    border-width: 1px;
    font-size: 15px;
    padding: 4px;
`;

export const TextName = styled.Text`
    color: white;
    font-size: 15px;
    margin-top: 15px;
    margin-left: 5px;
    text-transform: uppercase;
`;