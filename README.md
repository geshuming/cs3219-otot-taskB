# CS3219 OTOT Assignment Task B

## Task B

API supports the following methods for contacts:
  - GET /api/contacts
  - POST /api/contacts
  - PUT /api/contacts/:contact_id
  - DELETE /api/contacts/:contact_id

Contact schema
```javascript
{
  name: String,
  email: String,
  phone: int
}
```

### Running the API locally

Requirements:
  - Node 12.18.0
  - MySQL 5.7

1. cd to backend folder: `cd backend`
2. Install required dependencies: `npm install`
3. Create a MySQL database and configure the connection configuration accordingly in `database.js`
4. Run the server: `npm run start`

Server should run on http://localhost:8080/

### Deployed endpoints

Frontend
Heroku website: https://cs3219-otot-frontend.herokuapp.com/

Backend
Heroku website: https://cs3219-taskb-backend.herokuapp.com/
Google Cloud Functions (serverless deployment): https://asia-southeast2-cs3219-otot.cloudfunctions.net/web 
