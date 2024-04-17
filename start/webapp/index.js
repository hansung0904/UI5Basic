sap.ui.define([
	"sap/ui/core/ComponentContainer"
], (ComponentContainer) => {
	"use strict";

	new ComponentContainer({
        name : "ui5.walkthrough",
        settings : {
            id : "walkthrogh"
        },
        async : true
    }).placeAt("content");
});
