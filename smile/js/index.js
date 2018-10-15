const incio = document.getElementById('inicio');
    const smile = document.getElementById('smile');
    const fun = document.getElementById('fun');
    const love = document.getElementById('love');
    
    incio.addEventListener('click',function(){
        location.assign("../")
    });
    smile.addEventListener('click',function(){
        location.assign("#");
    });
    fun.addEventListener('click',function(){
        location.assign("../fun/");
    });
    love.addEventListener('click',function(){
        location.assign("../love/");
    });
/*Imagenes*/

const imga =  new Array();
const imgaFR = new Array();
    imga[0] = '../DATOS/SMILE/20180928_092502.jpeg';
    imgaFR[0] = '28 Septiembre 2018 09:25 <br>"Eres la casualidad mas bonita que lleg&oacute; a mi vida."';
    imga[1] = '../DATOS/SMILE/IMG_20181002_123638744.jpeg';
    imgaFR[1] = '2 Octubre 2018 12:36 <br>"Siento contradecirte pero no te busqu&eacute; porque me faltara algo, al contrario, tenia tanto que quer&iacute;a compartirlo contigo."';
    imga[2] = '../DATOS/SMILE/IMG_20181002_123702330.jpeg';
    imgaFR[2] = '2 Octubre 2018 12:37 #1 <br> "No importa lo que digas, no importa lo que hagas, no importa donde est&eacute;s yo siempre voy a estar a tu lado!"';
    imga[3] = '../DATOS/SMILE/IMG_20181002_123709753.jpeg';
    imgaFR[3] = '2 Octubre 2018 12:37 #2 <br> "Mi promesa, ser&aacute; nunca hacer que estes triste! :) . "';
    imga[4] = '../DATOS/SMILE/IMG_20181002_123724958.jpeg';
    imgaFR[4] = '2 Octubre 2018 12:37 #3 <br> "Nuestra amistad, la que rompe barreras y estereotipos de la sociedad, a la que no le importa la opinion ajena!."';
    imga[5] = '../DATOS/SMILE/IMG_20181002_123750536.jpeg';
    imgaFR[5] = '2 Octubre 2018 12:37 #4 <br> "Una amistad a nuestro modo. Fue y ser&aacute; lo m&aacute;s bonito que puedo pedir."';
    imga[6] = '../DATOS/SMILE/IMG_20181002_123947188.jpeg';
    imgaFR[6] = '2 Octubre 2018 12:39 <br>';
    imga[7] = '../DATOS/SMILE/IMG-20181008-WA0020.jpeg';
    imgaFR[7] = '8 Octubre 2018 17:07 #1 <br> "Amo pasar contigo aunque sea solo un momento, quiero ser tu mas bonito recuerdo y que sepas que pase lo que pase siempre me tendr&acute;s para ti, siempre!."';
    imga[8] = '../DATOS/SMILE/IMG-20181008-WA0021.jpeg';
    imgaFR[8] = '8 Octubre 2018 17:07 #2 <br> "Nuestras tardes no tienen explicaci&oacute;n!"';
    imga[9] = '../DATOS/SMILE/IMG-20181008-WA0022.jpeg';
    imgaFR[9] = '8 Octubre 2018 17:07 #3 <br> "Que esto dure lo que tenga que durar, d&iacute;as, meses o años. Que dure una vida entera, un segundo o una eternidad, pero que sea contigo."';
    imga[10] = '../DATOS/SMILE/IMG-20181008-WA0024.jpeg';
    imgaFR[10] = '8 Octubre 2018 17:07 #4 <br> "No se hacia donde vamos, lo que se es que quiero ir contigo."';
    imga[11] = '../DATOS/SMILE/Screenshot_20181005-211145.png';
    imgaFR[11] = '5 Octubre 2018 21:11 <br> "Lo que yo siento por ti mi querida compañera, es mas que un cariño, es todo y mucho m&aacute;s de lo que te puedas imaginar."';

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