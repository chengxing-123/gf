/*
* @Author: djh
* @Date:   2018-09-16 17:21:09
* @Last Modified by:   djh
* @Last Modified time: 2018-12-02 22:20:57
*/
SET NAMES UTF8;
DROP DATABASE IF EXISTS flower;
CREATE DATABASE flower CHARSET=UTF8;
USE flower;

/*用户注册表*/
CREATE TABLE flower_user_register(
   uid INT PRIMARY KEY AUTO_INCREMENT,
   phone CHAR(11),
   pwd  VARCHAR(12)

);

/*数据导入*/
/*用户注册信息*/
INSERT INTO flower_user_register VALUES
(NULL,18434164721,123456),
(NULL,18434164722,123456),
(NULL,18434164723,123456),
(NULL,18434164724,123456),
(NULL,18434164725,123456),
(NULL,18434164726,123456),
(NULL,18434164727,123456),
(NULL,18434164728,123456),
(NULL,18434164729,123456),
(NULL,18434164730,123456),
(NULL,18434164731,123456),
(NULL,18434164732,123456),
(NULL,18434164733,123456),
(NULL,18434164734,123456),
(NULL,18434164735,123456),
(NULL,18434164736,123456),
(NULL,18434164737,123456),
(NULL,18434164738,123456),
(NULL,18434164739,123456),
(NULL,18434164740,123456);

/*首页商品*/
CREATE TABLE hua_index_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  price DECIMAL(10,2),
  oldPrice DECIMAL(10,2),
  pic VARCHAR(128),
  sdown INT,
  dcount INT,
  sell  INT ,
  traffic INT,
  eval INT


);
/*首页商品数据导入*/
INSERT INTO hua_index_product VALUES
(NULL,"Cherish珍爱鲜花系列11枝粉玫瑰+多头康乃馨",188,298,"img/index/flash_scale_flower1.png",110,6.4,2496,272657,760),
(NULL,"Full love浓情鲜花系列33枝红玫瑰+梦幻黑纱",268,498,"img/index/flash_scale_flower2.png",230,5.4,1593,271969,505),
(NULL,"Full love浓情鲜花系列33枝香槟玫瑰+蓝绣球",268,388,"img/index/flash_scale_flower3.png",120,7,3999,73376,255),
(NULL,"Cherish珍爱鲜花系列99枝心形礼盒",598,698,"img/index/flash_scale_flower4.png",100,8.6,2106,35444,677),
(NULL,"Full love浓情鲜花系列9枝白玫瑰+1枝蓝绣球",158,268,"img/index/han_flower2.png",null,3.4,3081,272639,933),
(NULL,"Full love浓情鲜花系列99枝黑纱红玫瑰+尤加利叶满天星",168,278,"img/index/han_flower4.png",null,6.1,3332,23443,776),
(NULL,"Full love浓情鲜花系列19枝苏醒玫瑰+2枝粉色桔梗",368,638,"img/index/han_flower5.png",null,5.8,3948,12333,889),
(NULL,"Cherish珍爱鲜花系列19枝香槟玫瑰+银叶菊",458,888,"img/index/han_flower6.png",null,5.2,4578,12998,223),
(NULL,"Full love浓情鲜花系列19枝粉玫瑰+尤加利叶",148,268,"img/index/chunai1.png",null,5.6,4697,22323,112),
(NULL,"Full love浓情鲜花系列9枝白玫瑰+1枝蓝绣球",158,385,"img/index/chunai2.png",null,4.2,5684,33243,998),
(NULL,"Full love浓情鲜花系列13枝香槟玫瑰+尤加利叶",258,488,"img/index/chunai3.png",null,5.3,4375,12998,334),
(NULL,"Friendship挚友鲜花系列25枝紫玫瑰+8白玫瑰+白相思梅",148,268,"img/index/chunai4.png",null,5.6,3221,16656,666),
(NULL,"Cherish珍爱鲜花系列66枝红玫瑰",158,385,"img/index/chunai5.png",null,4.2,4858,66543,777),
(NULL,"Cherish珍爱鲜花系列99枝红玫瑰",368,638,"img/index/chunai6.jpg",null,5.8,5369,67673,112),
(NULL,"Cherish珍爱鲜花系列33枝红玫瑰枪炮礼盒",298,698,"img/index/chuang1.png",null,4.3,5376,11234,776),
(NULL,"Relative亲情鲜花系列10枝香槟玫瑰+11朵白百合枪炮礼盒",298,698,"img/index/chuang2.png",null,4.3,2170,12887,667),
(NULL,"Blessing祝福鲜花系列33枝红色康乃馨枪炮礼盒",258,488,"img/index/chuang3.png",null,5.0,3871,12212,887),
(NULL,"Secret love倾慕鲜花系列25枝粉玫瑰+白相思梅枪炮礼盒",2788,3000,"img/index/chuang5.png",null,5.3,4088,21112,1024),
(NULL,"Friendship挚友鲜花系列9枝向日葵枪炮礼盒",298,445,"img/index/chuang5.png",null,7.5,2233,15522,778),
(NULL,"Relative亲情鲜花系列33枝红色康乃馨+粉色满天星枪炮礼盒",298,334,"img/index/chuang6.png",null,7.5,3479,12231,765),
(NULL,"Cherish珍爱鲜花系列9枝戴安娜粉玫瑰+紫色勿忘我",168,554,"img/index/parent1.png",null,6.3,4697,23653,876),
(NULL,"Full love浓情鲜花系列9枝白玫瑰+1枝蓝绣球",178,234,"img/index/parent2.png",null,6.5,5684,44532,2201),
(NULL,"Cherish珍爱鲜花系列66枝进口红唇玫瑰+粉雪山",398,456,"img/index/parent3.png",null,6.3,3514,12776,553),
(NULL,"Full love浓情鲜花系列99枝黑纱红玫瑰+尤加利叶满天星",324,443,"img/index/parent4.png",null,3.6,3332,11765,889),
(NULL,"Full love浓情鲜花系列19枝苏醒玫瑰+2枝粉色桔梗",198,532,"img/index/parent5.png",null,6.7,3948,5543,223),
(NULL,"Cherish珍爱鲜花系列19枝香槟玫瑰+银叶菊",198,532,"img/index/parent6.png",null,5.0,3969,12543,778),
(NULL,"商务鲜花系列财源滚滚开业花篮",488,446,"img/index/shangwu1.png",null,8.3,2429,5648,332),
(NULL,"商务鲜花系列生意兴隆开业花篮",688,442,"img/index/shangwu2.png",null,8.7,1631,5676,243),
(NULL,"商务鲜花系列四通八达开业花篮",448,443,"img/index/shangwu3.png",null,8.2,715,221,123),
(NULL,"商务鲜花系列繁花似锦开业花篮",668,543,"img/index/shangwu4.png",null,8.4,749,7765,443),
(NULL,"办公鲜花系列高端大气会议桌花",388,434,"img/index/shangwu5.png",null,6.9,931,3435,112),
(NULL,"办公鲜花系列简洁大气讲台花",328,554,"img/index/shangwu6.png",null,8.3,525,4435,667),
(NULL,"Eternal永恒系列LED蓝牙音箱永生花玻璃罩",398,443,"img/index/eternal_flower1.png",null,7.7,1043,6675,887),
(NULL,"Eternal永恒系列永生玫瑰花丝巾礼盒",328,443,"img/index/eternal_flower2.png",null,7.7,280,3424,223),
(NULL,"Eternal永恒系列桃心玻璃罩",198,334,"img/index/eternal_flower3.png",null,6.9,392,23241,453),
(NULL,"Eternal永恒系列貂毛兔永生花挂件",208,445,"img/index/eternal_flower4.png",null,7.3,511,5547,778),
(NULL,"Eternal永恒系列爱意久久9朵永生玫瑰花",368,224,"img/index/eternal_flower5.png",null,7.0,686,6657,334),
(NULL,"Eternal永恒系列进口永生玫瑰鲜花",328,334,"img/index/eternal_flower6.png",null,8.5,525,23433,223),
(NULL,"teamo叹息桥之吻情侣对戒",188,265,"img/index/gift1.png",null,3.4,350,4545,221),
(NULL,"皇冠灵动心跳项链",168,234,"img/index/gift2.png",null,3.0,476,23232,445),
(NULL,"同款电视剧太阳的后裔项链",228,265,"img/index/gift3.png",null,3.7,592,33242,554),
(NULL,"hello kitty水晶球创意送女朋友礼物",258,554,"img/index/gift4.png",null,5.3,514,12343,509),
(NULL,"我爱你一生一世银饰戒指",268,334,"img/index/gift5.png",null,7.0,601,34343,667),
(NULL,"吉他文艺情侣水晶球",428,554,"img/index/gift6.png",null,8.3,425,12323,221),
(NULL,"hello kitty水晶球创意送女朋友礼物",258,288,"img/index/week_flower1.jpg",null,5.3,514,12554,665),
(NULL,"我爱你一生一世银饰戒指",268,334,"img/index/week_flower2.jpg",null,7.0,601,22323,334),
(NULL,"吉他文艺情侣水晶球",428,556,"img/index/week_flower3.jpg",null,8.3,425,22354,223),
(NULL,"Nature自然系列轻奢单品",148,256,"img/index/week_flower1.jpg",null,5.8,2355,22374,113),

(NULL,"Nature自然系列重奢双拼",238,348,"img/index/week_flower2.jpg",null,6.9,558,2234,23),
(NULL,"Nature自然系列重奢极品",298,498,"img/index/week_flower3.jpg",null,6.0,254,2284,123);



/*首页花的图片*/
CREATE TABLE hua_index_pic(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  pid INT,              
  pics VARCHAR(128)        
);

INSERT INTO hua_index_pic VALUES
(NULL,1,"img/products/pics/1b5b1_11c08.png"),
(NULL,1,"img/products/pics/1b5bb_17e86.jpg"),
(NULL,1,"img/products/pics/1b5e7_60d9.jpg"),
(NULL,1,"img/products/pics/1b5b6_13162.jpg"),
(NULL,2,"img/products/pics/19130_dda5.png"),
(NULL,2,"img/products/pics/19134_5f1c.png"),
(NULL,2,"img/products/pics/19138_7b27.png"),
(NULL,2,"img/products/pics/1913c_c736.png"),
(NULL,3,"img/products/pics/2c8f1_793e.png"),
(NULL,3,"img/products/pics/2c8fb_16fdb.jpg"),
(NULL,3,"img/products/pics/2c900_c60d.png"),
(NULL,3,"img/products/pics/2c8f7_10164.jpg"),
(NULL,4,"img/products/pics/28499_f087.png"),
(NULL,4,"img/products/pics/284a4_344a.jpg"),
(NULL,4,"img/products/pics/284a8_1586d.jpg"),
(NULL,4,"img/products/pics/284ad_71fe.png"),
(NULL,5,"img/products/pics/24e5d_12b97.png"),
(NULL,5,"img/products/pics/1b29b_177e4.jpg"),
(NULL,5,"img/products/pics/24e61_b2aa.jpg"),
(NULL,5,"img/products/pics/27168_1111f.jpg"),
(NULL,6,"img/products/pics/190ea_86ce.png"),
(NULL,6,"img/products/pics/190ed_18373.jpg"),
(NULL,6,"img/products/pics/190f5_15cf9.jpg"),
(NULL,6,"img/products/pics/190f0_8519.jpg"),
(NULL,7,"img/products/pics/2373d_15bd3.png"),
(NULL,7,"img/products/pics/1c2e4_58f9.jpg"),
(NULL,7,"img/products/pics/238e6_5cd3.jpg"),
(NULL,7,"img/products/pics/238eb_5736.jpg"),
(NULL,8,"img/products/pics/19de3_a798.png"),
(NULL,8,"img/products/pics/19ddb_4c31.jpg"),
(NULL,8,"img/products/pics/19ddf_ad31.jpg"),
(NULL,8,"img/products/pics/19dd8_9f52.png"),
(NULL,9,"img/products/pics/2c020_38e4.png"),
(NULL,9,"img/products/pics/2a119_11e7d.jpg"),
(NULL,9,"img/products/pics/2a053_185ea.jpg"),
(NULL,9,"img/products/pics/2c050_d54c.jpg"),
(NULL,10,"img/products/pics/24ea3_17829.png"),
(NULL,10,"img/products/pics/24ea6_864d.jpg"),
(NULL,10,"img/products/pics/24eaa_864d.jpg"),
(NULL,10,"img/products/pics/24eaf_f403.jpg"),
(NULL,11,"img/products/pics/2aed8_5935.png"),
(NULL,11,"img/products/pics/2ae12_c12b.jpg"),
(NULL,11,"img/products/pics/2aee8_416c.jpg"),
(NULL,11,"img/products/pics/2ae21_2c30.jpg"),
(NULL,12,"img/products/pics/2ace0_43e4.png"),
(NULL,12,"img/products/pics/1bea3_d355.jpg"),
(NULL,12,"img/products/pics/2ace5_9392.jpg"),
(NULL,12,"img/products/pics/2aced_11418.jpg"),
(NULL,13,"img/products/pics/2c888_be38.png"),
(NULL,13,"img/products/pics/2c895_7541.jpg"),
(NULL,13,"img/products/pics/2c88c_17be5.jpg"),
(NULL,13,"img/products/pics/2c890_1671d.jpg"),
(NULL,14,"img/products/pics/276f6_69ad.png"),
(NULL,14,"img/products/pics/2ca14_12642.jpg"),
(NULL,14,"img/products/pics/2ca18_35c2.jpg"),
(NULL,14,"img/products/pics/2ca1c_1112f.jpg"),
(NULL,15,"img/products/pics/278fa_15503.png"),
(NULL,15,"img/products/pics/2a9b4_6ad0.jpg"),
(NULL,15,"img/products/pics/278ff_b368.jpg"),
(NULL,15,"img/products/pics/278f5_16039.jpg"),
(NULL,16,"img/products/pics/2c693_17bb3.png"),
(NULL,16,"img/products/pics/27cd6_167e5.jpg"),
(NULL,16,"img/products/pics/2c6a1_14c2f.jpg"),
(NULL,16,"img/products/pics/2c69b_1820b.jpg"),
(NULL,17,"img/products/pics/2c62e_840f.png"),
(NULL,17,"img/products/pics/2c632_120ce.jpg"),
(NULL,17,"img/products/pics/2c63e_7e4f.jpg"),
(NULL,17,"img/products/pics/2c63a_b8b2.jpg"),
(NULL,18,"img/products/pics/24d42_3d4a.png"),
(NULL,18,"img/products/pics/24d49_17c00.jpg"),
(NULL,18,"img/products/pics/24d75_16ebb.jpg"),
(NULL,18,"img/products/pics/24d46_179f4.jpg"),
(NULL,19,"img/products/pics/27b41_13df8.png"),
(NULL,19,"img/products/pics/27b39_c50b.jpg"),
(NULL,19,"img/products/pics/27b47_1022d.jpg"),
(NULL,19,"img/products/pics/27b4b_10536.jpg"),
(NULL,20,"img/products/pics/1c070_11993.png"),
(NULL,20,"img/products/pics/1ae21_77fa.jpg"),
(NULL,20,"img/products/pics/1c074_a0a7.jpg"),
(NULL,20,"img/products/pics/1c077_956e.jpg"),
(NULL,21,"img/products/pics/24e5d_12b97.png"),
(NULL,21,"img/products/pics/1b29b_177e4.jpg"),
(NULL,21,"img/products/pics/24e61_b2aa.jpg"),
(NULL,21,"img/products/pics/27168_1111f.jpg"),
(NULL,22,"img/products/pics/23875_e880.png"),
(NULL,22,"img/products/pics/27c87_672a.jpg"),
(NULL,22,"img/products/pics/23880_5ec1.jpg"),
(NULL,22,"img/products/pics/27c8f_11b53.jpg"),
(NULL,23,"img/products/pics/24ebc_f380.png"),
(NULL,23,"img/products/pics/24ec0_bb6b.jpg"),
(NULL,23,"img/products/pics/24ec7_434d.jpg"),
(NULL,23,"img/products/pics/24ec4_a6f3.jpg"),
(NULL,24,"img/products/pics/190ea_86ce.png"),
(NULL,24,"img/products/pics/190ed_18373.jpg"),
(NULL,24,"img/products/pics/190f5_15cf9.jpg"),
(NULL,24,"img/products/pics/190f0_8519.jpg"),
(NULL,25,"img/products/pics/2373d_15bd3.png"),
(NULL,25,"img/products/pics/1c2e4_58f9.jpg"),
(NULL,25,"img/products/pics/238e6_5cd3.jpg"),
(NULL,25,"img/products/pics/238eb_5736.jpg"),

(NULL,26,"img/products/pics/19de3_a798.png"),
(NULL,26,"img/products/pics/19ddb_4c31.jpg"),
(NULL,26,"img/products/pics/19ddf_ad31.jpg"),
(NULL,26,"img/products/pics/19dd8_9f52.png"),
(NULL,27,"img/products/pics/275d2_fbd3.png"),
(NULL,27,"img/products/pics/275cb_1070c.jpg"),
(NULL,27,"img/products/pics/275cf_174c0.jpg"),
(NULL,27,"img/products/pics/275c7_18592.png"),
(NULL,28,"img/products/pics/27498_8fea.png"),
(NULL,28,"img/products/pics/2749f_16b54.jpg"),
(NULL,28,"img/products/pics/274a3_f267.jpg"),
(NULL,28,"img/products/pics/2749c_8a4d.jpg"),
(NULL,29,"img/products/pics/2569c_110ac.png"),
(NULL,29,"img/products/pics/256a4_86ec.jpg"),
(NULL,29,"img/products/pics/256a0_12cb7.jpg"),
(NULL,29,"img/products/pics/256a7_fa3c.jpg"),
(NULL,30,"img/products/pics/27569_8afa.png"),
(NULL,30,"img/products/pics/27573_17562.jpg"),
(NULL,30,"img/products/pics/2756f_16665.jpg"),
(NULL,30,"img/products/pics/2756c_f8ae.jpg"),
(NULL,31,"img/products/pics/27625_4acf.png"),
(NULL,31,"img/products/pics/27630_1831b.jpg"),
(NULL,31,"img/products/pics/27629_a214.jpg"),
(NULL,31,"img/products/pics/2762d_9c7a.jpg"),
(NULL,32,"img/products/pics/2a07e_b430.png"),
(NULL,32,"img/products/pics/2a0b8_6e68.jpg"),
(NULL,32,"img/products/pics/2a0c1_7a0a.jpg"),
(NULL,32,"img/products/pics/2a0c8_a104.jpg"),
(NULL,33,"img/products/pics/1939b_9faa.png"),
(NULL,33,"img/products/pics/193a4_5c5d.jpg"),
(NULL,33,"img/products/pics/193a8_5124.jpg"),
(NULL,33,"img/products/pics/193ab_17ee6.jpg"),
(NULL,34,"img/products/pics/17391_110b9.png"),
(NULL,34,"img/products/pics/17395_bd20.jpg"),
(NULL,34,"img/products/pics/17399_7625.jpg"),
(NULL,34,"img/products/pics/1739c_ef11.jpg"),
(NULL,35"img/products/pics/25d29_152e3.png"),
(NULL,35,"img/products/pics/25d34_a632.jpg"),
(NULL,35,"img/products/pics/25d2d_d505.jpg"),
(NULL,35,"img/products/pics/25d30_d8d4.jpg"),
(NULL,36,"img/products/pics/25cc3_1580f.png"),
(NULL,36,"img/products/pics/25cca_d3ea.jpg"),
(NULL,36,"img/products/pics/25cce_979b.jpg"),
(NULL,36,"img/products/pics/25cc6_17821.jpg"),
(NULL,37,"img/products/pics/195a4_8281.png"),
(NULL,37,"img/products/pics/195a7_c283.jpg"),
(NULL,37,"img/products/pics/195ab_13c43.jpg"),
(NULL,37,"img/products/pics/195af_1310d.jpg"),
(NULL,38,"img/products/pics/16dc9_1741b.png"),
(NULL,38,"img/products/pics/16dcd_73c6.jpg"),
(NULL,38,"img/products/pics/16dd3_7709.jpg"),
(NULL,38,"img/products/pics/16dd6_15dac.jpg"),
(NULL,39,"img/products/pics/25b2c_bba5.png"),
(NULL,39,"img/products/pics/286e4_16b26.jpg"),
(NULL,39,"img/products/pics/286e1_a387.jpg"),
(NULL,39,"img/products/pics/25b32_a536.jpg"),
(NULL,40,"img/products/pics/198bd_148db.png"),
(NULL,40,"img/products/pics/2c24c_774d.jpg"),
(NULL,40,"img/products/pics/2c24e_ea9d.jpg"),
(NULL,40,"img/products/pics/198c5_c4b9.jpg"),
(NULL,41,"img/products/pics/28696_547f.png"),
(NULL,41,"img/products/pics/2869f_12a50.jpg"),
(NULL,41,"img/products/pics/2869a_870d.jpg"),
(NULL,41,"img/products/pics/286a2_b163.jpg"),
(NULL,42,"img/products/pics/25de6_dcda.png"),
(NULL,42,"img/products/pics/28562_7256.jpg"),
(NULL,42,"img/products/pics/25def_531a.jpg"),
(NULL,42,"img/products/pics/2856a_e538.jpg"),
(NULL,43,"img/products/pics/1928b_17918.png"),
(NULL,43,"img/products/pics/19292_16984.jpg"),
(NULL,43,"img/products/pics/2caef_eb42.jpg"),
(NULL,43,"img/products/pics/2caec_14f4b.jpg"),
(NULL,44,"img/products/pics/2606b_11e80.png"),
(NULL,44,"img/products/pics/284aa_15990.jpg"),
(NULL,44,"img/products/pics/260a0_176fe.jpg"),
(NULL,44,"img/products/pics/284a3_f5ce.jpg"),
(NULL,45,"img/products/pics/25de6_dcda.png"),
(NULL,45,"img/products/pics/28562_7256.jpg"),
(NULL,45,"img/products/pics/25def_531a.jpg"),
(NULL,45,"img/products/pics/2856a_e538.jpg"),
(NULL,46,"img/products/pics/1928b_17918.png"),
(NULL,46,"img/products/pics/19292_16984.jpg"),
(NULL,46,"img/products/pics/2caef_eb42.jpg"),
(NULL,46,"img/products/pics/2caec_14f4b.jpg"),
(NULL,47,"img/products/pics/2606b_11e80.png"),
(NULL,47,"img/products/pics/284aa_15990.jpg"),
(NULL,47,"img/products/pics/260a0_176fe.jpg"),
(NULL,47,"img/products/pics/284a3_f5ce.jpg"),
(NULL,48,"img/products/pics/19662_47d9.jpg"),
(NULL,48,"img/products/pics/19668_14a82.jpg"),
(NULL,49,"img/products/pics/20558_171f0.jpg"),
(NULL,49,"img/products/pics/20552_17824.jpg"),
(NULL,50,"img/products/pics/22d8b_14323.jpg"),
(NULL,50,"img/products/pics/22d84_11cf4.jpg"),
(NULL,50,"img/products/pics/22d7d_171d2.jpg");































































/* 花的分类*/
 CREATE TABLE flower_laptop_family(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  fname VARCHAR(32)
);

/*花的分类填充数据 */
INSERT INTO flower_laptop_family VALUES
  (NULL,"玫瑰"),
  (NULL,"百合"),
  (NULL,"康乃馨"),
  (NULL,"紫罗兰"),
  (NULL,"花篮"),
  (NULL,"永生花"),
  (NULL,"礼品");

/*列表*/
CREATE TABLE flower_laptop(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  fid INT,
  title VARCHAR(64),
  subtitle VARCHAR(64),
  price DECIMAL(10,2),
  oldPrice DECIMAL(10,2),
  pic VARCHAR(128),
  dcount INT,
  sell  INT ,
  traffic INT,
  eval INT

);

/*列表数据填充*/
INSERT INTO flower_laptop VALUES
 (NULL,1,"Cherish珍爱鲜花系列99枝红玫瑰","— 没法爱你一万年,只求能照顾你这一辈子",398,720,"img/products/31460_e8d6.png",5.6,4002,12322,443),
 (NULL,1,"Cherish珍爱鲜花系列戴安娜+白相思梅","— 真淳",368,498,"img/products/2c7bf_5409.png",7.4,400,22656,556),
 (NULL,1,"Full love浓情鲜花系列13枝红玫瑰+尤加利叶","— 悠悠情缘",148,348,"img/products/310c6_168df.png",4.3,392,22543,776),
 (NULL,1,"Secret love倾慕鲜花系列19枝红玫瑰+白桔梗花","— 我心中只有你",198,348,"img/products/2d273_163fb.png",5.7,2002,22312,667),
 (NULL,1,"Secret love倾慕鲜花系列11枝香槟玫瑰+9枝戴安娜玫瑰","— 三生三世",268,388,"img/products/2c82d_1017a.png",7.0,1452,45656,889),
 (NULL,1,"Secret love倾慕鲜花系列11枝粉玫瑰+5枝白桔梗","— 相守是一种承诺",268,398,"img/products/2d27c_13180.png",6.8,3456,12545,337),
 (NULL,1,"Full love浓情鲜花系列19枝苏醒玫瑰+2枝粉色桔梗","— 不渝的爱情",188,398,"img/products/2d2ad_346e.png",4.8,5678,55646,654),
 (NULL,1,"Full love浓情鲜花系列苏醒粉玫瑰+1枝粉色绣球","— 你是我心内的一束花",188,298,"img/products/2f1ab_b66e.png",6.4,234,15646,445),
 (NULL,1,"Full love浓情鲜花系列10枝红玫瑰+栀子叶","— 幸福的结局",188,298,"img/products/2f1b4_3068.png",6.4,654,45356,556),
 (NULL,1,"Full love浓情鲜花系列10枝白玫瑰+1枝蓝绣球","— 我爱你你是我的朱丽叶",128,248,"img/products/2f202_1103e.png",5.2,789,12435,445),


 (NULL,2,"Relative亲情鲜花系列10枝香槟玫瑰+11朵白百合枪炮礼盒","— 无限的眷恋，来源于爱的温暖",168,278,"img/products/3132a_4472.png",6.1,1289,3421,112),
 (NULL,2,"Blessing祝福鲜花系列16朵香水粉百合+粉满天星","— 温柔的关爱",148,268,"img/products/30fb1_2e2c.png",5.6,754,4568,221),
 (NULL,2,"Relative亲情鲜花系列13朵香水白百合+白满天星枪炮礼盒","— 天使之祈",158,268,"img/products/31333_55a8.png",5.9,739,12435,445),
 (NULL,2,"Relative亲情鲜花系列13朵香水粉百合+粉相思梅","— 把这最诚挚的祝福带在身边，让幸福永远伴随你!",188,298,"img/products/31348_125dc.png",6.4,1459,6675,223),
 (NULL,2,"Secret love倾慕鲜花系列25枝粉玫瑰+白相思梅枪炮礼盒","— 爱的期待",118,318,"img/products/24d3d_2b36.png",4.0,453,12543,223),
 (NULL,2,"Secret love倾慕鲜花系列25枝香槟玫瑰+白相思梅枪炮礼盒","— 温馨祝福",268,658,"img/products/24cc2_c843.png",4.1,766,12546,345),
 (NULL,2,"Blessing祝福鲜花系列10朵粉百合+勿忘我+水晶草","— 爱的期待",258,488,"img/products/2f66b_1532b.png",5.3,1234,12778,223),
 (NULL,2,"Secret love倾慕鲜花系列12枝桔梗花+白玫瑰白百合","— 暖意满满",268,398,"img/products/24d9a_136a4.png",6.8,342,33453,334),
 (NULL,2,"Blessing祝福鲜花系列11枝粉康乃馨+12朵香水粉百合","— 最长情",188,398,"img/products/24ddd_1777c.png",4.8,445,12654,224),
 (NULL,2,"Friendship挚友鲜花系列10朵香水粉百合+11枝香槟玫瑰","— 细碎时光",238,368,"img/products/31086_1725b.png",6.5,654,22543,1156),

 (NULL,3,"Relative亲情鲜花系列19枝红色康乃馨+白满天星","— 暖暖情意",198,398,"img/products/31320_1638d.png",5.0,654,12342,334),
 (NULL,3,"Blessing祝福鲜花系列19枝绿康乃馨+白满天星","— 温馨祝福",268,458,"img/products/312f0_48b8.png",5.9,654,4435,123),
 (NULL,3,"Blessing祝福鲜花系列33枝红色康乃馨枪炮礼盒","— 感恩密码",268,458,"img/products/31086_1725b.png",5.9,654,23454,445),
 (NULL,3,"Relative亲情鲜花系列12枝粉康乃馨+白满天星","— 对您的祝福",328,498,"img/products/3127c_2db9.png",6.6,654,3345,223),
 (NULL,3,"Relative亲情鲜花系列12枝粉康乃馨+粉满天星","— 最美的花诉说最温馨的话",328,488,"img/products/31271_12acc.png",6.8,654,12546,554),
 (NULL,3,"Relative亲情鲜花系列21枝粉康乃馨+白相思梅","— 有爱有家",268,398,"img/products/31260_14c74.png",6.8,654,12665,334),
 (NULL,3,"Relative亲情鲜花系列21枝红康乃馨+白相思梅","— 幸福万年长",228,398,"img/products/31257_13102.png",5.8,654,23123,122),
 (NULL,3,"Relative亲情鲜花系列29枝粉康乃馨+白满天星尤加利叶","— 送给最亲的亲人",218,388,"img/products/311a4_bc68.png",5.7,654,22321,223),
 (NULL,3,"Blessing祝福鲜花系列33枝绿色康乃馨枪炮礼盒","— 欣欣向荣",218,338,"img/products/30fa1_449c.png",6.5,654,22543,224),
 (NULL,3,"Blessing祝福鲜花系列33枝粉色康乃馨枪炮礼盒","— 祝福之心",168,278,"img/products/30f99_fb5d.png",6.1,654,22533,445),
 (NULL,3,"Blessing祝福鲜花系列33枝粉康乃馨+粉相思梅","— 愿微风捎去我温馨的问候",218,428,"img/products/30f68_d994.png",5.1,654,22432,112),

 (NULL,4,"Friendship挚友鲜花系列12枝紫罗兰","— 永远伴着你",148,258,"img/products/30f68_d994.png",5.8,654,33422,1122),
 (NULL,4,"Friendship挚友鲜花系列9枝紫罗兰+情人草","— 永恒的美与爱",268,398,"img/products/30f68_d994.png",6.8,648,2232,88),

 (NULL,5,"商务鲜花系列财源滚滚开业花篮","— 开业鲜花花篮",218,338,"img/products/2f64f_10cb9.png",6.5,325,2315,119),
 (NULL,5,"商务鲜花系列招财进宝开业花篮","— 朝气蓬勃",218,338,"img/products/2eb76_c31f.png",6.5,445,12543,234),
 (NULL,5,"商务鲜花系列红火日开业花篮","— 事业蒸蒸日上，前途光明无量",188,298,"img/products/2ebbd_856c.png",6.4,675,13243,445),
 (NULL,5,"商务鲜花系列生意兴隆开业花篮","— 广纳四海财富",1088,1288,"img/products/2f5eb_856e.png",8.5,221,12354,334),
 (NULL,5,"商务鲜花系列初夏桌花","— 三脚架商务鲜花开张庆典乔迁",188,398,"img/products/2f58c_f000.png",4.8,443,23243,445),
 (NULL,5,"办公鲜花系列倾城桌花","— 芳菲华年 唯爱是你",238,365,"img/products/2f53b_9597.png",6.5,342,23214,123),
 (NULL,5,"办公鲜花系列唯爱桌花","— 许你一世繁花",198,398,"img/products/2f52b_15a92.png",5.0,659,23234,431),
 (NULL,5,"商务鲜花系列无私奉献手提花篮","— 看见初夏看见你",268,458,"img/products/2eaf2_17dcb.png",5.9,1254,23234,445),
 (NULL,5,"商务鲜花系列春日时光手提花篮","— 感恩每一枝花",328,488,"img/products/2eb17_12815.png",6.8,234,23234,2247),
 (NULL,5,"商务鲜花系列爱你想你手提花篮","— 这是我想要的幸福",338,218,"img/products/2eb4c_5846.png",6.8,4354,2232,109),
 (NULL,5,"商务鲜花系列快乐阳光手提花篮","— 你在我心中是最美",188,298,"img/products/2eb57_87e3.png",6.4,1654,23245,2254),

 (NULL,6,"Eternal永恒系列玻璃罩红色永生花","— 永生花玫瑰花礼盒",368,488,"img/products/250c4_9cf0.png",7.6,167,23232,667),
 (NULL,6,"Eternal永恒系列永生花礼盒","— 德国工艺 见证永恒爱情",520,588,"img/products/25c0e_135ba.png",8.9,543,23214,556),
 (NULL,6,"Eternal永恒系列粉色心笺永生花高档礼盒","— 给你的粉色关怀",288,368,"img/products/250a6_45a9.png",7.9,443,7687,233),
 (NULL,6,"Eternal永恒系列蓝色妖姬永生花筒","— 蓝色妖姬玫瑰花束礼盒",288,368,"img/products/25062_b2b8.png",7.9,321,8979,234),
 (NULL,6,"Eternal永恒系列缘来是你+送夜灯","— 人生有你，阳光灿烂",368,498,"img/products/25043_f924.png",7.4,324,9987,234),
 (NULL,6,"Eternal永恒系列粉色香薰永生花礼盒六角花房","— 粉色香薰六角花房玻璃罩玫瑰鲜花",520,599,"img/products/24ffd_1045d.png",8.7,1654,2323,120),
 (NULL,6,"Eternal永恒系列许愿兔情人节礼盒","— 对你爱爱爱不完",368,428,"img/products/25bf0_765b.png",8.6,887,23435,445),
 (NULL,6,"Eternal永恒系列相守一生永生花相框","— 留下更多的美好回忆",520,628,"img/products/24fdb_bde8.png",8.3,446,4454,231),
 (NULL,6,"Eternal永恒系列彩灯蓝牙音箱玫瑰花","— 爱就是唯一",520,638,"img/products/25b95_5037.png",8.2,1123,23234,556),
 (NULL,6,"Eternal永恒系列进口永生花礼盒实木盖+夜灯","— 七夕情人节创意礼物",398,468,"img/products/24f95_16953.png",8.6,332,45456,7898),
 (NULL,6,"Eternal永恒系列熊的花园永生花玫瑰礼盒","— 爱的呼吸，送你一盒蔚蓝的空气",188,288,"img/products/24f77_b52a.png",6.5,300,23425,554),
 (NULL,6,"Eternal永恒系列进口永生花汽车小兔大花球车挂件","— 送女友车挂件车饰品",158,258,"img/products/24f32_ed41.png",5.8,2654,12324,678),

 (NULL,7,"就这样爱你爱你耳钉","— 就这样爱你爱你随时要在一起",158,558,"img/products/28191_15323.png",2.9,2654,3342,221),
 (NULL,7,"可爱萌趣小狗纯银耳环","— 送朋友送女朋友",158,558,"img/products/28169_3c7c.png",2.9,2654,22324,110),
 (NULL,7,"光影香熏空气净化加湿器","— 一段浪漫小时光",188,537,"img/products/29b4c_8e2a.png",3.6,2654,23234,889),
 (NULL,7,"可爱迷你心里只有你项链","— 心心念念",188,688,"img/products/2811e_171a6.png",2.8,2654,23234,667),
 (NULL,7,"六芒星甜美简约手链","— 为你永远闪烁的守护星",128,426,"img/products/29b32_15001.png",3.1,2654,23234,665),
 (NULL,7,"蓝色大海同款包容的心项链","— 蓝色大海的传说",228,628,"img/products/280da_5d75.png",3.7,2654,32343,223),
 (NULL,7,"魔性无聊老虎有声盒子","— 一个超级魔性又无聊的盒子",218,726,"img/products/29af1_141a6.png",3.1,2654,22765,667),
 (NULL,7,"闪钻圆环时尚戒指项链","— 美妙新意 质感生活",228,628,"img/products/280be_168e5.png",3.7,2654,23654,334),
 (NULL,7,"喜上梢玄关灯喜鹊","— 送女友送朋友",498,1660,"img/products/29ad6_395a.png",3.0,2654,32457,2267),
 (NULL,7,"双面小狗可爱吉祥物锁骨链","— 说“我爱你”就亮灯",238,638,"img/products/28073_181ce.png",3.8,2654,22341,443),
 (NULL,7,"语音表白钻戒台灯","— 让时间慢下来",118,398,"img/products/29a91_7caa.png",3.0,2654,5646,78),
 (NULL,7,"四叶草纯银flower_laptop简约时尚锁骨链","— 多幸运  爱你这件事情",228,628,"img/products/27ffd_d342.png",3.7,2654,4555,221);

/*列表花的图片*/
CREATE TABLE flower_laptop_pic(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  pid INT,              
  pics VARCHAR(128)        
);

INSERT INTO flower_laptop_pic VALUES
(NULL,1,"img/products/pics/276f6_69ad.png"),
(NULL,1,"img/products/pics/2ca14_12642.jpg"),
(NULL,1,"img/products/pics/2ca18_35c2.jpg"),
(NULL,1,"img/products/pics/2ca1c_1112f.jpg"),
(NULL,2,"img/products/pics/165e1_13473.png"),
(NULL,2,"img/products/pics/165e4_8bce.jpg"),
(NULL,2,"img/products/pics/165eb_16612.jpg"),
(NULL,2,"img/products/pics/165e8_109c0.jpg"),
(NULL,3,"img/products/pics/2af21_17575.png"),
(NULL,3,"img/products/pics/2af25_1864a.jpg"),
(NULL,3,"img/products/pics/2af2e_e619.jpg"),
(NULL,3,"img/products/pics/2af29_7863.jpg"),
(NULL,4,"img/products/pics/18f0c_d38c.png"),
(NULL,4,"img/products/pics/18f39_123eb.png"),
(NULL,4,"img/products/pics/18f3e_c853.png"),
(NULL,4,"img/products/pics/18f43_b781.png"),
(NULL,5,"img/products/pics/18f56_5ec7.png"),
(NULL,5,"img/products/pics/18f62_7f6a.jpg"),
(NULL,5,"img/products/pics/18f66_16070.jpg"),
(NULL,5,"img/products/pics/18f6a_16ba9.jpg"),
(NULL,6,"img/products/pics/18fa4_13ecb.png"),
(NULL,6,"img/products/pics/18fa7_528b.jpg"),
(NULL,6,"img/products/pics/18fb0_fb62.jpg"),
(NULL,6,"img/products/pics/18fac_12859.jpg"),
(NULL,7,"img/products/pics/2373d_15bd3.png"),
(NULL,7,"img/products/pics/23748_15265.jpg"),
(NULL,7,"img/products/pics/23744_8f8a.jpg"),
(NULL,7,"img/products/pics/23741_ea4b.jpg"),
(NULL,8,"img/products/pics/2375c_8d59.png"),
(NULL,8,"img/products/pics/23760_3ee4.jpg"),
(NULL,8,"img/products/pics/23767_d978.jpg"),
(NULL,8,"img/products/pics/23764_a6fe.jpg"),
(NULL,9,"img/products/pics/2382f_12098.png"),
(NULL,9,"img/products/pics/2385e_2922.jpg"),
(NULL,9,"img/products/pics/23861_13ec3.jpg"),
(NULL,9,"img/products/pics/23833_3458.jpg"),
(NULL,10,"img/products/pics/23875_e880.png"),
(NULL,10,"img/products/pics/2387c_1509a.jpg"),
(NULL,10,"img/products/pics/23880_5ec1.jpg"),
(NULL,10,"img/products/pics/23878_6f94.jpg"),
(NULL,11,"img/products/pics/2c693_17bb3.png"),
(NULL,11,"img/products/pics/2c697_5574.jpg"),
(NULL,11,"img/products/pics/2c6a1_14c2f.jpg"),
(NULL,11,"img/products/pics/2c69b_1820b.jpg"),
(NULL,12,"img/products/pics/2abd1_7015.png"),
(NULL,12,"img/products/pics/2ac01_14b82.jpg"),
(NULL,12,"img/products/pics/2abfd_165db.jpg"),
(NULL,12,"img/products/pics/2ac05_d292.jpg"),
(NULL,13,"img/products/pics/2c6b4_38ad.png"),
(NULL,13,"img/products/pics/2c6b9_15676.jpg"),
(NULL,13,"img/products/pics/2c6c2_9b2b.jpg"),
(NULL,13,"img/products/pics/2c6bd_8a16.jpg"),
(NULL,14,"img/products/pics/2c710_bff8.png"),
(NULL,14,"img/products/pics/2c715_1313b.jpg"),
(NULL,14,"img/products/pics/2c71e_3636.jpg"),
(NULL,14,"img/products/pics/2c719_159e0.jpg"),
(NULL,15,"img/products/pics/24d42_3d4a.png"),
(NULL,15,"img/products/pics/24d49_17c00.jpg"),
(NULL,15,"img/products/pics/24d75_16ebb.jpg"),
(NULL,15,"img/products/pics/24d46_179f4.jpg"),
(NULL,16,"img/products/pics/24cc7_bd0a.png"),
(NULL,16,"img/products/pics/24cce_e4dd.jpg"),
(NULL,16,"img/products/pics/24cca_b770.jpg"),
(NULL,16,"img/products/pics/24cd1_15660.jpg"),
(NULL,17,"img/products/pics/27644_e889.png"),
(NULL,17,"img/products/pics/27647_69ff.jpg"),
(NULL,17,"img/products/pics/2764f_1456a.png"),
(NULL,17,"img/products/pics/2764b_d7b3.jpg"),
(NULL,18,"img/products/pics/24d9f_33f8.png"),
(NULL,18,"img/products/pics/24da6_9c0f.jpg"),
(NULL,18,"img/products/pics/24da2_2e5b.jpg"),
(NULL,18,"img/products/pics/24da9_a748.jpg"),
(NULL,19,"img/products/pics/24de3_74cd.png"),
(NULL,19,"img/products/pics/24de7_15b71.jpg"),
(NULL,19,"img/products/pics/24dea_90d9.jpg"),
(NULL,19,"img/products/pics/24dee_63fb.jpg"),
(NULL,20,"img/products/pics/2ae70_d499.png"),
(NULL,20,"img/products/pics/2ae74_17bbe.jpg"),
(NULL,20,"img/products/pics/2ae7d_b2f1.jpg"),
(NULL,20,"img/products/pics/2ae78_5610.jpg"),
(NULL,21,"img/products/pics/2c6f8_17c32.png"),
(NULL,21,"img/products/pics/19a4c_68e2.jpg"),
(NULL,21,"img/products/pics/2c6fc_e73a.jpg"),
(NULL,21,"img/products/pics/19a8f_11d0a.jpg"),
(NULL,22,"img/products/pics/2c64f_15d0a.png"),
(NULL,22,"img/products/pics/2c658_110f6.jpg"),
(NULL,22,"img/products/pics/2c65d_926d.jpg"),
(NULL,22,"img/products/pics/2c653_f4da.jpg"),
(NULL,23,"img/products/pics/2c62e_840f.png"),
(NULL,23,"img/products/pics/2c632_120ce.jpg"),
(NULL,23,"img/products/pics/2c63e_7e4f.jpg"),
(NULL,23,"img/products/pics/2c63a_b8b2.jpg"),
(NULL,24,"img/products/pics/2c507_320f.png"),
(NULL,24,"img/products/pics/169f0_1670c.jpg"),
(NULL,24,"img/products/pics/2c516_129e8.jpg"),
(NULL,24,"img/products/pics/2c50c_f0e1.jpg"),
(NULL,25,"img/products/pics/2c4c3_2e95.png"),
(NULL,25,"img/products/pics/2c4cc_123e0.jpg"),
(NULL,25,"img/products/pics/2c4c8_15982.jpg"),
(NULL,25,"img/products/pics/2c4d2_16147.jpg"),
(NULL,26,"img/products/pics/2c461_17a9e.png"),
(NULL,26,"img/products/pics/2c46b_597c.jpg"),
(NULL,26,"img/products/pics/2c46f_15885.jpg"),
(NULL,26,"img/products/pics/2c466_d096.jpg"),
(NULL,27,"img/products/pics/16f96_4449.png"),
(NULL,27,"img/products/pics/16fa0_2dda.jpg"),
(NULL,27,"img/products/pics/16fa5_103ab.jpg"),
(NULL,27,"img/products/pics/16fa9_c8fb.jpg"),
(NULL,28,"img/products/pics/2c1e0_12c18.png"),
(NULL,28,"img/products/pics/2c1ea_5aa2.jpg"),
(NULL,28,"img/products/pics/2c1e5_6243.jpg"),
(NULL,28,"img/products/pics/2c1ef_ae54.jpg"),
(NULL,29,"img/products/pics/2abb1_4012.png"),
(NULL,29,"img/products/pics/2abb7_b4cd.jpg"),
(NULL,29,"img/products/pics/2abbb_18396.jpg"),
(NULL,29,"img/products/pics/2abc1_17dfd.jpg"),
(NULL,30,"img/products/pics/2ab67_16469.png"),
(NULL,30,"img/products/pics/2ab6b_1185a.jpg"),
(NULL,30,"img/products/pics/2ab9d_61ba.jpg"),
(NULL,30,"img/products/pics/2ab99_2b89.jpg"),
(NULL,31,"img/products/pics/2ab44_d1e8.png"),
(NULL,31,"img/products/pics/2ab48_b5dd.jpg"),
(NULL,31,"img/products/pics/2ab4c_ec4a.jpg"),
(NULL,31,"img/products/pics/2ab56_d782.jpg"),
(NULL,32,"img/products/pics/2761c_182d6.png"),
(NULL,32,"img/products/pics/27621_feb0.jpg"),
(NULL,32,"img/products/pics/27626_16c67.jpg"),
(NULL,32,"img/products/pics/2762d_e841.jpg"),
(NULL,33,"img/products/pics/19b84_14bcf.png"),
(NULL,33,"img/products/pics/19b8b_17d2c.jpg"),
(NULL,33,"img/products/pics/19b8e_f73b.jpg"),
(NULL,33,"img/products/pics/19bba_16a8c.jpg"),
(NULL,34,"img/products/pics/275d2_fbd3.png"),
(NULL,34,"img/products/pics/275cb_1070c.jpg"),
(NULL,34,"img/products/pics/275cf_174c0.jpg"),
(NULL,34,"img/products/pics/275c7_18592.png"),
(NULL,35,"img/products/pics/1be23_15e01.png"),
(NULL,35,"img/products/pics/1be27_15864.jpg"),
(NULL,35,"img/products/pics/1be30_141f5.jpg"),
(NULL,35,"img/products/pics/1be2c_d9db.jpg"),
(NULL,36,"img/products/pics/1bee0_99b0.png"),
(NULL,36,"img/products/pics/1bee4_1365f.png"),
(NULL,36,"img/products/pics/1bee9_f694.png"),
(NULL,36,"img/products/pics/1beec_780b.jpg"),
(NULL,37,"img/products/pics/27498_8fea.png"),
(NULL,37,"img/products/pics/2749f_16b54.jpg"),
(NULL,37,"img/products/pics/274a3_f267.jpg"),
(NULL,37,"img/products/pics/2749c_8a4d.jpg"),
(NULL,38,"img/products/pics/25f9b_94e4.png"),
(NULL,38,"img/products/pics/25fa2_50a3.jpg"),
(NULL,38,"img/products/pics/25f9e_149ff.jpg"),
(NULL,38,"img/products/pics/25fa5_c762.jpg"),
(NULL,39,"img/products/pics/25ecc_17f83.png"),
(NULL,39,"img/products/pics/25ed3_108ef.jpg"),
(NULL,39,"img/products/pics/25ed6_7cd6.jpg"),
(NULL,39,"img/products/pics/25ed0_4090.jpg"),
(NULL,40,"img/products/pics/25e6d_132ca.png"),
(NULL,40,"img/products/pics/25e72_16ed9.jpg"),
(NULL,40,"img/products/pics/25e76_e765.jpg"),
(NULL,40,"img/products/pics/25e7a_44f3.jpg"),
(NULL,41,"img/products/pics/1b6dd_bd5c.png"),
(NULL,41,"img/products/pics/1b711_4f53.jpg"),
(NULL,41,"img/products/pics/1b6e5_ce5e.jpg"),
(NULL,41,"img/products/pics/1b6e2_3937.jpg"),
(NULL,42,"img/products/pics/1b7a8_e802.png"),
(NULL,42,"img/products/pics/1b7da_101d5.jpg"),
(NULL,42,"img/products/pics/1b7af_39e4.jpg"),
(NULL,42,"img/products/pics/1b7ac_12621.jpg"),
(NULL,43,"img/products/pics/29f8e_cd17.png"),
(NULL,43,"img/products/pics/29f93_14067.png"),
(NULL,43,"img/products/pics/29f98_d84d.png"),
(NULL,43,"img/products/pics/29f9c_2c49.png"),
(NULL,44,"img/products/pics/1b808_5911.png"),
(NULL,44,"img/products/pics/1b80f_bb8f.png"),
(NULL,44,"img/products/pics/1b80c_c12b.png"),
(NULL,44,"img/products/pics/1b813_5c75.png"),
(NULL,45,"img/products/pics/142a9_123c4.png"),
(NULL,45,"img/products/pics/142b1_917e.jpg"),
(NULL,45,"img/products/pics/142b5_e0e2.jpg"),
(NULL,45,"img/products/pics/142b8_b768.jpg"),
(NULL,46,"img/products/pics/14331_3667.png"),
(NULL,46,"img/products/pics/14343_16058.jpg"),
(NULL,46,"img/products/pics/14370_e4f3.jpg"),
(NULL,46,"img/products/pics/14375_14c60.jpg"),
(NULL,47,"img/products/pics/16398_8d78.png"),
(NULL,47,"img/products/pics/1639e_823f.jpg"),
(NULL,47,"img/products/pics/163a5_4fae.jpg"),
(NULL,47,"img/products/pics/163a9_8f0e.jpg"),
(NULL,48,"img/products/pics/25068_8c57.png"),
(NULL,48,"img/products/pics/2509a_54dd.jpg"),
(NULL,48,"img/products/pics/2506b_6ced.jpg"),
(NULL,48,"img/products/pics/14375_14c60.jpg"),
(NULL,49,"img/products/pics/16445_13f26.png"),
(NULL,49,"img/products/pics/1644a_823f.jpg"),
(NULL,49,"img/products/pics/1644d_bb03.jpg"),
(NULL,49,"img/products/pics/16453_165de.jpg"),
(NULL,50,"img/products/pics/25003_1613e.png"),
(NULL,50,"img/products/pics/25036_d1e3.jpg"),
(NULL,50,"img/products/pics/25033_3976.jpg"),
(NULL,50,"img/products/pics/25007_17a62.jpg"),
(NULL,51,"img/products/pics/16648_c51b.png"),
(NULL,51,"img/products/pics/1664e_4692.jpg"),
(NULL,51,"img/products/pics/16652_e6ce.jpg"),
(NULL,51,"img/products/pics/16656_167c7.jpg"),
(NULL,52,"img/products/pics/1670c_68e5.png"),
(NULL,52,"img/products/pics/16716_13eb5.jpg"),
(NULL,52,"img/products/pics/1671a_823f.jpg"),
(NULL,52,"img/products/pics/16721_473f.jpg"),
(NULL,53,"img/products/pics/25b9d_175e6.png"),
(NULL,53,"img/products/pics/25bba_105b7.jpg"),
(NULL,53,"img/products/pics/25bb7_1438f.jpg"),
(NULL,53,"img/products/pics/25ba5_b9a9.jpg"),
(NULL,54,"img/products/pics/167e5_139c6.png"),
(NULL,54,"img/products/pics/167ea_c0d9.jpg"),
(NULL,54,"img/products/pics/167ed_10e3c.jpg"),
(NULL,54,"img/products/pics/167f1_14a98.jpg"),
(NULL,55,"img/products/pics/16843_14dbd.png"),
(NULL,55,"img/products/pics/16848_2956.jpg"),
(NULL,55,"img/products/pics/1684e_4b0e.jpg"),
(NULL,55,"img/products/pics/16853_4800.jpg"),
(NULL,56,"img/products/pics/168bc_12404.png"),
(NULL,56,"img/products/pics/168bf_11e67.jpg"),
(NULL,56,"img/products/pics/168c2_18022.jpg"),
(NULL,56,"img/products/pics/168c5_aa2b.jpg"),

(NULL,57,"img/products/pics/28197_d499.png"),
(NULL,57,"img/products/pics/2819d_5074.jpg"),
(NULL,57,"img/products/pics/2819a_32bf.jpg"),
(NULL,57,"img/products/pics/281a0_1268f.jpg"),
(NULL,58,"img/products/pics/13ffc_6803.png"),
(NULL,58,"img/products/pics/14003_fb26.jpg"),
(NULL,58,"img/products/pics/28175_9efa.jpg"),
(NULL,58,"img/products/pics/28178_d5ee.jpg"),
(NULL,59,"img/products/pics/14056_16838.png"),
(NULL,59,"img/products/pics/129b59_8e3d.jpg"),
(NULL,59,"img/products/pics/1405e_e9ae.jpg"),
(NULL,59,"img/products/pics/29b57_f2ca.jpg"),
(NULL,60,"img/products/pics/28124_7b09.png"),
(NULL,60,"img/products/pics/2812c_1559a.png"),
(NULL,60,"img/products/pics/28131_b975.png"),
(NULL,60,"img/products/pics/28136_3489.png"),
(NULL,61,"img/products/pics/14082_11f4e.png"),
(NULL,61,"img/products/pics/29b3a_17d8c.jpg"),
(NULL,61,"img/products/pics/29b40_acc1.jpg"),
(NULL,61,"img/products/pics/140b5_108df.jpg"),
(NULL,62,"img/products/pics/28107_bd7d.png"),
(NULL,62,"img/products/pics/2810b_bdd8.jpg"),
(NULL,62,"img/products/pics/28110_2885.jpg"),
(NULL,62,"img/products/pics/28113_11c08.jpg"),
(NULL,63,"img/products/pics/140eb_11cd6.png"),
(NULL,63,"img/products/pics/29afc_63c4.jpg"),
(NULL,63,"img/products/pics/14119_a986.jpg"),
(NULL,63,"img/products/pics/29af9_dcb0.jpg"),
(NULL,64,"img/products/pics/280c4_15276.png"),
(NULL,64,"img/products/pics/280c7_d3ec.jpg"),
(NULL,64,"img/products/pics/280cb_15ed7.jpg"),
(NULL,64,"img/products/pics/280ce_c8b6.jpg"),
(NULL,65,"img/products/pics/14140_bd7d.png"),
(NULL,65,"img/products/pics/29ae3_fa4d.jpg"),
(NULL,65,"img/products/pics/14196_695b.jpg"),
(NULL,65,"img/products/pics/29ade_15fe2.jpg"),
(NULL,66,"img/products/pics/18929_1527e.png"),
(NULL,66,"img/products/pics/18930_7784.jpg"),
(NULL,66,"img/products/pics/280ae_ef22.jpg"),
(NULL,66,"img/products/pics/280b3_1741e.jpg"),
(NULL,67,"img/products/pics/29a97_c45e.png"),
(NULL,67,"img/products/pics/29a9a_162a3.jpg"),
(NULL,67,"img/products/pics/29aa2_4a30.jpg"),
(NULL,67,"img/products/pics/29a9e_3e16.jpg"),
(NULL,68,"img/products/pics/2800e_12a87.png"),
(NULL,68,"img/products/pics/28011_c9e4.jpg"),
(NULL,68,"img/products/pics/2803d_158e3.jpg"),
(NULL,68,"img/products/pics/28040_e412.jpg");



































/*分类规格*/
CREATE TABLE flower_laptop_family_specs(
   gid INT PRIMARY KEY AUTO_INCREMENT,
   fid INT,
   specs VARCHAR(32)
);

/*花的分类填充数据 */
INSERT INTO flower_laptop_family_specs VALUES
  (NULL,1,"11枝"),
  (NULL,1,"99枝"),
  (NULL,1,"33枝"),
  (NULL,1,"13枝"),
  (NULL,2,"10枝"),
  (NULL,2,"13枝"),
  (NULL,2,"25枝"),
  (NULL,2,"12枝"),
  (NULL,2,"11枝"),
  (NULL,3,"19枝"),
  (NULL,3,"12枝"),
  (NULL,3,"21枝"),
  (NULL,3,"33枝"),
  (NULL,3,"29枝"),
  (NULL,4,"9枝"),
  (NULL,4,"12枝"),
  (NULL,5,"财源滚滚"),
  (NULL,5,"绿意生活"),
  (NULL,5,"倾城"),
  (NULL,5,"唯爱"),
  (NULL,5,"初心如一"),
  (NULL,6,"遇见"),
  (NULL,6,"相思"),
  (NULL,6,"热情"),
  (NULL,6,"许愿"),
  (NULL,6,"相守一生"),
  (NULL,7,"这样爱你"),
  (NULL,7,"冰火珍珠"),
  (NULL,7,"六芒星"),
  (NULL,7,"智能情感");

  CREATE TABLE flower_shoppingcart(
  iid INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,      #用户编号
  pid INT,      #列表商品编号
  lid INT ,     #首页商品id
  count INT,      #购买数量
  specs CHAR(128)
);

INSERT INTO flower_shoppingcart VALUES
(NULL,1,NULL,1,0 ,11),
(NULL,1,2,NULL,0,99),
(NULL,1,23,NULL,0,33),
(NULL,1,NULL,10,0,13),
(NULL,1,NULL,5,0,13);

  







  

















                                                     

