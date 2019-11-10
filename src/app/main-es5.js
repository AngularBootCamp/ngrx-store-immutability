function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _notification_manager_notification_manager_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./notification-manager/notification-manager.component */
    "./src/app/notification-manager/notification-manager.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "notification-manager");
        }
      },
      directives: [_notification_manager_notification_manager_component__WEBPACK_IMPORTED_MODULE_1__["NotificationManagerComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'app-root',
        templateUrl: './app.component.html'
      }]
    }], null, null);
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _notification_manager_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./notification-manager/employee-list/employee-list.component */
    "./src/app/notification-manager/employee-list/employee-list.component.ts");
    /* harmony import */


    var _notification_manager_notification_manager_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./notification-manager/notification-manager.component */
    "./src/app/notification-manager/notification-manager.component.ts");
    /* harmony import */


    var _notification_manager_position_list_position_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./notification-manager/position-list/position-list.component */
    "./src/app/notification-manager/position-list/position-list.component.ts");
    /* harmony import */


    var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./reducers */
    "./src/app/reducers.ts");
    /* harmony import */


    var _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared-module/shared.module */
    "./src/app/shared-module/shared.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_7__["ROOT_REDUCERS"], {
        // Starting with NgRx 9 these will be turned on by default
        runtimeChecks: {
          strictStateImmutability: true,
          strictStateSerializability: true,
          strictActionImmutability: true,
          strictActionSerializability: true
        }
      }), _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]]]
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _notification_manager_notification_manager_component__WEBPACK_IMPORTED_MODULE_5__["NotificationManagerComponent"], _notification_manager_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeListComponent"], _notification_manager_position_list_position_list_component__WEBPACK_IMPORTED_MODULE_6__["PositionListComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreRootModule"], _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]]
    });
    /*@__PURE__*/


    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _notification_manager_notification_manager_component__WEBPACK_IMPORTED_MODULE_5__["NotificationManagerComponent"], _notification_manager_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeListComponent"], _notification_manager_position_list_position_list_component__WEBPACK_IMPORTED_MODULE_6__["PositionListComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_7__["ROOT_REDUCERS"], {
          // Starting with NgRx 9 these will be turned on by default
          runtimeChecks: {
            strictStateImmutability: true,
            strictStateSerializability: true,
            strictActionImmutability: true,
            strictActionSerializability: true
          }
        }), _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      }]
    }], null, null);
    /***/

  },

  /***/
  "./src/app/employees.state.ts":
  /*!************************************!*\
    !*** ./src/app/employees.state.ts ***!
    \************************************/

  /*! exports provided: ackEmployee, employeesReceived, employeeReducer, getNewEmployees, getCurrentEmployees */

  /***/
  function srcAppEmployeesStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ackEmployee", function () {
      return ackEmployee;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "employeesReceived", function () {
      return employeesReceived;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "employeeReducer", function () {
      return employeeReducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getNewEmployees", function () {
      return getNewEmployees;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getCurrentEmployees", function () {
      return getCurrentEmployees;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./state */
    "./src/app/state.ts");

    var ackEmployee = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('ACK_EMPLOYEE', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var employeesReceived = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('EMPLOYEES_RECEIVED', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var defaultEmployeeState = {
      newEmployees: [],
      currentEmployees: []
    };
    var employeeReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(defaultEmployeeState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(ackEmployee, function (state, action) {
      return acknowledgeEmployee(state, action.employee);
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state__WEBPACK_IMPORTED_MODULE_1__["ackAll"], function (state) {
      return {
        currentEmployees: [].concat(_toConsumableArray(state.currentEmployees), _toConsumableArray(state.newEmployees)),
        newEmployees: []
      };
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(employeesReceived, function (_state, action) {
      return action.employees;
    }));

    function acknowledgeEmployee(currentState, employee) {
      var newEmployees = currentState.newEmployees.filter(function (x) {
        return x !== employee;
      });
      var currentEmployees = [].concat(_toConsumableArray(currentState.currentEmployees), [employee]);
      return {
        newEmployees: newEmployees,
        currentEmployees: currentEmployees
      };
    } // createSelector will memoize (cache) the result, meaning it will
    // give the same object until the state changes


    var getEmployeeState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('employees');
    var getNewEmployees = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEmployeeState, function (state) {
      return state.newEmployees;
    });
    var getCurrentEmployees = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEmployeeState, function (state) {
      return state.currentEmployees;
    });
    /***/
  },

  /***/
  "./src/app/notification-manager/employee-list/employee-list.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/notification-manager/employee-list/employee-list.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: EmployeeListComponent */

  /***/
  function srcAppNotificationManagerEmployeeListEmployeeListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function () {
      return EmployeeListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _employees_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../employees.state */
    "./src/app/employees.state.ts");
    /* harmony import */


    var _shared_module_current_employees_current_employees_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared-module/current-employees/current-employees.component */
    "./src/app/shared-module/current-employees/current-employees.component.ts");
    /* harmony import */


    var _shared_module_new_employees_new_employees_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared-module/new-employees/new-employees.component */
    "./src/app/shared-module/new-employees/new-employees.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /*
      Components now pass and receive information between itself
      and the store
    */


    var EmployeeListComponent =
    /*#__PURE__*/
    function () {
      function EmployeeListComponent(store) {
        _classCallCheck(this, EmployeeListComponent);

        this.store = store;
        this.curEmployees = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_employees_state__WEBPACK_IMPORTED_MODULE_2__["getCurrentEmployees"]));
        this.newEmployees = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_employees_state__WEBPACK_IMPORTED_MODULE_2__["getNewEmployees"]));
      }

      _createClass(EmployeeListComponent, [{
        key: "ackEmp",
        value: function ackEmp(employee) {
          this.store.dispatch(Object(_employees_state__WEBPACK_IMPORTED_MODULE_2__["ackEmployee"])({
            employee: employee
          }));
        }
      }]);

      return EmployeeListComponent;
    }();

    EmployeeListComponent.ɵfac = function EmployeeListComponent_Factory(t) {
      return new (t || EmployeeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    EmployeeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmployeeListComponent,
      selectors: [["employee-list"]],
      decls: 12,
      vars: 6,
      consts: [[1, "card"], [1, "card-content"], [1, "card-title"], [3, "employeeList"], [3, "newEmpList", "ackEmployee"]],
      template: function EmployeeListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Current Employees");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "current-employees", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "New Employees");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "new-employees", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ackEmployee", function EmployeeListComponent_Template_new_employees_ackEmployee_10_listener($event) {
            return ctx.ackEmp($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("employeeList", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx.curEmployees));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("newEmpList", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 4, ctx.newEmployees));
        }
      },
      directives: [_shared_module_current_employees_current_employees_component__WEBPACK_IMPORTED_MODULE_3__["CurrentEmployeesComponent"], _shared_module_new_employees_new_employees_component__WEBPACK_IMPORTED_MODULE_4__["NewEmployeesComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeListComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'employee-list',
        templateUrl: './employee-list.component.html'
      }]
    }], function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
      }];
    }, null);
    /***/

  },

  /***/
  "./src/app/notification-manager/notification-manager.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/notification-manager/notification-manager.component.ts ***!
    \************************************************************************/

  /*! exports provided: NotificationManagerComponent */

  /***/
  function srcAppNotificationManagerNotificationManagerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationManagerComponent", function () {
      return NotificationManagerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _employees_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../employees.state */
    "./src/app/employees.state.ts");
    /* harmony import */


    var _positions_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../positions.state */
    "./src/app/positions.state.ts");
    /* harmony import */


    var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../state */
    "./src/app/state.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./employee-list/employee-list.component */
    "./src/app/notification-manager/employee-list/employee-list.component.ts");
    /* harmony import */


    var _position_list_position_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./position-list/position-list.component */
    "./src/app/notification-manager/position-list/position-list.component.ts");

    var NotificationManagerComponent =
    /*#__PURE__*/
    function () {
      function NotificationManagerComponent(store) {
        _classCallCheck(this, NotificationManagerComponent);

        this.store = store;
        var employees = {
          currentEmployees: ['Alice Anderson', 'Billy Burton', 'Carol Carson', 'David Dennison'],
          newEmployees: ['Erin Ericcson', 'Frank Ferdinand']
        };
        var positions = {
          currentPositions: ['Copier', 'Secretary to Customer Design Spec Engineer', 'Tester', 'Phone Bank Worker'],
          newPositions: ['Manager', 'Break Room Attendant']
        };
        store.dispatch(Object(_employees_state__WEBPACK_IMPORTED_MODULE_1__["employeesReceived"])({
          employees: employees
        }));
        store.dispatch(Object(_positions_state__WEBPACK_IMPORTED_MODULE_2__["positionsReceived"])({
          positions: positions
        }));
      }

      _createClass(NotificationManagerComponent, [{
        key: "ackAll",
        value: function ackAll() {
          this.store.dispatch(Object(_state__WEBPACK_IMPORTED_MODULE_3__["ackAll"])());
        }
      }]);

      return NotificationManagerComponent;
    }();

    NotificationManagerComponent.ɵfac = function NotificationManagerComponent_Factory(t) {
      return new (t || NotificationManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]));
    };

    NotificationManagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotificationManagerComponent,
      selectors: [["notification-manager"]],
      decls: 5,
      vars: 0,
      consts: [[1, "two-across"], [1, "btn", 3, "click"]],
      template: function NotificationManagerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "employee-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "position-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationManagerComponent_Template_button_click_3_listener($event) {
            return ctx.ackAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Acknowledge All");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeListComponent"], _position_list_position_list_component__WEBPACK_IMPORTED_MODULE_6__["PositionListComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationManagerComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'notification-manager',
        templateUrl: './notification-manager.component.html'
      }]
    }], function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
      }];
    }, null);
    /***/

  },

  /***/
  "./src/app/notification-manager/position-list/position-list.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/notification-manager/position-list/position-list.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: PositionListComponent */

  /***/
  function srcAppNotificationManagerPositionListPositionListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PositionListComponent", function () {
      return PositionListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _positions_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../positions.state */
    "./src/app/positions.state.ts");
    /* harmony import */


    var _shared_module_current_positions_current_positions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared-module/current-positions/current-positions.component */
    "./src/app/shared-module/current-positions/current-positions.component.ts");
    /* harmony import */


    var _shared_module_new_positions_new_positions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared-module/new-positions/new-positions.component */
    "./src/app/shared-module/new-positions/new-positions.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var PositionListComponent =
    /*#__PURE__*/
    function () {
      function PositionListComponent(store) {
        _classCallCheck(this, PositionListComponent);

        this.store = store;
        this.curPositions = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_positions_state__WEBPACK_IMPORTED_MODULE_2__["getCurrentPositions"]));
        this.newPositions = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_positions_state__WEBPACK_IMPORTED_MODULE_2__["getNewPositions"]));
      }

      _createClass(PositionListComponent, [{
        key: "ackPos",
        value: function ackPos(position) {
          this.store.dispatch(Object(_positions_state__WEBPACK_IMPORTED_MODULE_2__["ackPosition"])({
            position: position
          }));
        }
      }]);

      return PositionListComponent;
    }();

    PositionListComponent.ɵfac = function PositionListComponent_Factory(t) {
      return new (t || PositionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    PositionListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PositionListComponent,
      selectors: [["position-list"]],
      decls: 12,
      vars: 6,
      consts: [[1, "card"], [1, "card-content"], [1, "card-title"], [3, "positionList"], [3, "newPosList", "ackPositions"]],
      template: function PositionListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Current Positions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "current-positions", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "New Positions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "new-positions", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ackPositions", function PositionListComponent_Template_new_positions_ackPositions_10_listener($event) {
            return ctx.ackPos($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("positionList", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx.curPositions));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("newPosList", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 4, ctx.newPositions));
        }
      },
      directives: [_shared_module_current_positions_current_positions_component__WEBPACK_IMPORTED_MODULE_3__["CurrentPositionsComponent"], _shared_module_new_positions_new_positions_component__WEBPACK_IMPORTED_MODULE_4__["NewPositionsComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PositionListComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'position-list',
        templateUrl: './position-list.component.html'
      }]
    }], function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
      }];
    }, null);
    /***/

  },

  /***/
  "./src/app/positions.state.ts":
  /*!************************************!*\
    !*** ./src/app/positions.state.ts ***!
    \************************************/

  /*! exports provided: ackPosition, positionsReceived, positionReducer, getNewPositions, getCurrentPositions */

  /***/
  function srcAppPositionsStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ackPosition", function () {
      return ackPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "positionsReceived", function () {
      return positionsReceived;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "positionReducer", function () {
      return positionReducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getNewPositions", function () {
      return getNewPositions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getCurrentPositions", function () {
      return getCurrentPositions;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./state */
    "./src/app/state.ts");

    var ackPosition = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('ACK_POSITION', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var positionsReceived = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('POSITION_RECEIVED', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var defaultPositionState = {
      newPositions: [],
      currentPositions: []
    };
    var positionReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(defaultPositionState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(ackPosition, function (state, action) {
      return acknowledgePosition(action.position, state);
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state__WEBPACK_IMPORTED_MODULE_1__["ackAll"], function (state) {
      return {
        currentPositions: [].concat(_toConsumableArray(state.currentPositions), _toConsumableArray(state.newPositions)),
        newPositions: []
      };
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(positionsReceived, function (_state, action) {
      return action.positions;
    }));

    function acknowledgePosition(position, currentState) {
      var newPositions = currentState.newPositions.filter(function (x) {
        return x !== position;
      });
      var currentPositions = [].concat(_toConsumableArray(currentState.currentPositions), [position]);
      return {
        newPositions: newPositions,
        currentPositions: currentPositions
      };
    } // defensive copy of the data coming out of the store
    // createSelector will memoize (cache) the result, meaning it will
    // give the same object until the state changes


    var getPositionState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('positions');
    var getNewPositions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPositionState, function (state) {
      return _toConsumableArray(state.newPositions);
    });
    var getCurrentPositions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPositionState, function (state) {
      return _toConsumableArray(state.currentPositions);
    });
    /***/
  },

  /***/
  "./src/app/reducers.ts":
  /*!*****************************!*\
    !*** ./src/app/reducers.ts ***!
    \*****************************/

  /*! exports provided: ROOT_REDUCERS */

  /***/
  function srcAppReducersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROOT_REDUCERS", function () {
      return ROOT_REDUCERS;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _employees_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./employees.state */
    "./src/app/employees.state.ts");
    /* harmony import */


    var _positions_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./positions.state */
    "./src/app/positions.state.ts"); // Register your reducers with NgRx framework in an AOT-compatible way


    var ROOT_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Root reducers token', {
      factory: function factory() {
        return {
          employees: _employees_state__WEBPACK_IMPORTED_MODULE_1__["employeeReducer"],
          positions: _positions_state__WEBPACK_IMPORTED_MODULE_2__["positionReducer"]
        };
      }
    });
    /***/
  },

  /***/
  "./src/app/shared-module/current-employees/current-employees.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/shared-module/current-employees/current-employees.component.ts ***!
    \********************************************************************************/

  /*! exports provided: CurrentEmployeesComponent */

  /***/
  function srcAppSharedModuleCurrentEmployeesCurrentEmployeesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrentEmployeesComponent", function () {
      return CurrentEmployeesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CurrentEmployeesComponent_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var employee_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employee_r1, " ");
      }
    }

    var CurrentEmployeesComponent = function CurrentEmployeesComponent() {
      _classCallCheck(this, CurrentEmployeesComponent);

      this.employeeList = [];
    };

    CurrentEmployeesComponent.ɵfac = function CurrentEmployeesComponent_Factory(t) {
      return new (t || CurrentEmployeesComponent)();
    };

    CurrentEmployeesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CurrentEmployeesComponent,
      selectors: [["current-employees"]],
      inputs: {
        employeeList: "employeeList"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "collection"], ["class", "collection-item", 4, "ngFor", "ngForOf"], [1, "collection-item"]],
      template: function CurrentEmployeesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CurrentEmployeesComponent_li_1_Template, 2, 1, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.employeeList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentEmployeesComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'current-employees',
        templateUrl: './current-employees.component.html'
      }]
    }], null, {
      employeeList: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    });
    /***/

  },

  /***/
  "./src/app/shared-module/current-positions/current-positions.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/shared-module/current-positions/current-positions.component.ts ***!
    \********************************************************************************/

  /*! exports provided: CurrentPositionsComponent */

  /***/
  function srcAppSharedModuleCurrentPositionsCurrentPositionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrentPositionsComponent", function () {
      return CurrentPositionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CurrentPositionsComponent_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var position_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", position_r3, " ");
      }
    }

    var CurrentPositionsComponent = function CurrentPositionsComponent() {
      _classCallCheck(this, CurrentPositionsComponent);

      this.positionList = [];
    };

    CurrentPositionsComponent.ɵfac = function CurrentPositionsComponent_Factory(t) {
      return new (t || CurrentPositionsComponent)();
    };

    CurrentPositionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CurrentPositionsComponent,
      selectors: [["current-positions"]],
      inputs: {
        positionList: "positionList"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "collection"], ["class", "collection-item", 4, "ngFor", "ngForOf"], [1, "collection-item"]],
      template: function CurrentPositionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CurrentPositionsComponent_li_1_Template, 2, 1, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.positionList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentPositionsComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'current-positions',
        templateUrl: './current-positions.component.html'
      }]
    }], null, {
      positionList: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    });
    /***/

  },

  /***/
  "./src/app/shared-module/new-employees/new-employees.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shared-module/new-employees/new-employees.component.ts ***!
    \************************************************************************/

  /*! exports provided: NewEmployeesComponent */

  /***/
  function srcAppSharedModuleNewEmployeesNewEmployeesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewEmployeesComponent", function () {
      return NewEmployeesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NewEmployeesComponent_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewEmployeesComponent_li_1_Template_button_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var employee_r5 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.ack(employee_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Acknowledge");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var employee_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employee_r5, " ");
      }
    }

    var NewEmployeesComponent =
    /*#__PURE__*/
    function () {
      function NewEmployeesComponent() {
        _classCallCheck(this, NewEmployeesComponent);

        this.newEmpList = [];
        this.ackEmployee = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(NewEmployeesComponent, [{
        key: "ack",
        value: function ack(employee) {
          this.ackEmployee.emit(employee);
        }
      }]);

      return NewEmployeesComponent;
    }();

    NewEmployeesComponent.ɵfac = function NewEmployeesComponent_Factory(t) {
      return new (t || NewEmployeesComponent)();
    };

    NewEmployeesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewEmployeesComponent,
      selectors: [["new-employees"]],
      inputs: {
        newEmpList: "newEmpList"
      },
      outputs: {
        ackEmployee: "ackEmployee"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "collection"], ["class", "collection-item", 4, "ngFor", "ngForOf"], [1, "collection-item"], [1, "btn", 3, "click"]],
      template: function NewEmployeesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewEmployeesComponent_li_1_Template, 4, 1, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.newEmpList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewEmployeesComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'new-employees',
        templateUrl: './new-employees.component.html'
      }]
    }], null, {
      newEmpList: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      ackEmployee: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    });
    /***/

  },

  /***/
  "./src/app/shared-module/new-positions/new-positions.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shared-module/new-positions/new-positions.component.ts ***!
    \************************************************************************/

  /*! exports provided: NewPositionsComponent */

  /***/
  function srcAppSharedModuleNewPositionsNewPositionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewPositionsComponent", function () {
      return NewPositionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NewPositionsComponent_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewPositionsComponent_li_1_Template_button_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var position_r9 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.ack(position_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Acknowledge");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var position_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", position_r9, " ");
      }
    }

    var NewPositionsComponent =
    /*#__PURE__*/
    function () {
      function NewPositionsComponent() {
        _classCallCheck(this, NewPositionsComponent);

        this.newPosList = [];
        this.ackPositions = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(NewPositionsComponent, [{
        key: "ack",
        value: function ack(position) {
          this.ackPositions.emit(position);
        }
      }]);

      return NewPositionsComponent;
    }();

    NewPositionsComponent.ɵfac = function NewPositionsComponent_Factory(t) {
      return new (t || NewPositionsComponent)();
    };

    NewPositionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewPositionsComponent,
      selectors: [["new-positions"]],
      inputs: {
        newPosList: "newPosList"
      },
      outputs: {
        ackPositions: "ackPositions"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "collection"], ["class", "collection-item", 4, "ngFor", "ngForOf"], [1, "collection-item"], [1, "btn", 3, "click"]],
      template: function NewPositionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewPositionsComponent_li_1_Template, 4, 1, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.newPosList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewPositionsComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'new-positions',
        templateUrl: './new-positions.component.html'
      }]
    }], null, {
      newPosList: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      ackPositions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    });
    /***/

  },

  /***/
  "./src/app/shared-module/shared.module.ts":
  /*!************************************************!*\
    !*** ./src/app/shared-module/shared.module.ts ***!
    \************************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedModuleSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _current_employees_current_employees_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./current-employees/current-employees.component */
    "./src/app/shared-module/current-employees/current-employees.component.ts");
    /* harmony import */


    var _current_positions_current_positions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./current-positions/current-positions.component */
    "./src/app/shared-module/current-positions/current-positions.component.ts");
    /* harmony import */


    var _new_employees_new_employees_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./new-employees/new-employees.component */
    "./src/app/shared-module/new-employees/new-employees.component.ts");
    /* harmony import */


    var _new_positions_new_positions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./new-positions/new-positions.component */
    "./src/app/shared-module/new-positions/new-positions.component.ts");

    var components = [_current_employees_current_employees_component__WEBPACK_IMPORTED_MODULE_2__["CurrentEmployeesComponent"], _current_positions_current_positions_component__WEBPACK_IMPORTED_MODULE_3__["CurrentPositionsComponent"], _new_employees_new_employees_component__WEBPACK_IMPORTED_MODULE_4__["NewEmployeesComponent"], _new_positions_new_positions_component__WEBPACK_IMPORTED_MODULE_5__["NewPositionsComponent"]];

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, {
      declarations: [_current_employees_current_employees_component__WEBPACK_IMPORTED_MODULE_2__["CurrentEmployeesComponent"], _current_positions_current_positions_component__WEBPACK_IMPORTED_MODULE_3__["CurrentPositionsComponent"], _new_employees_new_employees_component__WEBPACK_IMPORTED_MODULE_4__["NewEmployeesComponent"], _new_positions_new_positions_component__WEBPACK_IMPORTED_MODULE_5__["NewPositionsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
      exports: [_current_employees_current_employees_component__WEBPACK_IMPORTED_MODULE_2__["CurrentEmployeesComponent"], _current_positions_current_positions_component__WEBPACK_IMPORTED_MODULE_3__["CurrentPositionsComponent"], _new_employees_new_employees_component__WEBPACK_IMPORTED_MODULE_4__["NewEmployeesComponent"], _new_positions_new_positions_component__WEBPACK_IMPORTED_MODULE_5__["NewPositionsComponent"]]
    });
    /*@__PURE__*/


    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
        declarations: components,
        exports: components
      }]
    }], null, null);
    /***/

  },

  /***/
  "./src/app/state.ts":
  /*!**************************!*\
    !*** ./src/app/state.ts ***!
    \**************************/

  /*! exports provided: ackAll */

  /***/
  function srcAppStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ackAll", function () {
      return ackAll;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var ackAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('ACK_ALL');
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/kcordes/projects/Ang/angular-class-material/abc/AOT-SKIP-cli/sandbox/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]); //# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map