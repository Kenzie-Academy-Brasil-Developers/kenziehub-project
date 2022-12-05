import React from 'react';

import { TrashButton } from '../../styles/Buttons';
import { Card } from './styles';

export const TechCard = ({ name, status, techId, onClick }) => {
    return (
        <Card id={techId}>
            <p>{name}</p>
            <div>
                <span>{status}</span>
                <TrashButton id={techId} onClick={onClick} />
            </div>
        </Card>
    );
};
