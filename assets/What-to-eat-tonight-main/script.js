$(function () {
    $("input").on("click", function () {
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random() * numberOfListItem);
        $("h1").text($("li").eq(randomChildNumber).text());
        if (randomChildNumber == 0) {
            $("img").attr("src", "https://c.pxhere.com/photos/e9/c5/thaifood_pock_mama_tomyum_menu-575609.jpg!d");
        }
        if (randomChildNumber == 1) {
            $("img").attr("src", "https://sweetamy.tw/wp-content/uploads/2021/08/IMG20210721122959-1-scaled.jpg");
        }
        if (randomChildNumber == 2) {
            $("img").attr("src", "https://img.ltn.com.tw/Upload/food/page/2020/07/15/200715-10980-0-WClGQ.jpg");
        }
    });
});