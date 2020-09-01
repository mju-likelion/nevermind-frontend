/* ==================================================== */
/**
 * 
 *  { nev-axios, Custom Axios for Nevermind Web Service }
 * 
 *  Version 3.0.1
 * 
 **/
/* ==================================================== */


/* ==================================================== */
/* ------------- */
/* << Modules >> */
/* ------------- */

/*
 *  [ Required Packages ]
 *
 *  List of prerequisites:
 *
 *    axios: HTTP client
 *    form-data: Handle "multipart/form-data" type request
 *    tough-cookie: Handle & store cookies
 *    axios-cookiejar-support: Attach tough-cookie to Axios as a middleware
 *
 *  Installation command:
 *
 *    Copy & run following command to install required packages:
 *
 *      yarn add axios tough-cookie axios-cookiejar-support form-data react-cookie
 *
 *    Or if you want to install from package.json, obviously do:
 *
 *      yarn (or yarn install)
 *
 * */
const axios = require("axios");
const FormData = require("form-data");
const tough = require("tough-cookie");
const axiosCookieJarSupport = require("axios-cookiejar-support");
const UnivCookie = require("universal-cookie").default;
/* ==================================================== */


/* ==================================================== */
/* ------------------------------ */
/* << Default Exporting Object >> */
/* ------------------------------ */

const nevAxios = {};
/* ==================================================== */


/* ==================================================== */
/* --------------------------- */
/* << RESTful API URL Names >> */
/* --------------------------- */
nevAxios.urls = {
  /*****
   *  ### [ Property - Verify Existing Session ]
   *
   *  * Method: `POST`
   *  * App: `user`
   *  * Model: `Session`
   *
   *  * Request Parameters
   *    - `session_id` (String)
   * 
   *  * Request Cookies
   *    - None
   * 
   *  * Response Parameters
   *    - `is_session` (Boolean)
   *    - `error_msg` (null | String)
   * 
   *  * Response Cookies
   *    - None
   *
   * */
  issession: "/user/issession",

  /*****
   *  ### [ Property - User Login ]
   *
   *  * Method: `POST`
   *  * App: `user`
   *  * Model: `User`, `Session`
   *
   *  * Request Parameters
   *    - `email` (String)
   *    - `pwd` (String)
   *
   *  * Request Cookies
   *    - None
   *
   *  * Response Data
   *    - `is_login` (Boolean)
   *    - `username` (String | null)
   *    - `email` (String | null)
   *    - `error_msg` (null | String)
   *    - `session_id` (String | null)
   *
   *  * Response Cookies
   *    - None
   *
   * */
  login: "/user/login",

  /*****
   *  ### [ Property - User Logout ]
   *
   *  * Method: `POST`
   *  * App: `user`
   *  * Model: `Session`
   *
   *  * Request Parameters
   *    - `session_id` (String)
   *
   *  * Request Cookies
   *    - None
   *
   *  * Response Data
   *    - `is_logout` (Boolean)
   *    - `error_msg` (null | String)
   *
   *  * Response Cookies
   *    - None
   *
   * */
  logout: "/user/logout",

  /*****
   *  ### [ Property - User Registeration ]
   *
   *  * Method: `POST`
   *  * App: `user`
   *  * Model: `User`
   *
   *  * Request Parameters
   *    - `email` (String)
   *    - `pwd` (String)
   *    - `username` (String)
   *    - `cellphone` (String)
   *
   *  * Request Cookies
   *    - None
   *
   *  * Response Data
   *    - `is_register` (Boolean)
   *    - `create_at` (String/timestamp)
   *    - `error_msg` (null | String)
   *
   *  * Response Cookies
   *    - None
   *
   * */
  register: "/user/register",

  /*****
   *  ### [ Property - User Unregistration ]
   *
   *  * Method: `POST`
   *  * App: `user`
   *  * Model: `User`, `Session`
   *
   *  * Request Parameters
   *    - `session_id` (String)
   *
   *  * Request Cookies
   *    - None
   *
   *  * Response Data
   *    - `is_unregister` (Boolean)
   *    - `email` (String | null)
   *    - `username` (String | null)
   *    - `error_msg` (null | String)
   * 
   *  * Response Cookies
   *    - None
   *
   * */
  unregister: "/user/unregister",
};
/* ==================================================== */


/* ==================================================== */
/* ----------------------------------------------- */
/* << Utility Functions, Variables & Properties >> */
/* ----------------------------------------------- */

/**
 *  [ Cookie Utilities ]
 * 
 *  * cookieJar
 *    - Stores cookies for each requests & responses
 *  * univCookie
 *    - universal-cookie class
 *
 * */
axiosCookieJarSupport(axios);
const cookieJar = new tough.CookieJar();
const univCookie = new UnivCookie();

/*****
 *  ### [ Property - Axios Default Configurations ]
 * 
 *  * #### xsrfCookieName
 *    - Cookie variable name corresponding to  
 *      Django's default CSRF settings
 * 
 *  * #### xsrfHeaderName
 *    - Header name corresponding to default  
 *      Django's default CSRF settings
 * 
 *  * #### withCredentials
 *    - Regardless of any detail on this, you must  
 *      set this value as `true` to enable cookies
 * 
 *  * #### baseURL
 *    - Root URL for this API
 *    - Unless there is no domain name for the server,  
 *      this value will be changed for each migrations  
 *      of the server
 *
 * */
nevAxios.defaultConfig = {
  xsrfCookieName: (axios.defaults.xsrfCookieName = "csrftoken"),
  xsrfHeaderName: (axios.defaults.xsrfHeaderName = "X-CSRFToken"),
  withCredentials: (axios.defaults.withCredentials = true),
  baseURL: (axios.defaults.baseURL = "http://3.128.164.186:8000"),
};

/*****
 *  ### [ Function - getFormData ]
 *
 *  #### Description
 *
 *  - Convert JSON-styled form data into FormData
 *
 *  #### Usage
 *
 *    ```
 *    Without using getFormData:
 *
 *      let formData = new FormData();
 *      formData.append([PARAM_NAME], [PARAM_VALUE]);
 *      ...
 *
 *    Using getFormData:
 *
 *      let formData = getFormData({
 *        [PARAM_NAME]: [PARAM_VALUE],
 *        ...
 *      });
 *    ```
 *
 *  @param {JSON} formJSON - Request Form data as JSON
 *  @returns {FormData} - Convert FormData from formJSON
 *
 * */
function getFormData(formJSON) {
  let formData = new FormData();
  for (let key in formJSON) {
    formData.append(key, formJSON[key]);
  }
  return formData;
}

/*****
 *  ### [ Function - getConfig ]
 *
 *  #### Description
 *
 *  - Merge pre-defined axios configuration object  
 *    with adding axios configuration object for  
 *    complete axios configuration object for the app
 *
 *  #### Usage
 *
 *    ```
 *    axios.get(
 *      [URL_NAME],
 *      {
 *        [PARAMS],
 *        ...getConfig([FORM_DATA]),
 *      }
 *    )...
 *    ```
 *
 *  @param {JSON} insConfig - Inserting axios configuration object
 *  @returns {JSON} - Merged axios configuration object
 *
 * */
function getConfig(insConfig) {
  let config = {
    jar: cookieJar,
    ...insConfig,
  };
  return config;
}

function getCookie(keys) {
  if (keys.length > 1) {
    return keys.map(key => univCookie.get(key));
  } else if (keys.length == 1) {
    return univCookie.get(keys[0]);
  }
  return univCookie.getAll();
}

function setCookie(cookieJSON) {
  const options = {
    path: "/",
  };
  for (let key in cookieJSON) {
    univCookie.set(key, cookieJSON[key], options);
  }
}

function removeCookie(keys) {
  const options = {
    path: "/",
  }
  if(keys.length > 1) {
    keys.forEach(key => univCookie.remove(key, options));
    return true;
  } else if (keys.length == 1) {
    univCookie.remove(keys[0], options);
    return true;
  }
  return false;
}
/* ==================================================== */


/* ==================================================== */
/* -------------------------- */
/* << Axios-Like Methods >> */
/* -------------------------- */

/*****
 *  ### [ Method - nevAxios.get ]
 *
 *  #### Description
 *
 *  - HTTP GET Request for nevermind application
 *
 *  #### Usage
 *
 *    ```
 *    const response = await nevAxios.get(
 *      urls.[URL_NAME],
 *      {
 *        [PARAM_NAME]: [PARAM_VALUE],
 *        ...
 *      }
 *    );
 *    ```
 * 
 *  #### NOTICE
 *
 *  - The method must be called inside of the `async` function  
 *    using `await` keyword
 *  - Must pass an empty object as a request parameter for  
 *    non-parameter request
 *
 *  @param {String} url - In-site URL to call API
 *  @param {JSON} formJSON - Request Form data as JSON
 *  @returns {import("axios").AxiosResponse} - Axios HTTP Response Object
 *
 * */
nevAxios.get = async function (url, formJSON) {
  return await axios.get(url, { ...getConfig(null), params: formJSON });
};

/*****
 *  ### [ Method - nevAxios.post ]
 *
 *  #### Description
 *
 *  - HTTP POST Request for nevermind application
 *
 *  #### Usage
 *
 *  - Same as nevAxios.get function
 *
 *  #### NOTICE
 *
 *  - The method must be called inside of the `async` function  
 *    using `await` keyword
 *  - Must pass an empty object as a request parameter for  
 *    non-parameter request
 *
 *  @param {String} url - In-site URL to call API
 *  @param {JSON} formJSON - Request Form data as JSON
 *  @returns {import("axios").AxiosResponse} - Axios HTTP Response Object
 *
 * */
nevAxios.post = async function (url, formJSON) {
  const formData = getFormData(formJSON);
  return await axios.post(url, formData, getConfig({}));
};
/* ==================================================== */


/* ==================================================== */
/* ------------------------------- */
/* << API-Name-Oriented Methods >> */
/* ------------------------------- */

/*****
 *  ### [ Method - nevAxios.issession ]
 * 
 *  #### Description
 * 
 *  - Nevermind User Session Verification Process
 * 
 *  #### Usage
 * 
 *    ```
 *    const loginResponse = await nevAxios.login(...);
 *    ...
 *    const sessionResponse = (await nevAxios.issession());
 *    ```
 * 
 *  #### NOTICE
 *
 *  - The method must be called inside of the `async` function  
 *    using `await` keyword
 *  - session_id must be defined in request cookie  
 *    (nev-axios automatically handles this with CookieJar)
 *
 *  @returns {import("axios").AxiosResponse} - Axios HTTP Response Object
 * 
 * */
nevAxios.issession = async function () {
  return nevAxios.post(nevAxios.urls.issession, {
    session_id: getCookie(["session_id"]),
  });
};

/*****
 *  ### [ Method - nevAxios.login ]
 *
 *  #### Description
 *
 *  - Nevermind Login Process
 *
 *  #### Usage
 *
 *    ```
 *    const loginResponse = await nevAxios.login({
 *      email: $EMAIL,
 *      pwd: $PASSWORD,
 *    });
 *    ```
 * 
 *  #### NOTICE
 *
 *  - The method must be called inside of the `async` function  
 *    using `await` keyword
 *
 *  @param {JSON} formJSON - JSON-typed request form data
 *  @returns {import("axios").AxiosResponse} - Axios HTTP Response Object
 *
 * */
nevAxios.login = async function (formJSON) {
  const res = await nevAxios.post(nevAxios.urls.login, formJSON);
  if (res.data.is_login) {
    setCookie({ session_id: res.data.session_id });
  }
  delete res.data.session_id;
  return res;
};

/*****
 *  ### [ Method - nevAxios.logout ]
 *
 *  #### Description
 *
 *  - Nevermind Logout Process
 *
 *  #### Usage
 *
 *    ```
 *    const loginResponse = await nevAxios.login(...);
 *    ...
 *    const logoutResponse = await nevAxios.logout();
 *    ```
 *
 *  #### NOTICE
 *
 *  - The method must be called inside of the `async` function  
 *    using `await` keyword
 *  - session_id must be defined in request cookie  
 *    (nev-axios automatically handles this with CookieJar)
 *
 *  @returns {import("axios").AxiosResponse} - Axios HTTP Response Object
 *
 * */
nevAxios.logout = async function () {
  const res = await nevAxios.post(nevAxios.urls.logout, {
    session_id: getCookie(["session_id"]),
  });
  if (res.data.is_logout) {
    removeCookie(["session_id"]);
  }
  return res;
};

/*****
 *  ### [ Method - nevAxios.register ]
 *
 *  #### Description
 *
 *  - Nevermind User Registration Process
 *
 *  #### Usage
 *  
 *    ```
 *    const registerResponse = await nevAxios.register({
 *      email: $EMAIL,
 *      pwd: $PASSWORD,
 *      username: $USERNAME,
 *      cellphone: $CELLPHONENO,
 *    });
 *    ```
 *
 *  #### NOTICE
 *
 *  - The method must be called inside of the `async` function  
 *    using `await` keyword
 * 
 *  @param {JSON} formJSON - JSON-typed request form data
 *  @returns {import("axios").AxiosResponse} - Axios HTTP Response Object
 *
 * */
nevAxios.register = async function (formJSON) {
  return nevAxios.post(nevAxios.urls.register, formJSON);
};

/*****
 *  ### [ Method - nevAxios.unregister ]
 *
 *  #### Description
 *
 *  - Nevermind User Unregistration Process
 *
 *  #### Usage
 * 
 *    ```
 *    const loginResponse = await nevAxios.login(...);
 *    ...
 *    const unregisterResponse = await nevAxios.unregister();
 *    ```
 *
 *  #### NOTICE
 *
 *  - The method must be called inside of the `async` function  
 *    using `await` keyword
 *  - session_id must be defined in request cookie  
 *    (nev-axios automatically handles this with CookieJar)
 *
 *  @returns {import("axios").AxiosResponse} - Axios HTTP Response Object
 *
 * */
nevAxios.unregister = async function () {
  const res = await nevAxios.post(nevAxios.urls.unregister, {
    session_id: getCookie(["session_id"]),
  });
  if (res.data.is_unregister) {
    removeCookie(["session_id"]);
  }
  return res;
};
/* ==================================================== */


/* ==================================================== */
/* ----------------------------- */
/* << Module Export - Default >> */
/* ----------------------------- */

export default nevAxios;
/* ==================================================== */
