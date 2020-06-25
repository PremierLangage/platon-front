# Platon Front

A project for creating [custom web components](https://developer.mozilla.org/en/docs/Web/Web_Components) for [PLaTon](https://github.com/PremierLangage) project using [Angular elements](https://indepth.dev/web-components-with-angular-elements/).

## 🖥 Environment Support

* Angular `^9.0.0`
* Modern browsers and Internet Explorer 11+ (with [polyfills](https://angular.io/guide/browser-support))

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | |
| --------- | --------- | --------- | --------- | --------- | --------- |
| IE11, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions

## 📦 Installation

- Open a terminal window and run the following commands

```bash
git clone https://github.com/PremierLangage/platon-front
cd platon-front
./scripts/install.sh
```

 This script will check and install if needed the following npm packages globally in the npm registry of your system:

 - [Npm](https://www.npmjs.com/get-npm) node package manager.
 - [Angular CLI](https://cli.angular.io) command-line interface tool that is used to initialize, develop, scaffold, and maintain Angular applications.
 - [Nx CLI](https://nx.dev/angular/cli/overview) a set of Angular CLI power-ups for modern development.

> You may need to run the script in sudo mode.

## Angular Quick Start

TODO CREATE CUSTOM GUIDE

[Angular beginner tutorial](https://angular-templates.io/tutorials/about/learn-angular-from-scratch-step-by-step)

[Angular References](https://ngrefs.com)

## Nx Quick Start

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Nx Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## ⌨️ Development

### IDE

We recommend you to use [Visual Studio Code](https://code.visualstudio.com/) as your code editor for your development environment.
This code editor comes with an out of box support of Angular ecosystem.

Also we recommend you to install the [Angular Essentials](https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials) extension inside vscode.
This extension provides a set of tools (snippets, graphical CLI, language service...) that power up Angular development.

Run the script `./scripts/serve.sh` for an Angular dev server and navigate to `http://127.0.0.1:4200`. The app will automatically rebuild if you change any of the source files.

## 🔨 Build

Run the script `./scripts/build.sh` to build the project in a production mode. The build artifacts will be stored in the `dist` directory.

## Running tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `nx affected:test` to execute the unit tests affected by a change.

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand the workspace

Run `nx dep-graph` to see a diagram of the dependencies of the project.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

## 🤝 Contributing

We welcome all contributions. Please read our [CONTRIBUTING.md](https://github.com/PremierLangage/platon-front/blob/master/CONTRIBUTING.md) first. You can submit any ideas as [pull requests](https://github.com/PremierLangage/platon-front/pulls) or as [GitHub issues](PremierLangage/platon-front/issues).

## Project Architecture

TODO...
