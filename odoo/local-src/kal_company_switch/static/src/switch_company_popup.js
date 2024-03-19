/** @odoo-module **/

import { Dropdown } from "@web/core/dropdown/dropdown";
import { DropdownItem } from "@web/core/dropdown/dropdown_item";
import { registry } from "@web/core/registry";

import { Component, useChildSubEnv, useState } from "@odoo/owl";
import { debounce } from "@web/core/utils/timing";
import { useService } from "@web/core/utils/hooks";


export class SwitchCompanyButton extends Component {
    static template = "web.SwitchCompanyButton";
    static components = {  };
    static props = {};

    setup() {
        this.companyService = useService("company");
        this.actionService = useService("action");
        //
        // this.companySelector = useState(
        //     new CompanySelector(this.companyService, this.constructor.toggleDelay)
        // );
        // useChildSubEnv({ companySelector: this.companySelector });
    }
    openPopup() {
        this.actionService.doAction("kal_company_switch.switch_company_wizard_action");
    }
}

export const systrayItem = {
    Component: SwitchCompanyButton,
    isDisplayed(env) {
        const { allowedCompanies } = env.services.company;
        return Object.keys(allowedCompanies).length > 1;
    },
};

registry.category("systray").add("SwitchCompanyButton", systrayItem, { sequence: 1 });
