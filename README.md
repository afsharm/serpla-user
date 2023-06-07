# Serpla-User
Service Place - User Management Service

## Description
The code is based on `nest.js` and wants to support OWASP at some level.


## Useful commands

```bash
$ yarn install
$ yarn start
# default port: 3000
```

## Tools

PostgreSQL and PgAdmin docker compose
https://github.com/khezen/compose-postgres



NestJS and PostgreSQL
https://betterprogramming.pub/nest-js-project-with-typeorm-and-postgres-ce6b5afac3be


Useful resources for NestJS
https://github.com/nestjs/awesome-nestjs

## API Design

### Organize the API design around resources
* When possible, resource URIs should be based on nouns (the resource) and not verbs (the operations on the resource).
* A collection is a separate resource from the item within the collection, and should have its own URI.
```
https://adventure-works.com/orders [GET]
https://adventure-works.com/orders/1 [GET]
https://adventure-works.com/order [POST]
```
* Also consider the relationships between different types of resources and how you might expose these associations.
```
/customers/5/orders
/orders/99/customer
/customers/1/orders/99
```
* Handle non-resource scenarios through HTTP requests that invoke a function and return the results as an HTTP response message. Like `/add?operand1=99&operand2=1`

### HATEOAS
provide relevant links for each response. Like:

```json
{
    "account": {
        "account_number": 12345,
        "balance": {
            "currency": "usd",
            "value": 100.00
        },
        "links": {
            "deposits": "/accounts/12345/deposits",
            "withdrawals": "/accounts/12345/withdrawals",
            "transfers": "/accounts/12345/transfers",
            "close-requests": "/accounts/12345/close-requests"
        }
    }
}
```
### resources
* https://en.wikipedia.org/wiki/HATEOAS
* https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design
