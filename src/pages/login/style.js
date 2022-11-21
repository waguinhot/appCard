import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`

    flex: 1;
    align-items: center;
    justify-content: center; 
    background-color: black;

`;


export const Title = styled.Text`

    font-size: 50px;
    font-weight: bold;
    color: white;
`;
export const SubTitle = styled.Text`
    font-size: 15px;
    color: white;
    margin-bottom: 10px;
`;
export const Input = styled.TextInput`
    width: 80%;
    margin: 10px 0px;
    height: 50px;
    font-size: 15px;
    padding: 5px;
    background-color: white;
    border-radius: 5px;
`;

export const TextSubmit   = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 20px;
`;
export const ButtonSubmit = styled.TouchableOpacity`
    width: 80%;
    margin-top: 10px;
    height: 50px;
    background-color: #4b0082;
    padding: 5px;
    align-items: center;
    justify-content: center;
`;

