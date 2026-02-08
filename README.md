# Task Dashboard
A lightweight, full-stack management dashboard built with HTML, CSS, JavaScript, and PHP.
Designed as a clean, modern personal project demonstrating frontend UI design, client-side state management, and simple backend persistence.

Clean UI * Dynamic updates * Persistent storage

## Features
- Add, complete, and delete tasks
- Real-time UI updates (no page reloads)
- Persistent task storage using JSON
- Dynamic date rendering
- Dashboard-style statistics (Total/Completed/Remaining)
- Responsive, modern UI design

## Tech Stack
- Frontend
  - HTML5
  - CSS3 (custom, no framework)
  - Vanilla JavaScript (DOM manipulation, Fetch API)
- Backend
  - PHP
  - JSON file storage (tasks.json)

## Project Structure
```text
/
├── index.php
├── main.php
├── save_task.php
├── toggle_task.php
├── delete_task.php
├── tasks.json
├── css/
│   └── index.css
└── js/
    └── app.js
```
## Getting Started (Local Setup)
### Requirements
- PHP 5+
- Local web server (PHP built-in server, XAMPP, MAMP, ect.)
### Run Locally
```
php -S localhost:8000
```
### Then open your browser to:
```
http://localhost:8000
```
## What this project demonstrates
- Clean separation of concerns (HTML/CSS/JS/PHP)
- Client-side state management with optimistic UI updates
- REST-list communication using Fetch API
- Backend persistence without a database
- Modern UI layout and styling without frameworks

## Screenshots
<img width="1096" height="577" alt="image" src="https://github.com/user-attachments/assets/5f7481ba-0bba-4070-b2b4-a8704b3a5b01" />
<img width="1273" height="880" alt="image" src="https://github.com/user-attachments/assets/8998ea18-66a5-452f-b596-c0dc5eaecfd5" />
<img width="1023" height="782" alt="image" src="https://github.com/user-attachments/assets/35843ceb-3b7d-4f39-9d48-597b770e3e8c" />
<img width="1007" height="813" alt="image" src="https://github.com/user-attachments/assets/8edc9d49-a06e-47ac-93fa-f93a48399fc9" />
<img width="1029" height="638" alt="image" src="https://github.com/user-attachments/assets/a00e9d41-c46c-4158-b527-db79d382b084" />

## Future improvements
- Edit task text
- Due dates and priorities
- Drag & drop reordering
- Authentication / multi-user support
- Database-backed storage

## Author
Christopher Polen
[LinkedIn](https://www.linkedin.com/in/christopher-polen/)







