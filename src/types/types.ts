import { z } from 'zod';
import { FunnelSchema } from '../schemas/schema';

export type Funnel = z.infer<typeof FunnelSchema>;
