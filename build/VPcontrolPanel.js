'use strict';

System.register(['https://cdn.rodin.space/vendor/three/THREE.GLOBAL.js', 'https://cdn.rodin.space/rodinjs/RODIN.js', 'https://cdn.rodin.space/rodinjs/scene/SceneManager.js', 'https://cdn.rodin.space/rodinjs/RodinEvent.js', 'https://cdn.rodin.space/rodinjs/sculpt/Sculpt.js', 'https://cdn.rodin.space/rodinjs/utils/timeout.js', 'https://cdn.rodin.space/rodinjs/utils/interval.js', 'https://cdn.rodin.space/rodinjs/Tween.js', 'https://cdn.rodin.space/rodinjs/sculpt/elements/Element.js', 'https://cdn.rodin.space/rodinjs/sculpt/elements/Text.js', 'https://cdn.rodin.space/rodinjs/animation/Animation.js'], function (_export, _context) {
    "use strict";

    var THREE, RODIN, SceneManager, RodinEvent, Sculpt, timeout, Interval, TWEEN, Element, Text, Animation, _createClass, _get, bufferAnimation, hoverAnimation, hoverOutAnimation, scaleOutAnimation, scaleInAnimation, VPcontrolPanel;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    return {
        setters: [function (_httpsCdnRodinSpaceVendorThreeTHREEGLOBALJs) {
            THREE = _httpsCdnRodinSpaceVendorThreeTHREEGLOBALJs.THREE;
        }, function (_httpsCdnRodinSpaceRodinjsRODINJs) {
            RODIN = _httpsCdnRodinSpaceRodinjsRODINJs;
        }, function (_httpsCdnRodinSpaceRodinjsSceneSceneManagerJs) {
            SceneManager = _httpsCdnRodinSpaceRodinjsSceneSceneManagerJs.SceneManager;
        }, function (_httpsCdnRodinSpaceRodinjsRodinEventJs) {
            RodinEvent = _httpsCdnRodinSpaceRodinjsRodinEventJs.RodinEvent;
        }, function (_httpsCdnRodinSpaceRodinjsSculptSculptJs) {
            Sculpt = _httpsCdnRodinSpaceRodinjsSculptSculptJs.Sculpt;
        }, function (_httpsCdnRodinSpaceRodinjsUtilsTimeoutJs) {
            timeout = _httpsCdnRodinSpaceRodinjsUtilsTimeoutJs.timeout;
        }, function (_httpsCdnRodinSpaceRodinjsUtilsIntervalJs) {
            Interval = _httpsCdnRodinSpaceRodinjsUtilsIntervalJs.Interval;
        }, function (_httpsCdnRodinSpaceRodinjsTweenJs) {
            TWEEN = _httpsCdnRodinSpaceRodinjsTweenJs.TWEEN;
        }, function (_httpsCdnRodinSpaceRodinjsSculptElementsElementJs) {
            Element = _httpsCdnRodinSpaceRodinjsSculptElementsElementJs.Element;
        }, function (_httpsCdnRodinSpaceRodinjsSculptElementsTextJs) {
            Text = _httpsCdnRodinSpaceRodinjsSculptElementsTextJs.Text;
        }, function (_httpsCdnRodinSpaceRodinjsAnimationAnimationJs) {
            Animation = _httpsCdnRodinSpaceRodinjsAnimationAnimationJs.Animation;
        }],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _get = function get(object, property, receiver) {
                if (object === null) object = Function.prototype;
                var desc = Object.getOwnPropertyDescriptor(object, property);

                if (desc === undefined) {
                    var parent = Object.getPrototypeOf(object);

                    if (parent === null) {
                        return undefined;
                    } else {
                        return get(parent, property, receiver);
                    }
                } else if ("value" in desc) {
                    return desc.value;
                } else {
                    var getter = desc.get;

                    if (getter === undefined) {
                        return undefined;
                    }

                    return getter.call(receiver);
                }
            };

            bufferAnimation = new Animation("bufferAnimation", {
                rotation: {
                    x: 0,
                    y: {
                        from: -Math.PI / 2,
                        to: Math.PI / 2
                    },
                    z: 0
                }
            });

            bufferAnimation.loop(true);
            bufferAnimation.duration(1000);

            hoverAnimation = new Animation("hoverAnimation", {
                scale: {
                    x: 1.1,
                    y: 1.1,
                    z: 1.1
                }
            });

            hoverAnimation.duration(200);

            hoverOutAnimation = new Animation("hoverOutAnimation", {
                scale: {
                    x: 1,
                    y: 1,
                    z: 1
                }
            });

            hoverOutAnimation.duration(200);

            scaleOutAnimation = new Animation("scaleOutAnimation", {
                scale: {
                    x: 0.01,
                    y: 0.01,
                    z: 0.01
                }
            });

            scaleOutAnimation.duration(150);

            scaleInAnimation = new Animation("scaleInAnimation", {
                scale: {
                    x: { from: 0.01, to: 1 },
                    y: { from: 0.01, to: 1 },
                    z: { from: 0.01, to: 1 }
                }
            });

            scaleInAnimation.duration(150);

            _export('VPcontrolPanel', VPcontrolPanel = function (_Sculpt) {
                _inherits(VPcontrolPanel, _Sculpt);

                function VPcontrolPanel(_ref) {
                    var player = _ref.player,
                        _ref$title = _ref.title,
                        title = _ref$title === undefined ? "Untitled Video" : _ref$title,
                        _ref$cover = _ref.cover,
                        cover = _ref$cover === undefined ? null : _ref$cover,
                        _ref$distance = _ref.distance,
                        distance = _ref$distance === undefined ? 1 : _ref$distance,
                        _ref$width = _ref.width,
                        width = _ref$width === undefined ? 1.5 : _ref$width,
                        controllers = _ref.controllers;

                    _classCallCheck(this, VPcontrolPanel);

                    var _this = _possibleConstructorReturn(this, (VPcontrolPanel.__proto__ || Object.getPrototypeOf(VPcontrolPanel)).call(this, 0));

                    _this.object = new THREE.Object3D();
                    _this.panel = new THREE.Object3D();
                    _this.player = player;
                    _this.cover = cover;
                    _this.width = width;
                    _this.elementsPending = 0;
                    _this.timeBarButton = null;
                    _this.coverEl = null;
                    _this.title = title;
                    _this.controllers = controllers;
                    _this.createTitle();
                    _this.createPlayPauseButtons();
                    _this.createTimeLine();
                    _this.createTimeBar();
                    _this.createAudioToggle();
                    _this.createHDToggle();
                    _this.createBackGround(distance, width);
                    _this.panel.position.z = -distance;
                    _this.scene = SceneManager.get();
                    var target = new THREE.Object3D();
                    target.position.z = -1;
                    var camera = _this.scene.camera;
                    camera.add(target);

                    _this.object.add(_this.panel);

                    _this.createBufferingLogo(distance);
                    _this.cover && _this.createCover(distance, width);

                    _this.hideControls = function (now) {
                        secsToFade -= now ? secsToFade : 1;
                        if (secsToFade == 0) {
                            _this.object.visible = false;
                        }
                    };

                    var doShow = true;
                    var secsToFade = 3;

                    _this.fadeTimeOut = setInterval(_this.hideControls, 1000);

                    var _loop = function _loop(ci) {

                        var controller = _this.controllers[ci];

                        controller.onKeyDown = function (keyCode) {
                            doShow = true;
                            _this.showTimeOut = setTimeout(function () {
                                doShow = false;
                            }, 200);
                            if (_this.object.visible && (!controller.intersected || controller.intersected.length == 0)) {
                                _this.object.visible = false;
                                doShow = false;
                                _this.hideControls(true);
                            }
                        };

                        controller.onKeyUp = function (keyCode) {
                            if (doShow) {
                                _this.scene.scene.updateMatrixWorld();
                                var vector = new THREE.Vector3();
                                vector.setFromMatrixPosition(target.matrixWorld);
                                if (vector.x != 0 || vector.z != 0) {
                                    var newRot = Math.atan(vector.x / vector.z) + (vector.z < 0 ? Math.PI : 0) + Math.PI;
                                    if (!_this.object.visible || Math.abs(_this.object.rotation.y - newRot) >= Math.PI / 3) {
                                        _this.object.rotation.y = newRot;
                                    }
                                }
                                _this.object.visible = true;
                                secsToFade = 3;
                            }
                        };

                        controller.gamepadHover = function (intersect) {
                            secsToFade = 3;
                        };

                        controller.gamepadHoverOut = function (intersect) {
                            secsToFade = 3;
                        };
                    };

                    for (var ci = 0; ci < _this.controllers.length; ci++) {
                        _loop(ci);
                    }

                    _this.player.onBufferStart = function () {
                        _this.scene.camera.add(_this.bufferEl.object3D);
                    };
                    _this.player.onBufferEnd = function () {
                        _this.scene.camera.remove(_this.bufferEl.object3D);
                    };
                    return _this;
                }

                _createClass(VPcontrolPanel, [{
                    key: 'readyCheck',
                    value: function readyCheck() {
                        var _this2 = this;

                        if (!this.elementsPending) {
                            _get(VPcontrolPanel.prototype.__proto__ || Object.getPrototypeOf(VPcontrolPanel.prototype), 'init', this).call(this, this.object);
                            timeout(function () {
                                _this2.emit("ready", new RodinEvent(_this2));
                            }, 0);
                        }
                    }
                }, {
                    key: 'createBackGround',
                    value: function createBackGround(distance, width) {
                        var r = Math.sqrt(distance * distance + width * width / 4) * 2;

                        var sphere = new THREE.Mesh(new THREE.SphereBufferGeometry(r, 12, 12), new THREE.MeshBasicMaterial({
                            color: 0x000000,
                            transparent: true,
                            opacity: 0.3,
                            //wireframe:true,
                            side: THREE.BackSide
                        }));
                        sphere.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, -distance));
                        sphere.position.z = distance;
                        this.object.add(sphere);
                    }
                }, {
                    key: 'createCover',
                    value: function createCover(distance, width) {
                        var r = Math.sqrt(distance * distance + width * width / 4) * 3;

                        this.coverEl = new THREE.Mesh(new THREE.SphereBufferGeometry(r, 720, 4), new THREE.MeshBasicMaterial({
                            color: 0xffffff,
                            map: new THREE.TextureLoader().load(this.cover),
                            side: THREE.DoubleSide
                        }));
                        this.coverEl.scale.set(-1, 1, 1);
                        this.scene.add(this.coverEl);
                    }
                }, {
                    key: 'createTitle',
                    value: function createTitle() {
                        var _this3 = this;

                        var titleParams = {
                            text: this.title,
                            color: 0xffffff,
                            fontFamily: "Arial",
                            fontSize: this.width * 0.04,
                            ppm: 1000
                        };
                        var titleButton = new Text(titleParams);
                        this.elementsPending++;

                        titleButton.on('ready', function (evt) {
                            var object = evt.target.object3D;
                            object.position.y = _this3.width / 4;
                            _this3.panel.add(object);
                            _this3.elementsPending--;
                            _this3.readyCheck();
                        });
                    }
                }, {
                    key: 'createBufferingLogo',
                    value: function createBufferingLogo(distance) {
                        var _this4 = this;

                        var bufferingParams = { name: "buffering", width: this.width / 6, height: this.width / 6 };

                        bufferingParams.background = {
                            color: 0x666666,
                            opacity: 0.3
                        };

                        bufferingParams.border = {
                            radius: this.width / 12,
                            width: this.width / 500,
                            color: 0xffffff
                        };

                        bufferingParams.image = {
                            url: "./img/rodin.png",
                            width: this.width / 30,
                            height: this.width / 25,
                            position: { h: 54, v: 35 }
                        };
                        bufferingParams.label = {
                            text: "loading",
                            fontSize: this.width / 37.5,
                            color: 0xffffff,
                            position: {
                                h: 50,
                                v: 65
                            }
                        };

                        this.bufferEl = new Element(bufferingParams);
                        this.elementsPending++;

                        this.bufferEl.on('ready', function (evt) {
                            var object = evt.target.object3D;
                            object.position.z = -distance + bufferingParams.width / 2;
                            evt.target.animator.add(bufferAnimation);
                            evt.target.animator.start("bufferAnimation");
                            _this4.elementsPending--;
                            _this4.readyCheck();
                        });
                    }
                }, {
                    key: 'createPlayPauseButtons',
                    value: function createPlayPauseButtons() {
                        var _this5 = this;

                        var playParams = { name: "play", width: this.width / 5, height: this.width / 5 };

                        playParams.background = {
                            color: 0x666666,
                            opacity: 0.3
                        };

                        playParams.border = {
                            radius: this.width / 10
                        };

                        playParams.image = {
                            url: "./img/play.png",
                            width: this.width / 15,
                            height: this.width / 15,
                            position: { h: 54, v: 50 }
                        };

                        var playButton = new Element(playParams);
                        this.elementsPending++;

                        playButton.on('ready', function (evt) {
                            var object = evt.target.object3D;
                            _this5.panel.add(object);
                            RODIN.Raycastables.push(object);
                            evt.target.animator.add(hoverAnimation, hoverOutAnimation, scaleOutAnimation, scaleInAnimation);
                            _this5.elementsPending--;
                            _this5.readyCheck();
                        });

                        playButton.on(RODIN.CONSTANTS.EVENT_NAMES.CONTROLLER_HOVER, function (evt) {
                            !evt.target.animator.isPlaying("scaleOutAnimation") && evt.target.animator.start("hoverAnimation");
                        });

                        playButton.on(RODIN.CONSTANTS.EVENT_NAMES.CONTROLLER_HOVER_OUT, function (evt) {
                            !evt.target.animator.isPlaying("scaleOutAnimation") && evt.target.animator.start("hoverOutAnimation");
                        });

                        playButton.on(RODIN.CONSTANTS.EVENT_NAMES.CONTROLLER_KEY_DOWN, function (evt) {
                            if (_this5.object.visible) {
                                evt.target.animator.start("scaleOutAnimation");
                            }
                        });

                        playButton.on(RODIN.CONSTANTS.EVENT_NAMES.ANIMATION_COMPLETE, function (evt) {
                            if (evt.animation === "scaleOutAnimation") {
                                _this5.panel.remove(evt.target.object3D);
                                _this5.panel.add(pauseButton.object3D);
                                pauseButton.animator.start("scaleInAnimation");
                                _this5.player.play();
                                _this5.hideControls(true);
                                if (_this5.cover && _this5.coverEl) {
                                    _this5.scene.scene.remove(_this5.coverEl);
                                }
                            }
                        });

                        var pauseParams = { name: "pause", width: this.width / 5, height: this.width / 5 };

                        pauseParams.background = {
                            color: 0x666666,
                            opacity: 0.3
                        };

                        pauseParams.border = {
                            radius: this.width / 10
                        };

                        pauseParams.image = {
                            url: "./img/pause.png",
                            width: this.width * 0.04,
                            height: this.width * 0.06,
                            position: { h: 50, v: 50 }
                        };

                        var pauseButton = new Element(pauseParams);
                        this.elementsPending++;

                        pauseButton.on('ready', function (evt) {
                            var object = evt.target.object3D;
                            RODIN.Raycastables.push(object);
                            evt.target.animator.add(hoverAnimation, hoverOutAnimation, scaleOutAnimation, scaleInAnimation);
                            _this5.elementsPending--;
                            _this5.readyCheck();
                        });

                        pauseButton.on(RODIN.CONSTANTS.EVENT_NAMES.CONTROLLER_HOVER, function (evt) {
                            !evt.target.animator.isPlaying("scaleOutAnimation") && evt.target.animator.start("hoverAnimation");
                        });

                        pauseButton.on(RODIN.CONSTANTS.EVENT_NAMES.CONTROLLER_HOVER_OUT, function (evt) {
                            !evt.target.animator.isPlaying("scaleOutAnimation") && evt.target.animator.start("hoverOutAnimation");
                        });

                        pauseButton.on(RODIN.CONSTANTS.EVENT_NAMES.CONTROLLER_KEY_DOWN, function (evt) {
                            if (_this5.object.visible) {
                                evt.target.animator.start("scaleOutAnimation");
                            }
                        });

                        pauseButton.on(RODIN.CONSTANTS.EVENT_NAMES.ANIMATION_COMPLETE, function (evt) {
                            if (evt.animation === "scaleOutAnimation") {
                                _this5.panel.remove(evt.target.object3D);
                                _this5.panel.add(playButton.object3D);
                                playButton.animator.start("scaleInAnimation");
                                _this5.player.pause();
                            }
                        });
                    }
                }, {
                    key: 'createTimeLine',
                    value: function createTimeLine() {
                        var _this6 = this;

                        var color = 0xff9a2b;

                        var timeLineBGParams = {
                            name: "timeLineBG",
                            width: this.width,
                            height: this.width / 50,
                            background: {
                                color: 0xaaaaaa,
                                opacity: 0.5
                            }
                        };

                        var timeLineParams = {
                            name: "timeLine",
                            width: this.width,
                            height: this.width / 50,
                            background: {
                                color: color
                            },
                            transparent: false
                        };

                        var caretParams = {
                            name: "caret",
                            width: this.width * 0.024,
                            height: this.width * 0.024,
                            border: {
                                radius: this.width * 0.012
                            },
                            background: {
                                color: 0xffffff
                            },
                            transparent: false
                        };

                        var pointerParams = {
                            name: "pointer",
                            width: this.width * 0.046,
                            height: this.width * 0.046,
                            border: {
                                width: this.width / 500,
                                color: 0xffffff,
                                radius: this.width * 0.023
                            },
                            label: {
                                text: "I",
                                fontSize: this.width / 37.5,
                                color: 0xff0000,
                                position: {
                                    h: 50,
                                    v: 55
                                }
                            }
                        };

                        var pointerTimeParams = {
                            name: "pointerTimeParams",
                            text: "0:00",
                            color: 0xffffff,
                            fontFamily: "Arial",
                            fontSize: this.width / 37.5,
                            ppm: 1000
                        };

                        var timeLineBG = new Element(timeLineBGParams);
                        this.elementsPending++;

                        timeLineBG.on('ready', function (evt) {
                            evt.target.forceHover = true;
                            var object = evt.target.object3D;
                            object.position.y = -_this6.width / 3.75;
                            _this6.panel.add(object);
                            _this6.elementsPending--;
                            RODIN.Raycastables.push(object);
                            _this6.readyCheck();
                        });

                        timeLineBG.on(RODIN.CONSTANTS.EVENT_NAMES.CONTROLLER_HOVER, function (evt) {
                            if (pointer.object3D) {
                                pointer.object3D.visible = true;
                                pointer.object3D.position.x = evt.uv.x - _this6.width / 2;
                            }
                            if (pointerTime.object3D) {
                                var time = Math.secondsToH_MM_SS(_this6.player.getLength() * evt.uv.x / _this6.width);
                                pointerTime.object3D.position.x = evt.uv.x - _this6.width / 2;
                                if (time === pointerTime.lastTime && pointerTime.object3D.visible) return;
                                pointerTimeParams.text = time;
                                pointerTime.reDraw(pointerTimeParams);
                                pointerTime.object3D.visible = true;
                                pointerTime.lastTime = time;
                            }
                        });

                        timeLineBG.on(RODIN.CONSTANTS.EVENT_NAMES.CONTROLLER_HOVER_OUT, function (evt) {
                            if (pointer.object3D) {
                                pointer.object3D.visible = false;
                            }
                            if (pointerTime.object3D) {
                                pointerTime.object3D.visible = false;
                            }
                        });

                        timeLineBG.on(RODIN.CONSTANTS.EVENT_NAMES.CONTROLLER_KEY_DOWN, function (evt) {
                            _this6.player.jumpTo(evt.uv.x / _this6.width);
                        });

                        var timeLine = new Element(timeLineParams);
                        this.elementsPending++;

                        timeLine.on('ready', function (evt) {
                            var object = evt.target.object3D;
                            object.position.y = -_this6.width / 3.75;
                            object.position.z = 0.0001;
                            object.scale.set(0.0001, 1, 1);
                            _this6.panel.add(object);
                            _this6.elementsPending--;
                            _this6.readyCheck();
                        });

                        timeLine.on("update", function (evt) {
                            var time = _this6.player.getTime();
                            time = time ? time : 0.0001;
                            var duration = _this6.player.getLength();
                            if (!duration) return;
                            var scale = time / duration;
                            var object = evt.target.object3D;
                            object.scale.set(scale, 1, 1);
                            object.position.x = (scale - 1) * _this6.width / 2;
                        });

                        var caret = new Element(caretParams);
                        this.elementsPending++;

                        caret.on('ready', function (evt) {
                            var object = evt.target.object3D;
                            object.position.y = -_this6.width / 3.75;
                            object.position.z = 0.0002;
                            object.position.x = -_this6.width / 2;
                            _this6.panel.add(object);
                            _this6.elementsPending--;
                            _this6.readyCheck();
                        });

                        caret.on('update', function (evt) {
                            if (timeLine.object3D) {
                                var object = evt.target.object3D;
                                object.position.x = timeLine.object3D.scale.x * _this6.width - _this6.width / 2;
                            }
                        });

                        var pointer = new Element(pointerParams);
                        this.elementsPending++;

                        pointer.on('ready', function (evt) {
                            var object = evt.target.object3D;
                            object.position.y = -_this6.width / 3.75;
                            object.position.z = 0.0004;
                            object.material.depthWrite = false;
                            object.position.x = -_this6.width / 2;
                            object.visible = false;
                            _this6.panel.add(object);
                            _this6.elementsPending--;
                            _this6.readyCheck();
                        });

                        var pointerTime = new Text(pointerTimeParams);
                        this.elementsPending++;

                        pointerTime.on('ready', function (evt) {
                            var object = evt.target.object3D;
                            object.position.y = -_this6.width * 0.21;
                            object.position.z = 0.0004;
                            object.position.x = 0;
                            object.visible = false;
                            _this6.panel.add(object);
                            _this6.elementsPending--;
                            _this6.readyCheck();
                        });
                    }
                }, {
                    key: 'createTimeBar',
                    value: function createTimeBar() {
                        var _this7 = this;

                        var timeBarParams = {
                            text: "0:00/0:00",
                            color: 0xffffff,
                            fontFamily: "Arial",
                            fontSize: this.width / 30,
                            ppm: 1000
                        };
                        this.timeBarButton = new Text(timeBarParams);
                        this.elementsPending++;
                        this.timeBarButton.on('ready', function (evt) {
                            var object = evt.target.object3D;
                            object.position.y = -_this7.width / 3;
                            object.position.x = -_this7.width / 2;

                            _this7.panel.add(object);
                            _this7.elementsPending--;
                            _this7.readyCheck();
                        });
                        this.timeBarButton.on('update', function (evt) {
                            var time = Math.secondsToH_MM_SS(_this7.player.getTime());
                            var total = Math.secondsToH_MM_SS(_this7.player.getLength());
                            if (time === evt.target.lastTime) return;
                            timeBarParams.text = time + "/" + total;
                            evt.target.reDraw(timeBarParams);

                            if (!isNaN(_this7.player.getLength())) {
                                evt.target.lastTime = time;
                            }

                            evt.target.object3D.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(evt.target.object3D.geometry.parameters.width / 2, 0, 0));
                        });
                    }
                }, {
                    key: 'createAudioToggle',
                    value: function createAudioToggle() {
                        var _this8 = this;

                        var muteParams = { name: "mute", width: this.width * 0.04, height: this.width * 0.04, ppm: 1000 };

                        muteParams.image = {
                            url: "./img/audioON.png",
                            width: this.width * 0.04,
                            height: this.width * 0.04,
                            position: { h: 50, v: 50 }
                        };

                        var muteButton = new Element(muteParams);
                        this.elementsPending++;

                        muteButton.on('ready', function (evt) {
                            var object = evt.target.object3D;
                            object.position.y = -_this8.width / 3.02;
                            object.position.x = -_this8.width / 2;
                            _this8.panel.add(object);
                            RODIN.Raycastables.push(object);
                            evt.target.animator.add(hoverAnimation, hoverOutAnimation);
                            _this8.elementsPending--;
                            _this8.readyCheck();
                        });
                        muteButton.on('update', function (evt) {
                            if (_this8.timeBarButton) {
                                var object = evt.target.object3D;
                                object.position.x = _this8.timeBarButton.object3D.position.x + _this8.timeBarButton.object3D.scale.x * _this8.timeBarButton.object3D.geometry.parameters.width + _this8.width / 30;
                            }
                        });

                        muteButton.on(RODIN.CONSTANTS.EVENT_NAMES.CONTROLLER_HOVER, function (evt) {
                            evt.target.animator.start("hoverAnimation");
                        });

                        muteButton.on(RODIN.CONSTANTS.EVENT_NAMES.CONTROLLER_HOVER_OUT, function (evt) {
                            evt.target.animator.start("hoverOutAnimation");
                        });

                        muteButton.on(RODIN.CONSTANTS.EVENT_NAMES.CONTROLLER_KEY_DOWN, function (evt) {
                            _this8.player.mute(true);
                            var object = evt.target.object3D;
                            _this8.panel.remove(object);
                            _this8.panel.add(unmuteButton.object3D);
                        });

                        var unmuteParams = { name: "unmute", width: this.width * 0.04, height: this.width * 0.04, ppm: 1000 };

                        unmuteParams.image = {
                            url: "./img/audioOFF.png",
                            width: this.width * 0.04,
                            height: this.width * 0.04,
                            opacity: 0.6,
                            position: { h: 50, v: 50 }
                        };

                        var unmuteButton = new Element(unmuteParams);
                        this.elementsPending++;

                        unmuteButton.on('ready', function (evt) {
                            var object = evt.target.object3D;
                            object.position.y = -_this8.width / 3.02;
                            object.position.x = -_this8.width / 2;
                            RODIN.Raycastables.push(object);
                            evt.target.animator.add(hoverAnimation, hoverOutAnimation);
                            _this8.elementsPending--;
                            _this8.readyCheck();
                        });
                        unmuteButton.on('update', function (evt) {
                            if (_this8.timeBarButton) {
                                var object = evt.target.object3D;
                                object.position.x = _this8.timeBarButton.object3D.position.x + _this8.timeBarButton.object3D.scale.x * _this8.timeBarButton.object3D.geometry.parameters.width + _this8.width / 30;
                            }
                        });

                        unmuteButton.on(RODIN.CONSTANTS.EVENT_NAMES.CONTROLLER_HOVER, function (evt) {
                            evt.target.animator.start("hoverAnimation");
                        });

                        unmuteButton.on(RODIN.CONSTANTS.EVENT_NAMES.CONTROLLER_HOVER_OUT, function (evt) {
                            evt.target.animator.start("hoverOutAnimation");
                        });

                        unmuteButton.on(RODIN.CONSTANTS.EVENT_NAMES.CONTROLLER_KEY_DOWN, function (evt) {
                            _this8.player.mute(false);
                            var object = evt.target.object3D;
                            _this8.panel.remove(object);
                            _this8.panel.add(muteButton.object3D);
                        });
                    }
                }, {
                    key: 'createHDToggle',
                    value: function createHDToggle() {
                        var _this9 = this;

                        var HDParams = {
                            text: "HD",
                            color: 0xffffff,
                            fontFamily: "Arial",
                            fontSize: this.width / 30,
                            ppm: 1000
                        };
                        var HDButton = new Text(HDParams);

                        this.elementsPending++;

                        HDButton.on('ready', function (evt) {
                            var object = evt.target.object3D;
                            object.position.y = -_this9.width / 3.02;
                            object.position.x = _this9.width * 0.48;
                            _this9.panel.add(object);
                            RODIN.Raycastables.push(object);
                            evt.target.animator.add(hoverAnimation, hoverOutAnimation);
                            _this9.elementsPending--;
                            _this9.readyCheck();
                        });

                        HDButton.on(RODIN.CONSTANTS.EVENT_NAMES.CONTROLLER_HOVER, function (evt) {
                            evt.target.animator.start("hoverAnimation");
                        });

                        HDButton.on(RODIN.CONSTANTS.EVENT_NAMES.CONTROLLER_HOVER_OUT, function (evt) {
                            evt.target.animator.start("hoverOutAnimation");
                        });

                        HDButton.on(RODIN.CONSTANTS.EVENT_NAMES.CONTROLLER_KEY_DOWN, function (evt) {

                            var playAfter = _this9.player.isPlaying();
                            _this9.player.switchTo("SD");

                            var object = evt.target.object3D;
                            _this9.panel.remove(object);
                            _this9.panel.add(SDButton.object3D);

                            if (playAfter) {
                                _this9.player.play();
                            }
                        });

                        var SDParams = {
                            text: "SD",
                            color: 0xffffff,
                            fontFamily: "Arial",
                            fontSize: this.width / 30,
                            ppm: 1000
                        };
                        var SDButton = new Text(SDParams);

                        this.elementsPending++;

                        SDButton.on('ready', function (evt) {
                            var object = evt.target.object3D;
                            object.position.y = -_this9.width / 3.02;
                            object.position.x = _this9.width * 0.48;
                            RODIN.Raycastables.push(object);
                            evt.target.animator.add(hoverAnimation, hoverOutAnimation);
                            _this9.elementsPending--;
                            _this9.readyCheck();
                        });

                        SDButton.on(RODIN.CONSTANTS.EVENT_NAMES.CONTROLLER_HOVER, function (evt) {
                            evt.target.animator.start("hoverAnimation");
                        });

                        SDButton.on(RODIN.CONSTANTS.EVENT_NAMES.CONTROLLER_HOVER_OUT, function (evt) {
                            evt.target.animator.start("hoverOutAnimation");
                        });

                        SDButton.on(RODIN.CONSTANTS.EVENT_NAMES.CONTROLLER_KEY_DOWN, function (evt) {

                            var playAfter = _this9.player.isPlaying();
                            _this9.player.switchTo("HD");

                            var object = evt.target.object3D;
                            _this9.panel.remove(object);
                            _this9.panel.add(HDButton.object3D);

                            if (playAfter) {
                                _this9.player.play();
                            }
                        });

                        var LDParams = {
                            text: "LD",
                            color: 0xffffff,
                            fontFamily: "Arial",
                            fontSize: this.width / 30,
                            ppm: 1000
                        };
                        var LDButton = new Text(LDParams);

                        this.elementsPending++;

                        LDButton.on('ready', function (evt) {
                            var object = evt.target.object3D;
                            object.position.y = -_this9.width / 3.02;
                            object.position.x = _this9.width * 0.48;
                            RODIN.Raycastables.push(object);
                            evt.target.animator.add(hoverAnimation, hoverOutAnimation);
                            _this9.elementsPending--;
                            _this9.readyCheck();
                        });

                        LDButton.on(RODIN.CONSTANTS.EVENT_NAMES.CONTROLLER_HOVER, function (evt) {
                            evt.target.animator.start("hoverAnimation");
                        });

                        LDButton.on(RODIN.CONSTANTS.EVENT_NAMES.CONTROLLER_HOVER_OUT, function (evt) {
                            evt.target.animator.start("hoverOutAnimation");
                        });

                        LDButton.on(RODIN.CONSTANTS.EVENT_NAMES.CONTROLLER_KEY_DOWN, function (evt) {

                            var playAfter = _this9.player.isPlaying();
                            _this9.player.switchTo("HD");

                            var object = evt.target.object3D;
                            _this9.panel.remove(object);
                            _this9.panel.add(HDButton.object3D);

                            if (playAfter) {
                                _this9.player.play();
                            }
                        });
                    }
                }]);

                return VPcontrolPanel;
            }(Sculpt));

            _export('VPcontrolPanel', VPcontrolPanel);
        }
    };
});