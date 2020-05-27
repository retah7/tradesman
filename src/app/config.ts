const devMode = 'LOCALHOST';

export const DATA_URL_BASE = '';

const configs = {
  LOCALHOST: {
    MOST_ACTIVE_CALLS : DATA_URL_BASE + '/live_market/dynaContent/live_analysis/most_active/CallsALLVolume.json',
    MOST_ACTIVE_PUTS : DATA_URL_BASE + '/live_market/dynaContent/live_analysis/most_active/PutsALLVolume.json',
  },
  PRODUCTION: {
    MOST_ACTIVE_CALLS : DATA_URL_BASE + '/live_market/dynaContent/live_analysis/most_active/CallsALLVolume.json',
    MOST_ACTIVE_PUTS : DATA_URL_BASE + '/live_market/dynaContent/live_analysis/most_active/PutsALLVolume.json',
  }
};

export const SCHEDULAR_TIMEINTERVAL = {
  STANDARD: 18000
};

export const config = configs[devMode];


