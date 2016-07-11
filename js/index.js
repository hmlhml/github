// banner轮播
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    loop: true
})

function getTimeCha(now,future){
	var arrTime=[];
	var sum=(future.getTime()-now.getTime())/1000    //总的秒数差
	var day=parseInt(sum/(60*60*24));                 //天数
	arrTime.push(day);
	var hours=parseInt(sum%(60*60*24)/(60*60));      //小时
	arrTime.push(hours);                             
	var minutes=parseInt(sum%(60*60*24)%(60*60)/60); //分钟
	arrTime.push(minutes);
	var seconds=parseInt(sum%(60*60*24)%(60*60)%60); //秒钟
	arrTime.push(seconds);
	return arrTime;

}