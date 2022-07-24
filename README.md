# another-dynv6-ddns-client
[![Semantic Versioning 2.0.0](https://img.shields.io/badge/semver-2.0.0-standard.svg)](https://semver.org/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Linux](https://svgshare.com/i/Zhy.svg)](https://svgshare.com/i/Zhy.svg)
[![Windows](https://svgshare.com/i/ZhY.svg)](https://svgshare.com/i/ZhY.svg)
[![made-with-typescript](https://img.shields.io/badge/Made%20with-TypeScript-0000e0.svg)](https://www.typescriptlang.org/)
[![Npm package license](https://badgen.net/npm/license/@ii887522/dynv6-ip-update-client)](https://npmjs.com/package/@ii887522/dynv6-ip-update-client)
[![Npm package dependents](https://badgen.net/npm/dependents/@ii887522/dynv6-ip-update-client)](https://npmjs.com/package/@ii887522/dynv6-ip-update-client)

unofficial dynv6.com DDNS client.

- [another-dynv6-ddns-client](#another-dynv6-ddns-client)
  - [Usage](#usage)
    - [test project](#test-project)
    - [compile standalone executable binary file](#compile-standalone-executable-binary-file)
  - [Coding style](#coding-style)

## Usage
```sh
dynv6-client.exe <Auth-Key>
```
`Auth-Key`: must exists, it is domain`s Benutzername.


### test project
```sh
node index.js <Auth-Key>
```
### compile standalone executable binary file
```sh
npm run build
```

## Coding style
This project follows [Javascript Standard Style](https://standardjs.com/). Please familiarize yourself with the rules provided in the coding style and
make sure all the proposed code changes in your commits are conforming to the style before making a merge request. You can also make use of
StandardJS - Javascript Standard Style which is a [Visual Studio Code](https://code.visualstudio.com/) plugin and `npm run lint` command under the
[Lint the project](https://github.com/ii887522/dynv6-ip-update-client#lint-the-project) section to support you.