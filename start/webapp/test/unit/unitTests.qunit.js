QUnit.config.autostart = false;

sap.u.require(["sap/ui/core/Core"], async(Core) => {
    "use strict";

    await Core.ready();

    sap.ui.require([
        "ui5/walkthrough/test/unit/model/formatter"
    ], () => {
        Qunit.Start();
        
    });
});