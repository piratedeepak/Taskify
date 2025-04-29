# 📝 Taskify — Todo API with NestJS, MongoDB & ELK Stack

Taskify is a simple yet powerful **Todo REST API** built with [NestJS](https://nestjs.com/) and backed by **MongoDB**. It is fully containerized using **Docker Compose** and includes structured **JSON logging** powered by the **ELK Stack** (Elasticsearch, Logstash, Kibana) for real-time observability and monitoring.

---

## 🚀 Features

- ✅ RESTful API with full **CRUD** operations on tasks
- ✅ **MongoDB** as the NoSQL database
- ✅ **Structured JSON logs** for every action (create, read, update, delete)
- ✅ **ELK Stack integration**:
  - 📦 Logstash collects logs
  - 🔎 Elasticsearch stores them
  - 📊 Kibana visualizes them
- ✅ Containerized using **Docker** and **Docker Compose**

---

## 🧱 Tech Stack

| Layer       | Stack                                             |
|-------------|---------------------------------------------------|
| Backend     | [NestJS](https://nestjs.com/), TypeScript         |
| Database    | MongoDB                                           |
| Logging     | Winston (JSON format)                             |
| DevOps      | Docker, Docker Compose                            |
| Monitoring  | ELK (Elasticsearch, Logstash, Kibana)             |

---

## 📁 Folder Structure

```
taskify/
│
├── src/
│   ├── main.ts
│   ├── app.module.ts
│   └── task/
│       ├── task.module.ts
│       ├── task.schema.ts
│       ├── task.service.ts
│       └── task.controller.ts
│
├── logs/                     # Log files (mounted to container)
├── Dockerfile
├── docker-compose.yml
├── logstash.conf
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🛠 Setup Instructions

### 1. 📦 Prerequisites
Make sure you have:
- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/)
- Node.js (if running outside of Docker)

---

### 2. 🚀 Run the App Locally

```bash
git clone https://github.com/your-username/taskify.git
cd taskify
docker compose -f docker-compose.yml up --build
```

The following services will start:
- 🟢 NestJS API → http://localhost:3000/tasks
- 🟢 Kibana Dashboard → http://localhost:5601
- 🟢 MongoDB, Elasticsearch, Logstash (internal containers)

---

## 📬 API Endpoints

| Method | Endpoint        | Description           |
|--------|------------------|-----------------------|
| `GET`  | `/tasks`         | Get all tasks         |
| `POST` | `/tasks`         | Create a new task     |
| `PUT`  | `/tasks/:id`     | Update a task         |
| `DELETE` | `/tasks/:id`   | Delete a task         |

### 🔧 Example Task Object

```json
{
  "title": "Learn Docker",
  "description": "Understand container basics",
  "status": "pending"
}
```

---

## 📊 Kibana Logging

Every CRUD operation emits a log like:

```json
{
  "timestamp": "2025-04-29T13:00:00Z",
  "event": "create",
  "taskId": "abc123",
  "title": "Learn Docker"
}
```

### 🔍 View Logs in Kibana
1. Open [http://localhost:5601](http://localhost:5601)
2. Go to **Stack Management → Index Patterns**
3. Create an index pattern: `todo-logs*`
4. Open **Discover** to browse live logs

---

## 🐳 Dockerized Services

| Service        | Port      | Purpose                       |
|----------------|-----------|-------------------------------|
| NestJS API     | `3000`    | Main API                      |
| MongoDB        | `27017`   | Database                      |
| Elasticsearch  | `9200`    | Log storage engine            |
| Logstash       | `5044`    | Log processor and shipper     |
| Kibana         | `5601`    | Visualization dashboard       |

---

## 📦 Why Dockerize Each Service?

| Service       | Why Dockerized?                                                                 |
|---------------|----------------------------------------------------------------------------------|
| NestJS API    | Isolated build environment, consistent runtime across machines                  |
| MongoDB       | Easily spin up a local database with no system-level install needed             |
| Elasticsearch | Resource-heavy and OS-dependent — Docker ensures clean setup                   |
| Logstash      | Configured with volume mounts to pick up logs                                   |
| Kibana        | Web UI is fully encapsulated inside a container for zero-config access          |

---

## 📷 Dashboard Sample

Include a screenshot of your Kibana Discover view here:
![Kibana Logs Screenshot](./screenshots/kibana-logs.png)

---

## 🧪 Testing the API

You can use **Postman** or `curl`.

### ➕ Create Task

```bash
curl -X POST http://localhost:3000/tasks   -H "Content-Type: application/json"   -d '{"title": "Learn Docker", "description": "Try out compose"}'
```

### 🔁 Update Task

```bash
curl -X PUT http://localhost:3000/tasks/<id>   -H "Content-Type: application/json"   -d '{"status": "completed"}'
```

---

## 🧹 Cleanup

To stop the containers:

```bash
docker compose -f docker-compose.yml down
```

To remove all Docker volumes:

```bash
docker system prune -a
```

---

## 🙋 FAQ

**Q: Can I run this without Docker?**  
Yes, but you’ll need to:
- Run MongoDB manually
- Install Elasticsearch and Kibana locally
- Update `.env` and config files accordingly

---

## 👨‍💻 Author

**Deepak Sharma**  
- Full Stack Developer  
- Email: deepak.sharma.98@outlook.com

---

## 📜 License

MIT License
