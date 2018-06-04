# SpartaHackV

## What is this?

This Repo holds the Angular front-end for SpartaHack V's website.

__Frameworks__
* [Angular 6.0.7](https://angular.io/guide/quickstart)
* [Bootstrap 4.1.1](https://getbootstrap.com/docs/4.1/getting-started/introduction/)

## Before you devlop...
1. Install [NodeJS](https://nodejs.org/en/) if you have not already
2. Install [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.
    * In a command prompt, run `npm install -g @angular/cli`
3. Install your IDE of choice.
    * My Go-To for Angular Development is [Visual Studio Code](https://code.visualstudio.com). It's free, integrates well with git, and handles TypeScript fairly well. 
    * Extensions I use in VS Code:
        * TSLint: A linter for TypeScript, although it now displays all of its warning as errors so it's been disabled recently
        * Auto Import: A life-saver when you need to add a component from an npm package. It'll find it for you!
        * vscode-icons: Just makes things a bit nicer to look at
        * Angular v6 Snippets: Literally writes code for you! Creates Components, which can be a pain to get right see a list of all of the options available [here](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2)
        
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development 'Best Practices'
* Components are your best friend. They keep code organized, reusable, and easy to find.
* Bootstrap is your friend that it can be fun to go to the bar with sometimes. _Don't be afraid to write your own css!_
    * One thing you __NEED__ Bootstap for is its [grid system](https://getbootstrap.com/docs/4.1/layout/grid/). It's easy to use and can take care of scaling problems for you if used correctly!
)

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
