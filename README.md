# Mack's Food Frontend Application
## Tasks
1. ### Authentication
2. ### Authorization
3. ### Searching
4. ### filtering
5. ### Order
6. ### Payment
7. ### Cart
8. ### Review
9. ### Promotion
10. ### Notification
11. ### Addresse
12. ### Miscellaneous
## API's to be consumed via front end
### Menus:
    - /menus/- returns a list of menus [GET]    
    - /menus/{slug} - returns food items that belong to a particular menu [GET]
    - Searching and filtering:
    - <b>/search/{keyword}</b> - returns a list of items matching keyword. [GET]
    - /search/filter/{availability} - returns a list of items matching the availability status. [GET]

### Orders:
    - /orders/ - This endpoint could be used to place an order. The user would provide the necessary information, such as their address and payment details, and the server would respond with the estimated delivery time and cost. [GET]
    - /orders/{id} -  This endpoint could be used to retrieve information about a specific order. The response could include details such as the order status, the items ordered, and the delivery information. [GET]
    - /orders/{orderId}/track - This endpoint could be used to track the status of an order in real-time. [GET]

### Payments:

    - /payments/ - accepts amount, orderID and payment service provider. [POST]
    - /payments/ - This endpoint could be used to manage payment information for a user's account. [GET]
    - /payments/delivery - This endpoint could be used to calculate the delivery fee for an order based on the user's location and the distance to the kitchen. [GET]
    - /payments/{id} - view specific payment details. [GET]

### Cart:

    - /cart/ - returns cart object for current logged in user and it's list of products. [GET]
    - /cart/{productID} - update the cart. [PUT]
    - /cart/{productID} - delete a product from cart. [DELETE]

### Reviews:
    - /reviews/ - get all reviews . [GET]
    - /reviews/ - create a new review. [POST]
    - /reviews/{reviewID} - update a specific review. [PATCH]
    - /reviews/{reviewID} - update a specific review. [DELETE]


### Promotions:
    - /promotions/ - This endpoint could be used to apply promotional codes or discounts to an order. 

### Notifications:

    - /notifications/ - returns all notifications. [GET]
    - /notifications/{id} - returns a specific notification. [GET]
    - /notifications/ - mark all as read. [PUT]


### Addresses:

    - /address/ - returns all user addresses. [GET]
    - /address/{slug} - returns a specific address. [GET]
    - /address/{slug} - edit a specific address resource. [PUT]
    - /address/{slug} - delete a specific address resource. [DELETE]
    - /address/default/{slug} - make an address the default. [GET]
### Miscellaneous:

    - /favorites/ - get list of all favorites. [GET]
    - /favorites/{id} - adds either  food item or menu item to favorites. [POST]

## ADMIN ROLES:

### Menu:
    - /menus/ - creates a new menu [POST]
    - /menus/{slug} - edit existing menu [PATCH]
    - /menus/{slug} - delete existing menu [DELETE]


### Orders:
    - /orders/{id} - edit order item, manage status etc. [PUT/PATCH]
    - /orders/{delete} - delete order item. [DELETE]


## SUPER ADMIN ROLES

### Users:
    - /users/ - This endpoint manages user accounts. The user could create a new account, update their profile information, and view their order history.
    - /users/{slug} - This endpoint returns info about a user

