# SARC IIT Bombay - Shadow Program

This is the official website for the Shadow Program, an initiative by the Student Alumni Relations Cell (SARC) at IIT Bombay. This platform allows students to register for the program, learn about participating companies, and gain valuable insights into the corporate world.

## Overview

The Shadow Program provides students with a unique opportunity to visit the workplaces of various companies, offering them a glimpse into the professional environment and helping them make informed career choices. This web application serves as the central hub for all program-related activities, from registration to information dissemination.

## Features

- **Student Registration:** A seamless registration process for students interested in the Shadow Program.
- **Company Profiles:** Detailed information about the companies participating in the program.
- **Past Events:** A showcase of previous editions of the Shadow Program, including testimonials and experiences.
- **Team Page:** An introduction to the SARC team members behind the initiative.
- **Informative Homepage:** A comprehensive overview of the program, its benefits, and how to get involved.

## Tech Stack

### Frontend

- **Framework:** React
- **Build Tool:** Vite
- **Styling:** CSS, Tailwind CSS
- **Routing:** React Router
- **Animations:** Framer Motion
- **UI Components:** React Slick, SweetAlert2

### Backend

- **Framework:** Django
- **API:** Django REST Framework
- **Database:** SQLite (default)
- **CORS:** django-cors-headers

## Project Structure

The project is organized into two main directories:

- `frontend/`: Contains the React-based frontend application.
- `backend/`: Contains the Django-based backend server.

```
/
├── backend/
│   ├── api/
│   ├── myproject/
│   ├── manage.py
│   └── requirements.txt
└── frontend/
    ├── public/
    ├── src/
    ├── package.json
    └── vite.config.js
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js and npm
- Python and pip

### Backend Setup

1.  **Navigate to the backend directory:**
    ```sh
    cd backend
    ```

2.  **Create and activate a virtual environment:**
    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3.  **Install the required packages:**
    ```sh
    pip install -r requirements.txt
    ```

4.  **Apply database migrations:**
    ```sh
    python manage.py migrate
    ```

5.  **Run the development server:**
    ```sh
    python manage.py runserver
    ```
    The backend server will be available at `http://127.0.0.1:8000`.

### Frontend Setup

1.  **Navigate to the frontend directory:**
    ```sh
    cd frontend
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The frontend development server will be available at `http://localhost:5173`.

## Usage

Once both the frontend and backend servers are running, you can access the application in your web browser at the frontend URL. You can then navigate through the different sections of the website, register for the program, and explore the various features.
