import {
    createContext, useContext, useState, ReactNode,
} from 'react';
import { TAppContext, Funnel } from '../types/types';

const AppContext = createContext<TAppContext | undefined>(undefined);

export function AppContextProvider({ children }: { children: ReactNode }) {
    const [isFileLoaded, setIsFileLoaded] = useState(false);
    const [loadedFunnel, setLoadedFunnel] = useState<Funnel | undefined>();
    const [activePage, setActivePage] = useState(1);

    // TODO: maybe there's no need to have the boolean AND the data object
    // the data object could be the only source of truth
    // consider revisiting this part

    return (
        <AppContext.Provider
            value={
                {
                    isFileLoaded,
                    loadedFunnel,
                    activePage,
                    setIsFileLoaded,
                    setLoadedFunnel,
                    setActivePage,
                }
            }
        >
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within a AppContextProvider');
    }
    return context;
}
