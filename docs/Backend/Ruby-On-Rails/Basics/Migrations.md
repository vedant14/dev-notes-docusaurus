### Change a column datatype
- Using `def up` and `def down` is necessary if you want to do a migration rollback
```ruby
def up
    change_column :projects, :deadline, :oldname
end
def down
    change_column :projects, :deadline, :date
end
```

### Add a column

```ruby
def up
	add_column :accounts, :ssl_enabled, :boolean, default: true
end

def down
	remove_column :accounts, :ssl_enabledc
end
```

### Rename a column

```ruby
def change
    rename_column :users, :email, :email_address
end
```


### Add foreign-key references

- Suppose posts should belong to users 

```ruby
rails g migration AddUserRefToProducts user:references
```

- This adds 

```
class AddUserRefToProducts < ActiveRecord::Migration
	def up
		add_reference :creatives, :user, null: false, foreign_key: true
	end
	def down
		remove_reference :creatives, :user, null: false, foreign_key: true
	end
end
```



### Add Foreign Key references with different name

- Suppose you want to reference user table but by the name `scribe`
- `One Scribe has many meetings`

```ruby
    add_reference :meetings, :scribe, index: true, foreign_key: { to_table: :users }, null: false
```

- Then in the model files `user.rb`

```jsx
class User < ApplicationRecord
	has_many :meetings, :foreign_key => "scribe_id"
end
```

- In the `meeting.rb` file

```jsx
belongs_to :scribe, class_name: "User"
```

---

### New Table

```ruby

class CreatePromotionRuleStores < ActiveRecord::Migration[5.1]
  def change
    create_table :spree_promotion_rules_stores do |t|
      t.references :store, null: false
      t.references :promotion_rule, null: false

      t.timestamps
    end
  end
end
```



### Rails db:rollback

1. Replace 1 with however number of steps you want to rollback
2. Use with caution because, you will need to rollback the prod db as well 
3. Heroku pg does not offer rollback facility in the free plan. You will have to drop the db if this is used on heroku once it was migrated.

```ruby
rake db:rollback STEP=1
```