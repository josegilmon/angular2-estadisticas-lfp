"use strict";
var router_1 = require('@angular/router');
var team_list_component_1 = require("./team-list.component");
var team_detail_component_1 = require("./team-detail.component");
var appRoutes = [
    { path: '', component: team_list_component_1.TeamListComponent },
    { path: 'team/:id', component: team_detail_component_1.TeamDetailComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map