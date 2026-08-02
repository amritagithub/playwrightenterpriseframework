import qaConfig from '../config/qa.json' with { type: 'json' };
import uatConfig from '../config/uat.json' with { type: 'json' };
//import prodConfig from '../config/prod.json' with { type: 'json' };

const env = (process.env.ENV || 'qa').toLowerCase();

const environments = {
    qa: qaConfig,
    uat: uatConfig,
    //prod: prodConfig
};

const config = environments[env] || qaConfig;

if (!environments[env]) {
    console.warn(`Environment '${env}' not found. Using QA.`);
}

export default config;