SELECT
    `customer_group` AS "Customer Group:Link/Customer Group:200",
    COUNT(name) AS "Count:Int:100"
FROM
    `tabCustomer`
GROUP BY
    `customer_group`
ORDER BY
    `customer_group`;
