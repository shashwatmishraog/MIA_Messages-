import {z}from "zod"

export const verifySchema=z.object({
    code:z.string().length(6,"verification should be 6 digits")
})