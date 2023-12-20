$(function() {
	const html = document.body.childNodes[0].innerHTML
	
	function isJSON(str) {
		try {
			  if (/^[\],:{}\s]*$/.test(str.replace(/\\["\\\/bfnrtu]/g, '@').
				replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
				replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
				return true;
			  } else {
				return false;
			  }
		} catch {
			return false;
		}
	}
	
	// 说明是json字符串
	if(isJSON(html)) {
		const obj = JSON.parse(html)
		
		window.IsCollapsible = true  // 显示控制
		window.TAB = "    "
		window.ImgExpanded = true
		window.SINGLE_TAB = "  ";
		window.ImgCollapsed = "https://webhelper.oss-cn-hangzhou.aliyuncs.com/Collapsed.gif";
		window.ImgExpanded = "https://webhelper.oss-cn-hangzhou.aliyuncs.com/Expanded.gif";
		
		const content = ProcessObject(obj, 0, false, false, false);
		document.body.childNodes[0].innerHTML = content
		
		var script =  document.createElement("script")
		const appjs = `
		window.ImgCollapsed = "https://webhelper.oss-cn-hangzhou.aliyuncs.com/Collapsed.gif";
		window.ImgExpanded = "https://webhelper.oss-cn-hangzhou.aliyuncs.com/Expanded.gif";
		
		function ExpImgClicked(img){
		  var container = img.parentNode.nextSibling;
		  if(!container) return;
		  var disp = "none";
		  var src = window.ImgCollapsed;
		  if(container.style.display == "none"){
		      disp = "inline";
		      src = window.ImgExpanded;
		  }
		
		  container.style.display = disp;
		  img.src = src;
		}
		`
		script.innerHTML = appjs
		document.body.appendChild(script)
	}
})