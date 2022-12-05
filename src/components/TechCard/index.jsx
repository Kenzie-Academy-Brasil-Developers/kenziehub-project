import React from 'react';

import { TrashButton } from '../../styles/Buttons';
import { Card } from './styles';

export const TechCard = ({ name, status, techId, onClick, loading }) => {
    return (
        <Card id={techId}>
            <p>{name}</p>
            <div>
                <span>{status}</span>
                <TrashButton id={techId} onClick={onClick} disabled={loading} />
            </div>
        </Card>
    );
};
