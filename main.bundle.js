/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(2);


	(0, _jquery2.default)('.hamburger-menu').on('click', function () {
	  document.getElementById('phoneNav').style.height = '100%';
	});

	(0, _jquery2.default)('.close-nav').on('click', function () {
	  document.getElementById('phoneNav').style.height = '0%';
	});

	(0, _jquery2.default)('.mobile-nav').on('click', function () {
	  document.getElementById('phoneNav').style.height = '0%';
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.1.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-09-22T22:30Z
	 */
	( function( global, factory ) {

		"use strict";

		if ( typeof module === "object" && typeof module.exports === "object" ) {

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call( Object );

	var support = {};



		function DOMEval( code, doc ) {
			doc = doc || document;

			var script = doc.createElement( "script" );

			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module



	var
		version = "3.1.1",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {

			// Return all the elements in a clean array
			if ( num == null ) {
				return slice.call( this );
			}

			// Return just the one element from the set
			return num < 0 ? this[ num + this.length ] : this[ num ];
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&

				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},

		isPlainObject: function( obj ) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}

			proto = getProto( obj );

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},

		isEmptyObject: function( obj ) {

			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;

			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.3
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-08-08
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,

		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},

		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true && ("form" in elem || "label" in elem);
			},
			{ dir: "parentNode", next: "legend" }
		);

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");

		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {

		// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {

			// Only certain elements can match :enabled or :disabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
			if ( "form" in elem ) {

				// Check for inherited disabledness on relevant non-disabled elements:
				// * listed form-associated elements in a disabled fieldset
				//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
				// * option elements in a disabled optgroup
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
				// All such elements have a "form" property.
				if ( elem.parentNode && elem.disabled === false ) {

					// Option elements defer to a parent optgroup if present
					if ( "label" in elem ) {
						if ( "label" in elem.parentNode ) {
							return elem.parentNode.disabled === disabled;
						} else {
							return elem.disabled === disabled;
						}
					}

					// Support: IE 6 - 11
					// Use the isDisabled shortcut property to check for disabled fieldset ancestors
					return elem.isDisabled === disabled ||

						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled &&
							disabledAncestor( elem ) === disabled;
				}

				return elem.disabled === disabled;

			// Try to winnow out elements that can't be disabled before trusting the disabled property.
			// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
			// even exist on them, let alone have a boolean value.
			} else if ( "label" in elem ) {
				return elem.disabled === disabled;
			}

			// Remaining elements are neither :enabled nor :disabled
			return false;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID filter and find
		if ( support.getById ) {
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var elem = context.getElementById( id );
					return elem ? [ elem ] : [];
				}
			};
		} else {
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};

			// Support: IE 6 - 7 only
			// getElementById is not reliable as a find shortcut
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var node, i, elems,
						elem = context.getElementById( id );

					if ( elem ) {

						// Verify the id attribute
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}

						// Fall back on getElementsByName
						elems = context.getElementsByName( id );
						i = 0;
						while ( (elem = elems[i++]) ) {
							node = elem.getAttributeNode("id");
							if ( node && node.value === id ) {
								return [ elem ];
							}
						}
					}

					return [];
				}
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";

				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
				return false;
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;




	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
		}

		// Single element
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
		}

		// Arraylike of elements (jQuery, arguments, Array)
		if ( typeof qualifier !== "string" ) {
			return jQuery.grep( elements, function( elem ) {
				return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
			} );
		}

		// Simple selector that can be filtered directly, removing non-Elements
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		// Complex selector, compare the two sets, removing non-Elements
		qualifier = jQuery.filter( qualifier, elements );
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		if ( elems.length === 1 && elem.nodeType === 1 ) {
			return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
		}

		return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			ret = this.pushStack( [] );

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						if ( elem ) {

							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );

			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :

							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {

							matched.push( cur );
							break;
						}
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}

	function adoptValue( value, resolve, reject ) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );

			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );

			// Other non-thenables
			} else {

				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call( undefined, value );
			}

		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call( undefined, value );
		}
	}

	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},

					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;

						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;

										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}

										returned = handler.apply( that, args );

										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}

										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&

											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;

										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {

											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);

											// Normal processors (resolve) also hook into progress
											} else {

												// ...and disregard older resolution values
												maxDepth++;

												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}

										// Handle all other returned values
										} else {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}

											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},

									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {

												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}

												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {

													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}

													deferred.rejectWith( that, args );
												}
											}
										};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {

									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}

						return jQuery.Deferred( function( newDefer ) {

							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);

							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);

							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(
						function() {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,

						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( singleValue ) {
			var

				// count of uncompleted subordinates
				remaining = arguments.length,

				// count of unprocessed arguments
				i = remaining,

				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),

				// the master Deferred
				master = jQuery.Deferred(),

				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};

			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}

			return master.promise();
		}
	} );


	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function( error, stack ) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};




	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};




	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function( fn ) {

		readyList
			.then( fn )

			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );

	} else {

		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );

		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		if ( chainable ) {
			return elems;
		}

		// Gets
		if ( bulk ) {
			return fn.call( elems );
		}

		return len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function( owner ) {

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :

				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				return this.get( owner, key );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key !== undefined ) {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnothtmlwhite ) || [] );
				}

				i = key.length;

				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function getData( data ) {
		if ( data === "true" ) {
			return true;
		}

		if ( data === "false" ) {
			return false;
		}

		if ( data === "null" ) {
			return null;
		}

		// Only convert to a number if it doesn't change the string
		if ( data === +data + "" ) {
			return +data;
		}

		if ( rbrace.test( data ) ) {
			return JSON.parse( data );
		}

		return data;
	}

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = getData( data );
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each( function() {

					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHiddenWithinTree = function( elem, el ) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&

				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&

				jQuery.css( elem, "display" ) === "none";
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};




	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	var defaultDisplayMap = {};

	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];

		if ( display ) {
			return display;
		}

		temp = doc.body.appendChild( doc.createElement( nodeName ) );
		display = jQuery.css( temp, "display" );

		temp.parentNode.removeChild( temp );

		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;

		return display;
	}

	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;

		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			display = elem.style.display;
			if ( show ) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";

					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}

		return elements;
	}

	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;

		if ( typeof context.getElementsByTagName !== "undefined" ) {
			ret = context.getElementsByTagName( tag || "*" );

		} else if ( typeof context.querySelectorAll !== "undefined" ) {
			ret = context.querySelectorAll( tag || "*" );

		} else {
			ret = [];
		}

		if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
			return jQuery.merge( [ context ], ret );
		}

		return ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;



	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( nativeEvent ) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );

			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;

			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, handleObj, sel, matchedHandlers, matchedSelectors,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			if ( delegateCount &&

				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&

				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!( event.type === "click" && event.button >= 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
						matchedHandlers = [];
						matchedSelectors = {};
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matchedSelectors[ sel ] === undefined ) {
								matchedSelectors[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matchedSelectors[ sel ] ) {
								matchedHandlers.push( handleObj );
							}
						}
						if ( matchedHandlers.length ) {
							handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			cur = this;
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},

				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},

		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function( event ) {
			var button = event.button;

			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				if ( button & 1 ) {
					return 1;
				}

				if ( button & 2 ) {
					return 3;
				}

				if ( button & 4 ) {
					return 2;
				}

				return 0;
			}

			return event.which;
		}
	}, jQuery.event.addProp );

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var

		/* eslint-disable max-len */

		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

		/* eslint-enable */

		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};



	( function() {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}

			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i,
			val = 0;

		// If we already have the right measurement, avoid augmentation
		if ( extra === ( isBorderBox ? "border" : "content" ) ) {
			i = 4;

		// Otherwise initialize for horizontal or vertical properties
		} else {
			i = name === "width" ? 1 : 0;
		}

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var val,
			valueIsBorderBox = true,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = elem.getBoundingClientRect()[ name ];
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	function raf() {
		if ( timerId ) {
			window.requestAnimationFrame( raf );
			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;

					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {

			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}

			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {

					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {

			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}

				/* eslint-disable no-loop-func */

				anim.done( function() {

				/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}

			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnothtmlwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		// Go to the end state if fx are off or if document is hidden
		if ( jQuery.fx.off || document.hidden ) {
			opt.duration = 0;

		} else {
			if ( typeof opt.duration !== "number" ) {
				if ( opt.duration in jQuery.fx.speeds ) {
					opt.duration = jQuery.fx.speeds[ opt.duration ];

				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.requestAnimationFrame ?
				window.requestAnimationFrame( raf ) :
				window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		if ( window.cancelAnimationFrame ) {
			window.cancelAnimationFrame( timerId );
		} else {
			window.clearInterval( timerId );
		}

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name,
				i = 0,

				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match( rnothtmlwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();

			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					if ( tabindex ) {
						return parseInt( tabindex, 10 );
					}

					if (
						rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) &&
						elem.href
					) {
						return 0;
					}

					return -1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




		// Strip and collapse whitespace according to HTML spec
		// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
		function stripAndCollapse( value ) {
			var tokens = value.match( rnothtmlwhite ) || [];
			return tokens.join( " " );
		}


	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnothtmlwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
						return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					// Handle most common string cases
					if ( typeof ret === "string" ) {
						return ret.replace( rreturn, "" );
					}

					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option, i,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length;

					if ( index < 0 ) {
						i = max;

					} else {
						i = one ? index : 0;
					}

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						/* eslint-disable no-cond-assign */

						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {

				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;

				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				if ( val == null ) {
					return null;
				}

				if ( jQuery.isArray( val ) ) {
					return jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} );
				}

				return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rantiCache = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// Request state (becomes false upon send and true upon completion)
				completed,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// uncached part of the url
				uncached,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR );

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add or update anti-cache param if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rantiCache, "$1" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}

					// Propagate others as results
					done( -1, e );
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Ignore repeat invocations
				if ( completed ) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );


	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};




	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );

	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if ( !context ) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = stripAndCollapse( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {

			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win, rect, doc,
				elem = this[ 0 ];

			if ( !elem ) {
				return;
			}

			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}

			rect = elem.getBoundingClientRect();

			// Make sure element is not hidden (display: none)
			if ( rect.width || rect.height ) {
				doc = elem.ownerDocument;
				win = getWindow( doc );
				docElem = doc.documentElement;

				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}

			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );

	jQuery.parseJSON = JSON.parse;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}




	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}





	return jQuery;
	} );


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/resolve-url-loader/index.js!./../../node_modules/sass-loader/index.js?sourceMap!./main.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/resolve-url-loader/index.js!./../../node_modules/sass-loader/index.js?sourceMap!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n@-moz-keyframes topToBottom {\n  0% {\n    opacity: 0;\n  }\n\n  5% {\n    opacity: 0;\n    -moz-transform: translateY(-50px);\n  }\n\n  10% {\n    opacity: 1;\n    -moz-transform: translateY(0px);\n  }\n\n  25% {\n    opacity: 1;\n    -moz-transform: translateY(0px);\n  }\n\n  30% {\n    opacity: 0;\n    -moz-transform: translateY(0px);\n  }\n\n  80% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes topToBottom {\n  0% {\n    opacity: 0;\n  }\n\n  5% {\n    opacity: 0;\n    -webkit-transform: translateY(-50px);\n  }\n\n  10% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n  }\n\n  25% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n  }\n\n  30% {\n    opacity: 0;\n    -webkit-transform: translateY(0px);\n  }\n\n  80% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n\n@-ms-keyframes topToBottom {\n  0% {\n    opacity: 0;\n  }\n\n  5% {\n    opacity: 0;\n    -ms-transform: translateY(-50px);\n  }\n\n  10% {\n    opacity: 1;\n    -ms-transform: translateY(0px);\n  }\n\n  25% {\n    opacity: 1;\n    -ms-transform: translateY(0px);\n  }\n\n  30% {\n    opacity: 0;\n    -ms-transform: translateY(0px);\n  }\n\n  80% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  background: url(" + __webpack_require__(5) + ") no-repeat fixed;\n  height: 100%;\n}\n\n#introduction,\n#image {\n  background-attachment: fixed;\n  background-color: #EEE;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin: auto;\n  min-height: 100%;\n  position: relative;\n  width: 80%;\n}\n\n#image {\n  background: url(" + __webpack_require__(6) + ") no-repeat;\n  background-size: cover;\n}\n\n.container-break {\n  background-color: #00ADB5;\n  height: 60px;\n  margin: auto;\n  width: 80%;\n}\n\n@media screen and (max-width: 770px) {\n  #introduction,\n  #image,\n  .container-break {\n    width: 100%;\n  }\n}\n\nheader {\n  left: 10%;\n  position: fixed;\n  width: 80%;\n  z-index: 2;\n}\n\nnav {\n  background-color: #222831;\n  display: flex;\n  height: 70px;\n}\n\nnav ul {\n  align-items: center;\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n}\n\nnav li {\n  list-style: none;\n  margin-right: 32px;\n  position: relative;\n}\n\nnav li a {\n  color: #00ADB5;\n  font-family: \"Lora\", serif;\n  font-size: 20px;\n  text-decoration: none;\n  transition: 0.3s;\n}\n\n.website-nav a:hover {\n  color: #EEE;\n}\n\n.logo {\n  height: 60px;\n  margin-left: 10px;\n  padding-top: 6px;\n}\n\n.hamburger-menu {\n  height: 45px;\n  display: none;\n  padding: 10px 15px 0 0;\n}\n\n.overlay {\n  background-color: rgba(34, 40, 48, 0.9);\n  height: 0%;\n  left: 0;\n  position: fixed;\n  overflow-y: hidden;\n  top: 0;\n  transition: 0.5s;\n  width: 100%;\n  z-index: 1;\n}\n\n.overlay-content {\n  display: flex;\n  position: relative;\n  text-align: center;\n  top: 30%;\n  width: 100%;\n}\n\n.overlay-content ul {\n  flex-direction: column;\n  padding-left: 0;\n}\n\n.overlay-content ul li {\n  margin: 20px 0;\n}\n\n.close-nav {\n  color: #00ADB5;\n  font-size: 50px;\n  position: absolute;\n  right: 19px;\n  text-decoration: none;\n}\n\n.close-nav:hover {\n  color: #EEE;\n}\n\n.mobile-nav a {\n  color: #00ADB5;\n  font-family: \"Lora\", serif;\n  font-size: 30px;\n  padding: 10px;\n}\n\n.mobile-nav a:hover {\n  color: #EEE;\n  transition: 0.3s;\n}\n\n@media screen and (max-width: 770px) {\n  header {\n    left: 0;\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  .website-nav {\n    display: none;\n  }\n\n  .hamburger-menu {\n    display: block;\n  }\n}\n\n#introduction {\n  display: flex;\n  padding-top: 320px;\n  position: relative;\n}\n\nh1 {\n  color: #222831;\n  font-family: \"Lora\", serif;\n  font-size: 50px;\n  font-weight: bold;\n  padding-left: 100px;\n}\n\n.rotating-words {\n  color: #222831;\n  font-family: \"Lora\", serif;\n  font-size: 50px;\n  font-weight: bold;\n  display: inline-block;\n  text-indent: 6px;\n  vertical-align: top;\n}\n\n.rotating-words span {\n  animation: topToBottom 8s linear infinite 0s;\n  -ms-animation: topToBottom 8s linear infinite 0s;\n  -webkit-animation: topToBottom 8s linear infinite 0s;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n}\n\n.rotating-words span:nth-child(2) {\n  animation-delay: 4s;\n  -ms-animation-delay: 4s;\n  -webkit-animation-delay: 4s;\n}\n\n@media screen and (max-width: 770px) {\n  #introduction {\n    min-height: 50%;\n    padding: 250px 0;\n  }\n\n  h1 {\n    font-size: 40px;\n    padding-left: 50px;\n  }\n\n  .rotating-words {\n    font-size: 40px;\n  }\n}\n\n@media screen and (max-width: 415px) {\n  h1 {\n    font-size: 30px;\n    padding-left: 35px;\n  }\n\n  .rotating-words {\n    display: block;\n    font-size: 30px;\n    margin-top: 50px;\n    text-indent: 0;\n  }\n}\n\n@media screen and (max-width: 320px) {\n  h1 {\n    font-size: 25px;\n    padding-left: 25px;\n  }\n\n  .rotating-words {\n    font-size: 25px;\n  }\n}\n\n.descriptive-nouns {\n  margin: auto;\n  padding-top: 170px;\n  text-align: center;\n  width: 750px;\n}\n\n.nouns {\n  color: #222831;\n  font-family: \"Lora\", serif;\n  font-size: 40px;\n  line-height: 58px;\n  padding-bottom: 40px;\n}\n\n.about-me-link {\n  color: #00ADB5;\n  font-family: \"Source Sans Pro\", sans-serif;\n  font-size: 20px;\n  text-decoration: none;\n}\n\n@media screen and (max-width: 770px) {\n  #image {\n    min-height: 50%;\n  }\n\n  .descriptive-nouns {\n    padding: 100px 0;\n  }\n\n  .nouns {\n    font-size: 35px;\n    padding-bottom: 15px;\n  }\n}\n\n@media screen and (max-width: 415px) {\n  .descriptive-nouns {\n    width: 90%;\n  }\n\n  .nouns {\n    font-size: 26px;\n    line-height: 40px;\n  }\n}\n\n#portfolio {\n  background-color: #EEE;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: auto;\n  width: 80%;\n}\n\n#portfolio img {\n  height: 256px;\n  width: 256px;\n}\n\n#portfolio-link:before {\n  content: \"\";\n  display: block;\n  height: 70px;\n  margin-top: -70px;\n  visibility: hidden;\n}\n\n#portfolio article {\n  overflow: hidden;\n  position: relative;\n  height: 256px;\n  width: 256px;\n}\n\n#portfolio article img {\n  position: absolute;\n}\n\nh3 {\n  background-color: #00ADB5;\n  border-radius: 3px;\n  color: #222831;\n  font-family: \"Lora\", serif;\n  font-size: 24px;\n  line-height: 25px;\n  margin: auto;\n  padding: 10px 0;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 80px;\n  text-align: center;\n  width: 220px;\n  z-index: 1;\n}\n\nh3:hover {\n  display: none;\n}\n\n.color-image {\n  opacity: 0.1;\n  z-index: 1;\n}\n\n.color-image:hover {\n  opacity: 1;\n  transition: 0.5s;\n}\n\n@media screen and (max-width: 770px) {\n  #portfolio {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 770px) {\n  #portfolio img {\n    height: 300px;\n    width: 300px;\n  }\n\n  #portfolio article {\n    height: 300px;\n    width: 300px;\n    margin: 10px 0;\n  }\n\n  #portfolio article:last-child {\n    margin-bottom: 50px;\n  }\n}\n\n@media screen and (max-width: 415px) {\n  #portfolio article:first-child {\n    margin-top: 50px;\n  }\n}\n\n#about {\n  background-color: #00ADB5;\n  display: flex;\n  flex-direction: row;\n  padding: 50px 0;\n  margin: auto;\n  width: 80%;\n}\n\n#about-link:before {\n  content: \"\";\n  display: block;\n  height: 70px;\n  margin-top: -70px;\n  visibility: hidden;\n}\n\n.credentials {\n  width: 55%;\n}\n\n.intro {\n  border-right: 1px solid #EEE;\n  padding: 0 15px 0 25px;\n  width: 44%;\n}\n\n.skills {\n  border-bottom: 1px solid #EEE;\n  margin: 0 12px;\n  padding: 0 20px 10px 20px;\n}\n\n.education {\n  margin: 20px 12px 0 12px;\n  padding: 0 20px 10px 20px;\n}\n\nh2 {\n  color: #222831;\n  font-family: \"Lora\", serif;\n  font-size: 30px;\n  margin-bottom: 10px;\n}\n\np {\n  color: #222831;\n  font-family: \"Source Sans Pro\", sans-serif;\n  line-height: 36px;\n}\n\n@media screen and (max-width: 770px) {\n  #about {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  #about {\n    flex-direction: column;\n  }\n\n  .intro,\n  .credentials {\n    width: 100%;\n  }\n\n  .intro {\n    border: none;\n    border-bottom: 1px solid #EEE;\n    margin: 0 auto;\n    padding-bottom: 10px;\n    width: 95%;\n  }\n\n  .skills {\n    padding-top: 20px;\n  }\n\n  h2 {\n    font-size: 26px;\n  }\n}\n\n.contact-form {\n  margin: 20px 12px 0 12px;\n  padding: 0 20px 10px 20px;\n}\n\ninput {\n  background: #EEE;\n  color: #222831;\n  font-family: \"Source Sans Pro\", sans-serif;\n  font-size: 16px;\n  outline-color: #007c82;\n  padding: 5px;\n  display: inline-block;\n  margin-top: 15px;\n  width: 215px;\n}\n\ntextarea {\n  background: #EEE;\n  color: #222831;\n  font-family: \"Source Sans Pro\", sans-serif;\n  font-size: 16px;\n  outline-color: #007c82;\n  padding: 5px;\n  margin-top: 10px;\n  resize: none;\n  width: 88%;\n}\n\n.form-name {\n  margin-right: 5px;\n}\n\n.submit-form-button {\n  background: #888c93;\n  border: none;\n  border-radius: 3px;\n  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);\n  color: #EEE;\n  font-family: \"Source Sans Pro\", sans-serif;\n  font-size: 16px;\n  margin: 40px 0 0 10px;\n  outline: none;\n  position: absolute;\n  transition: 0.5s;\n  width: 50px;\n}\n\n.submit-form-button:hover {\n  background: #007c82;\n  cursor: pointer;\n  transition: 0.5s;\n}\n\n@media screen and (max-width: 1000px) {\n  input,\n  textarea {\n    width: 90%;\n  }\n}\n\n@media screen and (max-width: 1000px) {\n  .submit-form-button {\n    display: block;\n    margin: 10px 0 0 0;\n  }\n}\n\nfooter {\n  background-color: #FFF;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  padding: 20px;\n  width: 80%;\n}\n\nfooter ul {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  padding-left: 0;\n}\n\nfooter ul li {\n  list-style: none;\n}\n\n.social-media {\n  height: 50px;\n  width: 50px;\n  margin: 0 7px;\n}\n\n.switch-icon .teal-icon {\n  display: none;\n}\n\n.switch-icon:hover .social-media,\n.switch-icon:active .social-media {\n  display: none;\n}\n\n.switch-icon:hover .teal-icon {\n  display: block;\n  margin: 0 7px;\n}\n\n.copyright {\n  color: #A3A6AB;\n  font-family: \"Source Sans Pro\", sans-serif;\n  font-size: 14px;\n  margin-top: 10px;\n}\n\n@media screen and (max-width: 770px) {\n  footer {\n    width: 100%;\n  }\n\n  .copyright {\n    text-align: center;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL2tpcnN0ZW5zd2Fuc29uL2tzd2Fuc29uLmdpdGh1Yi5pby9saWIvY3NzL21haW4uc2NzcyIsInNvdXJjZXMiOlsiL1VzZXJzL2tpcnN0ZW5zd2Fuc29uL2tzd2Fuc29uLmdpdGh1Yi5pby9saWIvY3NzL21haW4uc2NzcyIsIi9Vc2Vycy9raXJzdGVuc3dhbnNvbi9rc3dhbnNvbi5naXRodWIuaW8vbGliL2Nzcy9wYXJ0aWFscy9fcmVzZXQuc2NzcyIsIi9Vc2Vycy9raXJzdGVuc3dhbnNvbi9rc3dhbnNvbi5naXRodWIuaW8vbGliL2Nzcy9tb2R1bGVzL192YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9raXJzdGVuc3dhbnNvbi9rc3dhbnNvbi5naXRodWIuaW8vbGliL2Nzcy9tb2R1bGVzL192ZW5kb3JzLnNjc3MiLCIvVXNlcnMva2lyc3RlbnN3YW5zb24va3N3YW5zb24uZ2l0aHViLmlvL2xpYi9jc3MvbW9kdWxlcy9fbWl4aW5zLnNjc3MiLCIvVXNlcnMva2lyc3RlbnN3YW5zb24va3N3YW5zb24uZ2l0aHViLmlvL2xpYi9jc3MvcGFydGlhbHMvX2JvZHkuc2NzcyIsIi9Vc2Vycy9raXJzdGVuc3dhbnNvbi9rc3dhbnNvbi5naXRodWIuaW8vbGliL2Nzcy9wYXJ0aWFscy9fbmF2YmFyLnNjc3MiLCIvVXNlcnMva2lyc3RlbnN3YW5zb24va3N3YW5zb24uZ2l0aHViLmlvL2xpYi9jc3MvcGFydGlhbHMvX2ludHJvZHVjdGlvbi5zY3NzIiwiL1VzZXJzL2tpcnN0ZW5zd2Fuc29uL2tzd2Fuc29uLmdpdGh1Yi5pby9saWIvY3NzL3BhcnRpYWxzL19pbWFnZS10ZXh0LnNjc3MiLCIvVXNlcnMva2lyc3RlbnN3YW5zb24va3N3YW5zb24uZ2l0aHViLmlvL2xpYi9jc3MvcGFydGlhbHMvX3BvcnRmb2xpby5zY3NzIiwiL1VzZXJzL2tpcnN0ZW5zd2Fuc29uL2tzd2Fuc29uLmdpdGh1Yi5pby9saWIvY3NzL3BhcnRpYWxzL19hYm91dC5zY3NzIiwiL1VzZXJzL2tpcnN0ZW5zd2Fuc29uL2tzd2Fuc29uLmdpdGh1Yi5pby9saWIvY3NzL3BhcnRpYWxzL19jb250YWN0LWZvcm0uc2NzcyIsIi9Vc2Vycy9raXJzdGVuc3dhbnNvbi9rc3dhbnNvbi5naXRodWIuaW8vbGliL2Nzcy9wYXJ0aWFscy9fZm9vdGVyLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi9wYXJ0aWFscy9fcmVzZXQnO1xuQGltcG9ydCAnLi9tb2R1bGVzL192YXJpYWJsZXMnO1xuQGltcG9ydCAnLi9tb2R1bGVzL192ZW5kb3JzJztcbkBpbXBvcnQgJy4vbW9kdWxlcy9fbWl4aW5zJztcbkBpbXBvcnQgJy4vcGFydGlhbHMvX2JvZHknO1xuQGltcG9ydCAnLi9wYXJ0aWFscy9fbmF2YmFyJztcbkBpbXBvcnQgJy4vcGFydGlhbHMvX2ludHJvZHVjdGlvbic7XG5AaW1wb3J0ICcuL3BhcnRpYWxzL19pbWFnZS10ZXh0JztcbkBpbXBvcnQgJy4vcGFydGlhbHMvX3BvcnRmb2xpbyc7XG5AaW1wb3J0ICcuL3BhcnRpYWxzL19hYm91dCc7XG5AaW1wb3J0ICcuL3BhcnRpYWxzL19jb250YWN0LWZvcm0nO1xuQGltcG9ydCAnLi9wYXJ0aWFscy9fZm9vdGVyJztcbiIsIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvXG4gICB2Mi4wIHwgMjAxMTAxMjZcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4qL1xuXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsIHEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuIiwiJGdyYXktYWNjZW50LWNvbG9yOiAjQTNBNkFCO1xuXG4kdGVhbC1hY2NlbnQtY29sb3I6ICMwMEFEQjU7XG5cbiRvZmYtd2hpdGUtY29sb3I6ICNFRUU7XG5cbiRibGFjay1hY2NlbnQtY29sb3I6ICMyMjI4MzE7XG5cbiRmb250LWxvcmE6ICdMb3JhJywgc2VyaWY7XG5cbiRmb250LXNvdXJjZS1zYW5zLXBybzogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4iLCIvLyBhbmltYXRpb24gdHJhbnNmb3JtIGZvciBpbnRyb2R1Y3Rpb25cbkAtbW96LWtleWZyYW1lcyB0b3BUb0JvdHRvbSB7XG5cdDAlIHsgb3BhY2l0eTogMDsgfVxuXHQ1JSB7IG9wYWNpdHk6IDA7IC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTsgfVxuXHQxMCUgeyBvcGFjaXR5OiAxOyAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9XG5cdDI1JSB7IG9wYWNpdHk6IDE7IC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cblx0MzAlIHsgb3BhY2l0eTogMDsgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxuXHQ4MCUgeyBvcGFjaXR5OiAwOyB9XG5cdDEwMCUgeyBvcGFjaXR5OiAwOyB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyB0b3BUb0JvdHRvbSB7XG5cdDAlIHsgb3BhY2l0eTogMDsgfVxuXHQ1JSB7IG9wYWNpdHk6IDA7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTsgfVxuXHQxMCUgeyBvcGFjaXR5OiAxOyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9XG5cdDI1JSB7IG9wYWNpdHk6IDE7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cblx0MzAlIHsgb3BhY2l0eTogMDsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxuXHQ4MCUgeyBvcGFjaXR5OiAwOyB9XG5cdDEwMCUgeyBvcGFjaXR5OiAwOyB9XG59XG5cbkAtbXMta2V5ZnJhbWVzIHRvcFRvQm90dG9tIHtcblx0MCUgeyBvcGFjaXR5OiAwOyB9XG5cdDUlIHsgb3BhY2l0eTogMDsgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7IH1cblx0MTAlIHsgb3BhY2l0eTogMTsgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9XG5cdDI1JSB7IG9wYWNpdHk6IDE7IC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxuXHQzMCUgeyBvcGFjaXR5OiAwOyAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cblx0ODAlIHsgb3BhY2l0eTogMDsgfVxuXHQxMDAlIHsgb3BhY2l0eTogMDsgfVxufVxuIiwiQG1peGluIGFuaW1hdGlvbi1yb3RhdGlvbiB7XG4gIGFuaW1hdGlvbjogdG9wVG9Cb3R0b20gOHMgbGluZWFyIGluZmluaXRlIDBzO1xuICAtbXMtYW5pbWF0aW9uOiB0b3BUb0JvdHRvbSA4cyBsaW5lYXIgaW5maW5pdGUgMHM7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiB0b3BUb0JvdHRvbSA4cyBsaW5lYXIgaW5maW5pdGUgMHM7XG59XG5cbkBtaXhpbiBhbmltYXRpb24tdGltaW5nLTRzIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiA0cztcbiAgLW1zLWFuaW1hdGlvbi1kZWxheTogNHM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA0cztcbn1cblxuQG1peGluIHJvdGF0aW5nLWludHJvLXRleHQge1xuICBjb2xvcjogJGJsYWNrLWFjY2VudC1jb2xvcjtcbiAgZm9udC1mYW1pbHk6ICRmb250LWxvcmE7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbkBtaXhpbiBpbnB1dC1mb3JtYXQge1xuICBiYWNrZ3JvdW5kOiAkb2ZmLXdoaXRlLWNvbG9yO1xuICBjb2xvcjogJGJsYWNrLWFjY2VudC1jb2xvcjtcbiAgZm9udC1mYW1pbHk6ICRmb250LXNvdXJjZS1zYW5zLXBybztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBvdXRsaW5lLWNvbG9yOiBkYXJrZW4oJHRlYWwtYWNjZW50LWNvbG9yLCAxMCUpO1xuICBwYWRkaW5nOiA1cHg7XG59XG4iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSwgaHRtbCB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi9pbWcvd29vZC5qcGcnKSBuby1yZXBlYXQgZml4ZWQ7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI2ludHJvZHVjdGlvbiwgI2ltYWdlIHtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJG9mZi13aGl0ZS1jb2xvcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtYXJnaW46IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDgwJTtcbn1cblxuI2ltYWdlIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuL2ltZy9mbG93ZXIuanBnJykgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uY29udGFpbmVyLWJyZWFrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRlYWwtYWNjZW50LWNvbG9yO1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDgwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcwcHgpIHtcbiAgI2ludHJvZHVjdGlvbiwgI2ltYWdlLCAuY29udGFpbmVyLWJyZWFrIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIiwiaGVhZGVyIHtcbiAgbGVmdDogMTAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA4MCU7XG4gIHotaW5kZXg6IDI7XG59XG5cbm5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6JGJsYWNrLWFjY2VudC1jb2xvcjtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA3MHB4O1xuICB1bCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxubmF2IGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGEge1xuICAgIGNvbG9yOiAkdGVhbC1hY2NlbnQtY29sb3I7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWxvcmE7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICB9XG59XG5cbi53ZWJzaXRlLW5hdiBhOmhvdmVyIHtcbiAgY29sb3I6ICRvZmYtd2hpdGUtY29sb3I7XG59XG5cbi5sb2dvIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgcGFkZGluZy10b3A6IDZweDtcbn1cblxuLmhhbWJ1cmdlci1tZW51IHtcbiAgaGVpZ2h0OiA0NXB4O1xuICBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDE1cHggMCAwO1xufVxuXG4ub3ZlcmxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzQsIDQwLCA0OCwgMC45KTtcbiAgaGVpZ2h0OiAwJTtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHRvcDogMDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5vdmVybGF5LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiAzMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB1bCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgbGkge1xuICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgfVxuICB9XG59XG5cbi5jbG9zZS1uYXYge1xuICBjb2xvcjogJHRlYWwtYWNjZW50LWNvbG9yO1xuICBmb250LXNpemU6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE5cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICRvZmYtd2hpdGUtY29sb3I7XG4gIH1cbn1cblxuLm1vYmlsZS1uYXYgYSB7XG4gIGNvbG9yOiAkdGVhbC1hY2NlbnQtY29sb3I7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1sb3JhO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAkb2ZmLXdoaXRlLWNvbG9yO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcwcHgpIHtcbiAgaGVhZGVyIHtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC53ZWJzaXRlLW5hdiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaGFtYnVyZ2VyLW1lbnUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4iLCIjaW50cm9kdWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy10b3A6IDMyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmgxIHtcbiAgQGluY2x1ZGUgcm90YXRpbmctaW50cm8tdGV4dDtcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbn1cblxuLnJvdGF0aW5nLXdvcmRzIHtcbiAgQGluY2x1ZGUgcm90YXRpbmctaW50cm8tdGV4dDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHR0ZXh0LWluZGVudDogNnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ucm90YXRpbmctd29yZHMgc3BhbiB7XG4gIEBpbmNsdWRlIGFuaW1hdGlvbi1yb3RhdGlvbjtcblx0b3BhY2l0eTogMDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0cG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucm90YXRpbmctd29yZHMgIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgQGluY2x1ZGUgYW5pbWF0aW9uLXRpbWluZy00cztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcwcHgpIHtcbiAgI2ludHJvZHVjdGlvbiB7XG4gICAgbWluLWhlaWdodDogNTAlO1xuICAgIHBhZGRpbmc6IDI1MHB4IDA7XG4gIH1cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIH1cbiAgLnJvdGF0aW5nLXdvcmRzIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE1cHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gIH1cbiAgLnJvdGF0aW5nLXdvcmRzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB0ZXh0LWluZGVudDogMDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgfVxuICAucm90YXRpbmctd29yZHMge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxufVxuIiwiLmRlc2NyaXB0aXZlLW5vdW5zIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLXRvcDogMTcwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDc1MHB4O1xufVxuXG4ubm91bnMge1xuICBjb2xvcjogJGJsYWNrLWFjY2VudC1jb2xvcjtcbiAgZm9udC1mYW1pbHk6ICRmb250LWxvcmE7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDU4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG4uYWJvdXQtbWUtbGluayB7XG4gIGNvbG9yOiAkdGVhbC1hY2NlbnQtY29sb3I7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1zb3VyY2Utc2Fucy1wcm87XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NzBweCkge1xuICAjaW1hZ2Uge1xuICAgIG1pbi1oZWlnaHQ6IDUwJTtcbiAgfVxuICAuZGVzY3JpcHRpdmUtbm91bnMge1xuICAgIHBhZGRpbmc6IDEwMHB4IDA7XG4gIH1cbiAgLm5vdW5zIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE1cHgpIHtcbiAgLmRlc2NyaXB0aXZlLW5vdW5zIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG4gIC5ub3VucyB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICB9XG59XG4iLCIjcG9ydGZvbGlvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJG9mZi13aGl0ZS1jb2xvcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogODAlO1xuICBpbWcge1xuICAgIGhlaWdodDogMjU2cHg7XG4gICAgd2lkdGg6IDI1NnB4O1xuICB9XG59XG5cbiNwb3J0Zm9saW8tbGluazpiZWZvcmUge1xuIGNvbnRlbnQ6IFwiXCI7XG4gZGlzcGxheTogYmxvY2s7XG4gaGVpZ2h0OiA3MHB4O1xuIG1hcmdpbi10b3A6IC03MHB4O1xuIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuI3BvcnRmb2xpbyBhcnRpY2xlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDI1NnB4O1xuICB3aWR0aDogMjU2cHg7XG4gIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG59XG5cbiBoMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICR0ZWFsLWFjY2VudC1jb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjb2xvcjogJGJsYWNrLWFjY2VudC1jb2xvcjtcbiAgZm9udC1mYW1pbHk6ICRmb250LWxvcmE7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMTBweCAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDIyMHB4O1xuICB6LWluZGV4OiAxO1xuICAmOmhvdmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5jb2xvci1pbWFnZSB7XG4gIG9wYWNpdHk6IDAuMTtcbiAgei1pbmRleDogMTtcbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MHB4KSB7XG4gICNwb3J0Zm9saW8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MHB4KSB7XG4gICNwb3J0Zm9saW8gaW1nIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxuICAjcG9ydGZvbGlvIGFydGljbGUge1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbjogMTBweCAwO1xuICB9XG4gICNwb3J0Zm9saW8gYXJ0aWNsZTpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNXB4KSB7XG4gICNwb3J0Zm9saW8gYXJ0aWNsZTpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxufVxuIiwiI2Fib3V0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRlYWwtYWNjZW50LWNvbG9yO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiA1MHB4IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDgwJTtcbn1cblxuI2Fib3V0LWxpbms6YmVmb3JlIHtcbiBjb250ZW50OiBcIlwiO1xuIGRpc3BsYXk6IGJsb2NrO1xuIGhlaWdodDogNzBweDtcbiBtYXJnaW4tdG9wOiAtNzBweDtcbiB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5jcmVkZW50aWFscyB7XG4gIHdpZHRoOiA1NSU7XG59XG5cbi5pbnRybyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRvZmYtd2hpdGUtY29sb3I7XG4gIHBhZGRpbmc6IDAgMTVweCAwIDI1cHg7XG4gIHdpZHRoOiA0NCU7XG59XG5cbi5za2lsbHMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJG9mZi13aGl0ZS1jb2xvcjtcbiAgbWFyZ2luOiAwIDEycHg7XG4gIHBhZGRpbmc6IDAgMjBweCAxMHB4IDIwcHg7XG59XG5cbi5lZHVjYXRpb24ge1xuICBtYXJnaW46IDIwcHggMTJweCAwIDEycHg7XG4gIHBhZGRpbmc6IDAgMjBweCAxMHB4IDIwcHg7XG59XG5cbmgyIHtcbiAgY29sb3I6ICRibGFjay1hY2NlbnQtY29sb3I7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1sb3JhO1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbnAge1xuICBjb2xvcjogJGJsYWNrLWFjY2VudC1jb2xvcjtcbiAgZm9udC1mYW1pbHk6ICRmb250LXNvdXJjZS1zYW5zLXBybztcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MHB4KSB7XG4gICNhYm91dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgI2Fib3V0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5pbnRybywgLmNyZWRlbnRpYWxzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuaW50cm8ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJG9mZi13aGl0ZS1jb2xvcjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB3aWR0aDogOTUlO1xuICB9XG4gIC5za2lsbHMge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICB9XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gIH1cbn1cbiIsIi5jb250YWN0LWZvcm0ge1xuICBtYXJnaW46IDIwcHggMTJweCAwIDEycHg7XG4gIHBhZGRpbmc6IDAgMjBweCAxMHB4IDIwcHg7XG59XG5cbmlucHV0IHtcbiAgQGluY2x1ZGUgaW5wdXQtZm9ybWF0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHdpZHRoOiAyMTVweDtcbn1cblxudGV4dGFyZWEge1xuICBAaW5jbHVkZSBpbnB1dC1mb3JtYXQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHJlc2l6ZTogbm9uZTtcbiAgd2lkdGg6IDg4JTtcbn1cblxuLmZvcm0tbmFtZSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uc3VibWl0LWZvcm0tYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogZGFya2VuKCRncmF5LWFjY2VudC1jb2xvciwgMTAlKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4IDBweCByZ2JhKDAsMCwwLDAuNTApO1xuICBjb2xvcjogJG9mZi13aGl0ZS1jb2xvcjtcbiAgZm9udC1mYW1pbHk6ICRmb250LXNvdXJjZS1zYW5zLXBybztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDQwcHggMCAwIDEwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgd2lkdGg6IDUwcHg7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGRhcmtlbigkdGVhbC1hY2NlbnQtY29sb3IsIDEwJSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIGlucHV0LCB0ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLnN1Ym1pdC1mb3JtLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICB9XG59XG4iLCJmb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiA4MCU7XG59XG5cbmZvb3RlciB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICB9XG59XG5cbi5zb2NpYWwtbWVkaWEge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBtYXJnaW46IDAgN3B4O1xufVxuXG4uc3dpdGNoLWljb24gLnRlYWwtaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zd2l0Y2gtaWNvbjpob3ZlciAuc29jaWFsLW1lZGlhLFxuLnN3aXRjaC1pY29uOmFjdGl2ZSAuc29jaWFsLW1lZGlhIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnN3aXRjaC1pY29uOmhvdmVyIC50ZWFsLWljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIDdweDtcbn1cblxuLmNvcHlyaWdodCB7XG4gIGNvbG9yOiAkZ3JheS1hY2NlbnQtY29sb3I7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1zb3VyY2Utc2Fucy1wcm87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcwcHgpIHtcbiAgZm9vdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuY29weXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFDQUE7OztFQUdFO0FBRUYsQUFBQSxJQUFJLEVBQUUsQUFBQSxJQUFJLEVBQUUsQUFBQSxHQUFHLEVBQUUsQUFBQSxJQUFJLEVBQUUsQUFBQSxNQUFNLEVBQUUsQUFBQSxNQUFNLEVBQUUsQUFBQSxNQUFNO0FBQzdDLEFBQUEsRUFBRSxFQUFFLEFBQUEsRUFBRSxFQUFFLEFBQUEsRUFBRSxFQUFFLEFBQUEsRUFBRSxFQUFFLEFBQUEsRUFBRSxFQUFFLEFBQUEsRUFBRSxFQUFFLEFBQUEsQ0FBQyxFQUFFLEFBQUEsVUFBVSxFQUFFLEFBQUEsR0FBRztBQUMxQyxBQUFBLENBQUMsRUFBRSxBQUFBLElBQUksRUFBRSxBQUFBLE9BQU8sRUFBRSxBQUFBLE9BQU8sRUFBRSxBQUFBLEdBQUcsRUFBRSxBQUFBLElBQUksRUFBRSxBQUFBLElBQUk7QUFDMUMsQUFBQSxHQUFHLEVBQUUsQUFBQSxHQUFHLEVBQUUsQUFBQSxFQUFFLEVBQUUsQUFBQSxHQUFHLEVBQUUsQUFBQSxHQUFHLEVBQUUsQUFBQSxHQUFHLEVBQUUsQUFBQSxDQUFDLEVBQUUsQUFBQSxDQUFDLEVBQUUsQUFBQSxJQUFJO0FBQ3ZDLEFBQUEsS0FBSyxFQUFFLEFBQUEsTUFBTSxFQUFFLEFBQUEsTUFBTSxFQUFFLEFBQUEsR0FBRyxFQUFFLEFBQUEsR0FBRyxFQUFFLEFBQUEsRUFBRSxFQUFFLEFBQUEsR0FBRztBQUN4QyxBQUFBLENBQUMsRUFBRSxBQUFBLENBQUMsRUFBRSxBQUFBLENBQUMsRUFBRSxBQUFBLE1BQU07QUFDZixBQUFBLEVBQUUsRUFBRSxBQUFBLEVBQUUsRUFBRSxBQUFBLEVBQUUsRUFBRSxBQUFBLEVBQUUsRUFBRSxBQUFBLEVBQUUsRUFBRSxBQUFBLEVBQUU7QUFDdEIsQUFBQSxRQUFRLEVBQUUsQUFBQSxJQUFJLEVBQUUsQUFBQSxLQUFLLEVBQUUsQUFBQSxNQUFNO0FBQzdCLEFBQUEsS0FBSyxFQUFFLEFBQUEsT0FBTyxFQUFFLEFBQUEsS0FBSyxFQUFFLEFBQUEsS0FBSyxFQUFFLEFBQUEsS0FBSyxFQUFFLEFBQUEsRUFBRSxFQUFFLEFBQUEsRUFBRSxFQUFFLEFBQUEsRUFBRTtBQUMvQyxBQUFBLE9BQU8sRUFBRSxBQUFBLEtBQUssRUFBRSxBQUFBLE1BQU0sRUFBRSxBQUFBLE9BQU8sRUFBRSxBQUFBLEtBQUs7QUFDdEMsQUFBQSxNQUFNLEVBQUUsQUFBQSxVQUFVLEVBQUUsQUFB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 */", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "data:image/jpg;base64,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"

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "data:image/jpg;base64,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"

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);