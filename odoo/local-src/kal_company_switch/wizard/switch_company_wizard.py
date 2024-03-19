from odoo import fields, models


class SwitchCompanyWizard(models.TransientModel):
    _name="switch.company.wizard"
    _description="Switch Company Wizard"
    
    company_ids = fields.Many2many(
        string="Companies",
        comodel_name="res.company",
    )