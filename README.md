[![The Internet Folks Logo](https://theinternetfolks.com/assets/images/logo.png)](https://theinternetfolks.com)

# @theinternetfolks/excel-formula

[![GitHub license](https://img.shields.io/github/license/theinternetfolks/excel-formula.svg)](https://github.com/theinternetfolks/excel-formula/blob/master/LICENSE)
[![Maintainer](https://img.shields.io/badge/maintainer-monkfromearth-green)](https://github.com/monkfromearth)
[![Downloads](https://img.shields.io/npm/dm/@theinternetfolks/excel-formula)](https://www.npmjs.com/package/@theinternetfolks/excel-formula)

Library to help you parse Excel Formulas to various formats, including JS. A fork of [excel-formula](https://www.npmjs.com/package/excel-formula) suitable for all JS-environments, with the least size.

## Installation

Install with npm

```bash
  npm install @theinternetfolks/excel-formula
```

Install with yarn

```bash
  yarn add @theinternetfolks/excel-formula
```

## Usage

#### Convert to Javascript

```javascript
import { ExcelFormula } from "@theinternetfolks/excel-formula";

console.log(ExcelFormula.toJS(`IF(1 + 1 = 2,"Hello","Goodbye")`));

// (1+1===2?"Hello":"Goodbye")
```

#### Get All Tokens

```javascript
import { ExcelFormula } from "@theinternetfolks/excel-formula";

console.log(ExcelFormula.getTokens(`IF(1 + 1 = 2,"Hello","Goodbye")`));

// F_tokens {TOK_SUBTYPE_STOP: 'stop', items: Array(11), index: -1, add: ƒ, addRef: ƒ, …}
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
