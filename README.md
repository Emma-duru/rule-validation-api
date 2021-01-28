# Rule Validation API

A simple rule validation API created for the [Flutterwave](https://flutterwave.com/) Technical Assessment. It was made with Node.js and Express.

## Home Route

Returns json data about the developer.

### URL

`/`

### Method

`GET`

### URL Params

None

### Data Params

None

### Sample Call

```javascript
fetch("/")
  .then((response) => response.json())
  .catch((err) => console.log("Request Failed", err));
```

### Success Response

- **Code:** `200`  
  **Content:**
  ```javascript
  {
    "message": "My Rule Validation API",
    "status": "success",
    "data": {
        "name": "Duru, Emmanuella Victoria",
        "github": "@Emma-duru",
        "email": "emmavduru@gmail.com",
        "mobile": "+2348059300673"
    }
  }
  ```

### Error Response

None

---

## Rule Validation Route

Accepts JSON data containing a rule and data field to validate the rule against.

### URL

`/validate-rule`

### Method

`POST`

### URL Params

None

### Data Params

- The `rule` and `data` fields are required.
- The `rule` field should be a valid `JSON` object and should contain the following required fields:

  - `fields`: The field in the data passed to validate the rule against
  - `condition`: The condition to use for validating the rule. Accepted condition values are:
    - `eq`: Means the field value should be equal to the condition value
    - `neq`: Means the field value should not be equal to the condition value
    - `gt`: Means the field value should be greater than the condition value
    - `gte`: Means the field value should be greater than or equal to the condition value
    - `contains`: Means the field value should contain the condition value
  - `condition_value`: The condition value to run the rule against.

- The data field can be any of:
  - A valid `JSON` object
  - A valid array
  - A string

### Sample Call

```javascript
fetch("/validate-rule", {
    method: "POST",
    body: JSON.stringify({
        "rule": {
            "field": "missions"
            "condition": "gte",
            "condition_value": 30
        },
        "data": {
            "name": "James Holden",
            "crew": "Rocinante",
            "age": 34,
            "position": "Captain",
            "missions": 45
        }
    })
})
```

### Success Response

- **Code:** 200
- **Content:**
  ```javascript
  {
    "message": "field missions successfully validated."
    "status": "success",
    "data": {
        "validation": {
        "error": false,
        "field": "missions",
        "field_value": 30,
        "condition": "gte",
        "condition_value: 30
        }
    }
  }
  ```

### Error Response

- **Code:** 400
  **Content:**
  ```javascript
  {
    "message": "field missions failed validation."
    "status": "error",
    "data": {
        "validation": {
        "error": true,
        "field": "missions",
        "field_value": 30,
        "condition": "gte",
        "condition_value: 54
        }
    }
  }
  ```

---

## Packages Used

- [node.js](nodejs.org)
- [express](expressjs.com)

## How to Run

- To clone the repository to your local computer, run
  `git clone https://github.com/Emma-duru/rule-validation-api.git`
  on your terminal

- To install the necessary packages, run `node app`
