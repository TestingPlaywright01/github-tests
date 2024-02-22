# Github Login Tests

This project tests basic positive and negative scenarios for GitHub login page

## Getting Started

These instructions will cover information on how to run tests through docker image

### Prerequisites
Before you begin, ensure you have the following installed:
- Node.js
- npm (comes with Node.js)
- Docker installed on your machine. See [Docker's official installation guide](https://docs.docker.com/get-docker/).
- Check if Docker is installed by running ``` docker --version ``` from terminal

### Running tests

- Clone the repository to your local machine:

- After repo is cloned, build your Docker image by running

````
docker build -t github-tests .
````
- After successful build run tests in Docker

````
docker run --rm github-tests
````

### Running tests locally

run 

````
npx playwright test 
````
or
````
npx playwright test --headed
````
if you would like to run tests in headed mode (to load up the browser window)