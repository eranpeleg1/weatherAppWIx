'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ROLE_BUTTON = 'button';
var ROLE_IMAGE = 'image';

var _window = window,
    editorSDK = _window.editorSDK,
    token = _window.token;
var App = (_temp = _class = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            isCelsius: _this.props.initialState.isCelsius !== undefined ? _this.props.initialState.isCelsius : true,
            city: _this.props.initialState.city !== undefined ? _this.props.initialState.city : "Tel Aviv",
            time: _this.props.initialState.time !== undefined ? _this.props.initialState.time : 60,
            country: _this.props.initialState.country !== undefined ? _this.props.initialState.country : "IL"
        };
        return _this;
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var applicationId = this.props.data.applicationId;
            var compRef = this.props.data.componentRef;
            var controllerRef = this.props.data.controllerRef;
            var controllerConfig = Object.assign({}, this.state);
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { style: { margin: 10 } },
                    _react2.default.createElement(
                        'h4',
                        { style: { marginBottom: 10 } },
                        'city:'
                    ),
                    _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', placeholder: 'enter city', value: this.state.city, onChange: function onChange(event) {
                            controllerConfig.city = event.target.value;
                            editorSDK.document.components.data.update(applicationId, {
                                componentRef: controllerRef,
                                data: {
                                    settings: JSON.stringify(Object.assign({}, controllerConfig))
                                }
                            });
                            _this2.props.api.setControllerConfig(controllerConfig);
                            _this2.setState({ city: event.target.value });
                        } })
                ),
                _react2.default.createElement(
                    'div',
                    { style: { margin: 10 } },
                    _react2.default.createElement(
                        'h4',
                        { style: { marginBottom: 10 } },
                        'country:'
                    ),
                    _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', placeholder: 'enter country', value: this.state.country, onChange: function onChange(event) {
                            controllerConfig.country = event.target.value;
                            editorSDK.document.components.data.update(applicationId, {
                                componentRef: controllerRef,
                                data: {
                                    settings: JSON.stringify(Object.assign({}, controllerConfig))
                                }
                            });
                            _this2.props.api.setControllerConfig(controllerConfig);
                            _this2.setState({ country: event.target.value });
                        } })
                ),
                _react2.default.createElement(
                    'div',
                    { style: { margin: 10 } },
                    _react2.default.createElement(
                        'h4',
                        { style: { marginBottom: 10 } },
                        'degree:'
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.ButtonToolbar,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.ToggleButtonGroup,
                            { type: 'radio', name: 'degree', defaultValue: this.state.isCelsius === true ? 1 : 2 },
                            _react2.default.createElement(
                                _reactBootstrap.ToggleButton,
                                { bsStyle: 'primary', value: 1, onClick: function onClick() {
                                        controllerConfig.isCelsius = true;
                                        editorSDK.document.components.data.update(applicationId, {
                                            componentRef: controllerRef,
                                            data: {
                                                settings: JSON.stringify(Object.assign({}, controllerConfig))
                                            }
                                        });
                                        _this2.props.api.setControllerConfig(controllerConfig);
                                        _this2.setState({ isCelsius: true });
                                    } },
                                'Celsius'
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.ToggleButton,
                                { bsStyle: 'primary', value: 2, onClick: function onClick() {
                                        controllerConfig.isCelsius = false;
                                        editorSDK.document.components.data.update(applicationId, {
                                            componentRef: controllerRef,
                                            data: {
                                                settings: JSON.stringify(Object.assign({}, controllerConfig))
                                            }
                                        });
                                        _this2.props.api.setControllerConfig(controllerConfig);
                                        _this2.setState({ isCelsius: false });
                                    } },
                                'Fahrenheit'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { style: { margin: 10 } },
                    _react2.default.createElement(
                        'h4',
                        null,
                        'time:'
                    ),
                    _react2.default.createElement(_reactBootstrap.FormControl, { type: 'number', placeholder: 'enter time in sec', value: this.state.time, onChange: function onChange(event) {
                            controllerConfig.time = parseInt(event.target.value);
                            editorSDK.document.components.data.update(applicationId, {
                                componentRef: controllerRef,
                                data: {
                                    settings: JSON.stringify(Object.assign({}, controllerConfig))
                                }
                            });
                            _this2.props.api.setControllerConfig(controllerConfig);
                            _this2.setState({ time: parseInt(event.target.value) });
                        } })
                )
            );
        }
    }]);

    return App;
}(_react2.default.Component), _class.propTypes = {
    toggle: _propTypes2.default.func.isRequired
}, _temp);


var enableApp = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
        var token = _ref2.token,
            editorSDK = _ref2.editorSDK,
            controllerRef = _ref2.controllerRef;

        var components, buttons, images, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, componentRef, type;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return editorSDK.components.getAllComponents(token);

                    case 2:
                        components = _context.sent;
                        buttons = [];
                        images = [];
                        _iteratorNormalCompletion = true;
                        _didIteratorError = false;
                        _iteratorError = undefined;
                        _context.prev = 8;
                        _iterator = components[Symbol.iterator]();

                    case 10:
                        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                            _context.next = 20;
                            break;
                        }

                        componentRef = _step.value;
                        _context.next = 14;
                        return editorSDK.components.getType(token, { componentRef: componentRef });

                    case 14:
                        type = _context.sent;

                        if (type === 'wysiwyg.viewer.components.SiteButton') {
                            buttons.push(componentRef);
                        }
                        if (type === 'wysiwyg.viewer.components.WPhoto') {
                            images.push(componentRef);
                        }

                    case 17:
                        _iteratorNormalCompletion = true;
                        _context.next = 10;
                        break;

                    case 20:
                        _context.next = 26;
                        break;

                    case 22:
                        _context.prev = 22;
                        _context.t0 = _context['catch'](8);
                        _didIteratorError = true;
                        _iteratorError = _context.t0;

                    case 26:
                        _context.prev = 26;
                        _context.prev = 27;

                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }

                    case 29:
                        _context.prev = 29;

                        if (!_didIteratorError) {
                            _context.next = 32;
                            break;
                        }

                        throw _iteratorError;

                    case 32:
                        return _context.finish(29);

                    case 33:
                        return _context.finish(26);

                    case 34:

                        buttons.map(function (componentRef) {
                            return editorSDK.controllers.connect(token, {
                                controllerRef: controllerRef,
                                connectToRef: componentRef,
                                role: ROLE_BUTTON
                            });
                        });

                        images.map(function (componentRef) {
                            return editorSDK.controllers.connect(token, {
                                controllerRef: controllerRef,
                                connectToRef: componentRef,
                                role: ROLE_IMAGE
                            });
                        });

                    case 36:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[8, 22, 26, 34], [27,, 29, 33]]);
    }));

    return function enableApp(_x) {
        return _ref.apply(this, arguments);
    };
}();

var disableApp = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref4) {
        var token = _ref4.token,
            editorSDK = _ref4.editorSDK,
            controllerRef = _ref4.controllerRef;
        var connectedComponents;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return editorSDK.controllers.listConnectedComponents(token, { controllerRef: controllerRef });

                    case 2:
                        connectedComponents = _context2.sent;

                        connectedComponents.map(function (componentRef) {
                            return editorSDK.controllers.disconnect(token, {
                                controllerRef: controllerRef,
                                connectToRef: componentRef,
                                role: null
                            });
                        });

                    case 4:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function disableApp(_x2) {
        return _ref3.apply(this, arguments);
    };
}();

editorSDK.panel.onEvent(function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref6) {
        var eventType = _ref6.eventType,
            eventPayload = _ref6.eventPayload;
        var initialState, appAPI;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        if (!(eventType === 'startConfiguration')) {
                            _context3.next = 6;
                            break;
                        }

                        initialState = Object.assign({}, eventPayload.initialData.controllerConfig);
                        _context3.next = 4;
                        return editorSDK.editor.getAppAPI();

                    case 4:
                        appAPI = _context3.sent;

                        _reactDom2.default.render(_react2.default.createElement(App, { initialState: initialState,
                            data: eventPayload.initialData,
                            api: appAPI
                        }), document.getElementById('root'));

                    case 6:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function (_x3) {
        return _ref5.apply(this, arguments);
    };
}());
//# sourceMappingURL=settings.js.map