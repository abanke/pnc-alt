
use avendus;
CREATE TABLE file_master (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    pdf_name VARCHAR(256) NOT NULL,
    output_excel_name VARCHAR(256) NOT NULL,
    pdf_path VARCHAR(256) NOT NULL,
    excel_path VARCHAR(256) NOT NULL,
    pdf_uploaded_by VARCHAR(256) NOT NULL,
    pdf_uploaded_time datetime,
    excel_uploaded_by VARCHAR(256) NOT NULL,
    excel_uploaded_time datetime
);

INSERT INTO file_master(pdf_name,output_excel_name,pdf_path,excel_path,pdf_uploaded_by,pdf_uploaded_time,excel_uploaded_by,excel_uploaded_time)
values ('BOOK_J2EE_READONLY.pdf', 'Sample1.xlsx','/home/abhijit/MyWork','/home/abhijit/MyWork','admin', current_date, 'admin',current_date);