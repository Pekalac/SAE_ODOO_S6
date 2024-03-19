/** @odoo-module */

import { Transition } from "@web/core/transition";
import { MainComponentsContainer } from "@web/core/main_components_container";
import { ErrorHandler } from "@web/core/utils/components";
import { Component, onMounted, onWillStart } from "@odoo/owl";
import { useTetras } from "@tetras_school_management/app/store/tetras_hook";

/**
 * Chrome is the root component of the Tetras App.
 */
export class Chrome extends Component {
    static template = "tetras_school_management.Chrome";
    static components = { Transition, ErrorHandler };
    setup() {
        this.tetras = useTetras();
    }
}
