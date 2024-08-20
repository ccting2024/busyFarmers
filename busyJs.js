const witheTopbar = document.querySelector('.witheTopbar');
const greenTopbar = document.querySelector('.greenTopbar');

// document.ready
document.addEventListener('DOMContentLoaded', function () {

    // 導覽列變換
    let anchor = document.getElementById('anchor');

    window.addEventListener('scroll', function () {
        let AnchorTop = anchor.getBoundingClientRect().top + window.scrollY;

        if (window.scrollY >= AnchorTop) {
            witheTopbar.classList.add('hidden');
            greenTopbar.classList.remove('hidden');
        } else {
            witheTopbar.classList.remove('hidden');
            greenTopbar.classList.add('hidden');
        }
    });
});
const mapSearchBtn = document.getElementById('map-search-btn');
const farmerSearchBtn = document.getElementById('farmer-search-btn');
const mapDisplay = document.getElementById('map-display');
const farmerDisplay = document.getElementById('farmer-display');

// 檢查按鈕是否存在
if (mapSearchBtn && farmerSearchBtn) {
    // 切換按鈕狀態
    function setActiveButton(activeButton, inactiveButton) {

        activeButton.classList.add('active');
        inactiveButton.classList.remove('active');
    }
    function displaySearch(active, inactive) {
        active.classList.add('active');
        inactive.classList.remove('active');
    }

    // 點選事件-地圖
    function showMap() {
        displaySearch(mapDisplay, farmerDisplay);
        setActiveButton(mapSearchBtn, farmerSearchBtn);
    }

    // 點選事件-小農
    function showFarmer() {
        displaySearch(farmerDisplay, mapDisplay);
        setActiveButton(farmerSearchBtn, mapSearchBtn);
    }
    // 進入尋找小農時先開啟依地圖
    showMap();
    // 點選事件-地圖
    mapSearchBtn.addEventListener('click', showMap);

    // 點選事件-小農
    farmerSearchBtn.addEventListener('click', showFarmer);
}

// 計算margin
function adjustMargin() {
    const title = document.getElementById('title');

    if (greenTopbar && title) {
        // 取得導覽列高度
        let topHeight = greenTopbar.offsetHeight;
        // margin = 導覽列高度
        title.style.marginTop = `${topHeight}px`;
    }
}
// 當頁面加載完成時，調整
window.addEventListener('load', adjustMargin());

// 當大小調整時，重新計算
window.addEventListener('resize', adjustMargin());


// btn名稱
let regions = ['北部', '中部', '南部', '東部', '外島'];
let fruit = ['香蕉', '芭樂', '蘋果', '柑橘', '酪梨', '蘋果', '柚子', '西瓜', '檸檬', '芒果', '鳳梨', '奇異果', '百香果', '火龍果', '龍眼'];
let product = ['果乾', '果醬', '果醋', '果酒'];
let other = ['觀光', '市集'];
// 取得添加位置
let regionButtons = document.getElementById('region-buttons');
let fruitButtons = document.getElementById('fruit-buttons');
let productButtons = document.getElementById('product-buttons');
let otherButtons = document.getElementById('other-buttons');
// 定義生成按鈕的函數
function filterButtons(container, items) {
    items.forEach(item => {
        // 生成新的 div
        let filterButtonDiv = document.createElement('div');
        // 設置 class
        filterButtonDiv.className = 'filter-buttons';
        // 設置 div 的文字內容
        filterButtonDiv.textContent = item;
        // 將 div 加入到指定的容器中
        container.appendChild(filterButtonDiv);
    });
}

// 地區
filterButtons(regionButtons, regions);

// 水果
filterButtons(fruitButtons, fruit);

// 商品
filterButtons(productButtons, product);

// 其他
filterButtons(otherButtons, other);
