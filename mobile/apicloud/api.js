(function(window){
    var u = {};
    var isAndroid = (/android/gi).test(navigator.appVersion);
    var uzStorage = function(){
	var ls = window.localStorage;
	if(isAndroid){
	    ls = os.localStorage();
	}
	return ls;
    };

    function parseArguments(url,data,fnSuc,dataType){
	if(typeof(data) == 'function'){
	    dataType = fnSuc;
	    fuSuc = data;
	    data = undefined;
	}
	if(typeof(fnSuc) != 'function') {
	    dataType = fnSuc;
	    fnSuc = undefined;
	}
	return {
	        url: url,
		data: data,
		fnSuc: fnSuc,
		dataType: dataType
	};
    }

    u.trim = function(str){
	if(String.prototype.trim){
	    return str == null ? "" : String.prototype.trim.call(str);
	}else{
	    return str.replace(/(^\s*$)|(\s*$)/g,"");
	}
    };
})(window);

