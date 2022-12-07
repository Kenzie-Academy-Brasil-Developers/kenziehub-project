import React from 'react';
import { WhisperSpinner } from "react-spinners-kit";

import { WaitContainer } from './styles';

export const WaitScreen = () => {
    return (
        <WaitContainer>
            <WhisperSpinner size={65} frontColor='#212529' backColor='#FF577F' />
        </WaitContainer>
    );
};
