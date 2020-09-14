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
    
      
      
    
      var element = document.getElementById("ebaf86cd-dabd-44ed-9339-5ffc76f1131f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ebaf86cd-dabd-44ed-9339-5ffc76f1131f' but no matching script tag was found.")
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
                    
                  var docs_json = '{"dafd1561-5b92-4df6-9b77-e59f69761ad5":{"roots":{"references":[{"attributes":{},"id":"89892","type":"DataRange1d"},{"attributes":{"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"89933","type":"MultiLine"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"+Pb8QR1Vsj+MDk73BYq3PyGJcH1IOro/R5qJktxXvD8QN5uHrHi+P+EQ5SCCFsA/nVhJgBDHwD+XHUgZYI7BP8j2F6KAXsI/quCp6LMbwz/9bt2KgNHDP6iPWFCyiMQ/uNKGtzpMxT8aURts6RbGP6Hdfy6V9cY/RM+ntqz9xz+OhgC/8fHIP+aFOeHb5sk//PpdgzyUyz/cM4wQ6vPNPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"89947"},"selection_policy":{"id":"89946"}},"id":"89927","type":"ColumnDataSource"},{"attributes":{"toolbars":[{"id":"89918"}],"tools":[{"id":"89908"},{"id":"89909"},{"id":"89910"},{"id":"89911"},{"id":"89912"},{"id":"89913"},{"id":"89914"},{"id":"89915"}]},"id":"89952","type":"ProxyToolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"89916","type":"BoxAnnotation"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"89934","type":"MultiLine"},{"attributes":{"source":{"id":"89932"}},"id":"89936","type":"CDSView"},{"attributes":{"text":"sigma_a"},"id":"89937","type":"Title"},{"attributes":{},"id":"89894","type":"DataRange1d"},{"attributes":{"axis":{"id":"89900"},"ticker":null},"id":"89903","type":"Grid"},{"attributes":{"toolbar":{"id":"89952"},"toolbar_location":"above"},"id":"89953","type":"ToolbarBox"},{"attributes":{"overlay":{"id":"89917"}},"id":"89912","type":"LassoSelectTool"},{"attributes":{},"id":"89898","type":"LinearScale"},{"attributes":{},"id":"89914","type":"SaveTool"},{"attributes":{},"id":"89901","type":"BasicTicker"},{"attributes":{},"id":"89940","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"89917","type":"PolyAnnotation"},{"attributes":{},"id":"89948","type":"UnionRenderers"},{"attributes":{},"id":"89949","type":"Selection"},{"attributes":{"data_source":{"id":"89927"},"glyph":{"id":"89928"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"89929"},"selection_glyph":null,"view":{"id":"89931"}},"id":"89930","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"89915","type":"HoverTool"},{"attributes":{"axis_label":"Value $\\\\pm$ MCSE for quantiles","formatter":{"id":"89940"},"ticker":{"id":"89905"}},"id":"89904","type":"LinearAxis"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"89942"},"ticker":{"id":"89901"}},"id":"89900","type":"LinearAxis"},{"attributes":{},"id":"89896","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"89929","type":"Dash"},{"attributes":{"axis":{"id":"89904"},"dimension":1,"ticker":null},"id":"89907","type":"Grid"},{"attributes":{},"id":"89911","type":"WheelZoomTool"},{"attributes":{},"id":"89905","type":"BasicTicker"},{"attributes":{"overlay":{"id":"89916"}},"id":"89910","type":"BoxZoomTool"},{"attributes":{},"id":"89942","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"89928","type":"Dash"},{"attributes":{},"id":"89909","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"89908"},{"id":"89909"},{"id":"89910"},{"id":"89911"},{"id":"89912"},{"id":"89913"},{"id":"89914"},{"id":"89915"}]},"id":"89918","type":"Toolbar"},{"attributes":{},"id":"89908","type":"ResetTool"},{"attributes":{"children":[[{"id":"89891"},0,0]]},"id":"89951","type":"GridBox"},{"attributes":{"children":[{"id":"89953"},{"id":"89951"}]},"id":"89954","type":"Column"},{"attributes":{},"id":"89947","type":"Selection"},{"attributes":{"below":[{"id":"89900"}],"center":[{"id":"89903"},{"id":"89907"}],"left":[{"id":"89904"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"89930"},{"id":"89935"}],"title":{"id":"89937"},"toolbar":{"id":"89918"},"toolbar_location":null,"x_range":{"id":"89892"},"x_scale":{"id":"89896"},"y_range":{"id":"89894"},"y_scale":{"id":"89898"}},"id":"89891","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"89946","type":"UnionRenderers"},{"attributes":{"data":{"xs":[[0.05,0.05],[0.09736842105263158,0.09736842105263158],[0.14473684210526316,0.14473684210526316],[0.19210526315789472,0.19210526315789472],[0.23947368421052628,0.23947368421052628],[0.28684210526315784,0.28684210526315784],[0.33421052631578946,0.33421052631578946],[0.381578947368421,0.381578947368421],[0.4289473684210526,0.4289473684210526],[0.47631578947368414,0.47631578947368414],[0.5236842105263158,0.5236842105263158],[0.5710526315789474,0.5710526315789474],[0.618421052631579,0.618421052631579],[0.6657894736842105,0.6657894736842105],[0.7131578947368421,0.7131578947368421],[0.7605263157894736,0.7605263157894736],[0.8078947368421052,0.8078947368421052],[0.8552631578947368,0.8552631578947368],[0.9026315789473683,0.9026315789473683],[0.95,0.95]],"ys":[[0.06542507260989384,0.07779740932825195],[0.08783828101486021,0.09606135597316004],[0.09938050528645676,0.10552315572600299],[0.10794861576931342,0.11348270780810846],[0.11602734321885094,0.12203033330056018],[0.12350211909750375,0.12787167939093885],[0.12891616867169003,0.13323376159544686],[0.13473004088066556,0.13958486303584752],[0.14096481555257187,0.1460531576744907],[0.14714684275886325,0.15141900007039433],[0.15249024001585332,0.15717175454660753],[0.15761692093229293,0.16322637365277673],[0.16410729163047846,0.16867037944462424],[0.17025660267247006,0.17489182297617661],[0.17657098829958856,0.18216819265595885],[0.185369502560243,0.18948857007780892],[0.19264880841245133,0.19711830100588604],[0.20027922695307082,0.2044362824100993],[0.2124901683329975,0.2184324622519046],[0.23108929611368745,0.2369230522137875]]},"selected":{"id":"89949"},"selection_policy":{"id":"89948"}},"id":"89932","type":"ColumnDataSource"},{"attributes":{"source":{"id":"89927"}},"id":"89931","type":"CDSView"},{"attributes":{"data_source":{"id":"89932"},"glyph":{"id":"89933"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"89934"},"selection_glyph":null,"view":{"id":"89936"}},"id":"89935","type":"GlyphRenderer"},{"attributes":{},"id":"89913","type":"UndoTool"}],"root_ids":["89954"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"dafd1561-5b92-4df6-9b77-e59f69761ad5","root_ids":["89954"],"roots":{"89954":"ebaf86cd-dabd-44ed-9339-5ffc76f1131f"}}];
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