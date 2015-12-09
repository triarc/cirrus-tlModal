declare module Triarc.Web.Modal {
    var mod: ng.IModule;
    function openConfirmModal(message: any, $modal: any, title?: string, ok?: string, cancel?: string, showCancel?: boolean): angular.IPromise<boolean>;
}
