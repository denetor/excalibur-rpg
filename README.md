# RPG


## Get Started

* Using [Node.js](https://nodejs.org/en/) 18 (LTS) and [npm](https://www.npmjs.com/)
* Run the `npm install` to install dependencies
* Run the `npm start` to run the development server to test out changes
   * [Webpack](https://webpack.js.org/) will build the [Typescript](https://www.typescriptlang.org/) into Javascript
   * [Webpack dev server](https://webpack.js.org/configuration/dev-server/) will host the script in a little server on http://localhost:8080/


## Publishing

* Run `npm run build:dev` to produce Javascript bundles for debugging in the `dist/` folder
* Run `npm run build:prod` to produce Javascript bundles for production (minified) in the `dist/` folder

The `dist/` folder can be deployed to a static web host. We recommend [Netlify](https://netlify.com) or [GitHub Pages](https://pages.github.com/) since they are free to use.


## TODO
- [x] Pulizia codice di shooter
- [ ] Ragionare sulla struttura da dare agli actor (tipologie, classi, ai, ...)
- [ ] Fare un primo livello di test con superficie vuota e personaggio tondo che vi si muove


## Struttura actors

