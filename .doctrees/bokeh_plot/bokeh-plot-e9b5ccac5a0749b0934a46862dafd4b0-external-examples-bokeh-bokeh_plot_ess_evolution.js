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
    
      
      
    
      var element = document.getElementById("fe8b3027-0499-4bf1-b387-fd104ca968ab");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fe8b3027-0499-4bf1-b387-fd104ca968ab' but no matching script tag was found.")
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
                    
                  var docs_json = '{"a29cd1d2-6a0d-414f-bea1-13daf4849616":{"roots":{"references":[{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"72003","type":"Line"},{"attributes":{"toolbar":{"id":"72034"},"toolbar_location":"above"},"id":"72035","type":"ToolbarBox"},{"attributes":{"data_source":{"id":"71991"},"glyph":{"id":"71992"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71993"},"selection_glyph":null,"view":{"id":"71995"}},"id":"71994","type":"GlyphRenderer"},{"attributes":{},"id":"71977","type":"UndoTool"},{"attributes":{"click_policy":"hide","items":[{"id":"72013"},{"id":"72014"}],"location":"center_right","orientation":"horizontal"},"id":"72012","type":"Legend"},{"attributes":{},"id":"71969","type":"BasicTicker"},{"attributes":{},"id":"72020","type":"BasicTickFormatter"},{"attributes":{},"id":"72024","type":"UnionRenderers"},{"attributes":{},"id":"71978","type":"SaveTool"},{"attributes":{"overlay":{"id":"71981"}},"id":"71976","type":"LassoSelectTool"},{"attributes":{},"id":"72029","type":"Selection"},{"attributes":{"axis_label":"ESS","formatter":{"id":"72018"},"ticker":{"id":"71969"}},"id":"71968","type":"LinearAxis"},{"attributes":{"toolbars":[{"id":"71982"}],"tools":[{"id":"71972"},{"id":"71973"},{"id":"71974"},{"id":"71975"},{"id":"71976"},{"id":"71977"},{"id":"71978"},{"id":"71979"}]},"id":"72034","type":"ProxyToolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"71992","type":"Circle"},{"attributes":{},"id":"71975","type":"WheelZoomTool"},{"attributes":{},"id":"72025","type":"Selection"},{"attributes":{"above":[{"id":"72012"}],"below":[{"id":"71964"}],"center":[{"id":"71967"},{"id":"71971"}],"left":[{"id":"71968"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"71994"},{"id":"71999"},{"id":"72004"},{"id":"72009"},{"id":"72011"}],"title":{"id":"72015"},"toolbar":{"id":"71982"},"toolbar_location":null,"x_range":{"id":"71956"},"x_scale":{"id":"71960"},"y_range":{"id":"71958"},"y_scale":{"id":"71962"}},"id":"71955","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"72001"}},"id":"72005","type":"CDSView"},{"attributes":{},"id":"72026","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"71980"}},"id":"71974","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"72007","type":"Circle"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"71997","type":"Line"},{"attributes":{"axis":{"id":"71968"},"dimension":1,"ticker":null},"id":"71971","type":"Grid"},{"attributes":{"data_source":{"id":"72001"},"glyph":{"id":"72002"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72003"},"selection_glyph":null,"view":{"id":"72005"}},"id":"72004","type":"GlyphRenderer"},{"attributes":{},"id":"72031","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"71980","type":"BoxAnnotation"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"72002","type":"Line"},{"attributes":{},"id":"71965","type":"BasicTicker"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"72020"},"ticker":{"id":"71965"}},"id":"71964","type":"LinearAxis"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"72009"},{"id":"72004"}]},"id":"72014","type":"LegendItem"},{"attributes":{"axis":{"id":"71964"},"ticker":null},"id":"71967","type":"Grid"},{"attributes":{"data_source":{"id":"72006"},"glyph":{"id":"72007"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72008"},"selection_glyph":null,"view":{"id":"72010"}},"id":"72009","type":"GlyphRenderer"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"71994"},{"id":"71999"}]},"id":"72013","type":"LegendItem"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkAD5BVCu9ZkQIkda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"72031"},"selection_policy":{"id":"72030"}},"id":"72006","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"72035"},{"id":"72033"}]},"id":"72036","type":"Column"},{"attributes":{"source":{"id":"71996"}},"id":"72000","type":"CDSView"},{"attributes":{"text":"b"},"id":"72015","type":"Title"},{"attributes":{},"id":"71972","type":"ResetTool"},{"attributes":{},"id":"71960","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBoscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"72025"},"selection_policy":{"id":"72024"}},"id":"71991","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"71972"},{"id":"71973"},{"id":"71974"},{"id":"71975"},{"id":"71976"},{"id":"71977"},{"id":"71978"},{"id":"71979"}]},"id":"71982","type":"Toolbar"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"71981","type":"PolyAnnotation"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkAD5BVCu9ZkQIkda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"72029"},"selection_policy":{"id":"72028"}},"id":"72001","type":"ColumnDataSource"},{"attributes":{},"id":"72028","type":"UnionRenderers"},{"attributes":{},"id":"71973","type":"PanTool"},{"attributes":{},"id":"71958","type":"DataRange1d"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBoscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"72027"},"selection_policy":{"id":"72026"}},"id":"71996","type":"ColumnDataSource"},{"attributes":{},"id":"72018","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"72006"}},"id":"72010","type":"CDSView"},{"attributes":{"children":[[{"id":"71955"},0,0]]},"id":"72033","type":"GridBox"},{"attributes":{"callback":null},"id":"71979","type":"HoverTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"71998","type":"Line"},{"attributes":{},"id":"72027","type":"Selection"},{"attributes":{"source":{"id":"71991"}},"id":"71995","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"71993","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"72008","type":"Circle"},{"attributes":{},"id":"72030","type":"UnionRenderers"},{"attributes":{},"id":"71962","type":"LinearScale"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"72011","type":"Span"},{"attributes":{},"id":"71956","type":"DataRange1d"},{"attributes":{"data_source":{"id":"71996"},"glyph":{"id":"71997"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71998"},"selection_glyph":null,"view":{"id":"72000"}},"id":"71999","type":"GlyphRenderer"}],"root_ids":["72036"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"a29cd1d2-6a0d-414f-bea1-13daf4849616","root_ids":["72036"],"roots":{"72036":"fe8b3027-0499-4bf1-b387-fd104ca968ab"}}];
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