use amazom;
select * from customer;
select * from _order;
select * from order_detail;
select * from cart_detail;

delete from _order where order_id="o1";
delete from order_detail where order_id="o1";

insert into supplier values ("sup1", "supplier name", "supplier email", "sup pwd", "sup address", "sup phone");

insert into product values ("pro1", "product 1", "jacket", "short description", "detail description", "sup1", 12);
insert into product values ("pro2", "product 1", "jacket", "short description", "detail description", "sup1", 12);
insert into product values ("pro3", "product 1", "jacket", "short description", "detail description", "sup1", 12);
insert into product values ("pro4", "product 1", "jacket", "short description", "detail description", "sup1", 12);
insert into product values ("pro5", "product 1", "jacket", "short description", "detail description", "sup1", 12);
insert into product values ("pro6", "product 1", "jacket", "short description", "detail description", "sup1", 12);


select * from product;