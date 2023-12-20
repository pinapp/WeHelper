$(function() {
	var qrcode = new QRCode("qrcode");
	// 生成二维码的方法
	function makeCode () {     
	    // 二维码地址 
	    var Url = document.getElementById("text");
	    if (!Url.value) {
	        alert("请输入生成二维码的地址");
	        Url.focus();
	        return;
	    }
	    qrcode.makeCode(Url.value);
	}
	makeCode();
	// 点击生成二维码
	$("#button").
	on("click", function () {
	    makeCode();
	})
})