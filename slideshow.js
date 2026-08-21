"use strict";

const $ = selector => document.querySelector(selector);

const slides = [
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800",
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800"
];

let current = 0;

const nextSlide = () => {
    current++;
    if (current >= slides.length) {
        current = 0;
    }
    $("#slideshow_img").src = slides[current];
};

document.addEventListener("DOMContentLoaded", () => {
    $("#next_slide").addEventListener("click", nextSlide);
});