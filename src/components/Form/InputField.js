import React from 'react';
import { InputItem,Label,Input } from './style';

const InputField = ({title,name,inputType,onChange}) => {
    return (
        <InputItem>
            <Label htmlFor={name}>{title}</Label>
            <Input
              name={name}
              id={name}
              type={inputType}
              required
              onChange={onChange}
            />
          </InputItem>
    );
};


export default InputField;