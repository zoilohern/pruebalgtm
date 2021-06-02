/*_supported = 
            (_mozilla && _version >= 1) || 
            (_msie && _version >= 6) ||
            (_opera && _version >= 9.5) ||
            (_webkit && _version >= 523);

        if (_supported) {
            if (_opera) {
                history.navigationMode = 'compatible';
            }
            if (document.readyState == 'complete') {
                var interval = setInterval(function() {
                    if ($.address) {
                        _load();
                        clearInterval(interval);
                    }
                }, 50);
            } else {
                _options();
                $(_load);
            }
            $(window).bind('popstate', _popstate).bind('unload', _unload);            
        } else if (!_supported && _hrefHash() !== '') {
            _l.replace(_l.href.substr(0, _l.href.indexOf('#')));
        } else {
            _track();
        }



      /*  resultado = prompt("Nombre please", "Nombre Prueba")
alert(resultado)*/

const express = require('express'); 
const xssFilters = require('xss-filters'); 
const util = require('util');  
const app = express();  
app.get('/', (req, res) => {   const unsafeFirstname = req.query.firstname;   
const safeFirstname = xssFilters.inHTMLData(unsafeFirstname);    
res.send(util.format('<h1>Tom%s</h1>', safeFirstname)); });  

app.listen(3000);