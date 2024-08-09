let palavra;

function setup() {
  createCanvas(600, 600);
  palavra = xerequinha();
  
}

function draw() {
  pepeka();
  periquita();
  xerequinha();
}

function pepeka(){
  background("violet");
  fill("black");
  textSize(40);
  textAlign(CENTER,CENTER);
}

function periquita(){
  let maximo= width;
  let minimo= 0  ;
  
  let quantidade = map(mouseX, 0,width, 1, palavra.length);
  let inicio = palavra.substring(0, quantidade);
  text(inicio, 300 ,300);  
}

function xerequinha(){
  let palavras= ["BOROCOXO", "VO NADAAAA VO NADA","perereca suicida ", "escoliose","gustavo tribola","vovo e vovo e um anao em um triangulo amoroso"];
  return random (palavras)
  
}
  
