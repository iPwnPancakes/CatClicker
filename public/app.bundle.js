/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const Cat = function (name, src, cnt) {
    let Name = name;
    let Src = src;
    let Count = cnt;

    return {
        getName: () => { return Name },
        getSrc: () => { return Src },
        getCount: () => { return Count },

        setName: (name) => { Name = name },
        setSrc: (src) => { Src = src },
        setCount: (count) => { Count = count },

        increment: function () { Count++ },
        equals: function(cat) {
            if(cat.getName() === Name && cat.getCount() === Count && cat.getSrc() === Src) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}

module.exports = { Cat };


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "body {\n    text-align: center;\n}\n\n.menu {\n    float: left;\n    margin-top: 5%;\n    width: 25%;\n\n    background-color: #9a9a9a;\n}\n\n#CatDetails {\n    float: right;\n    width: 74%;\n\n    padding-bottom: 10px;\n\n    background-color: #9a9a9a;\n}\n\n#menu {\n    padding: 0;\n}\n\n#menu li {\n    list-style-type: none;\n}\n\n.menu li h2 {\n    cursor: pointer;\n\n    margin: 2px;\n    padding: 0;\n\n    background-color: #ccc;\n}\n\n.active {\n    display: block;\n}\n\n.inactive {\n    display: none;\n}\n\n#catImg {\n    width: 400px;\n    height: 400px;\n\n    cursor: pointer;\n}\n\n#admin-form {\n    display: none;\n}\n\n#admin-form label {\n    float: left;\n    margin-left: 25%;\n    text-align: right;\n}\n\n#admin-form input {\n    float: right;\n    margin-right: 25%;\n}\n", ""]);

// exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

let Controller = __webpack_require__(4).Controller;

let View = {
    Menu: {
        createMenuEntry: function(catObj) {
            let listItem = document.createElement('li');

            let listItemText = document.createElement('h2');

            listItemText.textContent = catObj.getName();

            listItemText.addEventListener('click', (event) => {
                Controller.setCurrentCat(event.srcElement.textContent);
                View.CatArea.render();

                console.log(Controller.getCurrentCatObj().getName());
            });

            listItem.appendChild(listItemText);

            return listItem;
        },
        render: function() {
            let Cats = Controller.getAllCats();
            let menu = document.getElementById('menu');

            while(menu.hasChildNodes()) { // Removes all cat entries in the cat menu, then rebuilds the list
                menu.removeChild(menu.firstChild);
            }

            Cats.map(cat => {
                let listItem = View.Menu.createMenuEntry(cat);

                menu.appendChild(listItem)
            });
        }
    },
    CatArea: {
        render: function() {
            let cat = Controller.getCurrentCatObj();

            document.getElementById('catHeader').textContent = cat.getName();

            document.getElementById('catImg').src = cat.getSrc();

            document.getElementById('catCounter').textContent = 'Times Clicked: ' + cat.getCount();
        }
    },
    AdminArea: {
        render: function() {
            document.getElementById('admin-btn').addEventListener('click', () => {
                    document.getElementById('admin-form').style.display = 'block';
            });

            document.getElementById('admin-Submit').addEventListener('click', () => {
                let name = document.getElementById('admin-CatName').value;
                let url = document.getElementById('admin-CatUrl').value;
                let count = Number(document.getElementById('admin-CatCount').value);

                Controller.addNewCat(name, url, count);
                
                View.Menu.render(); 
                View.CatArea.render();

                document.getElementById('admin-form').style.display = 'none';
            });

            document.getElementById('admin-Cancel').addEventListener('click', () => {
                document.getElementById('admin-form').style.display = 'none';
            });
        }
    },
    render: function() {
        View.Menu.render();

        View.CatArea.render();

        View.AdminArea.render();

        document.getElementById('catImg').addEventListener('click', function(e) {
            Controller.incrementCurrentCat();
            View.CatArea.render();
        });
    },

};

module.exports = { View };


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

let Model = __webpack_require__(5).Model;
let Cat = __webpack_require__(0).Cat;

let Controller = {
    getCurrentIndex: function() {
        return Model.Cats.findIndex(cat => cat.getName() === Model.CurrentCat.getName());
    },
    getCurrentCatObj: function() {
        return Model.get(Model.CurrentCat);
    },
    setCurrentCat: function(name) {
        let found = Model.Cats.findIndex(cat => cat.getName() === name);

        if(found) {
            Model.setCurrentCat(found);
        }
    },
    addNewCat: function(name, url, count) {
        let newCat = Cat(name, url, count);

        Model.add(newCat);

        Model.CurrentCat = Model.Cats.length - 1; // Set CurrentCat to newest cat
    },
    getAllCats: function() {
        return Model.Cats;
    },
    getCatAt: function(index) {
        return Model.get(index);
    },
    getCat: function(name) {
        return Model.searchName(name);
    },
    incrementCurrentCat: function() {
        Model.get(Model.CurrentCat).increment();
    }
};

module.exports = { Controller };


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

let Cat = __webpack_require__(0).Cat;

let Model = {
    CurrentCat: 0,
    Cats: [
        Cat('Friskers', '../../res/LickCat.jpg', 0),
        Cat('Purrito', '../../res/BaruCat.jpg', 0),
        Cat('Dabnel', '../../res/DeepCat.jpg', 0),
        Cat('Holly', '../../res/NubCat.jpg', 0),
        Cat('Grumpycat', '../../res/CozyCat.jpg', 0)
    ],
    add: function(cat) {
        Model.Cats.push(cat);
    },
    set: function(index, cat) {
        Model.Cats[index] = cat;
    },
    setCurrentCat: function(index) {
        Model.CurrentCat = index;
    },
    get: function(index) {
        return Model.Cats[index];
    },
    getByName: function(name) {
        return Model.Cats.find(cat => cat.getName() === name);
    },
}

module.exports = { Model };


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_style_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_style_css__);
let View = __webpack_require__(2).View;


window.onload = function() {
    View.render();
};


/***/ })
/******/ ]);