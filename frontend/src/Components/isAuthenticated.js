import getCookie from './getCookie';

// This function will be used to determine whether the user has access to the content
function isAuthenticated() {
// Check cookies if cookie exists give access to next page
  var checkCookie = getCookie('my-token');
  if(checkCookie != null){
    return true;
  } else {
    return false;
  };
};

export default isAuthenticated;
