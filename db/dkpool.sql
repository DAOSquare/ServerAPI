/*
 Navicat Premium Data Transfer

 Source Server         : 192.168.252.133
 Source Server Type    : MySQL
 Source Server Version : 50735
 Source Host           : 192.168.252.133:3306
 Source Schema         : dkpool

 Target Server Type    : MySQL
 Target Server Version : 50735
 File Encoding         : 65001

 Date: 03/09/2021 22:05:56
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for pool_Info
-- ----------------------------
DROP TABLE IF EXISTS `pool_Info`;
CREATE TABLE `pool_Info`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `poolname` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '池子的名称',
  `pooldesc` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '池子的描述',
  `poolIcon` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '池子的图标url',
  `type` int(255) NULL DEFAULT NULL COMMENT '指定池子的类型。(1. donate: 捐赠池 2.stake：质押池)',
  `tokenName` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT 'token的名称。',
  `tokenIcon` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT 'token图标的url',
  `tokenAddress` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '与池子质押/捐赠接受的token地址。',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for win_Info
-- ----------------------------
DROP TABLE IF EXISTS `win_Info`;
CREATE TABLE `win_Info`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `win_name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '要创建NFT的名字',
  `win_description` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '这个NFT的描述',
  `external_url` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT 'openSea标准预留字段',
  `image_url` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT 'nft的资源素材',
  `supply` int(255) NULL DEFAULT NULL COMMENT '总铸造量',
  `timeStart` int(11) NULL DEFAULT NULL COMMENT '开始兑换的时间',
  `timeEnd` int(11) NULL DEFAULT NULL COMMENT '结束兑换的时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
