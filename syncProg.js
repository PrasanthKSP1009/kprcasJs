 var syncfun1 = () => {
    setTimeout(function(){
        console.log("Takes 1 sec to Execute");
    },2000)
    
}
function syncfun2 (){
    syncfun1()
    setTimeout(() => {
        console.log("Takes 10 sec to Execute");
    },2000)
}
syncfun2()