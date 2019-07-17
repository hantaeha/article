// confirm

var company_name; var product_name; var launch_date; var category; var point;
var confirm_msg;
function confirm(){
  var company_name = document.getElementById("company_name").value;
  var product_name = document.getElementById("product_name").value;
  var launch_date = document.getElementById("launch_date").value;
  var category = document.getElementById("category").value;
  var point = document.getElementById("point").value;
  confirm_msg = "입력하신 정보는 다음과 같습니다." + "\n" + "\n" +
                "회사명 : " + company_name + "\n" +
                "제품명 : " + product_name + "\n" +
                "출시일 : " + launch_date + "\n" +
                "제품군 : " + category + "\n" +
                "맛 : " + point + "\n" + "\n"
}
