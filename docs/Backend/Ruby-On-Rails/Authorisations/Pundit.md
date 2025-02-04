- Pundit is what I use for Authorisations in rails 
- CanCan is another alternative which I belive is more popular. 


### Install the Pundit Gem
- Get the latest version of the gem from [rubygems](https://rubygems.org/gems/pundit)
```
gem 'pundit', '~> 2.1'
```

### Generate the Policies
- Policies is the term Pundit uses for policy management. 
- Running this command will create your first policy in `app/policies/application_policy.rb`
```
rails g pundit:install
```

### Including in Application Controller
- Add the following line in `application_controller.rb`
```
include Pundit
```


- See [Creating a new policy next](Creating a new Policy.md)
