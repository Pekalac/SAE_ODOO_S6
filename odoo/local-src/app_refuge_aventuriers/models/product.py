from odoo import fields, models


class Product(models.Model):
    _name = "tetras.product"
    _description = "Tetras School Management - Product"

    name = fields.Char(string="Name")
    classe = fields.Float(string="Classe", required=True)
    student_ids = fields.One2many(
        string="Students",
        comodel_name="tetras.student",
        inverse_name="classe_id",
        required=True,
    )
