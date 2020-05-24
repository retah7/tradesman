const devMode = 'LOCALHOST';

export const DATA_URL_BASE = '';

const configs = {
  LOCALHOST: {
    MOST_ACTIVE_CALLS : DATA_URL_BASE + '/live_market/dynaContent/live_analysis/most_active/CallsALLVolume.json',
  },
  PRODUCTION: {
    MOST_ACTIVE_CALLS : DATA_URL_BASE + '/live_market/dynaContent/live_analysis/most_active/CallsALLVolume.json',
  }
};

export const SCHEDULAR_TIMEINTERVAL = {
  MOST_ACTIVE_CALLS: 18000
};

export const config = configs[devMode];


