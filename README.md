# 🛫 Airport Management System (Fullstack)

A fullstack web application to manage flights, passengers, and bookings. Built with **Django REST Framework** for the backend and **React** for the frontend.

---

## 🧰 Tech Stack

**Backend:**  
- Django 5.2  
- Django REST Framework  
- SQLite (for development)  
- JWT Authentication (via `djangorestframework-simplejwt`)  
- CORS Headers (`django-cors-headers`)

**Frontend:**  
- React 18+  
- Axios for API calls  
- Tailwind CSS (optional styling)  
- React Hooks (`useState`, `useEffect`)  

**Tools & Environment:**  
- Git & GitHub for version control  
- VS Code / PyCharm for development  
- Node.js & npm for frontend package management  

---

## 🚀 Features

- **Flights Management:** Create, read, update, delete flights  
- **Passengers Management:** Create, read, update, delete passengers  
- **Bookings Management:** Book passengers on flights, manage status (Confirmed / Cancelled)  
- **Dashboard:** Overview of total flights, cancelled flights, upcoming flights, and total bookings  
- **Search & Filter:** Search for flights by flight number, origin, destination, and passenger name  

---

## 💻 Installation

### Backend (Django)

1. Clone the repo:
   ```bash
   git clone https://github.com/banumariwan/banu-airport-management-fullstack.git
   cd banu-airport-management-fullstack/airport_backend
Create virtual environment and activate:

bash
Copy code
python -m venv .venv
.venv\Scripts\activate   # Windows
source .venv/bin/activate # macOS/Linux
Install dependencies:

bash
Copy code
pip install -r requirements.txt
Run migrations:

bash
Copy code
python manage.py migrate
Create superuser (optional):

bash
Copy code
python manage.py createsuperuser
Start backend server:

bash
Copy code
python manage.py runserver
Frontend (React)
Navigate to frontend folder:

bash
Copy code
cd ../frontend
Install npm packages:

bash
Copy code
npm install
Start frontend server:

bash
Copy code
npm start
Frontend will run at http://localhost:3000 and communicate with Django backend at http://localhost:8000/api/

📂 Project Structure
bash
Copy code
airport_backend/      # Django backend
├─ core/              # App with models, views, serializers
├─ airport_backend/   # Project settings
frontend/             # React frontend
├─ src/pages/         # React pages (FlightList, FlightForm, Dashboard, etc.)
├─ src/services/      # Axios API service
🔑 API Endpoints
Resource	Endpoint	Methods
Flights	/api/flights/	GET, POST, PUT, DELETE
Passengers	/api/passengers/	GET, POST, PUT, DELETE
Bookings	/api/bookings/	GET, POST, PUT, DELETE
Dashboard	/api/dashboard/	GET
Auth (JWT)	/api/token/	POST
Refresh JWT	/api/token/refresh/	POST



📝 Notes
Make sure backend is running before using the frontend, otherwise API calls will fail.

.env file can be used for secret keys, database settings, and API URLs.

Tailwind CSS is optional; you can remove it if you prefer plain CSS.

🔗 Live Demo
If deployed:
https://your-live-demo-link.com

📦 License
This project is open source and free to use
