(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/service/authorization.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/authorization.service.ts ***!
  \**************************************************/
/*! exports provided: AuthorizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationService", function() { return AuthorizationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthorizationService = /** @class */ (function () {
    function AuthorizationService() {
        this.isUserLogged = false;
    }
    AuthorizationService.prototype.login = function (userdata) {
        this.registerData = JSON.parse(localStorage.getItem("registration"));
        if (this.registerData.username === userdata.value.username &&
            this.registerData.password === userdata.value.password) {
            this.isUserLogged = true;
            console.log("true");
            return true;
        }
        else {
            console.log("false");
            return false;
        }
    };
    AuthorizationService.prototype.isUserLoggedIn = function () {
        return this.isUserLogged;
    };
    AuthorizationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthorizationService);
    return AuthorizationService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map