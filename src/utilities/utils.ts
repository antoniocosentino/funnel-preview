import { ALLOWED_DOMAINS } from '../../next.config';
import { FunnelSchema } from '../schemas/schema';

// We use this method to verify if images are hosted on a domain that
// is whitelisted in the Next.js config. Based on that we decide to
// use the <Image> component or a basic <img> tag
export const isAllowedDomain = (url: string): boolean => {
    try {
        const parsedUrl = new URL(url);
        return ALLOWED_DOMAINS.includes(parsedUrl.hostname);
    } catch {
        return false;
    }
};

export const parseFunnelJson = (jsonString: string) => {
    const json = JSON.parse(jsonString);
    const parsedData = FunnelSchema.parse(json);

    return parsedData;
};
