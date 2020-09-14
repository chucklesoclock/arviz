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
    
      
      
    
      var element = document.getElementById("18133078-ed56-4c8b-bbcc-70bd4b8d9a57");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '18133078-ed56-4c8b-bbcc-70bd4b8d9a57' but no matching script tag was found.")
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
                    
                  var docs_json = '{"010ef575-d78b-4731-a8d4-0eb2bfe383a2":{"roots":{"references":[{"attributes":{},"id":"73135","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"73123"}},"id":"73127","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]}},"selected":{"id":"73142"},"selection_policy":{"id":"73141"}},"id":"73123","type":"ColumnDataSource"},{"attributes":{},"id":"73109","type":"UndoTool"},{"attributes":{},"id":"73141","type":"UnionRenderers"},{"attributes":{},"id":"73090","type":"DataRange1d"},{"attributes":{},"id":"73110","type":"SaveTool"},{"attributes":{},"id":"73142","type":"Selection"},{"attributes":{"below":[{"id":"73096"}],"center":[{"id":"73099"},{"id":"73103"}],"left":[{"id":"73100"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"73126"},{"id":"73131"}],"title":{"id":"73134"},"toolbar":{"id":"73114"},"toolbar_location":"above","x_range":{"id":"73088"},"x_scale":{"id":"73092"},"y_range":{"id":"73090"},"y_scale":{"id":"73094"}},"id":"73087","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"73107","type":"WheelZoomTool"},{"attributes":{},"id":"73092","type":"LinearScale"},{"attributes":{"axis":{"id":"73100"},"dimension":1,"ticker":null},"id":"73103","type":"Grid"},{"attributes":{"fill_alpha":0.1,"fill_color":"#ff0000","line_alpha":0.1,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"73125","type":"Patch"},{"attributes":{},"id":"73144","type":"Selection"},{"attributes":{},"id":"73137","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"73113"}},"id":"73108","type":"LassoSelectTool"},{"attributes":{},"id":"73094","type":"LinearScale"},{"attributes":{"axis":{"id":"73096"},"ticker":null},"id":"73099","type":"Grid"},{"attributes":{"fill_alpha":0.5,"fill_color":"#ff0000","line_alpha":0,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"73124","type":"Patch"},{"attributes":{"formatter":{"id":"73137"},"ticker":{"id":"73097"}},"id":"73096","type":"LinearAxis"},{"attributes":{},"id":"73097","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"73112","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"73135"},"ticker":{"id":"73101"}},"id":"73100","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"73104"},{"id":"73105"},{"id":"73106"},{"id":"73107"},{"id":"73108"},{"id":"73109"},{"id":"73110"},{"id":"73111"}]},"id":"73114","type":"Toolbar"},{"attributes":{"source":{"id":"73128"}},"id":"73132","type":"CDSView"},{"attributes":{},"id":"73104","type":"ResetTool"},{"attributes":{"line_alpha":0.1,"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"73130","type":"Line"},{"attributes":{"data":{"x":{"__ndarray__":"R4DdSkrsAsCjJyUxfR4AwNfdk9QNAADAWnnDNa3z979kGtYea1H3v+ykvceMP/K/+4kiFPmq8b8PdguDc3rxvy7p0OrL9u+/UvaT/Fai778twMNXgKXtv5r0vwqk3uy/DVShQz+36r8TwPdHzJPpvzycOQFgYui/TZhE/zig57+wrXqHcUPnv1qrTWSZ5+W/oLzUI/B6478PBpVl4gjjv6vkbWO2hOG/dH4aYpp64b/gRjx79UjhvyaOHosuCuC/Fg6+dOYB37+mGEH2Z5vdvxhAmohs3tq/7FSFl/IG2b+n4hr5RiPUv5EUDdWu09O/vzTYQMiT0r+nLwZMQOfRv6x76W1PntC/F+yomCxq0L83mW8+LDXOv0MZMVxHMs6/LZNOgPiuzL8ZELmerEjIv6P0OC6Rtse/69vN9R2/wr8LSocj2NPBv1sKKh0o/cC/tTyr5KpPvL93qXnvKp+4v7UizSeM57O/c/AOnaB0sr+j07VXtfOxv7AzPkdHB7G/JWPnidrsrL+pvyKIeKKcv2RZxBGJyZg/bUXiW0S5mj9qK2ASlSepP+igv+Ejer4/ox65+WXGwj+7Zyx8osXDP/Q0Lz/Kacg/Rm+w4V3Fyj9CNhY0pHXLPyxkt//P1dA/9VYPeGRG0j8MFcafotTSPyyDYRWuLNM/OwMB9FfT1z+5EqE1LIrYP1RBCCSgLNk/Ky3IH4Y52j+3sZTZRtzbP1l6+vCGndw/SfzCS5PO3D/ne2j9s0jfP0YLxS/K7d8/B4AQMKBj4T+uStwbedziPyGDRFO5wuQ/rasaeSR85T+QIxjJPZLlP1RgzzAEqOU/FuevddpA5z/PGMCVC+ToP0FmeDM5Feo/MxRFPZJ86j/wYH+3JovqP4FhlgdqJ+w/HRdyi7Wg8T/PisnE3g/zP8bUfSTvMvM/IXGL2Xdq9T8Cz3QBw4b1P9QjvVzIjvY/2yc8FdJq+j+N+pHJJcj6PzdNrV8SWPw/6QBq/zkx/T9NoIqMoEv9P7RTVx76xf0/YT4ZjbPj/T87QYE3IQAAQD7/3mI0vwFAEAfu7fTAAkA=","dtype":"float64","order":"little","shape":[100]},"y":{"__ndarray__":"cv9Eamsn6j+6sLWdBcPvP1JE2Fbk/+8/U0MeZSkG9D/O8pRwSlf0P4otIZw54PY/ArvudYMq9z/4RHo+xkL3P7TFSwVNAvg/bALbQGoX+D/1Dw/qn5b4P9oCUP1WyPg//aoXLzBS+T/7DwLuDJv5P/GYsf9n5/k/7dkuwPEX+j+UVCGeIy/6PyqV7KYZhvo/2NAK90Mh+z98vppmxz37P9WGJGfSnvs/Y2B5Z1mh+z9I7jChwq37P3ZcOF10/fs/PT5oMcMf/D/r3DcBk0z8P/237G4ypPw/YlUPrSHf/D+ro9wgl3v9P25dXiWKhf0/aPnk94at/T8LOn/2F8P9P4rQQhI27P0/feLqbLry/T9tBhk8rRz+P2zuPIrbHP4/zRb7dxA1/j/+bhQ2dXv+P7ZwHO2WhP4/QSKjIA7U/j9fi8d9wuL+P1pfLX4t8P4/GqbaqIId/z+0MoSoBjv/P+qWwZ7DYP8/fIgX+1ps/z9jUUJVYnD/P2IOxsXFd/8/c2LYlUyM/z+Buu8Ou8b/P1nEEYnJGABAReJbRLkaAEBXwCQqTzIAQIT+ho/oeQBA9cjNLzOWAEA+Y+ETLZ4AQKh5+VFOwwBAeoMN7yrWAECysaAhrdsAQEN2+/9cDQFAb/WAR2YkAUBRYfwpSi0BQDMYVuHKMgFANBBAfzV9AUAsEVrDoogBQBWEQALKkgFA04L8YZijAUAbS5ltxL0BQKanD2/YyQFAxS+8NOnMAUC+h9Y/i/QBQLRQ/KLc/gFAARACBnQsAkBWiXsjj1sCQGSQaCpXmAJAdlUjj4SvAkByBCO5R7ICQArsGYYAtQJA4/y1ThvoAkAaA7hygRwDQMgMbyanQgNAhqKoR5JPA0Ae7O/WZFEDQDDM8kDthANAx4XcYi1oBEC0YjKx98MEQDJ1H8m7zARASNxi9p1aBUDAM13AsGEFQPVILxeyowVA9wlPhbSaBkCjfmRyCbIGQE5T65cEFgdAOoDaf05MB0ATqCIj6FIHQO3UlYd+cQdAmE9G4+x4B0CeoMCbEAAIQJ9/bzGa3whAiAP3dnpgCUA=","dtype":"float64","order":"little","shape":[100]}},"selected":{"id":"73144"},"selection_policy":{"id":"73143"}},"id":"73128","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"73112"}},"id":"73106","type":"BoxZoomTool"},{"attributes":{},"id":"73143","type":"UnionRenderers"},{"attributes":{},"id":"73101","type":"BasicTicker"},{"attributes":{},"id":"73088","type":"DataRange1d"},{"attributes":{"data_source":{"id":"73128"},"glyph":{"id":"73129"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"73130"},"selection_glyph":null,"view":{"id":"73132"}},"id":"73131","type":"GlyphRenderer"},{"attributes":{"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"73129","type":"Line"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"73113","type":"PolyAnnotation"},{"attributes":{},"id":"73105","type":"PanTool"},{"attributes":{"data_source":{"id":"73123"},"glyph":{"id":"73124"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"73125"},"selection_glyph":null,"view":{"id":"73127"}},"id":"73126","type":"GlyphRenderer"},{"attributes":{"text":""},"id":"73134","type":"Title"},{"attributes":{"callback":null},"id":"73111","type":"HoverTool"}],"root_ids":["73087"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"010ef575-d78b-4731-a8d4-0eb2bfe383a2","root_ids":["73087"],"roots":{"73087":"18133078-ed56-4c8b-bbcc-70bd4b8d9a57"}}];
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