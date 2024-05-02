/** @odoo-module */

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useRefuge } from "@app_refuge_aventuriers/app/store/refuge_hook";
import { StudentLine } from "@app_refuge_aventuriers/app/screens/students/student_list/student_line/student_line";
export class StudentListScreen extends Component {
    static template = "app_refuge_aventuriers.StudentListScreen";
    static components = { StudentLine };


    setup() {
        this.refuge = useRefuge();
    }

    async onStudentClick(student) {
        this.refuge.showScreen("StudentFormScreen", {"student": student})
    }
}

registry.category("refuge_screens").add("StudentListScreen", StudentListScreen);
