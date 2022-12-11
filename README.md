# DT162G 

## REST-webbtjänst
Detta repository innehåller kod för en REST-webbtjänst utvecklad i Node.js och Express. Denna REST-webbtjänst har skapats för att hantera information för restaurangen Nightbird. API'et har stöd för CRUD (Create, Read, Update, Delete).

## Länkar


## Användning av REST-webbtjänsten

```

Maträtter:
```
| Metod         | Ändpunkt             | 	        Beskrivning		       |
| ------------- |----------------------| --------------------------------------------- |
| GET           | URL     | Hämta alla befintliga maträtter i databasen   |
| GET           | URL | Hämta en specifik maträtt i databasen	       |
| POST 		| URL    | Lagra en ny maträtt		               |
| PUT 		| URL| Uppdatera en maträtt med angivet ID           |
| DELETE 	| URL | Radera en maträtt med angivet ID              |
```

Drinkar:
```
| Metod         | Ändpunkt               | 		Beskrivning		       |
| ------------- |------------------------| --------------------------------------------|
| GET           | URL      | Hämta alla befintliga maträtter i databasen |
| GET           | URL  | Hämta en specifik maträtt i databasen       |
| POST 		| URL      | Lagra en ny maträtt		               |
| PUT 		| URL  | Uppdatera en maträtt med angivet ID         |
| DELETE 	| URL  | Radera en maträtt med angivet ID            |
```

Bordsbokningar:
```
| Metod         | Ändpunkt               | 	       Beskrivning		       |
| ------------- |------------------------| --------------------------------------------|
| GET           | URL        | Hämta alla befintliga bokningar i databasen |
| GET           | URL    | Hämta en specifik bokning i databasen.      |
| POST 		| URL        | Lagra en ny bokning			       |
| PUT 		| URL    | Uppdatera en bokning med angivet ID	       |
| DELETE 	| URL    | Radera en bokning med angivet ID	       |
```

API:et tar emot och returnerar JSON-data med följande struktur: 


{ "id": "1", "title": "Strawberry parfait", "category": "Dessert", "description": "fraise des bois, vanilla, crumble", "price": "10" }
