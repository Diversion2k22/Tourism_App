import CONFIG from '@/config';
import AppInformation from '@/types/response/AppInformation';

/**
 * Get application information.
 *
 * @returns {AppInformation}
 */
export const getAppInfo = (): AppInformation => {
    return CONFIG.APP;
};
