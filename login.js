// gọi data
let database = JSON.parse(localStorage.getItem("dataAccount"));
//

let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
//gọi form
let  form = document.getElementById("form");
let changePage = document.getElementById("link");

// tạo hàm đăng nhập
form.addEventListener("submit",function(event){
    event.preventDefault();
    let email = emailInput.value;
    let password = passwordInput.value;

    let user = null;
    for(let i = 0 ; i < database.length; i++){
        if(database[i].email === email && database[i].matKhau === password) {
            user = database[i];
            break;
        }
       
    }
     // hiển thị đăng nhập thành công
     if(user){
        alert("Đăng nhập thành công");
        window.location.href = changePage.href
     }else{
        alert("Thông tin sai");
     }
});