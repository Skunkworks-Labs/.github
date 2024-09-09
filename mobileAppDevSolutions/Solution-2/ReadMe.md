

# Solution 2: Django (Backend) & Flutter (Frontend)

This solution showcases a Python-based backend using **Django** with the **Django REST Framework** for API services and a cross-platform mobile frontend built with **Flutter**.

## Folder Structure

solution-2/ ├── backend/ │ └── manage.py # Django backend entry point └── frontend/ └── main.dart # Flutter mobile app

markdown
Copy code

## Prerequisites

- **Python 3.8** or higher
- **PIP** (Python Package Manager)
- **Django** and **Django REST Framework** installed:
    ```bash
    pip install django djangorestframework
    ```

- **Flutter SDK** installed globally:
    - Installation guide: https://flutter.dev/docs/get-started/install

## Backend Setup (Django)

1. **Navigate to the `backend` directory**:
   ```bash
   cd backend
Create a virtual environment (optional but recommended):

bash
Copy code
python3 -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
Install Django dependencies:

bash
Copy code
pip install -r requirements.txt
Apply database migrations:

bash
Copy code
python manage.py migrate
Run the Django development server:

bash
Copy code
python manage.py runserver
The server will run at http://localhost:8000.

Frontend Setup (Flutter)
Navigate to the frontend directory:

bash
Copy code
cd ../frontend
Install Flutter dependencies:

bash
Copy code
flutter pub get
Run the Flutter app:

bash
Copy code
flutter run
Test the app on an Android or iOS emulator, or a real device connected to your computer.

Environment Variables
For environment configuration (e.g., database URL, API keys), create a .env file in the backend folder and reference it in your settings.

Contributing
We welcome contributions! Feel free to submit issues and pull requests for improvements or bug fixes.

License
This project is licensed under the MIT License.
