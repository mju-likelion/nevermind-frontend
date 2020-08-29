const nevAxios = require("./src/nev-axios");

/**
 *  [ Test function - test_user_auth ]
 *
 *  * Testing methods *
 *  - nevAxios.register
 *  - nevAxios.login
 *  - nevAxios.logout
 *  - nevAxios.unregister
 *
 */
async function test_user_auth() {
  const testUser = {
    email: "sample@example.com",
    pwd: "password",
    username: "username",
    cellphone: "01011112222",
  };
  let res1, res2, res3, res4;
  res1 = await nevAxios.register(testUser);
  console.log(res1.data);
  res2 = await nevAxios.login(testUser);
  console.log(res2.data);
  res3 = await nevAxios.issession();
  console.log(res3.data);
  res4 = await nevAxios.unregister();
  console.log(res4.data);
}

test_user_auth();
