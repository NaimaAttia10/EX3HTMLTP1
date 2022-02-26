function getRandom(min, max) {
  i = 0;
  let n = Math.floor((Math.random() * (max - min + 1)) + min);
  while (i < 3) {
    let x = prompt("Tapez l'entier : ");
    if (x > 10 || x < 0) alert("Votre proposition est fausse")
    if (n == x) {
      alert("Vous avez gagné");
      i = 4;
    }
    else alert("Retenter !")
    i++;
  }
  let y = confirm("rejouer ?");
  if (y == true)
    getRandom(0.10);
}
alert(getRandom(0, 10));

