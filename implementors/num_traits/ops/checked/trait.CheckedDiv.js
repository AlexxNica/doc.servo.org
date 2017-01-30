(function() {var implementors = {};
implementors["enum_primitive"] = [];
implementors["gfx"] = [];
implementors["glutin"] = [];
implementors["image"] = [];
implementors["layout_thread"] = [];
implementors["net"] = [];
implementors["net_traits"] = [];
implementors["num_traits"] = [];
implementors["offscreen_gl_context"] = [];
implementors["script"] = [];
implementors["servo"] = [];
implementors["servo_config"] = [];
implementors["style"] = [];
implementors["webrender"] = [];
implementors["webvr_traits"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
