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
    
      
      
    
      var element = document.getElementById("11d7742b-c411-441c-ab60-7bf0d81c3f1d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '11d7742b-c411-441c-ab60-7bf0d81c3f1d' but no matching script tag was found.")
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
                    
                  var docs_json = '{"4fb21892-4be7-4043-8096-b5603f9edd27":{"roots":{"references":[{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"94307","type":"Span"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"94263","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"94309","type":"VBar"},{"attributes":{"callback":null},"id":"94216","type":"HoverTool"},{"attributes":{},"id":"94319","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"94218"}},"id":"94213","type":"LassoSelectTool"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"94346"},"selection_policy":{"id":"94345"}},"id":"94308","type":"ColumnDataSource"},{"attributes":{"source":{"id":"94308"}},"id":"94312","type":"CDSView"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"94301","type":"Span"},{"attributes":{"source":{"id":"94280"}},"id":"94284","type":"CDSView"},{"attributes":{},"id":"94233","type":"LinearScale"},{"attributes":{},"id":"94328","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"94285","type":"Span"},{"attributes":{},"id":"94209","type":"ResetTool"},{"attributes":{},"id":"94329","type":"Selection"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"94303","type":"VBar"},{"attributes":{"axis":{"id":"94205"},"dimension":1,"ticker":null},"id":"94208","type":"Grid"},{"attributes":{"source":{"id":"94290"}},"id":"94294","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"94251","type":"BoxAnnotation"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"94297","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"94298","type":"VBar"},{"attributes":{"data_source":{"id":"94290"},"glyph":{"id":"94291"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"94292"},"selection_glyph":null,"view":{"id":"94294"}},"id":"94293","type":"GlyphRenderer"},{"attributes":{},"id":"94214","type":"UndoTool"},{"attributes":{"axis":{"id":"94201"},"ticker":null},"id":"94204","type":"Grid"},{"attributes":{},"id":"94320","type":"BasicTickFormatter"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"94342"},"selection_policy":{"id":"94341"}},"id":"94296","type":"ColumnDataSource"},{"attributes":{"text":"tau"},"id":"94288","type":"Title"},{"attributes":{},"id":"94339","type":"UnionRenderers"},{"attributes":{},"id":"94340","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"94344"},"selection_policy":{"id":"94343"}},"id":"94302","type":"ColumnDataSource"},{"attributes":{},"id":"94330","type":"UnionRenderers"},{"attributes":{},"id":"94193","type":"DataRange1d"},{"attributes":{},"id":"94331","type":"Selection"},{"attributes":{},"id":"94215","type":"SaveTool"},{"attributes":{"source":{"id":"94296"}},"id":"94300","type":"CDSView"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"94252","type":"PolyAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"94217","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"94201"}],"center":[{"id":"94204"},{"id":"94208"},{"id":"94267"},{"id":"94273"},{"id":"94279"},{"id":"94285"}],"left":[{"id":"94205"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"94265"},{"id":"94271"},{"id":"94277"},{"id":"94283"}],"title":{"id":"94288"},"toolbar":{"id":"94219"},"toolbar_location":null,"x_range":{"id":"94193"},"x_scale":{"id":"94197"},"y_range":{"id":"94195"},"y_scale":{"id":"94199"}},"id":"94192","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"94341","type":"UnionRenderers"},{"attributes":{},"id":"94342","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"94209"},{"id":"94210"},{"id":"94211"},{"id":"94212"},{"id":"94213"},{"id":"94214"},{"id":"94215"},{"id":"94216"}]},"id":"94219","type":"Toolbar"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"94218","type":"PolyAnnotation"},{"attributes":{},"id":"94343","type":"UnionRenderers"},{"attributes":{},"id":"94195","type":"DataRange1d"},{"attributes":{},"id":"94344","type":"Selection"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"94291","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"94264","type":"VBar"},{"attributes":{},"id":"94334","type":"BasicTickFormatter"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"94267","type":"Span"},{"attributes":{"data_source":{"id":"94268"},"glyph":{"id":"94269"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"94270"},"selection_glyph":null,"view":{"id":"94272"}},"id":"94271","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"94270","type":"VBar"},{"attributes":{"source":{"id":"94262"}},"id":"94266","type":"CDSView"},{"attributes":{"ticks":[0,1,2,3]},"id":"94286","type":"FixedTicker"},{"attributes":{"data_source":{"id":"94262"},"glyph":{"id":"94263"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"94264"},"selection_glyph":null,"view":{"id":"94266"}},"id":"94265","type":"GlyphRenderer"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"94327"},"selection_policy":{"id":"94326"}},"id":"94268","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"94269","type":"VBar"},{"attributes":{"source":{"id":"94268"}},"id":"94272","type":"CDSView"},{"attributes":{},"id":"94197","type":"LinearScale"},{"attributes":{},"id":"94335","type":"BasicTickFormatter"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"94276","type":"VBar"},{"attributes":{},"id":"94345","type":"UnionRenderers"},{"attributes":{},"id":"94346","type":"Selection"},{"attributes":{"data_source":{"id":"94274"},"glyph":{"id":"94275"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"94276"},"selection_glyph":null,"view":{"id":"94278"}},"id":"94277","type":"GlyphRenderer"},{"attributes":{"axis_label":"Chain","formatter":{"id":"94319"},"ticker":{"id":"94286"}},"id":"94205","type":"LinearAxis"},{"attributes":{"axis":{"id":"94235"},"ticker":null},"id":"94238","type":"Grid"},{"attributes":{},"id":"94202","type":"BasicTicker"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"94275","type":"VBar"},{"attributes":{"callback":null},"id":"94250","type":"HoverTool"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"94273","type":"Span"},{"attributes":{"axis_label":"Chain","formatter":{"id":"94334"},"ticker":{"id":"94314"}},"id":"94239","type":"LinearAxis"},{"attributes":{"overlay":{"id":"94217"}},"id":"94211","type":"BoxZoomTool"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"94329"},"selection_policy":{"id":"94328"}},"id":"94274","type":"ColumnDataSource"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"94335"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"94236"}},"id":"94235","type":"LinearAxis"},{"attributes":{},"id":"94210","type":"PanTool"},{"attributes":{"source":{"id":"94274"}},"id":"94278","type":"CDSView"},{"attributes":{},"id":"94236","type":"BasicTicker"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"94282","type":"VBar"},{"attributes":{},"id":"94231","type":"LinearScale"},{"attributes":{"data_source":{"id":"94280"},"glyph":{"id":"94281"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"94282"},"selection_glyph":null,"view":{"id":"94284"}},"id":"94283","type":"GlyphRenderer"},{"attributes":{},"id":"94324","type":"UnionRenderers"},{"attributes":{},"id":"94325","type":"Selection"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"94281","type":"VBar"},{"attributes":{},"id":"94199","type":"LinearScale"},{"attributes":{"axis":{"id":"94239"},"dimension":1,"ticker":null},"id":"94242","type":"Grid"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"94279","type":"Span"},{"attributes":{"text":"mu"},"id":"94316","type":"Title"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"94331"},"selection_policy":{"id":"94330"}},"id":"94280","type":"ColumnDataSource"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"94325"},"selection_policy":{"id":"94324"}},"id":"94262","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"94302"},"glyph":{"id":"94303"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"94304"},"selection_glyph":null,"view":{"id":"94306"}},"id":"94305","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"94251"}},"id":"94245","type":"BoxZoomTool"},{"attributes":{"children":[[{"id":"94192"},0,0],[{"id":"94228"},0,1]]},"id":"94348","type":"GridBox"},{"attributes":{},"id":"94244","type":"PanTool"},{"attributes":{"source":{"id":"94302"}},"id":"94306","type":"CDSView"},{"attributes":{},"id":"94243","type":"ResetTool"},{"attributes":{"data_source":{"id":"94308"},"glyph":{"id":"94309"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"94310"},"selection_glyph":null,"view":{"id":"94312"}},"id":"94311","type":"GlyphRenderer"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"94340"},"selection_policy":{"id":"94339"}},"id":"94290","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"94304","type":"VBar"},{"attributes":{},"id":"94249","type":"SaveTool"},{"attributes":{"below":[{"id":"94235"}],"center":[{"id":"94238"},{"id":"94242"},{"id":"94295"},{"id":"94301"},{"id":"94307"},{"id":"94313"}],"left":[{"id":"94239"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"94293"},{"id":"94299"},{"id":"94305"},{"id":"94311"}],"title":{"id":"94316"},"toolbar":{"id":"94253"},"toolbar_location":null,"x_range":{"id":"94193"},"x_scale":{"id":"94231"},"y_range":{"id":"94195"},"y_scale":{"id":"94233"}},"id":"94228","subtype":"Figure","type":"Plot"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"94310","type":"VBar"},{"attributes":{},"id":"94246","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"94252"}},"id":"94247","type":"LassoSelectTool"},{"attributes":{"toolbars":[{"id":"94219"},{"id":"94253"}],"tools":[{"id":"94209"},{"id":"94210"},{"id":"94211"},{"id":"94212"},{"id":"94213"},{"id":"94214"},{"id":"94215"},{"id":"94216"},{"id":"94243"},{"id":"94244"},{"id":"94245"},{"id":"94246"},{"id":"94247"},{"id":"94248"},{"id":"94249"},{"id":"94250"}]},"id":"94349","type":"ProxyToolbar"},{"attributes":{},"id":"94248","type":"UndoTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"94243"},{"id":"94244"},{"id":"94245"},{"id":"94246"},{"id":"94247"},{"id":"94248"},{"id":"94249"},{"id":"94250"}]},"id":"94253","type":"Toolbar"},{"attributes":{},"id":"94326","type":"UnionRenderers"},{"attributes":{},"id":"94327","type":"Selection"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"94313","type":"Span"},{"attributes":{"children":[{"id":"94350"},{"id":"94348"}]},"id":"94351","type":"Column"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"94295","type":"Span"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"94320"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"94202"}},"id":"94201","type":"LinearAxis"},{"attributes":{"data_source":{"id":"94296"},"glyph":{"id":"94297"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"94298"},"selection_glyph":null,"view":{"id":"94300"}},"id":"94299","type":"GlyphRenderer"},{"attributes":{"ticks":[0,1,2,3]},"id":"94314","type":"FixedTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"94292","type":"VBar"},{"attributes":{"toolbar":{"id":"94349"},"toolbar_location":"above"},"id":"94350","type":"ToolbarBox"},{"attributes":{},"id":"94212","type":"WheelZoomTool"}],"root_ids":["94351"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"4fb21892-4be7-4043-8096-b5603f9edd27","root_ids":["94351"],"roots":{"94351":"11d7742b-c411-441c-ab60-7bf0d81c3f1d"}}];
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