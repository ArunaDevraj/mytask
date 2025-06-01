
from erpnext.accounts.doctype.sales_invoice.sales_invoice import SalesInvoice as ERPNextSalesInvoice
import frappe
from frappe import _

class CustomSalesInvoice(ERPNextSalesInvoice):
    def validate(self):
        super().validate()

        # Only customers from 'Dieture Subscribers' are allowed
        customer_group = frappe.db.get_value("Customer", self.customer, "customer_group")
        if customer_group != "Dieture Subscribers":
            frappe.throw(_("Only customers from the 'Dieture Subscribers' group can be selected."))
