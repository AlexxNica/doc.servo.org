(function() {var implementors = {};
implementors["crossbeam"] = [];
implementors["glutin"] = [];
implementors["wayland_kbd"] = [];
implementors["wayland_window"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
