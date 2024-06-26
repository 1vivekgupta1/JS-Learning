const accountId = 144552
let accountEmail = "vivek@yo.com"
var accountPassword = "123456"
accountCity = "jaipur"
let accountState ;

// accountId = 2 // not allowed because we cannot change constant variable

accountEmail = "hz@hf.com"

accountPassword = "2121212"
accountCity = "Bengaluru"

console.log(accountId);

 /*
 Prefer not to use var

 because of issue in block scope and functional scope
 */

console.table([accountId , accountEmail , accountPassword , accountCity , accountState])

//.table helps us to see multiple output in single tabular format