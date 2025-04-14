const systemInfo = require('./osModule.js');
const networkData = require('./networkModule.js');

console.log("Información del Sistema Operativo:");
for (const [key, value] of Object.entries(systemInfo)) {
    console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`);
}

console.log("\nInformación de Red:");
for (const data of networkData) {
    console.log(`Interfaz: ${data.interface}, Familia: ${data.family}, Dirección: ${data.address}, Interna: ${data.internal}`);
}
