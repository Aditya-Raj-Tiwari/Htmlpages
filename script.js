document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    const screenWidth = window.innerWidth;

    let bottomImageInitialX = '-800px';
    let bottomImageFinalX = '-420px';

    // Adjust initial and final position based on screen width
    if (screenWidth <= 415 || screenWidth <= 615) {
        bottomImageInitialX = '-640px';
        bottomImageFinalX = '-320px';
    }

    gsap.utils.toArray('.image-wrapper').forEach((element, index) => {
        const topImage = element.querySelector('.top-image');
        const bottomImage = element.querySelector('.bottom-image');
        const sideImage = element.querySelector('.side-image');
        const headerImage = element.querySelector('.image-container');


        gsap.fromTo(headerImage,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 2,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: element,
                    start: 'top bottom-=100',
                    end: 'bottom top'
                }
            }
        );

        gsap.fromTo(topImage,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 2,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: element,
                    start: 'top bottom-=100',
                    end: 'bottom top'
                }
            }
        );

        // Animate bottom-image (Starts from the left, adjusted by screen size)
        gsap.fromTo(bottomImage,
            { opacity: 0, left: '50%', bottom: '50%', x: bottomImageInitialX, y: '280px' },
            {
                opacity: 1,
                x: bottomImageFinalX,
                duration: 2.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: 'top bottom-=100',
                    end: 'bottom top'
                }
            }
        );
        // (Side image animation remains the same)
    });
});
