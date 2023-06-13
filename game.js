let box = document.querySelectorAll(".box")
let points = document.querySelector("span")
let over = document.querySelector("#over")

let values = [];
        for(let j = 0 ; j < 10 ; j++){
            let RandomNumber = Math.floor(Math.random() * 81);
            values.push(RandomNumber)
            // console.log(values)
        }
let BoxId = " ";
for(let i = 0 ; i < box.length ; i++){
    box[i].addEventListener("click", function(){
        let num = Number(box[i].id) 


        if (values.includes(num) ){
            for (let k = 0 ; k<=10 ; k++){
                box[values[k] - 1 ].style.background = "red"
                
                over.innerHTML = "KTHM TATA BYE BYE GYA"

            }
            // box[i].style.background = "red"
        }
        else if (BoxId === box[i].id){
            points.innerHTML = parseInt(points.innerHTML)
        }
        else{
            box[i].style.background = "green" ;
            points.innerHTML = parseInt(points.innerHTML)+1;
            BoxId = box[i].id
        }
    })
}

let btn = document.querySelector("#btn")
btn.addEventListener("click", function(){
    location.reload();
})

// console.log(values);

