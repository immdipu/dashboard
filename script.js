const tabBtns = document.querySelectorAll(".tab-btn");
const dashbord = document.querySelector(".dashbord");
const tabs = document.querySelectorAll('.tab')
const dailyTab = document.querySelector('.daily')
const weeklyTab = document.querySelector('.weekly')
const monthlyTab = document.querySelector('.monthly')

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.querySelector('.' + btn.dataset.target);
    tabs.forEach(tab => tab.classList.remove('active'));
    target.classList.add('active');
  })
})

fetch("./data.json")
  .then((response) => response.json())
  .then((elements) => {
    elements.forEach(function (item, i) {
      const titles = item.title;
      const dailycurrenttime = item.timeframes.daily.current;
      const weeklycurrenttime = item.timeframes.weekly.current;
      const monthlycurrenttime = item.timeframes.monthly.current;
      const dailypretime = item.timeframes.daily.previous;
      const weeklypretime = item.timeframes.weekly.previous;
      const monthlypretime = item.timeframes.monthly.previous;

      //dailydata
      dailyTab.insertAdjacentHTML('beforeend', `<div class="box ${titles}">
          <div class="img_container">
            <img class="image" src="./images/${i + 1}.svg" alt="">
          </div>
          <div class="headercontainer">
            <div class="header">
              <h5>${titles}</h5>
              <img src="./images/icon-ellipsis.svg" alt="">
            </div>
            <div class="time">
              <h1>${dailycurrenttime}hrs</h1>
            </div>
            <div class="pre_time">
              Yesterday - ${dailypretime}hrs
            </div>
          </div>
        </div>`)

      //monthly data
      monthlyTab.insertAdjacentHTML('beforeend', `<div class="box ${titles}">
          <div class="img_container">
            <img class="image" src="./images/${i + 1}.svg" alt="">
          </div>
          <div class="headercontainer">
            <div class="header">
              <h5>${titles}</h5>
              <img src="./images/icon-ellipsis.svg" alt="">
            </div>
            <div class="time">
              <h1>${monthlycurrenttime}hrs</h1>
            </div>
            <div class="pre_time">
              Last month - ${monthlypretime}hrs
            </div>
          </div>
        </div>`)
    });
  });

