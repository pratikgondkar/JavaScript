const accountId = 123456
let accountEmail = "pratik@google.com"
var accountPassword = "12345"
accountCity = "Nagpur"

// accountId = 123  // not allowed
accountEmail = "pg@PG.com"
accountPassword = "2024"
accountCity = "Butibori"
let accountState

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


