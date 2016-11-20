(function() {var implementors = {};
implementors["simd"] = [];implementors["gfx"] = [];implementors["layout_thread"] = [];implementors["servo"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
