var checked = [];
var popupWindow = null;
var key = null;
var value = null;

function getColumnValues() {
	for (var checkedColumn in checked) {
		$("#keyField > span").html("Key for " + checked[checkedColumn] + " : ");
		$("#valueField > span").html("Value for " + checked[checkedColumn] + " : ");

		$("#myModal").modal();
		$("#myModal").on('hidden.bs.modal', function() {

			key = $("#keyField > input").val();
			value = $("#valueField > input").val();

			if (key == "") key = "key";
			if (value == "") value = "value";

			$("#keyField > input").val("");
			$("#valueField > input").val("");

			console.log(key);
			console.log(value);
		});
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
		checked = [];
	});
});