var post = async() =>{
    var postResult = new Promise((posting) => {
        setTimeout(()=>{
            posting("This is my 1st post through Promise")
        },1000)
    })
    var [posRes,likRes] = await Promise.all([postResult,likeCode()])
    console.log(posRes);
    console.log(likRes);
}
async function likeCode() {
    return new Promise((likingPost)=>{
        likingPost("I have liked the post created through Promise")
    })
}
post()
