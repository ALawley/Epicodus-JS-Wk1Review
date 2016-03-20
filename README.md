# Epicodus JavaScript Week 1 Code Review

#### GitHub Search, 3/20/2016

#### By Anna Lawley

## Description

This app is an exercise in managing JavaScript dependencies using node, and pulling data from an API. This app will let a user enter a GitHub username, and then search for and display all repositories on GitHub belonging to that user.

## Setup/Installation Requirements

* Clone this repository.
* Make sure you have Node and Bower installed:
    * For Node:
        * Find the correct installer for your operating system on the [Node website](https://nodejs.org/en/download/)
    * For Bower:

      ```
      $ npm install bower -g
      ```  
* Create the file .env in the top level of the cloned directory, with the following line of code:

      ```
      exports.apiKey = "$APIKEY";
      ```  

  where $APIKEY is a GitHub API Key. This can be obtained from the "Personal Access Tokens" tab of your GitHub account.

* In the top level of your directory run:

    ```
    $ npm install
    ```

    ```
    $ bower install
    ```

    ```
    $ gulp build --production
    ```

    ```
    $ gulp serve
    ```
* A new browser should open to localhost:3000

## Technologies Used

Javascript, Node, Gulp, Bower, Sass

### License

This software is licensed under the MIT license.

Copyright (c) 2016 Anna Lawley

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
