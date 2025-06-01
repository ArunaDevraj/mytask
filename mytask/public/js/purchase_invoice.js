frappe.ui.form.on('Purchase Invoice Item', {
    item_code: function(frm, cdt, cdn) {
        const item_code = locals[cdt][cdn].item_code;
        if (!item_code) {
            cur_frm.set_value('custom_last_3_purchase_rates', '');
            cur_frm.refresh_field('custom_last_3_purchase_rates');
            return;
        }

        // Call your server method to get last 3 rates
        frappe.call({
            method: 'mytask.overrides.purchase_invoice.get_last_3_purchase_rates',
            args: { item_code: item_code },
            callback: function(r) {
                if (r.message) {
                    let rates = r.message;
                    // Highlight highest rate
                    let highest = Math.max(...rates);
                    let html = '<ul>';
                    rates.forEach(rate => {
                        if(rate === highest) {
                            html += `<li><b style="color:red;">${rate}</b></li>`;
                        } else {
                            html += `<li>${rate}</li>`;
                        }
                    });
                    html += '</ul>';

                    cur_frm.set_value('custom_last_3_purchase_rates', html);
                    cur_frm.refresh_field('custom_last_3_purchase_rates');
                }
            }
        });
    }
});
