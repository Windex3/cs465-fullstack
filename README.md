# CS465

## Compare and contrast the types of frontend development you used in your full-stack project, including Express HTML, JavaScript, and the single-page application (SPA).
In this project, I used Express with Handlebars templates to build the customer-facing website and Angular to build the administrative single-page application. The Express website renders HTML on the server, while the Angular SPA uses JavaScript and TypeScript to update content without reloading the entire page. The SPA provides a more interactive experience for administrators managing travel packages.

## Why did the backend use a NoSQL MongoDB database?
MongoDB was used because it provides a flexible way to store and manage data using documents rather than traditional relational tables. This worked well for storing travel package information such as destinations, prices, and descriptions. MongoDB also integrates well with Node.js and Express through Mongoose.

## How is JSON different from JavaScript, and how does JSON tie together the frontend and backend development pieces?
JSON is a data format used to store and exchange information, while JavaScript is a programming language used to create functionality. In this project, JSON allowed the Express backend to send travel package data to the Angular frontend through API requests. This made it possible for both parts of the application to communicate and display information. 

## Provide instances in the full-stack process when you refactored code to improve functionality and efficiency, and name the benefits that come from reusable user interface (UI) components.
One example of refactoring was converting the original static HTML pages into Handlebars templates using reusable headers, footers, and dynamic travel data. I also used reusable Angular components, such as the trip cards and navigation bar, for the administrative application. Reusable components reduce duplicate code, make maintenance easier, and allow changes to be applied consistently throughout the application.

## Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full-stack application.
API endpoints allow the frontend and backend to communicate through HTTP requests. In this project, GET requests retrieved travel packages, POST requests added new packages, PUT requests updated existing packages, and DELETE requests removed packages. I used Postman to test API endpoints and verify that they returned the expected responses. Adding JWT authentication introduced another layer of testing because protected endpoints required a valid token before allowing changes to travel packages.

## How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
This course helped me gain a better understanding of how full-stack web applications are developed and how the frontend, backend, and database work together. I gained experience using technologies such as Node.js, Express, Angular, MongoDB, and REST APIs. I also learned more about authentication, API testing, and organizing code into reusable components. These skills will help me as I pursue an entry-level software development position after graduation.
