const imgUrl = [
    "https://c.wallhere.com/photos/b5/fc/1536x864_px_Anime_Girls_brunette_world-1184106.jpg!d",
    "https://c.wallhere.com/images/35/78/6e53dc31dee3e84a162aa14155d7-1563109.jpg!d",
    "https://c.wallhere.com/images/b3/90/f92e64fcaf92b6d08be4ed5bc179-1428581.jpg!d",
    "https://c.wallhere.com/photos/3f/03/animals_birds_owl-2067879.jpg!d",
    "https://c.wallhere.com/photos/85/33/anime_anime_girls-2067521.jpg!d"
];

const randomImgIndex = Math.floor(Math.random() * imgUrl.length);
document.body.style.backgroundImage = `url(${imgUrl[randomImgIndex]})`;
