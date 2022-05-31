SELECT count(*) AS total_assistance, teachers.name AS name
FROM teachers JOIN assistance_requests 
ON teachers.id = assistance_requests.teacher_id
GROUP BY teachers.name;