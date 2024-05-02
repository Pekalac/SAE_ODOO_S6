from odoo import fields, models


class Person(models.Model):
    _name = "tetras.person"
    _description = "Tetras School Management - Person"

    name = fields.Char(string="Name")
    email = fields.Char(string="Email")
    phone = fields.Char(string="Phone")
    birth_day = fields.Date(string="Birth day")
    diploma = fields.Char(string="Diploma")


class Student(Person):
    _name = "tetras.student"
    _description = "Tetras School Management - Student"
    _inherit = "tetras.person"

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
    classe_id = fields.Many2one(
        string="Classe",
        comodel_name="tetras.classe",
        required=True,
    )


class Teacher(Person):
    _name = "tetras.teacher"
    _description = "Tetras School Management - Teacher"
    _inherit = "tetras.person"

    name = fields.Char(string="Name")
    email = fields.Char(string="Email")
    phone = fields.Char(string="Phone")
    birth_day = fields.Date(string="Birth day")
    diploma = fields.Char(string="Diploma")

