const jwt = require('jsonwebtoken');

const jwtConfig = {
    expiresIn: '1d',
};

const SECRET = process.env.JWT_SECRET || 'um valor padrão';
// Monitoria Gaspar - Esquenta para o projeto
// payload é a informação a API vai passar p/ ser colocada dentro do TOKEN
module.exports = (payload = {}) => jwt.sign({ data: payload }, SECRET, jwtConfig);