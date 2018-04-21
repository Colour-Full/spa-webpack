# SPA Webpack Configuration

Generate a production and development ready configuration files for webapck

## Installing

```sh
$ yarn add git ssh://git@rulsoft:11022/rulsoft/spa-webpack.git
```

## Using

Add the following to your `package.json`

```json
{
    "scripts": {
        "wp-config": "spa-webpack"
    }
}
```

and `yarn run wp-config`  will generate webpack.dev.js and webpack.prod.js configuration files. 

The development configuration can be used with spa-server module out of the box. Just set `HOT_MODULES` variable to true. Keep in mind that this will delete the bundle.js file in dist/public if there is any. This is done to enforce a fresh production build each time changes are made. 

For production you will need to use a `yarn run prodbuild` script, this is provided with the `spa-boilerplate`. The same cleaning process of any old bundle will be applied durring the production bunduling.

By default the output will be put in `./dist/public/bundle.js` if you need to change that you can use the OUTPUT_PATH variable in your script like that:


```json
{
    "scripts": {
        "wp-config": "OUTPUT_PATH=my/custom/output spa-webpack"
    }
}
```

The path will be relative to the root folder of the project so the above will resolve to `./my/custom/path` 


## Built With

* [webpack](https://webpack.js.org/) - Static module bundler for modern JavaScript applications
* [copy-files](https://www.npmjs.com/package/copy-files) Streaming file copier
