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
const axios = require("axios").default;
const FormData = require("form-data");
const tough = require("tough-cookie");
const axiosCookieJarSupport = require("axios-cookiejar-support").default;
/* ==================================================== */

/* ==================================================== */
/* --------------------------- */
/* << RESTful API URL Names >> */
/* --------------------------- */
exports.urls = {
  /*
   *  [ Property - User Login ]
   *
   *  Method: POST
   *  App: user
   *  Model: User, Session
   *
   *  Request Parameters:
   *  - email (String)
   *  - pwd (String)
   *
   *  Request Cookie:
   *  - None
   *
   *  Response Data:
   *  - is_login (Boolean)
   *  - username (String | null)
   *  - email (String | null)
   *  - error_msg: (null | String)
   *
   *  Response Cookie:
   *  - session_id (String | null)
   *
   * */
  login: "/user/login",

  /*
   *  [ Property - User Logout ]
   *
   *  Method: POST
   *  App: user
   *  Model: Session
   *
   *  Request Parameters:
   *  - None
   *
   *  Request Cookie:
   *  - session_id (String)
   *
   *  Response Data:
   *  - is_logout (Boolean)
   *  - error_msg (String | null)
   *
   *  Response Cookie:
   *  - None
   *
   * */
  logout: "/user/logout",

  /*
   *  [ Property - User Registeration ]
   *
   *  Method: POST
   *  App: user
   *  Model: User
   *
   *  Request Parameters:
   *  - email (String)
   *  - pwd (String)
   *  - username (String)
   *  - cellphone (String)
   *
   *  Request Cookie:
   *  - None
   *
   *  Response Data:
   *  - is_register (Boolean)
   *  - create_at (String/timestamp)
   *
   *  Response Cookie:
   *  - None
   *
   * */
  register: "/user/register",

  /*
   *  [ Property - User Unregistration ]
   *
   *  Method: POST
   *  App: user
   *  Model: User, Session
   *
   *  Request Parameters:
   *  - None
   *
   *  Request Cookie:
   *  - session_id (String)
   *
   *  Response Data:
   *  - is_unregister (Boolean)
   *  - email (String | null)
   *  - username (String | null)
   *  - error_msg (String | null)
   *
   * */
  unregister: "/user/unregister",
};
/* ==================================================== */

/* ==================================================== */
/* ----------------------------------------------- */
/* << Utility Functions, Variables & Properties >> */
/* ----------------------------------------------- */

/*
 *  [ Axios Cookie Jar ]
 *
 * */
axiosCookieJarSupport(axios);
const cookieJar = new tough.CookieJar();

/*
 *  [ Property - Axios Default Configurations ]
 *
 * */
exports.defaults = {
  xsrfCookieName: (axios.defaults.xsrfCookieName = "csrftoken"),
  xsrfHeaderName: (axios.defaults.xsrfHeaderName = "X-CSRFToken"),
  withCredentials: (axios.defaults.withCredentials = true),
  baseURL: (axios.defaults.baseURL = "http://3.128.164.186:8000"),
};

/*
 *  [ Function - getFormData ]
 *
 *  Description:
 *
 *    Convert JSON-styled form data into FormData
 *
 *  Usage:
 *
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
 *
 *  @param {Object} formJSON - Request Form data as JSON
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

/*
 *  [ Function - getConfig ]
 *
 *  Description:
 *
 *    Merge pre-defined axios configuration object
 *    with FormData headers and return it as a
 *    complete axios configuration object for the app
 *
 *  Usage:
 *
 *    axios.get(
 *      [URL_NAME],
 *      {
 *        [PARAMS],
 *        ...getConfig([FORM_DATA]),
 *      }
 *    )...
 *
 *  @param {FormData} formData - FormData class instance
 *  @returns {Object} - Axios configuration object
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

/*
 *  [ Function - onError ]
 *
 *  Description:
 *
 *    Simplified error message handler as a callback
 *
 *  Usage:
 *
 *    axios.get(
 *      ...
 *    ).then([RESPONSE_CALLBACK])
 *    .catch(onError);
 *
 *  @param {AxiosError} err - Axios error object
 *
 * */
function onError(err) {
  console.log(err);
}

/*
 *  [ Function - getFullURL ]
 *
 *  Description:
 *
 *    Get full URL by URL name in exports.urls
 *
 *  Usage:
 *
 *    // This example is only for inside of this module.
 *    // For external usage, change exports to
 *    // the variable name of this module.
 *    let fullLoginURL = getFullURL(exports.urls.login);
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

/*
 *  [ Method - nevAxios.getCookies ]
 *
 *  Description:
 *
 *    Get array of string cookies from tough-cookie.Cookie
 *    of tough-cookie.CookieJar
 *
 *  Usage:
 *
 *    let cookieArr = nevAxios.getCookie(nevAxios.urls.login);
 *    let loginCookie = cookieArr[0];
 *    // [ "$KEY=$VALUE; $KEY=$VALUE; ...;", ... ]
 *
 *
 *  @param {String} urlName - In-site URL for API
 *  @returns {Array} - Array of stringified Cookies
 *
 * */
exports.getCookies = (urlName) => {
  return cookieJar
    .getCookiesSync(getFullURL(urlName))
    .map((cookie) => cookie.toString());
};

/*
 *  [ Method - nevAxios.setCookies ]
 *
 *  Description:
 *
 *    Set Cookie objects to CookieJar using JSON
 *    (About tough-cookie, refer to nevAxios.getCookies)
 *
 *  Usage:
 *
 *    nevAxios.setCookies({
 *      $KEY: $VALUE,
 *      ...
 *    }, nevAxios.urls.login);
 *    // [ "$KEY=$VALUE; $KEY=$VALUE; ...;", ... ]
 *
 *  @param {Object} cookieJSON - JSON to set cookie
 *  @param {String} urlName - In-site URL for API
 *
 * */
exports.setCookies = (cookieJSON, urlName) => {
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

/*
 *  [ Method - nevAxios.get ]
 *
 *  Description:
 *
 *    HTTP GET Request for nevermind application
 *
 *  Usage:
 *
 *    nevAxios.get(
 *      urls.[URL_NAME],
 *      {
 *        [PARAM_NAME]: [PARAM_VALUE],
 *        ...
 *      },
 *      (response) => {
 *        // Response Callback
 *        // Get data from response.data
 *      },
 *    );
 *
 *    NOTICE:
 *
 *      Must pass an empty object as a request parameter
 *      for non-parameter request
 *
 *  @param {String} url - In-site URL to call API
 *  @param {Object} formJSON - Request Form data as JSON
 *  @param {ResponseCallback} cb - Callback with response object parameter
 *
 * */
exports.get = (url, formJSON, cb) => {
  axios
    .get(url, {
      ...getConfig(null),
      params: formJSON,
    })
    .then((res) => cb(res))
    .catch(onError);
};

/*
 *  [ Method - nevAxios.post ]
 *
 *  Description:
 *
 *    HTTP POST Request for nevermind application
 *
 *  Usage:
 *
 *    Same as nevAxios.get function
 *
 *  NOTICE:
 *
 *    Must pass an empty object as a request parameter
 *    for non-parameter request
 *
 *  @param {String} url - In-site URL to call API
 *  @param {Object} formJSON - Request Form data as JSON
 *  @param {ResponseCallback} cb - Callback with response object parameter
 *
 * */
exports.post = (url, formJSON, cb) => {
  let formData = getFormData(formJSON);
  axios
    .post(url, formData, getConfig(formData))
    .then((res) => cb(res))
    .catch(onError);
};
/* ==================================================== */

/* ==================================================== */
/* ------------------------------- */
/* << API-Name-Oriented Methods >> */
/* ------------------------------- */

/*
 *  [ Method - nevAxios.login ]
 *
 *  Description:
 *
 *    Nevermind Login Process
 *
 *  Usage:
 *
 *    nevAxios.login({
 *      email: $EMAIL,
 *      pwd: $PASSWORD,
 *    }, (response) => {
 *      // Do something here
 *    });
 *
 *  @param {Object} formJSON - JSON-typed request form data
 *  @param {ResponseCallback} cb - Callback with response object parameter
 *
 * */
exports.login = (formJSON, cb) => {
  exports.post(exports.urls.login, formJSON, (res) => cb(res));
};

/*
 *  [ Method - nevAxios.logout ]
 *
 *  Description:
 *
 *    Nevermind Logout Process
 *
 *  Usage:
 *
 *    ...
 *    nevAxios.login(...);
 *    ...
 *    nevAxios.logout((response) => {
 *      // Do something here
 *    });
 *    ...
 *
 *  NOTICE:
 *
 *    session_id must be defined in request cookie
 *    (nev-axios automatically do this with CookieJar at login process)
 *
 *  @param {ResponseCallback} cb - Callback with response object parameter
 *
 * */
exports.logout = (cb) => {
  exports.post(exports.urls.logout, {}, (res) => cb(res));
};

/*
 *  [ Method - nevAxios.register ]
 *
 *  Description:
 *
 *    Nevermind User Registration Process
 *
 *  Usage:
 *
 *    nevAxios.register({
 *      email: $EMAIL,
 *      pwd: $PASSWORD,
 *      username: $USERNAME,
 *      cellphone: $CELLPHONENO,
 *    }, (response) => {
 *      // Do something here
 *    });
 *
 *  @param {Object} formJSON - JSON-typed request form data
 *  @param {ResponseCallback} cb - Callback with response object parameter
 *
 * */
exports.register = (formJSON, cb) => {
  exports.post(exports.urls.register, formJSON, (res) => cb(res));
};

/*
 *  [ Method - nevAxios.unregister ]
 *
 *  Description:
 *
 *    Nevermind User Unregistration Process
 *
 *  Usage:
 *
 *    ...
 *    nevAxios.login(...);
 *    ...
 *    nevAxios.unregister((response) => {
 *      // Do something here
 *    });
 *    ...
 *
 *  NOTICE:
 *
 *    session_id must be defined in request cookie
 *    (nev-axios automatically do this with CookieJar at login process)
 *
 *  @param {ResponseCallback} cb - Callback with response object parameter
 *
 * */
exports.unregister = (cb) => {
  exports.post(exports.urls.unregister, {}, (res) => cb(res));
};
/* ==================================================== */