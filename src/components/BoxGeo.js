import React, { useState } from "react";
import * as THREE from "three";
import { useEffect } from "react";
import logo from "../xzect-logo-space.svg";

const BoxGeo = () => {
  const [sizes, setSize] = useState({
    height: 500,
    width: 550,
  });

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 800 && window.innerWidth > 700) {
        setSize({ height: 300, width: 300 });
      } else if(window.innerWidth > 800 && window.innerWidth < 900) {
        setSize({ height: 500, width: 500 });
      }
    };

    window.addEventListener("resize", handleWindowResize);

    const canvas = document.querySelector("#webgl");
    const scene = new THREE.Scene();
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const texture = new THREE.TextureLoader().load(logo);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      color: 0xd9d9d9,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    if (Window.width == 1000) {
      console.log(Window);
    }

    console.log("working");
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
    camera.position.z = 1.4;
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });

    renderer.setSize(sizes.width, sizes.height);
    renderer.render(scene, camera);
    renderer.setClearColor(0xffffff, 0);

    let time = Date.now();

    const tick = () => {
      const currentTime = Date.now();
      const deltaTime = currentTime - time;
      time = currentTime;
      camera.lookAt(mesh.position);
      mesh.rotation.y += 0.0008 * deltaTime;
      mesh.rotation.z += 0.0004 * deltaTime;

      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    };

    tick();
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return <canvas id="webgl"></canvas>;
};

export default BoxGeo;
