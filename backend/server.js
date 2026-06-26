const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3001;
const JWT_SECRET = 'pocoes-e-solucoes-secret-key-1867';

// -- middleware --------------------------------------------------
app.use(cors());
app.use(express.json());

// -- database: sqlite in-memory ---------------------------------
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:',
  logging: false,
});

// -- model: potion ----------------------------------------------
const Potion = sequelize.define('Potion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  imagem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

// -- jwt middleware ---------------------------------------------
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'token nao fornecido.' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ error: 'token invalido ou expirado.' });
  }
}

// -- routes -----------------------------------------------------

// login — gera jwt para o administrador
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  // credenciais fixas do administrador
  if (username === 'admin' && password === 'annabelle1867') {
    const token = jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '4h' });
    return res.json({ token });
  }
  return res.status(401).json({ error: 'credenciais invalidas.' });
});

// GET /api/potions — lista todas as pocoes (publico)
app.get('/api/potions', async (_req, res) => {
  const potions = await Potion.findAll({ order: [['id', 'ASC']] });
  res.json(potions);
});

// POST /api/potions — cadastra poção (protegido)
app.post('/api/potions', authMiddleware, async (req, res) => {
  const { nome, descricao, imagem, preco } = req.body;
  if (!nome || !descricao || !imagem || preco == null) {
    return res.status(400).json({ error: 'todos os campos sao obrigatorios.' });
  }
  const potion = await Potion.create({ nome, descricao, imagem, preco });
  res.status(201).json(potion);
});

// DELETE /api/potions/:id — remove poção (protegido)
app.delete('/api/potions/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;
  const potion = await Potion.findByPk(id);
  if (!potion) {
    return res.status(404).json({ error: 'poção nao encontrada.' });
  }
  await potion.destroy();
  res.json({ message: 'poção removida com sucesso.' });
});

// -- seed inicial -------------------------------------------------
async function seed() {
  await Potion.bulkCreate([
    {
      nome: 'Poção blue sky',
      descricao: 'Essa poção prove um surto de inspiração por 24 horas. Foi utilizada por John Lennon quando escreveu Lucy in the Sky with Diamonds.',
      imagem: '/mock/potion-1.png',
      preco: 300,
    },
    {
      nome: 'Poção do perfume misterioso',
      descricao: 'Essa poção faz com que voce fique cheirando lilas e groselha por 24 dias. Essência muito admirada pelos bruxos.',
      imagem: '/mock/potion-2.png',
      preco: 200,
    },
    {
      nome: 'Poção de pinus',
      descricao: 'Essa poção faz com que voce fique 10 cm mais alto! observação: Efeitos colaterais desconhecidos.',
      imagem: '/mock/potion-3.png',
      preco: 3000,
    },
    {
      nome: 'Poção da beleza eterna',
      descricao: 'Veneno que mata rápido.',
      imagem: '/mock/potion-4.png',
      preco: 100,
    },
    {
      nome: 'Poção do arco iro',
      descricao: 'Traz felicidade momentanea. pode durar de 10 minutos a 2 dias.',
      imagem: '/mock/potion-5.png',
      preco: 120,
    },
    {
      nome: 'Caldeirão das verdades secretas',
      descricao: 'As pessoas lhe dirão apenas verdades por 1 hora. É necessario beber os 5L.',
      imagem: '/mock/potion-6.png',
      preco: 150,
    },
  ]);
  console.log('banco populado com 6 pocoes iniciais.');
}

// -- iniciar server ------------------------------------------------
async function start() {
  await sequelize.sync({ force: true });
  await seed();
  app.listen(PORT, () => {
    console.log(`servidor rodando em http://localhost:${PORT}`);
  });
}

start();
