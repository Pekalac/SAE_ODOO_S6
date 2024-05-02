from odoo import fields, models


class Classe(models.Model):
    _name = "tetras.classe"
    _description = "Tetras School Management - Classe"

    name = fields.Char(string="Name")
    classe = fields.Float(string="Classe", required=True)
    student_ids = fields.One2many(
        string="Students",
        comodel_name="tetras.student",
        inverse_name="classe_id",
        required=True,
    )
