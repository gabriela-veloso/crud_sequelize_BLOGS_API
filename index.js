require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { errorMiddleware } = require('./middlewares/index.middlewares');
const { userRoute, loginRoute, categoryRoute, blogPostsRoute } = require('./routes/index.routes');

const app = express();
app.use(express.json());
app.use(bodyParser.json());

app.use(errorMiddleware);
app.use('/user', userRoute);
app.use('/login', loginRoute);
app.use('/categories', categoryRoute);
app.use('/post', blogPostsRoute);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
