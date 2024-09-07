let witheTopbar = document.querySelector('.witheTopbar');
let greenTopbar = document.querySelector('.greenTopbar');
document.addEventListener('DOMContentLoaded', function () {
    let anchor = document.getElementById('anchor');

    const mountain1 = document.querySelector('.mountain-1');
    const mountain2 = document.querySelector('.mountain-2');
    const ornament = document.querySelector('.ornament');



    // Handle scroll events
    window.addEventListener('scroll', function () {
        let scrollPosition = window.scrollY;
        let AnchorTop = anchor.getBoundingClientRect().top + scrollPosition;

        // Toggle topbars
        if (scrollPosition >= AnchorTop) {
            witheTopbar.classList.add('hidden');
            greenTopbar.classList.remove('hidden');
        } else {
            witheTopbar.classList.remove('hidden');
            greenTopbar.classList.add('hidden');
        }
    });

    const cartHeader = document.querySelector('.cart-header');
    const floatingCart = document.getElementById('floating-cart');

    cartHeader.addEventListener('click', function () {
        console.log('click');
        if (floatingCart.classList.contains('open')) {
            floatingCart.classList.remove('open');
        } else {
            floatingCart.classList.add('open');
        }
    });

    const scrollEffectMountain1 = basicScroll.create({
        elem: mountain1,
        from: 0,
        to: 519,
        direct: true,
        props: {
            '--translateY-1': {
                from: 50,
                to: `${100 * parseFloat(mountain1.getAttribute('data-modifier'))}%`
            }
        }
    }).start();

    const scrollEffectMountain2 = basicScroll.create({
        elem: mountain2,
        from: 0,
        to: 519,
        direct: true,
        props: {
            '--translateY-2': {
                from: -30,
                to: `${0 * parseFloat(mountain2.getAttribute('data-modifier'))}%`
            }
        }
    }).start();

    const scrollEffectornament = basicScroll.create({
        elem: ornament,
        from: 0,
        to: 519,
        direct: true,
        props: {
            '--translateY-3': {
                from: 0,
                to: `${30 * parseFloat(ornament.getAttribute('data-modifier'))}%`
            }
        }
    }).start();
});


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


const mapSearchBtn = document.getElementById('map-search-btn');
const farmerSearchBtn = document.getElementById('farmer-search-btn');
const mapDisplay = document.getElementById('map-display');
const farmerDisplay = document.getElementById('farmer-display');

// 初始化 Leaflet 地图
let map;

// 檢查按鈕是否存在
if (mapSearchBtn && farmerSearchBtn) {
    function setActiveButton(activeButton, inactiveButton) {
        activeButton.classList.add('active');
        inactiveButton.classList.remove('active');
    }

    function displaySearch(active, inactive) {
        active.classList.add('active');
        inactive.classList.remove('active');
    }

    function initializeMap() {
        if (!map) {
            map = L.map('map-display').setView([24.9457, 121.3576], 13); // 設置中心為台北市

            // 添加 OpenStreetMap 圖層
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            // 確保地圖容器尺寸正確
            setTimeout(() => {
                map.invalidateSize();
            }, 0);

            // 創建自定義圖標
            var customIcon = L.icon({
                iconUrl: './images/shared/icon2_sign.svg', // 圖標的 URL 路徑
                iconSize: [48, 48], // 圖標的大小 [寬, 高]
                iconAnchor: [24, 48], // 圖標的錨點，通常是圖標的底部中心 [x, y]
                popupAnchor: [0, -48] // 彈出窗的錨點相對於圖標錨點的位置 [x, y]
            });

            // 創建標記組
            var markers = L.layerGroup();

            // 添加多個標記到標記組
            var locations = [
                [24.9457, 121.3576],/* 柑橘、蘋果、葡萄 */
                [23.7681, 120.9674],/* 荔枝、香蕉 */
                [22.8851, 120.5630],/* 芒果、木瓜、龍眼 */
                [23.982002, 121.597182],/* 釋迦、番荔枝、柚子 */
                [23.579977, 119.604850]/* 柑橘、葡萄柚、香蕉 */


            ];

            locations.forEach(function (location) {
                var marker = L.marker(location, { icon: customIcon }).addTo(markers);
                // 添加彈出窗口
                marker.bindPopup('<b>台北市</b><br>這是一個自定義地圖標記。');
            });

            // 將標記組添加到地圖上
            markers.addTo(map);
        }
    }

    // 點選事件-地圖
    function showMap() {
        displaySearch(farmerDisplay, mapDisplay);
        setActiveButton(mapSearchBtn, farmerSearchBtn);
        initializeMap(); // 確保地圖初始化

        setTimeout(() => {
            map.invalidateSize(); // 確保地圖正確顯示
        }, 0); // 使用延遲來確保 DOM 完全渲染後再調整地圖尺寸
    }

    // 點選事件-小農
    function showFarmer() {
        displaySearch(mapDisplay, farmerDisplay);
        setActiveButton(farmerSearchBtn, mapSearchBtn);
    }

    // 進入尋找小農時先開啟地圖
    showMap();

    // 點選事件-地圖
    mapSearchBtn.addEventListener('click', showMap);

    // 點選事件-小農
    farmerSearchBtn.addEventListener('click', showFarmer);
}

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
        let filterButtonDiv = document.createElement('div');
        filterButtonDiv.className = 'filter-buttons';
        filterButtonDiv.textContent = item;
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
