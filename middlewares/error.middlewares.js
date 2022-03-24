// Renomeie esse arquivo
module.exports = (error, _req, res, _next) => {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  };  