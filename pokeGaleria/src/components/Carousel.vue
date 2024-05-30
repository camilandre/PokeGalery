<script lang="ts">
import image1 from "@/assets/1.png";
import image2 from "@/assets/2.png";
import image3 from "@/assets/3.png";
import image4 from "@/assets/4.png";
import image5 from "@/assets/5.png";
import { threadId } from "worker_threads";

interface Pokemon {
  name: string;
  image: string;
  topic: string;
  des: string;
  height: string;
  weight: string;
  hability: string;
  category: string;
  gender: string;
}

export default {
  data(){
    return {
      pokemons: [
        {
            name: "Pikachu",
            image: image1,
            topic: "Electrico",
            des: "Cuando se enfada, este Pokémon descarga la energía que almacena en el interior de las bolsas de las mejillas.",
            height: "5m",
            weight: "10kg",
            hability: "Intimidate",
            types: ['Eletrico'],
            category: "Ratón",
            gender: "f/m"
        },
        {
            name: "Eevee",
            image: image2,
            topic: "Normal",
            des: "Es capaz de evolucionar de muchas maneras para adaptarse sin problemas a cualquier medio.",
            weight: "10kg",
            height: "1.9m",
            hability: "Intimidate",
            types: ['Normal'],
            category: "Evolución",
            gender: "f/m"
        },
        {
            name: "Mew",
            image: image3,
            topic: "Psíquico",
            des: "Si se observa a través de un microscopio, puede distinguirse cuán corto, fino y delicado es el pelaje de este Pokémon.",
            height: "1.9m",
            weight: "10kg",
            hability: "Intimidate",
            types: ['Psiquico'],
            category: "Nueva Especie",
            gender: "f/m"
        },
        {
            name: "Charizard",
            image: image4,
            topic: "Fuego & Volador",
            des: "Cuando se enfurece de verdad, la llama de la punta de su cola se vuelve de color azul claro.",
            height: "1.9m",
            weight: "10kg",
            hability: "Intimidate",
            types: ['Fuego', 'Volador'],
            category: "Llama",
            gender: "f/m"
        },
        {
            name: "Arcanine",
            image: image5,
            topic: "Fuego",
            des: "Cuenta un antiguo pergamino que la gente se quedaba fascinada al verlo correr por las praderas.",
            weight: "10kg",
            height: "1.9m",
            hability: "Intimidate",
            types: ['Fuego'],
            category: "Leyenda",
            gender: "f/m"
        }
      ],
      next: false,
      prev: false,
      showMore: false,
    };
  },
  methods: {
    showSlider(typeButton:string) :void  {
      this.prev = false;
      this.next = false;

      const listHTML: Element | null= document.querySelector('.carousel .list');
      const items = document.querySelectorAll('.carousel .list .item');

        if(typeButton === 'next') {
          this.next = true;
          listHTML?.appendChild(items[0]);
        }
        else {
          this.prev= true;
          listHTML?.prepend(items[items.length - 1]);
        }
    },
    seeMoreButton() {
      this.showMore = true;
    },
    backButton() {
      this.showMore = false;  
    }
  }
};
</script>

<template>
  <div class="carousel" :class="{next : next, prev: prev, showDetail: showMore}">
    <div class="list">
      <div class="item" v-for="poke in pokemons">
        <div>
          <div class="intro">
            <div class="title">{{poke.name }}</div>
            <div class="topic">{{poke.topic}}</div>
            <div class="des">
              {{ poke.des }}
            </div>
            <button class="seeMore" @click="seeMoreButton()">Ver más &#8599</button>
          </div>
          <div class="detail">
            <div class="title">{{poke.name}}</div>
            <div class="des">
              {{ poke.des }}
            </div>
            <div class="specifications">
              <div>
                <h4>Altura</h4>
                <p>{{poke.height}}</p>
              </div>
              <div>
                <h4>Peso</h4>
                <p>{{ poke.weight }}</p>
              </div>
              <div>
                <h4>Habilidad</h4>
                <p>{{ poke.hability }}</p>
              </div>
              <div>
                <h4>Categoria</h4>
                <p>{{poke.category}}</p>
              </div>
            </div>
            <div class="checkout">
              <button @click="backButton()">Checkout</button>
            </div>
          </div>
        </div>

        <img :src="poke.image" />
      </div>
    </div>
      <div class="arrows">
      <button id="prev" @click="showSlider('prev')"> < </button>
      <button id="back"> Go back &#8599 </button>
      <button id="next" @click="showSlider('next')"> ></button>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
  max-width: 100vw;
  margin: 0 auto;
  flex: 20;
}

.carousel::before {
  width: 62%;
  height: 300px;
  content:'';
  position: absolute;
  z-index: -1;
  background-image: linear-gradient(45deg, #e1b953, rgb(217, 136, 136));
  border-radius: 20% 30% 80% 10%;
  top: 50%;
  left: 32%;
  transform: translate(15%, -50%);
  filter: blur(150px);
  transition: 1s;
}

.carousel .list {
  margin: 0 auto;
  padding:0 5rem;
  min-width: 90%;
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
}

.carousel .list .item {
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  width: 45vw
}

.carousel .item .detail {
  opacity: 0;
  pointer-events: none;
}


.carousel .list .item img{
  width: 42rem;
  min-width: 15rem;
}

.carousel .item .intro {
  opacity: 0;
  pointer-events: none;
  min-width: 11rem;
}

.carousel .list .item:nth-child(2) .intro {
  opacity: 1;
  pointer-events: auto;
  transition: opacity 0.5s;
  transform: translateY(13rem)translateX(1rem);
}

.carousel .list .item:nth-child(1) { 
  transform: translateX(-100%) translateY(-5%) scale(1.5);
  filter: blur(30px);
  z-index: 11;
  opacity: 0;
  pointer-events: none;
}


.carousel .list .item:nth-child(2) { 
  transform: translate(-100%, -5%);
  filter: blur(0);
  z-index: 10;
  opacity: 1;
}

.carousel .item:nth-child(3) {
  z-index: 9;
  filter: blur(10px);
  transform: translate(-145%, 10%) scale(0.8);
  opacity: 1;
}

.carousel .item:nth-child(4) {
  z-index: 8;
  filter: blur(20px);
  transform: translate(-200%, 10%) scale(0.5);
  opacity: 1;
}

.carousel .item:nth-child(5) {
  z-index: 7;
  filter: blur(30px);
  transform: translate(-270%, 10%) scale(0.3);
  opacity: 0;
  pointer-events: none;
}

.item .intro .title {
  font-size: clamp(0.6rem, 0.1vw + 1.2rem, 1.8rem);
  line-height: 1rem;
  text-transform: uppercase;
  color: #555;
}

.item .intro .topic {
  font-size: clamp(0.7rem, 0.1vw + 2.1rem, 2.6rem);
  margin: 0.6rem 0 0.4rem 0;
  font-weight: 500
}

.item .intro .des {
  font-size: clamp(0.45rem, 0.1vw + 0.85rem, 1.1rem);
  max-width: 40rem;
}

.item .seeMore {
  font-size: clamp(0.6rem, 0.1vw + 0.96rem, 1.1rem);
  border: none;
  font-weight: bold;
  border-bottom: 1px solid #555;
  background: transparent;
  margin-top: 1rem;
  padding: 0.2rem 0;
  cursor: pointer;
}


.item:nth-child(2) .title,
.item:nth-child(2) .topic,
.item:nth-child(2) .des,
.item:nth-child(2) .seeMore {
  opacity: 0;
  animation: showContent 0.4s 0.5s ease-in-out forwards;
}

@keyframes showContent {
  from {
    transform: translateY(50px);
    filter: blur(30);
  } to {
    transform: translateY(0);
    opacity: 1;
    filter: blur(0);
  }
}


.item:nth-child(2) .topic {
  animation-delay: 0.7s;
}

.item:nth-child(2) .des {
  animation-delay: 1.1s;
}

.item:nth-child(2) .seeMore {
  animation-delay: 1.3s;
}

.carousel.next .item:nth-child(1) {
  animation: transformFromPosition2 0.85s  ease-in-out 1 forwards;
}

.carousel.next .item:nth-child(2) {
  animation: transformFromPosition3 0.85s  ease-in-out 1 forwards;
}

.carousel.next .item:nth-child(3) {
  animation: transformFromPosition4 0.85s  ease-in-out 1 forwards;
}

.carousel.next .item:nth-child(4) {
  animation: transformFromPosition5 0.85s ease-in-out 1 forwards;
}

@keyframes transformFromPosition2 {
  0% {
    transform: translateX(0) translateY(-2%) scale(1);
    filter: blur(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-105%) scale(1.5);
    filter: blur(30px);
    opacity: 0;
  }
}

@keyframes transformFromPosition3 {
  0% {
    transform: translateX(-55%) scale(0.8);
    filter: blur(10px);
    opacity: 1;
  }
  100% {
    transform: translateX(-105%) scale(1);
    filter: blur(0);
    opacity: 1;
  }
}

@keyframes transformFromPosition4 {
  0% {
    transform: translateX(-105%) scale(0.5);
    filter: blur(20px);
  }
  100% {
    transform: translateX(-150%) scale(0.8);
    filter: blur(10px);
  }
}

@keyframes transformFromPosition5 {
  0% {
    transform: translateX(-190%) scale(0.3);
    filter: blur(30px);
    opacity: 0;
  }
  100% {
    transform: translateX(-200%) scale(0.5);
    filter: blur(30px);
    opacity: 1;
  }
}


.carousel.prev .item:nth-child(4) {
  animation: transformToLeftFromPosition3 0.85s ease-in-out 1 forwards;
}

.carousel.prev .item:nth-child(3) {
  animation: transformToLeftFromPosition2 0.85s ease-in-out 1 forwards;
}

.carousel.prev .item:nth-child(2) {
  animation: transformToLeftFromPosition1 0.85s ease-in-out 1 forwards;
}



@keyframes transformToLeftFromPosition3 {
  0% {
    transform: translateX(-240%) scale(0.8);
    filter: blur(20px);
  }
  100% {
    transform: translateX(-195%) scale(0.5) ;
    filter: blur(30px);
  }
}

@keyframes transformToLeftFromPosition2 {
  0% {
    transform: translateX(-200%) scale(1);
    filter: blur(0);
  }
  100% {
    transform: translateX(-143%) scale(0.8) ;
    filter: blur(10px);
  }
}

@keyframes transformToLeftFromPosition1 {
  0% {
    transform: translateX(-320%) scale(1.5);
    filter: blur(30px);
    opacity: 0;
  }
  100% {
    transform: translateX(-105%) scale(1) ;
    filter: blur(0);
    opacity: 1;
  }
}

.arrows {
  position: absolute;
  bottom: 8%;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 3.5rem;
  z-index: 12;
}

.arrows #back {
  display: none;
}

.carousel .arrows #prev,
.carousel .arrows #next {
  cursor: pointer;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  border: none;
  background: rgb(245, 245, 245);
  color: #2d2d2d;
  font-weight: 800;
  box-shadow: 1px 5px 10px 1px rgb(198, 198, 198);
  opacity: 1;
  transition: opacity 0.4s 
}

.carousel.showDetail .arrows #prev,
.carousel.showDetail .arrows #next {
  opacity: 0;
  pointer-events: none
}



.carousel .list .item {
  transition: transform 0.5s, opacity 0.5s;
}

.carousel.showDetail::before {
  transform: translate(-55%) rotate(35deg);
}

.carousel.showDetail {
  width: 100vw;
}

.carousel.showDetail .list .item:nth-child(1),
.carousel.showDetail .list .item:nth-child(5),
.carousel.showDetail .list .item:nth-child(3),
.carousel.showDetail .list .item:nth-child(4){
  transform: translateX(680%);
  opacity: 0;
  pointer-events: none;
  display: none;
}

.carousel.carousel.showDetail .list {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
}

.carousel.showDetail .list .item:nth-child(2) {
  transform: translateY(5%)translateX(0);
  animation: none;
  height: fit-content;
  width: 65vw;
}

.carousel.showDetail .list .item:nth-child(2) .intro{
  opacity: 0;
  display: none;
  pointer-events: none;
}

.carousel.showDetail .list .item:nth-child(2) .detail{
  opacity: 1;
  pointer-events: auto;
  padding: 0.4rem 1rem;
}

.carousel.showDetail .list .item img{
  width: 35rem;
  min-width: 12rem;
}

.carousel.showDetail .list .item .detail .title {
  font-size: clamp(0.8rem, 2.3rem + 0.1vw, 4rem);
}

.carousel.showDetail .list .item .detail .specifications {
  display: flex;
  gap: 1.2rem;
}

.carousel.showDetail .list .item .detail .des{
  max-width: 30rem;
}
</style>