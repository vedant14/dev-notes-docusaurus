### Create a new rails application
- The database selected by default is mysql.
- For deploying the app on heroku it is essential to use postgresql
```ruby
rails new slack_bot -T --database=postgresql 
```


### App with a different version of rails
- You will need to install the specific version of rails before hand - `gem install rails -v 5.2.3`

```ruby
rails _5.2.3_ new new_app_name --database=postgresql
```


### Create and migrate the database
- These commands will create and migrate a rails data base
```
rails db:create
rails db:migrate
```
    
