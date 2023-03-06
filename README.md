# GUI

This is a React-based start menu (so far) for an application. It features a background image, the current time and date, and text prompting the user to slide/click to start.
## Prerequisites

Before you can compile and run this app, you'll need to have the following tools installed on your system:

* Node.js (v12 or higher)
* npm (v6 or higher)

## Installation

To install the dependencies required by this app, run the following command in the root directory of the project:

```
pip install flask
npm install
npm install --openssl-legacy-provider
npm i react-router-dom@5.2.0
npm install react-bootstrap
```

This will install all the necessary packages listed in the package.json file.
## Compilation

To compile this app, run the following command in the root directory of the project:

```npm run build```

This will create a production build of the app in the build directory.
## Running

To run the app, you can use a local web server or host the build directory on a web server. Here's an example of how to use a local web server to run the app:

* Install the serve package globally by running the following command:

```npm install -g serve```

* If you receive an error, run it with ```sudo```

Navigate to the build directory by running the following command:

```bash

cd build
```

Start the local web server by running the following command:

```bash
serve
```

* Open a web browser and go to http://localhost:5000 to view the app.

License

This project is licensed under the MIT License.
