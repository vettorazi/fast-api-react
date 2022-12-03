# Boilerplate for FastAPI as backend for React apps

This boilerplate project is useful for ML applications running python as backend.
The backend has a get/post endpoints already setup and the react app reads and writes to it.

## Backend:

### Instructions to create a project from scratch:

- Create your pyenv (tutorial: https://realpython.com/intro-to-pyenv/#why-use-pyenv)
  `pip install fastapi` (fastapi library)
  `pip install "uvicorn[standard]"` (ASGI server)
- create your own file (tutorial: https://fastapi.tiangolo.com/)
  -To test commands: access: http://127.0.0.1:8000/docs

### To run the server:
`uvicorn server:app --reload`

## Frontend:
npm install

or from the begining:
`npm create vite@latest` > React
