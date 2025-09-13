# Copilot Instructions for survey-app

## Project Overview
- This is a full-stack survey application with a React frontend (`frontend/`) and a Node.js/Express/MongoDB backend (`backend/`).
- The frontend uses Create React App conventions and React Router for navigation.
- The backend exposes REST APIs and connects to MongoDB using Mongoose.

## Key Workflows
### Frontend
- **Start dev server:** `npm start` in `frontend/` (runs on http://localhost:3000)
- **Run tests:** `npm test` in `frontend/` (Jest + React Testing Library)
- **Build for production:** `npm run build` in `frontend/`
- **Proxy setup:** API requests to `/api/*` are proxied to the backend at `http://localhost:5000` (see `frontend/package.json`)
- **Entry point:** `src/index.js` renders `App` from `src/App.js`
- **Testing pattern:** Tests are colocated (e.g., `App.test.js` for `App.js`). Use React Testing Library conventions.

### Backend
- **Start dev server:** `npm run dev` in `backend/` (uses nodemon)
- **Start production server:** `npm start` in `backend/`
- **Environment config:** Uses `.env` for secrets (e.g., `PORT`, `MONGO_URI`).
- **MongoDB connection:** See `server.js` for connection logic. Default URI is `mongodb://127.0.0.1:27017/survey-app`.
- **API route example:** `/api/ping` returns `{ message: 'pong from backend' }`.

## Patterns & Conventions
- **Frontend:**
  - Use functional components and hooks.
  - Styles are in CSS files (e.g., `App.css`).
  - Use `axios` for API calls.
  - Routing via `react-router-dom`.
- **Backend:**
  - Use Express middleware for JSON and CORS.
  - Organize models, routes, and controllers in separate files (expand as app grows).
  - Use JWT for authentication (see dependencies).
  - Use Mongoose for data modeling.

## Integration Points
- **API communication:** Frontend calls backend via `/api/*` endpoints, proxied in development.
- **Environment variables:** Backend reads from `.env` (not committed).
- **Testing:** Frontend tests use Jest/React Testing Library; backend tests not present by default.

## Examples
- To add a new API route, create an Express route in `backend/server.js` or a new route file and import it.
- To add a new page/component, create a React component in `frontend/src/` and add a route in `App.js`.
- To run both servers for local development, start each in its respective folder.

## References
- See `frontend/README.md` for more on Create React App workflows.
- See `backend/server.js` for backend setup and MongoDB connection.

---
**Update this file if you add new major features, change architecture, or introduce new conventions.**
