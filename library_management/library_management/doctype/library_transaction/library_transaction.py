# Copyright (c) 2022, Puja and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document

class Library_transaction(Document):
	def validate_issue(self):
		article=frappe.get_doc("Article",self.article)
		if article.status=="Issued":
			frappe.throw("Article is already issued for another member");
