# DKP 后台RESTful 风格 API 接口文档




## 接口名称


用户注册


### 接口描述



- 用户通过钱包地址注册



### 请求地址


http://47.241.127.229:5000/api/user/regiser


### 请求方式



**POST**



### 请求参数



#### Header 参数



| **参数名** | **必选** | **类型/参数值** | **说明** |
| --- | --- | --- | --- |
|||||||

#### Body 参数



| **参数名** | **必选** | **类型** | **限制条件** | **说明** |
| --- | --- | --- | --- | --- |
| **signature** | **是** | **String** | **无** | **用户地址签名** |
| **walletAddress** | **是** | **String** | **无** | **用户地址** |
| **message** | **是** | **String** | **无** | **签名内容** |
| **role** | **是** | **int** | **无** | **用户角色 1 普通账户地址 2 管理员账户地址** |


### 需要调用到的其他接口:



| **接口名称** | **接口地址** | **用途说明** |
| --- | --- | --- |
|| | ||



### 返回示例

```json
{
    "response": {
        "status": 200,
        "charset": "UTF-8",
        "respond_time": "2021-10-08 09:58:34",
        "result": {
            "affectedRows": 1
        }
    }
}

```






## 接口名称


记录用户登录信息


### 接口描述



- 记录用户登录信息



### 请求地址


http://47.241.127.229:5000/api/user/login


### 请求方式



**POST**



### 请求参数



#### Header 参数



| **参数名** | **必选** | **类型/参数值** | **说明** |
| --- | --- | --- | --- |
|||||||

#### Body 参数



| **参数名** | **必选** | **类型** | **限制条件** | **说明** |
| --- | --- | --- | --- | --- |
| **signature** | **是** | **String** | **无** | **用户地址签名** |
| **walletAddress** | **是** | **String** | **无** | **用户地址** |
| **message** | **是** | **String** | **无** | **签名内容** |


### 需要调用到的其他接口:



| **接口名称** | **接口地址** | **用途说明** |
| --- | --- | --- |
|| | ||



### 返回示例

```json
{
    "response": {
        "status": 200,
        "charset": "UTF-8",
        "respond_time": "2021-10-08 09:58:34",
        "result": {
            "affectedRows": 1
        }
    }
}

```






## 接口名称



通过钱包地址获取用户信息



### 接口描述



- 通过钱包地址获取用户信息



### 请求地址


http://47.241.127.229:5000/api/user/user_info/walletAddress


### 请求方式



**GET**



### 请求参数



#### Header 参数



| **参数名** | **必选** | **类型/参数值** | **说明** |
| --- | --- | --- | --- |
|||||||

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
        "charset": "UTF-8",
        "respond_time": "2021-10-08 10:16:52",
        "result": [
            {
                "id": 1,
                "address": "0x44dDd4501eE8c55AAF80658E50a67Ac4ae8Faa79",
                "role": 1
            },
            {
                "id": 2,
                "address": "0x44dDd4501eE8c55AAF80658E50a67Ac4ae8Faa79",
                "role": 1
            }
        ]
    }
}
```




## 接口名称



通过钱包地址获取用户登录信息



### 接口描述



- 通过钱包地址获取用户登录信息



### 请求地址


http://47.241.127.229:5000/api/user/user_login_info/walletAddress


### 请求方式



**GET**



### 请求参数



#### Header 参数



| **参数名** | **必选** | **类型/参数值** | **说明** |
| --- | --- | --- | --- |
|||||||

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
        "charset": "UTF-8",
        "respond_time": "2021-10-08 10:20:28",
        "result": [
            {
                "id": 1,
                "address": "0x44dDd4501eE8c55AAF80658E50a67Ac4ae8Faa79",
                "last_login_time": 1633712057
            }
        ]
    }
}
```




## 接口名称



DKPool申请列表



### 接口描述



- 获取签名地址所有提交创建Pool申请列表



### 请求地址


http://47.241.127.229:5000/api/dkpool/?signature=0x2efecd7f36034ccb70708a7f899bcc36010bbdacd23278002f6b4bbfcdec75e90de5d6d06963d5ecc319ebdcb531aff06790079dc07c78f9782c8020bbd5abb01b&walletAddress=0x44dDd4501eE8c55AAF80658E50a67Ac4ae8Faa79&message=Hello%20world


### 请求方式



**GET**



### 请求参数



#### Header 参数



| **参数名** | **必选** | **类型/参数值** | **说明** |
| --- | --- | --- | --- |
|||||||

#### 参数



| **参数名** | **必选** | **类型** | **限制条件** | **说明** |
| --- | --- | --- | --- | --- |
| **signature** | **是** | **String** | **无** | **用户地址签名** |
| **walletAddress** | **是** | **String** | **无** | **用户地址** |
| **message** | **是** | **String** | **无** | **签名内容** |


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



根据poolId获取 DKPool申请信息



### 接口描述



- 根据poolId获取 DKPool申请信息



### 请求地址


http://47.241.127.229:5000/api/dkpool/poolId


### 请求方式



**GET**



### 请求参数



#### Header 参数



| **参数名** | **必选** | **类型/参数值** | **说明** |
| --- | --- | --- | --- |
|||||||

#### 参数



| **参数名** | **必选** | **类型** | **限制条件** | **说明** |
| --- | --- | --- | --- | --- |
|||||||


### 需要调用到的其他接口:



| **接口名称** | **接口地址** | **用途说明** |
| --- | --- | --- |
|| | ||




### 返回示例

```json

{
    "response": {
        "status": 200,
        "charset": "UTF-8",
        "respond_time": "2021-09-25 08:58:22",
        "result": [
            {
                "id": 30,
                "pool_name": "ff1ff3ffff",
                "pool_desc": "test",
                "poolIcon": "sdfsd",
                "type": 1,
                "token_name": "TEST_TOKEN",
                "tokenIcon": "232342",
                "token_address": "sdfsdf",
                "status": 3,
                "applicant_address": "0x44dDd4501eE8c55AAF80658E50a67Ac4ae8Faa79",
                "email": "sdfsdfsdf@163.com",
                "admin_address": "",
                "note": "",
                "cost_per_token": 1,
                "time_start": 32344,
                "time_end": 3434
            }
        ]
    }
}

```


## 接口名称



提交DKPool申请



### 接口描述



- 用户提交创建DKPool申请



### 请求地址



http://47.241.127.229:5000/api/dkpool/new_dkpool



### 请求方式



**POST**



### 请求参数



#### Header 参数



| **参数名** | **必选** | **类型**** / ****参数值** | **说明** |
| --- | --- | --- | --- |
|  |  |  |  |



#### Body 参数



| **参数名** | **必选** | **类型** | **限制条件** | **说明** |
| ------------ | --------- | --------- | ------------- | --------- |
| **pool_name** | **是** | **String** | **无** | **池子的名称** |
| **pool_desc** | **是** | **String** | **无** | **池子的描述** |
| **poolIcon** | **是** | **String** | **无** | **池子的图标 url** |
| **type** | **是** | **Int** |**无**| **指定池子的类型。 (1. donate:  捐赠池  2.Task 质押池3 Mission)** |
| **cost_per_token** | **是** | **Int** |**无**| **消耗DKP数量** |
| **token_address** | **是** | **String** |**无**| **与池子质押捐赠接受的 token 地址。** |
| **token_name** | **是** | **String** |**无** |**token 的名称。** |
| **tokenIcon** | **是** | **String** |**无**| **token 图标的 url** |
| **time_start** | **是** | **int** |**无**| **开始时间，timestamp时间戳格式** |
| **time_end** | **是** | **int** |**无**| **结束时间，timestamp时间戳格式** |
| **admin_address** | **是** | **String** |**无**| **管理员地址** |
| **email** | **是** | **String** |**无**|**接收通知邮件地址** |
| **note** | **否** | **String** |**无**|**池子说明** |
| **walletAddress** | **是** | **String** |**无**| **用户地址** |
| **signature** | **是** | **String** |**无**| **用户签名信息** |
| **message** | **是** | **String** |**无**| **签名内容** |





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



http://47.241.127.229:5000/api/dkpool/poolid



### 请求方式



**PUT**



### 请求参数



#### Header 参数



| **参数名** | **必选** | **类型**** / ****参数值** | **说明** |
| --- | --- | --- | --- |
|  | |  |  |



#### Body参数



| **参数名** | **必选** | **类型** | **限制条件** | **说明** |
| --- | --- | --- | --- | --- |
| **pooldesc** | **是** | **String** |**无**|**池子的描述** |
| **poolIcon** | **是** | **String** | **无**| **池子的图标 url** |
| **admin_address** | **是** | **String** |**无** | **pool 管理员地址** |
| **token_name** | **是** | **String** |**无**| **token  的名称。** |
| **tokenIcon** | **是** | **String** |**无** | **token 图标的 url** |
| **email** | **是** | **String** |**无**| **接收通知邮件地址** |
| **walletAddress** | **是** | **String** |**无**| **用户地址**|
| **signature** | **是** | **String** |**无**| **用户签名信息**|
| **message** | **是** | **String** |**无**| **签名内容**|


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



审批DKPool申请



### 接口描述



- 审批DKPool申请



### 请求地址



http://47.241.127.229:5000/api/dkpool/audit/poolid



### 请求方式



**PUT**



### 请求参数



#### Header 参数



| **参数名** | **必选** | **类型**** / ****参数值** | **说明** |
| --- | --- | --- | --- |
|  | |  |  |



#### Body参数



| **参数名** | **必选** | **类型** | **限制条件** | **说明** |
| --- | --- | --- | --- | --- |
| **audit_result** | **是** | **int** | **无** | **审批结果： 2 pass 3 fail** |
| **signature** | **是** | **String** | **无** | **用户地址签名** |
| **walletAddress** | **是** | **String** | **无** | **用户地址** |
| **message** | **是** | **String** | **无** | **签名内容** |


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



http://47.241.127.229:5000/api/win/?signature=0x2efecd7f36034ccb70708a7f899bcc36010bbdacd23278002f6b4bbfcdec75e90de5d6d06963d5ecc319ebdcb531aff06790079dc07c78f9782c8020bbd5abb01b&walletAddress=0x44dDd4501eE8c55AAF80658E50a67Ac4ae8Faa79&message=Hello%20world


### 请求方式



**GET**



### 请求参数



#### Header 参数



| **参数名** | **必选** | **类型**** / ****参数值** | **说明** |
| --- | --- | --- | --- |
|||||||



#### query参数



| **参数名** | **必选** | **类型** | **限制条件** | **说明** |
| --- | --- | --- | --- | --- |
| **signature** | **是** | **String** | **无** | **用户地址签名** |
| **walletAddress** | **是** | **String** | **无** | **用户地址** |
| **message** | **是** | **String** | **无** | **签名内容** |



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
        "respond_time": "2021-09-27 07:31:58",
        "result": [
            {
                "id": 56,
                "nft_name": "NFT TEST002",
                "nft_description": "test",
                "pool_name": "KDP0003",
                "nft_icon": "2.png",
                "total_num_of_mint": 10,
                "time_start": 123,
                "time_end": 1234,
                "cost_per_nft": null,
                "nft_address": null,
                "status": 1,
                "applicant_address": "0x44dDd4501eE8c55AAF80658E50a67Ac4ae8Faa79",
                "win_cost_per_nft": 1,
                "win_pool_name": "DKP2",
                "win_nft_id": 56
            },
            {
                "id": 56,
                "nft_name": "NFT TEST002",
                "nft_description": "test",
                "pool_name": "KDP0003",
                "nft_icon": "2.png",
                "total_num_of_mint": 10,
                "time_start": 123,
                "time_end": 1234,
                "cost_per_nft": null,
                "nft_address": null,
                "status": 1,
                "applicant_address": "0x44dDd4501eE8c55AAF80658E50a67Ac4ae8Faa79",
                "win_cost_per_nft": 1,
                "win_pool_name": "DKP2",
                "win_nft_id": 56
            }
		]
	}
}

```

## 接口名称



根据winId获取NFT Win申请信息



### 接口描述



- 根据winId获取NFT Win申请信息



### 请求地址



http://47.241.127.229:5000/api/win/winId


### 请求方式



**GET**



### 请求参数



#### Header 参数



| **参数名** | **必选** | **类型**** / ****参数值** | **说明** |
| --- | --- | --- | --- |
|||||||



#### query参数



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
        "respond_time": "2021-09-27 07:36:46",
        "result": [
            {
                "id": 64,
                "nft_name": "NFT TEST002",
                "nft_description": "test",
                "pool_name": "KDP0003",
                "nft_icon": "2.png",
                "total_num_of_mint": 10,
                "time_start": 123,
                "time_end": 1234,
                "cost_per_nft": null,
                "nft_address": null,
                "status": 1,
                "applicant_address": "0x44dDd4501eE8c55AAF80658E50a67Ac4ae8Faa79",
                "win_cost_per_nft": 1.2,
                "win_pool_name": "DKP21",
                "win_nft_id": 64
            },
            {
                "id": 64,
                "nft_name": "NFT TEST002",
                "nft_description": "test",
                "pool_name": "KDP0003",
                "nft_icon": "2.png",
                "total_num_of_mint": 10,
                "time_start": 123,
                "time_end": 1234,
                "cost_per_nft": null,
                "nft_address": null,
                "status": 1,
                "applicant_address": "0x44dDd4501eE8c55AAF80658E50a67Ac4ae8Faa79",
                "win_cost_per_nft": 1.1,
                "win_pool_name": "DKP22",
                "win_nft_id": 64
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



http://47.241.127.229:5000/api/win/new_win



### 请求方式



**POST**



### 请求参数



#### Header 参数



| **参数名** | **必选** | **类型**** / ****参数值** | **说明** |
| --- | --- | --- | --- |



#### Body参数



| **参数名** | **必选** | **类型** | **限制条件** | **说明** |
| --- | --- | --- | --- | --- |
| **pool_name** | **是** | **String** |**无** | **在哪个 POOL 下创建 NFT** |
| **nft_name** | **是** | **String** | **无** | **要创建 NFT 的名字** |
| **nft_description** | **是** | **String** | **无** | **这个 NFT 的描述** |
| **nft_icon** | **是** | **String** | **无** | **nft 的资源素材** |
| **cost_per_nft** | **是** | **二维数组** | **无** | **每个 NFT 消耗 DKP 数量， eg. [[1.2,"DKP21"],[1.1,"DKP22"]]** |
| **total_num_of_mint** | **是** | **int** | **无** | **总铸造量** |
| **time_start** | **是** | **int** |**无** | **开始兑换的时间 ( 时间戳 )** |
| **time_end** | **是** | **int** |**无**   | **结束兑换的时间 ( 时间戳 )** |
| **signature** | **是** | **String** | **无** | **用户地址签名** |
| **walletAddress** | **是** | **String** | **无** | **用户地址** |
| **message** | **是** | **String** | **无** | **签名内容** |


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



http://47.241.127.229:5000/api/win/winId



### 请求方式



**PUT**



### 请求参数



#### Header 参数



| **参数名** | **必选** | **类型 / 参数值** | **说明** |
| --- | --- | --- | --- |
|  |  |  |  |



#### Body参数



| **参数名** | **必选** | **类型** | **限制条件** | **说明** |
| --- | --- | --- | --- | --- |
| **nft_icon** | **是** | **String** |**无**| **nft 的资源素材** |
| **signature** | **是** | **String** | **无** | **用户地址签名** |
| **walletAddress** | **是** | **String** | **无** | **用户地址** |
| **message** | **是** | **String** | **无** | **签名内容** |



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



审批NFT Win申请



### 接口描述



- 审批NFT Win申请



### 请求地址



47.241.127.229:5000/api/win/audit/winId



### 请求方式



**PUT**



### 请求参数



#### Header 参数



| **参数名** | **必选** | **类型 / 参数值** | **说明** |
| --- | --- | --- | --- |
| |  |  |  |



#### Body参数



| **参数名** | **必选** | **类型** | **限制条件** | **说明** |
| --- | --- | --- | --- | --- |
| **audit_result** | **是** | **int** | **无** | **审批结果： 2 pass 3 fail** |
| **signature** | **是** | **String** | **无** | **用户地址签名** |
| **walletAddress** | **是** | **String** | **无** | **用户地址** |
| **message** | **是** | **String** | **无** | **签名内容** |




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