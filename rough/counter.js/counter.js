let count=0;

document.getElementById("inc").onclick= function(){
        ++count
        document.getElementById("count").innerHTML=count;
    }
    document.getElementById("dec").onclick= function(){
        --count
        document.getElementById("count").innerHTML=count;
    }
    
    document.getElementById("res").onclick= function(){
        count=0
        document.getElementById("count").innerHTML=count;
    }
    document.getElementById("h-i").onclick= function(){
        count+=10
        document.getElementById("count").innerHTML=count;
    }
    document.getElementById("l-i").onclick= function(){
        count-=10
        document.getElementById("count").innerHTML=count;
    }