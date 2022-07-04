import React from 'react';
import { InputItem,Label,Input } from './style';

const InputField = ({input}) => {
    return (
        <InputItem>
            <Label htmlFor="name">{input.title}</Label>
            <Input
              name={input.id}
              id={input.id}
              type={input.inputType}
              required
            />
          </InputItem>
    );
};


export default InputField;