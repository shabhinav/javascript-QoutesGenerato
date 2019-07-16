const qoutes=[
    {
        name:'Buddha',
        qoute:'All that we are is the result of what we have thought.'
    },
    {
        name:'Albert Einstein',
        qoute:'I have no special talent. I am only passionately curious.'
    },
    {
        name:'Mother Teresa',
        qoute:'If you judge people, you have no time to love them.'
    },
    {
        name:'Steve Jobs',
        qoute:'Stay hungry, stay foolish.'
    },
    {
        name:'Mahatama Gandhi',
        qoute:'The weak can never forgive. Forgiveness is the attribute of the strong. '
    }
]

const changeborder=["Dotted","Solid","Dashed","double"];

const hexNumber=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const color=["red","green","black","aqua","brown","yellow","orange"]

const qouteBtn= document.querySelector("#qoutebtn");
const qouteAuthor=document.querySelector("#qouteAuthor");
const qoute=document.querySelector("#qoute");
const border=document.querySelector('.container');
const bgcolor=document.querySelector('body');

qouteBtn.addEventListener('click',displayQoute);

function displayQoute(){
    let number=Math.floor(Math.random()*qoutes.length);
    qouteAuthor.innerHTML=qoutes[number].name;
    qoute.innerHTML=qoutes[number].qoute;
}

function borderChange(){
    let num=Math.floor(Math.random()*changeborder.length)
    border.style.border=changeborder[num];
    border.style.borderWidth="thick";
}

qouteBtn.addEventListener('click',borderChange);


function backgroundcolorchange(){
        let hexcol ='#';
        for(let i=0;i<6;i++){
            let random= Math.floor(Math.random()*hexNumber.length);
            hexcol+=hexNumber[random];
        }
        bgcolor.style.backgroundColor=hexcol;
}

qouteBtn.addEventListener('click',backgroundcolorchange);

function bordercolor(){
    let number=Math.floor(Math.random()*color.length);
    border.style.borderColor=color[number];
}

qouteBtn.addEventListener('click',bordercolor);