function ans(id){
    if(id=="two"){
   const e=document.getElementById(id);
    e.style.backgroundColor="green";
    // setTimeout(function(){
    //     window.location.reload();
    //   },500);
          }
    else{
       const e=document.getElementById(id);
    e.style.backgroundColor="red";
    setTimeout(function(){
  window.location.reload();
},200);
    }
    
}