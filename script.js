const items = document.querySelector('#items');
const msg = document.querySelector('#msg');
const userlist = document.querySelector('#users');
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(items.value==="")
    {
        msg.classList.add('error');
        msg.innerHTML='Enter the items';
        setTimeout(()=> msg.innerHTML="",1000)
    }
    else{
       
        const li = document.createElement('li');
        const data = document.createTextNode(items.value);
        li.appendChild(data);
        userlist.appendChild(li);
        items.value = "";

        const span = document.createElement("SPAN");
        const txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        const close= document.getElementsByClassName('close');
        for (i = 0; i < close.length; i++) {
            
            close[i].onclick = function() {
                console.log(i);
              let div = this.parentElement;
              div.style.display = "none";
            }
          }
    }
    
});

