# AMPScript Beautifier

Format (Beautify/Prettify) your SFMC AMPscript with this extension.

## Features

* Automatic formatting (indentation, methods, etc.).
* Setting of Case-sensitivity of the keywords.

#### [ To simplify your SFMC Dev click me! ](https://marketplace.visualstudio.com/items?itemName=FiB.ssjs-vsc)

## Usage

1. Mark your file as AMPscript (save as `.amp` or using the `Language Mode` selector)
2. Run `Format Document` command.

![Beautifier](https://raw.githubusercontent.com/FiB3/beautyAmp/493a2d95182d48dd3c951f59f4c52c4e850b2419/images/beautyAmp.gif)

The format command can also run automatically if your settings allow for it (settings: `editor.formatOnSave`).

## Extension Settings

This extension contributes the following settings:

* `beautyAmp.maxParametersPerLine`: How many method parameters can be located on one line?

* `beautyAmp.capitalizeVar`: Use upper case characters for 'VAR' keywords (false for lowercase).
* `beautyAmp.capitalizeSet`: Use upper case characters for 'SET' keywords (false for lowercase).
* `beautyAmp.capitalizeAndOrNot`: Use upper case characters for 'AND', 'OR', 'NOT' keywords (false for lowercase).
* `beautyAmp.capitalizeIfFor`: Use upper case characters for 'IF' and 'FOR' blocks keywords (false for lowercase).

Default values can be found in Features Contributions.

## Note:

Originally developed with Merkle DACH (former Isobar Switzerland) and now available to the developer community.

## Telemetry

This extension is collecting some telemetry in order to allow for future improvements and bugfixes.  

This extension respects your privacy: no personal information, API Keys nor script content is collected.
Telemetry can be disabled on the VSCode level.

## Known Issues

* Statements and For iterations are not fully formatted,
* NOT is not formatted

### [Issue Reporting on GitHub](https://github.com/FiB3/beautyAmp/issues)