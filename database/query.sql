use amazom;
select * from customer;
select * from supplier;
select * from _order;
select * from order_detail;
select * from cart_detail;
select * from image;


SELECT p.*, s.name supplier_name
            FROM product p, supplier s 
            WHERE p.supplier_id=s.supplier_id AND LOWER(p.name) LIKE "%product 1%";

drop table image;

delete from _order where order_id="o1";
delete from order_detail where order_id="o1";
delete from product where supplier_id="sup1";
delete from customer where name="Gucci";

insert into supplier values ("sup1", "supplier name", "supplier email", "sup pwd", "sup address", "sup phone");

insert into product values ("pro1", "product 1", "jacket", "short description", "detail description", "sup1", 12, 12);
insert into product values ("pro2", "product 2", "jacket", "short description", "detail description", "sup1", 13, 13);
insert into product values ("pro3", "product 3", "jacket", "short description", "detail description", "sup1", 1, 14);
insert into product values ("pro4", "product 4", "jacket", "short description", "detail description", "sup1", 19, 15);
insert into product values ("pro5", "product 5", "jacket", "short description", "detail description", "sup1", 10, 16);
insert into product values ("pro6", "product 6", "jacket", "short description", "detail description", "sup1", 60, 17);

insert into product values ("pro10", "product 10", "pant", "short description", "detail description", "b70fb9c8-47cc-47ce-aaf9-120b91794534", 12, 12);
insert into product values ("pro11", "product 11", "shirt", "short description", "detail description", "b70fb9c8-47cc-47ce-aaf9-120b91794534", 11, 13);
insert into product values ("pro12", "product 12", "glasses", "short description", "detail description", "b70fb9c8-47cc-47ce-aaf9-120b91794534", 13, 14);
insert into product values ("pro13", "product 13", "t-shirt", "short description", "detail description", "b70fb9c8-47cc-47ce-aaf9-120b91794534", 9, 15);



select * from product;