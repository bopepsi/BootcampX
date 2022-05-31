SELECT
    AVG(total_duration) as avg_total_duration
FROM
    (
        SELECT
            SUM(completed_at - started_at) AS total_duration
        FROM
            assistance_requests
            JOIN students ON assistance_requests.student_id = students.id
            JOIN cohorts ON students.cohort_id = cohorts.id
        GROUP BY
            cohorts.name

) as total_duration;