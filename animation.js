export function initAnimations() {
    gsap.from('.hero-content', { opacity: 0, y: 50, duration: 1.5, delay: 0.5 });

    gsap.to('.about', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top center',
            end: 'bottom center',
            scrub: true
        },
        opacity: 1,
        y: 0,
        duration: 1
    });
}