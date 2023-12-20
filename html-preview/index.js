window.ImgCollapsed = "style/Collapsed.gif";
window.ImgExpanded = "style/Expanded.gif";

$(function() {
	function parseHtml() {
		try {
			let text =  $("#RawJson").val()
			$('#myframe').contents().find('html').html(text)
		} catch(e) {
			$('#myframe').contents().find('html').html(e.message)
		}
	}
	
	$("#RawJson").on("input", function() {
	  parseHtml()
	})
	
	$("#RawJson").on("input", function() {
		parseHtml()
	})
	
	$("#RawJson").on("parse", function() {
		parseHtml()
	})
	
	$("#RawJson").on("cut", function() {
		parseHtml()
	})
	
	$("#Example1").click(function() {
		var content = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>文档标题</title>
</head>
<body>
	<h1>我的第一个HTML页面</h1>
	<p>我的第一个段落。</p>
</body>
</html>
		`
		$("#RawJson").val(content)
		parseHtml()
	})
	
	$("#Example2").click(function() {
			var content = `<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <script src="/static/vendor/vue/vue@3.js"></script>
    <title>Element Plus demo</title>
  </head>
  <body>
    <div id="app">
      <el-button>{{ message }}</el-button>
    </div>
    <script>
      const App = {
        data() {
          return {
            message: "Hello Element Plus",
          };
        },
      };
      const app = Vue.createApp(App);
      app.use(ElementPlus);
      app.mount("#app");
    </script>
  </body>
</html>`
			$("#RawJson").val(content)
			parseHtml()
		})
})