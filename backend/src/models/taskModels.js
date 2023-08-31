const getClient = require('./connection');


const getAll = async () => {
  const task = await getClient();
  return (await task.query('SELECT * FROM tasks')).rows;
};

const create = async (descricao) => {
  const task = await getClient();

  const { title } = descricao;
  const query = 'INSERT INTO tasks (title, status, date) VALUES($1, $2, $3) RETURNING *';
  const data = new Date(Date.now());

  return ((await task.query(query, [title, 'pendente', data])).rows);

};

const deleteTask = async (id) =>{
  const remove = await getClient();
  return (await remove.query('DELETE FROM tasks WHERE id = $1', [id]));
};

const updateTask = async (id, body) =>{
  const update = await getClient();
  const { title, status } = body;
  const query = 'UPDATE tasks SET title = $1, status = $2 WHERE id = $3';

  return ((await update.query(query, [title, status, id])).rows);
};

const getById = async (id) =>{
  const objeto = await getClient();
  return (await objeto.query('SELECT * FROM tasks WHERE id = $1', [id])).rows;

};
module.exports = {
  getAll,
  create,
  deleteTask,
  updateTask,
  getById
};