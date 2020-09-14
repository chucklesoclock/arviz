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
    
      
      
    
      var element = document.getElementById("54079083-e96b-400d-8cb8-d97eb3044a65");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '54079083-e96b-400d-8cb8-d97eb3044a65' but no matching script tag was found.")
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
                    
                  var docs_json = '{"611be8b0-81ee-41dc-9563-2db461af4211":{"roots":{"references":[{"attributes":{"source":{"id":"71752"}},"id":"71754","type":"CDSView"},{"attributes":{"overlay":{"id":"71741"}},"id":"71736","type":"LassoSelectTool"},{"attributes":{},"id":"71737","type":"UndoTool"},{"attributes":{},"id":"71765","type":"Selection"},{"attributes":{"callback":null},"id":"71739","type":"HoverTool"},{"attributes":{},"id":"71733","type":"PanTool"},{"attributes":{"toolbar":{"id":"71768"},"toolbar_location":"above"},"id":"71769","type":"ToolbarBox"},{"attributes":{"children":[[{"id":"71715"},0,0]]},"id":"71767","type":"GridBox"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"71732"},{"id":"71733"},{"id":"71734"},{"id":"71735"},{"id":"71736"},{"id":"71737"},{"id":"71738"},{"id":"71739"}]},"id":"71742","type":"Toolbar"},{"attributes":{},"id":"71716","type":"DataRange1d"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"71758"},"ticker":{"id":"71729"}},"id":"71728","type":"LinearAxis"},{"attributes":{},"id":"71738","type":"SaveTool"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"71755","type":"Title"},{"attributes":{},"id":"71758","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"71728"},"dimension":1,"ticker":null},"id":"71731","type":"Grid"},{"attributes":{"below":[{"id":"71724"}],"center":[{"id":"71727"},{"id":"71731"}],"left":[{"id":"71728"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"71753"}],"title":{"id":"71755"},"toolbar":{"id":"71742"},"toolbar_location":null,"x_range":{"id":"71716"},"x_scale":{"id":"71720"},"y_range":{"id":"71718"},"y_scale":{"id":"71722"}},"id":"71715","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"71735","type":"WheelZoomTool"},{"attributes":{},"id":"71764","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"71740","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"71760"},"ticker":{"id":"71725"}},"id":"71724","type":"LinearAxis"},{"attributes":{"children":[{"id":"71769"},{"id":"71767"}]},"id":"71770","type":"Column"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"71741","type":"PolyAnnotation"},{"attributes":{},"id":"71720","type":"LinearScale"},{"attributes":{},"id":"71760","type":"BasicTickFormatter"},{"attributes":{},"id":"71725","type":"BasicTicker"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"71765"},"selection_policy":{"id":"71764"}},"id":"71752","type":"ColumnDataSource"},{"attributes":{},"id":"71718","type":"DataRange1d"},{"attributes":{"toolbars":[{"id":"71742"}],"tools":[{"id":"71732"},{"id":"71733"},{"id":"71734"},{"id":"71735"},{"id":"71736"},{"id":"71737"},{"id":"71738"},{"id":"71739"}]},"id":"71768","type":"ProxyToolbar"},{"attributes":{},"id":"71732","type":"ResetTool"},{"attributes":{"overlay":{"id":"71740"}},"id":"71734","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"71752"},"glyph":{"id":"71751"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"71754"}},"id":"71753","type":"GlyphRenderer"},{"attributes":{},"id":"71722","type":"LinearScale"},{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"71751","type":"Cross"},{"attributes":{"axis":{"id":"71724"},"ticker":null},"id":"71727","type":"Grid"},{"attributes":{},"id":"71729","type":"BasicTicker"}],"root_ids":["71770"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"611be8b0-81ee-41dc-9563-2db461af4211","root_ids":["71770"],"roots":{"71770":"54079083-e96b-400d-8cb8-d97eb3044a65"}}];
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