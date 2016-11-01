var ui = {};
var app = {};

// 输入内容-------显示隐藏
	ui.PlaceholderChange = function(obj,str){
			obj.onfocus = function(){
				if(this.placeholder == str){
					this.placeholder = "";
				}
			}

			obj.onblur = function(){
				if(this.placeholder == ""){
					this.placeholder = str;
				}
			}
		}

		app.toTip = function(){
			var Name = document.getElementById("name");
			var passWord = document.getElementById("password");
			var passwordAgain = document.getElementById("passwordagain");
			var Email = document.getElementById("email");
			var phoneNum = document.getElementById("phonenum");
			var Yanzhengma = document.getElementById("yanzhengma");
			var phoneYan = document.getElementById("phoneyan");

			ui.PlaceholderChange(Name,"您的账户名和登录名");
			ui.PlaceholderChange(passWord,"建议至少使用两种字符组合");
			ui.PlaceholderChange(passwordAgain,"请再次输入密码");
			ui.PlaceholderChange(Email,"建议使用常用邮箱");
			ui.PlaceholderChange(phoneNum,"建议使用常用手机");
			ui.PlaceholderChange(Yanzhengma,"请输入验证码");
			ui.PlaceholderChange(phoneYan,"请输入手机验证码");
		}
		
	app.toTip();