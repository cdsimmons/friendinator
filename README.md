# friendinator

Hello and welcome. This is a project with the intent to demonstrate MEAN stack knowledge. 

I wanted to try something new with this project, so I used an Angular seed generator. The one I used is called [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack). This generator got a lot of the boilerplate out of the way, and even generated user login functionality. After this, all I had to do was get a grip of the generated code, plug in the friends list, add in some APIs, and the project was quickly completed.

Because this is just a demo project, there are a lot of things that haven't been added that would have been nice. Such as fully implemented unit and integration tests, issue fixing (such as having to click Facebook login button twice to login and incorrect username saved by Google), and optimising and testing the code manually.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Ruby](https://www.ruby-lang.org) and then `gem install sass`
- [Grunt](http://gruntjs.com/) (`npm install --global grunt-cli`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `grunt serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.
