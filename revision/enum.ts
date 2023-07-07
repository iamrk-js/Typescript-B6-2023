let cl = console.log;

// enums
enum Role {
    Admin = "A", // 0
    Candidate = "C", // 1
    Super_Admin = "SA" // 2
}
let person = {
    fname : "Jhon",
    lname : "Doe",
    age : 33,
    userRole : "SA"  // "Admin" , "Candidate"
}

cl(Role.Admin)
cl(Role.Candidate)
cl(Role.Super_Admin);

if(person.userRole === Role.Super_Admin){
    cl(`Userrole is Super Admin`)
}

if(person.userRole === Role.Candidate){
    // funct...... show both components candidate and company
    cl(`UserRole is Candidate`)
}


// ordered, ready  for dipatched, sjiped , dilever

enum ProductsStates {
    Ordered = "Ordered",
    ReadyToDispatch = "RTD",
    Shiped  = "Shiped",
    
}