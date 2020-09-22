export function SaldoPercent(params){
	const percents=[25,50,75,100];
	let {saldo,pilih}=params;
	saldo=saldo||0;
	if(saldo>=0){
		let hasil=percents[pilih]/100*saldo;
		return {kurang:hasil,percent:percents[pilih]};
	}else{
		return null;
	}
    /*
        return {saldo:saldo,sisa:Number(saldo)-Number(hasil),kurang:hasil,percent:percents[pilih]};
        SaldoPercent({saldo:40000000,pilih:0});
    */
}
