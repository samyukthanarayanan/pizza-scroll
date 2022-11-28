// An event listener waits till some event has happened. In this case, when all the content on the page has loaded. Also note that the image format is webp, which is a very light image, and so allows for faster loading

document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();
   
    
    let timeline = new TimelineMax(); //The scroll timeline allows us to map the scroll distance to the animation progress. imelineMax is a type of timeline that allows you a lot of control over how things happen


    timeline
    .to('.section_3_01', 4, { //Move to y = -250 in 4 seconds. Ease it in and out
        y: -250,
        ease: Power3.easeInOut
    })
    .to('.section_3_02', 4, {
        y: -200,
        ease: Power3.easeInOut
    }, '-=4')//offset of -=4 means it starts 4 seconds before the first animation is complete, ie: at the same time as the first animation starts
    .to('.section_3_03', 4, {
        y: -100,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_04', 4, {
        y: 0,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_05', 4, {
        y: 150,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_06', 4, {
        y: 250,
        ease: Power3.easeInOut
    }, '-=4')

    let scene3 = new ScrollMagic.Scene({
        triggerElement: '.first-section',
        duration: '100%', // Measured in screen size/pixels
        triggerHook: 0, // As soon as the first section hits the top of the screen, we start animating
        offset: '300' // animation starts 300 px from the top of the screen
    })
    .setTween(timeline)
    .setPin('.first-section')//Don't pass first section without completing the animation
    .addTo(controller);

    
})