/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var compare = function(a,b) {
    return (a > b) ? 1 : (a < b) ? -1 : 0;
}
Array.prototype.equals = function(arr) {
	//console.log(`Equals exed.`);
	if(!arr) {
		return false;
	}

	if('[object Array]' !== Object.prototype.toString.call(arr)) {
		console.log(`The param in is not correct.`);
		return false;
	}

	if(arr.length !== this.length) {
		return false;
	}
	
	this.sort(compare);
	arr.sort(compare);

	for(let i = 0 ; i < this.length; i++) {
		if(this[i] !== arr[i]) {
			return false;
		}
	}

	return true;
}
Array.prototype.pushWithoutSame = function(arr) {
	let sameFlag = true;

	if('[object Array]' !== Object.prototype.toString.call(arr)) {
		console.log(`The param in is not correct.`);
		return;
	}

	if(0 === this.length) {
		this.push(arr);
		return;
	}

	for (let i = 0; i < this.length; i++) {
		//console.log('This is '+this[i]);
		if(this[i].equals(arr)) {			
			sameFlag = false;
			break;
		}
	}

	if(sameFlag) {
		this.push(arr);
	}
}

var threeSum = function(nums) {
	let tmp = 0;
	let result = [];
	let tmpIndex = [];
	let index = 0;
	if(nums.length < 3) {
	    return result;
	}
    for (let i = 0;nums.length > 2;) {
    	tmpIndex = [];
    	for(let j = 1; j < nums.length; j++) {
    		if(-1 !== tmpIndex.indexOf(nums[j])) {
    			continue;
    		}
    		tmp = nums[i] + nums[j] - 2*(nums[i] + nums[j]);
    		tmpIndex.push(tmp);
    		index = nums.slice(j + 1).indexOf(tmp);
    		if(-1 !== index) {
    			result.pushWithoutSame([nums[i],nums[j],tmp]);
    		}
    	}
    	nums.splice(0,1);
    }
    return result;
};
