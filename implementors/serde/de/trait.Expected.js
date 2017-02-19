(function() {var implementors = {};
implementors["gfx"] = [];
implementors["html5ever"] = [];
implementors["ipc_channel"] = [];
implementors["layout_thread"] = [];
implementors["net"] = [];
implementors["net_traits"] = [];
implementors["offscreen_gl_context"] = [];
implementors["script"] = [];
implementors["serde"] = [];
implementors["servo"] = [];
implementors["servo_config"] = [];
implementors["string_cache"] = [];
implementors["style"] = [];
implementors["webrender"] = [];
implementors["webvr_traits"] = [];
implementors["xml5ever"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
