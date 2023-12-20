$(function() {
	init()
	
	function init() {
		let content = ""
		menu.forEach((item, index) => {
			content += `
			<div class="item " href="${item.href}">
				<div class="left">
					<img src="${item.logo}" />
					<div class="title">${item.title}</div>
				</div>
				<div class="right">
					<button class="install" name="${item.name}" style="display: none;">安装</button>
					<button class="uninstall" name="${item.name}" style="display: none;">卸载</button>
				</div>
			</div>`
		})
		
		$(".list").html(content)
		
		menu.forEach((item, index) => {
			chrome.storage.sync.get(item.name, function(res) {
				if(res[item.name]) {
					$(`[name=${item.name}]`).eq(0).hide()
					$(`[name=${item.name}]`).eq(1).show()
				} else {
					$(`[name=${item.name}]`).eq(0).show()
					$(`[name=${item.name}]`).eq(1).hide()
				}
			})
		})
	}
	
	$(".install").on("click", function() {
		let name = $(this).attr("name")
		var obj = {}
		obj[name] = true
		
		chrome.storage.sync.set(obj)
		
		window.location.reload()
	})
	
	$(".uninstall").on("click", function() {
		let name = $(this).attr("name")
		var obj = {}
		obj[name] = false
		
		chrome.storage.sync.set(obj)
		window.location.reload()
	})
})