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
        './assets/img/sakura.gif'
    ];

    var background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    document.body.style.backgroundImage = ("url(" + background + ")");
}
