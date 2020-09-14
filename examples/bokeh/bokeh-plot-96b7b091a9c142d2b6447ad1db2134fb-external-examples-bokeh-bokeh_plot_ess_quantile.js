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
    
      
      
    
      var element = document.getElementById("b0eaee79-44a4-494c-a61d-03ff53f0ba3e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b0eaee79-44a4-494c-a61d-03ff53f0ba3e' but no matching script tag was found.")
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
                    
                  var docs_json = '{"5368879a-7e35-49fe-89c3-1be433491e81":{"roots":{"references":[{"attributes":{"toolbars":[{"id":"72233"}],"tools":[{"id":"72223"},{"id":"72224"},{"id":"72225"},{"id":"72226"},{"id":"72227"},{"id":"72228"},{"id":"72229"},{"id":"72230"}]},"id":"72261","type":"ProxyToolbar"},{"attributes":{},"id":"72209","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"72231","type":"BoxAnnotation"},{"attributes":{},"id":"72211","type":"LinearScale"},{"attributes":{"toolbar":{"id":"72261"},"toolbar_location":"above"},"id":"72262","type":"ToolbarBox"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"72253"},"ticker":{"id":"72216"}},"id":"72215","type":"LinearAxis"},{"attributes":{},"id":"72216","type":"BasicTicker"},{"attributes":{"callback":null},"id":"72230","type":"HoverTool"},{"attributes":{},"id":"72251","type":"BasicTickFormatter"},{"attributes":{},"id":"72213","type":"LinearScale"},{"attributes":{"axis":{"id":"72215"},"ticker":null},"id":"72218","type":"Grid"},{"attributes":{},"id":"72257","type":"UnionRenderers"},{"attributes":{},"id":"72258","type":"Selection"},{"attributes":{"axis":{"id":"72219"},"dimension":1,"ticker":null},"id":"72222","type":"Grid"},{"attributes":{"below":[{"id":"72215"}],"center":[{"id":"72218"},{"id":"72222"}],"left":[{"id":"72219"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"72245"},{"id":"72247"}],"title":{"id":"72248"},"toolbar":{"id":"72233"},"toolbar_location":null,"x_range":{"id":"72207"},"x_scale":{"id":"72211"},"y_range":{"id":"72209"},"y_scale":{"id":"72213"}},"id":"72206","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"72232","type":"PolyAnnotation"},{"attributes":{},"id":"72220","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"72244","type":"Circle"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"72251"},"ticker":{"id":"72220"}},"id":"72219","type":"LinearAxis"},{"attributes":{"overlay":{"id":"72231"}},"id":"72225","type":"BoxZoomTool"},{"attributes":{},"id":"72224","type":"PanTool"},{"attributes":{},"id":"72223","type":"ResetTool"},{"attributes":{},"id":"72229","type":"SaveTool"},{"attributes":{},"id":"72253","type":"BasicTickFormatter"},{"attributes":{},"id":"72226","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"72232"}},"id":"72227","type":"LassoSelectTool"},{"attributes":{},"id":"72207","type":"DataRange1d"},{"attributes":{},"id":"72228","type":"UndoTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"72223"},{"id":"72224"},{"id":"72225"},{"id":"72226"},{"id":"72227"},{"id":"72228"},{"id":"72229"},{"id":"72230"}]},"id":"72233","type":"Toolbar"},{"attributes":{"children":[[{"id":"72206"},0,0]]},"id":"72260","type":"GridBox"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"72243","type":"Circle"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"72247","type":"Span"},{"attributes":{"data_source":{"id":"72242"},"glyph":{"id":"72243"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72244"},"selection_glyph":null,"view":{"id":"72246"}},"id":"72245","type":"GlyphRenderer"},{"attributes":{"source":{"id":"72242"}},"id":"72246","type":"CDSView"},{"attributes":{"children":[{"id":"72262"},{"id":"72260"}]},"id":"72263","type":"Column"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQDIUfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1AQsbCePPwnkB7Du/cq5qgQH8ihBoHoKBAh58qLZB5oECYlOwhLnyfQFgCvMP22p1AysGm42rqnEA6InuU09KdQLKWYY7d25xA+A/0ZSlsnEBpLBEly1mdQPcF40OedZlAEC7heDC7m0AxB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"72258"},"selection_policy":{"id":"72257"}},"id":"72242","type":"ColumnDataSource"},{"attributes":{"text":"sigma"},"id":"72248","type":"Title"}],"root_ids":["72263"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"5368879a-7e35-49fe-89c3-1be433491e81","root_ids":["72263"],"roots":{"72263":"b0eaee79-44a4-494c-a61d-03ff53f0ba3e"}}];
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