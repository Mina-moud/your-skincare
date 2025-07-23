let name;

const Enter=document.querySelector("#entername");
const Continue=document.querySelector("#Continue");
Enter.onclick=nameChange;
Continue.onclick= third;

function nameChange(event){
 event.preventDefault(); 
  const input = document.querySelector("#username");
  name = input.value;
  document.querySelector(".first").style.display = "none";
  document.querySelector(".second").style.display="block";
  console.log("welcome",name)
  document.querySelector("#nameDisplay").textContent=name;
}



function third(){
document.querySelector(".second").style.display="none";
document.querySelector("#welcoming").style.display="none";
document.querySelector(".third").style.display="block";
}

const chose=document.querySelector("#chose");
chose.onclick=choosed;

function choosed(event){
event.preventDefault();//to not refresh after clicking
const selected=document.querySelector('input[name="skin-type"]:checked');
if(!selected){
    alert("please chose a skin type");
    return;
}
console.log("the chice is", selected.value);


const type = selected.value;
    if(type==="normal skin"){
        document.querySelector(".third").style.display="none";
        document.querySelector(".normalSkin").style.display="block";
}else 
    if(type==="oily skin"){
        document.querySelector(".third").style.display="none";
        document.querySelector(".oilySkin").style.display="block";
}else 
    if(type==="dry skin"){
        document.querySelector(".third").style.display="none";
        document.querySelector(".drySkin").style.display="block";
}else
    if(type==="combination skin"){
        document.querySelector(".third").style.display="none";
        document.querySelector(".combinationSkin").style.display="block";
}else
    if(type==="sensitive skin"){
        document.querySelector(".third").style.display="none";
        document.querySelector(".sensitiveSkin").style.display="block";
}else
    if(type==="do a skin type test🌸"){
        document.querySelector(".third").style.display="none";
        document.querySelector(".fourth").style.display="block";
}
}

const checkB=document.querySelector("#checkB");
checkB.onclick=checkStyle;

function checkStyle(event){
event.preventDefault();


const results=[
document.querySelector('input[name="feeling after cleansing"]:checked'), 
document.querySelector('input[name="pores"]:checked'),
document.querySelector('input[name="pimples"]:checked'),
document.querySelector('input[name="skin care products react"]:checked'),
document.querySelector('input[name="middle of day"]:checked'),
document.querySelector('input[name="weather reaction"]:checked'),
];

let counts={
normalSkin:0,
oilySkin:0,
drySkin:0,
combinationSkin:0,
sensitiveSkin:0,
}

for( const result of results) {
if (result && counts.hasOwnProperty(result.value)){
    counts[result.value]++;
}
}

let type="";
let max=0;
for(const Ty in counts){
if(counts[Ty]>max){
    max=counts[Ty];
    type=Ty;
}
}
if(max===0){
alert("please answer the questions");
}else{
console.log("type is:",type);
document.querySelector(".fourth").style.display="none";
document.querySelector("."+type).style.display="block";
}
}






