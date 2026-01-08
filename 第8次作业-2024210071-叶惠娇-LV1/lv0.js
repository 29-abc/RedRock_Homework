const config = {
  method: "get",
}

fetch('https://api.github.com/users/29-abc', config)
  .then(res => res.json())
  .then(data => console.log(data))