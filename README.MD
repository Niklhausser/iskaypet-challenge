# iskaipet-challenge

Welcome to **iskaipet-challenge**, a prototype testing project with attached services.

## Installation

To get started run the following command to install the dependencies:

   ```bash
   npm install
   ```

## Usage

Once the installation is complete, you can run the project using the following command:

```bash
npm start
```

This command will start the application and make it accessible at http://localhost:8080/.

To run the tests for this project, you can use the following command:

```bash
npm test
```

This command will execute the test suites and provide you with the test results, allowing you to verify the functionality and integrity of the project.

## Services

The **iskaipet-challenge** project comes with the following services:

1. **POST /pets**: This route handles the creation or update of a pet record. It calls the saveOrUpdate function from the petsDb service, passing the request body as a parameter. It is responsible for saving or updating the pet information in the database.

2. **GET /pets**: This route retrieves all pets from the database. It calls the getAll function from the petsDb service, passing the query parameters as a parameter. It returns a list of pets as a response.

3. **GET /pets/most_numerous_species**: This route retrieves the most numerous species of pets from the database. It calls the getMostNumerousSpecies function from the petsDb service. It returns the species and the number of pets as a response.

4. **GET /pets/:id**: This route retrieves a specific pet by its ID from the database. It calls the getById function from the petsDb service, passing the ID as a parameter. It returns the pet details as a response.

5. **DELETE /pets/:id**: This route deletes a specific pet by its ID from the database. It calls the deleteById function from the petsDb service, passing the ID as a parameter. It removes the pet record from the database.

6. **GET /pets/species/average_age**: This route retrieves the average age of pets of a specific species from the database. It calls the getSpeciesAverageAge function from the petsDb service, passing the species name as a query parameter. It returns the average age of pets of that species as a response.

These routes utilize the handle function, which is a middleware responsible for error handling and sending the appropriate response based on the result of the service calls.

Please note that the actual implementation and logic for these functions reside in the petsDb service, which interacts with the database to perform the necessary operations.

Feel free to explore and interact with these services as part of your testing process.

## Swagger UI

You can access to the swagger service at http://localhost:8080/swagger-ui

## Contact

If you have any questions, feedback, or issues regarding this project, please feel free to contact me at jnhaussaire@hotmail.com
