curl -v http://localhost:8080/users/project -X POST -d '{"name":"luisma", "surname":"dolores", "email":"luisma@dolores.com", "phoneNumber":"987654321", "username":"luismadolores", "password":"123123123", "passwordRepeat":"123123123", "role":"project", "title":"title", "image":"https://www.caricaturaspacoguzman.com/wp-content/uploads/2019/04/Caricatura.jpg","description":"description", "category":"category", "startDate":"09/14/2024", "endDate":"09/14/2025", "budgetGoal":"3000", "bank":"santander"}' -H "Content-Type: aplication/json"