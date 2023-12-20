
$(function() {
	init()
	function init() {
		let content = ""
		menu.forEach((item, index) => {
			content += `
				<div class="item" href="${item.href}" name="${item.name}" style="display: none;">
					<img src="${item.logo}" />
					<div class="title">${item.title}</div>
				</div>`;
			
			chrome.storage.sync.get(item.name, function(res) {
				if(res[item.name]) {
					$(`[name=${item.name}]`).show()
				} else {
					$(`[name=${item.name}]`).hide()
				}
				
				if(item.name == "json-format" && res[item.name] == undefined) {
					$("[name=" + item.name + "]").show()
				}
			})
			
			$("#tools").html(content)
		})
	}
	
	$(".item").click(function() {
		const href = $(this).attr("href")
		if(href) {
			window.open(href)
		}
	})
	
	$(".item-row").click(function() {
		const href = $(this).attr("href")
		if(href) {
			window.open(href)
		}
	})
})