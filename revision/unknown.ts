let cl = console.log;
// unkonown
let userDetail : unknown ;
let userName : string;
userDetail = 123;
userDetail = "Jhon";
userDetail = true;

if(typeof userDetail === "string"){
    userName = userDetail;
    cl(userName)
}

