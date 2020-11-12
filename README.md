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

1. cd to backend folder: `cd backend`
2. Install required dependencies: `npm install`
3. Run the server: `node index.js`

Server should run on http://localhost:8080/

### Deployed endpoint

https://cs3219-taskb-backend.herokuapp.com/