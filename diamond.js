var int = 5;
for (var i = 1; i <= int; i++) {
  for (var j = i; j <= int; j++) {
    document.write("&nbsp;&nbsp;&nbsp;");
  }
  for (var k = 1; k <= i; k++) {
    document.write("* ");
  }
  for (var j = 2; j <= i; j++) {
    document.write("* ");
  }
  document.write("<br />");
}

for (var i = 2; i <= int; i++) {
  for (var j = 1; j <= i; j++) {
    document.write("&nbsp;&nbsp;&nbsp;");
  }
  for (var j = i; j <= int; j++) {
    document.write("* ");
  }
  for (var j = (i + 1); j <= int; j++) {
    document.write("* ");
  }
  document.write("<br />");
}