# Drone Manager Interface

Drone Manager Interface is a React-based web application for managing and monitoring drone operations. This project provides a user-friendly interface to track drone statuses, flight hours, battery levels, and maintenance logs.

## Table of Contents

- [Drone Manager Interface](#drone-manager-interface)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
    - [Cloning the Repository](#cloning-the-repository)
    - [Installing Dependencies](#installing-dependencies)
    - [Running the Application](#running-the-application)
    - [Docker Setup](#docker-setup)
    - [Building the Docker Image](#building-the-docker-image)
    - [Running the Docker Container](#running-the-docker-container)
    - [Usage](#usage)
    - [Contributing](#contributing)

## Features

- User authentication
- Dashboard overview of all drones
- Detailed view of individual drone information
- Responsive design for various screen sizes

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- Git
- Docker (optional, for containerization)

## Getting Started

### Cloning the Repository

```bash
git clone https://github.com/Sonualam-bot/drone-manager-interface.git
```

### Installing Dependencies

- Once you've cloned the repository, install the project dependencies:

```bash
npm install
```

### Running the Application

- To start the development server:

```bash
npm run dev
```

- The application will be available at http://localhost:5173. Open this URL in your web browser to view the application.

### Docker Setup

- If you prefer to use Docker, follow these steps:

### Building the Docker Image

- Ensure Docker is installed on your system, then run:

```bash
docker build -t react-app:dev .
```

- This command builds a Docker image named drone-manager-interface based on the Dockerfile in the project root.

### Running the Docker Container

- Once the image is built, you can run it as a container:

```bash
docker run -p 5173:5173 react-app:dev
```

- This command starts a container from the drone-manager-interface image and maps port 5173 from the container to port 5173 on your host machine.
- The application will be accessible at http://localhost:5173.

### Usage

1. Open the application in your web browser at http://localhost:5173.
2. Log in using the provided credentials (username: admin, password: password123).
3. Navigate through the dashboard to view an overview of all drones.
4. Click on individual drones for detailed information and maintenance logs.
5. Use the responsive design to access the application on various devices and screen sizes.

### Contributing

- Contributions are welcome! If you'd like to contribute:

1. Fork the repository
2. Create a new branch (git checkout -b feature/AmazingFeature)
3. Make your changes
4. Commit your changes (git commit -m 'Add some AmazingFeature')
5. Push to the branch (git push origin feature/AmazingFeature)
6. Open a Pull Request

- Please ensure your code adheres to the project's coding standards and includes appropriate tests.
  <br />

- **This README now provides a comprehensive guide for users to clone, set up, and run your application, both with and without Docker. It includes all the necessary sections in a single markdown file, making it easy to add directly to your GitHub repository**.
