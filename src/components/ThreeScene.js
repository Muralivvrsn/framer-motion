import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import modelPath from '../model.glb';

const ThreeScene = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    const loader = new GLTFLoader();
    loader.load(modelPath, function(gltf) {
      scene.add(gltf.scene);
      // Additional setup like camera position
    }, undefined, function(error) {
      console.error('Error loading model:', error);
    });

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    return () => { // Cleanup on component unmount
      renderer.domElement.remove();
    };
  }, []);

  return <div id="canvasContainer"></div>;
};

export default ThreeScene;
