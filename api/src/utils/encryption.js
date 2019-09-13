import crypto from 'crypto-js'

const encryption = {
    encode: (str) => Buffer.from(str).toString('base64'),
    decode: (str) =>Buffer.from(str,'base64').toString('ascii')
};

export default encryption