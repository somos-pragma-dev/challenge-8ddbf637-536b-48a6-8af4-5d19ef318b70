import knex from 'knex';

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'your_database_user',
    password : 'your_database_password',
    database : 'your_database'
  }
});

export async function up() {
  // Implementación de la migración inicial
  await db.schema.createTable('tasks', (table) => {
    table.increments('id');
    table.string('title');
    table.text('description');
  });
}

export async function down() {
  // Implementación de la migración hacia abajo
  await db.schema.dropTable('tasks');
}