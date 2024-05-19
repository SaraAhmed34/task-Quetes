var quoteInput=document.getElementById('quote');
var authorInput=document.getElementById('author');

var quets=[
    quot={
        q:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        auther: "― Marilyn Monroe"
    },
 quot={
        q:"“So many books, so little time.”",
        auther: "― Marilyn Monroe"
    },
      quot={
        q:"“A room without books is like a body without a soul.”",
        auther: "― Marilyn Monroe"
    }
]

localStorage.setItem("quete", JSON.stringify(quets));
var storedQuets = JSON.parse(localStorage.getItem("quete"));
if(storedQuets !=null){
    quets=storedQuets;
}

display();
function addQuote(){
   var quote={
        q: quoteInput.value,
        auther: authorInput.value
    }
     
        quets.push(quote);
        clear();
        display();
        localStorage.setItem("quete", JSON.stringify(quets));
    
  
    console.log(quets);
    
}

function clear(){
    quoteInput.value=null;
    authorInput.value=null;
}

function display(){
    var x='';
    for(var i=0;i<quets.length;i++){
        x+=`
        <tr>
        <th scope="row">${i}</th>
        
        <td>${quets[i].auther}</td>
        <td>${quets[i].q}</td>
        <td><button type="button" class="btn btn-outline-danger me-5" onclick="deleteQuote ( ${i})">Delete</button>
        </td>
        
        
      </tr>`
    }

    document.getElementById("content").innerHTML =x;
}


function deleteQuote ( index){
        quets.splice(index,1);
        localStorage.setItem("quete", JSON.stringify(quets));
        display();
}









var lastRandom = -1;

function Quote(){
    var random;
    
    do {
        random = Math.floor(Math.random() * quets.length);
    } while (random === lastRandom); 
    
    lastRandom = random;
    
    console.log(random);
   
        document.getElementById("quote").innerHTML = quets[random].q;
        document.getElementById("author").innerHTML = quets[random].auther;
   
      
   
}

