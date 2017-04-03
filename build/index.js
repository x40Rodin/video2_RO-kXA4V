'use strict';

System.register(['https://cdn.rodin.space/vendor/three/THREE.GLOBAL.js', 'https://cdn.rodin.space/rodinjs/RODIN.js', 'https://cdn.rodin.space/rodinjs/scene/SceneManager.js', 'https://cdn.rodin.space/rodinjs/controllers/MouseController.js', 'https://cdn.rodin.space/rodinjs/controllers/CardboardController.js', 'https://cdn.rodin.space/rodinjs/controllers/OculusController.js', 'https://cdn.rodin.space/rodinjs/video/MaterialPlayer.js', './VPcontrolPanel.js', 'https://cdn.rodin.space/rodinjs/utils/Math.js'], function (_export, _context) {
    "use strict";

    var THREE, RODIN, SceneManager, MouseController, CardboardController, OculusController, MaterialPlayer, VPcontrolPanel, scene, camera, controls, renderer, mouseController, oculusController, cardboardController, player, material, sphere, controlPanel;
    return {
        setters: [function (_httpsCdnRodinSpaceVendorThreeTHREEGLOBALJs) {
            THREE = _httpsCdnRodinSpaceVendorThreeTHREEGLOBALJs.THREE;
        }, function (_httpsCdnRodinSpaceRodinjsRODINJs) {
            RODIN = _httpsCdnRodinSpaceRodinjsRODINJs;
        }, function (_httpsCdnRodinSpaceRodinjsSceneSceneManagerJs) {
            SceneManager = _httpsCdnRodinSpaceRodinjsSceneSceneManagerJs.SceneManager;
        }, function (_httpsCdnRodinSpaceRodinjsControllersMouseControllerJs) {
            MouseController = _httpsCdnRodinSpaceRodinjsControllersMouseControllerJs.MouseController;
        }, function (_httpsCdnRodinSpaceRodinjsControllersCardboardControllerJs) {
            CardboardController = _httpsCdnRodinSpaceRodinjsControllersCardboardControllerJs.CardboardController;
        }, function (_httpsCdnRodinSpaceRodinjsControllersOculusControllerJs) {
            OculusController = _httpsCdnRodinSpaceRodinjsControllersOculusControllerJs.OculusController;
        }, function (_httpsCdnRodinSpaceRodinjsVideoMaterialPlayerJs) {
            MaterialPlayer = _httpsCdnRodinSpaceRodinjsVideoMaterialPlayerJs.MaterialPlayer;
        }, function (_VPcontrolPanelJs) {
            VPcontrolPanel = _VPcontrolPanelJs.VPcontrolPanel;
        }, function (_httpsCdnRodinSpaceRodinjsUtilsMathJs) {}],
        execute: function () {
            scene = SceneManager.get();
            camera = scene.camera;
            controls = scene.controls;
            renderer = scene.renderer;
            mouseController = new MouseController();
            oculusController = new OculusController();
            cardboardController = new CardboardController();


            SceneManager.addController(mouseController);
            SceneManager.addController(oculusController);
            SceneManager.addController(cardboardController);

            scene.setCameraProperty("far", 350);
            scene.setCameraProperty("fov", 70);

            player = new MaterialPlayer({
                HD: "video/rodin4k.mp4",
                SD: "video/rodin2k.mp4",
                default: "HD"
            });
            material = new THREE.MeshBasicMaterial({
                map: player.getTexture()
            });
            sphere = new THREE.Mesh(new THREE.SphereBufferGeometry(300, 720, 4), material);

            sphere.scale.set(1, 1, -1);
            sphere.rotation.y = Math.PI / 2;
            scene.add(sphere);

            scene.preRender(function () {
                player.update(RODIN.Time.deltaTime());
            });

            controlPanel = new VPcontrolPanel({
                player: player,
                title: "A sample 360° video",
                cover: "img/rodin.jpg",
                distance: 3,
                width: 3,
                controllers: [mouseController, oculusController, cardboardController]
            });


            controlPanel.on('ready', function (evt) {
                scene.add(evt.target.object3D);
                evt.target.object3D.position.y = controls.userHeight;
                if (evt.target.coverEl) {
                    evt.target.coverEl.rotation.y = -Math.PI / 2;
                }
            });
        }
    };
});