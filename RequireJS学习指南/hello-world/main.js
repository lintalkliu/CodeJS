require.config({
    baseUrl:'/',
    paths:{
        "a":"lib/a",
        "b":"lib/b",
        "c":"others/c"
    }
});
require(['a','b','c'],function(a,b,c){
        	console.log("abc");
		    a.hello();
		    b.hello();
		    c.hello();
		});