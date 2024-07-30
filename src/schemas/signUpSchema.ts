import { z } from "zod";

export const usernameValidation =z
    .string()
    .min(2,"Username should be atleast 2 characters")
    .max(20,"Should not have more than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/,"Username should contain special characters")

export const signUpSchema= z.object({
    username:usernameValidation,
    email:z.string().email({message
        :"Invalid email address"
    }),
    password:z.string().min(6,{message:"Password should be atleast 6 characters"})
})