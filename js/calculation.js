document.getElementById("blogBtn").addEventListener ('click',function(){
    window.location.replace("http://127.0.0.1:5500/blog.html");
} )


// document.getElementById("triB").addEventListener("click",function(){
//     getValue("triB");
// })

// document.getElementById("triClc").addEventListener('click',function(){
//     calculateValue("triClc");
// })

const clcBtn = document.getElementsByClassName("calcuateResult");
for(const clc of clcBtn){
    clc.addEventListener('click',function( event){
        let id;
            id = event.target.id;
       console.log(id);
    const result = calculateValue(id);
        console.log("lol")
       const restultContainer = document.getElementById("results");
        const li = document.createElement('li');
        li.innerText= result.toFixed(2);
        li.classList.add("result");
        restultContainer.appendChild(li);
    })
}


