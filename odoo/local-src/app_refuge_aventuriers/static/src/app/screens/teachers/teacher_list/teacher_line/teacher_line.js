/** @odoo-module */

import { Component } from "@odoo/owl";


export class TeacherLine extends Component {
    static template = "app_refuge_aventuriers.TeacherLine";

    static props = {
        name: String,
        teacherId: Number,
        onClick: { type: Function, optional: true },
    };
}

