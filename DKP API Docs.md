# DKP 后台RESTful 风格 API 接口文档

​

## 接口名称

DKPool申请列表

### 接口描述

- 获取签名地址所有提交创建Pool申请列表

### 请求地址

47.241.127.229:3000/api/dkpool/

### 请求方式

**GET**

### 请求参数

#### Header 参数

| **参数名** | **必选** | **类型**** / ****参数值** | **说明** |
| --- | --- | --- | --- |
| **rawSignedTransaction** | 是 | application/json | 用户签名消息 |

#### 参数

| **参数名** | **必选** | **类型** | **限制条件** | **说明** |
| --- | --- | --- | --- | --- |
|||||||
### 需要调用到的其他接口:

| **接口名称** | **接口地址** | **用途说明** |
| --- | --- | --- |
|| | ||

​

### 返回示例
```json
{
	"response": {
		"status": 200,
		"charset":"UTF-8",
		"respond_time": "2021-09-15 09:03:14",
		"result": [
			{
				"id": 17,
				"poolname": "DKP1",
				"pooldesc": "test",
				"poolIcon": "fsdfsdfsdfsdfsdf",
				"type": 1,
				"tokenName": "token1",
				"tokenIcon": "sdfsdfdf",
				"tokenAddres":,
				"status": null,
				"applicantAddress": null,
				"email": "123@163.com",
				"adminAddress": "sdfsdfdsfsdfdsfds"
			},
			{
				"id": 17,
				"poolname": "DKP1",
				"pooldesc": "test",
				"poolIcon": "fsdfsdfsdfsdfsdf",
				"type": 1,
				"tokenName": "token1",
				"tokenIcon": "sdfsdfdf",
				"tokenAddres":,
				"status": null,
				"applicantAddress": null,
				"email": "123@163.com",
				"adminAddress": "sdfsdfdsfsdfdsfds"
			},
		]
	}
}
```
## 接口名称

提交DKPool申请

### 接口描述

- 用户提交创建DKPool申请

### 请求地址

47.241.127.229:3000/api/dkpool/new\_dkpool

### 请求方式

**POST**

### 请求参数

#### Header 参数

| **参数名** | **必选** | **类型**** / ****参数值** | **说明** |
| --- | --- | --- | --- |
| **rawSignedTransaction** | 是 | application/json | 用户签名消息 |

#### Body 参数

| **参数名** | **必选** | **类型** | **限制条件** | **说明** |
| ------------ | --------- | --------- | ------------- | --------- |
| poolname | 是 | String | 无 | 池子的名称 |
| **pooldesc** | **是** | **String** | **无** | **池子的描述** |
| **poolIcon** | **是** | **String** | **无** | **池子的图标 url** |
| **type** | **是** | **Int** |**无**| **指定池子的类型。 (1. donate:  捐赠池  2.Task 质押池3 Mission)** |
| **tokenName** | **是** | **String** |**无** |**token 的名称。** |
| **tokenIcon** | **是** | **String** |**无**| **token 图标的 url** |
| **tokenAddress** | **是** | **String** |**无**| **与池子质押捐赠接受的 token 地址。** |
| **email** | **是** | **String** |**无**|**接收通知邮件地址** |
| **signed_Transaction** | **是** | **String** |**无**| **用户私钥签名后的交易 **|


### 需要调用到的其他接口:

| **接口名称** | **接口地址** | **用途说明** |
| --- | --- | --- |
|      |       ||     |

​

### 返回示例
```json
{
	"response": {
		"status": 200,
		"charset":"UTF-8",
		"respond_time": "2021-09-15 08:04:38",
		"result": {
			"affectedRows": 1
		}
	}
}
```
## 接口名称

修改DKPool申请

### 接口描述

- 用户修改DKPool申请

### 请求地址

47.241.127.229:3000/api/dkpool/poolid

### 请求方式

**PUT**

### 请求参数

#### Header 参数

| **参数名** | **必选** | **类型**** / ****参数值** | **说明** |
| --- | --- | --- | --- |
| **rawSignedTransaction** | 是 | application/json | 用户签名消息 |

#### 参数

| **参数名** | **必选** | **类型** | **限制条件** | **说明** |
| --- | --- | --- | --- | --- |
| **poolname** | **是** | **String** || **池子的名称** |
| **pooldesc** | **是** | **String** ||**池子的描述** |
| **poolIcon** | **是** | **String** | | **池子的图标**** url** |
| **adminAddress** | **是** | **String** | | **pool**** 管理员地址** |
| **tokenIcon** | **是** | **String** | | **token**** 图标的 ****url** |
| **email** | **是** | **String** || **接收通知邮件地址** |
| **tokenName** | **是** | **String** || **token**** 的名称。** |

### 需要调用到的其他接口:

| **接口名称** | **接口地址** | **用途说明** |
| --- | --- | --- |
|||||

​

### 返回示例

```json
{
	"response": {
		"status": 200,
		"charset":"UTF-8",
		"respond_time": "2021-09-15 08:04:38",
		"result": {
			"changedRows": 1
		}	
	}
}
```

## 接口名称

NFT Win申请列表

### 接口描述

- 获取签名地址所有提交创建NFT Win申请列表

### 请求地址

47.241.127.229:3000/api/win/

### 请求方式

**GET**

### 请求参数

#### Header 参数

| **参数名** | **必选** | **类型**** / ****参数值** | **说明** |
| --- | --- | --- | --- |
| **rawSignedTransaction** | 是 | application/json | 用户签名消息 |

#### 参数

| **参数名** | **必选** | **类型** | **限制条件** | **说明** |
| --- | --- | --- | --- | --- |
|||||||

### 需要调用到的其他接口:

| **接口名称** | **接口地址** | **用途说明** |
| --- | --- | --- |
|||||
​

### 返回示例
```json
{
	"response": {
		"status": 200,
		"charset": "UTF-8",
		"respond_time": "2021-09-15 08:54:29",
		"result": [
			{
				"id": 3,
				"nft_name": "test",
				"nft_description": "test",
				"pool_name": "DKP1",
				"nft_icon": ,
				"total_num_of_mint": 100000,
				"timeStart": 342342,
				"timeEnd": 243432,
				"cost_per_nft": 9.2,
				"nft_address": "342353464",
				"status": null,
				"applicantAddress": null
			},
			{
				"id": 3,
				"nft_name": "test",
				"nft_description": "test",
				"pool_name": "DKP1",
				"nft_icon": ,
				"total_num_of_mint": 100000,
				"timeStart": 342342,
				"timeEnd": 243432,
				"cost_per_nft": 9.2,
				"nft_address": "342353464",
				"status": null,
				"applicantAddress": null
			}
		]
	}
}
```
## 接口名称

提交NFT Win申请

### 接口描述

- 用户提交创建NFT Win申请

### 请求地址

47.241.127.229:3000/api/win/new\_winl

### 请求方式

**POST**

### 请求参数

#### Header 参数

| **参数名** | **必选** | **类型**** / ****参数值** | **说明** |
| --- | --- | --- | --- |
| **rawSignedTransaction** | 是 | application/json | 用户签名消息 |

#### Body参数

| **参数名** | **必选** | **类型** | **限制条件** | **说明** |
| --- | --- | --- | --- | --- |
| **nft\_name** | **是** | **String** | **无** | **要创建 NFT 的名字** |
| **nft\_description** | **是** | **String** | **无** | **这个 NFT 的描述** |
| **pool\_name** | **是** | **String** |**无** | **在哪个 POOL 下创建 NFT** |
| **nft\_icon** | **是** | **String** | **无** | **nft 的资源素材** |
| **total\_num\_of\_mint** | **是** | **int** | **无** | **总铸造量** |
| **timeStart** | **是** | **int** |**无** | **开始兑换的时间 ( 时间戳 )** |
| **timeEnd** | **是** | **int** |**无**   | **结束兑换的时间 ( 时间戳 )** |
| **cost\_per\_nft** | **是** | **Float** | **无** | **每个 NFT 消耗 DKP 数量** |
| **nft\_address** | **是** | **String**  |**无** |    						  |
| **signed_Transaction** | **是** | **String** |**无** | **用户私钥签名后的交易 **|
### 需要调用到的其他接口:

| **接口名称** | **接口地址** | **用途说明** |
| --- | --- | --- |
|||||

​

### 返回示例

```json
{
	"response": {
		"status": 200,
		"charset":"UTF-8",
		"respond_time": "2021-09-15 08:04:38",
		"result": {
			"affectedRows": 1
		}
	}
}
```

## 接口名称

修改NFT Win申请

### 接口描述

- 用户修改NFT Win申请

### 请求地址

47.241.127.229:3000/api/win/win\_nft\_id

### 请求方式

**PUT**

### 请求参数

#### Header 参数

| **参数名** | **必选** | **类型**** / ****参数值** | **说明** |
| --- | --- | --- | --- |
| **rawSignedTransaction** | 是 | application/json | 用户签名消息 |

#### 参数

| **参数名** | **必选** | **类型** | **限制条件** | **说明** |
| --- | --- | --- | --- | --- |
| **nft\_name** | **是** | **String** | **无** | **要创建**** NFT ****的名字** |
| **nft\_description** | **是** | **String** | **无** | **这个**** NFT ****的描述** |
| **pool\_name** | **是** | **String** | | **在哪个**** POOL ****下创建**** NFT** |
| **nft\_icon** | **是** | **String** || **nft 的资源素材** |
| **total\_num\_of\_mint** | **是** | **int** | | **总铸造量** |
| **timeStart** | **是** | **int** | | **开始兑换的时间**** ( ****时间戳**** )** |
| **timeEnd** | **是** | **int** || **结束兑换的时间**** ( ****时间戳**** )** |
| **cost\_per\_nft** | **是** | **Float** || **每个**** NFT ****消耗**** DKP ****数量** |
| **nft\_address** | **是** | **String** | |||

### 需要调用到的其他接口:

| **接口名称** | **接口地址** | **用途说明** |
| --- | --- | --- |
|||||

​

### 返回示例

```json
{
	"response": {
		"status": 200,
		"charset":"UTF-8",
		"respond_time": "2021-09-15 08:04:38",
		"result": {
			"changedRows": 1
		}
	}
}
```