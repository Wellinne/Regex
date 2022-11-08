import React, { useState } from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import { 
  ContainerPage, 
  Input, 
  Button,
  Box,
  BoxInputs,
  Text,
} from './style';
import {
  nameMask,
  cpfMask,
  phoneMask,
} from '../utils/inputMasks';

type User = {
  name?: string | any
  cpf?: string | any
  phone?: string | any
}

export const Regex: React.ElementType = () => {
  const [user, setUser] = useState<User>({} as User);
  const [errorMessages, setErrorMessages] = useState<User>({} as User);

  const checkFields = (): boolean => {
    const {
      name, cpf, phone,
    } = user;

    // eslint-disable-next-line
    const regexCPF = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
    // eslint-disable-next-line
    const regexPhone = /\(\d{2}\)\s\d{4,5}\-\d{4}/;

    const errors: User = {
      cpf: !regexCPF.test(cpf) ? 'Digite um CPF válido' : '',
      name: !name ? 'Digite seu nome' : '',
      phone: !regexPhone.test(phone) ? 'Digite um telefone válido' : '',
    };
    setErrorMessages(errors);

    const failed = Object.values(errors).some((value) => value !== '');
    
    if (failed) {
      return false;
    }

    alert('Sucesso!');
    return true;
  };

  return (
    <ContainerPage>
      <Box>
      <Text>Cadastro</Text>

      <BoxInputs>
          <Input 
            label="Nome"
            variant="standard"
            placeholder='Digite seu nome'
            value={user.name}
            onChange={(e) => {setUser({...user, name: nameMask(e.target.value)})}}
            required
            error={errorMessages.name ? true : false}
          />
          <FormHelperText error id="username-error">
            {errorMessages.name}
          </FormHelperText>
        </BoxInputs>

        <BoxInputs>
          <Input 
            label="CPF"
            variant="standard"
            placeholder='Digite seu nome'
            value={user.cpf}
            onChange={(e) => {setUser({...user, cpf: cpfMask(e.target.value)})}}
            required
            error={errorMessages.cpf ? true : false}
          />
          <FormHelperText error id="username-error">
            {errorMessages.cpf}
          </FormHelperText>
        </BoxInputs>

        <BoxInputs>
          <Input 
            label="Telefone"
            variant="standard"
            placeholder='Digite seu nome'
            value={user.phone}
            onChange={(e) => {setUser({...user, phone: phoneMask(e.target.value)})}}
            required
            error={errorMessages.phone ? true : false}
          />
          <FormHelperText error id="username-error">
            {errorMessages.phone}
          </FormHelperText>
        </BoxInputs>

        <Button
          onClick={() => checkFields()}
        >
          Verificar
        </Button>
      </Box>
    </ContainerPage>
  );
};
