// Copyright (c) 2022, Puja and contributors
// For license information, please see license.txt

frappe.ui.form.on('Library Member',{
	first_name:function(frm){
		let fname= frm.doc.first_name;
		let lname = frm.doc.last_name;
		frm.set_value('full_name', fname + " " + lname);
	},
	last_name:function(frm){
		let fname= frm.doc.first_name;
		let lname = frm.doc.last_name;
		frm.set_value('full_name', fname + " " + lname);
	}
})


frappe.ui.form.on('Library Member', {
	 refresh: function(frm) {

		frm.add_custom_button("Click me to add full name ",function(){
			let fname = frm.doc.first_name;
			let lname = frm.doc.last_name;
			frm.set_value('full_name', fname + " " + lname);
		}),
		frm.add_custom_button("Button one",function(){
			//console.log("Hello there!!");
			// msg ="Our code ran!!";
			//frappe.msgprint(msg);
			let email = frm.doc.email_address;
			frappe.msgprint(email);
		},"Action"),
		frm.add_custom_button("Button two",function(){
			console.log(frm.doc.email_address);
		},"Action"),
		frm.add_custom_button("Button three",function(){
			frappe.prompt("Phone No",({ value }) => {
				if (value) {
					frm.set_value("phone",value);
					frm.refresh_field("phone");
					frappe.msgprint("Phone no added successfully!!");
				}
			});
		},"Action"),
		frm.add_custom_button("Button four",function(){
			frappe.call({
				method:
				"library_management.library_management.doctype.library_member.api.get_all_members",
				callback:function(r){
					console.log(r);
				},
			});
		})
		
	 }
});
