import * as dotenv from 'dotenv';
const result = dotenv.config().parsed;
export let environment: EnvironmentConfig;

if (!!result && !('error' in result)) {
    environment = {
        oneSignalAppId: result['ONESIGNAL_APP_ID'],
        production: false,
        sanity: {
            projectId: result['SANITY_PROJECT_ID'],
            dataset: result['SANITY_DATASET'],
        },
    };
} else {
    environment = {
        oneSignalAppId: process.env['ONESIGNAL_APP_ID'],
        production: true,
        sanity: {
            projectId: process.env['SANITY_PROJECT_ID'] as string,
            dataset: process.env['SANITY_DATASET'] as string,
        },
    };
}

export interface EnvironmentConfig {
    oneSignalAppId?: string;
    production: boolean;
    sanity: {
        projectId: string;
        dataset: string;
    };
}