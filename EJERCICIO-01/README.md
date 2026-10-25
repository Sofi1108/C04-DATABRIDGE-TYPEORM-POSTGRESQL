# EJERCICIO-01 · Game Vault

Proyecto independiente con NestJS, TypeORM, PostgreSQL y Expo.

## Qué se practica

`GET /videojuegos` consulta los datos mediante un Repository de TypeORM. La
entidad incluye `genero`; el campo se guarda en PostgreSQL, se devuelve en el
JSON y se muestra en cada tarjeta del frontend junto a la plataforma y la
puntuación.

## Ejecutar

1. Crea la base de datos `databridge_e01`.
2. Copia `backend/.env.example` como `backend/.env` y completa tus valores
   locales.
3. En `backend/`, ejecuta `npm install` y `npm run start:dev`.
4. Ajusta la IP de `API_URL` en `frontend/App.tsx` y, en `frontend/`, ejecuta
   `npm install` y `npm start`.

La aplicación inserta ejemplos solo cuando la tabla está vacía. No se incluyen
credenciales reales ni `node_modules`.
