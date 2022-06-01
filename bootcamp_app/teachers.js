const { Pool } = require('pg');

const pool = new Pool({
    user: 'vagrant',
    password: '123',
    database: 'bootcampx',
    host: 'localhost',
    port: 5432
})

pool.query(`
SELECT
    DISTINCT teachers.name AS teacher,
    cohorts.name AS cohort
FROM
    teachers
    JOIN assistance_requests ON assistance_requests.teacher_id = teachers.id
    JOIN students ON students.id = assistance_requests.student_id
    JOIN cohorts ON students.cohort_id = cohorts.id
WHERE
    cohorts.name = 'JUL02'
ORDER BY
    teacher;`).then(res => {
    console.log(res.rows);
    pool.end();
}).catch(err => console.error('query error', err.stack));