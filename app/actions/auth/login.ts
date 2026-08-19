'use server'
import * as z from "zod";

const loginSchema = z.object({
    email: z.email(),
    password: z.string().min(8).max(255),
    remember: z.literal('true').nullish().transform((v) => v === 'true')
})

type LoginState = {
    message: string
    errors: { email?: string[], password?: string[]} |  null,
    key: string
  }

export const login = async (
    previousState: LoginState,
    formData: FormData
) => {

    const validated = loginSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('login-password'),
        remember: formData.get('remember')
    })
    
    if(!validated.success){

        return {
            message: 'Invalid email or password.',
            errors: z.flattenError(validated.error).fieldErrors,
            key: `login-${Date.now()}`
        }
    }
    
    const { email, password } = validated.data

    return { message: '', errors: null, key: `login-${Date.now()}`}
}