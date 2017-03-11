(function() {var implementors = {};
implementors["constellation"] = ["impl <a class="trait" href="log/trait.Log.html" title="trait log::Log">Log</a> for <a class="struct" href="constellation/struct.FromScriptLogger.html" title="struct constellation::FromScriptLogger">FromScriptLogger</a>","impl <a class="trait" href="log/trait.Log.html" title="trait log::Log">Log</a> for <a class="struct" href="constellation/struct.FromCompositorLogger.html" title="struct constellation::FromCompositorLogger">FromCompositorLogger</a>",];
implementors["env_logger"] = ["impl <a class="trait" href="log/trait.Log.html" title="trait log::Log">Log</a> for <a class="struct" href="env_logger/struct.Logger.html" title="struct env_logger::Logger">Logger</a>",];
implementors["log"] = [];
implementors["servo"] = ["impl <a class="trait" href="log/trait.Log.html" title="trait log::Log">Log</a> for <a class="struct" href="constellation/constellation/struct.FromScriptLogger.html" title="struct constellation::constellation::FromScriptLogger">FromScriptLogger</a>","impl <a class="trait" href="log/trait.Log.html" title="trait log::Log">Log</a> for <a class="struct" href="constellation/constellation/struct.FromCompositorLogger.html" title="struct constellation::constellation::FromCompositorLogger">FromCompositorLogger</a>","impl <a class="trait" href="log/trait.Log.html" title="trait log::Log">Log</a> for <a class="struct" href="env_logger/struct.Logger.html" title="struct env_logger::Logger">Logger</a>","impl&lt;Log1, Log2&gt; <a class="trait" href="log/trait.Log.html" title="trait log::Log">Log</a> for <a class="struct" href="servo/struct.BothLogger.html" title="struct servo::BothLogger">BothLogger</a>&lt;Log1, Log2&gt; <span class="where fmt-newline">where Log1: <a class="trait" href="log/trait.Log.html" title="trait log::Log">Log</a>, Log2: <a class="trait" href="log/trait.Log.html" title="trait log::Log">Log</a></span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
