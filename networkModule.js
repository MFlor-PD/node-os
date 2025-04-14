const os = require('os');
const networkInterfaces = os.networkInterfaces(); 
const interfaces = Object.keys(networkInterfaces);
const networkData = [];

for (const interface of interfaces) {
    const data = networkInterfaces[interface];
    for (const item of data) {
        const { family, address, internal } = item;
        networkData.push({ interface, family, address, internal });
    }
}

module.exports = networkData;