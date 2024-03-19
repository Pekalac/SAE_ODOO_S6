from odoo import fields, models


class Student(models.Model):
    _name = "tetras.student"
    _description = "Tetras School Management - Student"

    name = fields.Char(string="Name", required=True)
    email = fields.Char(string="Email")
    phone = fields.Char(string="Phone")
    birth_day = fields.Date(string="Birth day")
    grade_ids = fields.One2many(
        string="Grades",
        comodel_name="tetras.grade",
        inverse_name="student_id",
        required=True,
    )
