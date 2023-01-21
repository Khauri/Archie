import * as z from 'zod';

export const UserSchema = z.object({
    displayName: z.string(),
    handle: z.string(),
    userId: z.string(),
});
