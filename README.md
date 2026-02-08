# DSA-Tracker

DSA-Tracker is a web application designed to help users track their progress while practicing Data Structures and Algorithms (DSA). It allows users to log solved problems, categorize them by difficulty and topic, and visualize their improvement over time.

## Features

- User authentication (Register & Login)
- Add, update, and delete solved problems
- Categorize problems by topic (e.g., Arrays, Graphs, Trees, etc.)
- Track problem difficulty (Easy, Medium, Hard)
- View progress with charts and statistics
- Search and filter problems
- Responsive design for mobile and desktop

## Tech Stack

- **Frontend:** ReactJS, HTML, CSS
- **Backend:** Node.js, Express.js (or your backend)
- **Database:** MongoDB (or your chosen DB)
- **Authentication:** JWT (JSON Web Tokens)
- **Charts & Visualization:** Chart.js / Recharts

## Installation

1. Clone the repository:

```
git clone https://github.com/yourusername/dsa-tracker.git
cd dsa-tracker
```
#Install dependencies:

```
cd frontend
npm install
cd ../backend
npm install
```

#Set up environment variables:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

#Run the project:

```
# Backend
cd backend
npm start

# Frontend
cd frontend
npm start
```

The app should now be running at http://localhost:3000

