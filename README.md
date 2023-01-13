# Node.js/Express API 

## REST API
This repository contains code for a REST web service developed in Node.js and Express. This REST web service has been created to manage information for the fictional sushi restaurant Ikumi. The API supports CRUD (Create, Read, Update, Delete) and there are three endpoints which are described with detail below.

## Use of the REST API

```

Dishes:
```
| Method         | Endpoint             | 	        Description		       |
| ------------- |----------------------| --------------------------------------------- |
| GET           | /api/dishes     | Get all dishes in the database   |
| GET           | /api/dishes/id | Get a specific dish in the database	       |
| POST 		| /api/dishes    | Create a new dish	               |
| PUT 		| /api/dishes/id| Update a dish            |
| DELETE 	| /api/dishes/id| Delete a dish              |
```

Drinks:
```
| Method         | Endpoint               | 		Description		       |
| ------------- |------------------------| --------------------------------------------|
| GET           | /api/drinks      | Get all drinks in the database |
| GET           | /api/drinks/id  | Get a specific drink in the database      |
| POST 		| /api/drinks      | Createa a new drink		               |
| PUT 		| /api/drinks/id   | Update a drink                     |
| DELETE 	| /api/drinks/id   | Delete a drink             |
```

Table reservations:
```
| Method         | Endpoint               | 	       Description		       |
| ------------- |------------------------| --------------------------------------------|
| GET           | /api/bookings        | Hämta alla befintliga bokningar i databasen |
| GET           | /api/bookings/id    | Hämta en specifik bokning i databasen.      |
| POST 		| /api/bookings        | Lagra en ny bokning			       |
| PUT 		| /api/bookings/id    | Uppdatera en bokning med angivet ID	       |
| DELETE 	| /api/bookings/id     | Delete a booking  	       |
```

API:et tar emot och returnerar JSON-data med följande struktur: 


{ "_id": "639ce43685260da1950bdd6b", "title": "Ebi", "category": "Sashimi/Nigiri", "description": "Shrimp", "price": "1640" }
