// On initialise threejs


// -- récupération d'un textureLoader
const loader = new THREE.TextureLoader();

// -- création de la scène
const scene = new THREE.Scene();

// -- création du renderer 
const renderer = new THREE.WebGLRenderer();
// on met en place la taille de la fenêtre
// Pour le responsive c'est ici les modifs
renderer.setSize( window.innerWidth, window.innerHeight );
// on envoie notre renderer dans la vue
document.body.appendChild( renderer.domElement );

// -- création de la caméra
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// on définit la position de la caméra dans l'espace
camera.position.x = 0;
camera.position.y = 5;
camera.position.z = 10;
// on définit l'endroit où la caméra regarde
camera.lookAt(scene.position);

// === mise en place des éléments
// --mise en place de la géometrie

// Création du soleil
// une mesh est un élément de la scène
const sun = new THREE.Mesh(
    // on définit la taille du soleil
    new THREE.SphereGeometry(1.2, 32, 32),
    // on définit sa couleur
    //new THREE.MeshBasicMaterial( { color: 0xffff00 } )
    // on ajoute une texture au soleil
    new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/c/cb/Solarsystemscope_texture_2k_sun.jpg')
    })
);
// ajout de la position du soleil
sun.position.set(0, 0, 0);

// vu que notre système est héliocentré, on fait fixer la caméra sur notre soleil
// on définit la position de la caméra dans l'espace
camera.position.x = sun.position.x;
camera.position.y = sun.position.y + 5;
camera.position.z = sun.position.z + 10;
// on définit l'endroit où la caméra regarde
camera.lookAt(sun.position);

// mercure
const mercury = new THREE.Mesh(
    new THREE.SphereGeometry(0.1, 32, 32),
    new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Solarsystemscope_texture_2k_mercury.jpg/1600px-Solarsystemscope_texture_2k_mercury.jpg?20201026210257')
    })
)









// venus
const venus = new THREE.Mesh(
    new THREE.SphereGeometry(0.2, 32, 32),
    new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Solarsystemscope_texture_4k_venus_atmosphere.jpg/1600px-Solarsystemscope_texture_4k_venus_atmosphere.jpg?20201026210237')
    })
)

// earth
const earth = new THREE.Mesh(
    new THREE.SphereGeometry(0.2, 32, 32),
    new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Solarsystemscope_texture_8k_earth_daymap.jpg/1600px-Solarsystemscope_texture_8k_earth_daymap.jpg?20201026210214')
    })
)

// moon
const moon = new THREE.Mesh(
    new THREE.SphereGeometry(0.05, 32, 32),
    new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Moon_texture.jpg/1600px-Moon_texture.jpg?20211211163514')
    })
)

// mars
const mars = new THREE.Mesh(
    new THREE.SphereGeometry(0.15, 32, 32),
    new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Solarsystemscope_texture_2k_mars.jpg/1600px-Solarsystemscope_texture_2k_mars.jpg?20201026210255')
    })
)

// jupiter
const jupiter = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 32),
    new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Solarsystemscope_texture_8k_jupiter.jpg/1600px-Solarsystemscope_texture_8k_jupiter.jpg?20201026210228')
    })
)



// saturne
const saturne = new THREE.Mesh(
    new THREE.SphereGeometry(0.7, 32, 32),
    new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Solarsystemscope_texture_2k_saturn.jpg/1600px-Solarsystemscope_texture_2k_saturn.jpg?20201026210300')
    })
)


// -- ajout de la texture
// on ajoute le fond d'écran à notre scène:

const texture = loader.load('https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Solarsystemscope_texture_8k_stars.jpg/1600px-Solarsystemscope_texture_8k_stars.jpg?20201026210204');
scene.background = texture;

// --ajout les éléments sur la scène
scene.add(sun);
scene.add(mercury);
scene.add(venus);
scene.add(earth);
scene.add(mars);
scene.add(jupiter);
scene.add(saturne);
scene.add(moon);

// === mouvement de la scène

// (la bobine qui tourne)
// animate va être appelée à chaque frame
function animate() {

    // rotation des planètes autour du soleil
    // = sun.position.x + 1.5 = distance du soleil
    // * Math.cos()  ET Math.sin = position sur le cercle 
    // Date.now() / 3000 = vitesse
    mercury.position.x = sun.position.x + 1.5 * Math.cos(Date.now() / 2000);
    mercury.position.y = sun.position.y + 1.5 * Math.sin(Date.now() / 2000);

    venus.position.x = sun.position.x + 2.5 * Math.cos(Date.now() / 3000);
    venus.position.y = sun.position.y + 2.5 * Math.sin(Date.now() / 3000);

    earth.position.x = sun.position.x + 3.3 * Math.cos(Date.now() / 4000);
    earth.position.y = sun.position.y + 3.3 * Math.sin(Date.now() / 4000);

    // on fait tourner la lune autour de la terre
    moon.position.x = earth.position.x + 0.3 * Math.cos(Date.now() / 1000);
    moon.position.y = earth.position.y + 0.3 * Math.sin(Date.now() / 1000);

    mars.position.x = sun.position.x + 4 * Math.cos(Date.now() / 5000);
    mars.position.y = sun.position.y + 4 * Math.sin(Date.now() / 5000);

    jupiter.position.x = sun.position.x + 5 * Math.cos(Date.now() / 6000);
    jupiter.position.y = sun.position.y + 5 * Math.sin(Date.now() / 6000);




    saturne.position.x = sun.position.x + 6 * Math.cos(Date.now() / 7000);
    saturne.position.y = sun.position.y + 6 * Math.sin(Date.now() / 7000);


    // rotation des planètes sur elles mêmes
    sun.rotation.y += 0.01;
    mercury.rotation.y += 0.01;
    venus.rotation.y += 0.01;
    mars.rotation.y += 0.01;
    jupiter.rotation.y += 0.01;
    saturne.rotation.y += 0.01;
    moon.rotation.y += 0.01;


    // -- lancer la génération de la vue
    // gestion des frames
    requestAnimationFrame(animate);
    // clé de voute de l'affichage
    renderer.render(scene, camera);
}

animate();

