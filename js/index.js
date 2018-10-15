window.onload = function(){
    const socket = io();
    const $acercade = $('#about');

    socket.on('datosmili', data =>{
        $acercade.innerHTML = data;
    });
};
const incio = document.getElementById('inicio');
    const smile = document.getElementById('smile');
    const fun = document.getElementById('fun');
    const love = document.getElementById('love');
    
    incio.addEventListener('click',function(){
        location.assign("#")
    });
    smile.addEventListener('click',function(){
        location.assign("smile/");
    });
    fun.addEventListener('click',function(){
        location.assign("fun/");
    });
    love.addEventListener('click',function(){
        location.assign("love/");
    });