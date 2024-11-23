const image01src = "img/maya_skill.jpg";
const image02src = "img/blender_skill.png";
const image03src = "img/maya_skill2.png";

function nextImage() {
  const header = document.getElementById("top");
  const currentImageSrc = header.style.backgroundImage;
  
  if (currentImageSrc == `url("${image01src}")`) {
    header.style.backgroundImage = `url("${image02src}")`; 
  }else if (currentImageSrc == `url("${image02src}")`) {
    header.style.backgroundImage = `url("${image03src}")`; 
  }else {
    header.style.backgroundImage = `url("${image01src}")`; 
  }
}

function prevImage() {
  const header = document.getElementById("top");
  const currentImageSrc = header.style.backgroundImage;

  if (currentImageSrc == `url("${image01src}")`) {
    header.style.backgroundImage = `url("${image03src}")`; 
  }else if (currentImageSrc == `url("${image02src}")`) {
    header.style.backgroundImage = `url("${image01src}")`; 
  }else {
    header.style.backgroundImage = `url("${image02src}")`; 
  }
}

document.getElementById("top").style.backgroundImage = `url("${image01src})`;
document.getElementById("sc-to-left").addEventListener("click", prevImage);
document.getElementById("sc-to-right").addEventListener("click", nextImage);
setInterval(nextImage, 4000);