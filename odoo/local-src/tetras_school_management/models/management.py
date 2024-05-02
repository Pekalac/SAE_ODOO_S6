from odoo import api, fields, models


class TetrasManagement(models.Model):
    _name = "tetras.management"
    _description = "Tetras Management"

    @api.model
    def load_tetras_data(self):
        return {
            "tetras.student": self.env["tetras.student"].search_read(
                fields=["name", "email", "id", "birth_day", "phone", "grade_ids"]),
            "tetras.teacher": self.env["tetras.teacher"].search_read(
                fields=["name", "email", "id", "birth_day", "phone"]),
            "tetras.classe": self.env["tetras.classe"].search_read(
                fields=["name", "classe", "student_ids"]),
            "tetras.grade": self.env["tetras.grade"].search_read(
                fields=["name", "grade", "student_id"]),
            "product.template": self.env["product.template"].search_read(
                fields=["name", "description", "type"])
        }
