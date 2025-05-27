$(function () {
    $("input").on("click", function () {
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random() * numberOfListItem);
        $("h1").text($("li").eq(randomChildNumber).text());
        if (randomChildNumber == 0) {
            $("img").attr("src", "https://hips.hearstapps.com/hmg-prod/images/1-1525230190.jpg");
        }
        if (randomChildNumber == 1) {
            $("img").attr("src", "https://s3-ap-northeast-1.amazonaws.com/joyinkitchen20190920/acd4bafe-5e8a-44ea-ad17-b85804e2006a.jpg");
        }
        if (randomChildNumber == 2) {
            $("img").attr("src", "https://1.bp.blogspot.com/-GNqC0IcMvP0/XRtptu9mtgI/AAAAAAAEIBU/oUo-k8M4F0AXcHU4oA3Yh1T8LjBUEOlVgCKgBGAs/s1600/IMGP9987.JPG");
        }
    });
});