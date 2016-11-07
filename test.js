var checked = [];
var popupWindow = null;

function popup() {

}
function getColumnValues() {
	for (var checkedColumn in checked) {
		window['output'] = document.getElementById('popup');
		window.open('input.html');
		
		var key = prompt("Enter Key Name of " + checked[checkedColumn], "key");
		var value = prompt("Enter Value Name of " + checked[checkedColumn], "value");

	}
}

$(document).ready(function(){
	// $(".checkbox").each(function() {
	// 	if ($(this).parent().parent().parent().prop("tagName") == "LI")
	// 		$(this).remove();
	// })
	$(".checkbox").click(function(){
		checked = [];
		$("#json-viewer").find("input:checked").each(function(){
			checked.push($(this).prev().html());
		});
	});
	$("#tmp").click(function(){
		if (checked.length > 0) {
			getColumnValues();
		}
	});

	$("#genTable")
});