function URLs() {
    let input = document.getElementById("url");
    input.oninput = (event) => {
        let text = document.getElementById("t");
        if(!event.target.value) return; 
     
        let urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
        let result = event.target.value.replace(urlRegex, function (url) {
          var hyperlink = url;
          if (!hyperlink.match('^https?:\/\/')) {
            hyperlink = 'http://' + hyperlink;
          }
          return '<a href="' + hyperlink + '" target="_blank" >' + url + '</a>'
        });
          return text.innerHTML = result;
    }
    }
URLs();