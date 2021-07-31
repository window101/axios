"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
function isAxiosData(data) {
    if (data === null)
        return false;
    if (data instanceof FormData)
        return false;
    return typeof data === 'object';
}
var axios = {
    defaults: {
        baseUrl: '',
        headers: {}
    },
    get: function (url, config) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest(); // XMLHttpRequest 객체를 생성
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
                }
                else {
                    reject({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
                }
            };
            xhr.onerror = function () {
                reject({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
            };
            xhr.open('GET', axios.defaults.baseUrl + url); // http 메서드, 요청 처리할 페이지의 url, 요청이 비동기로 처리될 것인지에 대한 boolean 값
            var headers = __assign(__assign({}, axios.defaults.headers), config === null || config === void 0 ? void 0 : config.headers); // defaults.headers를 적용하고 직접 적용한 config.headers 적용
            Object.keys(headers).map(function (key) {
                xhr.setRequestHeader(key, headers[key]);
            });
            xhr.withCredentials = (config === null || config === void 0 ? void 0 : config.withCredentials) || false;
            xhr.send(); // 전송
        });
    },
    put: function (url, data, config) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
                }
                else {
                    reject({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
                }
            };
            xhr.onerror = function () {
                reject({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
            };
            xhr.open('PUT', axios.defaults.baseUrl + url);
            var headers = __assign(__assign({}, axios.defaults.headers), config === null || config === void 0 ? void 0 : config.headers);
            Object.keys(headers).map(function (key) {
                xhr.setRequestHeader(key, headers[key]);
            });
            xhr.withCredentials = (config === null || config === void 0 ? void 0 : config.withCredentials) || false;
            if (isAxiosData(data)) { // 객체면
                xhr.send(JSON.stringify(data));
            }
            else {
                xhr.send(data);
            }
        });
    },
    patch: function (url, data, config) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
                }
                else {
                    reject({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
                }
            };
            xhr.onerror = function () {
                reject({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
            };
            xhr.open('PATCH', axios.defaults.baseUrl + url);
            var headers = __assign(__assign({}, axios.defaults.headers), config === null || config === void 0 ? void 0 : config.headers);
            Object.keys(headers).map(function (key) {
                xhr.setRequestHeader(key, headers[key]);
            });
            xhr.withCredentials = (config === null || config === void 0 ? void 0 : config.withCredentials) || false;
            if (isAxiosData(data)) { // 객체면
                xhr.send(JSON.stringify(data));
            }
            else {
                xhr.send(data);
            }
        });
    },
    post: function (url, data, config) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
                }
                else {
                    reject({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
                }
            };
            xhr.onerror = function () {
                reject({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
            };
            xhr.open('POST', axios.defaults.baseUrl + url);
            var headers = __assign(__assign({}, axios.defaults.headers), config === null || config === void 0 ? void 0 : config.headers);
            Object.keys(headers).map(function (key) {
                xhr.setRequestHeader(key, headers[key]);
            });
            xhr.withCredentials = (config === null || config === void 0 ? void 0 : config.withCredentials) || false;
            if (isAxiosData(data)) { // 객체면
                xhr.send(JSON.stringify(data));
            }
            else {
                xhr.send(data);
            }
        });
    },
    "delete": function (url, config) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
                }
                else {
                    reject({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
                }
            };
            xhr.onerror = function () {
                reject({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
            };
            xhr.open('DELETE', axios.defaults.baseUrl + url);
            var headers = __assign(__assign({}, axios.defaults.headers), config === null || config === void 0 ? void 0 : config.headers);
            Object.keys(headers).map(function (key) {
                xhr.setRequestHeader(key, headers[key]);
            });
            xhr.withCredentials = (config === null || config === void 0 ? void 0 : config.withCredentials) || false;
            xhr.send();
        });
    },
    options: function (url, config) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
                }
                else {
                    reject({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
                }
            };
            xhr.onerror = function () {
                reject({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
            };
            xhr.open('OPTIONS', axios.defaults.baseUrl + url);
            var headers = __assign(__assign({}, axios.defaults.headers), config === null || config === void 0 ? void 0 : config.headers);
            Object.keys(headers).map(function (key) {
                xhr.setRequestHeader(key, headers[key]);
            });
            xhr.withCredentials = (config === null || config === void 0 ? void 0 : config.withCredentials) || false;
            xhr.send();
        });
    },
    head: function (url, config) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
                }
                else {
                    reject({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
                }
            };
            xhr.onerror = function () {
                reject({ data: xhr.responseText, status: xhr.status, statusText: xhr.statusText });
            };
            xhr.open('HEAD', axios.defaults.baseUrl + url);
            var headers = __assign(__assign({}, axios.defaults.headers), config === null || config === void 0 ? void 0 : config.headers);
            Object.keys(headers).map(function (key) {
                xhr.setRequestHeader(key, headers[key]);
            });
            xhr.withCredentials = (config === null || config === void 0 ? void 0 : config.withCredentials) || false;
            xhr.send();
        });
    }
};
exports["default"] = axios;
