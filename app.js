if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require('./routes'));

app.use(require('./middlewares/errorHandler'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
