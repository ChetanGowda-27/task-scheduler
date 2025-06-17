# 🚀 Task Scheduler

**A robust Spring Boot application featuring a RESTful API for comprehensive task management.**
Persist tasks using **MongoDB** and manage them effortlessly with an intuitive **HTML/CSS/JavaScript front-end**.
Perfect for demonstrating backend skills with Spring Boot, NoSQL databases, and front-end integration.

---

## 🔍 Overview

This project allows users to **create, view, update, and delete tasks** via a REST API, backed by MongoDB's flexible NoSQL storage. The included front-end provides a user-friendly interface, enabling seamless interaction without external tools.

**Technologies used:**

* **Java 11+ & Spring Boot 2.7.x** — Rapid backend development with dependency injection and RESTful services.
* **MongoDB** — NoSQL database for scalable and schema-less data storage.
* **Maven** — Efficient build and dependency management.
* **HTML/CSS/JavaScript** — Clean, responsive front-end consuming the API.
* **Git & GitHub** — Version control and collaboration.

---

## 🎯 Key Features

* **Full CRUD operations** on tasks via RESTful endpoints.
* Task fields: **Description** and **Status** (Pending, In Progress, Completed).
* Persistent data storage with MongoDB.
* Lightweight, clean UI to manage tasks directly in the browser.
* Modular, maintainable code adhering to best practices.
* Easy local setup and extensible architecture.

---

## 📥 Quick Setup Guide

### 1. Clone the repository

```bash
git clone https://github.com/ChetanGowda-27/task-scheduler.git
cd task-scheduler
```

### 2. Prepare MongoDB

* **Local:** Install & start MongoDB Community Edition. Confirm running at `mongodb://localhost:27017`.
* **Atlas (Cloud):** Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), whitelist your IP, and get your connection string.

### 3. Configure application

Edit `src/main/resources/application.properties`:

```properties
spring.data.mongodb.uri=mongodb://localhost:27017/task-scheduler
# OR for Atlas:
# spring.data.mongodb.uri=mongodb+srv://<username>:<password>@cluster0.mongodb.net/task-scheduler
server.port=8080
```

### 4. Build and run the backend

```bash
mvn spring-boot:run
```

*Application will start on* `http://localhost:8080`

### 5. Open the front-end

Visit:

```
http://localhost:8080
```

Interact with the UI to manage your tasks instantly.

---

## ⚙️ API Reference

| Method | Endpoint          | Description                  | Request Body Example                                       |
| ------ | ----------------- | ---------------------------- | ---------------------------------------------------------- |
| GET    | `/api/tasks`      | Retrieve all tasks           | N/A                                                        |
| GET    | `/api/tasks/{id}` | Retrieve a single task by ID | N/A                                                        |
| POST   | `/api/tasks`      | Create a new task            | `{ "description": "Example task", "status": "Pending" }`   |
| PUT    | `/api/tasks/{id}` | Update an existing task      | `{ "description": "Updated task", "status": "Completed" }` |
| DELETE | `/api/tasks/{id}` | Remove a task                | N/A                                                        |

---

## 🖥️ Front-End Features

* **Add tasks:** Enter description and select status.
* **View tasks:** See all tasks with statuses.
* **Update tasks:** Modify task details inline via prompts.
* **Delete tasks:** Remove tasks instantly.
* Built with simple, readable **HTML/CSS/JavaScript**, no frameworks required.
* Dynamic UI synced in real-time with backend API.

---

## 🏗️ Project Structure

```plaintext
src/
 ├── main/
 │    ├── java/com/chetangowda/
 │    │    ├── controller/      # REST API controllers (TaskController.java)
 │    │    ├── model/           # Data model classes (Task.java)
 │    │    ├── repository/      # MongoDB interfaces (TaskRepository.java)
 │    │    └── TaskSchedulerApplication.java  # Main Spring Boot application
 │    └── resources/
 │         ├── static/          # Front-end static files (HTML, CSS, JS)
 │         └── application.properties  # Config file for MongoDB and server
 └── test/
      └── java/                # Unit and integration tests (optional)
```

---

## 🛠️ Build & Test

* **Build:** `mvn clean install`
* **Run:** `mvn spring-boot:run`
* **Test APIs:** Use [Postman](https://www.postman.com/) or `curl` commands.
* **UI Testing:** Open browser to `http://localhost:8080`

---

## 🌱 Future Enhancements

* Add user authentication & authorization.
* Implement pagination and filtering on task lists.
* Add due dates and reminders.
* Enhance UI with React/Vue/Angular for better UX.
* Dockerize application for containerized deployment.

---

## 🤝 Contributing

Feel free to fork, open issues, or submit pull requests!
Make sure to follow coding standards and add meaningful commit messages.

---

## 📄 License

This project is licensed under the **MIT License** — see [LICENSE](LICENSE) for details.

---

