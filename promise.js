/*
async function promiseEg(){
    var prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("this is a promise example");
        }, 1000);
    })
    console.log(await prom);
}
promiseEg()
*/

// Location Finder using Promise

function isValidLocation(location,time){
    loc = "KPRCAS"
    acutalTime = 2000
    if ((loc === location) && (acutalTime <= time)){
        return true
    }
    else{
        return false
    }
}
function location(loc,time){
    return new Promise(function(locFound, locNotFound) {
        setTimeout(()=>{
            if(isValidLocation(loc,time)){
                locFound("Location Found")
            }
            else{
                locNotFound("Location Not Found")
            }
        },time)
    })
}

location("KPRCAS",2000).then((a)=>{
    console.log(a);
}).catch((b)=>{
    console.log(b)
})