SELECT students.name, COUNT(*) AS total_assistance 
FROM students JOIN assistance_requests
ON students.id = student_id
WHERE students.name = 'Elliot Dickinson'
GROUP BY students.name;