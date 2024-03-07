
## API Reference

#### Get contact

```http
  GET /contacts
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. |

#### Get All contacts

```http
  GET /contact/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `@RequestParam page`      | `int` | **Not Required**. Default value = 0 |
| `@RequestParam size`      | `int` | **Not Required**. Default value = 10 |

#### Post contact

```http
  POST /contacts
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Request Body`      | `Contact` | **Required**. |


#### Put contact

```http
  PUT /contacts/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `@RequestParam id` | `String` | **Required**. |
| `@RequestParam file` | `MultipartFile` | **Required**. |

#### Get photo

```http
  GET /contacts/photo/{filename}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `filename`      | `String` | **Required**. |

#### Delete contact

```http
  DELETE /contacts/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `String` | **Required**. |
