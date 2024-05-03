sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap.ui.table.sample.MultiHeader.Controller", {
		onInit: function() {
			var oModel = new JSONModel();
			var oData = {
				modelData: [
					{supplier: "Titanium", street: "401 23rd St", city: "Port Angeles", phone: "5682-121-828", openOrders: 10},
					{supplier: "Technocom", street: "51 39th St", city: "Smallfield", phone: "2212-853-789", openOrders: 0},
					{supplier: "Red Point Stores", street: "451 55th St", city: "Meridian", phone: "2234-245-898", openOrders: 5},
					{supplier: "Technocom", street: "40 21st St", city: "Bethesda", phone: "5512-125-643", openOrders: 0},
					{supplier: "Very Best Screens", street: "123 72nd St", city: "McLean", phone: "5412-543-765", openOrders: 6},
					{supplier: "Chs", street: "1234 73nd St", city: "Ulsan", phone: "010-1234-4567", openOrders: 7}
				]
			};
			var oView = this.getView();

			oModel.setData(oData);
			oView.setModel(oModel);
			

		},
		
		
		onAfterRendering: function() {
		  let oColumn1 = this.getView().byId("supplierColumn");
		  let oColumnHeader1 = oColumn1.$().context;
		  oColumnHeader1.setAttribute('rowspan', '2');
		  

		  let oColumn2 = this.getView().byId("supplierColumn2");
		  let oColumnHeader2 = oColumn2.$().context;
		  oColumnHeader2.setAttribute('rowspan', '2');
		  
		  /*
			View Rendering시 컬럼이 두개 자동적으로 생기는 현상 발생
			Element ID를 찾아서 삭제하는 식으로 구현
			현재는 이게 최선이라는 피드백
		  */
		  let oElement1 = document.getElementById("__xmlview0--supplierColumn_1");
			if (oElement1) {
			    oElement1.parentNode.removeChild(oElement1);
			}

		  let oElement2 = document.getElementById("__xmlview0--supplierColumn2_1");
			if (oElement2) {
			    oElement2.parentNode.removeChild(oElement2);
			}

	  	},

		//   onAfterRendering: function() {
		// 	setTimeout(function() {
		// 		var oTable = this.getView().byId("table1");
		// 		var oHeader = oTable.$().find("thead")[0]; // 테이블의 헤더 요소 가져오기
		
		// 		var oColumnHeaders = oHeader.getElementsByTagName("th"); // 헤더 셀들 가져오기
		// 		for (var i = 0; i < oColumnHeaders.length; i++) {
		// 			var oHeaderCell = oColumnHeaders[i];
		// 			oHeaderCell.setAttribute('rowspan', '2'); // rowspan 설정
		// 		}
		// 	}.bind(this), 0);
		// },
		
		
	
	});
});