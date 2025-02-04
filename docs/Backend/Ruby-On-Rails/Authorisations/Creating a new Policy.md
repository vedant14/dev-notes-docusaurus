
### Create a new policy file

[Video](https://gorails.com/episodes/authorization-with-pundit?autoplay=1)
- Suppose the model name is meeting
```
touch app/policies/meeting_policy.rb
```
- The file should inherit from the `ApplicationPolicy`
- In the `meeting_policy.rb`
```
class MeetingPolicy < ApplicationPolicy
	def index?# => 
		true
	end
end
```

### Editing your controllers
- In your `meetings_controller.rb` add the `authoize @meetings` to the function you want to protect
```
  def index
    @meetings = Meeting.all
    authorize @meetings
  end
```

- If you want to make authorisation required as the default you can add
```
after_action :verify_authorized 
```
- Alternatives
```
after_action :verify_authorized, only: [:show, :edit ]
after_action :verify_authorized, except: [:new, :create]
```

- This would mean that the user will be redirected to login everytime they try to open a protected link
```
after_action :verify_authorized, unless: :devise_controller?
```


### Rescue from Pandit
- This goes in `application_controller.rb`
```
rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized
protected

def user_not_authorized
	flash[:alert] = "You are not authorized to access this page."
	redirect_to(request.referrer || root_path)
end
```