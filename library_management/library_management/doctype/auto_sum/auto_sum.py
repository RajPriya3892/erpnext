# Copyright (c) 2022, Puja and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document

class AutoSum(Document):
	def before_save(self):
		self.total_cost = int(self.article_cost) + int(self.delivery_cost)
	#pass
