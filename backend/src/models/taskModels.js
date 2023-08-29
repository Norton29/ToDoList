const getClient = require('./connection');


const getAll = async () => {
  const task = await getClient();
  return (await task.query('SELECT * FROM tasks')).rows[0];
};

const create = async (descricao) => {
  const task = await getClient();

  const { title } = descricao;
  console.log(title);
  const query = 'INSERT INTO tasks (title, status, date) VALUES($1, $2, $3);';
  const data = new Date(Date.now());

  return (await task.query(query, [title, 'pendente', data]));

};

module.exports = {
  getAll,
  create,
};