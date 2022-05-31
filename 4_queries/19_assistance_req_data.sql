SELECT
    teachers.name AS teacher,
    students.name AS student,
    assignments.name AS assignment,
    (completed_at - started_at) AS duration
FROM
    assistance_requests
    JOIN students ON assistance_requests.student_id = students.id
    JOIN teachers ON assistance_requests.teacher_id = teachers.id
    JOIN assignments ON assistance_requests.assignment_id = assignments.id
ORDER BY
    (completed_at - started_at)
Limit
    10;