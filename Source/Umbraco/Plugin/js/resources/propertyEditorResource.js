﻿angular.module("umbraco.resources").factory("formEditorPropertyEditorResource", ["$q", "$http", "umbRequestHelper",
  function ($q, $http, umbRequestHelper) {
    return {
      getAllFieldTypes: function () {
        return umbRequestHelper.resourcePromise(
            $http.get("/umbraco/backoffice/FormEditorApi/PropertyEditor/GetAllFieldTypes"), "Could not retrieve field types"
        );
      },
      getAllConditionTypes: function () {
        return umbRequestHelper.resourcePromise(
            $http.get("/umbraco/backoffice/FormEditorApi/PropertyEditor/GetAllConditionTypes"), "Could not retrieve condition types"
        );
      },
      getEmailTemplates: function () {
        return umbRequestHelper.resourcePromise(
            $http.get("/umbraco/backoffice/FormEditorApi/PropertyEditor/GetEmailTemplates"), "Could not retrieve email templates"
        );
      },
      getRowIcons: function () {
        return umbRequestHelper.resourcePromise(
            $http.get("/umbraco/backoffice/FormEditorApi/PropertyEditor/GetRowIcons"), "Could not retrieve row icons"
        );
      },
      getData: function (documentId, page, sortField, sortDescending) {
        return umbRequestHelper.resourcePromise(
            $http.get("/umbraco/backoffice/FormEditorApi/PropertyEditor/GetData/" + documentId + "?page=" + page + "&sortField=" + sortField + "&sortDescending=" + sortDescending), "Could not retrieve data"
        );
      },
      deleteData: function (documentId, ids) {
        // posting all IDs for deletion here in one bulk operation .. not quite the REST way but more efficient this way.
        return umbRequestHelper.resourcePromise(
            $http.post("/umbraco/backoffice/FormEditorApi/PropertyEditor/RemoveData/" + documentId, ids), "Could not delete data"
        );
      },
      getMediaUrl: function (mediaId) {
        return umbRequestHelper.resourcePromise(
            $http.get("/umbraco/backoffice/FormEditorApi/PropertyEditor/GetMediaUrl/" + mediaId), "Could not retrieve media URL"
        );
      },
      // for future support for views and icons and stuff outside the default location
      pathToFieldFile: function (file) {
        return "/App_Plugins/FormEditor/editor/fields/" + file;
      },
      // for future support for views and icons and stuff outside the default location
      pathToRowFile: function (file) {
        return "/App_Plugins/FormEditor/editor/rows/" + file;
      },
      // for future support for views and icons and stuff outside the default location
      pathToConditionFile: function (file) {
        return "/App_Plugins/FormEditor/editor/conditions/" + file;
      },
    }
  }
]);
