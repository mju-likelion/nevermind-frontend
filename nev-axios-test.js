const nevAxios = require("./src/nev-axios");

/*
 *  [ Test module - async ]
 *
 *  Currently added for synchronous procedure
 *  of asynchronous functions
 *
 *  It is recommended to remove it later
 *
 * */
const async = require("async");

/*
 *  [ Test function - test_user_auth ]
 *
 *  * Testing methods *
 *  - nevAxios.register
 *  - nevAxios.login
 *  - nevAxios.logout
 *  - nevAxios.unregister
 *
 * */
function test_user_auth() {
  const testUser = {
    email: "sample@example.com",
    pwd: "password",
    username: "username",
    cellphone: "01011112222",
  };
  const waterfallLogin = (callback) => {
    nevAxios.login(
      {
        email: testUser.email,
        pwd: testUser.pwd,
      },
      (response) => {
        console.log("-------");
        console.log("Process:", nevAxios.urls.login);
        console.log("Data:", response.data);
        console.log("Cookie:", nevAxios.getCookies(nevAxios.urls.register));
        console.log("-------");
        callback(null);
      }
    );
  };
  async.waterfall(
    [
      (asyncCB) => {
        nevAxios.register(testUser, (response) => {
          console.log("-------");
          console.log("Process:", nevAxios.urls.register);
          console.log("Data:", response.data);
          console.log("-------");
          asyncCB(null);
        });
      },
      waterfallLogin,
      (asyncCB) => {
        nevAxios.logout((response) => {
          console.log("-------");
          console.log("Process:", nevAxios.urls.logout);
          console.log("Data:", response.data);
          console.log("-------");
          asyncCB(null);
        });
      },
      waterfallLogin,
      (asyncCB) => {
        nevAxios.unregister((response) => {
          console.log("-------");
          console.log("Process:", nevAxios.urls.unregister);
          console.log("Data:", response.data);
          console.log("-------");
          asyncCB(null);
        });
      },
    ],
    (error) => {
      if (error) throw error;
      console.log("User Authentication Test completed");
    }
  );
}

test_user_auth();
