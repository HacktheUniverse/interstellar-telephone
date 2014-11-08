Parse.Cloud.define("getObjectId", function(request, response) {
	var Message = Parse.Object.extend("message");
	var query = new Parse.Query(Message);
	query.equalTo("customName", request.params.customName);
	query.first({
  		success: function(results) {
    	response.success(results.objectId)
    	}
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});