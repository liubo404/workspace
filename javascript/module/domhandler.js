var Basket = (function(){
	var obj = {
	    handler:{
		add: "#new-item",
		remove:'.removeItem'
	    }
	}

	$('body').click(function(e){
		e = $(e.target);
		$.eash(set.hander, function(k,v){
			if(e.is(v)){
			    set[k](e);
			}
		    });
	    });
	
	return  obj;
})();