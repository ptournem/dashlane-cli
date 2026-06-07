import { requestAppApi } from '../requestApi.js';

type PerformTokenVerification = {
    login: string;
    token: string;
} & ({ requestTokenVerificationId: string } | { deviceAccessKey: string });

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
            ...('requestTokenVerificationId' in params
                ? { requestTokenVerificationId: params.requestTokenVerificationId }
                : {}),
            ...('deviceAccessKey' in params ? { deviceAccessKey: params.deviceAccessKey } : {}),
        },
    });
