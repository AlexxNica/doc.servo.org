(function() {var implementors = {};
implementors["crossbeam"] = [];implementors["wayland_kbd"] = [];implementors["wayland_window"] = [];implementors["glutin"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
