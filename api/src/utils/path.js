// import URL from 'url'

const path = {
    get: (str) => {
        const {host, pathname = '', search = '', hash = ''} = new URL(str);
        return host + pathname + search + hash
    }
};

export default path