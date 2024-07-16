const countDown = function(){
    const span = document.getElementById('timer');

    if (span.textContent >= 1){
        span.textContent --;
    } else if(span.textContent === '0'){
        clearInterval(timer);
        alert("Вы победили в конкурсе!")
    }
    
}

const timer = setInterval(countDown, 1000); 