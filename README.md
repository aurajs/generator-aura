# Aura generator for Yeoman [![Build Status](https://secure.travis-ci.org/yeoman-aura/generator-aura.png?branch=master)](http://travis-ci.org/yeoman-aura/generator-aura)

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

Maintainer: [Vitaly Domnikov](https://github.com/dotCypress)

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

* [aura:widget](#widget)
* [aura:extension](#extension)
* [aura:styles](#styles)

### Widget
Generates a widget in `app/widgets`.

Example:
```bash
yo aura:widget sample
```

Produces `app/widgets/sample/main.js`

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
