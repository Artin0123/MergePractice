let mapArray, ctx, currentImgMain, imgMountain, imgMain, imgEnemy;
const gridLength = 100;

$(function () {
    mapArray = [[0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 1, 0
    ], [0, 1, 0, 3, 0, 0], [0, 0, 0, 1, 0, 1
        ], [1, 1, 0, 1, 0, 0], [3, 0, 0, 0, 3, 2]];
    ctx = $("#myCanvas")[0].getContext("2d");
    imgMain = new Image();
    imgMain.src = "spriteSheet.png";
    currentImgMain = { "x": 0, "y": 0 };
    imgMain.onload = function () {
        ctx.drawImage(imgMain, 0, 0, 80, 130, currentImgMain.x, currentImgMain.y, gridLength, gridLength);
    }
    imgMountain = new Image();
    imgMountain.src = "material.png";
    imgEnemy = new Image();
    imgEnemy.src = "Enemy.png";
    imgMountain.onload = function () {
        imgEnemy.onload = function () {
            for (var x in mapArray) {
                for (var y in mapArray[x]) {
                    if (mapArray[x][y] == 1) {
                        ctx.drawImage(imgMountain, 32, 65, 32, 32, y * gridLength, x * gridLength, gridLength, gridLength);
                    } else if (mapArray[x][y] == 3) {
                        ctx.drawImage(imgEnemy, 7, 40, 104, 135, y * gridLength, x * gridLength, gridLength, gridLength);
                    }
                }
            }
        }
    }
});
$(document).on("keydown", function (event) {
    console.log(event.code);
    let targetImg, targetBlock, cutImagePositionX;
    targetImg = { "x": -1, "y": -1 };
    targetBlock = { "x": -1, "y": -1 };
    event.preventDefault();
    switch (event.code) {
        case "ArrowLeft":
            targetImg.x = currentImgMain.x - gridLength;
            targetImg.y = currentImgMain.y;
            cutImagePositionX = 175;
            break;
        case "ArrowUp":
            targetImg.x = currentImgMain.x;
            targetImg.y = currentImgMain.y - gridLength;
            cutImagePositionX = 355;
            break;
        case "ArrowRight":
            targetImg.x = currentImgMain.x + gridLength;
            targetImg.y = currentImgMain.y;
            cutImagePositionX = 540;
            break;
        case "ArrowDown":
            targetImg.x = currentImgMain.x;
            targetImg.y = currentImgMain.y + gridLength;
            cutImagePositionX = 0;
            break;
        default:
            return;
    }
    console.log("targetImg", targetImg);
    if (targetImg.x <= 500 && targetImg.x >= 0 && targetImg.y <= 500 && targetImg.y >= 0) {
        targetBlock.x = targetImg.y / gridLength;
        targetBlock.y = targetImg.x / gridLength;
    } else {
        targetBlock.x = -1;
        targetBlock.y = -1;
    }
    console.log("targetBlock", targetBlock);
    ctx.clearRect(currentImgMain.x, currentImgMain.y, gridLength, gridLength);
    if (targetBlock.x != -1 && targetBlock.y != -1) {
        console.log("mapArray[targetBlock.x][targetBlock.y]", mapArray[targetBlock.x][targetBlock.y]);
        switch (mapArray[targetBlock.x][targetBlock.y]) {
            case 0:
                $("#talkbox").text("");
                currentImgMain.x = targetImg.x;
                currentImgMain.y = targetImg.y;
                break;
            case 1:
                $("#talkbox").text("有山");
                break;
            case 2:
                $("#talkbox").text("抵達終點");
                currentImgMain.x = targetImg.x;
                currentImgMain.y = targetImg.y;
                break;
            case 3:
                $("#talkbox").text("哈囉");
                break;
        }
    } else {
        $("#talkbox").text("邊界");
    }
    console.log(currentImgMain);
    ctx.drawImage(imgMain, cutImagePositionX, 0, 80, 130, currentImgMain.x, currentImgMain.y, gridLength, gridLength);
})