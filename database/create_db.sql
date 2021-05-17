drop database if exists amazom;
create database amazom;
use amazom;

create table customer(
	customer_id varchar(50) primary key,
    name varchar(30),
    email varchar(30),
    password varchar(30),
    address varchar(40),
    phone_number varchar(12));
    
create table supplier(
	supplier_id varchar(50) primary key,
    name varchar(30),
    email varchar(30),
    password varchar(30),
    address varchar(40),
    phone_number varchar(12));
    
create table _order(
	order_id varchar(50) primary key,
    customer_id varchar(50),
    createdAt int8,
    ship_address varchar(40),
    ship_phone_number varchar(12),
    total_cost float);

create table product(
	product_id varchar(50) primary key,
    name varchar(30),
    category varchar(30),
    short_description varchar(30),
    full_description text,
    supplier_id varchar(50),
    cost float,
    createdAt long,
    foreign key (supplier_id) references supplier(supplier_id) on delete cascade);

create table order_detail(
	order_id varchar(50),
    product_id varchar(50),
    amount int,
    primary key (order_id, product_id),
    foreign key (order_id) references _order(order_id) on delete cascade,
    foreign key (product_id) references product(product_id) on delete cascade);

create table cart_detail(
	customer_id varchar(50),
    product_id varchar(50),
    amount int,
    primary key (customer_id, product_id),
    foreign key (customer_id) references customer(customer_id) on delete cascade,
    foreign key (product_id) references product(product_id) on delete cascade);

create table image(
	cps_id varchar(50),
    data mediumblob);
    
# ALTER USER 'root'@'localhost' IDENTIFIED WITH 'password' BY '314159265'; 

    
    
    