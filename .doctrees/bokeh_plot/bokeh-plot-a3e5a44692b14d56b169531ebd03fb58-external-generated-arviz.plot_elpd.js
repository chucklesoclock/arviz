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
    
      
      
    
      var element = document.getElementById("e1b917e0-1d24-40e8-9546-7426ffe5701e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e1b917e0-1d24-40e8-9546-7426ffe5701e' but no matching script tag was found.")
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
                    
                  var docs_json = '{"c89dfb2b-28b2-4755-9918-9ece2f848800":{"roots":{"references":[{"attributes":{},"id":"104359","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"104351"}},"id":"104353","type":"CDSView"},{"attributes":{"formatter":{"id":"104359"},"ticker":{"id":"104324"}},"id":"104323","type":"LinearAxis"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"104364"},"selection_policy":{"id":"104363"}},"id":"104351","type":"ColumnDataSource"},{"attributes":{},"id":"104328","type":"BasicTicker"},{"attributes":{},"id":"104324","type":"BasicTicker"},{"attributes":{"axis":{"id":"104327"},"dimension":1,"ticker":null},"id":"104330","type":"Grid"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"104357"},"ticker":{"id":"104328"}},"id":"104327","type":"LinearAxis"},{"attributes":{},"id":"104317","type":"DataRange1d"},{"attributes":{"children":[{"id":"104368"},{"id":"104366"}]},"id":"104369","type":"Column"},{"attributes":{},"id":"104337","type":"SaveTool"},{"attributes":{"overlay":{"id":"104340"}},"id":"104335","type":"LassoSelectTool"},{"attributes":{},"id":"104315","type":"DataRange1d"},{"attributes":{"overlay":{"id":"104339"}},"id":"104333","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"104323"}],"center":[{"id":"104326"},{"id":"104330"}],"left":[{"id":"104327"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"104352"}],"title":{"id":"104354"},"toolbar":{"id":"104341"},"toolbar_location":null,"x_range":{"id":"104315"},"x_scale":{"id":"104319"},"y_range":{"id":"104317"},"y_scale":{"id":"104321"}},"id":"104314","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"104350","type":"Cross"},{"attributes":{"text":"centered model - non centered model"},"id":"104354","type":"Title"},{"attributes":{"axis":{"id":"104323"},"ticker":null},"id":"104326","type":"Grid"},{"attributes":{"callback":null},"id":"104338","type":"HoverTool"},{"attributes":{},"id":"104319","type":"LinearScale"},{"attributes":{"toolbar":{"id":"104367"},"toolbar_location":"above"},"id":"104368","type":"ToolbarBox"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"104339","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"104351"},"glyph":{"id":"104350"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"104353"}},"id":"104352","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"104331"},{"id":"104332"},{"id":"104333"},{"id":"104334"},{"id":"104335"},{"id":"104336"},{"id":"104337"},{"id":"104338"}]},"id":"104341","type":"Toolbar"},{"attributes":{},"id":"104357","type":"BasicTickFormatter"},{"attributes":{},"id":"104321","type":"LinearScale"},{"attributes":{},"id":"104363","type":"UnionRenderers"},{"attributes":{},"id":"104364","type":"Selection"},{"attributes":{},"id":"104334","type":"WheelZoomTool"},{"attributes":{},"id":"104331","type":"ResetTool"},{"attributes":{},"id":"104336","type":"UndoTool"},{"attributes":{"toolbars":[{"id":"104341"}],"tools":[{"id":"104331"},{"id":"104332"},{"id":"104333"},{"id":"104334"},{"id":"104335"},{"id":"104336"},{"id":"104337"},{"id":"104338"}]},"id":"104367","type":"ProxyToolbar"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"104340","type":"PolyAnnotation"},{"attributes":{"children":[[{"id":"104314"},0,0]]},"id":"104366","type":"GridBox"},{"attributes":{},"id":"104332","type":"PanTool"}],"root_ids":["104369"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"c89dfb2b-28b2-4755-9918-9ece2f848800","root_ids":["104369"],"roots":{"104369":"e1b917e0-1d24-40e8-9546-7426ffe5701e"}}];
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