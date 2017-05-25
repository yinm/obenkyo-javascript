let agent = window.navigator.userAgent.toLowerCase();
let version = window.navigator.appVersion.toLowerCase();

let msie = (agent.indexOf('msie') > -1) && (agent.indexOf('opr') === -1);
let ie10 = msie && (version.indexOf('msie 10.') > -1);
console.log('Internet Exploer10: ' + ie10);

var chrome =  (agent.indexOf('chrome') > -1)
           && (agent.indexOf('edge') === -1)
           && (agent.indexOf('opr')  === -1);
console.log('Chrome: ' + chrome);

let firefox = (agent.indexOf('firefox') > -1);
console.log('Firefox: ' + firefox);