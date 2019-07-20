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
function check_onclick(){
  _form = document.form;
  if(_form.company_name.value==""||_form.product_name.value==""||
      _form.launch_date.value==""||_form.category.value==""||
    _form.point.value==""){
      if(_form.company_name.value==""){
        alert("회사명 정보가 비어있습니다.")
        return _form.company_name.focus();
      }else if(_form.product_name.value==""){
        alert("제품명 정보가 비어있습니다.")
        return _form.product_name.focus();
      }else if(_form.launch_date.value==""){
        alert("출시일 정보가 비어있습니다.")
        return _form.launch_date.focus();
      }else if(_form.category.value==""){
        alert("제품군 정보가 비어있습니다.")
        return _form.category.focus();
      }else if(_form.point.value==""){
        alert("표현 정보가 비어있습니다.")
        return _form.point.focus();
      }
    }else{
      alert(confirm_msg)
      form.submit();
    }
}
