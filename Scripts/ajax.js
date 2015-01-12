$(function () {
    $('#btnSend').click(function () {
       
        var parameters = ["_FirstName", $("#txtFirstName").val(), "_LastName", $("#txtLastName").val()];
        //array that defines data, that we will be sent to handleAjaxRequest method of Webform1.cs
        //Note that we have 4 items in this array.
        //first and second item are key-value pair.
        //you can add as many pairs as you want.
        //But all keys must match the names of handleAjaxRequest function parameters

        var paramList = '';
        if (parameters.length > 0) {
            for (var i = 0; i < parameters.length; i += 2) {
                if (paramList.length > 0) paramList += ',';
                paramList += '"' + parameters[i] + '":"' + parameters[i + 1] + '"';
            }
        }

        paramList = '{' + paramList + '}';

        $.ajax({
            type: "POST",
            url: 'WebForm1.aspx/handleAjaxRequest',
            contentType: 'application/json; charset=utf-8',
            data: paramList,
            dataType: 'json',
            success: function (data, status, xhr) {
                $("#myDiv").html("Inserted user ID: <b>" + data.d.ID + "</b> <br />FirstName: <b>" + data.d.FirstName + "</b><br />LastaName: <b>" + data.d.LastName + "</b><br />Date: <b>" + data.d.CreationTime + "</b>");
            },
            error: function (xhr, status, error) {
                $("#myDiv").html('error occured: ' + status);
            }
        });
    });
});