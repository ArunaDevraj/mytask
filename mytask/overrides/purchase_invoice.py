# in your_app/api/purchase.py

import frappe

@frappe.whitelist()
def get_last_3_purchase_rates(item_code):
    return frappe.db.sql("""
        SELECT pi.posting_date, pii.rate, pi.supplier
        FROM `tabPurchase Invoice Item` pii
        JOIN `tabPurchase Invoice` pi ON pi.name = pii.parent
        WHERE pii.item_code = %s AND pi.docstatus = 1
        ORDER BY pi.posting_date DESC
        LIMIT 3
    """, (item_code,), as_dict=True)
