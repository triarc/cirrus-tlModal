var Triarc;
(function (Triarc) {
    var Web;
    (function (Web) {
        var Modal;
        (function (Modal) {
            Modal.mod = angular.module('tlModal', ['ui.bootstrap.modal']);
            function openConfirmModal(message, $modal, title) {
                if (title === void 0) { title = "_defaultNotificationTitle"; }
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
            var ModalInstanceCtrl = function ($scope, $modalInstance, message, title) {
                $scope.message = message;
                $scope.title = title;
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
