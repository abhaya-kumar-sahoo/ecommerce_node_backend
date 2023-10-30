const a = [2, 5, 12, 0, 4];
let b = [];
let d = 0;

i = 0;
while (a.length !== 0) {
  // console.log(b);
  // a.splice(0, 1);
  // console.log(a[i]);
  b.push(a[i]);

  // console.log(d);
  // console.log(i);
  console.log("main", a);

  a.splice(0, 1);
  // console.log(i);

  i = i + 1;
  console.log(b);
}
// console.log(b);

// console.log(a);
// a.splice(1, 1);

// console.log(a);
