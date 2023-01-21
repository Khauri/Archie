import * as z from 'zod';
import {UserSchema} from './User';

export const ThreadSchema = z.object({
    threadId: z.string(),
    threadSrc: z.string(),
    parentThread: z.string().nullable().default(null),
    rootThread: z.string().nullable(),
    replies: z.array(z.string()).default([]),
    threadOrigin: z.string(),
    content: z.string(),
    createdAt: z.string(),
    lastUpdatedAt: z.string(),
    user: UserSchema,
});

export type Thread = z.infer<typeof ThreadSchema>;
