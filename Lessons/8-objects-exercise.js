function isSameProduct(p1,p2){
  if(JSON.stringify(p1) === JSON.stringify(p2)){
    console.log("true");
  }
  else{
    console.log("false");
  }
}
const pro1 = {
  name: "Tshirt",
  cost: 399
}

const pro2 = {
  name: "Tshirt",
  cost: 399
}
isSameProduct(pro1,pro2);