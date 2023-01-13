
var test = require("@testing-library/react");
const setCookie2 = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires = " + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

}

const getCookie2 = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const checkCookie2 = () => {
  let user = getCookie("username");
  if (user != "") {
      alert("Welcome again " + user);
  } else {
      user = prompt("Please enter your name:","");
      if (user != "" && user != null) {
          setCookie("username", user, 30);
      }
  }
}


it("renders learn react link", () => {
  setCookie2("Michael",1, 1 );
  var namelen, clen = getCookie2("Michael");
  expect(namelen).toBe(1);
  expect(clen).toEqual(1);
});
