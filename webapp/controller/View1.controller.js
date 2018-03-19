sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("JSONModelDemo.controller.View1", {
		onInit: function() {
			this.getUser();
			this.getEnabled();
			this.changeBtn();
		},
		getUser: function() {
			var UserModel = new JSONModel();
			UserModel.setData({
				Name: "Will",
				Sex: "male",
				skill: "SAPUI5"
			});
			this.getView().setModel(UserModel, "UserModel");
		},
		getEnabled: function() {
			this.getView().setModel(new JSONModel({
				enabled: false
			}), "EnabledModel");
		},
		changeBtn: function() {
			this.getView().setModel(new JSONModel({
				isAccept: false,
				isEdite: true,
				isCancel: false
			}), "changeBtn");
		},
		onEdit: function() {
			var changeBtn = this.getView().getModel("changeBtn"),
				EnableModel = this.getView().getModel("EnabledModel");
			changeBtn.setData({
				isAccept: true,
				isEdite: false,
				isCancel: true
			});
			EnableModel.setData({
				enabled: true
			});
		},
		onSave: function() {
			this.getView().getModel("changeBtn").setData({
				isAccept: false,
				isEdite: true,
				isCancel: false
			});
			this.getView().getModel("EnabledModel").setData({
				enabled: false
			});
		},
		onCancel: function() {
			this.onSave();
		},
		onAdd: function(oEvent) {
			var oModel = this.getView().getModel("UserModel");
			oModel.setProperty(
				"/newCreate", {
					add: "i am a new create!"
				}
			);
		}
	});
});