/** @odoo-module */

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useRefuge } from "@app_refuge_aventuriers/app/store/refuge_hook";

export class TeacherFormScreen extends Component {
    static template = "app_refuge_aventuriers.TeacherFormScreen";

    setup() {
        this.refuge = useRefuge();
    }

}

registry.category("refuge_screens").add("TeacherFormScreen", TeacherFormScreen);
