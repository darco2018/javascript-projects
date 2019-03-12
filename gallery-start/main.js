var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for(let i = 1; i < 6; i++){
    let imageSrc = "images/pic" + i + ".jpg"
    var newImage = document.createElement('img');
    newImage.setAttribute('src', imageSrc);
    thumbBar.appendChild(newImage);
}

/* 2 different ways of adding an event handler */

thumbBar.addEventListener("click", function(evt){    
    changeDarkeningLevel(0.0); // remove the darkening effect        
    displayImage(evt.target.getAttribute("src"));    
}) 

 //Wiring up the Darken/Lighten button 


btn.onclick = function(){
    
    let status = btn.getAttribute('class');
       
    if (status === "dark"){
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        changeDarkeningLevel(0.3);
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        changeDarkeningLevel(0.0);
    }    
}


function displayImage(imgSrc){
    displayedImage.setAttribute("src", imgSrc);
}

function changeDarkeningLevel(opacity){
    let rgba = "rgba(0,0,0," + opacity + ")";
     overlay.style.backgroundColor=rgba;
}



    
 

