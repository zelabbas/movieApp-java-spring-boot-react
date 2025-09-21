## How to Run the Project

### Backend (Spring Boot)

1. Make sure you have Java 21 or newer installed.
2. Navigate to the backend folder:
	```sh
	cd movies
	```
3. Start the backend server:
	```sh
	./mvnw spring-boot:run
	```
	Or, if you have Maven installed globally:
	```sh
	mvn spring-boot:run
	```

The backend will run on `http://localhost:8080` by default.

### Frontend (React)

1. Make sure you have Node.js and npm installed.
2. Navigate to the frontend folder:
	```sh
	cd moviesclient
	```
3. Install dependencies:
	```sh
	npm install
	```
4. Start the React development server:
	```sh
	npm start
	```

The frontend will run on `http://localhost:3000` by default.
# movieApp-java-spring-boot-react
A full-stack movie application built with Java Spring Boot for the backend and React for the frontend. This app allows users to browse, search, and manage a collection of movies. It demonstrates RESTful API development, CRUD operations, and seamless integration between a modern React UI and a Spring Boot backend.

## Screenshots

Below are some screenshots showcasing the professional UI and features of the app:

<div align="center">
	<img src="./moviesclient/public/Screenshot%20from%202025-09-21%2011-52-19.png" alt="Movie List Screenshot" width="700" />
	<br>
	<img src="./moviesclient/public/Screenshot%20from%202025-09-21%2011-52-57.png" alt="Movie Detail Screenshot" width="700" />
</div>
