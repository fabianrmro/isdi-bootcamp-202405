curl -v http://localhost:8080/users/investor -X POST -d '{"name":"luz", "surname":"clarita", "email":"luz@clarita.com", "phoneNumber":"987654321", "username":"mariaclarita", "password":"123123123", "passwordRepeat":"123123123", "image":"http://registrodeinvestor", "description":"description"}' -H "Content-Type: aplication/json"