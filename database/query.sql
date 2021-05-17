use amazom;
select * from customer;
select * from _order;
select * from order_detail;
select * from cart_detail;

drop table image;

delete from _order where order_id="o1";
delete from order_detail where order_id="o1";
delete from product where supplier_id="sup1";

insert into supplier values ("sup1", "supplier name", "supplier email", "sup pwd", "sup address", "sup phone");

insert into product values ("pro1", "product 1", "jacket", "short description", "detail description", "sup1", 12, 12);
insert into product values ("pro2", "product 2", "jacket", "short description", "detail description", "sup1", 13, 13);
insert into product values ("pro3", "product 3", "jacket", "short description", "detail description", "sup1", 1, 14);
insert into product values ("pro4", "product 4", "jacket", "short description", "detail description", "sup1", 19, 15);
insert into product values ("pro5", "product 5", "jacket", "short description", "detail description", "sup1", 10, 16);
insert into product values ("pro6", "product 6", "jacket", "short description", "detail description", "sup1", 60, 17);


select * from product;