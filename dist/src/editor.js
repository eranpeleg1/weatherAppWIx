'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var addContainer = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(editorSDK, appToken, controllerRef, containerRef) {
        var _properties;

        var componentDefinition;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        componentDefinition = {
                            componentType: 'mobile.core.components.Container',
                            layout: {
                                x: 310,
                                y: 210,
                                width: 300,
                                height: 300
                            },
                            'type': 'Container',
                            "style": {
                                componentClassName: "mobile.core.components.Container",
                                metaData: {
                                    isHidden: false,
                                    isPreset: false,
                                    schemaVersion: "1.0"
                                },
                                skin: "wysiwyg.viewer.skins.area.AppleArea",
                                styleType: "custom",
                                type: "TopLevelStyle",
                                style: {
                                    properties: (_properties = {
                                        bg: "color_18", rd: "10px 10px 10px 10px", shd: "0 1px 4px rgba(0, 0, 0, 0.6)", brw: "1px",
                                        brd: "color_15" }, _defineProperty(_properties, 'brw', "1px"), _defineProperty(_properties, 'rd', "10px 10px 10px 10px"), _defineProperty(_properties, 'shd', "0 1px 4px rgba(0, 0, 0, 0.6)"), _properties),
                                    propertiesSource: _defineProperty({
                                        bg: "theme", rd: "value", shd: "value", brw: "value", brd: "theme" }, 'shd', "value")
                                }
                            }
                        };
                        _context.next = 3;
                        return editorSDK.components.add(appToken, { componentDefinition: componentDefinition, pageRef: containerRef });

                    case 3:
                        compRef = _context.sent;

                        editorSDK.controllers.connect(appToken, connection('container_role'));
                        editorSDK.document.components.data.update(appToken, {
                            componentRef: controllerRef,
                            data: {
                                settings: JSON.stringify(Object.assign({}, controllerConfig))
                            }
                        });
                        return _context.abrupt('return', compRef);

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function addContainer(_x, _x2, _x3, _x4) {
        return _ref.apply(this, arguments);
    };
}();

var addText = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(editorSDK, appToken, controllerRef, containerRef, role, x, y, text, hNumber) {
        var componentDefinition;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        componentDefinition = {
                            componentType: 'wysiwyg.viewer.components.WRichText',
                            layout: {
                                x: x,
                                y: y,
                                width: 300,
                                height: 300

                            },
                            data: {
                                type: "StyledText",
                                text: '<h' + hNumber + ' class="font_' + hNumber + '" style="color:#FFFFFF">' + text + '</h' + hNumber + '>',
                                stylesMapId: "CK_EDITOR_PARAGRAPH_STYLES"

                            },
                            'type': 'Component',
                            'props': {
                                type: 'WRichTextProperties'
                            },
                            'style': 'txtNew'
                        };
                        _context2.next = 3;
                        return editorSDK.components.add(appToken, { componentDefinition: componentDefinition, pageRef: containerRef });

                    case 3:
                        compRef = _context2.sent;

                        editorSDK.controllers.connect(appToken, connection(role));
                        return _context2.abrupt('return', compRef);

                    case 6:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function addText(_x5, _x6, _x7, _x8, _x9, _x10, _x11, _x12, _x13) {
        return _ref2.apply(this, arguments);
    };
}();

var addImage = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(editorSDK, appToken, controllerRef, containerRef, role, x, y, icon) {
        var componentDefinition;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        componentDefinition = {
                            componentType: 'wysiwyg.viewer.components.WPhoto',
                            layout: {
                                x: x,
                                y: y,
                                width: 170,
                                height: 170

                            },
                            data: {
                                type: "Image",
                                metaData: { isPreset: false, schemaVersion: "1.0", isHidden: false },
                                uri: 'https://openweathermap.org/img/w/' + icon + '.png',
                                stylesMapId: "CK_EDITOR_PARAGRAPH_STYLES"

                            },
                            'type': 'Component',
                            'props': {
                                type: 'WPhotoProperties'
                            },
                            'style': 'wp2'
                        };
                        _context3.next = 3;
                        return editorSDK.components.add(appToken, { componentDefinition: componentDefinition, pageRef: containerRef });

                    case 3:
                        compRef = _context3.sent;

                        editorSDK.controllers.connect(appToken, connection(role));
                        return _context3.abrupt('return', compRef);

                    case 6:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function addImage(_x14, _x15, _x16, _x17, _x18, _x19, _x20, _x21) {
        return _ref3.apply(this, arguments);
    };
}();

var addButton = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(editorSDK, appToken, controllerRef, containerRef, role, x, y, icon) {
        var _properties2, _propertiesSource2;

        var componentDefinition;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        componentDefinition = {
                            componentType: 'wysiwyg.viewer.components.SiteButton',
                            layout: {
                                x: x,
                                y: y,
                                width: 128,
                                height: 40
                            },
                            data: {
                                label: "fetch weather",
                                link: "",
                                metaData: { isPreset: false, schemaVersion: "1.0", isHidden: false },
                                type: "LinkableButton"
                            },
                            'type': 'Component',
                            'props': {
                                margin: 0,
                                align: 'center',
                                metaData: { isPreset: false, schemaVersion: "1.0", isHidden: false },
                                type: 'ButtonProperties'
                            },
                            style: {
                                metaData: { isPreset: false, schemaVersion: "1.0", isHidden: false },
                                skin: 'wysiwyg.viewer.skins.button.BasicButton',
                                componentClassName: 'wysiwyg.viewer.components.SiteButton',
                                style: {
                                    properties: (_properties2 = { 'alpha-bg': "1", 'alpha-bgh': "1", 'alpha-brd': "1", 'alpha-brdh': "1",
                                        bg: "#566FB8", bgh: '#3E569E', rd: "20px", shd: "0.00px 3.00px 0px 0px rgba(86,111,184,0.6)", brw: "0px",
                                        fnt: "normal normal normal 14px/1.4em clarendon-w01-medium-692107",
                                        brd: "#2B689C", brdh: "#536EB7" }, _defineProperty(_properties2, 'rd', "10px 10px 10px 10px"), _defineProperty(_properties2, 'shd', "0 1px 4px rgba(0, 0, 0, 0.6)"), _defineProperty(_properties2, 'boxShadowToggleOn-shd', "true"), _defineProperty(_properties2, 'txt', '#FFFFFF'), _defineProperty(_properties2, 'txth', '#FFFFFF'), _properties2),
                                    propertiesSource: (_propertiesSource2 = {
                                        'alpha-bg': 'value', 'alpha-bgh': 'value', 'alpha-brd': 'value', 'alpha-brdh': 'value',
                                        bg: 'value', bgh: 'value', rd: 'value', shd: 'value', brw: 'value', fnt: 'value',
                                        brd: 'value', brdh: 'value' }, _defineProperty(_propertiesSource2, 'rd', 'value'), _defineProperty(_propertiesSource2, 'shd', 'value'), _defineProperty(_propertiesSource2, 'boxShadowToggleOn-shd', 'value'), _defineProperty(_propertiesSource2, 'txt', 'value'), _defineProperty(_propertiesSource2, 'txth', 'value'), _propertiesSource2)
                                },
                                styleType: "custom",
                                type: "TopLevelStyle"
                            }

                        };
                        _context4.next = 3;
                        return editorSDK.components.add(appToken, { componentDefinition: componentDefinition, pageRef: containerRef });

                    case 3:
                        compRef = _context4.sent;

                        editorSDK.controllers.connect(appToken, connection(role));
                        return _context4.abrupt('return', compRef);

                    case 6:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));

    return function addButton(_x22, _x23, _x24, _x25, _x26, _x27, _x28, _x29) {
        return _ref4.apply(this, arguments);
    };
}();

var controllerAlreadyExists = function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(controllerType) {
        var controllers, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, controller, data;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        _context7.next = 2;
                        return _editorSDK.controllers.listAllControllers(_token);

                    case 2:
                        controllers = _context7.sent;
                        _iteratorNormalCompletion = true;
                        _didIteratorError = false;
                        _iteratorError = undefined;
                        _context7.prev = 6;
                        _iterator = controllers[Symbol.iterator]();

                    case 8:
                        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                            _context7.next = 18;
                            break;
                        }

                        controller = _step.value;
                        _context7.next = 12;
                        return _editorSDK.controllers.getData(_token, controller);

                    case 12:
                        data = _context7.sent;

                        if (!(data.controllerType === controllerType)) {
                            _context7.next = 15;
                            break;
                        }

                        return _context7.abrupt('return', true);

                    case 15:
                        _iteratorNormalCompletion = true;
                        _context7.next = 8;
                        break;

                    case 18:
                        _context7.next = 24;
                        break;

                    case 20:
                        _context7.prev = 20;
                        _context7.t0 = _context7['catch'](6);
                        _didIteratorError = true;
                        _iteratorError = _context7.t0;

                    case 24:
                        _context7.prev = 24;
                        _context7.prev = 25;

                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }

                    case 27:
                        _context7.prev = 27;

                        if (!_didIteratorError) {
                            _context7.next = 30;
                            break;
                        }

                        throw _iteratorError;

                    case 30:
                        return _context7.finish(27);

                    case 31:
                        return _context7.finish(24);

                    case 32:
                        return _context7.abrupt('return', false);

                    case 33:
                    case 'end':
                        return _context7.stop();
                }
            }
        }, _callee7, this, [[6, 20, 24, 32], [25,, 27, 31]]);
    }));

    return function controllerAlreadyExists(_x34) {
        return _ref9.apply(this, arguments);
    };
}();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _editorSDK = void 0;
var _token = void 0;
var compRef = void 0;
var controllerRef = void 0;
var applicationId = void 0;
var controllerConfig = { city: 'Tel Aviv', country: "IL", isCelsius: true, time: 60 };

var setControllerConfig = function setControllerConfig(newConfig) {
    controllerConfig = newConfig;
};

var connection = function connection(role) {
    return {
        connectToRef: compRef,
        controllerRef: controllerRef,
        role: role,
        connectionConfig: {},
        isPrimary: true
    };
};

module.exports = {

    editorReady: function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(editorSDK, token, _ref6) {
            var firstInstall = _ref6.firstInstall;
            var pageRef, date, containerRef, cityText, dateText, weather_icon, degreeText, descriptionText, fetchButton;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _editorSDK = editorSDK;
                            _token = token;
                            _context5.t0 = firstInstall;

                            if (_context5.t0) {
                                _context5.next = 7;
                                break;
                            }

                            _context5.next = 6;
                            return controllerAlreadyExists('containerController');

                        case 6:
                            _context5.t0 = !_context5.sent;

                        case 7:
                            if (!_context5.t0) {
                                _context5.next = 43;
                                break;
                            }

                            console.log('Creating missing controller!');
                            _context5.next = 11;
                            return editorSDK.info.getAppDefinitionId(token);

                        case 11:
                            applicationId = _context5.sent;
                            _context5.next = 14;
                            return editorSDK.document.pages.getCurrent(token);

                        case 14:
                            pageRef = _context5.sent;
                            _context5.next = 17;
                            return editorSDK.components.add(token, {
                                componentDefinition: {
                                    componentType: 'platform.components.AppController',
                                    data: {
                                        type: 'AppController',
                                        controllerType: 'containerController',
                                        applicationId: applicationId,
                                        settings: JSON.stringify(Object.assign({}, controllerConfig))
                                    }
                                },
                                pageRef: pageRef
                            });

                        case 17:
                            controllerRef = _context5.sent;
                            date = new Date();

                            date = date.toDateString();
                            _context5.next = 22;
                            return editorSDK.editor.setAppAPI(applicationId, { setControllerConfig: setControllerConfig });

                        case 22:
                            _context5.next = 24;
                            return addContainer(editorSDK, applicationId, controllerRef, pageRef);

                        case 24:
                            containerRef = _context5.sent;
                            _context5.next = 27;
                            return addText(editorSDK, applicationId, controllerRef, containerRef, 'city_role', 10, 10, controllerConfig.city + ", " + controllerConfig.country, 4);

                        case 27:
                            cityText = _context5.sent;
                            _context5.next = 30;
                            return addText(editorSDK, applicationId, controllerRef, containerRef, 'date_role', 10, 48, date, 5);

                        case 30:
                            dateText = _context5.sent;
                            _context5.next = 33;
                            return addImage(editorSDK, applicationId, controllerRef, containerRef, 'icon_role', -7, 55, '01d');

                        case 33:
                            weather_icon = _context5.sent;
                            _context5.next = 36;
                            return addText(editorSDK, applicationId, controllerRef, containerRef, 'degree_role', 10, 195, controllerConfig.isCelsius ? "C" : "F", 4);

                        case 36:
                            degreeText = _context5.sent;
                            _context5.next = 39;
                            return addText(editorSDK, applicationId, controllerRef, containerRef, 'description_role', 10, 238, 'Fair', 5);

                        case 39:
                            descriptionText = _context5.sent;
                            _context5.next = 42;
                            return addButton(editorSDK, applicationId, controllerRef, containerRef, 'button_role', 163, 196);

                        case 42:
                            fetchButton = _context5.sent;

                        case 43:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, undefined);
        }));

        return function editorReady(_x30, _x31, _x32) {
            return _ref5.apply(this, arguments);
        };
    }(),

    onEvent: function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_ref8) {
            var eventType = _ref8.eventType,
                eventPayload = _ref8.eventPayload;
            var componentRef, options;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            componentRef = eventPayload.componentRef;

                            if (!(eventType === 'componentGfppClicked')) {
                                _context6.next = 5;
                                break;
                            }

                            options = {
                                title: 'weather-app settings',
                                url: './settings.html',
                                initialData: {
                                    componentRef: componentRef,
                                    controllerRef: controllerRef,
                                    controllerConfig: controllerConfig,
                                    applicationId: applicationId
                                },
                                width: 400,
                                height: 530
                            };
                            _context6.next = 5;
                            return _editorSDK.editor.openComponentPanel(_token, _extends({}, options, {
                                componentRef: componentRef
                            }));

                        case 5:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, undefined);
        }));

        return function onEvent(_x33) {
            return _ref7.apply(this, arguments);
        };
    }(),

    getAppManifest: function getAppManifest() {

        var containerManifest = {
            gfpp: {
                desktop: {
                    mainAction1: { label: 'settings', actionId: "SETTINGS" },
                    iconButtons: {
                        layout: 'HIDE',
                        design: 'HIDE',
                        animation: 'HIDE',
                        help: 'HIDE',
                        customizeDesign: 'HIDE'
                    }
                }
            } };

        return {
            controllersStageData: {
                containerController: {
                    default: {
                        connections: {
                            container_role: containerManifest
                        }

                    }
                }
            },
            exports: {
                containerController: {
                    tagname: 'containerController',
                    widgetDisplayName: '',
                    eventHandlers: {},
                    synthetic: false,
                    inherits: {},
                    members: {
                        randomize: {
                            description: 'Randomize image sources',
                            kind: 'function'
                        }
                    }
                }
            }
        };
    }

};
//# sourceMappingURL=editor.js.map