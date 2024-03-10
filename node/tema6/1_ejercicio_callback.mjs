import { writeFile } from 'node:fs';

const contenido = 'Hola, Maria';

const nombreArchivo = 'archivo1.txt';

writeFile(nombreArchivo, contenido, 'utf-8', (error) => {
    if (error) {
        console.error('Error al escribir el archivo:', error);
    } else {
        console.log(`Archivo '${nombreArchivo}' creado con éxito. El contenido es '${contenido}'`);
    }
});
