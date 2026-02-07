function stringChop(str, size) {
// your code here
	if(str===null) return [];
	let arr=[];
	let i=0;
	while(i+size<str.length)
		{
let result=str.slice(i,i+size);
		arr.push(result);
			i=i+size;
		}
	if(i<str.length){
	arr.push(str.slice(i));}
	return arr;}
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
	alert(stringChop(str, size));
