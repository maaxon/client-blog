import { z } from "zod";


export const schema = z.object({
  name: z.string().min(3, "3-20 characters").max(20, "3-20 characters"),
  email: z.string().email(),
  message: z.string().min(3, "min message length is 3 symbols")
    .max(300, "max message length is 300 symbols"),
});