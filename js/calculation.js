document.getElementById("blogBtn").addEventListener ('click',function(){
    window.location.replace("http://127.0.0.1:5500/blog.html");
} )


document.getElementById("triB").addEventListener("click",function(){
    getValue("triB");
})

// document.getElementById("triClc").addEventListener('click',function(){
//     calculateValue("triClc");
// })

const clcBtn = document.getElementsByClassName("calcuateResult");
for(const clc of clcBtn){
    clc.addEventListener('click',function( event){
            let id;
        document.querySelectorAll('h2').forEach(e => {
            id = e.getAttribute('id');
            e.addEventListener('click', function() {
              console.log('A button with ID ' + id + ' was clicked!') 
            } );
          });

    const result = calculateValue(id);
        console.log("lol")
       const restultContainer = document.getElementById("results");
        const li = document.createElement('li');
        li.innerText= result;
        li.classList.add("result");
        restultContainer.appendChild(li);
    })
}


