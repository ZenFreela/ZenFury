import React from 'react';

import { ButtonContainer } from './styles';

const Button = (props) => (
    <ButtonContainer color={props.color} hoverColor={props.hoverColor}>
        <a href={props.href}>{props.text}</a>
    </ButtonContainer>
);

export default Button;
