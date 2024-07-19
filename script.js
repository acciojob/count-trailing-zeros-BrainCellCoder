function trailingZeros(n) {
  //your JS code here. If required.
	const zeros = [];
	const nArray = n.split("");

	if(nArray.length == 1) return 0;
	
	for(let i=nArray.length-1;i>=0;i--){
		if(nArray[i] == 0){
			zeros.push(nArray[i])
		}
		else return zeros.length;
	}
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
