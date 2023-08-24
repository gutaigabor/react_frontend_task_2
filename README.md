# Movie Catalog Documentation

## Install and start

If docker is installed on the computer.

```
cd {{project_location}}/movie-catalog
docker-compose up
```

Start without docker:

```
cd {{project_location}}/movie-catalog
npm install
npm run dev
```

Open in browser:
http://localhost:3000/

Other device then the one running the app:
http://192.168.0.187:3000/

## Specification

Create a movie catalog site. The styling of the website is up to the developer.

The user should be able to:
- View the list of movies
- Filter by age restriction
- View the movie's details
- Add new movie
- Delete movies
- Edit movies

The details of one given movie should contain:
- Title
- Description
- Age restriction

Helper mock JSON server site: https://crudcrud.com

The task should be solved with own code, ReactJS and Typescript. The code should be documented, and should contain an installation guide.

## Documentation

### Used frameworks and technologies

- App creation: Vite

- Storage: Redux

- REST communication: Redux Toolkit

- Styling: Tailwind CSS

- Containerization: Docker

- Language: Typescript

### Structure

- components: reusable UI elements
    - Button: customizable button components with own style
    - Input: customizable input components with own style
    - MovieItem: movie list item
    - NavBar: navigation top bar

- assets: media and other assets

- containers: components with business logic
    - Main: HOC for processes functions and parts for all pages

- interfaces: types and interfaces
    - Movie: Movie interface

- pages: components that are under given path
    - Home: / - landing page
    - Movies: /movies - movie list page
    - AddMovie: /add-movie path - add new movie
    - EditMovie: /edit-movie path - edit chosen movie
    - ViewMovie: /view-movie - view chosen movie details
    - Error: /* - handles non-existent paths

- reducers: redux reducers for storage and REST API communication
    - api: handles initialization and config of REST API communications
    - movie: handles movie content related storage and REST API communication

- environment: .env

- redux store init and config: store.ts

- route config: routes.tsx

- root component: main.tsx

- root styling file: index.css

## Time investment

- Project setup (Vite create, Redux store, Tailwind CSS) - 1.5h
- Create basic components - 1h
- Setup crudcrud communication - 0.5h
- Finalizing components - 2h
- Styling (media screens, interactivity, design): 2h
- Documentation: 1h
- Sum: 8h

## Scaling, possible improvements

- Own backend services
- Own database
- Search handled by backend
- User authentication, authorization
- Unit tests
- Images for movie elements for better design