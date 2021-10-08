/*
 Navicat Premium Data Transfer

 Source Server         : VMware Ubuntu
 Source Server Type    : MySQL
 Source Server Version : 50733
 Source Host           : 192.168.32.214:3306
 Source Schema         : dkpool

 Target Server Type    : MySQL
 Target Server Version : 50733
 File Encoding         : 65001

 Date: 09/10/2021 01:22:08
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for address_role
-- ----------------------------
DROP TABLE IF EXISTS `address_role`;
CREATE TABLE `address_role`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '账户地址',
  `role` int(8) NULL DEFAULT NULL COMMENT '用户角色 1 普通账户地址 2 管理员账户地址',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for nft_cost_dkps
-- ----------------------------
DROP TABLE IF EXISTS `nft_cost_dkps`;
CREATE TABLE `nft_cost_dkps`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `win_nft_id` int(11) NULL DEFAULT NULL,
  `cost_per_nft` float(11, 5) NULL DEFAULT NULL,
  `pool_name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for pool_Info
-- ----------------------------
DROP TABLE IF EXISTS `pool_Info`;
CREATE TABLE `pool_Info`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pool_name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '池子的名称',
  `pool_desc` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '池子的描述',
  `poolIcon` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '池子的图标url',
  `type` int(255) NULL DEFAULT NULL COMMENT '指定池子的类型。(1. donate: 捐赠池 2.stake：质押池)',
  `token_name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT 'token的名称。',
  `tokenIcon` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT 'token图标的url',
  `token_address` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '与池子质押/捐赠接受的token地址。',
  `status` int(11) NULL DEFAULT NULL COMMENT '状态：1 待审批 2 审批通过 3审批不通过',
  `applicant_address` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '申请人地址',
  `email` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '接收通知邮件地址',
  `admin_address` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT 'pool管理员地址',
  `note` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `cost_per_token` int(11) NULL DEFAULT NULL,
  `time_start` int(11) NULL DEFAULT NULL,
  `time_end` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 34 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Table structure for user_login_info
-- ----------------------------
DROP TABLE IF EXISTS `user_login_info`;
CREATE TABLE `user_login_info`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '钱包地址',
  `last_login_time` int(11) NULL DEFAULT NULL COMMENT '用户上一次登录时间（timestamp)',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for win_Info
-- ----------------------------
DROP TABLE IF EXISTS `win_Info`;
CREATE TABLE `win_Info`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nft_name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '要创建NFT的名字',
  `nft_description` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '这个NFT的描述',
  `pool_name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '在哪个POOL下创建NFT',
  `nft_icon` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT 'nft的资源素材',
  `total_num_of_mint` int(255) NULL DEFAULT NULL COMMENT '总铸造量',
  `time_start` int(255) NULL DEFAULT NULL COMMENT '开始兑换的时间',
  `time_end` int(255) NULL DEFAULT NULL COMMENT '结束兑换的时间',
  `nft_address` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `status` int(2) NULL DEFAULT NULL COMMENT '状态：1 待审批 2 审批通过 3审批不通过',
  `applicant_address` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '申请人地址',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 65 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = DYNAMIC;

SET FOREIGN_KEY_CHECKS = 1;
