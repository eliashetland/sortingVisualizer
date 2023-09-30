import geID from "../util/HtmlHelper";



const barDiv: HTMLDivElement = geID<HTMLDivElement>("bars");
const createArrBtn: HTMLButtonElement = geID<HTMLButtonElement>("createArray");
const startBtn: HTMLButtonElement = geID<HTMLButtonElement>("start");
const arrSize:number = 30;
const delay = 50;
let arr:number[] = createArray(arrSize);

createArrBtn.onclick = ()=>arr = createArray(arrSize);
startBtn.onclick = ()=>bubblesort(arr);


function createArray(size:number){
    let arr:number[] = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random()*100));
    }
    createBars(arr);
    return arr;
}

function createBars(arr:number[], currentBar1?:number, currentBar2?:number){
    barDiv.innerHTML = "";
    const width:number = 100/arr.length;

    for (let i = 0; i < arr.length; i++) {
        const bar = document.createElement("div");
        if (i == currentBar1 || i == currentBar2 ) {
            bar.classList.add("redbar");
        }else{
            bar.classList.add("bar");
        }

        bar.style.height = `${arr[i]}%`;
        bar.style.width = `${width}%`
        barDiv.appendChild(bar);   
    }
    

}


async function bubblesort(arr:number[]){
    let l:number = arr.length;
    let swapped:boolean = true;
    while (swapped) {
        swapped = false;
        for (let i = 1; i < l; i++) {
            await sleep(delay);
            createBars(arr, i-1, i);
            if (arr[i-1]>arr[i]) {
                await swap(arr, i-1, i);
                swapped = true;
                
            }
        }
        l = l-1;
    }
    createBars(arr);
}

async function swap(arr:number[], x1:number, x2:number){
    const temp = arr[x2];
    arr[x2] = arr[x1];
    arr[x1] = temp;
    
}

function sleep(ms:number){
    return new Promise<void>(resolve=> setTimeout(resolve, ms));
}