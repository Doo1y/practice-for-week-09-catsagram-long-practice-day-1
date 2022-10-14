// Your code here

window.addEventListener("DOMContentLoaded", event => {
  // instantiate a h1 heading element
  const header = document.createElement("h1");
  header.id = "kitten-header";
  header.innerText = "Kitten Pic";

  // fetch the link

  // instantiate a kitten element 
  const kittenImg = document.createElement("img");
  kittenImg.alt = "a photo of a kitten";
  kittenImg.src = "https://cdn2.thecatapi.com/images/7bp.jpg";
  
  // kittenImg.src = `${fetchKittenUrl().url}`;

  document.body.prepend(header);
  document.body.appendChild(kittenImg)
});
