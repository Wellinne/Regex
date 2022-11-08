import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const ContainerPage = styled.div`
    width: 100%;
    height: 100vh;
    
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #F8F7FF;
`;

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    border: 2px solid #B8B8FF;
    border-radius: 6px;
    padding: 50px;
`;

export const BoxInputs = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 50px;
`;

export const Text = styled.p`
    color: #9381FF;
    margin-bottom: 20px;
    font-size: 20px;
`;

export const Input = styled(TextField)`
    font-size: 20px;
    border-radius: 3px;
    border: 2px solid #C1D3FE;
    padding: 5px;
    height: 50px;
    border-radius: 4px;
    margin-top: 25px;
    color: #7209B7;

    :focus{
        outline: none;
        border-color: #ABC4FF;
    }
`;

export const Button = styled.button`
    border: none;
    width: 150px;
    height: 50px;
    font-size: 16px;
    color: #EDF2FB;
    border-radius: 4px;

    background-color: #9381FF;

    :hover{
        background-color: #B8B8FF;
    }
`;