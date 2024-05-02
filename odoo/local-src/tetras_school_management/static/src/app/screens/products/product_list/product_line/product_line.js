/** @odoo-module */

import { Component } from "@odoo/owl";


export class ProductLine extends Component {
    static template = "tetras_school_management.ProductLine";

    static props = {
        name: String,
        productId: Number,
        onClick: { type: Function, optional: true },
    };
}

