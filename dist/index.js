Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () {
                        return e[k];
                    }
                });
            }
        });
    }
    n['default'] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function SvgComponent$2(props) {
    return (React__namespace.createElement("svg", __assign({ width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__namespace.createElement("path", { d: "M7.118 3.302l13.773 8.854L7.118 21.01V3.302z", stroke: "#fff", strokeWidth: 1.538, strokeLinecap: "round", strokeLinejoin: "round" }),
        React__namespace.createElement("path", { d: "M7.118 3.302l13.773 8.854L7.118 21.01V3.302z", stroke: "#fff", strokeWidth: 1.538, strokeLinecap: "round", strokeLinejoin: "round" })));
}

function SvgComponent$1(props) {
    return (React__namespace.createElement("svg", __assign({ width: 22, height: 22, viewBox: "0 0 27 27", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__namespace.createElement("path", { d: "M11.434 5.599H7.191v16.973h4.243V5.6zM19.92 5.599h-4.243v16.973h4.244V5.6z", stroke: "#fff", strokeWidth: 1.414, strokeLinecap: "round", strokeLinejoin: "round" })));
}

function SvgComponent(props) {
    return (React__namespace.createElement("svg", __assign({ width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__namespace.createElement("g", { clipPath: "url(#prefix__clip0)", stroke: "#2F3247", strokeWidth: 2.122, strokeLinecap: "round", strokeLinejoin: "round" },
            React__namespace.createElement("path", { d: "M3.183 16.872v-5.57M3.183 8.12V2.55M9.548 16.872V9.71M9.548 6.529V2.55M15.913 16.872v-3.979M15.913 9.711v-7.16M.796 11.302h4.773M7.16 6.529h4.774M13.526 12.893h4.773" })),
        React__namespace.createElement("defs", null,
            React__namespace.createElement("clipPath", { id: "prefix__clip0" },
                React__namespace.createElement("path", { fill: "#fff", transform: "translate(0 .164)", d: "M0 0h19.095v19.095H0z" })))));
}

function getAudioFromPostId(postId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://api.wavetech.ai/v1/post/" + postId, {
                        method: 'GET',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json;charset=UTF-8'
                        }
                    }).then(function (res) { return res.json(); })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function getAudioChunks(key) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://api.wavetech.ai/v1/bucket/" + key, {
                        method: 'GET',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json;charset=UTF-8'
                        }
                    }).then(function (res) { return res.json(); })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}

var chunkIndex = 0;
var stopped = false;
var adder = 0;
var Player = function (_a) {
    var width = _a.width, _b = _a.height, height = _b === void 0 ? 90 : _b; _a.apiKey; var postId = _a.postId, backgroundColor = _a.backgroundColor, color = _a.color, options = _a.options;
    var _c = React__namespace.useState(1), rate = _c[0], setRate = _c[1];
    var _d = React__namespace.useState(1); _d[0]; var setPlayBack = _d[1];
    var audioRef = React__namespace.useRef(null);
    var playerRef = React__namespace.useRef(null);
    var lineRef = React__namespace.useRef(null);
    var timeRef = React__namespace.useRef(null);
    var circleRef = React__namespace.useRef(null);
    var hoveredLine = React__namespace.useRef(null);
    var progressRef = React__namespace.useRef(null);
    var hoverTimeRef = React__namespace.useRef(null);
    var _e = React__namespace.useState(false), isPlaying = _e[0], setIsPlaying = _e[1];
    var _f = React__namespace.useState(false); _f[0]; _f[1];
    var _g = React__namespace.useState([]), postData = _g[0], setPostData = _g[1];
    var _h = React__namespace.useState([]), audios = _h[0], setAudios = _h[1];
    var _j = React__namespace.useState(false), showOptions = _j[0], setShowOptions = _j[1];
    React__namespace.useEffect(function () {
        getAudioFromPostId(postId).then(function (res) {
            setPostData(res);
        });
    }, []);
    React__namespace.useEffect(function () {
        audioRef.current.playbackRate = rate;
    }, [rate]);
    React__namespace.useEffect(function () {
        if (postData.audios) {
            var audioArr_1 = [];
            postData.audios.map(function (item, index) {
                getAudioChunks(item.key).then(function (resp) {
                    if (index == 0) {
                        audioRef.current.src = resp;
                    }
                    audioArr_1.push(resp);
                });
            });
            setAudios(audioArr_1);
        }
    }, [postData]);
    var handlePlayPauseClick = function () {
        audioRef.current.playbackRate = rate;
        if (circleRef.current && postData) {
            circleRef.current.style.display = 'block';
        }
        if (isPlaying) {
            audioRef.current.pause();
        }
        else {
            circleRef.current.style.transition = 'all .25s linear';
            lineRef.current.style.transition = 'all .25s linear';
            stopped = false;
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    var handlePlayerClick = function (e) {
        circleRef.current.style.transition = 'all .25s linear';
        lineRef.current.style.transition = 'all .25s linear';
        var selectedFrame = (postData.length * (e.pageX - progressRef.current.getBoundingClientRect().left)) /
            (progressRef.current.getBoundingClientRect().width / 100) /
            100;
        stopped = false;
        var forAdder = selectedFrame;
        var i = 0;
        while (true) {
            if (selectedFrame - postData.audios[i].duration > 0) {
                selectedFrame -= postData.audios[i].duration;
                i++;
            }
            else {
                break;
            }
        }
        adder = forAdder - selectedFrame;
        chunkIndex = i;
        audioRef.current.src = audios[chunkIndex];
        audioRef.current.playbackRate = rate;
        audioRef.current.currentTime = selectedFrame;
        audioRef.current.play();
    };
    var handlePlayerHover = function (e) {
        hoverTimeRef.current.style.display = 'block';
        hoverTimeRef.current.style.left = "calc(-50px + " + (e.pageX - playerRef.current.getBoundingClientRect().left) + "px)";
        hoverTimeRef.current.innerText = calculateTime((postData.length * (e.pageX - playerRef.current.getBoundingClientRect().left)) /
            (playerRef.current.getBoundingClientRect().width / 100) /
            100);
        hoveredLine.current.style.width = e.pageX - progressRef.current.getBoundingClientRect().left + "px";
    };
    var handleHoverLeave = function () {
        hoverTimeRef.current.style.display = 'none';
        hoveredLine.current.style.width = '0px';
    };
    var calculateTime = function (time) {
        var hours = Math.floor(time / 3600);
        var minutes = Math.floor((time / 3600) % 60);
        var seconds = Math.floor(time % 60);
        if (hours) {
            return hours + ":" + (minutes > 9 ? '' : '0') + minutes + ":" + (seconds > 9 ? '' : '0') + seconds;
        }
        return "" + (minutes > 9 ? '' : '0') + minutes + ":" + (seconds > 9 ? '' : '0') + seconds;
    };
    var chunkEnded = function () {
        if (chunkIndex < audios.length - 1) {
            audioRef.current.src = audios[++chunkIndex];
            audioRef.current.playbackRate = rate;
            adder += postData.audios[chunkIndex - 1].duration;
        }
        else {
            stopped = true;
            chunkIndex = 0;
            adder = 0;
            audioRef.current.src = audios[chunkIndex];
            setIsPlaying(false);
        }
    };
    var setPlaybackRate = function (direction) {
        if (rate <= 0.5 && direction == 'down') {
            return;
        }
        else if (rate >= 2 && direction == 'up') {
            return;
        }
        if (direction == 'up') {
            setRate(rate + 0.25);
        }
        else {
            setRate(rate - 0.25);
        }
        setPlayBack(rate);
    };
    return (React__namespace.createElement("div", { ref: playerRef, className: 'wt-rsp-container', style: { height: height || 90, width: width || '100%', backgroundColor: backgroundColor || '#F8F7FE' } },
        React__namespace.createElement("button", { className: 'wt-rsp-play-pause', onClick: function () { return handlePlayPauseClick(); }, style: { backgroundColor: color || '#7A68EE' } }, isPlaying ? React__namespace.createElement(SvgComponent$1, null) : React__namespace.createElement(SvgComponent$2, null)),
        React__namespace.createElement("div", { className: 'wt-rsp-wrapper' },
            React__namespace.createElement("div", { className: 'wt-rsp-header' },
                React__namespace.createElement("h5", null, "Listening article"),
                React__namespace.createElement("h6", null,
                    "Powered by ",
                    React__namespace.createElement("span", null, "wavetech."))),
            React__namespace.createElement("div", { className: 'wt-rsp-timer' },
                React__namespace.createElement("span", { className: 'player-styled-span', ref: timeRef }, "00:00")),
            React__namespace.createElement("div", { className: 'wt-rsp-progress-wrapper' },
                React__namespace.createElement("div", { className: 'w-100', onMouseMove: handlePlayerHover, onMouseLeave: handleHoverLeave },
                    React__namespace.createElement("div", { className: 'wt-rsp-progress-background', onClick: handlePlayerClick, ref: progressRef, style: { backgroundColor: color ? "" + color : '#C6BEFB' } },
                        React__namespace.createElement("div", { className: 'wt-rsp-progress-bar-hover', ref: hoveredLine }),
                        React__namespace.createElement("div", { className: 'wt-hover-duration', ref: hoverTimeRef }),
                        React__namespace.createElement("div", { ref: lineRef, className: 'wt-rsp-progress-bar', style: { backgroundColor: color || '#7A68EE' } },
                            React__namespace.createElement("div", { ref: circleRef, className: 'wt-rsp-progress-pin', style: { backgroundColor: color || '#7A68EE' } },
                                React__namespace.createElement("audio", { ref: audioRef, onCanPlay: function (e) {
                                        if (chunkIndex && !stopped) {
                                            e.currentTarget.play();
                                        }
                                    }, onTimeUpdate: function () {
                                        if (audios) {
                                            if (lineRef.current) {
                                                lineRef.current.style.width = (100 / postData.length) * (adder + audioRef.current.currentTime) + "%";
                                            }
                                            timeRef.current.innerHTML = "" + calculateTime(adder + audioRef.current.currentTime);
                                        }
                                    }, onEnded: chunkEnded }))))),
                options && React__namespace.createElement("button", { onClick: function () { return setShowOptions(!showOptions); }, className: 'wt-rsp-progress-option-btn' },
                    React__namespace.createElement(SvgComponent, null)))),
        options && showOptions && React__namespace.createElement("div", { className: 'wt-rsp-option-wrapper', style: { top: height > 89 ? "calc(" + height + "px + 10px)" : 'calc(100% + 10px)' } },
            React__namespace.createElement("p", { className: 'wt-control-title' }, "Speed Control"),
            React__namespace.createElement("div", { className: 'speed-control' },
                React__namespace.createElement("button", { onClick: function () { return setPlaybackRate('down'); } }, "-"),
                React__namespace.createElement("div", { className: 'speed-indicator' },
                    rate,
                    "x"),
                React__namespace.createElement("button", { onClick: function () { return setPlaybackRate('up'); } }, "+")))));
};

var Player$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Player
});

exports.default = Player$1;
//# sourceMappingURL=index.js.map
