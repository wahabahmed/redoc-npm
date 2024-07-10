# redoc-npm
This setup provides a straightforward way to serve OpenAPI documentation and can be easily extended or customized to fit more specific needs.

# Project Structure
api-docs/
├── public/
│   ├── openapi.yaml
│   ├── pet-openapi.yaml
│   └── index.html
├── package.json
└── server.js

# Install Required Dependencies
`npm install http-server --save-dev`

# Run the Project
`npm start`

Open a web browser and navigate to http://localhost:8080. You should see the Redoc interface rendering your OpenAPI specification.





