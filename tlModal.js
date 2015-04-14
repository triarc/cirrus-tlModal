var Triarc;
(function (Triarc) {
    var Web;
    (function (Web) {
        var Modal;
        (function (Modal) {
            Modal.mod = angular.module('tlModal', ['ui.bootstrap.modal']);
            function openConfirmModal(message, $modal, title, ok, cancel) {
                if (title === void 0) { title = "_defaultNotificationTitle"; }
                if (ok === void 0) { ok = "_ok"; }
                if (cancel === void 0) { cancel = "_cancel"; }
                var modalInstance = $modal.open({
                    templateUrl: 'Client/triarc/Views/partials/notificationModal.html',
                    size: 'md',
                    controller: ModalInstanceCtrl,
                    resolve: {
                        message: function () {
                            return message;
                        },
                        title: function () {
                            return title;
                        },
                        ok: function () {
                            return ok;
                        },
                        cancel: function () {
                            return cancel;
                        }
                    }
                });
                return modalInstance.result.then(function () {
                    return true;
                }, function () {
                    return false;
                });
            }
            Modal.openConfirmModal = openConfirmModal;
            function openInfoModal(message, $modal, title, ok, cancel) {
                if (title === void 0) { title = "_defaultNotificationTitle"; }
                if (ok === void 0) { ok = "_ok"; }
                if (cancel === void 0) { cancel = "_cancel"; }
                var modalInstance = $modal.open({
                    templateUrl: 'Client/triarc/Views/partials/notificationInfoModal.html',
                    size: 'md',
                    controller: ModalInstanceCtrl,
                    resolve: {
                        message: function () {
                            return message;
                        },
                        title: function () {
                            return title;
                        },
                        ok: function () {
                            return ok;
                        },
                        cancel: function () {
                            return cancel;
                        }
                    }
                });
                return modalInstance.result.then(function () {
                    return false;
                }, function () {
                    return false;
                });
            }
            Modal.openInfoModal = openInfoModal;
            var ModalInstanceCtrl = function ($scope, $modalInstance, message, title, ok, cancel) {
                $scope.message = message;
                $scope.title = title;
                $scope.ok = ok;
                $scope.cancel = cancel;
            };
        })(Modal = Web.Modal || (Web.Modal = {}));
    })(Web = Triarc.Web || (Triarc.Web = {}));
})(Triarc || (Triarc = {}));

angular.module('tlModal').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('tlModal/notificationModal.html',
    "<div class=\"modal-header\"><h4 class=\"modal-title\" translate>{{title}}</h4></div><div class=\"modal-body\"><div translate>{{message}}</div></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" ng-click=\"$close(result)\" translate>_ok</button> <button class=\"btn btn-warning\" ng-click=\"$dismiss('cancel')\" translate>_cancel</button></div>"
  );

}]);
