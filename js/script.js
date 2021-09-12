
var imgFile = [];
var fileNum = 5;
var main = document.querySelector('.main');
var thumb = document.querySelector('.thumb');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var startNum = 0; // first image
var pageBox = document.querySelector('.page');

var timer = null;

//------------------------------
// create image filename
//------------------------------
for (let i=0; i<fileNum; i++){
	let name = `pexels-photo-0${i+1}`;
	imgFile.push(name);
}
//------------------------------
// create page button
//------------------------------
for (let i=0; i<fileNum; i++){
	let page = document.createElement('span');
	page.num = i;
	page.innerHTML = i+1;
	pageBox.appendChild(page);
}
let pages = pageBox.getElementsByTagName('span');
function active(page_num){
	Array.from(pages).forEach(function(item){
		item.className = '';
	})
	pages[page_num].className = 'active'; 
}
active(startNum);
//-----------------------
// page button
//-----------------------
Array.from(pages).forEach(function(item){
	item.onclick = function(){
		startNum = this.num;
		stopPlay();
		imgShow(this.num);
		active(this.num);
		startPlay();
	}
	if (screen.width > 768){
		item.onmouseover = function(){
			thumb.classList.add('show');
			thumb.src = `images/${imgFile[this.num]}.png`;
		}
		item.onmouseout = function(){
			thumb.classList.remove('show');
		}
	}
})
//-------------------------
// dynamic image
//-------------------------
function imgShow(img_num){
	main.src = `images/${imgFile[img_num]}.png`;
	if (img_num <= 0) {
		document.getElementsByClassName("prev")[0].style.display = "none";
	} else {
		document.getElementsByClassName("prev")[0].style.display = "";
	}

	if (img_num >= fileNum - 1) {
		document.getElementsByClassName("next")[0].style.display = "none";
	} else {
		document.getElementsByClassName("next")[0].style.display = "";
	}
}
imgShow(startNum);
//-------------------------
// arrow button
//-------------------------
prev.addEventListener('click',function(){arrow('prev')});
next.addEventListener('click',function(){arrow('next')});

function arrow(dir){
	let first = dir=='next'? 0 : fileNum-1;
	let end = dir=='next'? fileNum-1 : 0;
	if (startNum == end){
		startNum = first
	} else{
		dir=='next'? startNum += 1 : startNum -= 1
	}
	stopPlay();
	imgShow(startNum);
	active(startNum);
	startPlay();
}
//-------------------------
// keyboard
//-------------------------
document.onkeydown = function(e) {
	if (e.keyCode === 37){
		prev.click();
	} else if (e.keyCode === 39){
		next.click();
	}
}
//-------------------------
// autoplay
//-------------------------
// startPlay();

function startPlay(){
	if (timer == null){
		timer = setInterval(function(){
			startNum++;
			if (startNum >= fileNum){
				startNum = 0
			}
			imgShow(startNum);
			active(startNum);
		}, 120000)
	}
}

function stopPlay(){
	clearInterval(timer);
	timer = null;
}

function wetherScroll() {
    var startX = startY = endX = endY = 0;
    var body = document.getElementsByClassName("container")[0];
    console.log(body);
    body.addEventListener('touchstart', function(event) {
        var touch = event.targetTouches[0];
        //滑動起點的座標
        startX = touch.pageX;
        startY = touch.pageY;
        // console.log("startX:" startX "," "startY:" startY);
    });
    body.addEventListener("touchmove", function(event) {
        var touch = event.targetTouches[0];
        //手勢滑動時，手勢座標不斷變化，取最後一點的座標為最終的終點座標
        endX = touch.pageX;
        endY = touch.pageY;
        // console.log("endX:" endX "," "endY:" endY);
    })
    body.addEventListener("touchend", function(event) {
        var distanceX = endX - startX,
            distanceY = endY - startY;
        // console.log("distanceX:" distanceX "," "distanceY:" distanceY);
        //移動端裝置的螢幕寬度
        var clientWidth = document.documentElement.clientWidth;
        // console.log(clientHeight;*0.2);
        //判斷是否滑動了，而不是螢幕上單擊了
        if (startX != Math.abs(distanceX)) {
            //在滑動的距離超過螢幕高度的20%時，做某種操作
            if (Math.abs(distanceX) > clientWidth * 0.2) {
                //向下滑實行函式someAction1，向上滑實行函式someAction2
                if (distanceX < 0 && document.getElementsByClassName("next")[0].style.display != "none") {
					next.click();
                } 
                if (distanceX >= 0 && document.getElementsByClassName("prev")[0].style.display != "none") {
					prev.click();
                }
            }
        }
        startX = startY = endX = endY = 0;
    })
}

wetherScroll();
