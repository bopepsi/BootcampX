const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'vagrant',
    password: '123',
    database: 'bootcampx',
    port: 5432
});

const cohort_name = process.argv[2];
const max_result = process.argv[3];

pool.query(`
SELECT students.id, students.name AS student, cohorts.name AS cohort
FROM students JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = $1
LIMIT $2;
`, [cohort_name, max_result])
    .then(res => {
        res.rows.forEach(user => {
            console.log(`${user.student} has an id of ${user.id} and was in the ${user.cohort} cohort`);
        })
    })
    .catch(err => console.error('query error', err.stack));