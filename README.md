# C03 · DataBridge: TypeORM con NestJS

Diez proyectos independientes para practicar PostgreSQL, TypeORM, NestJS y
React Native con Expo. Cada carpeta contiene su propio `backend/`,
`frontend/` y `README.md`.

| Ejercicio | Aplicación | API principal |
| --- | --- | --- |
| 01 | Game Vault | `GET /videojuegos` |
| 02 | CineBox | `GET /peliculas` |
| 03 | Pet Profile | `GET /mascotas/:id` |
| 04 | Food Spots | `POST /restaurantes` |
| 05 | Travel Book | `PATCH /viajes/:id` |
| 06 | My Library | `DELETE /libros/:id` |
| 07 | Sneaker Vault | CRUD `/sneakers` |
| 08 | My Playlists | `GET /playlists/:id` |
| 09 | Event Radar | `GET /eventos?ciudad=Zaragoza&categoria=Tecnologia` |
| 10 | Wander | CRUD `/destinos` |

## Requisitos y ejecución

Se necesita Node.js, PostgreSQL y Expo Go o un emulador. Cada ejercicio usa
una base de datos distinta (`databridge_e01` a `databridge_e10`).

```bash
cd EJERCICIO-01/backend
npm install
npm run start:dev
```

En otra terminal:

```bash
cd EJERCICIO-01/frontend
npm install
npm start
```

Repite el proceso desde la carpeta del ejercicio que quieras ejecutar. Los
README individuales documentan sus endpoints, seeds y modificaciones.
Configura las credenciales locales a partir de `backend/.env.example`; los
`.env` reales están ignorados por Git. No se incluyen credenciales reales ni
`node_modules`.
