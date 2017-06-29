function request(url, params)
{
    var result;
    var url = url;
//    if (params){
//        url += "?" + PrepareParams(params); 
//    }
    $.ajax(
    {
    type: 'GET',
    async: false,
    dataType: 'json',
    data: params,
    url:  url,
    success: function(data) {
        result = data;
    }
    });
    return result;
}

function PrepareParams(params){
    result = "";
    for(param in params){
        result += "&" + param;
        if(params[param]){
            result += "=" + params[param];
        }
    }
    return result;
}
