### Henrique Vieira Lima

---

## estrutura do projeto

```
finalSesmtre/
├── backend/                  # api rest (express + sequelize + jwt)
│   ├── package.json
│   └── server.js             # servidor, modelos, rotas e seed
├── my-potions/               # frontend (react + vite + tailwind css)
│   ├── package.json
│   ├── index.html
│   ├── vite.config.ts
│   └── src/
│       ├── main.tsx
│       ├── App.tsx
│       ├── index.css          # tailwind + tema customizado
│       ├── components/
│       │   ├── Hero.tsx
│       │   ├── History.tsx
│       │   ├── ProductGrid.tsx
│       │   ├── ProductCard.tsx
│       │   ├── Footer.tsx
│       │   ├── LoginForm.tsx
│       │   ├── AdminDashboard.tsx
│       │   ├── PotionForm.tsx
│       │   └── PotionTable.tsx
│       └── pages/
│           ├── StorePage.tsx
│           └── AdminPage.tsx
└── README.md
```

---

## Como rodar o projeto

### 1. instalar dependencias

```bash
# backend
cd backend
npm install

# frontend
cd ../my-potions
npm install
```

### 2. rodar backend e frontend

abra **dois terminais**:

**terminal 1 — backend (porta 3001):**
```bash
cd backend
npm start
```

**terminal 2 — frontend (porta 5173):**
```bash
cd my-potions
npm run dev
```


### 3. acessar a aplicacao

- **loja (publica, obs: A porta pode variar):** http://localhost:5173
- **painel admin:** clique em "area do administrador" no hero

---

## credenciais de administrador

| campo    | valor            |
|----------|------------------|
| usuario  | `admin`          |
| senha    | `annabelle1867`  |

---

## endpoints da api

### publicos

| metodo | rota            | descricao                    |
|--------|-----------------|------------------------------|
| GET    | `/api/potions`  | lista todas as pocoes        |
| POST   | `/api/login`    | autentica o administrador    |

### protegidos (jwt)

| metodo | rota                | descricao              |
|--------|---------------------|------------------------|
| POST   | `/api/potions`      | cadastra nova pocao    |
| DELETE | `/api/potions/:id`  | remove uma pocao       |

**header de autenticacao:** `Authorization: Bearer <token>`

---


## observacoes

- o banco de dados e **sqlite em memoria** (`:memory:`). os dados sao perdidos ao reiniciar o servidor.
- o seed inicial insere 6 pocoes automaticamente ao iniciar o backend.

