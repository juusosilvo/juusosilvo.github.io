function random_background(){
    const backgrounds = 
    [
        './assets/img/gaming.gif',
        './assets/img/blackmarket.webp',
        './assets/img/city.webp',
        './assets/img/cafe.gif',
        './assets/img/cat.gif',
        './assets/img/jungle.gif',
        './assets/img/mario.gif',
        './assets/img/raining.gif',
        './assets/img/powergrid.gif',
        './assets/img/coffee.gif',
        './assets/img/lounge.gif',
        './assets/img/takeout.gif',
        './assets/img/sheep.gif',
        './assets/img/train.gif',
        './assets/img/cyberpunk.gif',
    ];

    var background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    document.body.style.backgroundImage = ("url(" + background + ")");
}
