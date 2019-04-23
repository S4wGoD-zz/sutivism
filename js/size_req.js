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
  const w = window.innerWidth;
  const h = window.innerHeight;

            //Calc the resolution
  console.log("Width: " + w + ";");
  console.log("Height: " + h + ".");


  if ( w<=360 && h<=640 ){          //--Phone
    console.log("Phone!");
    url = "/css/adaptive/Phone.css";
  }
  if ( w<=375 && h<=812 ){          //--iPhone 6/7/8 Plus
    console.log("iPhone 6/7/8 Plus!");
    url = "/css/adaptive/iPhone678Plus.css";
  }
  if ( w<=414 && h<=736 ){          //--iPhone X
    console.log("iPhone X!");
    url = "/css/adaptive/iPhoneX.css";
  }
  if ( w<=1024 && h<=768 ){         //--iPAD
    console.log("iPAD");
    document.getElementById("for__js").innerText = "Width: " + w + "\n" + "Height: "+ h;
    url = "css/adaptive/iPad.css";
  }
  else{
    if( !myCSSsize )
    {
      myCSSsize = document.createElement('link');
      myCSSsize.id = 'adapt';
      myCSSsize.rel = 'stylesheet';
      myCSSsize.media = 'all';
      head.appendChild( myCSSsize );
    }
}
myCSSsize.href = url;
// записываем значение выбранного фона в Cookie
Cookie.set('sizer', url);
}
req( Cookie.get('sizer') );