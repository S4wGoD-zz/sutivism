Cookie = {
// метод для установки параметра в куки
  'set': function( name, value, timeout, path ) {
              //cookies r stored for 24h
    var timeout = timeout || 1000*3600*24;
    var date = (new Date((new Date()).getTime() + timeout))
            .toUTCString();
    document.cookie = name + '=' + encodeURIComponent( value )
            + ';expires=' + date + ';path=' + (path || '/');
  },

// метод для считывания определенного параметра из куков
  'get': function( name )
  {
    name = name || null;
    var cookieVars = document.cookie.split(/; /)
    for( var i in cookieVars)
    {
      var cookie = cookieVars[i].split('=')
      if( name == cookie[0] ) return decodeURIComponent(cookie[1]);
    }
  }
}

function req( url ){
  var url = url || '';
  var head = document.getElementsByTagName('head')[0];
  var myCSSsize = document.getElementById('adapt');

            //Calc the resolution
  const q = "px";
  const w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  const ph = "Phone!";
  const iphn = "iPhone 6/7/8 Plus!"
  const iphx = "iPhone X!";
  const ipd = "iPad";
  const pc = "COMPUTER!";

  console.log("Width: " + w + q + ";");
  console.log("Height: " + h + q + ".");

  if( ( w===980 && h<=1920 ) || ( h<=500 ) ){
    //--Phone
    console.log("Phone!");
    document.getElementById("for__js").innerText = "Width: " + w + q + "\n" + "Height: "+ h + q + "\n" + ph;
    url = "./css/adaptive/Phone.css";
  }
  if( w<=375 && h<=812 ){
    //--iPhone 6/7/8 Plus
    console.log("iPhone 6/7/8 Plus!");
    document.getElementById("for__js").innerText = "Width: " + w + q + "\n" + "Height: "+ h + q + "\n" + iphn;
    url = "./css/adaptive/iPhone678Plus.css";
  }
  if( w<=460 && h<=736 ){
    //--iPhone X
    console.log("iPhone X!");
    document.getElementById("for__js").innerText = "Width: " + w + q + "\n" + "Height: "+ h + q + "\n" + iphx;
    url = "./css/adaptive/iPhoneX.css";
  }
  if( w===1024 && h<=768 ){
    //--iPAD
    console.log("iPad!");
    document.getElementById("for__js").innerText = "Width: " + w + q + "\n" + "Height: "+ h + q + "\n" + ipd;
    url = "./css/adaptive/iPad.css";
  }

  else{
    if( w>=1800 && h>=950){
      console.log("COMPUTER");
      document.getElementById("for__js").innerText = "Width: " + w + q + "\n" + "Height: "+ h + q + "\n" + pc;
      url = "css/main.css"
    }
  }

    if( !myCSSsize )
    {
      myCSSsize = document.createElement('link');
      myCSSsize.id = 'adapt';
      myCSSsize.rel = 'stylesheet';
      myCSSsize.media = 'all';
      head.appendChild( myCSSsize );
    }
myCSSsize.href = url;
// записываем значение выбранного фона в Cookie
Cookie.set('sizer', url);
}
req( Cookie.get('sizer') );