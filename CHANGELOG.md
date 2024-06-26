# Change Log

## [Unreleased]
- In progress - see "Known Issues" section.

## [0.5.12] - 2024-05-27
### Fixed
- `$` character formatting problems (causing duplication).

## [0.5.11] - 2024-05-23
### Fixed
- multiple formatting issues, including broken Output/Print blocks

### Added
- Telemetry for better user support.

## [0.5.10] - 2024-04-25
### Changed
- Using Prettify v3.
- Bundled extension to decrease installer size.

## [0.5.8] - 2024-02-13
### Changed
- Rollback of the bundled version, as bundling did not work in released version.

## [0.5.5] - 2024-02-07
### Changed
- Bundled extension to decrease installer size.

## [0.5.4] - 2024-02-06
### Fixed
- Formatting of variables, strings, etc. that collided with key-words. E.g.: `SET @myNextVar = "my set variable".

## [0.5.3] - 2023-12-07
### Changed
- Added HTML (and JS) formatting.
- Improved formatting of comments.
- Shows an error when HTML is malformed and cannot be formatting, formatting code for AMPscript only.

### Fixed
- Various AMPscript formatting issues.

## [0.5.0] - 2023-11-09
### Changed
- Logo.

### Fixed
- AMPscript languages support for other extensions.
- Fixed bug, when formatting failed when SSJS Manager is installed.

## [0.4.0] - 2021-07-28
### Fixed
- Bug on formatting IF-ELSE statements after a comment.
- Bug on formatting "NEXT" keyword inside a string.
- Detection of the Indentation Character (insertSpaces) and Tab Size (tabSize) of the editor.

### Changed
- Separation of formatting logic in order to increase quality.
- Extension icon update.

## [0.3.2] - 2020-10-28
### Added
- Improved to the Tabs/Spaces behaviour, more in line with editor wide settings.
- Fix to the commenting issue (when comments have been changed to one-lined)

## [0.3.1] - 2020-08-07
### Added
- Usage section in ReadMe and Gif showcasing the extension
- initial license (BSD)

### Fixed
- bug which lead to incomplete method parameter formatting
- bug breaking IFF statement

## [0.3.0] - 2020-07-22
### Added
- 1st official release of the extension.
- Small bugfixes.
- ChangeLog improvement.

## [0.2.0] - 2020-06-19
### Fixed
- Several small fixes.

## [0.1.6] - 2020-06-04
### Added
- Added option for maximum method parameters per line.
- Separated SET and VAR capitalisation parameters.
### Fixed
- Improved comment handling.

## [0.1.5] - 2020-06-04
- Initial internal release.