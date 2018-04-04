function doMultiply(var1, var2) {
	return var1 + " X " + var2 + " = " + var1 * var2;
}

function doAdd(var1, var2) {
	return var1 + " + " + var2 + " = " + (parseInt(var1, 10) + parseInt(var2, 10));
}

$.response.contentType = "application/json";
$.response.status = 200;
$.response.contentType = "text/plain";

try {
	var variable1 = parseInt($.request.parameters.get("var1"), 10);
	var variable2 = parseInt($.request.parameters.get("var2"), 10);
	switch ($.request.parameters.get("mode")) {
		case "multiply":
			$.response.setBody((doMultiply(variable1, variable2)));
			break;
		case "add":
			$.response.setBody((doAdd(variable1, variable2)));
			break;
		default:
			$.response.setBody(("Service not supported: " + $.request.parameters.get("mode")));
			break;
	}
} catch (err) {
	$.response.setBody("Failed to execute action: " + err.toString());
}