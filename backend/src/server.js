const app = require('./app.js');
require('dotenv').config();

// eslint-disable-next-line no-undef
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Servidor ${PORT} ta On Pai!`));