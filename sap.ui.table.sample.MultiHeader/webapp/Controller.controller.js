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
					{id: "1", division: "정기",   			QuoteNumber: "KMHD1*****", 	productCode: "Code1", contractDate: "2024/04/12", accountNumber: "1", customerName: "씨제이푸드", customerNumber: "IU974B", totalCount: "10", recommendationCustomerDate: "연간계획표", recommendationCustomerTime: "13:50",  region: "강동구/암사동", manager: "김종인", week: "1", Day: "월", totalExecution: "1/10", bugIssue: "Y", finalAdjustVisit: "2024/04/12", finalVisitTime: "오후 1:50~오후 2:30", reformDate: "2024/04/12"},
					{id: "2", division: "부정기", 			QuoteNumber: "KMHD1*****", 	productCode: "Code1", contractDate: "2024/04/12", accountNumber: "10",customerName: "김밥천국",   customerNumber: "IU974B", totalCount: "1",  recommendationCustomerDate: "2024/04/12", recommendationCustomerTime: "13:50", region: "강동구/암사동", manager: "미배정", week: "-", Day: "-",  totalExecution: "0/1",  bugIssue: "N", finalAdjustVisit: "",           finalVisitTime: "",					reformDate: ""},
					{id: "3", division: "부정기", 			QuoteNumber: "KMHD1*****", 	productCode: "Code1", contractDate: "2024/04/12", accountNumber:"2",  customerName: "강동스크린", customerNumber: "IU974B", totalCount: "2",  recommendationCustomerDate: "2024/04/16", recommendationCustomerTime: "13:50", region: "강동구/암사동", manager: "김종인", week: "-", Day: "-",  totalExecution: "1/2",  bugIssue: "N", finalAdjustVisit: "2024/04/12", finalVisitTime: "오후 1:50~오후 2:30", reformDate: "2024/04/12"},
					{id: "4", division: "부정기", 			QuoteNumber: "KMHD1*****", 	productCode: "Code1", contractDate: "2024/04/12", accountNumber:"2",  customerName: "세븐일레븐", customerNumber: "IU974B", totalCount: "2",  recommendationCustomerDate: "2024/04/26", recommendationCustomerTime: "13:50", region: "강동구/암사동", manager: "미배정", week: "-", Day: "-",  totalExecution: "0/2",  bugIssue: "N", finalAdjustVisit: "",           finalVisitTime: "-",					reformDate: ""},
					{id: "5", division: "VOC",  			QuoteNumber: "KMHD1*****", 	productCode: "Code1", contractDate: "2024/04/12", accountNumber:"-",  customerName: "엔딩스터디", customerNumber: "IU974B", totalCount: "-", recommendationCustomerDate: "-", 			recommendationCustomerTime: "13:50", region: "강동구/암사동", manager: "김종인", week: "-", Day: "-", totalExecution: "-",    bugIssue: "N", finalAdjustVisit: "-",           finalVisitTime: "-",					reformDate: "2024/04/12"},
					{id: "6", division: "VOC",  			QuoteNumber: "-", 			productCode: "Code1", contractDate:"2024/04/12" , accountNumber:"-",  customerName: "매머드커피", customerNumber: "IU974B", totalCount: "-", recommendationCustomerDate: "-", 			recommendationCustomerTime: "13:50", region: "강동구/암사동", manager: "김종인", week: "-", Day: "-", totalExecution: "-",    bugIssue: "N", finalAdjustVisit: "-",           finalVisitTime: "-",					reformDate: "2024/04/12"},
					{id: "7", division: "VOC",  			QuoteNumber: "-", 			productCode: "Code1", contractDate:"2024/04/12" , accountNumber:"-",  customerName: "이느커피",   customerNumber: "IU974B", totalCount: "-", recommendationCustomerDate: "-", 			recommendationCustomerTime: "13:50", region: "강동구/암사동", manager: "김종인", week: "-", Day: "-", totalExecution: "-",    bugIssue: "N", finalAdjustVisit: "-",           finalVisitTime: "-",					reformDate: "2024/04/12"},
					{id: "8", division: "VOC",  			QuoteNumber: "-", 			productCode: "Code1", contractDate:"2024/04/12" , accountNumber:"-",  customerName: "이마트가양", customerNumber: "IU974B", totalCount: "-", recommendationCustomerDate: "-", 			recommendationCustomerTime: "13:50", region: "강동구/암사동", manager: "김종인", week: "-", Day: "-", totalExecution: "-",    bugIssue: "N", finalAdjustVisit: "-",           finalVisitTime: "-",					reformDate: "2024/04/12"},
					{id: "9", division: "정기", 			QuoteNumber: "KMHD1*****", 	productCode: "Code1", contractDate: "2024/04/12", accountNumber:"10", customerName: "미니스톱",   customerNumber: "IU974B", totalCount: "10",recommendationCustomerDate: "연간계획표",   recommendationCustomerTime: "13:50", region: "강동구/암사동", manager: "미배정", week: "",  Day: "",  totalExecution: "",     bugIssue: "N", finalAdjustVisit: "",            finalVisitTime: "-",					 reformDate: ""},
					{id: "10",division: "정기(타지사 이관)", QuoteNumber: "KMHD1*****",  productCode: "Code1", contractDate: "2024/04/12", accountNumber:"10", customerName: "GS편의점",   customerNumber: "IU974B", totalCount: "10",recommendationCustomerDate: "연간계획표",   recommendationCustomerTime: "13:50", region: "강동구/암사동", manager: "미배정", week: "",  Day: "",  totalExecution: "",     bugIssue: "N", finalAdjustVisit: "",            finalVisitTime: "-",				  reformDate: ""},
					
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