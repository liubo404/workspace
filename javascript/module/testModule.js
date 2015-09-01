var Basket = (function(){
	//module main object
	var obj = {
	    name: 'Basket of customer',
	    list: {},
	    add: function(){
		console.log('add of a new item');
	    },
	    remove: function(){
		console.log('removing of date item');
	    }
	};
	
	//public method
	obj.info = function(){
	    log();
	}
	
	//private method
	function log(){
	    console.log('This is private method');
	    console.log(obj.name)
	}
	
	//return object
	return obj;
})();

Basket.add();
console.log(Basket.name);
Basket.list.potato = {
    weight : 2,
    sum : 1.25
}