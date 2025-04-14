const os = require('os');
const osData = {
    nombre: os.hostname(),
    tipo: os.type(),
    version: os.version(),
    arquitectura: os.arch(),
    cpus: os.cpus().length,
    memoriaTotal: (os.totalmem() / 1024 / 1024).toFixed(2) + ' MB',
    memoriaLibre: (os.freemem() / 1024 / 1024).toFixed(2) + ' MB'
};
module.exports = osData;