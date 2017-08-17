# fin-hypergrid-sorting-demo

This fork of [fin-hypergrid-browserify-template](https://github.com/openfin/fin-hypergrid-browserify-template) includes sample code for sorting.

### Features

Sorts multiple columns in mixed directions.

\[This section needs expansion.]

### Node Version
`> 5.1.0`

### Try it out

```bash
git clone https://github.com/fin-hypergrid/fin-hypergrid-sorting-demo.git
npm install
gulp
open index.html
```

### What happened?

The above series of commands **downloads, builds, and runs** the demo:
* `git clone ...`
    * downloads the demo
* `npm install`
    * install [Browserify](https://www.npmjs.com/package/browserify) globally — but only if not already available
    * install external dependencies (just [Hypergrid](https://www.npmjs.com/package/fin-hypergrid) in this case) — but ony if not already installed
* `gulp`
    * create `./build` directory — but only if not already there
    * run Browserify to create a single bundled file (`./build/index.js`) from:
        * `./index.js` - main entry point
        * `fin-hypergrid` npm module
        * `fin-hypergrid-sorting-plugin` - plug-in API for sorting
        * `datasaur-sorter` - data transformers for sorting
* `open index.html` runs the demo page
    * uses the `file://` protocol (no server needed)
    * requests the bundled file (`build/index.js`) via a `<script>` tag
