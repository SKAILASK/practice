function add(a, b, c, d, e) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 0; }
    if (c === void 0) { c = 0; }
    if (d === void 0) { d = 0; }
    if (e === void 0) { e = 0; }
    var res = a + b + c + d + e;
    console.log("Add=" + res);
}
add();
add(10);
add(10, 20);
add(10, 20, 30);
add(10, 20, 30, 40);
add(10, 20, 30, 40, 50);
