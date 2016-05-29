﻿angular.module("umbraco.resources").factory("uSplitManageResource",
    function ($http) {
        return {
            getExperiment: function (id) {
                return $http.get("backoffice/uSplit/Manage/GetExperimentAsync/" + id);
            },
            createExperiment: function(id) {
                return $http.get("backoffice/uSplit/Manage/CreateExperimentAsync/" + id);
            },
            addVariation: function(experimentId, nodeId) {
                return $http.post("backoffice/uSplit/Manage/AddVariationAsync/",
                {
                    experimentId,
                    nodeId
                });
            },
            deleteExperiment: function(id) {
                return $http.delete("backoffice/uSplit/Manage/DeleteExperimentAsync/" + id);
            },
            deleteVariation: function (experimentId, variationName) {
                return $http.post("backoffice/uSplit/Manage/DeleteVariationAsync/",
                {
                    experimentId,
                    variationName
                });
            },
            start: function (experimentId) {
                return $http.post("backoffice/uSplit/Manage/StartExperimentAsync/" + experimentId);
            },
            stop: function (experimentId) {
                return $http.post("backoffice/uSplit/Manage/StopExperimentAsync/" + experimentId);
            }
        }
    }
);