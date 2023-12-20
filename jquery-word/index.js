$(function() {
	$("#exampleDemo").change(function() {
		const xml = $(this).val()
		
		$("#wordText").val("")
		loadData(xml)
	})
	
	let second = 0 
	let hour = 0
	let minute = 0
	let _second = 0
	
	startInterval()
	
	function startInterval() {
		window._interval = setInterval(function() {
			second++
			
			minute = parseInt(second / 60)
			hour = parseInt(second / 60 / 60)
			_second = second % 60
			
			$(".hour").text(hour < 10 ? "0" + hour : hour);
			$(".minute").text(minute < 10 ? "0" + minute : minute);
			$(".second").text(_second < 10 ? "0" + _second : _second);
		}, 1000)
	}
	
	$(".tools-item").on("click", function() {
		if($(this).hasClass("stopTools")) {
			clearInterval(window._interval)
			$(this).removeClass("stopTools").addClass("startTools")
			$(this).text("开始")
			$("#wordInput").blur()
		} else {
			startInterval()
			$(this).removeClass("startTools").addClass("stopTools")
			$(this).text("暂停")
			$("#wordInput").focus()
		}
	})
	
	$(".reloadTools").click(function() {
		clearInterval(window._interval)
		second = 0
		startInterval()
		
		$("#wordText").scrollLeft(0)
		$("#wordInput").val("")
		$("#wordInput").focus()
	})
	
	// 点击
	$(".devExample").click(function() {
		const file = $(this).attr("value")
		
		$("#wordText").val("")
		$.get(`./data/dev/${file}`).success(function(wordText) {
			$("#wordText").val(wordText)
			$("#wordInput").val("")
			$("#wordInput").focus()
		})
	})
	
	// 开发
	$("#devDemo").change(function() {
		const file = $(this).val()
		
		if(!file) {
			return false
		}
		
		$("#wordText").val("")
		$.get(`./data/dev/${file}`).success(function(wordText) {
			$("#wordText").val(wordText)
			$("#wordInput").focus()
		})
	})
	
	function loadData(xml) {
		$.ajax({
			url: `./word/${xml}`,
			dataType: "xml",
			success: function(data) {
				let wordText = ""
				console.log(data)
				$(data).find("content").find("item").each(function(index, ele) {
					wordText += $(ele).attr("comparision") + " "
				})
				
				$("#wordText").val(wordText)
				$("#wordInput").val("")
				$("#wordInput").focus()
			}
		})
	}
	
	window.next = 1
	
	$("#next").click(function() {
		$("#wordText").scrollLeft(window.next * $("#wordText").width())
		window.next++
		
		$("#wordInput").val("")
		$("#wordInput").focus()
	})

	loadData("1.xml")
})