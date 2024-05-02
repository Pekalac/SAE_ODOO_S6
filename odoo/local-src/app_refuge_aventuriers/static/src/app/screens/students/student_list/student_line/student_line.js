/** @odoo-module */

import { Component } from "@odoo/owl";


export class StudentLine extends Component {
    static template = "app_refuge_aventuriers.StudentLine";

    static props = {
        name: String,
        studentId: Number,
        onClick: { type: Function, optional: true },
    };
}

