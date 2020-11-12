# CS3219 OTOT Assignment Task B

## Task B1

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

### Deployed endpoint

https://cs3219-taskb-backend.herokuapp.com/