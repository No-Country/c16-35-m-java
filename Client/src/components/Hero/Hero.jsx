import React from "react";
import ImagenHero from '../../assets/Imagen-hero.png'
import "./Hero.scss";


export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="contenido-hero">
          <div className="hero-texto">
            <p>Tu casa,</p>
            <p>tu clase,</p>
            <p>tus horarios.</p>
          </div>
          <img src={ImagenHero} alt="Imagen del hero" />
        </div>
      </section>
    </>
  );
}
