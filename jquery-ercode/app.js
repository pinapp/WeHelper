$(function() {
	// 解析
	var newfile = document.getElementById('newfile');
	var getObjectURL = function (file) {
		var url = null;
		if (window.createObjectURL != undefined) { // basic
		  url = window.createObjectURL(file);
		} else if (window.URL != undefined) { // mozilla(firefox)
		url = window.URL.createObjectURL(file);
		} else if (window.webkitURL != undefined) { // webkit or chrome
		  url = window.webkitURL.createObjectURL(file);
		}
		return url;
	}


	newfile.onchange = function () {
	  // 显示图片
	  var reads = new FileReader();
	  f = document.getElementById('newfile').files[0];
	  reads.readAsDataURL(f);
	  reads.onload = function(e) {
	  document.getElementById('img').src = this.result;
	  $("#img").css("display", "block");
	  };
		//   console.log(newfile[0]);
		console.log(getObjectURL(this.files[0]));// newfile[0]是通过input file上传的二维码图片文件
		qrcode.decode(getObjectURL(this.files[0]));
		qrcode.callback = function (imgMsg) {
			// 获取地址传给span
			var divA = document.getElementById("spantitle");
			divA.innerHTML = divA.innerHTML+ imgMsg;
		}
	}
})