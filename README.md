# CashierPOS 🛒💵

A full-stack Point of Sale (POS) system built with **Python (Django REST Framework)** for the backend and optionally **React** for the frontend. This project manages products, sales, and real-time dashboards for a retail or small business environment.

---

## 🧰 Tech Stack

**Backend:**
- Django 5.x
- Django REST Framework
- SQLite (for development)
- JWT Authentication (`djangorestframework-simplejwt`)
- CORS Headers (`django-cors-headers`)

**Frontend (optional):**
- React 18+
- Axios for API calls
- Tailwind CSS or plain CSS
- React Hooks (`useState`, `useEffect`)

**Tools:**
- Git & GitHub
- VS Code / PyCharm
- Node.js & npm (if using React frontend)

---

## 🚀 Features

- **Products Management:** Add, edit, delete, and view products.
- **Sales Management:** Create new sales, track transactions.
- **Dashboard:** Overview of total sales, total products, and sales trends.
- **User Authentication:** Secure login/logout using JWT.
- **API Ready:** Fully RESTful backend for integration with any frontend.

---

## 💻 Installation

### Backend (Django)

1. Clone the repository:

```bash
git clone https://github.com/banumariwan/CashierPOS.git
cd CashierPOS
Create a virtual environment and activate it:

bash
Copy code
python -m venv .venv
.venv\Scripts\activate      # Windows
# source .venv/bin/activate  # macOS/Linux
Install dependencies:

bash
Copy code
pip install -r requirements.txt
Run migrations:

bash
Copy code
python manage.py migrate
Create a superuser (optional, for admin access):

bash
Copy code
python manage.py createsuperuser
Start the backend server:

bash
Copy code
python manage.py runserver
Frontend (React, Optional)
Navigate to the frontend folder:

bash
Copy code
cd frontend
Install npm packages:

bash
Copy code
npm install
Start the frontend server:

bash
Copy code
npm start
Frontend runs at http://localhost:3000 and communicates with Django backend at http://localhost:8000/api/

📂 Project Structure
bash
Copy code
CashierPOS/
├─ backend/           # Django backend
│  ├─ core/           # Models, views, serializers
│  ├─ CashierPOS/     # Project settings
├─ frontend/          # React frontend (optional)
│  ├─ src/pages/      # React pages (Dashboard, Products, Sales)
│  ├─ src/services/   # Axios API services
├─ requirements.txt
├─ README.md
🔑 API Endpoints
Resource	Endpoint	Methods
Products	/api/products/	GET, POST, PUT, DELETE
Sales	/api/sales/	GET, POST, PUT, DELETE
Dashboard	/api/dashboard/	GET
Auth (JWT)	/api/token/	POST
Refresh JWT	/api/token/refresh/	POST

📝 Notes
Make sure the backend is running before using the frontend; otherwise, API calls will fail.

Environment variables (.env) can be used for secret keys, database settings, and API URLs.

Tailwind CSS is optional; you can remove it if you prefer plain CSS.
