# AMPScript Beautifier

Format (Beautify/Prettify) your SFMC AMPscript with this extension.

Originaly developed with Isobar Switzerland and now available to the developer community.

## Features

* Automatic formatting (indentation, methods, etc.).
* Setting of Case-sensitivity of the keywords.

![Beautifier](https://github.com/fib-at-isobar/beautyAmp/blob/master/images/beautyAmp.gif?raw=true)

## Extension Settings

This extension contributes the following settings:

* `beautyAmp.maxParametersPerLine`: How many method parameters can be located on one line?

* `beautyAmp.capitalizeVar`: Use upper case characters for 'VAR' keywords (false for lowercase).
* `beautyAmp.capitalizeSet`: Use upper case characters for 'SET' keywords (false for lowercase).
* `beautyAmp.capitalizeAndOrNot`: Use upper case characters for 'AND', 'OR', 'NOT' keywords (false for lowercase).
* `beautyAmp.capitalizeIfFor`: Use upper case characters for 'IF' and 'FOR' blocks keywords (false for lowercase).

Default values can be found in Features Contributions.

## Known Issues

* Statements and For iterations are not fully formatted,
* NOT is not formatted
* There are rare cases when function parameters are not formatted properly.
* Function and Variable names are not handled.
* HTML beautifier is currently not included.
