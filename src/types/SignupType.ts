import { SignupCredentials } from "../interfaces/SignupCredentials";

export type SignupType = {
    error: string | null;
    isPending: boolean;
    signup: (credentials: SignupCredentials) => Promise<void>;
};