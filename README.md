# AMPScript Beautifier

Format/Beautify/Prettify your AMPscript with this extension.

Originaly developed for Isobar Switzerland and now released to SFMC Developer community.

## Features

* Automatic formatting (indentation, methods, etc.).
* Setting of Case-sensitivity of the keywords.

## Extension Settings

This extension contributes the following settings:

* `beautyAmp.maxParametersPerLine`: How many method parameters can be located on one line?

* `beautyAmp.capitalizeVar`: Use upper case characters for 'VAR' keywords (false for lowercase).
* `beautyAmp.capitalizeSet`: Use upper case characters for 'SET' keywords (false for lowercase).
* `beautyAmp.capitalizeAndOrNot`: Use upper case characters for 'AND', 'OR', 'NOT' keywords (false for lowercase).
* `beautyAmp.capitalizeIfFor`: Use upper case characters for 'IF' and 'FOR' blocks keywords (false for lowercase).

## Known Issues

* Statements and For iterations are not fully formatted,
* NOT is not formatted
* There are rare cases when function parameters are not formatted properly.
* Function and Variable names are not handled.
* HTML beautifier is currently not included.
