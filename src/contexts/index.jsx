import React from 'react';

import { UserProvider } from './userContext';

export const Providers = ({ children }) => {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    );
};
