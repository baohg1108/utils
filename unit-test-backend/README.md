Back-end template for large-scale, modular Express API:

- TypeScript
- MongoDB **native driver** (no Mongoose)
- ESLint + Prettier
- Jest
- Path alias `~/*`

## Quickstart

```bash
cp .env.example .env
# Edit your ENV variables

yarn install
yarn dev
```

Endpoints example:

- `GET /health`
- `GET /api/users/list`
- `POST /api/users/register`

\
