import { z } from 'zod';
import {
    ButtonBlockSchema,
    FunnelSchema,
    ImageBlockSchema,
    ListBlockSchema,
    PageSchema,
    TextBlockSchema,
} from '../schemas/schema';

export type Funnel = z.infer<typeof FunnelSchema>;

export type FunnelPage = z.infer<typeof PageSchema>;

export type TTextBlock = z.infer<typeof TextBlockSchema>;
export type TImageBlock = z.infer<typeof ImageBlockSchema>;
export type TListBlock = z.infer<typeof ListBlockSchema>;
export type TButtonBlock = z.infer<typeof ButtonBlockSchema>;

export type TAppContext = {
    isFileLoaded: boolean;
    loadedFunnel: Funnel | undefined;
    activePage: number;
    setIsFileLoaded: (status: boolean) => void;
    setLoadedFunnel: (funnelData: Funnel) => void;
    setActivePage: (page: number) => void;
}
