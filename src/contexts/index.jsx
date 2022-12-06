import React from 'react';

import { TechProvider } from './techContext';
import { UserProvider } from './userContext';

export const Providers = ({ children }) => {
    return (
        <TechProvider>
            <UserProvider>
                {children}
            </UserProvider>
        </TechProvider>
    );
};
