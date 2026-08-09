### 1. Title
Job Portal with Employer Dashboard

### 2. Domain
Web Application / Recruitment Management System

### 3. Problem

Traditional job searching and recruitment can be scattered across multiple platforms. Job seekers may find it difficult to find suitable jobs, apply, and track applications, while employers may struggle to manage job postings and applicants efficiently.

### 4. Proposed Solution

The proposed system is a centralized web-based job portal that connects job seekers and employers.

**Job Seekers can:**
- Register and log in.
- Create and manage profiles.
- Search and filter jobs.
- View job details and apply.
- Upload resumes.
- Track application status.

**Employers can:**
- Register and manage company profiles.
- Post, edit, and close job vacancies.
- View applicants.
- Review resumes.
- Update application status.
- Monitor recruitment through an employer dashboard.

**Admins can:**
- Manage users.
- Monitor job postings and applications.
- Remove inappropriate content.

### 5. Security

- Role-based access control for Job Seekers, Employers, and Admins.
- Secure password hashing.
- JWT-based authentication.
- Protected REST APIs.

### 6. Main Database Tables

- `users`
- `job_seekers`
- `employers`
- `jobs`
- `applications`
- `resumes`
- `skills`
- `job_skills`

### 7. Success Criteria

The system should allow users to register and authenticate, search and apply for jobs, manage job postings, view applicants, update application statuses, and access role-based dashboards through REST APIs.

### 8. Out of Scope

- Online payments
- Payroll management
- Video interviews
- Real-time chat
- Automated background verification
- Full mobile application
- Automatic hiring decisions

### 9. Technology Stack

- **Frontend:** React.js, Bootstrap/Tailwind CSS, Axios
- **Backend:** Java 17, Spring Boot 3.x
- **Security:** Spring Security + JWT
- **Database:** MySQL
- **ORM:** Spring Data JPA + Hibernate
- **Build Tool:** Maven
- **Testing:** JUnit 5
- **API Documentation:** Swagger/OpenAPI
- **Version Control:** Git + GitHub
- **Deployment:** Render/Railway + Vercel/Netlify

### 10. Chosen Track

**Java Track**
