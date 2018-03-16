const path = require('path');

module.exports = {
  'root': true,
  'parser': 'babel-eslint',

  'env': {
    'amd': true,
    'es6': true,
    'jest': true,
    'node': true,
    'browser': true,
    'serviceworker': true,
  },

  'parserOptions': {
    'ecmaVersion': 2017,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
      'objectLiteralDuplicateProperties': false
    },
    'codeFrame': true, // Show the code frame in the reporter
  },

  'plugins': [
    'react',
    'babel',
    'import',
  ],

  'settings': {
    'react': {
      'pragma': 'React',  // Pragma to use, default to "React"
      'version': '16.2' // React version, default to the latest React stable release, needed also for react/no-deprecated
    },
    // Avoid the copious amount of fs.statSync/module parse calls required to correctly report errors
    'import/cache': 100,
    // File extensions that will be parsed as modules and inspected for exports
    'import/extensions': ['.js', '.jsx'],
    // Import resolvers
    'import/resolver': {
      'node': {
        moduleDirectory: 'node_modules',
      },
    },
  },

  'rules': {
    // babel inserts `'use strict';` for us
    'strict': [2, 'never'],

    /** ES6 section http://eslint.org/docs/rules/#ecmascript-6 */
    // enforces no braces where they can be omitted
    'arrow-body-style': [2, 'as-needed', { 'requireReturnForObjectLiteral': false }],
    // require parens in arrow function arguments
    'arrow-parens': [2, 'as-needed'],
    // require space before/after arrow function's arrow
    'arrow-spacing': [2, { 'before': true, 'after': true }],
    // require trailing commas in multiline object literals
    'comma-dangle': [2, {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'ignore',
    }],
    // enforce the spacing around the * in generator functions
    'generator-star-spacing': [2, {
      'before': false,
      'after': true,
      'method': { 'before': true, 'after': true },
    }],
    // disallow modifying variables of class declarations
    'no-class-assign': 2,
    // disallow modifying variables that are declared using const
    'no-const-assign': 2,
    // disallow duplicate class members
    'no-dupe-class-members': 2,
    // disallow symbol constructor
    'no-new-symbol': 2,
    // Require let or const instead of var
    'no-var': 2,
    // disallow unnecessary computed property keys in object literals
    'no-useless-computed-key': 2,
    // disallow unnecessary constructor
    'no-useless-constructor': 2,
    // disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': 2,
    // require method and property shorthand syntax for object literals
    'object-shorthand': [2, 'always', { 'avoidQuotes': true }],
    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': [2, { 'allowNamedFunctions': true }],
    // suggest using of const declaration for variables that are never modified after declared
    // destructuring:all means if some variable within destructuring is modified later(let),
    // even if others never(const), whole destructuring can be defined as let
    'prefer-const': [2, { 'destructuring': 'all', 'ignoreReadBeforeAssign': true }],
    // disallow parseInt() in favor of binary, octal, and hexadecimal literals
    'prefer-numeric-literals': 2,
    // Suggest using the spread operator instead of .apply()
    'prefer-spread': 2,
    // use rest parameters instead of arguments
    'prefer-rest-params': 2,
    // require symbol descriptions
    'symbol-description': 2,
    // enforce usage of spacing in template strings
    'template-curly-spacing': 2,
    // enforce spacing around the * in yield* expressions
    'yield-star-spacing': [2, 'after'],


    /** Best Practices section http://eslint.org/docs/rules/#best-practices **/
    // specify curly brace conventions for all control statements
    'curly': [2, 'multi-line'],
    // encourages use of dot notation whenever possible
    'dot-notation': 2,
    // enforces consistent newlines before or after dots
    'dot-location': [2, 'property'],
    // require the use of === and !==
    'eqeqeq': 2,
    // disallow the use of alert, confirm, and prompt
    'no-alert': 2,
    // disallow use of arguments.caller or arguments.callee
    'no-caller': 2,
    // disallow division operators explicitly at beginning of regular expression
    'no-div-regex': 2,
    // disallow else after a return in an if
    'no-else-return': 2,
    // disallow Unnecessary Labels
    'no-extra-label': 2,
    // disallow comparisons to null without a type-checking operator
    'no-eq-null': 2,
    // disallow use of eval()
    'no-eval': 2,
    // disallow adding to native types
    'no-extend-native': 2,
    // disallow unnecessary function binding
    'no-extra-bind': 2,
    // disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': 2,
    // disallow assignments to native objects or read-only global variables
    'no-global-assign': 2,
    // disallow use of eval()-like methods
    'no-implied-eval': 2,
    // disallow usage of __iterator__ property
    'no-iterator': 2,
    // disallow use of labels for anything other then loops and switches
    'no-labels': [2, { 'allowLoop': true, 'allowSwitch': false }],
    // disallow unnecessary nested blocks
    'no-lone-blocks': 2,
    // disallow use of multiple spaces
    'no-multi-spaces': [2, {'ignoreEOLComments': true}],
    // disallow use of multiline strings
    'no-multi-str': 2,
    // disallow use of new operator when not part of the assignment or comparison
    'no-new': 2,
    // disallow use of new operator for Function object
    'no-new-func': 2,
    // disallows creating new instances of String, Number, and Boolean
    'no-new-wrappers': 2,
    // disallow use of (old style) octal literals
    'no-octal': 2,
    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    'no-octal-escape': 2,
    // disallow usage of __proto__ property
    'no-proto': 2,
    // disallow declaring the same variable more then once
    'no-redeclare': [2, { 'builtinGlobals': true }],
    // disallow unnecessary return await
    'no-return-await': 2,
    // disallow use of `javascript:` urls.
    'no-script-url': 2,
    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 2,
    // disallow use of comma operator
    'no-sequences': 2,
    // restrict what can be thrown as an exception
    'no-throw-literal': 2,
    // disallow unmodified conditions of loops
    // http://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 2,
    // disallow usage of expressions in statement position
    'no-unused-expressions': 2,
    // disallow unused labels
    'no-unused-labels': 2,
    // Disallow unnecessary escape usage
    'no-useless-escape': 2,
    // disallow use of void operator
    'no-void': 2,
    // disallow use of the with statement
    'no-with': 2,
    // require using Error objects as Promise rejection reasons
    'prefer-promise-reject-errors': 2,
    // require use of the second argument for parseInt()
    'radix': 2,
    // require immediate function invocation to be wrapped in parentheses
    // http://eslint.org/docs/rules/wrap-iife.html
    'wrap-iife': [2, 'outside', { 'functionPrototypeMethods': true }],
    // require or disallow Yoda conditions
    'yoda': 2,


    /** Variables section http://eslint.org/docs/rules/#variables **/
    // disallow the catch clause parameter name being the same as a variable in the outer scope
    'no-catch-shadow': 2,
    // disallow deletion of variables
    'no-delete-var': 2,
    // disallow var and named functions in global scope
    'no-implicit-globals': 2,
    // disallow labels that share a name with a variable
    'no-label-var': 2,
    // disallow self assignment
    'no-self-assign': 2,
    // disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 2,
    // disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef': 2,
    // disallow declaration of variables that are not used in the code
    'no-unused-vars': [2, { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': true }],
    // disallow use of variables before they are defined
    'no-use-before-define': [2, { 'functions': false, 'classes': true }],


    /** Possible Errors section http://eslint.org/docs/rules/#possible-errors **/
    // enforce “for” loop update clause moving the counter in the right direction.
    'for-direction': 2,
    // enforce return statements in getters
    'getter-return': 2,
    // disallow comparing against -0. Use Object.is(x, -0)
    'no-compare-neg-zero': 2,
    // disallow assignment in conditional expressions
    'no-cond-assign': [2, 'always'],
    // disallow use of constant expressions in conditions
    'no-constant-condition': [2, { 'checkLoops': false }],
    // disallow control characters in regular expressions
    'no-control-regex': 2,
    // disallow duplicate arguments in functions
    'no-dupe-args': 2,
    // Creating objects with duplicate keys in objects can cause unexpected behavior in your application
    'no-dupe-keys': 2,
    // disallow a duplicate case label.
    'no-duplicate-case': 2,
    // disallow the use of empty character classes in regular expressions
    'no-empty-character-class': 2,
    // disallow empty statements
    'no-empty': 2,
    // disallow assigning to the exception in a catch block
    'no-ex-assign': 2,
    // disallow double-negation boolean casts in a boolean context
    'no-extra-boolean-cast': 2,
    // disallow unnecessary parentheses.
    // if you are not sure about operator precedence, visit that page
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table
    'no-extra-parens': [2, 'all', {
      'conditionalAssign': false,
      'returnAssign': false,
      'nestedBinaryExpressions': true, // No parens around (a && b)
      'ignoreJSX': 'multi-line', // Allows extra parentheses around multi-line jsx only
      'enforceForArrowConditionals': true, // No parens around arrow return expression a => (a ? b : c)
    }],
    // disallow unnecessary semicolons
    'no-extra-semi': 2,
    // disallow overwriting functions written as function declarations
    'no-func-assign': 2,
    // disallow function or variable declarations in nested blocks
    'no-inner-declarations': 2,
    // disallow invalid regular expression strings in the RegExp constructor
    'no-invalid-regexp': 2,
    // disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': 2,
    // disallow the use of object properties of the global object (Math and JSON) as functions
    'no-obj-calls': 2,
    // disallow multiple spaces in a regular expression literal
    'no-regex-spaces': 2,
    // disallow sparse arrays
    'no-sparse-arrays': 2,
    // disallow unreachable statements after a return, throw, continue, or break statement
    'no-unreachable': 2,
    // disallow control flow statements in finally blocks
    'no-unsafe-finally': 2,
    // disallow negating the left operand of relational operators
    'no-unsafe-negation': 2,
    // disallow comparisons with the value NaN
    'use-isnan': 2,
    // ensure that the results of typeof are compared against a valid string
    'valid-typeof': 2,
    // Avoid code that looks like two expressions but is actually one
    'no-unexpected-multiline': 2,

    /** Stylistic Issues section http://eslint.org/docs/rules/#stylistic-issues **/
    // enforce spacing inside array brackets
    'array-bracket-spacing': [2, 'never'],
    // enforce consistent spacing inside single-line blocks
    'block-spacing': [2, 'never'],
    // enforce one true brace style
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
    // require camel case names
    'camelcase': [2, { 'properties': 'never' }],
    // enforce spacing before and after comma
    'comma-spacing': [2, { 'before': false, 'after': true }],
    // enforce one true comma style
    'comma-style': [2, 'last'],
    // disallow padding inside computed properties
    'computed-property-spacing': [2, 'never'],
    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': 2,
    // require or disallow spacing between function identifiers and their invocations
    'func-call-spacing': 2,
    'indent-legacy':[2, 2, {
      'SwitchCase': 1,
      'VariableDeclarator': {'var': 2, 'let': 2, 'const': 3},
      'outerIIFEBody': 1,
      'MemberExpression': 1,
      'FunctionDeclaration': {'parameters': 'first', 'body': 1},
      'FunctionExpression': {'parameters': 'first', 'body': 1},
      'CallExpression': {'arguments': 1},
      'ArrayExpression': 1,
      'ObjectExpression': 1,
    }],
    // specify whether double or single quotes should be used in JSX attributes
    'jsx-quotes': [2, 'prefer-double'],
    // enforces spacing between keys and values in object literal properties
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
    // require a space before & after certain keywords
    'keyword-spacing': [2, {
      'before': true,
      'after': true,
      'overrides': {
        'return': { 'after': true },
        'throw': { 'after': true },
        'case': { 'after': true },
      }
    }],
    // enforces empty lines around comments
    'lines-around-comment': [2, {
      'beforeBlockComment': true,
      'afterBlockComment': false,
      'beforeLineComment': false,
      'afterLineComment': false,
      'allowBlockStart': true,
      'allowBlockEnd': true,
      'allowClassStart': true,
      'allowClassEnd': true,
      'allowObjectStart': true,
      'allowObjectEnd': true,
      'allowArrayEnd': true,
      'applyDefaultIgnorePatterns': true,
    }],
    // require or disallow an empty line between class members
    'lines-between-class-members': [2, 'always', {'exceptAfterSingleLine': true}],
    // maximum length of a line in your program
    'max-len': [2, {
      'code': 140, // The character count to use whenever a tab character is encountered
      'comments': 140, // Maximum line length for comments; defaults to value of code
      'tabWidth': 2, // The character count to use whenever a tab character is encountered
      'ignoreUrls': true, // Ignores lines that contain a URL
      'ignoreStrings': true, // Ignores lines that contain a double-quoted or single-quoted string
      'ignoreComments': false, // Ignores all trailing comments and comments on their own line
      'ignoreTrailingComments': true, // Ignores only trailing comments
      'ignoreTemplateLiterals': true, // Ignores lines that contain a template literal
      'ignoreRegExpLiterals': true, // Ignores lines that contain a RegExp literal
    }],
    // require a capital letter for constructors
    'new-cap': [2, { 'newIsCap': true, 'capIsNew': false }],
    // disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': 2,
    // disallow use of the Array constructor
    'no-array-constructor': 2,
    // disallow if as the only statement in an else block
    'no-lonely-if': 2,
    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 2,
    // disallow multiple empty lines and only one newline at the end
    'no-multiple-empty-lines': [2, { 'max': 2, 'maxEOF': 1, 'maxBOF': 1 }],
    // disallow use of the Object constructor
    'no-new-object': 2,
    // disallow tabs in file
    'no-tabs': 2,
    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 2,
    // disallow dangling underscores in identifiers
    'no-underscore-dangle': [2, { 'enforceInMethodNames': false, 'allow': [
      '__DEV__',
      '__STYLES_FETCH__',
      '__WHY_UPDATE__',
      '__LOG_TREE__',
      '__LOG_ROUTER__',
      '__LOG_ACTIONS__',
      '__REACT_PERF__',
      '_loginHref_',
      '_rootComponentInstance_',
    ] }],
    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    'no-unneeded-ternary': [2, { 'defaultAssignment': false }],
    // disallow whitespace before properties
    'no-whitespace-before-property': 2,
    // enforce the location of single-line statements
    'nonblock-statement-body-position': [2, 'beside'],
    // allow just one var statement per function
    'one-var': [2, 'never'],
    // require a newline around variable declaration
    'one-var-declaration-per-line': [2, 'always'],
    // enforce operators to be placed before or after line breaks
    'operator-linebreak': [2, 'after'],
    // enforce padding within blocks
    'padded-blocks': [2, {'blocks': 'never', 'classes': 'never', 'switches': 'never'}],
    // require or disallow padding lines between statements
    'padding-line-between-statements': [2,
      // Always require blank lines after directive (like 'use-strict'), except between directives
      {blankLine: 'always', prev: 'directive', next: '*'},
      {blankLine: 'any',    prev: 'directive', next: 'directive'},
      // Always require blank lines after import, except between imports
      {blankLine: 'always', prev: 'import', next: '*'},
      {blankLine: 'any',    prev: 'import', next: 'import'},
      // Always require blank lines before and after every sequence of variable declarations and export
      {blankLine: 'always', prev: '*', next: ['const', 'let', 'var', 'export']},
      {blankLine: 'always', prev: ['const', 'let', 'var', 'export'], next: '*'},
      {blankLine: 'any',    prev: ['const', 'let', 'var', 'export'], next: ['const', 'let', 'var', 'export']},
      // Always require blank lines before and after class declaration, if, do/while, switch, try
      {blankLine: 'always', prev: '*', next: ['if', 'class', 'for', 'do', 'while', 'switch', 'try']},
      {blankLine: 'always', prev: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'], next: '*'},
      // Always require blank lines before return statements
      {blankLine: 'always', prev: '*', next: 'return'},
    ],
    // require quotes around object literal property names
    'quote-props': [2, 'as-needed', { 'keywords': false, 'unnecessary': false, 'numbers': false }],
    // specify whether double or single quotes should be used
    'quotes': [2, 'single', 'avoid-escape'],
    // enforce spacing before and after semicolons
    'semi-spacing': [2, { 'before': false, 'after': true }],
    // enforce location of semicolons
    'semi-style': [2, 'last'],
    // require use of semicolons where they are valid instead of ASI
    'semi': [2, 'always', {'omitLastInOneLineBlock': false}],
    // require or disallow space before blocks
    'space-before-blocks': 2,
    // require or disallow space before function opening parenthesis
    'space-before-function-paren': [2, { 'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always' }],
    // require or disallow spaces inside parentheses
    'space-in-parens': [2, 'never'],
    // require spaces around operators
    'space-infix-ops': 2,
    // enforce spacing around colons of switch statements
    'switch-colon-spacing': [2, {'after': true, 'before': false}],
    // require or disallow spacing between template tags and their literals
    'template-tag-spacing': [2, 'never'],
    // files must not begin with the Unicode Byte Order Mark (BOM)
    'unicode-bom': [2, 'never'],

    /* https://github.com/babel/eslint-plugin-babel */
    // Turn them on as they're needed
    'babel/new-cap': 0,
    'babel/object-curly-spacing': 2,
    'babel/no-invalid-this': 0,
    'babel/semi': 2,

    /** React common section https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules **/
    // Forbid "button" element without an explicit "type" attribute
    'react/button-has-type': 2,
    // Prevent extraneous defaultProps on components
    'react/default-props-match-prop-types': [2, {'allowRequiredDefaults': false}],
    // Forbid foreign propTypes
    'react/forbid-foreign-prop-types': 2,
    // Prevent using this.state inside this.setState
    'react/no-access-state-in-setstate': 2,
    // Prevent using children and the dangerouslySetInnerHTML prop at the same time
    'react/no-danger-with-children': 2,
    // Prevent usage of deprecated methods
    'react/no-deprecated': 2,
    // Prevent usage of setState in componentDidMount
    // Updating the state after a component mount will trigger a second render() call and leads to property/layout thrashing
    'react/no-did-mount-set-state': [2, 'disallow-in-func'],
    // Prevent usage of setState in componentDidUpdate
    // Updating the state after a component update will trigger a second render() call and leads to property/layout thrashing
    'react/no-did-update-set-state': [2, 'disallow-in-func'],
    // Prevent direct mutation of this.state
    'react/no-direct-mutation-state': 2,
    // Prevent usage of findDOMNode
    // Facebook will eventually deprecate findDOMNode as it blocks certain improvements in React in the future
    'react/no-find-dom-node': 2,
    // isMounted is an anti-pattern, is not available when using ES6 classes, and it is on its way to being officially deprecated
    'react/no-is-mounted': 2,
    // Prevent multiple component definition per file
    'react/no-multi-comp': [2, { 'ignoreStateless': true }],
    // Prevent usage of shouldComponentUpdate when extending React.PureComponent
    'react/no-redundant-should-component-update': 2,
    // Prevent usage of the return value of React.render
    'react/no-render-return-value': 2,
    // Prevent common casing typos
    'react/no-typos': 2,
    // Prevent using string references
    'react/no-string-refs': 2,
    // Prevent usage of unknown DOM property
    'react/no-unknown-property': 2,
    // Prevent usage of setState in componentWillUpdate
    // Updating the state during the componentWillUpdate step can lead to indeterminate component state and is not allowed
    'react/no-will-update-set-state': 2,
    // Require stateless functions when not using lifecycle methods, setState or ref
    'react/prefer-stateless-function': [2, { 'ignorePureComponents': true }],
    // Enforce ES5 or ES6 class for returning value in render function
    'react/require-render-return': 2,
    // Prevent extra closing tags for components without children
    'react/self-closing-comp': [2, { 'component': true, 'html': true }],
    // Enforce component methods order
    'react/sort-comp': [2, {
      'order': [
        'static-methods',
        'lifecycle',
        '/^on.+$/',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'setters',
        'getters',
        'everything-else',
        '/^render.+$/',
        'render'
      ]
    }],
    // Enforce style prop value being an object
    'react/style-prop-object': 2,
    // Prevent void DOM elements (e.g. <img/>, <br/>) from receiving children
    'react/void-dom-elements-no-children': 2,

    /** React JSX section https://github.com/yannickcr/eslint-plugin-react#jsx-specific-rules **/
    // Enforce boolean attributes notation in JSX
    'react/jsx-boolean-value': [2, 'never'],
    // Validate closing tag location in JSX
    'react/jsx-closing-tag-location': 2,
    // Enforce or disallow spaces inside of curly braces in JSX attributes
    'react/jsx-curly-spacing': [2, {
      'when': 'never',
      'children': true,
      'attributes': true,
      'allowMultiline': true,
      'spacing': {'objectLiterals': 'never'}
    }],
    // Enforce or disallow spaces around equal signs in JSX attributes
    'react/jsx-equals-spacing': [2, 'never'],
    // Restrict file extensions that may contain JSX
    'react/jsx-filename-extension': [2, { "extensions": ['.js', '.jsx'] }],
    // Enforce event handler naming conventions in JSX
    'react/jsx-handler-names': [2, {
      'eventHandlerPrefix': 'handle',
      'eventHandlerPropPrefix': 'on',
    }],
    // Validate JSX indentation.
    'react/jsx-indent': [2, 2],
    // Prevent usage of .bind() and arrow functions in JSX props
    // A bind call or arrow function in a JSX prop creates a brand new function on every single render
    // This is bad for performance and cause unnecessary re-renders if child component is pure or contains shouldComponentUpdate hook
    'react/jsx-no-bind': [2, {
      'ignoreRefs': false,
      'allowArrowFunctions': false,
      'allowBind': false,
    }],
    // Prevent comments from being inserted as text nodes
    'react/jsx-no-comment-textnodes': 2,
    // Creating JSX elements with duplicate props can cause unexpected behavior in your application
    'react/jsx-no-duplicate-props': [2, { 'ignoreCase': true }],
    // Enforce curly braces or disallow unnecessary curly braces in JSX
    'react/jsx-curly-brace-presence': [2, {props: 'never', children: 'never'}],
    // Disallow undeclared variables in JSX
    'react/jsx-no-undef': 2,
    // One JSX Element Per Line
    'react/jsx-pascal-case': 2,
    // Validate whitespace in and around the JSX opening and closing bracket
    'react/jsx-tag-spacing': [2, {
      'closingSlash': 'never',
      'beforeSelfClosing': 'never',
      'afterOpening':'never'
    }],
    // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': 2,
    // Prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': 2,

    /** Import Static analysis https://github.com/benmosher/eslint-plugin-import#rules **/
    // Ensure imports point to a file/module that can be resolved
    'import/no-unresolved': [2, { caseSensitive: true, commonjs: true, amd: false }],
    // Ensure named imports correspond to a named export in the remote file
    'import/named': 2,
    // Ensure a default export is present, given a default import
    'import/default': 2,
    // Ensure imported namespaces contain dereferenced properties as they are dereferenced
    'import/namespace': [2, { allowComputed: true }],
    // Forbid import of modules using absolute paths
    'import/no-absolute-path': [2, { esmodule: true, commonjs: true, amd: false }],

    /** Import Helpful warnings https://github.com/benmosher/eslint-plugin-import#rules **/
    // Report any invalid exports, i.e. re-export of the same name
    'import/export': 2,
    // Report use of exported name as property of default export
    'import/no-named-as-default-member': 2,
    // Forbid the use of extraneous packages, allow devDependencies
    'import/no-extraneous-dependencies': [2, { devDependencies: true, packageDir: path.resolve('./') }],
    // Forbid the use of mutable exports with var or let
    'import/no-mutable-exports': 2,

    /** Import Style guide https://github.com/benmosher/eslint-plugin-import#rules **/
    // Ensure all imports appear before other statements
    'import/first': 2,
    // Report repeated import of the same module in multiple places
    'import/no-duplicates': 2,
    // Ensure consistent use of file extension within the import path. Use extensions except .js/jsx
    'import/extensions': [2, 'always', { js: 'never', jsx: 'never' }],
  }
};
