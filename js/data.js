//data

var company_name; var product_name; var launch_date; var category; var point;
var title; var article;

function params()
      {
      var url = location.search;
      var _url = decodeURI(url);
      _url = _url.replace(/\+/gi, " ");
      var parameters = _url.split("&");
      var temp = parameters[0].split("=");
      company_name = unescape(temp[1]);
      temp = parameters[1].split("=");
      product_name = unescape(temp[1]);
      temp = parameters[2].split("=");
      launch_date = unescape(temp[1]);
      temp = parameters[3].split("=");
      category = unescape(temp[1]);
      temp = parameters[4].split("=");
      point = unescape(temp[1]);
      }
