let flag=0;
slide(flag);
// slide(3);
function controller(x){
    flag = flag+x;
    slide(flag);
}

function slide(num){
    let slide = document.getElementsByClassName("slide");
    for(let y of slide){
        y.style.display = "none";
    }
    console.log(slide);
    if(num==slide.length){
        flag = 0;
        num = 0;
    }
    if(num<0){
        num=slide.length-1;
        flag=slide.length-1;
    }
    slide[num].style.display = "block";
}






