export function OrderCount({marketData}){
let MarketDataArray=marketData||[];
let newCount={},finalData=[];
        MarketDataArray.forEach((item,index)=>{
                if(!Object.keys(newCount).includes("x"+item.harga)){
                newCount["x"+item.harga]={
                    jumlah:0,
                    harga:0,
                    total:0
                };	
            }
            newCount["x"+item.harga]={
                jumlah:newCount["x"+item.harga].jumlah+item.jumlah,
                total:newCount["x"+item.harga].total+item.total,
                harga:item.harga,
                tipe:item.tipe
            };
        });
        for(let [key,value] of Object.entries(newCount)){
            finalData.push({key:value});
        }
 
    return finalData;
}