const config = {
  method: "get",
}

fetch('https://api.openweathermap.org/data/2.5/weather?q=Chongqing&appid=0c4db5637570f7d67ae787c5546353b2&units=metric&lang=zh_cn', config)
  .then(res => res.json())
  .then(data => {
    console.log('重庆当前温度：' + data.main.temp)
    console.log('重庆当前天气：' + data.weather[0].description)
    console.log(data)
  })