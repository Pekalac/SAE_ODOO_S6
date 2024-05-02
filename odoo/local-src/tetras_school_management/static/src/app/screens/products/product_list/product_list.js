/** @odoo-module */

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useTetras } from "@tetras_school_management/app/store/tetras_hook";
import { ProductLine } from "@tetras_school_management/app/screens/products/product_list/product_line/product_line";
export class ProductListScreen extends Component {
    static template = "tetras_school_management.ProductListScreen";
    static components = { ProductLine };


    setup() {
        this.tetras = useTetras();
    }

    async onProductClick(product) {
        this.tetras.showScreen("ProductFormScreen", {"product": product})
    }
}

registry.category("tetras_screens").add("ProductListScreen", ProductListScreen);
