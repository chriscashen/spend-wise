import { useState } from "react"
import { projectAuth } from "../firebase/config"
import { SignupCredentials } from "../interfaces/SignupCredentials"
import { SignupType } from "../types/SignupType"

export function useSignup(): SignupType  {
    const [error, setError] = useState<string | null>(null)
    const [isPending, setIsPending] = useState<boolean>(false)

    const signup = async (credentials: SignupCredentials): Promise<void> => {
        setError(null)
        setIsPending(true)

        try {
            //signup
            const res = await projectAuth.createUserWithEmailAndPassword(
                credentials.username,
                credentials.password
            );
            console.log(res.user)

            if (!res) {
                throw new Error('could not complete signup')
            }

            setIsPending(false);
            setError(null)

        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message)
                setIsPending(false)
                return
            }
        }
    }

    return { error, isPending, signup }
}