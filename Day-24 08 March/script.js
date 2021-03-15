const header = document.getElementById('header');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const sources = ['Earth.JPG','./gummy-sneezing.png']

function createImg(picture,index) {
    const img = document.createElement('img');
    img.src = sources[index];
    picture.appendChild(img);
}
    createImg(header,0);
    createImg(profile_img,1);

    
