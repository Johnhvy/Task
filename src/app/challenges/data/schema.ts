import { z } from "zod"
export const taskSchema = z.object({
    id: z.string(),
    title: z.string(),
    date: z.date(),
    label: z.string(),
})

export type Task = z.infer<typeof taskSchema>