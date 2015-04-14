declare module Triarc.Web.Modal {
    var mod: ng.IModule;
    function openConfirmModal(message: any, $modal: any, title?: string, ok?: string, cancel?: string): ng.IPromise<boolean>;
    function openInfoModal(message: any, $modal: any, title?: string, ok?: string, cancel?: string): ng.IPromise<boolean>;
}
