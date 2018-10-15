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
        location.assign("../fun/");
    });
    love.addEventListener('click',function(){
        location.assign("#");
    });
/*Imagenes*/

const imga =  new Array();
const imgaFR = new Array();
    imga[0] = '../DATOS/LOVE/20180928_142106.jpg41.jpeg';
    imgaFR[0] = '28 Septiembre 2018 14:21 <br>';
    imga[1] = '../DATOS/LOVE/20180928_142112.jpg40.jpeg';
    imgaFR[1] = '28 Septiembre 2018 14:21 <br>';
    imga[2] = '../DATOS/LOVE/20180928_142116.jpg39.jpeg';
    imgaFR[2] = '28 Septiembre 2018 14:21 <br>';
    imga[3] = '../DATOS/LOVE/20180928_142123.jpg37.jpeg';
    imgaFR[3] = '28 Septiembre 2018 14:21 <br>';
    imga[4] = '../DATOS/LOVE/20180928_142124.jpg38.jpeg';
    imgaFR[4] = '28 Septiembre 2018 14:21 <br>';
    imga[5] = '../DATOS/LOVE/20180928_142128.jpg36.jpeg';
    imgaFR[5] = '28 Septiembre 2018 14:21 <br>';
    imga[6] = '../DATOS/LOVE/20180928_142217.jpg35.jpeg';
    imgaFR[6] = '28 Septiembre 2018 14:22 <br>';
    imga[7] = '../DATOS/LOVE/20180928_142220.jpg34.jpeg';
    imgaFR[7] = '28 Septiembre 2018 14:22 <br>';
    imga[8] = '../DATOS/LOVE/20181008_105010.jpg18.jpeg';
    imgaFR[8] = '8 Octubre 2018 10:50 <br>';
    imga[9] = '../DATOS/LOVE/20181008_105015.jpg19.jpeg';
    imgaFR[9] = '8 Octubre 2018 10:50 <br>';
    imga[10] = '../DATOS/LOVE/20181009_092931.jpg3.jpeg';
    imgaFR[10] = '9 Octubre 2018 9:29 <br>';
    imga[11] = '../DATOS/LOVE/20181010_140306.jpg2.jpeg';
    imgaFR[11] = '10 Octubre 2018 14:03 <br>';
    imga[12] = '../DATOS/LOVE/20181011_132812.jpg1.jpeg';
    imgaFR[12] = '11 Octubre 2018 13:28 <br>';
    imga[13] = '../DATOS/LOVE/20181012_132424.jpg0.jpeg';
    imgaFR[13] = '12 Octubre 2018 13:24 <br>';
    imga[14] = '../DATOS/LOVE/IMG-20180925-WA0003.jpeg';
    imgaFR[14] = '';
    imga[15] = '../DATOS/LOVE/IMG-20180925-WA0004.jpeg';
    imgaFR[15] = '';
    imga[16] = '../DATOS/LOVE/IMG-20180925-WA0012.jpeg';
    imgaFR[16] = '';
    imga[17] = '../DATOS/LOVE/IMG-20180925-WA0013.jpg46.jpeg';
    imgaFR[17] = '';
    imga[18] = '../DATOS/LOVE/IMG-20180928-WA0005.jpeg33.jpeg';
    imgaFR[18] = '28 Septiembre 2018 16:58 <br>';
    imga[19] = '../DATOS/LOVE/IMG-20181005-WA0022.jpg24.jpeg';
    imgaFR[19] = '5 Octubre 2018 20:45 <br>';
    imga[20] = '../DATOS/LOVE/IMG-20181006-WA0006.jpg23.jpeg';
    imgaFR[20] = '';
    imga[21] = '../DATOS/LOVE/IMG-20181006-WA0007.jpg22.jpeg';
    imgaFR[21] = '';
    imga[22] = '../DATOS/LOVE/IMG-20181008-WA0015.jpg11.jpeg';
    imgaFR[22] = '';
    imga[23] = '../DATOS/LOVE/IMG-20181008-WA0016.jpg10.jpeg';
    imgaFR[23] = '';
    imga[24] = '../DATOS/LOVE/IMG-20181008-WA0023.jpg9.jpeg';
    imgaFR[24] = '';
    imga[25] = '../DATOS/LOVE/Screenshot_20181005-180736.png25.png';
    imgaFR[25] = '5 Octubre 2018 18:08 <br>';

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