$.response.contentType = "text/html";
var output = "Hello World ! <br> <br>";

var conn = $.db.getConnection();
var pstmt = conn.prepareStatement("select * from DUMMY");
var rs = pstmt.executeQuery();

if (!rs.next()) {
	$.response.setBody("Failed to retreieve data");
	$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
}
else {
	output = output + "This is the response:" + rs.getString(1);
}

rs.close();
pstmt.close();
conn.close();
$.response.setBody(output);