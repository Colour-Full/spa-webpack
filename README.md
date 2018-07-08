# SPA Webpack Configuration

Generate a production and development ready configuration files for webapck

## Installing

```sh
$ yarn add ssh://git@rulsoft:11022/rulsoft/spa-webpack.git
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

and `yarn run wp-config`  will generate webpack.dev.js, webpack.prod.js and webpack.shared.config.js configuration files. 

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

If you need to make any amendments to the webpack configuration, feel free to edit the shared config file, env specific setting can be modified in the according config files. 

If you need to introduce any non spa-webpack dependencies to make your custom configuration work please raise an issue so we can discuss it within the team and decide if those need to be merged to master.
## List of Webpack plugins used in the configuration
  * [UglifyJSPlugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin),
  * [CleanWebpackPlugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin),
  * [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin),
  * [FlowBabelWebpackPlugin](https://github.com/jantimon/html-webpack-plugin),
  * [Dotenv](https://www.npmjs.com/package/dotenv-webpack)

## Built With

* [webpack](https://webpack.js.org/) - Static module bundler for modern JavaScript applications
* [copy-files](https://www.npmjs.com/package/copy-files) Streaming file copier
