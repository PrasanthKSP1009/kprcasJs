class KPRCAS{
    constructor(){
        this.a = 10
    }
    name1 = () => {
        console.log("Arrow Function and constructor variable is a and value is", this.a);
    }
}
obj = new KPRCAS()
obj.name1()