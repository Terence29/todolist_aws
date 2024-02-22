# todolist_aws

url api : https://rthv82xewe.execute-api.eu-north-1.amazonaws.com/test/tasks
url bucket : http://myterencebucket.s3-website.eu-north-1.amazonaws.com
commande curl pour tester la connexion a l'api : curl -k https://rthv82xewe.execute-api.eu-north-1.amazonaws.com/test/tasks
verbes utilisés : GET,DELETE,POST,PUT

Il y a un problème d'import d'aws sdk dans mes fonctions lambda et je ne sais absolument pas d'où vient le problème. Je me suis rendu compte au dernier moment que mon erreur venait de là.
Je ne sais donc pas si le code de mon javascript fonctionne.

Nom de mes fonctions lambda : todolist-updatetask-terence, todolist-createtask-terence, todolist-listtasks-terence, todolist-gettask-terence
Nom de mon api : todolist-api-terence
nom table dynamodb : todolist-terence
