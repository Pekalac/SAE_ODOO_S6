/** @odoo-module */

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useTetras } from "@tetras_school_management/app/store/tetras_hook";


export class MainScreen extends Component {
    static template = "tetras_school_management.MainScreen";

    setup() {
        this.tetras = useTetras();
    }
}

registry.category("tetras_screens").add("MainScreen", MainScreen);
