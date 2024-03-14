**README: Running SignSubmission Coding Task**

This README will guide you through the process of running the SignSubmission coding task, which consists of a frontend application built with React and a backend application built with Django.

### Prerequisites
Before you begin, ensure you have the following installed on your system:
- Node.js and npm (for running React frontend)
- Python and Django (for running Django backend)

First, clone the repository to your local machine
### Running Frontend (React)
1. Navigate to the `signsubmission` directory: 

```bash
cd signsubmission
```

2. Install dependencies:

```bash
npm install
```
(axios,react-router-dom,react-hot-toast,react-signature-canvas are the installed dependecies )


3. Start the development server:

```bash
npm start
```

This will start the frontend server, and you should be able to access the application in your browser at `http://localhost:3000`.

### Running Backend (Django)
1. Navigate to the `backendsign` directory:

```bash
cd backendsign
```


2. Install Django and other dependencies:

```bash
pip install django==3.2.12 djangorestframework==3.12.4 django-cors-headers==3.8.0

```

3. Apply migrations:

```bash
python manage.py migrate
```

4. Run the Django development server:

```bash
python manage.py runserver
```

The backend server will start running, and you can access the API endpoints at `http://localhost:8000`.

### Accessing the Application
Once both the frontend and backend servers are running, you should be able to access the full application by navigating to `http://localhost:3000` in your web browser.

### Note
- Ensure that both frontend and backend servers are running simultaneously for the full functionality of the application.
- Ensure data connection (files are stored in cloud)
- admin123@gmail.com , admin123@A  for testing or register new user
- This README assumes default configurations for running React and Django applications. Modify commands as necessary based on your specific setup.
