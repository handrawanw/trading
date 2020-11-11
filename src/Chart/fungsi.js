export function RandomTrade() {
    let data=[];
    while(data.length<=100){
        data.push({
            x:new Date(Math.ceil(Math.random()*Math.pow(10,14))),
            y:[Math.ceil(Math.random()*100000),Math.ceil(Math.random()*100000),Math.ceil(Math.random()*100000),Math.ceil(Math.random()*100000)]
        })
    }
    return data;
}