## mytask

to implement tasks regarding ERPNext

Tasks

1. Customer Link Filtering
   
In the Sales Invoice, override the customer link field so it only shows customers that belong to the Customer Group: "Dieture Subscribers". This requires customising the get_query for the field.
This is implemented by writing a client script for the Sales Invoice Doctype with filters: { customer_group: "Dieture Subscribers" }

2. Last 3 Purchase Rates Displayed in the Purchase Invoice
   
When a user selects an item, show the last 3 purchase rates of that item in a section below the item table. Highlight the highest rate.
This is implemented by creating a custom field of field type "HTML" and 
A Python script for retrieving the last 3 purchase rates for a given item, and 
A client script is generated to fetch the last 3 purchase rates for that item via a Python function.
Builds an HTML table to show the rates below the item table.
Highlights the highest rate visually.

3. Customer Group Summary Report
   
Create a Query Report showing the total number of customers, grouped by customer group. The report should show columns for Customer Group and Count.
This is implemented by creating a query report for the doctype "Customer" and making it a standard, and the module is my custom_app named "mytask". After that, write the SQL query in the Query/Script section.

4. Custom Doctype + Workflow
   
Create a new Doctype called Supplier Evaluation with fields:

This is implemented by creating a submittable doctype with the following fields, and the module is my custom_app named "mytask"
- Supplier (Link to Supplier Doctype)
- Rating (field type: Rating)
- Comments (field type: Text)
- Status: (Field type: Select,  Options: Draft, Under Review, Approved)(Read only)
Set up a workflow with the following states:
○ Draft
○ Under Review
○ Approved
Only the Purchase Manager role should be able to approve the evaluation.

Requirements

ERPNext V15
Frappe V15
  

#### License
mit
