/** @odoo-module */
import { Reactive } from "@web/core/utils/reactive";
import { registry } from "@web/core/registry";

export class RefugeStore extends Reactive {
    mainScreen = { name: null, component: null };
    static serviceDependencies = [
        "orm",
    ];
    constructor() {
        super();
        this.ready = this.setup(...arguments).then(() => this);
    }

    async setup(env, { orm }) {
        this.env = env;
        this.orm = orm;

        await this.load_server_data();

        this.showScreen("MainScreen");
    }

    async load_server_data() {
        const loadedData = await this.orm.silent.call("refuge.management", "load_refuge_data", []);
        await this._processData(loadedData);
    }

    async _processData(loadedData) {
        this.students = loadedData["refuge.student"];
        this.teachers = loadedData["refuge.teacher"];
        this.classes = loadedData["refuge.classe"];
        this.grades = loadedData["refuge.grade"];

        for (const classe of this.classes) {
            classe["students"] = []
            for (const student_id of classe.student_ids) {
                let student = this.getStudent(student_id);
                classe["students"].push(student)
            }
        }

        for (const student of this.students) {
            student["grades"] = []
            for (const grade_id of student.grade_ids) {
                let grade = this.getGrade(grade_id);
                student["grades"].push(grade)
            }
        }

        console.log(this.classes);
        console.log(this.grades);

    }

    getStudent(id) {
        for (const student of this.students) {
            if (student.id == id) {
                return student;
            }
        }
    }

    getGrade(id) {
        for (const grade of this.grades) {
            if (grade.id == id) {
                return grade;
            }
        }
    }

    showScreen(name, props) {
        const component = registry.category("refuge_screens").get(name);
        this.mainScreen = { component, props };
    }
}


export const refugeService = {
    dependencies: RefugeStore.serviceDependencies,
    async start(env, deps) {
        return new RefugeStore(env, deps).ready;
    },
};


registry.category("services").add("refuge", refugeService);
