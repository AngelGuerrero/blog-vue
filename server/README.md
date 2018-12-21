# Aplicación del servidor

## Dependencias utilizadas

- babel-cli
- babel-preset-env
- babel-preset-stage-3
- nodemon
- body-parser
- sequelize (ORM para bases de datos)
- mysql2
- faker

### Intalación de dependencias
```
npm i
```

### Presets usado en babel
```javascript
{
  "presets": [
    "env",
    "stage-3"
  ]
}
```
# Iniciar la aplicación
Si es la primera vez que se inicia la aplicación quizás sea necesario primero hacer un `npm i` para descargar las dependencias necesarias.

Comando: `npm i`

## Comandos para correr el servidor

##### Comando para linux sin nodemon

Comando: `DEBUG=server:* npm start`

##### Comando para windows sin nodemon

Comando: `DEBUG=server:* & npm start`

##### Comando para cualquier O.S. escuchando cambios en archivos

Comando: `npm run serve`
