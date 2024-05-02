from odoo import fields, models


class Grade(models.Model):
    _name = "tetras.grade"
    _description = "Tetras School Management - Grade"

    name = fields.Char(string="Name")
    grade = fields.Float(string="Grade", required=True)
    student_id = fields.Many2one(
        string="Student",
        comodel_name="tetras.student",
        required=True,
    )
