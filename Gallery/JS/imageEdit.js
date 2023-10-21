//Gallary Images code
var allImg=document.images;
function allImgTags(){
    for(i=0;i<=allImg.length;i++){
        allImg[i].src=`../asset/images/${i}.jpg`
        allImg[i].style.width="200px"
        allImg[i].style.height="180px"
        allImg[i].addEventListener("click",function(){
            document.getElementById("bigImage").style.display="flex"
        })
    }
}
allImgTags()

varglobalsrc;

function passSrc(ur10fimg){

document.getElementById("bigimg").style.backgroundImage=`url(${ur10fimg})`
globalSrc=ur10fimg;
}
//closewindow

function closewindow(){
    document.getElementById("bigImage").style.display="none";

    document.getElementById("galleryImageEdit").style.display="none"
}
function openEditWindow(){
    document.getElementById("galleryImageEdit").style.display="flex"
    document.getElementById("image").style.backgroundImage=`url(${globalSrc})`
}
//image edit code
function imageEdit() {
    var blurValue = document.getElementById("blur").value;
    var brightnessValue = document.getElementById("brightness").value;
    var contrastValue = document.getElementById("constrast").value;
    var grayscaleValue = document.getElementById("grayscale").value;
    var hueValue = document.getElementById("hue").value;
    var invertValue = document.getElementById("invert").value;
    var opacityValue = document.getElementById("opacity").value;
    var saturateValue = document.getElementById("saturate").value;
    var sepiaValue = document.getElementById("sepia").value;
    console.log(blurValue, brightnessValue, contrastValue, grayscaleValue, hueValue, invertValue, opacityValue, saturateValue, sepiaValue);
    document.getElementById("image").style.filter = `blur(${blurValue}px) brightness(${brightnessValue}%) hue-rotate(${hueValue}deg) invert($(invertValue)%) opacityValue(${opacityValue}%) saturate(${saturateValue}%) 
     sepia(${sepiaValue}%)`;

    var rotateX = document.getElementById("rotateX").value;
    var rotateY = document.getElementById("rotateY").value;
    var rotateZ = document.getElementById("rotateZ").value;
    var scalex = document.getElementById("scalex").value
    var scaley = document.getElementById("scaley").value;
    var skewx = document.getElementById("skewx").value;
    var skewY = document.getElementById("skewy").value;
    var translateX = document.getElementById("translatex").value;
    var translateY = document.getElementById("translateY").value;
    document.getElementById("image").style.transform = `rotate($(rotatez)deg)
     rotateX(${rotateX}deg) rotateY(${rotatey}deg) scaleX(${scalex}) scaleY(${scaleY}) skewx(${skewx}deg) skewy({skewY}deg)
     translateX(${translateX}px) translateY(${translateY}px)`;
    }
