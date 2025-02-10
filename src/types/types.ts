import { z } from 'zod';
import { FunnelSchema, PageSchema } from '../schemas/schema';

export type Funnel = z.infer<typeof FunnelSchema>;

export type FunnelPage = z.infer<typeof PageSchema>;

export type TAppContext = {
    isFileLoaded: boolean;
    loadedFunnel: Funnel | undefined;
    activePage: number;
    setIsFileLoaded: (status: boolean) => void;
    setLoadedFunnel: (funnelData: Funnel) => void;
    setActivePage: (page: number) => void;
}
