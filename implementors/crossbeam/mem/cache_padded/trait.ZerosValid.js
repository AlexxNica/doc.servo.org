(function() {var implementors = {};
implementors["crossbeam"] = [];implementors["wayland_window"] = [];implementors["wayland_kbd"] = [];implementors["glutin"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
