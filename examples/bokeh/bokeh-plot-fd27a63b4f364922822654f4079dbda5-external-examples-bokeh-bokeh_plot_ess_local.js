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
    
      
      
    
      var element = document.getElementById("d156f2a4-8a55-4049-b996-dd45985620a7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd156f2a4-8a55-4049-b996-dd45985620a7' but no matching script tag was found.")
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
                    
                  var docs_json = '{"1f44d741-0f15-4fb8-9ab4-ac6e5ad9b059":{"roots":{"references":[{"attributes":{"toolbar":{"id":"72159"},"toolbar_location":"above"},"id":"72160","type":"ToolbarBox"},{"attributes":{"children":[[{"id":"72097"},0,0]]},"id":"72158","type":"GridBox"},{"attributes":{"overlay":{"id":"72123"}},"id":"72118","type":"LassoSelectTool"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"72147"},"ticker":{"id":"72111"}},"id":"72110","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"72134","type":"Circle"},{"attributes":{},"id":"72156","type":"Selection"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"72142","type":"Span"},{"attributes":{},"id":"72120","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"72135","type":"Circle"},{"attributes":{},"id":"72102","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"72122","type":"BoxAnnotation"},{"attributes":{"source":{"id":"72139"}},"id":"72141","type":"CDSView"},{"attributes":{},"id":"72107","type":"BasicTicker"},{"attributes":{"axis":{"id":"72110"},"dimension":1,"ticker":null},"id":"72113","type":"Grid"},{"attributes":{},"id":"72155","type":"UnionRenderers"},{"attributes":{},"id":"72154","type":"Selection"},{"attributes":{"axis":{"id":"72106"},"ticker":null},"id":"72109","type":"Grid"},{"attributes":{},"id":"72114","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"72114"},{"id":"72115"},{"id":"72116"},{"id":"72117"},{"id":"72118"},{"id":"72119"},{"id":"72120"},{"id":"72121"}]},"id":"72124","type":"Toolbar"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"72154"},"selection_policy":{"id":"72153"}},"id":"72133","type":"ColumnDataSource"},{"attributes":{},"id":"72149","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"72149"},"ticker":{"id":"72107"}},"id":"72106","type":"LinearAxis"},{"attributes":{"text":"mu"},"id":"72144","type":"Title"},{"attributes":{"data_source":{"id":"72133"},"glyph":{"id":"72134"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72135"},"selection_glyph":null,"view":{"id":"72137"}},"id":"72136","type":"GlyphRenderer"},{"attributes":{},"id":"72111","type":"BasicTicker"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"72156"},"selection_policy":{"id":"72155"}},"id":"72139","type":"ColumnDataSource"},{"attributes":{"toolbars":[{"id":"72124"}],"tools":[{"id":"72114"},{"id":"72115"},{"id":"72116"},{"id":"72117"},{"id":"72118"},{"id":"72119"},{"id":"72120"},{"id":"72121"}]},"id":"72159","type":"ProxyToolbar"},{"attributes":{"overlay":{"id":"72122"}},"id":"72116","type":"BoxZoomTool"},{"attributes":{"children":[{"id":"72160"},{"id":"72158"}]},"id":"72161","type":"Column"},{"attributes":{},"id":"72100","type":"DataRange1d"},{"attributes":{"callback":null},"id":"72121","type":"HoverTool"},{"attributes":{"below":[{"id":"72106"}],"center":[{"id":"72109"},{"id":"72113"}],"left":[{"id":"72110"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"72136"},{"id":"72140"},{"id":"72142"},{"id":"72143"}],"title":{"id":"72144"},"toolbar":{"id":"72124"},"toolbar_location":null,"x_range":{"id":"72098"},"x_scale":{"id":"72102"},"y_range":{"id":"72100"},"y_scale":{"id":"72104"}},"id":"72097","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"72117","type":"WheelZoomTool"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"72138","type":"Dash"},{"attributes":{"data_source":{"id":"72139"},"glyph":{"id":"72138"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"72141"}},"id":"72140","type":"GlyphRenderer"},{"attributes":{},"id":"72104","type":"LinearScale"},{"attributes":{},"id":"72119","type":"UndoTool"},{"attributes":{},"id":"72098","type":"DataRange1d"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"72123","type":"PolyAnnotation"},{"attributes":{"source":{"id":"72133"}},"id":"72137","type":"CDSView"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"72143","type":"Span"},{"attributes":{},"id":"72153","type":"UnionRenderers"},{"attributes":{},"id":"72115","type":"PanTool"},{"attributes":{},"id":"72147","type":"BasicTickFormatter"}],"root_ids":["72161"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"1f44d741-0f15-4fb8-9ab4-ac6e5ad9b059","root_ids":["72161"],"roots":{"72161":"d156f2a4-8a55-4049-b996-dd45985620a7"}}];
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