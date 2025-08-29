const https = require('https');
const url = "https://reclutamiento-dev-procontacto-default-rtdb.firebaseio.com/reclutier.json";

https.get(url, (res) => {
    let data = "";

    res.on("data", (chunk) => {
        data += chunk;
    }   );

    res.on("end", () => {
        try{
            const json = JSON.parse(data);
            console.log("Registros obtenidos:");
            console.log(JSON.stringify(json, null, 2));
        } catch(error){
            console.error("Error al parsear JSON:", error);
        }
    } );
} ).on("error", (err) => {
    console.error("Error en la solicitud HTTPS:", err);
});