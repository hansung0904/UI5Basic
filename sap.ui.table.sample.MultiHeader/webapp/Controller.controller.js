sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap.ui.table.sample.MultiHeader.Controller", {
		onInit: function() {
			var oModel = new JSONModel();
			var oData = {
				modelData: [
					{id: "1", division: "정기",   			quoteNumber: "KMHD1*****", 	productCode: "Code1", contractDate: "2024/04/12", accountNumber: "1", customerName: "씨제이푸드", customerNumber: "IU974B", totalCount: "10", recommendationCustomerDate: "연간계획표", recommendationCustomerTime: "13:50",  region: "강동구/암사동", manager: "김종인", week: "1", Day: "월", totalExecution: "1/10", bugIssue: "Y", finalAdjustVisit: "2024/04/12", finalVisitTime: "오후 1:50~오후 2:30", reformDate: "2024/04/12"},
					{id: "2", division: "부정기", 			quoteNumber: "KMHD1*****", 	productCode: "Code1", contractDate: "2024/04/12", accountNumber: "10",customerName: "김밥천국",   customerNumber: "IU974B", totalCount: "1",  recommendationCustomerDate: "2024/04/12", recommendationCustomerTime: "13:50", region: "강동구/암사동", manager: "미배정", week: "-", Day: "-",  totalExecution: "0/1",  bugIssue: "N", finalAdjustVisit: "",           finalVisitTime: "",					reformDate: ""},
					{id: "3", division: "부정기", 			quoteNumber: "KMHD1*****", 	productCode: "Code1", contractDate: "2024/04/12", accountNumber:"2",  customerName: "강동스크린", customerNumber: "IU974B", totalCount: "2",  recommendationCustomerDate: "2024/04/16", recommendationCustomerTime: "13:50", region: "강동구/암사동", manager: "김종인", week: "-", Day: "-",  totalExecution: "1/2",  bugIssue: "N", finalAdjustVisit: "2024/04/12", finalVisitTime: "오후 1:50~오후 2:30", reformDate: "2024/04/12"},
					{id: "4", division: "부정기", 			quoteNumber: "KMHD1*****", 	productCode: "Code1", contractDate: "2024/04/12", accountNumber:"2",  customerName: "세븐일레븐", customerNumber: "IU974B", totalCount: "2",  recommendationCustomerDate: "2024/04/26", recommendationCustomerTime: "13:50", region: "강동구/암사동", manager: "미배정", week: "-", Day: "-",  totalExecution: "0/2",  bugIssue: "N", finalAdjustVisit: "",           finalVisitTime: "-",					reformDate: ""},
					{id: "5", division: "VOC",  			quoteNumber: "KMHD1*****", 	productCode: "Code1", contractDate: "2024/04/12", accountNumber:"-",  customerName: "엔딩스터디", customerNumber: "IU974B", totalCount: "-", recommendationCustomerDate: "-", 			recommendationCustomerTime: "13:50", region: "강동구/암사동", manager: "김종인", week: "-", Day: "-", totalExecution: "-",    bugIssue: "N", finalAdjustVisit: "-",           finalVisitTime: "-",					reformDate: "2024/04/12"},
					{id: "6", division: "VOC",  			quoteNumber: "-", 			productCode: "Code1", contractDate:"2024/04/12" , accountNumber:"-",  customerName: "매머드커피", customerNumber: "IU974B", totalCount: "-", recommendationCustomerDate: "-", 			recommendationCustomerTime: "13:50", region: "강동구/암사동", manager: "김종인", week: "-", Day: "-", totalExecution: "-",    bugIssue: "N", finalAdjustVisit: "-",           finalVisitTime: "-",					reformDate: "2024/04/12"},
					{id: "7", division: "VOC",  			quoteNumber: "-", 			productCode: "Code1", contractDate:"2024/04/12" , accountNumber:"-",  customerName: "인크커피",   customerNumber: "IU974B", totalCount: "-", recommendationCustomerDate: "-", 			recommendationCustomerTime: "13:50", region: "강동구/암사동", manager: "김종인", week: "-", Day: "-", totalExecution: "-",    bugIssue: "N", finalAdjustVisit: "-",           finalVisitTime: "-",					reformDate: "2024/04/12"},
					{id: "8", division: "VOC",  			quoteNumber: "-", 			productCode: "Code1", contractDate:"2024/04/12" , accountNumber:"-",  customerName: "이마트가양", customerNumber: "IU974B", totalCount: "-", recommendationCustomerDate: "-", 			recommendationCustomerTime: "13:50", region: "강동구/암사동", manager: "김종인", week: "-", Day: "-", totalExecution: "-",    bugIssue: "N", finalAdjustVisit: "-",           finalVisitTime: "-",					reformDate: "2024/04/12"},
					{id: "9", division: "정기", 			quoteNumber: "KMHD1*****", 	productCode: "Code1", contractDate: "2024/04/12", accountNumber:"10", customerName: "미니스톱",   customerNumber: "IU974B", totalCount: "10",recommendationCustomerDate: "연간계획표",   recommendationCustomerTime: "13:50", region: "강동구/암사동", manager: "미배정", week: "",  Day: "",  totalExecution: "",     bugIssue: "N", finalAdjustVisit: "",            finalVisitTime: "-",					 reformDate: ""},
					{id: "10",division: "정기(타지사 이관)", quoteNumber: "KMHD1*****",  productCode: "Code1", contractDate: "2024/04/12", accountNumber:"10", customerName: "GS편의점",   customerNumber: "IU974B", totalCount: "10",recommendationCustomerDate: "연간계획표",   recommendationCustomerTime: "13:50", region: "강동구/암사동", manager: "미배정", week: "",  Day: "",  totalExecution: "",     bugIssue: "N", finalAdjustVisit: "",            finalVisitTime: "-",				  reformDate: ""},
				]
			};
			var oView = this.getView();

			oModel.setData(oData);
			oView.setModel(oModel,"customer");

			const dayItems = [
				{
					id:"week", name: "==요일=="
				},
				{
					id : "none", name: "선택안함"
				},
				{
					id: "mon", name: "월"
				},
				{
					id: "-", name:"-"
				}
			]
			
			this.getView().getModel("customer").setProperty("/dayItems", dayItems);

			const nameItems = [
				{
					id: "none", name: "선택안함"
				},
				{
					id: "name", name:"김종인"
				},
				{
					id: "name", name:"미배정"
				}

			]
			this.getView().getModel("customer").setProperty("/nameItems", nameItems);

			const weekItems = [
				{
					id: "none", name: "선택안함"
				},
				{
					id: "week", name : "1"
				},
				{
					id: "week", name : "-"
				}
			]
			this.getView().getModel("customer").setProperty("/weekItems", weekItems);
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

		/*
			검색필드
		*/
		onSearchField: function (oEvent) {
			let aFilter = [];
			let sQuery = oEvent.getParameter("query");

			if(sQuery) {

				// 고객명
				let customerNameFilter = new sap.ui.model.Filter(
					"customerName",
					"Contains",
					sQuery
				);

				// 견적번호
				let quoteNumberFilter = new sap.ui.model.Filter(
					"quoteNumber",
					"Contains",
					sQuery
				);

				// 고객번호
				let customerNumberFilter = new sap.ui.model.Filter(
					"customerNumber",
					"Contains",
					sQuery
				);

				// 지역
				let regionFilter = new sap.ui.model.Filter(
					"region",
					"Contains",
					sQuery
				);

				// 요일
				let dayFilter = new sap.ui.model.Filter(
					"Day",
					"Contains",
					sQuery
				);

				// 담당자
				let managerFilter = new sap.ui.model.Filter(
					"manager",
					"Contains",
					sQuery
				);

				// 총횟수
				let totalExecutionFilter = new sap.ui.model.Filter(
					"totalExecution",
					"Contains",
					sQuery
				);

				// 구분 -> 어차피 data 형태로 값이 넘어오면 ID 값이나 이런것들로 처리 해주기 때문에 큰 상관은 없을 듯
				let divisionFilter = new sap.ui.model.Filter(
					"division",
					"Contains",
					sQuery
				);

				let combinedFilter = new sap.ui.model.Filter({
						filters: [
							customerNameFilter,
							quoteNumberFilter,
							customerNumberFilter,
							regionFilter,
							dayFilter,
							managerFilter,
							totalExecutionFilter,
							divisionFilter
						],
						and: false,
					});
				aFilter.push(combinedFilter);
			}

			// filter binding
			let oTable = this.byId("table1");
			let oBinding = oTable.getBinding("rows");
			oBinding.filter(aFilter);
		},

		onComboBoxSelectionChange: function (event) {
			let selectedItem = event.getParameter("selectedItem");
			let selectedText = selectedItem.getText();

			let oTable = this.byId("table1");
			let oBinding = oTable.getBinding("rows");

			if (selectedText === "선택안함") {
				// 선택안함이 들어온다면
				oBinding.filter([]); // 모든 필터링 제거해주고
			} else {
				// 기존 항목대로 항목이 선택된다면

				let oFilter = new sap.ui.model.Filter(
					"Day",
					sap.ui.model.FilterOperator.EQ,
					selectedText
				);
				oBinding.filter([oFilter]);
			}
		},
		
		/*
			매니저 콤보박스
		*/
		onComboBoxSelectionNameChange: function (event) {
			let selectedItem = event.getParameter("selectedItem");
			let selectedText = selectedItem.getText();

			let oTable = this.byId("table1");
			let oBinding = oTable.getBinding("rows");

			if(selectedText === "선택안함") {
				oBinding.filter([]);
			} else {
				let oFilter = new sap.ui.model.Filter(
					"manager",
					sap.ui.model.FilterOperator.EQ,
					selectedText
				);
				oBinding.filter([oFilter]);
			}
		},

		onComboBoxSelectionWeekChange:function (event) {
			let selectedItem = event.getParameter("selectedItem");
			let selectedText = selectedItem.getText();

			let oTable = this.byId("table1");
			let oBinding = oTable.getBinding("rows");

			if (selectedText === "선택안함") {
				oBinding.filter([]);
			} else {
				let oFilter = new sap.ui.model.Filter(
					"week",
					sap.ui.model.FilterOperator.EQ,
					selectedText
				);
				oBinding.filter([oFilter]);
			}
		},

		onMenuAction(oEvent){
			const route = oEvent.getParameter("item").getProperty("key");
			
			if(route == "RootPlan"){
				oRouter.navTo("view");
			}
			else if(route == "AssignMaster"){
				oRouter.navTo("master");
			}
			else{
				
			};
		},
	});
});