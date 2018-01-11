/**用户信息表**/
CREATE TABLE s_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32) NOT NULL DEFAULT '',
	upwd VARCHAR(32) NOT NULL DEFAULT ''
);
INSERT INTO s_user VALUES(10,'13111111111','123456');
INSERT INTO s_user VALUES(20,'15555555555','12345678');
INSERT INTO s_user VALUES(30,'18666666666','987654');

/**产品信息表**/
CREATE TABLE s_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(100) ,
  pname VARCHAR(64),
  price FLOAT(8,2),
  pold  FLOAT(8,2)
);
INSERT INTO s_product VALUES
(null,'images/0e90917dd4ebb91c3299886eba2fb269_0.resize_to.190x190.jpg','红袖坊REDHOUSE 女装 秋冬',200,2500),
(null,'images/2e2a18a67ee948d084457eedb1729ee8_0.resize_to.190x190.jpg','皮尔卡丹Pierre cardinal女装',400,3180),
(null,'images/04e6c28615c806f7937a48e7db5e73fd_0.resize_to.190x190.jpg','木真了 女装/秋冬 夹克外套',380,1680),
(null,'images/5c1ff736f795a58326605ba090466382_0.resize_to.190x190.jpg','秋水伊人 女装 秋冬 不分季节',50,648),
(null,'images/5ca634bcbca150e4b203d578639cbb09_0.resize_to.190x190.jpg','红袖坊REDHOUSE 女装 不分季节',200,1890),
(null,'images/6a08c71be48462541d673135851a40f7_0.resize_to.190x190.jpg','红袖坊REDHOUSE 女装 秋冬',200,2390),
(null,'images/6a88acf03c20666e7b7bacb651197432_0.resize_to.190x190.jpg','红袖坊REDHOUSE 女装 春夏',100,1990),
(null,'images/6d161487564f7586d94f32bfa83122b7_0.resize_to.190x190.jpg','皮尔卡丹Pierre cardinal女装',564,1880),
(null,'images/7aaaa3814438f20e314ada8bddc6c2aa_0.resize_to.190x190.jpg','皮尔卡丹Pierre cardinal女装',400,3180),
(null,'images/7f6f552ce53bdf743d4e045f7f29958c_0.resize_to.190x190.jpg','木真了 女装/秋冬 夹克外套',380,1680),
(null,'images/7f9ac0d4ef92540b0f5a1a82c73cbedc_0.resize_to.190x190.jpg','秋水伊人 女装 秋冬 不分季节',50,648),
(null,'images/8be045aab4df7472fb38c2b6861860a6_0.resize_to.190x190.jpg','红袖坊REDHOUSE 女装 秋冬',100,1990),
(null,'images/8d59fd5d8c7cb8afab15d6da392ef1b9_0.resize_to.190x190.jpg','红袖坊REDHOUSE 女装 秋冬',100,2390),
(null,'images/8d788ed9230a269e05a4066032fd8570_0.resize_to.190x190.jpg','皮尔卡丹Pierre cardinal女装',200,1890),
(null,'images/9b7ab5ea433c820c41ae6cd08b86e652_0.resize_to.190x190.jpg','红袖坊REDHOUSE 女装 春夏',200,2790),
(null,'images/9b959373ca9d5d5bb315d790b514c851_0.resize_to.190x190.jpg','秋水伊人 女装 秋冬 不分季节',276,1380),
(null,'images/9c9c3c73fe2567531b94eb1120b64e4b_0.resize_to.190x190.jpg','红袖坊REDHOUSE 女装 秋冬',280,1380),
(null,'images/13ab3d3ebcee5931e08bdc034ae90fc9_0.resize_to.190x190.jpg','曼得露Man De Lu 女装 秋冬',398,2541),
(null,'images/13bd68b57b2c420271fbb04c540bd875_0.resize_to.190x190.jpg','樱歌玛 女装 秋冬 夹克外套',698,1598),
(null,'images/19d4302e01746fd0b6e533ebd08b8834_0.resize_to.190x190.jpg','红袖坊REDHOUSE 女装 秋冬',200,2500),
(null,'images/32d099c4b1df8954277f8e8f60ea2c32_0.resize_to.190x190.jpg','皮尔卡丹Pierre cardinal女装',200,2500),
(null,'images/45e382a9bc8fc19308c14edab12fa89d_0.resize_to.190x190.jpg','Beissy 女装 2016 秋冬',200,2500),
(null,'images/50dd45ee461d9841acaee5151935b8c5_0.resize_to.190x190.jpg','ETBOIFT 女装 秋冬 夹克外套',239,798),
(null,'images/58c4d12f8479e9cdfb4148e9dfebb890_0.resize_to.190x190.jpg','皮尔卡丹Pierre cardinal女装',954,3180),
(null,'images/65e567c0404574e058910076e6cd328e_0.resize_to.190x190.jpg','Beissy 女装 2016 秋冬',1840,3680),
(null,'images/70a949972a86750fb7ec0ce18ea77be7_0.resize_to.190x190.jpg','秋水伊人 女装 秋冬 不分季节',594,3457),
(null,'images/70ce7e0190bc48c63df0ff411288eb34_0.resize_to.190x190.jpg','ETBOIFT 女装 秋冬 夹克外套',541,2534),
(null,'images/74a88a8fb96c6b74983307c6e2cae656_0.resize_to.190x190.jpg','木真了 女装/秋冬 夹克外套',257,3180),
(null,'images/83b230683f9abf41a5e7907197835900_0.resize_to.190x190.jpg','皮尔卡丹Pierre cardinal 小西装',475,3385),
(null,'images/092fd2103ddc898cc0938708a1001b62_0.resize_to.190x190.jpg','ETBOIFT 女装 春夏',541,2280),
(null,'images/97f6ec17c1964c7cd3945460dfca1af4_0.resize_to.190x190.jpg','红袖坊REDHOUSE 女装 秋冬',257,985),
(null,'images/212d6c25d0d805ecc799da6df93766d7_0.resize_to.190x190.jpg','Beissy 女装 2016 秋冬',477,1800),
(null,'images/269f3d9ee9b7a839c14eaff7775f84d3_0.resize_to.190x190.jpg','曼得露Man De Lu 女装 秋冬',854,2544);

/**购物车表**/
CREATE TABLE s_car(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  userId INT
);
INSERT INTO s_car VALUES
(1, 10);

/**购物车详情表**/
CREATE TABLE s_car_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  cartId INT,
  productId INT,
  count INT
);
INSERT INTO s_car_detail VALUES
(NULL, 1, 5, 1),
(NULL, 1, 6, 4),
(NULL, 1, 5, 3);