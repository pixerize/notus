let overlay = document.getElementsByTagName("body")[0];
let sekunde = 2; //postavio sam timeout funkciju, jer se slider prebrzo load-a, pa da se moze lijepo vidjeti

window.addEventListener('load', function() {
    setTimeout(function() { overlay.classList.add("loaded"); }, sekunde * 1000);
});

// main menu

function openNav() {
    document.getElementById("main-menu").style.height = "100%";
}

function closeNav() {
    document.getElementById("main-menu").style.height = "0%";
}

function klikniMe() {
    alert('Jesam rekao ne klikaj? No dobro, zelim ti ugodan ostatak dana :D');
}