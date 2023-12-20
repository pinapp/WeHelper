window.SINGLE_TAB = "  ";
window.ImgCollapsed = "json-format/style/Collapsed.gif";
window.ImgExpanded = "json-format/style/Expanded.gif";
window.QuoteKeys = true;

function format_(){
	var json = $("#jsondata").val();
	$("#fjson").html(fmt);
}