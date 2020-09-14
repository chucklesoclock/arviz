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
    
      
      
    
      var element = document.getElementById("7055e95d-8d08-4664-aa01-239adc121d70");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '7055e95d-8d08-4664-aa01-239adc121d70' but no matching script tag was found.")
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
                    
                  var docs_json = '{"8f5a36f3-50b2-4bba-ac1c-067571046db2":{"roots":{"references":[{"attributes":{},"id":"72475","type":"Selection"},{"attributes":{},"id":"72490","type":"UnionRenderers"},{"attributes":{},"id":"72491","type":"Selection"},{"attributes":{},"id":"72476","type":"UnionRenderers"},{"attributes":{"data":{"x":[-2.13476994033137,10.008689721107494],"y":[0.3,0.3]},"selected":{"id":"72475"},"selection_policy":{"id":"72474"}},"id":"72351","type":"ColumnDataSource"},{"attributes":{},"id":"72477","type":"Selection"},{"attributes":{},"id":"72492","type":"UnionRenderers"},{"attributes":{},"id":"72493","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72338","type":"Line"},{"attributes":{},"id":"72478","type":"UnionRenderers"},{"attributes":{},"id":"72479","type":"Selection"},{"attributes":{},"id":"72494","type":"UnionRenderers"},{"attributes":{},"id":"72495","type":"Selection"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72337","type":"Line"},{"attributes":{},"id":"72480","type":"UnionRenderers"},{"attributes":{"bounds":"auto","end":3.4499999999999997,"min_interval":2,"start":-0.8999999999999999},"id":"72459","type":"DataRange1d"},{"attributes":{"data":{"x":[-1.4753067334040253,11.208804111875878],"y":[0.6,0.6]},"selected":{"id":"72481"},"selection_policy":{"id":"72480"}},"id":"72366","type":"ColumnDataSource"},{"attributes":{},"id":"72481","type":"Selection"},{"attributes":{"source":{"id":"72336"}},"id":"72340","type":"CDSView"},{"attributes":{},"id":"72496","type":"UnionRenderers"},{"attributes":{},"id":"72497","type":"Selection"},{"attributes":{},"id":"72482","type":"UnionRenderers"},{"attributes":{},"id":"72483","type":"Selection"},{"attributes":{},"id":"72498","type":"UnionRenderers"},{"attributes":{},"id":"72499","type":"Selection"},{"attributes":{},"id":"72468","type":"UnionRenderers"},{"attributes":{"text":"94.0% HDI"},"id":"72456","type":"Title"},{"attributes":{},"id":"72469","type":"Selection"},{"attributes":{},"id":"72484","type":"UnionRenderers"},{"attributes":{},"id":"72485","type":"Selection"},{"attributes":{},"id":"72500","type":"UnionRenderers"},{"attributes":{},"id":"72501","type":"Selection"},{"attributes":{},"id":"72470","type":"UnionRenderers"},{"attributes":{},"id":"72471","type":"Selection"},{"attributes":{},"id":"72486","type":"UnionRenderers"},{"attributes":{},"id":"72487","type":"Selection"},{"attributes":{"data":{"x":[2.393576367885318,6.880909766712211],"y":[1.95,1.95]},"selected":{"id":"72501"},"selection_policy":{"id":"72500"}},"id":"72416","type":"ColumnDataSource"},{"attributes":{},"id":"72502","type":"UnionRenderers"},{"attributes":{},"id":"72503","type":"Selection"},{"attributes":{},"id":"72472","type":"UnionRenderers"},{"attributes":{},"id":"72473","type":"Selection"},{"attributes":{"source":{"id":"72416"}},"id":"72420","type":"CDSView"},{"attributes":{"data_source":{"id":"72341"},"glyph":{"id":"72342"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72343"},"selection_glyph":null,"view":{"id":"72345"}},"id":"72344","type":"GlyphRenderer"},{"attributes":{},"id":"72488","type":"UnionRenderers"},{"attributes":{},"id":"72489","type":"Selection"},{"attributes":{},"id":"72504","type":"UnionRenderers"},{"attributes":{},"id":"72505","type":"Selection"},{"attributes":{},"id":"72474","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"72324","type":"HoverTool"},{"attributes":{"data_source":{"id":"72431"},"glyph":{"id":"72432"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72433"},"selection_glyph":null,"view":{"id":"72435"}},"id":"72434","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72352","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72353","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72427","type":"Line"},{"attributes":{"source":{"id":"72351"}},"id":"72355","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"72423","type":"Circle"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72357","type":"Line"},{"attributes":{"source":{"id":"72421"}},"id":"72425","type":"CDSView"},{"attributes":{},"id":"72307","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"72363","type":"Circle"},{"attributes":{"data":{"x":[-0.7842313478998125,9.985046696913068],"y":[2.55,2.55]},"selected":{"id":"72511"},"selection_policy":{"id":"72510"}},"id":"72441","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"72356"},"glyph":{"id":"72357"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72358"},"selection_glyph":null,"view":{"id":"72360"}},"id":"72359","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"72381"},"glyph":{"id":"72382"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72383"},"selection_glyph":null,"view":{"id":"72385"}},"id":"72384","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"72421"},"glyph":{"id":"72422"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72423"},"selection_glyph":null,"view":{"id":"72425"}},"id":"72424","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"72441"},"glyph":{"id":"72442"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72443"},"selection_glyph":null,"view":{"id":"72445"}},"id":"72444","type":"GlyphRenderer"},{"attributes":{},"id":"72506","type":"UnionRenderers"},{"attributes":{"source":{"id":"72341"}},"id":"72345","type":"CDSView"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"72362","type":"Circle"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72432","type":"Line"},{"attributes":{"data":{"x":[2.2808674873161356,6.6262125124574265],"y":[0.3,0.3]},"selected":{"id":"72477"},"selection_policy":{"id":"72476"}},"id":"72356","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72442","type":"Line"},{"attributes":{},"id":"72507","type":"Selection"},{"attributes":{"data":{"x":[2.454317217804662,6.859709821773684],"y":[0,0]},"selected":{"id":"72471"},"selection_policy":{"id":"72470"}},"id":"72341","type":"ColumnDataSource"},{"attributes":{"source":{"id":"72356"}},"id":"72360","type":"CDSView"},{"attributes":{"source":{"id":"72426"}},"id":"72430","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72358","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72428","type":"Line"},{"attributes":{},"id":"72318","type":"PanTool"},{"attributes":{"source":{"id":"72361"}},"id":"72365","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"72438","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72343","type":"Line"},{"attributes":{"data":{"x":[-2.2641273152868076,10.475301593619335],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"72487"},"selection_policy":{"id":"72486"}},"id":"72381","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"72437","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"72325","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"72347","type":"Circle"},{"attributes":{"data":{},"selected":{"id":"72479"},"selection_policy":{"id":"72478"}},"id":"72361","type":"ColumnDataSource"},{"attributes":{"source":{"id":"72431"}},"id":"72435","type":"CDSView"},{"attributes":{"data":{"x":[1.9127415870254314,7.0411499662839026],"y":[2.25,2.25]},"selected":{"id":"72507"},"selection_policy":{"id":"72506"}},"id":"72431","type":"ColumnDataSource"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72367","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72433","type":"Line"},{"attributes":{"data_source":{"id":"72361"},"glyph":{"id":"72362"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72363"},"selection_glyph":null,"view":{"id":"72365"}},"id":"72364","type":"GlyphRenderer"},{"attributes":{"source":{"id":"72436"}},"id":"72440","type":"CDSView"},{"attributes":{},"id":"72508","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"72300"},0,0]]},"id":"72517","type":"GridBox"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"72377","type":"Circle"},{"attributes":{},"id":"72509","type":"Selection"},{"attributes":{"data_source":{"id":"72371"},"glyph":{"id":"72372"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72373"},"selection_glyph":null,"view":{"id":"72375"}},"id":"72374","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"72446"},"glyph":{"id":"72447"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72448"},"selection_glyph":null,"view":{"id":"72450"}},"id":"72449","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72382","type":"Line"},{"attributes":{"data":{"x":[-2.061896746944455,11.515205993744095],"y":[2.25,2.25]},"selected":{"id":"72505"},"selection_policy":{"id":"72504"}},"id":"72426","type":"ColumnDataSource"},{"attributes":{"data":{},"selected":{"id":"72509"},"selection_policy":{"id":"72508"}},"id":"72436","type":"ColumnDataSource"},{"attributes":{"source":{"id":"72366"}},"id":"72370","type":"CDSView"},{"attributes":{"data":{"x":[-1.0798320889339172,10.200853218312133],"y":[0,0]},"selected":{"id":"72469"},"selection_policy":{"id":"72468"}},"id":"72336","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72368","type":"Line"},{"attributes":{"data_source":{"id":"72436"},"glyph":{"id":"72437"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72438"},"selection_glyph":null,"view":{"id":"72440"}},"id":"72439","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"72378","type":"Circle"},{"attributes":{"data":{"x":[2.1521098502407368,6.9643589964055215],"y":[0.6,0.6]},"selected":{"id":"72483"},"selection_policy":{"id":"72482"}},"id":"72371","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"72309"}],"center":[{"id":"72312"},{"id":"72316"}],"left":[{"id":"72313"}],"outline_line_color":null,"output_backend":"webgl","plot_height":435,"plot_width":360,"renderers":[{"id":"72339"},{"id":"72344"},{"id":"72349"},{"id":"72354"},{"id":"72359"},{"id":"72364"},{"id":"72369"},{"id":"72374"},{"id":"72379"},{"id":"72384"},{"id":"72389"},{"id":"72394"},{"id":"72399"},{"id":"72404"},{"id":"72409"},{"id":"72414"},{"id":"72419"},{"id":"72424"},{"id":"72429"},{"id":"72434"},{"id":"72439"},{"id":"72444"},{"id":"72449"},{"id":"72454"}],"title":{"id":"72456"},"toolbar":{"id":"72327"},"toolbar_location":null,"x_range":{"id":"72458"},"x_scale":{"id":"72305"},"y_range":{"id":"72459"},"y_scale":{"id":"72307"}},"id":"72300","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72447","type":"Line"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72372","type":"Line"},{"attributes":{},"id":"72320","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"72346"},"glyph":{"id":"72347"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72348"},"selection_glyph":null,"view":{"id":"72350"}},"id":"72349","type":"GlyphRenderer"},{"attributes":{"source":{"id":"72371"}},"id":"72375","type":"CDSView"},{"attributes":{},"id":"72305","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72373","type":"Line"},{"attributes":{"source":{"id":"72441"}},"id":"72445","type":"CDSView"},{"attributes":{"source":{"id":"72376"}},"id":"72380","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72443","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"72453","type":"Circle"},{"attributes":{},"id":"72510","type":"UnionRenderers"},{"attributes":{},"id":"72511","type":"Selection"},{"attributes":{"data_source":{"id":"72386"},"glyph":{"id":"72387"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72388"},"selection_glyph":null,"view":{"id":"72390"}},"id":"72389","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"72452","type":"Circle"},{"attributes":{},"id":"72317","type":"ResetTool"},{"attributes":{"data":{},"selected":{"id":"72485"},"selection_policy":{"id":"72484"}},"id":"72376","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1.9790083397469873,5.455951625836456],"y":[2.55,2.55]},"selected":{"id":"72513"},"selection_policy":{"id":"72512"}},"id":"72446","type":"ColumnDataSource"},{"attributes":{"data":{"x":[-1.9958943490877263,9.311550558002505],"y":[1.65,1.65]},"selected":{"id":"72493"},"selection_policy":{"id":"72492"}},"id":"72396","type":"ColumnDataSource"},{"attributes":{"source":{"id":"72446"}},"id":"72450","type":"CDSView"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72342","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72448","type":"Line"},{"attributes":{"data_source":{"id":"72376"},"glyph":{"id":"72377"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72378"},"selection_glyph":null,"view":{"id":"72380"}},"id":"72379","type":"GlyphRenderer"},{"attributes":{"source":{"id":"72451"}},"id":"72455","type":"CDSView"},{"attributes":{},"id":"72323","type":"SaveTool"},{"attributes":{"data_source":{"id":"72396"},"glyph":{"id":"72397"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72398"},"selection_glyph":null,"view":{"id":"72400"}},"id":"72399","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72387","type":"Line"},{"attributes":{"data_source":{"id":"72336"},"glyph":{"id":"72337"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72338"},"selection_glyph":null,"view":{"id":"72340"}},"id":"72339","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72397","type":"Line"},{"attributes":{"data":{},"selected":{"id":"72515"},"selection_policy":{"id":"72514"}},"id":"72451","type":"ColumnDataSource"},{"attributes":{"source":{"id":"72381"}},"id":"72385","type":"CDSView"},{"attributes":{},"id":"72512","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72383","type":"Line"},{"attributes":{},"id":"72513","type":"Selection"},{"attributes":{"data_source":{"id":"72451"},"glyph":{"id":"72452"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72453"},"selection_glyph":null,"view":{"id":"72455"}},"id":"72454","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"72393","type":"Circle"},{"attributes":{"toolbars":[{"id":"72327"}],"tools":[{"id":"72317"},{"id":"72318"},{"id":"72319"},{"id":"72320"},{"id":"72321"},{"id":"72322"},{"id":"72323"},{"id":"72324"}]},"id":"72518","type":"ProxyToolbar"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"72392","type":"Circle"},{"attributes":{"data":{"x":[2.2921199846409115,6.479187946875487],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"72489"},"selection_policy":{"id":"72488"}},"id":"72386","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"72464"},"ticker":{"id":"72310"}},"id":"72309","type":"LinearAxis"},{"attributes":{"source":{"id":"72386"}},"id":"72390","type":"CDSView"},{"attributes":{},"id":"72310","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72388","type":"Line"},{"attributes":{},"id":"72463","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"72391"}},"id":"72395","type":"CDSView"},{"attributes":{"axis":{"id":"72309"},"ticker":null},"id":"72312","type":"Grid"},{"attributes":{"data_source":{"id":"72401"},"glyph":{"id":"72402"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72403"},"selection_glyph":null,"view":{"id":"72405"}},"id":"72404","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"72491"},"selection_policy":{"id":"72490"}},"id":"72391","type":"ColumnDataSource"},{"attributes":{},"id":"72514","type":"UnionRenderers"},{"attributes":{"data":{"x":[-2.358040118461496,10.910290467635015],"y":[1.95,1.95]},"selected":{"id":"72499"},"selection_policy":{"id":"72498"}},"id":"72411","type":"ColumnDataSource"},{"attributes":{},"id":"72515","type":"Selection"},{"attributes":{"toolbar":{"id":"72518"},"toolbar_location":"above"},"id":"72519","type":"ToolbarBox"},{"attributes":{"data_source":{"id":"72391"},"glyph":{"id":"72392"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72393"},"selection_glyph":null,"view":{"id":"72395"}},"id":"72394","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"72411"},"glyph":{"id":"72412"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72413"},"selection_glyph":null,"view":{"id":"72415"}},"id":"72414","type":"GlyphRenderer"},{"attributes":{},"id":"72464","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"72346"}},"id":"72350","type":"CDSView"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72402","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72412","type":"Line"},{"attributes":{"source":{"id":"72396"}},"id":"72400","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"72348","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72398","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"72408","type":"Circle"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"72407","type":"Circle"},{"attributes":{"data":{"x":[0.9649316231388204,5.949680273009057],"y":[1.65,1.65]},"selected":{"id":"72495"},"selection_policy":{"id":"72494"}},"id":"72401","type":"ColumnDataSource"},{"attributes":{"source":{"id":"72401"}},"id":"72405","type":"CDSView"},{"attributes":{},"id":"72322","type":"UndoTool"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72403","type":"Line"},{"attributes":{"data":{},"selected":{"id":"72473"},"selection_policy":{"id":"72472"}},"id":"72346","type":"ColumnDataSource"},{"attributes":{"source":{"id":"72406"}},"id":"72410","type":"CDSView"},{"attributes":{"data_source":{"id":"72416"},"glyph":{"id":"72417"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72418"},"selection_glyph":null,"view":{"id":"72420"}},"id":"72419","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"72497"},"selection_policy":{"id":"72496"}},"id":"72406","type":"ColumnDataSource"},{"attributes":{"ticks":[0.44999999999999996,2.0999999999999996]},"id":"72460","type":"FixedTicker"},{"attributes":{"overlay":{"id":"72325"}},"id":"72319","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"72463"},"major_label_overrides":{"0.44999999999999996":"Non Centered: mu","2.0999999999999996":"Centered: mu"},"ticker":{"id":"72460"}},"id":"72313","type":"LinearAxis"},{"attributes":{"children":[{"id":"72519"},{"id":"72517"}]},"id":"72520","type":"Column"},{"attributes":{"data_source":{"id":"72426"},"glyph":{"id":"72427"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72428"},"selection_glyph":null,"view":{"id":"72430"}},"id":"72429","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"72313"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"72316","type":"Grid"},{"attributes":{"data_source":{"id":"72406"},"glyph":{"id":"72407"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72408"},"selection_glyph":null,"view":{"id":"72410"}},"id":"72409","type":"GlyphRenderer"},{"attributes":{"bounds":"auto","min_interval":1},"id":"72458","type":"DataRange1d"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72417","type":"Line"},{"attributes":{"overlay":{"id":"72326"}},"id":"72321","type":"LassoSelectTool"},{"attributes":{"source":{"id":"72411"}},"id":"72415","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72413","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"72317"},{"id":"72318"},{"id":"72319"},{"id":"72320"},{"id":"72321"},{"id":"72322"},{"id":"72323"},{"id":"72324"}]},"id":"72327","type":"Toolbar"},{"attributes":{"data":{},"selected":{"id":"72503"},"selection_policy":{"id":"72502"}},"id":"72421","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"72351"},"glyph":{"id":"72352"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72353"},"selection_glyph":null,"view":{"id":"72355"}},"id":"72354","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72418","type":"Line"},{"attributes":{"data_source":{"id":"72366"},"glyph":{"id":"72367"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72368"},"selection_glyph":null,"view":{"id":"72370"}},"id":"72369","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"72326","type":"PolyAnnotation"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"72422","type":"Circle"}],"root_ids":["72520"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"8f5a36f3-50b2-4bba-ac1c-067571046db2","root_ids":["72520"],"roots":{"72520":"7055e95d-8d08-4664-aa01-239adc121d70"}}];
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