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
    
      
      
    
      var element = document.getElementById("b51ad38c-9385-4512-b525-78ea5adc55b2");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b51ad38c-9385-4512-b525-78ea5adc55b2' but no matching script tag was found.")
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
                    
                  var docs_json = '{"d073b636-e529-4256-b827-700ff577b13f":{"roots":{"references":[{"attributes":{},"id":"71560","type":"DataRange1d"},{"attributes":{"axis":{"id":"71599"},"ticker":null},"id":"71602","type":"Grid"},{"attributes":{"bottom":{"value":0},"fill_alpha":{"value":0.1},"fill_color":{"value":"#000000"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#000000"},"right":{"field":"right"},"top":{"field":"top"}},"id":"71623","type":"Quad"},{"attributes":{},"id":"71634","type":"Selection"},{"attributes":{},"id":"71611","type":"ResetTool"},{"attributes":{},"id":"71580","type":"ResetTool"},{"attributes":{},"id":"71564","type":"LinearScale"},{"attributes":{"formatter":{"id":"71651"},"ticker":{"id":"71604"}},"id":"71603","type":"LinearAxis"},{"attributes":{},"id":"71581","type":"HelpTool"},{"attributes":{},"id":"71562","type":"DataRange1d"},{"attributes":{},"id":"71579","type":"SaveTool"},{"attributes":{},"id":"71612","type":"HelpTool"},{"attributes":{"overlay":{"id":"71582"}},"id":"71578","type":"BoxZoomTool"},{"attributes":{},"id":"71630","type":"BasicTickFormatter"},{"attributes":{},"id":"71633","type":"UnionRenderers"},{"attributes":{"text":""},"id":"71627","type":"Title"},{"attributes":{},"id":"71573","type":"BasicTicker"},{"attributes":{"data":{"left":[0,1,2,3,4,5,6,7,8,9,10,11,12],"right":[1,2,3,4,5,6,7,8,9,10,11,12,13],"top":{"__ndarray__":"2/l+arx0kz9qvHSTGAS2PyuHFtnO98M/XrpJDAIrxz9iEFg5tMjGP9NNYhBYOcQ/yXa+nxovvT+amZmZmZmpP5zEILByaKE/uB6F61G4jj/6fmq8dJN4P/yp8dJNYmA//Knx0k1iUD8=","dtype":"float64","order":"little","shape":[13]}},"selected":{"id":"71634"},"selection_policy":{"id":"71633"}},"id":"71621","type":"ColumnDataSource"},{"attributes":{},"id":"71659","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"71607"},{"id":"71608"},{"id":"71609"},{"id":"71610"},{"id":"71611"},{"id":"71612"}]},"id":"71614","type":"Toolbar"},{"attributes":{},"id":"71593","type":"DataRange1d"},{"attributes":{"formatter":{"id":"71630"},"ticker":{"id":"71569"}},"id":"71568","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[512]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[512]}},"selected":{"id":"71660"},"selection_policy":{"id":"71659"}},"id":"71637","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"71613"}},"id":"71609","type":"BoxZoomTool"},{"attributes":{"bottom":{"value":0},"fill_color":{"value":"#000000"},"left":{"field":"left"},"line_alpha":{"value":0},"line_color":{"value":"#000000"},"right":{"field":"right"},"top":{"field":"top"}},"id":"71622","type":"Quad"},{"attributes":{},"id":"71653","type":"BasicTickFormatter"},{"attributes":{},"id":"71591","type":"DataRange1d"},{"attributes":{},"id":"71607","type":"PanTool"},{"attributes":{},"id":"71600","type":"BasicTicker"},{"attributes":{},"id":"71660","type":"Selection"},{"attributes":{"source":{"id":"71621"}},"id":"71625","type":"CDSView"},{"attributes":{},"id":"71577","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"71599"}],"center":[{"id":"71602"},{"id":"71606"}],"left":[{"id":"71603"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"71640"}],"title":{"id":"71646"},"toolbar":{"id":"71614"},"x_range":{"id":"71591"},"x_scale":{"id":"71595"},"y_range":{"id":"71593"},"y_scale":{"id":"71597"}},"id":"71590","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"71653"},"ticker":{"id":"71600"}},"id":"71599","type":"LinearAxis"},{"attributes":{"source":{"id":"71637"}},"id":"71641","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"71582","type":"BoxAnnotation"},{"attributes":{},"id":"71651","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"71576"},{"id":"71577"},{"id":"71578"},{"id":"71579"},{"id":"71580"},{"id":"71581"}]},"id":"71583","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"71639","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"71613","type":"BoxAnnotation"},{"attributes":{"items":[{"id":"71636"}]},"id":"71635","type":"Legend"},{"attributes":{"children":[{"id":"71559"},{"id":"71590"}]},"id":"71642","type":"Row"},{"attributes":{},"id":"71569","type":"BasicTicker"},{"attributes":{},"id":"71566","type":"LinearScale"},{"attributes":{"axis":{"id":"71568"},"ticker":null},"id":"71571","type":"Grid"},{"attributes":{},"id":"71628","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"Poisson"},"renderers":[{"id":"71624"}]},"id":"71636","type":"LegendItem"},{"attributes":{"data_source":{"id":"71621"},"glyph":{"id":"71622"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71623"},"selection_glyph":null,"view":{"id":"71625"}},"id":"71624","type":"GlyphRenderer"},{"attributes":{},"id":"71604","type":"BasicTicker"},{"attributes":{},"id":"71610","type":"SaveTool"},{"attributes":{},"id":"71597","type":"LinearScale"},{"attributes":{"axis":{"id":"71603"},"dimension":1,"ticker":null},"id":"71606","type":"Grid"},{"attributes":{"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"71638","type":"Line"},{"attributes":{"axis":{"id":"71572"},"dimension":1,"ticker":null},"id":"71575","type":"Grid"},{"attributes":{},"id":"71608","type":"WheelZoomTool"},{"attributes":{"text":""},"id":"71646","type":"Title"},{"attributes":{},"id":"71576","type":"PanTool"},{"attributes":{"formatter":{"id":"71628"},"ticker":{"id":"71573"}},"id":"71572","type":"LinearAxis"},{"attributes":{"below":[{"id":"71568"}],"center":[{"id":"71571"},{"id":"71575"},{"id":"71635"}],"left":[{"id":"71572"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"71624"}],"title":{"id":"71627"},"toolbar":{"id":"71583"},"x_range":{"id":"71560"},"x_scale":{"id":"71564"},"y_range":{"id":"71562"},"y_scale":{"id":"71566"}},"id":"71559","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"71595","type":"LinearScale"},{"attributes":{"data_source":{"id":"71637"},"glyph":{"id":"71638"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71639"},"selection_glyph":null,"view":{"id":"71641"}},"id":"71640","type":"GlyphRenderer"}],"root_ids":["71642"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"d073b636-e529-4256-b827-700ff577b13f","root_ids":["71642"],"roots":{"71642":"b51ad38c-9385-4512-b525-78ea5adc55b2"}}];
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