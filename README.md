# Aura generator [![Build Status](https://secure.travis-ci.org/yeoman-aura/generator-aura.png?branch=master)](http://travis-ci.org/yeoman-aura/generator-aura)

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

### Widget
Generates a widget in `app/widgets`.

Example:
```bash
yo aura:widget sample
```

Produces `app/widgets/sample/main.js`:

### Extension
Generates a extension in `app/extensions`.

Example:
```bash
yo aura:extension storage
```

Produces `app/extensions/storage.js`:

## Contribute

See the [contributing docs](https://github.com/yeoman/yeoman/blob/master/contributing.md)


## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
