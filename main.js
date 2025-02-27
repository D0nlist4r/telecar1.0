
//funcion para darle movimiento al slider 
    let index = 0;
        function moveSlider() {

            index = (index + 1) % 2;
            document.getElementById('slider').style.transform = `translateX(-${index * 100}%)`;
        }
        setInterval(moveSlider, 5000);

        let indexo = 0;

        function moveSlidernav() {

            indexo = (indexo + 1) % 2;
            document.getElementById('sliders').style.transform = `translateX(-${indexo * 100}%)`;
        }
        setInterval(moveSlidernav, 5000);

// Funciones para interactuar con el menu Mobile
function closetMenuMobile(){
    let boton = document.getElementById("nav_pc");
    boton.style.display = "none";
}
function openMenuMobile(){
    let boton = document.getElementById("nav_pc");
    boton.style.display = "flex";
}