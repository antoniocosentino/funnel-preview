import { z } from 'zod';
import { FunnelSchema } from '../schemas/schema';

export type Funnel = z.infer<typeof FunnelSchema>;

export type TAppContext = {
    isFileLoaded: boolean;
    loadedFunnel: Funnel | undefined;
    setIsFileLoaded: (status: boolean) => void;
    setLoadedFunnel: (funnelData: Funnel) => void;
}
