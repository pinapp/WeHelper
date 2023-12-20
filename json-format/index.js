
$(function() {
	$(".layout .item").click(function() {
		$(".layout .item").removeClass("item-active")
		$(this).addClass("item-active")
	})
	
	$("#Process").click(function() {
		Process()
	})
	
	$("#TabSize").change(function() {
		TabSizeChanged()
	})
	
	$("#QuoteKeys").click(function() {
		QuoteKeysClicked()
	})
	
	$("#SelectAllClicked").click(function() {
		SelectAllClicked()
	})
	
	$("#CollapsibleView").click(function() {
		CollapsibleViewClicked()
	})
	
	$("#ExpandAllClicked").click(function() {
		ExpandAllClicked()
	})
	
	$("#CollapseAllClicked").click(function() {
		CollapseAllClicked()
	})
	
	$(".CollapseLevel").click(function() {
		const level = $(this).attr("level")
		CollapseLevel(level)
	})
	
	$("#extJsonDemo").click(function() {
		const json = `{"BigIntSupported":995815895020119788889,"date":"20180322","message":"Success !","status":200,"city":"北京","count":632,"data":{"shidu":"34%","pm25":73,"pm10":91,"quality":"良","wendu":"5","ganmao":"极少数敏感人群应减少户外活动","yesterday":{"date":"21日星期三","sunrise":"06:19","high":"高温 11.0℃","low":"低温 1.0℃","sunset":"18:26","aqi":85,"fx":"南风","fl":"<3级","type":"多云","notice":"阴晴之间，谨防紫外线侵扰"},"forecast":[{"date":"22日星期四","sunrise":"06:17","high":"高温 17.0℃","low":"低温 1.0℃","sunset":"18:27","aqi":98,"fx":"西南风","fl":"<3级","type":"晴","notice":"愿你拥有比阳光明媚的心情"},{"date":"23日星期五","sunrise":"06:16","high":"高温 18.0℃","low":"低温 5.0℃","sunset":"18:28","aqi":118,"fx":"无持续风向","fl":"<3级","type":"多云","notice":"阴晴之间，谨防紫外线侵扰"},{"date":"24日星期六","sunrise":"06:14","high":"高温 21.0℃","low":"低温 7.0℃","sunset":"18:29","aqi":52,"fx":"西南风","fl":"<3级","type":"晴","notice":"愿你拥有比阳光明媚的心情"},{"date":"25日星期日","sunrise":"06:13","high":"高温 22.0℃","low":"低温 7.0℃","sunset":"18:30","aqi":71,"fx":"西南风","fl":"<3级","type":"晴","notice":"愿你拥有比阳光明媚的心情"},{"date":"26日星期一","sunrise":"06:11","high":"高温 21.0℃","low":"低温 8.0℃","sunset":"18:31","aqi":97,"fx":"西南风","fl":"<3级","type":"多云","notice":"阴晴之间，谨防紫外线侵扰"}]}}`
		$("#RawJson").val(json)
		Process()
	})
})