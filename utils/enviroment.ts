import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export default publicRuntimeConfig[process.env.NODE_ENV];