export async function setStorage(key, value, expires) {
    if (expires === undefined || expires === null) {
      expires = 24 * 60 * 60; // default: seconds for 1 day
    } else {
      expires = Math.abs(expires); //make sure it's positive
    }
  
    var now = Date.now(); //millisecs since epoch time, lets deal only with integer
    var schedule = now + expires * 1000;
    try {
      await localStorage.setItem(key, value);
      await localStorage.setItem(key + "_expiresIn", schedule);
    } catch (e) {
      console.log(
        "setStorage: Error setting key [" +
          key +
          "] in localStorage: " +
          JSON.stringify(e)
      );
      return false;
    }
    return true;
  }
  
  export async function removeStorage(name) {
    try {
      await localStorage.removeItem(name);
      await localStorage.removeItem(name + "_expiresIn");
    } catch (e) {
      console.log(
        "removeStorage: Error removing key  from localStorage: " +
          JSON.stringify(e)
      );
      return false;
    }
    return true;
  }
  
  export function getStorage(key) {
    var now = Date.now(); //epoch time, lets deal only with integer
    // set expiration for storage
    var expiresIn = localStorage.getItem(key + "_expiresIn");
    if (expiresIn === undefined || expiresIn === null) {
      expiresIn = 0;
    }
  
    if (expiresIn < now) {
      // Expired
      removeStorage(key);
      return null;
    } else {
      try {
        var value = localStorage.getItem(key);
        return value;
      } catch (e) {
        console.log(
          "getStorage: Error reading key [" +
            key +
            "] from localStorage: " +
            JSON.stringify(e)
        );
        return null;
      }
    }
  }