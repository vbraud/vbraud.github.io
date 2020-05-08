var image_portfolio = ['portfolio/FINI/ALL N.png','portfolio/FINI/paix.png', 'portfolio/FINI/DF.png', 'portfolio/FINI/Future noir.png', 'portfolio/FINI/mort 2.png', 'portfolio/FINI/RAY 2.png', 'portfolio/FINI/MAXOU N.png', 'portfolio/FINI/SAMOURAIL.png', 'portfolio/FINI/Fin du Monde.png', 'portfolio/FINI/BAT.png', 'portfolio/FINI/ONE PLUS MAN.png', 'portfolio/FINI/Bonne mort.png', 'portfolio/FINI/PARTIT EN COUILLE.png'];

let i = 0;

function gauche(){
    if(i != 0){
        i--;
        document.getElementById("img").src = image_portfolio[i];
    }
}

function droite(){
    if(i < image_portfolio.length - 1){
        i++;
        document.getElementById("img").src = image_portfolio[i];
    }
}



var image_portfolioJ = [];

let y = 0;

function gaucheJ(){
    if(y != 0){
        y--;
        document.getElementById("imgJ").src = image_portfolioJ[y];
    }
}

function droiteJ(){
    if(y < image_portfolioJ.length - 1){
        y++;
        document.getElementById("imgJ").src = image_portfolioJ[y];
    }
}



