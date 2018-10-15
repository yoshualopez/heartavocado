const incio = document.getElementById('inicio');
    const smile = document.getElementById('smile');
    const fun = document.getElementById('fun');
    const love = document.getElementById('love');
    
    incio.addEventListener('click',function(){
        location.assign("../")
    });
    smile.addEventListener('click',function(){
        location.assign("../smile/");
    });
    fun.addEventListener('click',function(){
        location.assign("#");
    });
    love.addEventListener('click',function(){
        location.assign("../love/");
    });
/*Imagenes*/

const imga =  new Array();
const imgaFR = new Array();
    imga[0] = '../DATOS/FUN/';
    imgaFR[0] = '';
    imga[1] = '../DATOS/FUN/';
    imgaFR[1] = '';
    imga[2] = '../DATOS/FUN/';
    imgaFR[2] = '';
    imga[3] = '../DATOS/FUN/';
    imgaFR[3] = '';
    imga[4] = '../DATOS/FUN/';
    imgaFR[4] = '';
    imga[5] = '../DATOS/FUN/';
    imgaFR[5] = '';
    imga[6] = '../DATOS/FUN/';
    imgaFR[6] = '';
    imga[7] = '../DATOS/FUN/';
    imgaFR[7] = '';
    imga[8] = '../DATOS/FUN/';
    imgaFR[8] = '';
    imga[9] = '../DATOS/FUN/';
    imgaFR[9] = '';
    imga[10] = '../DATOS/FUN/';
    imgaFR[10] = '';
    imga[11] = '../DATOS/FUN/';
    imgaFR[11] = '';

var tablas = '<!-- tablas-->';

window.onload = () =>{
    document.onselectstart = function()
    {
         return false;
    } 
//chrome
window.ondragstart = function() { return false;} 


    
    for(let i = 0; i < imga.length; i++){

        tablas += `<div class="ctr-al">
                        <div class="ctr-las">
                            <img src="`+ imga[i] +`" alt="`+ imgaFR[i] +`">
                        </div>
                        <div class="ctr-htext">
                            <span>
                                <p>`+ imgaFR[i] +`</p>
                            </span>
                        </div>
                    </div>`;
    }
    
    document.getElementById('ctr-post').innerHTML = tablas;
}

const slider = document.querySelector('.ctr-a');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown',(e)=> {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave',() =>{
    isDown = false;
});

slider.addEventListener('mouseup',() =>{
    isDown = false;
});

slider.addEventListener('mousemove',(e) =>{
    if(!isDown)return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;

    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
});