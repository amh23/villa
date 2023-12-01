# Villas
This projected was developed using node.js express framework.

# Database Server

Go to [title]https://account.mongodb.com/account/login and create a new account or if you have one, please sign in.

## Create Free Shared Account

1. **username** and **passsword** are filled.
2. Add your **IP Address**
3. In Cluster Home page, click the **connect** button.
4. Click **Connect using MongoDB Compass** and install MongoDB Compass if you do not have installed.
5. In the connection string, fill **username** and **password**.

`mongodb+srv://<username>:<password>@cluster0.07dh1oa.mongodb.net/<database_name>` 

6. Click **Connect** button

7. Create **.env** file in the root of the project folder and set the database url string you already created.

 `DATABASE_URL = 'database connection string'`

 8. Run `npm start` command 

