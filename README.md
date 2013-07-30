# Aura generator for Yeoman [![Build Status](https://secure.travis-ci.org/aurajs/generator-aura.png?branch=master)](http://travis-ci.org/aurajs/generator-aura)

<img src="http://en.gravatar.com/userimage/3193976/53730a1d436c157bf770c04232c2a72b.png?size=200" width="200px"/>


```
=====================================
                             _
      /\                    (_)
     /  \  _   _ _ __ __ _   _ ___
    / /\ \| | | | '__/ _` | | / __|
   / ____ \ |_| | | | (_| |_| \__ \
  /_/    \_\__,_|_|  \__,_(_) |___/
                           _/ |
                          |__/
=====================================
```

## Usage

First make a new directory, and `cd` into it:
```
mkdir my-awesome-project && cd $_
```

Then install `generator-aura`:
```
npm install generator-aura
```

Run `yo aura`, optionally passing an app name:
```
yo aura [app-name]
```

Finally, install npm and bower dependencies:
```
npm install && bower install --dev
```

## Generators

Available generators:

* [aura:component](#aura_component)
* [aura:extension](#extension)
* [aura:styles](#styles)

### Aura Component
Generates a component in `app/aura_components`.

Example:
```bash
yo aura:component sample
```

Produces `app/aura_components/sample/main.js`

### Extension
Generates a extension in `app/extensions`.

Example:
```bash
yo aura:extension storage
```

Produces `app/extensions/storage.js`

### Styles
Generates cool styles.

Example:
```bash
yo aura:styles
```

#### Supported types:

* Default (normalize.css)
* Twitter Bootstrap
* Twitter Bootstrap for Compass
* Zurb Foundation

## Contribute

See the [contributing docs](https://github.com/yeoman/yeoman/blob/master/contributing.md)

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
