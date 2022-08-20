const body_el = document.querySelector("body");

body_el.addEventListener("mousemove", (event) =>{

  const xPos = event.offsetX;
  const yPos = event.offsetY;

  const span_el = document.createElement("span");
  span_el.style.left = xPos + "px";
  span_el.style.top = yPos+ "px";
  const size = Math.random() *100;
  span_el.style.width = size+"px";
  span_el.style.height = size+"px";

  body_el.append(span_el);

  setTimeout(()=> {
    span_el.remove();
  } , 3000)
});

body_el.addEventListener("click", (event) =>{

  const xPos = event.offsetX;
  const yPos = event.offsetY;
  console.log("Clicked 2");
  const span_el = document.createElement("span");
  span_el.style.left = xPos + "px";
  span_el.style.top = yPos+ "px";
  // const size = Math.random() *50;
  // span_el.style.width = size+"px";
  // span_el.style.height = size+"px";
  span_el.style.backgroundImage = 'url("https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-12-512.png")';


  body_el.append(span_el);

  setTimeout(()=> {
    span_el.remove();
  } , 6000)
});

body_el.addEventListener("mouseenter", (event) =>{

  const xPos = event.offsetX;
  const yPos = event.offsetY;
  console.log("Clicked 3");
  const span_el = document.createElement("span");
  span_el.style.left = xPos + "px";
  span_el.style.top = yPos+ "px";
  // const size = Math.random() *50;
  // span_el.style.width = size+"px";
  // span_el.style.height = size+"px";
  span_el.style.backgroundImage = 'url("https://cdn1.iconfinder.com/data/icons/valentine-s-heart/128/__heart_sunglasses_cool-2-512.png")';
  span_el.style.transform = "translate(-50%, -50%)";
  body_el.append(span_el);
  

  setTimeout(()=> {
    span_el.remove();
  } , 4000)
});



body_el.addEventListener("mousedown", (event) =>{

  const xPos = event.offsetX;
  const yPos = event.offsetY;
  console.log("Clicked 4");
  const span_el = document.createElement("span");
  span_el.style.left = xPos + "px";
  span_el.style.top = yPos+ "px";
  // const size = Math.random() *50;
  // span_el.style.width = size+"px";
  // span_el.style.height = size+"px";
  span_el.style.backgroundImage = 'url("https://cdn2.iconfinder.com/data/icons/valentine-day-16/512/535_sms_love_weddind_heart_valentine_valentines_day_love-128.png")';
  span_el.style.transform = "translate(-50%, -50%)";
  body_el.append(span_el);
  

  setTimeout(()=> {
    span_el.remove();
  } , 4000)
});

body_el.addEventListener("mouseleave", (event) =>{

  const xPos = event.offsetX;
  const yPos = event.offsetY;
  console.log("Clicked 5");
  const span_el = document.createElement("span");
  span_el.style.left = xPos + "px";
  span_el.style.top = yPos+ "px";
  // const size = Math.random() *50;
  // span_el.style.width = size+"px";
  // span_el.style.height = size+"px";
  span_el.style.backgroundImage = 'url("https://cdn0.iconfinder.com/data/icons/valentine-s-heart/128/__heart_arrow_love-128.png")';
  span_el.style.transform = "translate(50%, 50%)";
  body_el.append(span_el);
  

  setTimeout(()=> {
    span_el.remove();
  } , 4000)
});