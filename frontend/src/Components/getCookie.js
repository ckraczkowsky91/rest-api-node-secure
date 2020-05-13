// This function will be used to get cookies from the browser
function getCookie(name){
  var cookieArray = document.cookie.split(';');
  for(var i=0; i < cookieArray.length; i++){
    var cookieKeyValuePair = cookieArray[i].split('=');
    console.log(cookieKeyValuePair);
    if(name === cookieKeyValuePair[0].trim()) {
      return(cookieKeyValuePair[1]);
    };
  };
  return(null);
};

export default getCookie;
