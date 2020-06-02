import { environment } from 'src/environments/environment';
import * as LOCAL_CONFIG from './configs/config.local';
import * as PROD_CONFIG from './configs/config.prod';
export * from './configs/config.common';

const CONFIGS = {
  LOCAL_CONFIG,
  PROD_CONFIG
};

const mode = environment.environmentName + '_CONFIG';

export const config = CONFIGS[mode].config;

