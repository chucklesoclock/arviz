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
    
      
      
    
      var element = document.getElementById("ac2f2380-958c-49cd-8f09-136f94a1ef6c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ac2f2380-958c-49cd-8f09-136f94a1ef6c' but no matching script tag was found.")
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
                    
                  var docs_json = '{"8bcf5855-3114-45b3-8974-6d2942108bf1":{"roots":{"references":[{"attributes":{"formatter":{"id":"69595"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"ticker":{"id":"69565"}},"id":"69542","type":"LinearAxis"},{"attributes":{"data":{"xs":[[-32.01175255298632,-29.362828083793303],[-32.07685317017326,-29.54389518302684]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"69607"},"selection_policy":{"id":"69606"}},"id":"69582","type":"ColumnDataSource"},{"attributes":{},"id":"69552","type":"SaveTool"},{"attributes":{"children":[{"id":"69613"},{"id":"69611"}]},"id":"69614","type":"Column"},{"attributes":{"data_source":{"id":"69567"},"glyph":{"id":"69568"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69569"},"selection_glyph":null,"view":{"id":"69571"}},"id":"69570","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"69555","type":"PolyAnnotation"},{"attributes":{},"id":"69600","type":"UnionRenderers"},{"attributes":{"source":{"id":"69587"}},"id":"69591","type":"CDSView"},{"attributes":{},"id":"69608","type":"UnionRenderers"},{"attributes":{"axis":{"id":"69542"},"dimension":1,"ticker":null},"id":"69545","type":"Grid"},{"attributes":{"data":{"x":[-30.687290318389813,-30.81037417660005],"y":[0.0,-1.0]},"selected":{"id":"69605"},"selection_policy":{"id":"69604"}},"id":"69577","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"69568","type":"Triangle"},{"attributes":{},"id":"69602","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"69569","type":"Triangle"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"69583","type":"MultiLine"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"69578","type":"Circle"},{"attributes":{"end":0.5,"start":-1.5},"id":"69532","type":"DataRange1d"},{"attributes":{},"id":"69609","type":"Selection"},{"attributes":{},"id":"69607","type":"Selection"},{"attributes":{},"id":"69539","type":"BasicTicker"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"69573","type":"MultiLine"},{"attributes":{},"id":"69596","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"69538"}],"center":[{"id":"69541"},{"id":"69545"}],"left":[{"id":"69542"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"69570"},{"id":"69575"},{"id":"69580"},{"id":"69585"},{"id":"69590"},{"id":"69592"}],"title":{"id":"69594"},"toolbar":{"id":"69556"},"toolbar_location":null,"x_range":{"id":"69530"},"x_scale":{"id":"69534"},"y_range":{"id":"69532"},"y_scale":{"id":"69536"}},"id":"69529","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"69579","type":"Circle"},{"attributes":{},"id":"69534","type":"LinearScale"},{"attributes":{"data_source":{"id":"69577"},"glyph":{"id":"69578"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69579"},"selection_glyph":null,"view":{"id":"69581"}},"id":"69580","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"69538"},"ticker":null},"id":"69541","type":"Grid"},{"attributes":{"data":{"x":[-30.81037417660005],"y":[-0.75]},"selected":{"id":"69601"},"selection_policy":{"id":"69600"}},"id":"69567","type":"ColumnDataSource"},{"attributes":{"source":{"id":"69567"}},"id":"69571","type":"CDSView"},{"attributes":{},"id":"69603","type":"Selection"},{"attributes":{"source":{"id":"69582"}},"id":"69586","type":"CDSView"},{"attributes":{"callback":null},"id":"69553","type":"HoverTool"},{"attributes":{"data_source":{"id":"69572"},"glyph":{"id":"69573"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69574"},"selection_glyph":null,"view":{"id":"69576"}},"id":"69575","type":"GlyphRenderer"},{"attributes":{"toolbar":{"id":"69612"},"toolbar_location":"above"},"id":"69613","type":"ToolbarBox"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"69588","type":"Circle"},{"attributes":{"toolbars":[{"id":"69556"}],"tools":[{"id":"69546"},{"id":"69547"},{"id":"69548"},{"id":"69549"},{"id":"69550"},{"id":"69551"},{"id":"69552"},{"id":"69553"}]},"id":"69612","type":"ProxyToolbar"},{"attributes":{},"id":"69604","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"69529"},0,0]]},"id":"69611","type":"GridBox"},{"attributes":{"data_source":{"id":"69582"},"glyph":{"id":"69583"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69584"},"selection_glyph":null,"view":{"id":"69586"}},"id":"69585","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"69546"},{"id":"69547"},{"id":"69548"},{"id":"69549"},{"id":"69550"},{"id":"69551"},{"id":"69552"},{"id":"69553"}]},"id":"69556","type":"Toolbar"},{"attributes":{},"id":"69605","type":"Selection"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"69592","type":"Span"},{"attributes":{},"id":"69546","type":"ResetTool"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"69584","type":"MultiLine"},{"attributes":{},"id":"69549","type":"WheelZoomTool"},{"attributes":{},"id":"69606","type":"UnionRenderers"},{"attributes":{},"id":"69547","type":"PanTool"},{"attributes":{},"id":"69551","type":"UndoTool"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"69565","type":"FixedTicker"},{"attributes":{"overlay":{"id":"69555"}},"id":"69550","type":"LassoSelectTool"},{"attributes":{},"id":"69595","type":"BasicTickFormatter"},{"attributes":{},"id":"69536","type":"LinearScale"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"69574","type":"MultiLine"},{"attributes":{"overlay":{"id":"69554"}},"id":"69548","type":"BoxZoomTool"},{"attributes":{"axis_label":"Log","formatter":{"id":"69596"},"ticker":{"id":"69539"}},"id":"69538","type":"LinearAxis"},{"attributes":{"source":{"id":"69577"}},"id":"69581","type":"CDSView"},{"attributes":{"data":{"x":[-32.37106695144684,-32.71848009989285],"y":[0.0,-1.0]},"selected":{"id":"69609"},"selection_policy":{"id":"69608"}},"id":"69587","type":"ColumnDataSource"},{"attributes":{"text":""},"id":"69594","type":"Title"},{"attributes":{"data_source":{"id":"69587"},"glyph":{"id":"69588"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69589"},"selection_glyph":null,"view":{"id":"69591"}},"id":"69590","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"69554","type":"BoxAnnotation"},{"attributes":{},"id":"69530","type":"DataRange1d"},{"attributes":{"source":{"id":"69572"}},"id":"69576","type":"CDSView"},{"attributes":{"data":{"xs":[[-30.896420573800537,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"69603"},"selection_policy":{"id":"69602"}},"id":"69572","type":"ColumnDataSource"},{"attributes":{},"id":"69601","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"69589","type":"Circle"}],"root_ids":["69614"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"8bcf5855-3114-45b3-8974-6d2942108bf1","root_ids":["69614"],"roots":{"69614":"ac2f2380-958c-49cd-8f09-136f94a1ef6c"}}];
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