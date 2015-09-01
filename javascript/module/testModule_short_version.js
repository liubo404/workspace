var Basket = (function(){
	//private method
	function log() {
	    console.log('This is private method');
	    console.log(obj.name);
	}

	return {
	    name: 'Basket of customer short version ',
	    list: {},
	    info: function(){
		log();
	    },
	    hello: function(){
		console.log('....world');
	    }
	}
})();