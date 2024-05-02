/** @odoo-module */

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useRefuge } from "@app_refuge_aventuriers/app/store/refuge_hook";
import { TeacherLine } from "@app_refuge_aventuriers/app/screens/teachers/teacher_list/teacher_line/teacher_line";
export class TeacherListScreen extends Component {
    static template = "app_refuge_aventuriers.TeacherListScreen";
    static components = { TeacherLine };


    setup() {
        this.refuge = useRefuge();
    }

    async onTeacherClick(teacher) {
        this.refuge.showScreen("TeacherFormScreen", {"teacher": teacher})
    }
}

registry.category("refuge_screens").add("TeacherListScreen", TeacherListScreen);
