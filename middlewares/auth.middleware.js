const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET = process.env.JWT_SECRET || 'um valor padrão';

module.exports = async (req, res, next) => {
    try {
    const { authorization } = req.headers; // monitoria Gaspar - esquenta Projeto
    console.log(authorization);
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
    const decoded = jwt.verify(authorization, SECRET);
    req.token = decoded.data;
    next();
    } catch (error) {
        // por causa da documentação.
        // Nas duas formas: expirar ou inválido, existe a palavra 'Token'
        if (error.name.includes('Token')) {
            return res.status(401).json({ message: 'Expired or invalid token' });
        }
    }
};