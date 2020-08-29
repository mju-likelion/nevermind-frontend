/* ==================================================== */
/**
 * 
 *  { nev-axios, Custom Axios for Nevermind Web Service }
 * 
 *  Version 2.1.1
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
 *      yarn add axios tough-cookie axios-cookiejar-support form-data
 *
 *    Or if you want to install from package.json, obviously do:
 *
 *      yarn (or yarn install)
 *
 * */
/*
// Module import with Babel
import axios from "axios";
import FormData from "form-data";
import tough from "tough-cookie";
import axiosCookieJarSupport from "axios-cookiejar-support";
*/
///*
// Module import without Babel - For Debugging
const axios = require("axios").default;
const FormData = require("form-data");
const tough = require("tough-cookie");
const axiosCookieJarSupport = require("axios-cookiejar-support").default;
//*/
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
   *    - None
   * 
   *  * Request Cookies
   *    - `session_id` (String)
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
   *
   *  * Response Cookies
   *    - `session_id` (String | null)
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
   *    - None
   *
   *  * Request Cookies
   *    - `session_id` (String)
   *
   *  * Response Data
   *    - `is_logout` (Boolean)
   *    - `error_msg` (String | null)
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
   *    - None
   *
   *  * Request Cookies
   *    - `session_id` (String)
   *
   *  * Response Data
   *    - `is_unregister` (Boolean)
   *    - `email` (String | null)
   *    - `username` (String | null)
   *    - `error_msg` (String | null)
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
 *  [ Axios Cookie Jar ]
 * 
 *  Stores cookies for each requests & responses
 *
 * */
axiosCookieJarSupport(axios);
const cookieJar = new tough.CookieJar();

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
 *    with FormData headers and return it as a  
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
 *  @param {FormData} formData - FormData class instance
 *  @returns {JSON} - Axios configuration object
 *
 * */
function getConfig(formData) {
  let config = {
    jar: cookieJar,
  };
  if (formData) {
    config["headers"] = formData.getHeaders();
  }
  return config;
}

/*****
 *  ### [ Function - onError ]
 * 
 *  #### Description
 *
 *  - Simplified error message handler as a callback
 *
 *  #### Usage
 *
 *    ```
 *    axios.get(
 *      ...
 *    ).then([RESPONSE_CALLBACK])
 *    .catch(onError);
 *    ```
 *
 *  @param {import("axios").AxiosError} err - Axios error object
 *
 * */
function onError(err) {
  console.log(err);
}

/*****
 *  ### [ Function - getFullURL ]
 *
 *  #### Description
 *
 *  - Get full URL by URL name in exports.urls
 *
 *  #### Usage
 *
 *    ```
 *    // This example is only for inside of this module.
 *    // For external usage, change exports to
 *    // the variable name of this module.
 *    let fullLoginURL = getFullURL(exports.urls.login);
 *    ```
 *
 *  @param {String} urlName - In-site URL for API
 *  @returns {String} - Full URL with baseURL + urlName
 *
 * */
function getFullURL(urlName) {
  return axios.defaults.baseURL + urlName;
}
/* ==================================================== */


/* ==================================================== */
/* --------------------- */
/* << Utility Methods >> */
/* --------------------- */

/*****
 *  ### [ Method - nevAxios.getCookies ]
 *
 *  #### Description
 *
 *  - Get array of string cookies from tough-cookie.Cookie  
 *    of tough-cookie.CookieJar
 *
 *  #### Usage
 *
 *    ```
 *    let cookieArr = nevAxios.getCookie(nevAxios.urls.login);
 *    let loginCookie = cookieArr[0];
 *    // [ "$KEY=$VALUE; $KEY=$VALUE; ...;", ... ]
 *    ```
 *
 *
 *  @param {String} urlName - In-site URL for API
 *  @returns {Array} - Array of stringified Cookies
 *
 * */
nevAxios.getCookies = function (urlName) {
  return cookieJar
    .getCookiesSync(getFullURL(urlName))
    .map((cookie) => cookie.toString());
};

/*****
 *  ### [ Method - nevAxios.setCookies ]
 *
 *  #### Description
 *
 *  - Set Cookie objects to CookieJar using JSON  
 *    (About tough-cookie, refer to nevAxios.getCookies)
 *
 *  #### Usage
 *
 *    ```
 *    nevAxios.setCookies({
 *      $KEY: $VALUE,
 *      ...
 *    }, nevAxios.urls.login);
 *    // [ "$KEY=$VALUE; $KEY=$VALUE; ...;", ... ]
 *    ```
 *
 *  @param {JSON} cookieJSON - JSON to set cookie
 *  @param {String} urlName - In-site URL for API
 *
 * */
nevAxios.setCookies = function (cookieJSON, urlName) {
  let cookieStr = "";
  for (let key in cookieJSON) {
    cookieStr += `${key}=${cookieJSON[key]}; `;
  }
  cookieStr = cookieStr.trim();
  cookieJar.setCookieSync(cookieStr, getFullURL(urlName));
};
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
  let formData = getFormData(formJSON);
  return await axios.post(url, formData, getConfig(formData));
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
  return nevAxios.post(nevAxios.urls.issession, {});
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
  return nevAxios.post(nevAxios.urls.login, formJSON);
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
  return nevAxios.post(nevAxios.urls.logout, {});
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
  return nevAxios.post(nevAxios.urls.unregister, {});
};
/* ==================================================== */


/* ==================================================== */
/* ----------------------------- */
/* << Module Export - Default >> */
/* ----------------------------- */

module.exports = nevAxios;
/* ==================================================== */
