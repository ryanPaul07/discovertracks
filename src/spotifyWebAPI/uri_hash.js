// delete first '#' from hash
var hash = window.location.hash.substring(1).split("&") 

.reduce((initialVlaue, item) => {
  if(item) {
    var parts = item.split("=");  // split the hash based on '=' signs to get the access token
    initialVlaue[parts[0]] = decodeURIComponent(parts[1]);  // decodes the hash component for the access token
  }
  return initialVlaue;
}, ({}));

export default hash;