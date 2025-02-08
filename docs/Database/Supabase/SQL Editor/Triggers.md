```
create table public.profiles (
	id uuid references auth.users not null,
	first_name text,
	last_name text,
	primary key (id)
);
  
create or replace function public.handle_new_user()
returns trigger as $$
begin
insert into public.profiles (id, email, phone, first_name, last_name)
values (new.id, new.email, new.phone, new.raw_user_meta_data ->> 'first_name', new.raw_user_meta_data ->> 'last_name');
return new;
end;
$$ language plpgsql security definer;


-- create trigger on_auth_user_created
-- after insert on auth.users
-- for each row execute procedure public.handle_new_user();
-- DROP TRIGGER IF EXISTS on_auth_user_created on auth.users;
```