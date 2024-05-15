// 定义店铺和饮品数据
const stores = ["榕园二楼", "荔园", "槿园三楼", "若海"];
const drinks = {
  榕园二楼: ["农家菜", "自选", "潮汕粿条", "铁板", "小面", "烧腊"],
  荔园: ["荔园一楼", "荔园二楼", "荔园三楼"],
  槿园三楼: ["小炒", "面", "焗饭", "烤肉饭", "冬阴功", "香锅", "麻辣烫"],
  若海: ["若海一楼", "若海二楼"],
};

// 用户选择是否有心仪的店铺
let selectedStore = ""; // 声明全局变量用于存储当前选择的店铺
function chooseStore(hasStore) {
  if (hasStore) {
    document.getElementById("choice").style.display = "none";
    document.getElementById("storeChoice").style.display = "block";
  } else {
    document.getElementById("choice").style.display = "none";
    selectedStore = stores[Math.floor(Math.random() * stores.length)]; // 更新选定的店铺
    document.getElementById("retryChoice").style.display = "block";
    document.getElementById("selectedStore").innerText = selectedStore;
  }
}

// 用户选择店铺后选择饮品
// 用户有心仪店铺
function selectDrink1() {
  selectedStore = document.getElementById("store").value; // 更新选定的店铺
  const selectedDrink =
    drinks[selectedStore][
      Math.floor(Math.random() * drinks[selectedStore].length)
    ];
  displayResult(selectedDrink);
}

// 用户选择店铺后选择饮品
// 用户没有心仪店铺
function selectDrink2() {
  let selectedStore = document.getElementById("store").value;
  if (document.getElementById("retryChoice").style.display === "block") {
    selectedStore = document.getElementById("selectedStore").innerText; // 使用之前选定的店铺
  }
  const selectedDrink =
    drinks[selectedStore][
      Math.floor(Math.random() * drinks[selectedStore].length)
    ];
  displayResult(selectedDrink);
}

// 重选店铺
function retryStore() {
  document.getElementById("result").style.display = "none";
  document.getElementById("retryChoice").style.display = "none";
  selectedStore = stores[Math.floor(Math.random() * stores.length)]; // 更新选定的店铺
  document.getElementById("selectedStore").innerText = selectedStore; // 更新显示在界面上的选定店铺的文字
}

// 用户选择是否要重选饮品
function retryDrink() {
  const selectedDrink =
    drinks[selectedStore][
      Math.floor(Math.random() * drinks[selectedStore].length)
    ];
  displayResult(selectedDrink);
}

// 显示选择结果
function displayResult(drink) {
  document.getElementById("storeChoice").style.display = "none";
  document.getElementById("retryChoice").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("drink").innerText = drink;
}
