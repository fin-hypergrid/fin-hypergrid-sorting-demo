# fin-hypergrid-sorting-demo

This fork of [fin-hypergrid-browserify-template](https://github.com/fin-hypergrid/fin-hypergrid-browserify-template) includes sample code for sorting.

### Features

Sorts multiple columns in mixed directions.

\[This section needs expansion.]

### Node Version
\>= `5.1.0`

### Hypergrid version
\>= `3.0.0`

> NOTE: As of this writing, v3.0.0 has not yet been released, nor is it in a committed branch. To build this demo today, pull #619 and build it in another folder; then edit package.json dependencies to reference that folder (_e.g.,_ `"fin-hypergrid": "file:../fin-hypergrid"` or a relative path to wherever you put it).

### Try it out

```bash
git clone https://github.com/fin-hypergrid/fin-hypergrid-sorting-demo.git
cd fin-hypergrid-sorting-demo
npm install
gulp
open index.html
```

### What happened?

The above series of commands **downloads, builds,** and **runs** the demo:
* `git clone ...`
    * downloads the demo
* `cd ...`
    * change to the new directory
* `npm install`
    * install dev dependencies (such as [Browserify](https://www.npmjs.com/package/browserify)) used by gulp below to create the build
    * install external dependencies:
        * `fin-hypergrid` npm module
        * `fin-hypergrid-sorting-plugin` - plug-in API for sorting
        * `datasaur-sorter` - data transformers for sorting
* `gulp`
    * creates the `./build` directory (if not already there)
    * runs Browserify to create a single bundled file (`./build/index.js`) from `./index.js` and the above dependencies
* `open index.html` runs the demo page
    * uses the `file://` protocol (no server needed)
    * requests the bundled file (`build/index.js`) via a `<script>` tag
    * note that `open` is only available on macOS; on other systems manually open the file in a browser

### To see it in action

* Double-click on column header to sort by that column
* Double-click again to change the direction of the sort
* Double-click a third time to remove the sort
* Ctrl-double-click on another column to create a subordinate sort, _etc._