/** @odoo-module */

import { Component } from "@odoo/owl";


export class ClasseLine extends Component {
    static template = "tetras_school_management.ClasseLine";

    static props = {
        name: String,
        classeId: Number,
        onClick: { type: Function, optional: true },
    };
}

