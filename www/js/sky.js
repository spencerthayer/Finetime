if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
    var container, camera, scene, renderer, sky, sunSphere;
    //controls, 
    //stats,
    init();
    animate();
    function initSky(){
        // Add Sky Mesh
        sky = new THREE.Sky();
        scene.add( sky.mesh );
        // Add Sun Helper
        sunSphere = new THREE.Mesh( new THREE.SphereGeometry( 20000, 30, 30 ),
            new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: false }));
        sunSphere.position.y = -700000;
        sunSphere.visible = true;
        scene.add( sunSphere );
        /// GUI
        /** /
            turbidity: 1,
            reileigh: 1,
            mieCoefficient: 0.005,
            mieDirectionalG: 0.95,
            luminance: 1,
            inclination: 0.51,
            azimuth: 0.125,	
        /**/
        var effectController  = {
            turbidity: 0.1,
            reileigh: -.05,
            mieCoefficient: 1,
            mieDirectionalG: 0.95,
            luminance: 1,
            inclination: .2,
            azimuth: 0.35,					
            sun: !true
            }
        var distance = 400000;
        function guiChanged() {
            var uniforms = sky.uniforms;
            uniforms.turbidity.value = effectController.turbidity;
            uniforms.reileigh.value = effectController.reileigh;
            uniforms.luminance.value = effectController.luminance;
            uniforms.mieCoefficient.value = effectController.mieCoefficient;
            uniforms.mieDirectionalG.value = effectController.mieDirectionalG;

            var theta = Math.PI * (effectController.inclination - 0.5);
            var phi = 2 * Math.PI * (effectController.azimuth - 0.5);

            sunSphere.position.x = distance * Math.cos(phi);
            sunSphere.position.y = distance * Math.sin(phi) * Math.sin(theta); 
            sunSphere.position.z = distance * Math.sin(phi) * Math.cos(theta); 

            sunSphere.visible = effectController.sun;

            sky.uniforms.sunPosition.value.copy(sunSphere.position);
            }
        /** /
        var gui = new dat.GUI();
        gui.add( effectController, "turbidity", 1.0, 20.0, 0.1 ).onChange( guiChanged );
        gui.add( effectController, "reileigh", 0.0, 4, 0.001 ).onChange( guiChanged );
        gui.add( effectController, "mieCoefficient", 0.0, 0.1, 0.001 ).onChange( guiChanged );
        gui.add( effectController, "mieDirectionalG", 0.0, 1, 0.001 ).onChange( guiChanged );
        gui.add( effectController, "luminance", 0.0, 2).onChange( guiChanged );;
        gui.add( effectController, "inclination", 0, 1, 0.0001).onChange( guiChanged );
        gui.add( effectController, "azimuth", 0, 1, 0.0001).onChange( guiChanged );
        gui.add( effectController, "sun").onChange( guiChanged );
        /**/
        guiChanged();
        camera.lookAt(sunSphere.position)
    }


    function init() {

        camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 2000000 );
        camera.position.z = 2000;

        camera.position.y = 100;
        camera.setLens(20);

        scene = new THREE.Scene();

        var size = 500;

        var geometryLines = new THREE.BoxGeometry( size, size, size );

        var geometryPlane = new THREE.PlaneGeometry( size * 0, size * 0, 0, 0);
        geometryPlane.applyMatrix( new THREE.Matrix4().makeRotationX( - Math.PI / 2 ) );


        var materialLines = new THREE.MeshBasicMaterial( { wireframe: true } );

        meshLines = new THREE.Mesh( geometryLines, materialLines );

        // scene.add( meshLines );

        scene.add( new THREE.Mesh( geometryPlane, materialLines ) );

        initSky();

        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setSize( window.innerWidth, window.innerHeight );

        document.body.appendChild( renderer.domElement );

        controls = new THREE.TrackballControls( camera, renderer.domElement );
        /** /
        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        stats.domElement.style.left = '0px';
        stats.domElement.style.zIndex = 1;
        document.body.appendChild( stats.domElement );
        /**/
        //

        window.addEventListener( 'resize', onWindowResize, false );


    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

        render();

    }

    var time = 0;

    function animate() {

        time = Date.now();

        requestAnimationFrame( animate );

        controls.update();

        render();

    }

    function render() {

        renderer.render( scene, camera );
        stats.update();

    }