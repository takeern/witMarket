-- phpMyAdmin SQL Dump
-- http://www.phpmyadmin.net
--
-- 生成日期: 2017 年 05 月 07 日 14:19

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `YlCTUtmXhjxXsHHwiLIO`
--

-- --------------------------------------------------------

--
-- 表的结构 `测试`
--

CREATE TABLE IF NOT EXISTS `测试` (
  `1` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `goods`
--

CREATE TABLE IF NOT EXISTS `goods` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `phone` varchar(11) NOT NULL,
  `bargain` char(3) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `type` varchar(20) NOT NULL,
  `img1` varchar(70) NOT NULL,
  `img2` varchar(70) NOT NULL,
  `img3` varchar(70) NOT NULL,
  `img4` varchar(70) NOT NULL,
  `weixi` varchar(20) NOT NULL,
  `qq` char(10) NOT NULL,
  `price` float NOT NULL,
  `gsname` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `state` char(4) NOT NULL DEFAULT '未售',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7642 ;

--
-- 转存表中的数据 `goods`
--

INSERT INTO `goods` (`id`, `phone`, `bargain`, `description`, `type`, `img1`, `img2`, `img3`, `img4`, `weixi`, `qq`, `price`, `gsname`, `username`, `datetime`, `state`) VALUES
(127, '18162323650', '不可以', 'no', '美妆衣物', '201687143547499111398.jpg', '', '', '', '', '', 10.5, '倩碧化妆水', 'takeern', '2016-08-08 03:35:39', '未售'),
(128, '18162323650', '不可以', 'no', '美妆衣物', '201687143547499111398.jpg', '', '', '', '', '', 10.5, '倩碧化妆水', 'takeern', '2016-08-08 03:35:41', '未售'),
(129, '18162323650', '不可以', 'no', '美妆衣物', '201687143547499111398.jpg', '', '', '', '', '', 10.5, '倩碧化妆水', 'takeern', '2016-08-08 03:35:39', '未售'),
(130, '18162323650', '不可以', 'no', '美妆衣物', '201687143547499111398.jpg', '', '', '', '', '', 10.5, '倩碧化妆水', 'takeern', '2016-08-08 03:35:39', '未售'),
(131, '18162323650', '不可以', 'no', '美妆衣物', '201687143547499111398.jpg', '', '', '', '', '', 10.5, '倩碧化妆水', 'takeern', '2016-08-08 03:35:41', '未售'),
(132, '18162323650', '不可以', 'no', '美妆衣物', '201687143547499111398.jpg', '', '', '', '', '', 10.5, '倩碧化妆水', 'takeern', '2016-08-08 03:35:39', '未售'),
(133, '18162323650', '不可以', 'no', '闲置数码', '201687143547499111398.jpg', '', '', '', 'takeern', '695214742', 25, '手机a', 'takeern', '2016-08-08 03:37:16', '未售'),
(134, '18162323650', '不可以', 'no', '闲置数码', '201687143547499111398.jpg', '', '', '', 'takeern', '695214742', 25, '手机a', 'takeern', '2016-08-08 03:37:18', '未售'),
(135, '18162323650', '不可以', 'no', '闲置数码', '201687143547499111398.jpg', '', '', '', 'takeern', '695214742', 25, '手机a', 'takeern', '2016-08-08 03:37:16', '未售'),
(136, '18162323650', '不可以', 'no', '闲置数码', '201687143547499111398.jpg', '', '', '', 'takeern', '695214742', 25, '手机a', 'takeern', '2016-08-08 03:37:16', '未售'),
(137, '18162323650', '不可以', 'no', '闲置数码', '201687143547499111398.jpg', '', '', '', 'takeern', '695214742', 25, '手机a', 'takeern', '2016-08-08 03:37:18', '未售'),
(138, '18162323650', '不可以', 'no', '闲置数码', '201687143547499111398.jpg', '', '', '', 'takeern', '695214742', 25, '手机a', 'takeern', '2016-08-08 03:37:16', '未售'),
(139, '18162323650', '不可以', 'no', '票券小物', '201687143547499111398.jpg', '', '', '', 'takeern', '695214742', 80, '健身卡', 'takeern', '2016-08-08 03:39:15', '未售'),
(140, '18162323650', '不可以', 'no', '票券小物', '201687143547499111398.jpg', '', '', '', 'takeern', '695214742', 80, '健身卡', 'takeern', '2016-08-08 03:39:17', '未售'),
(141, '18162323650', '不可以', 'no', '票券小物', '201687143547499111398.jpg', '', '', '', 'takeern', '695214742', 80, '健身卡', 'takeern', '2016-08-08 03:39:15', '已售'),
(142, '18162323650', '不可以', 'no', '票券小物', '201687143547499111398.jpg', '', '', '', 'takeern', '695214742', 80, '健身卡', 'takeern', '2016-08-08 03:39:15', '未售'),
(143, '18162323650', '不可以', 'no', '票券小物', '201687143547499111398.jpg', '', '', '', 'takeern', '695214742', 80, '健身卡', 'takeern', '2016-08-08 03:39:17', '未售'),
(144, '18162323650', '不可以', 'no', '票券小物', '201687143547499111398.jpg', '', '', '', 'takeern', '695214742', 80, '健身卡', 'takeern', '2016-08-08 03:39:15', '未售'),
(145, '18162323650', '不可以', 'no', '图书教材', '201687143547499111398.jpg', '', '', '', 'takeern', '6952147420', 4654560, '考研英语', 'takeern', '2016-08-08 03:40:57', '未售'),
(146, '18162323650', '不可以', 'no', '图书教材', '201687143547499111398.jpg', '', '', '', 'takeern', '6952147420', 4654560, '考研英语', 'takeern', '2016-08-08 03:40:59', '未售'),
(147, '18162323650', '不可以', 'no', '图书教材', '201687143547499111398.jpg', '', '', '', 'takeern', '6952147420', 4654560, '考研英语', 'takeern', '2016-08-08 03:40:57', '已售'),
(148, '18162323650', '不可以', 'no', '图书教材', '201687143547499111398.jpg', '', '', '', 'takeern', '6952147420', 4654560, '考研英语', 'takeern', '2016-08-08 03:40:57', '未售'),
(149, '18162323650', '不可以', 'no', '图书教材', '201687143547499111398.jpg', '', '', '', 'takeern', '6952147420', 4654560, '考研英语', 'takeern', '2016-08-08 03:40:59', '未售'),
(150, '18162323650', '不可以', 'no', '图书教材', '201687143547499111398.jpg', '', '', '', 'takeern', '6952147420', 4654560, '考研英语', 'takeern', '2016-08-08 03:40:57', '未售'),
(151, '18162323650', '不可以', 'no', '校园代步', '201687143547499111398.jpg', '', '', '', 'takeern', '695214742', 4654, '自行车', 'takeern', '2016-08-08 03:42:20', '未售'),
(152, '18162323650', '不可以', 'no', '校园代步', '201687143547499111398.jpg', '', '', '', 'takeern', '695214742', 4654, '自行车', 'takeern', '2016-08-08 03:42:22', '未售'),
(153, '18162323650', '不可以', 'no', '校园代步', '201687143547499111398.jpg', '', '', '', 'takeern', '695214742', 4654, '自行车', 'takeern', '2016-08-08 03:42:20', '未售'),
(154, '18162323650', '不可以', 'no', '校园代步', '201687143547499111398.jpg', '', '', '', 'takeern', '695214742', 4654, '自行车', 'takeern', '2016-08-08 03:42:20', '已售'),
(155, '18162323650', '不可以', 'no', '校园代步', '201687143547499111398.jpg', '', '', '', 'takeern', '695214742', 4654, '自行车', 'takeern', '2016-08-08 03:42:22', '未售'),
(156, '18162323650', '不可以', 'no', '校园代步', '201687143547499111398.jpg', '', '', '', 'takeern', '695214742', 4654, '自行车', 'takeern', '2016-08-08 03:42:20', '未售'),
(157, '18162323650', '不可以', 'no', '运动棋牌', '201687143547499111398.jpg', '', '', '', 'takeern', '6952147420', 456456, '象棋', 'takeern', '2016-08-08 04:00:41', '未售'),
(158, '18162323650', '不可以', 'no', '运动棋牌', '201687143547499111398.jpg', '', '', '', 'takeern', '6952147420', 456456, '象棋', 'takeern', '2016-08-08 04:00:44', '未售'),
(159, '18162323650', '不可以', 'no', '运动棋牌', '201687143547499111398.jpg', '', '', '', 'takeern', '6952147420', 456456, '象棋', 'takeern', '2016-08-08 04:00:41', '未售'),
(160, '18162323650', '不可以', 'no', '运动棋牌', '201687143547499111398.jpg', '', '', '', 'takeern', '6952147420', 456456, '象棋', 'takeern', '2016-08-08 04:00:41', '未售'),
(161, '18162323650', '不可以', 'no', '运动棋牌', '201687143547499111398.jpg', '', '', '', 'takeern', '6952147420', 456456, '象棋', 'takeern', '2016-08-08 04:00:44', '已售'),
(162, '18162323650', '不可以', 'no', '运动棋牌', '201687143547499111398.jpg', '', '', '', 'takeern', '6952147420', 456456, '象棋', 'takeern', '2016-08-08 04:00:41', '未售'),
(169, '18162323650', '不可以', 'no', '电器日用', '201687143547499111398.jpg', '', '', '', 'takeern', '6952147420', 4564, '洗衣机', 'takeern', '2016-08-08 06:35:50', '已售'),
(170, '18162323650', '不可以', 'no', '电器日用', '201687143547499111398.jpg', '', '', '', 'takeern', '6952147420', 4564, '洗衣机', 'takeern', '2016-08-08 06:35:53', '未售'),
(171, '18162323650', '不可以', 'no', '电器日用', '201687143547499111398.jpg', '', '', '', 'takeern', '6952147420', 4564, '洗衣机', 'takeern', '2016-08-08 06:35:50', '未售'),
(172, '18162323650', '不可以', 'no', '电器日用', '201687143547499111398.jpg', '', '', '', 'takeern', '6952147420', 4564, '洗衣机', 'takeern', '2016-08-08 06:35:50', '未售'),
(173, '18162323650', '不可以', 'no', '电器日用', '201687143547499111398.jpg', '', '', '', 'takeern', '6952147420', 4564, '洗衣机', 'takeern', '2016-08-08 06:35:53', '未售'),
(174, '18162323650', '不可以', 'no', '电器日用', '201687143547499111398.jpg', '', '', '', 'takeern', '6952147420', 4564, '洗衣机', 'takeern', '2016-08-08 06:35:50', '未售'),
(175, '15972385863', '可以', '物美价廉物美价廉物美价廉物美价廉物美价廉物美价廉物美价廉物美价廉物美价廉物美价廉物美价廉\r\n物美价廉\r\n物美价廉\r\n物美价廉\r\n物美价廉', '图书教材', '2016812155654181557824.jpg', '2016812155654265043697.jpg', '20168121556541947015362.jpg', '20168121556541300372704.jpg', '', '1114994726', 465456, '噜噜噜', 'takeern', '2016-08-12 07:56:54', '未售'),
(176, '18162323650', '可以', '16g meigui', '闲置数码', '2016812192221307053339.jpg', '201681219222703551201.jpg', '', '', '', '695214742', 5400, 'ipone6s', 'takeern', '2016-08-12 11:22:02', '已售'),
(177, '18162323650', '可以', '', '闲置数码', '20168291929822703418.jpg', '', '', '', '', '695214742', 111, 'ces', '<div class="angle"><', '2016-08-29 11:02:09', '未售'),
(178, '6465456465', '', '', '闲置数码', '20169912429256601759.jpg', '', '', '', '', '65465465', 656565, 'dashd', '<div class="angle"><', '2016-09-09 04:42:09', '未售'),
(179, 'dasdas', '可以', 'sdad', '闲置数码', '20169913040100865325.jpg', '', '', '', '', '695214742', 465465, 'dasd', '', '2016-09-09 05:00:40', '未售'),
(187, '', '可以', '', '闲置数码', 'ask.jpg', '', '', '', '', '695214742', 1111, '打算的撒', '', '2016-09-11 12:07:54', '未售'),
(210, '18162323650', '可以', '', '闲置数码', '2016918113481617504091.jpg', '', '', '', '', '695214742', 4645, '都开始', 'takeern', '2016-09-18 03:34:08', '未售'),
(211, '18162323655', '可以', '啦啦啦', '票券小物', '201691821448202919345.jpg', '', '', '', '', '564688478', 198, '工大白宫', 'supperboy', '2016-09-18 13:04:48', '未售'),
(212, '18162323655', '可以', '啦啦啦', '票券小物', '201691821452870118746.jpg', '', '', '', '', '564688478', 198, '工大白宫', 'supperboy', '2016-09-18 13:04:52', '未售'),
(213, '', '不可以', '', '电器日用', 'ask.jpg', '', '', '', '', '111111111', 1, '1', '', '2016-09-18 13:09:41', '未售'),
(217, '18162323650', '可以', '', '闲置数码', 'ask.jpg', '', '', '', '', '6614118', 56465, '及的垃圾', '', '2016-09-19 12:29:42', '未售'),
(220, '', '可以', '', '闲置数码', 'ask.jpg', '', '', '', '', '695214742', 6654, '大赛科技', 'csdaima', '2016-09-19 12:40:27', '未售'),
(221, '18713587961', '可以', 'eson', '闲置数码', '201691922250232701591.jpg', '', '', '', '', '1148625930', 100, '萫木', 'ieason', '2016-09-19 14:02:50', '未售'),
(7580, '', '可以', '', '闲置数码', 'ask.jpg', '', '', '', '', '695214742', 6666, 'jfklsdj', '', '2016-10-10 05:23:56', '未售'),
(7581, '', '可以', '', '闲置数码', 'ask.jpg', '', '', '', '', '695214742', 5, 'rger', 'takeern', '2016-10-10 05:25:22', '未售'),
(7585, '', '可以', '', '闲置数码', 'ask.jpg', '', '', '', '', '695214742', 666, '6666', 'takeern', '2016-10-11 02:36:21', '未售'),
(7638, '', '可以', '', '闲置数码', '201610111059421295212044.jpg', '', '', '', '', '695214742', 6666, '苏打绿', 'takeern', '2016-10-11 02:59:42', '已售'),
(7639, '', '可以', '', '校园代步', '201610221411271144041595.jpg', '', '', '', '', '695214742', 6666, 'youtube', 'takeern', '2016-10-22 06:11:27', '未售'),
(7640, '', '可以', '', '', 'ask.jpg', '', '', '', '', '', 0, '', '', '2016-12-03 13:07:47', '已售'),
(7641, '', '可以', '', '', 'ask.jpg', '', '', '', '', '', 0, '', '', '2016-12-05 10:00:05', '未售');

-- --------------------------------------------------------

--
-- 表的结构 `lyb`
--

CREATE TABLE IF NOT EXISTS `lyb` (
  `us` varchar(20) NOT NULL,
  `ps` varchar(20) NOT NULL,
  `phone` varchar(12) NOT NULL,
  PRIMARY KEY (`us`),
  UNIQUE KEY `us` (`us`),
  KEY `us_2` (`us`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `lyb`
--

INSERT INTO `lyb` (`us`, `ps`, `phone`) VALUES
('', '', '18162323650'),
('123123tq', '6614118', '18162323650'),
('456465465', '6614118', '18162323650'),
('56465465', '', '61351654'),
('6614118', '', '18162323650'),
('6666666tq', '', '18162323650'),
('666666tq', '', '18162323650'),
('agsdkjhj', '', '45646'),
('ajsdlsaj', '6614118', '18162323650'),
('csdaima', '6614118', '18162323650'),
('dhasdjlk', '', '1816'),
('djlskfjl', '', '66'),
('gjsflgjl', '', '6564'),
('hdashjkdhas', '', '18162323650'),
('ieason', '123789456', '18713587961'),
('jsalkdjasj', '6614118', '18162323650'),
('mmmmm', 'daskdasjk', ''),
('r878979', '', 'fajfkld'),
('root', 'tq6614118', '18162323650'),
('sdjaskjlk', '', '131'),
('shdlasdklj', 'daskdasjk', ''),
('supperboy', '789789', '18162323333'),
('ta123123', '', '18162323650'),
('takeern', 'tq6614118', '18162323650'),
('takerkdsak', '', '56465465'),
('test', '123456', ''),
('tq123123', '', '18162323650'),
('tq123456789', '6614118', ''),
('tq147147', '', '18162323650'),
('tq456456', '6614118', '18162323650'),
('tq6614118', '', '18162323650'),
('tq6666', '6614118', '18162323650'),
('tq666666', '', '18162323650'),
('tq6666666', '', '18162323650'),
('tq66666666', '6614118', '18162323650'),
('tq789789', '', '18162323650');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
