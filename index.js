var ui = {};
var app = {};



// nav部分-----------显示隐藏

var navMyJD = document.getElementById("navmyJD");
var userInfo = document.getElementById("userinfo");

navMyJD.onmouseover = function(){
	userinfo.style.display = "block";
}
navmyJD.onmouseout = function(){
	userinfo.style.display = "none";
}


// 商品详情分类-----------显示隐藏
var classifyItem = document.getElementById("classify-item");
var itemUl = classifyItem.getElementsByTagName("ul")[0];
var itemName = itemUl.getElementsByClassName("item-name");
var itemContent = itemUl.getElementsByClassName("item-content");
var i = 0;

	for(i = 0 ; i < itemName.length; i++){
		itemName[i].index = i;
		itemName[i].onmouseover = function(){
			for(i = 0 ; i < itemName.length ; i++){
				itemContent[i].style.display = "none";
			}
			itemContent[this.index].style.display = "block";
		}
		itemName[i].onmouseout = function(){
			for(i = 0 ; i< itemName.length ; i++){
				itemContent[i].style.display = "none";
			}
		}
	}


// 商品轮播图-----------------轮播

var imgsList = ["image/lunbo.jpg","image/lunbo1.jpg","image/lunbo2.jpg","image/lunbo3.jpg","image/lunbo4.jpg","image/lunbo5.jpg"];
var lunboImg = document.getElementById("lunboImg");
var AsliderItem = document.getElementsByClassName("slider-all-item")[0];
var osliderItem = AsliderItem.getElementsByTagName("li");
var preBtn = document.getElementsByClassName("pre")[0];
var nextBtn = document.getElementsByClassName("next")[0];
var imgIndex = 0 ; 
var timer = move();

for(var i = 0 ; i < osliderItem.length ; i++){
	!function(i){
		osliderItem[i].onmouseover = function(){
			window.clearInterval(timer);
			itemStyle(osliderItem,i);
			imgIndex = i;
		};
		osliderItem[i].onmouseout = function(){
			timer = move();
		}
	}(i);
}

function move(){
	return window.setInterval(function(){
		imgIndex++;
		if(imgIndex < imgsList.length){
			lunboImg.src = imgsList[imgIndex];
		}else{
			imgIndex = 0 ; 
			lunboImg.src = imgsList[imgIndex];
		}
		itemStyle(osliderItem,imgIndex);

	},3000);
}


function itemStyle(osliderItem,imgIndex){
	for(var i = 0 ; i < osliderItem.length ; i++){
		if(i == imgIndex){
			osliderItem[i].className = "item-style";
			lunboImg.src = imgsList[imgIndex];
		}else{
			osliderItem[i].className = "";
		}
	}
}

function ChangeAll(){
	var oPre = document.getElementById("pre");
	var oNext = document.getElementById("next");
	var ChangePN = 0;

	oNext.onclick = function(){
		lunboImg.src = imgsList[ChangePN];
		ChangePN++;
		if(ChangePN == imgsList.length){
			ChangePN = 0;
		}
	}
	oPre.onclick = function(){
		lunboImg.src = imgsList[ChangePN];
		ChangePN--;
		if (ChangePN == -1) {
			ChangePN = imgsList.length - 1;
		}
	}
}
	ChangeAll();

// 第一层楼------------tab栏
var topicName = document.getElementsByClassName("floor-1-topic-name")[0];
var oTopicName = topicName.getElementsByTagName("li");
console.log(oTopicName);
var floorBox = document.getElementsByClassName("fl-cnt-box");
console.log(floorBox);
var j = 0;
	for(j = 0 ; j < oTopicName.length; j++){
		oTopicName[j].index = j;
		oTopicName[j].onmouseover = function(){
			for(j = 0 ; j < oTopicName.length ; j++){
				floorBox[j].style.display = "none";
			}
			floorBox[this.index].style.display = "block";
		}
	}


// 搜索默认内容-------显示隐藏
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
	var searchBox = document.getElementById("searchBox");
	ui.PlaceholderChange(searchBox,"phone");
}		
app.toTip();