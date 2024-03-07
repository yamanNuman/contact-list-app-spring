
# Contact List App

An application where you can add and delete contacts. It is also possible to upload information and change photos of registered contacts.


## Tech Stack

**Frontend:** React

**Backend:** Java, Spring Boot


## Installation

```bash
  https://github.com/yamanNuman/contact-list-app-spring.git
```
Let's then import the project we cloned into our IDE. Then let's run our project. Then let's run the necessary commands in the terminal.

```bash
  cd frontend
  npm install
  npm start
```
## Documentation

After the application is run, it will start from the following url as the start page.

```bash
  http://localhost:3000/
```
On the page that opens, there is a list of all registered contacts and a button to add a new contact. Because pagination is used, the page lists only 10 records.

It moves to the next page after every 10 records.

![contact-list](images/contact-list.PNG)

After clicking the add new contact button, you can create a new record from the window that opens. You can also upload a photo on the recording screen.

![add-contact](images/add-contact.PNG)

If you want to update the information of a registered contact, you can click on it and perform the update on the page that opens.

![update-contact](images/update-contact.PNG)

At the same time, if you want to delete the record, you can do so from this screen. At the same time, the photo saved in the backend is also deleted.


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
