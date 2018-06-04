'use strict';

var updateWeather = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3($w, state) {
        var _ref4, temp, date, description, uri, stringDate;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return getWeather(state);

                    case 2:
                        _ref4 = _context3.sent;
                        temp = _ref4.temp;
                        date = _ref4.date;
                        description = _ref4.description;
                        uri = _ref4.uri;
                        stringDate = date.toDateString();

                        $w('@city_role').text = state.city + "," + state.country;
                        $w('@degree_role').text = state.isCelsius ? temp + " C" : temp + "F";
                        $w('@description_role').text = description;
                        $w('@date_role').text = stringDate;
                        $w('@icon_role').src = uri;

                    case 13:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function updateWeather(_x2, _x3) {
        return _ref3.apply(this, arguments);
    };
}();

var getWeather = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(state) {
        var res, weather;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        res = {};
                        _context4.next = 3;
                        return fetch('https://api.openweathermap.org/data/2.5/weather?q=' + state.city + ',' + state.country + '&appid=43556639500a52c1c1019b11d77b599b').then(function (response) {
                            return response.json();
                        }).then(function (myJson) {
                            return myJson;
                        });

                    case 3:
                        weather = _context4.sent;

                        res.temp = state.isCelsius ? Math.round(weather.main.temp - 273.15) : Math.round(1.8 * (weather.main.temp - 273) + 32);
                        res.date = new Date(weather.dt * 1000);
                        res.description = weather.weather[0].description;
                        res.uri = 'https://openweathermap.org/img/w/' + weather.weather[0].icon + '.png';
                        return _context4.abrupt('return', res);

                    case 9:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));

    return function getWeather(_x4) {
        return _ref5.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var state = void 0;

var createControllers = function createControllers(controllerConfigs) {
    return controllerConfigs.map(function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(config) {
            var time;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (!(config.connections.length !== 7)) {
                                _context.next = 2;
                                break;
                            }

                            return _context.abrupt('return', '');

                        case 2:
                            console.log('config', config);
                            state = config.config;
                            time = state.time * 1000;
                            return _context.abrupt('return', { pageReady: function pageReady($w) {
                                    return updateWeatherInterval($w, state, time);
                                } });

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function (_x) {
            return _ref.apply(this, arguments);
        };
    }());
};

function updateWeatherInterval($w, state, time) {
    var _this = this;

    $w("@button_role").onClick(function (event, $w) {
        updateWeather($w, state);
    });
    updateWeather($w, state);
    setInterval(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        updateWeather($w, state);

                    case 1:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, _this);
    })), time);
}

module.exports = {
    initAppForPage: function initAppForPage() {},
    createControllers: createControllers,
    exports: {}
};
//# sourceMappingURL=viewer.js.map