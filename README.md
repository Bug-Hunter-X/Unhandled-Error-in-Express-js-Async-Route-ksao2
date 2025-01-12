# Unhandled Error in Express.js Async Route

This repository demonstrates a common error in Express.js applications: neglecting proper error handling within asynchronous route handlers.  The `bug.js` file showcases an Express.js application with an asynchronous route that lacks comprehensive error handling.  This can lead to the application crashing silently or behaving unexpectedly when errors occur during asynchronous operations.

The `bugSolution.js` file provides a corrected version with robust error handling, showing how to gracefully manage potential exceptions and return informative responses to the client.