import { requestAppApi } from '../requestApi.js';

interface PerformTokenVerification {
    login: string;
    token: string;
    requestTokenVerificationId: string;
}

export interface PerformTokenVerificationOutput {
    /**
     * Authentication ticket usable several time
     */
    authTicket: string;
}

export const performTokenVerification = (params: PerformTokenVerification) =>
    requestAppApi<PerformTokenVerificationOutput>({
        path: 'authentication/PerformTokenVerification',
        payload: {
            login: params.login,
            token: params.token,
            requestTokenVerificationId: params.requestTokenVerificationId,
        },
    });
