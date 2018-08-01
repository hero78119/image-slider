# Image Slider 圖片輪播

![home](https://i.imgur.com/a3UaG38.png)

## Demo

https://vii120.github.io/image-slider/

## Intro

使用**原生JavaScript**製作圖片輪播效果，亦可點擊按鈕跳轉到特定圖片

### 功能

* 自動播放

每隔3秒會跳至下一張圖片，無限循環輪播

* 按鈕功能

點選按鈕後，會重新計算秒數，並從該張圖片繼續自動播放

    * 上/下一張：若該圖片為末張，則會跳回首張，反之亦然
    * 圖片編號：游標移至按鈕上(hover)，可看到該圖片的縮圖，點選按鈕可跳至該張圖

* 響應式設計 (RWD)

針對手機及平板裝置調整按鈕設置，寬度768px以下的螢幕，

將不顯示**上/下一張**按鈕與**圖片圓鈕上的編號**

![rwd](https://i.imgur.com/zUEYbOB.png)

### css

使用**SASS**撰寫

