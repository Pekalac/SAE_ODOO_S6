/** @odoo-module */

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useTetras } from "@tetras_school_management/app/store/tetras_hook";
import { ClasseLine } from "@tetras_school_management/app/screens/classes/classe_list/classe_line/classe_line";
export class ClasseListScreen extends Component {
    static template = "tetras_school_management.ClasseListScreen";
    static components = { ClasseLine };


    setup() {
        this.tetras = useTetras();
    }

    async onClasseClick(classe) {
        this.tetras.showScreen("ClasseFormScreen", {"classe": classe})
    }
}

registry.category("tetras_screens").add("ClasseListScreen", ClasseListScreen);
