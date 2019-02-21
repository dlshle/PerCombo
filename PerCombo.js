function getPermutation(str){
	let chrList = [];
	let result = [];
	for(let i=0;i<str.length;i++)
		chrList.push(str.charAt(i));
	rPerm(chrList, 0, result);
	return result;
}

function rPerm(chrList, index, resultList){
	if(index==chrList.length){
		resultList.push(stringify(chrList));
		return ;
	}
	for(let i=index;i<chrList.length;i++){
		swap(chrList, index, i);
		rPerm(chrList, index+1, resultList);
		swap(chrList, i, index);
	}
}

function swap(chrList, i, j){
	let temp = chrList[i];
	chrList[i] = chrList[j];
	chrList[j] = temp;
}

function stringify(chrList){
	let result = "";
	for(let i=0;i<chrList.length;i++){
		result+=chrList[i];	
	}
	return result;
}

function rPerm1(pre, suf, resultList){
	if(suf.length==0){
		resultList.push(pre);
		return ;
	}
	for(let i=0;i<suf.length;i++){
		rPerm1(pre+suf.charAt(i), suf.substring(0,i)+suf.substring(i+1,suf.length), resultList);
	}
}

function combo(str){
	let result = [];
	rCombo(str, 0, result);
	return result;
}

function rCombo(str, index, result){
	if(index==str.length)
		return ;
	let len = result.length;
	result.push(str.charAt(index));
	for(let i=0;i<len;i++){
		result.push(result[i]+str.charAt(index));
	}
	rCombo(str,index+1,result);
}
