var Controller = (function(){
	var interval;

	function start(){
		//Continuously call API
		interval = setInterval(function(){
			$.ajax({
				url: '/transactions'
			}).done( View.displayTransactions)}, 5000);
	}

	function clear(){
		clearInterval(interval);
	}

	function switchCurrencies(){

		$(this).attr("checked","false")
		View.switchCurrencies();
	}

	function bindEvents(){
		View.startPriceUpdate();
		$("#stop_api").on("click", clear);
		$("#myonoffswitch").on("click",switchCurrencies);

		//Load intial
		$.ajax({
			url:'/transactions'
			}).done( View.displayTransactions)
		start();

	}
	return{
		bindEvents: bindEvents
	}
})();

$(function() {
	Controller.bindEvents();
});
