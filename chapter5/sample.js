var Area = function() {};

Area.version = '1.0';

Area.triangle = function(base, height) {
  return base * height / 2;
};

Area.diamond = function(width, height) {
  return width * height / 2;
};

console.log('Areaクラスのバージョン:' + Area.version);
console.log('三角形の面積:' + Area.triangle(5, 3));
console.log('菱形の面積:' + Area.diamond(10, 2));

var a = new Area();
console.log('菱形の面積:' + a.diamond(10, 2));