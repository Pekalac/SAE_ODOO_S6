from odoo import fields, models


class Teacher(models.Model):
    _name = "tetras.teacher"
    _description = "Tetras School Management - Teacher"

    name = fields.Char(string="Name")
    email = fields.Char(string="Email")
    phone = fields.Char(string="Phone")
    birth_day = fields.Date(string="Birth day")
    diploma = fields.Char(string="Diploma")

