## mytask

to implement tasks regarding erpnext

Tasks
1. Customer Link Filtering
   
In the Sales Invoice, override the customer link field so it only shows customers that belong to the Customer Group: "Dieture Subscribers". This requires customising the get_query for the field.

2. Last 3 Purchase Rates Displayed in the Purchase Invoice
   
When a user selects an item, show the last 3 purchase rates of that item in a section below the item table. Highlight the highest rate clearly.

3. Customer Group Summary Report
   
Create a Query Report showing the total number of customers, grouped by customer group. The report should show columns for Customer Group and Count.

4. Custom Doctype + Workflow
   
Create a new Doctype called Supplier Evaluation with fields:
○ Supplier (Link to Supplier)
○ Rating (1–5)
○ Comments (Text)
Set up a workflow with the following states:
○ Draft
○ Under Review
○ Approved
Only the Manager role should be able to approve the evaluation.

Requirements

ERPNext V15
Frappe V15
  

#### License
mit
