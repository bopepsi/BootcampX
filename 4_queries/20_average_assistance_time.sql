SELECT
    AVG(completed_at - started_at) AS avg_duration
FROM
    assistance_requests;