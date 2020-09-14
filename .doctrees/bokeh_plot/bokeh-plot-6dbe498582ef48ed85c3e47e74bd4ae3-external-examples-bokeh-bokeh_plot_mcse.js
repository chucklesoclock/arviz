(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("e3810ed5-9bb8-4051-afb4-97378c3f92a6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e3810ed5-9bb8-4051-afb4-97378c3f92a6' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.1.min.js": "qkRvDQVAIfzsJo40iRBbxt6sttt0hv4lh74DG7OK4MCHv4C5oohXYoHUM5W11uqS", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.1.min.js": "Sb7Mr06a9TNlet/GEBeKaf5xH3eb6AlCzwjtU82wNPyDrnfoiVl26qnvlKjmcAd+", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.1.min.js": "HaJ15vgfmcfRtB4c4YBOI4f1MUujukqInOWVqZJZZGK7Q+ivud0OKGSTn/Vm2iso"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.1.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"b1d80547-8755-4699-879d-3bab230a5a78":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"89736","type":"BoxAnnotation"},{"attributes":{},"id":"89778","type":"BasicTickFormatter"},{"attributes":{"end":1,"start":-0.05},"id":"89678","type":"DataRange1d"},{"attributes":{"callback":null},"id":"89699","type":"HoverTool"},{"attributes":{},"id":"89698","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"89748","type":"Circle"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"89737","type":"PolyAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"89728"},{"id":"89729"},{"id":"89730"},{"id":"89731"},{"id":"89732"},{"id":"89733"},{"id":"89734"},{"id":"89735"}]},"id":"89738","type":"Toolbar"},{"attributes":{},"id":"89682","type":"LinearScale"},{"attributes":{},"id":"89794","type":"UnionRenderers"},{"attributes":{"below":[{"id":"89720"}],"center":[{"id":"89723"},{"id":"89727"}],"left":[{"id":"89724"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"89764"},{"id":"89766"},{"id":"89767"},{"id":"89768"},{"id":"89771"}],"title":{"id":"89773"},"toolbar":{"id":"89738"},"toolbar_location":null,"x_range":{"id":"89712"},"x_scale":{"id":"89716"},"y_range":{"id":"89714"},"y_scale":{"id":"89718"}},"id":"89711","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"89700","type":"BoxAnnotation"},{"attributes":{},"id":"89795","type":"Selection"},{"attributes":{},"id":"89796","type":"UnionRenderers"},{"attributes":{},"id":"89797","type":"Selection"},{"attributes":{},"id":"89685","type":"BasicTicker"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"89785"},"selection_policy":{"id":"89784"}},"id":"89756","type":"ColumnDataSource"},{"attributes":{"source":{"id":"89747"}},"id":"89751","type":"CDSView"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"89701","type":"PolyAnnotation"},{"attributes":{"source":{"id":"89756"}},"id":"89758","type":"CDSView"},{"attributes":{"overlay":{"id":"89700"}},"id":"89694","type":"BoxZoomTool"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"89755","type":"Dash"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238711},"id":"89752","type":"Span"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.17824444314769777},"id":"89753","type":"Span"},{"attributes":{},"id":"89782","type":"UnionRenderers"},{"attributes":{},"id":"89697","type":"UndoTool"},{"attributes":{"data_source":{"id":"89756"},"glyph":{"id":"89755"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"89758"}},"id":"89757","type":"GlyphRenderer"},{"attributes":{},"id":"89783","type":"Selection"},{"attributes":{"text":"tau"},"id":"89759","type":"Title"},{"attributes":{"children":[[{"id":"89675"},0,0],[{"id":"89711"},0,1]]},"id":"89799","type":"GridBox"},{"attributes":{"source":{"id":"89770"}},"id":"89772","type":"CDSView"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"89754","type":"Span"},{"attributes":{},"id":"89689","type":"BasicTicker"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"89797"},"selection_policy":{"id":"89796"}},"id":"89770","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"89801"},{"id":"89799"}]},"id":"89802","type":"Column"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"89768","type":"Span"},{"attributes":{},"id":"89676","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"89763","type":"Circle"},{"attributes":{},"id":"89784","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"89762","type":"Circle"},{"attributes":{},"id":"89785","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"89795"},"selection_policy":{"id":"89794"}},"id":"89761","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"89688"},"dimension":1,"ticker":null},"id":"89691","type":"Grid"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"89778"},"ticker":{"id":"89685"}},"id":"89684","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"89692"},{"id":"89693"},{"id":"89694"},{"id":"89695"},{"id":"89696"},{"id":"89697"},{"id":"89698"},{"id":"89699"}]},"id":"89702","type":"Toolbar"},{"attributes":{"source":{"id":"89761"}},"id":"89765","type":"CDSView"},{"attributes":{"data_source":{"id":"89761"},"glyph":{"id":"89762"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"89763"},"selection_glyph":null,"view":{"id":"89765"}},"id":"89764","type":"GlyphRenderer"},{"attributes":{"toolbars":[{"id":"89702"},{"id":"89738"}],"tools":[{"id":"89692"},{"id":"89693"},{"id":"89694"},{"id":"89695"},{"id":"89696"},{"id":"89697"},{"id":"89698"},{"id":"89699"},{"id":"89728"},{"id":"89729"},{"id":"89730"},{"id":"89731"},{"id":"89732"},{"id":"89733"},{"id":"89734"},{"id":"89735"}]},"id":"89800","type":"ProxyToolbar"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"89776"},"ticker":{"id":"89689"}},"id":"89688","type":"LinearAxis"},{"attributes":{"data_source":{"id":"89747"},"glyph":{"id":"89748"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"89749"},"selection_glyph":null,"view":{"id":"89751"}},"id":"89750","type":"GlyphRenderer"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"89790"},"ticker":{"id":"89721"}},"id":"89720","type":"LinearAxis"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"89769","type":"Dash"},{"attributes":{"end":1,"start":-0.05},"id":"89714","type":"DataRange1d"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.21484300137312468},"id":"89766","type":"Span"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"89788"},"ticker":{"id":"89725"}},"id":"89724","type":"LinearAxis"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716425007633},"id":"89767","type":"Span"},{"attributes":{},"id":"89692","type":"ResetTool"},{"attributes":{},"id":"89716","type":"LinearScale"},{"attributes":{"data_source":{"id":"89770"},"glyph":{"id":"89769"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"89772"}},"id":"89771","type":"GlyphRenderer"},{"attributes":{"text":"mu"},"id":"89773","type":"Title"},{"attributes":{},"id":"89718","type":"LinearScale"},{"attributes":{"callback":null},"id":"89735","type":"HoverTool"},{"attributes":{},"id":"89680","type":"LinearScale"},{"attributes":{"overlay":{"id":"89701"}},"id":"89696","type":"LassoSelectTool"},{"attributes":{},"id":"89721","type":"BasicTicker"},{"attributes":{"axis":{"id":"89720"},"ticker":null},"id":"89723","type":"Grid"},{"attributes":{"toolbar":{"id":"89800"},"toolbar_location":"above"},"id":"89801","type":"ToolbarBox"},{"attributes":{},"id":"89712","type":"DataRange1d"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"89783"},"selection_policy":{"id":"89782"}},"id":"89747","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"89724"},"dimension":1,"ticker":null},"id":"89727","type":"Grid"},{"attributes":{},"id":"89788","type":"BasicTickFormatter"},{"attributes":{},"id":"89725","type":"BasicTicker"},{"attributes":{},"id":"89695","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"89749","type":"Circle"},{"attributes":{"overlay":{"id":"89736"}},"id":"89730","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"89684"}],"center":[{"id":"89687"},{"id":"89691"}],"left":[{"id":"89688"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"89750"},{"id":"89752"},{"id":"89753"},{"id":"89754"},{"id":"89757"}],"title":{"id":"89759"},"toolbar":{"id":"89702"},"toolbar_location":null,"x_range":{"id":"89676"},"x_scale":{"id":"89680"},"y_range":{"id":"89678"},"y_scale":{"id":"89682"}},"id":"89675","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"89693","type":"PanTool"},{"attributes":{},"id":"89729","type":"PanTool"},{"attributes":{},"id":"89776","type":"BasicTickFormatter"},{"attributes":{},"id":"89728","type":"ResetTool"},{"attributes":{},"id":"89734","type":"SaveTool"},{"attributes":{"axis":{"id":"89684"},"ticker":null},"id":"89687","type":"Grid"},{"attributes":{},"id":"89731","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"89737"}},"id":"89732","type":"LassoSelectTool"},{"attributes":{},"id":"89733","type":"UndoTool"},{"attributes":{},"id":"89790","type":"BasicTickFormatter"}],"root_ids":["89802"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"b1d80547-8755-4699-879d-3bab230a5a78","root_ids":["89802"],"roots":{"89802":"e3810ed5-9bb8-4051-afb4-97378c3f92a6"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();