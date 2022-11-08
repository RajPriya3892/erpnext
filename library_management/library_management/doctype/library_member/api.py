import frappe

@frappe.whitelist(allow_guest=True)
def get_all_members():
    members = frappe.db.sql("SELECT full_name,email_address from `tabLibrary Member`;",as_dict=True)
    return members


@frappe.whitelist(allow_guest=True)
def get_member(member_id):
    #member_id='LM00006'
    member_detail = frappe.db.sql(f"""SELECT full_name,email_address from `tabLibrary Member` WHERE name='{member_id}';""",as_dict=True)
    
    if(member_detail):
        return member_detail
    else:
        return "Member does not exists"

    #f """" is use to display formatted string