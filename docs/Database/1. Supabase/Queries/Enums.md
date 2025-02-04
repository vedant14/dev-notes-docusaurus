- For more [info](### Querying data with enums[#](https://supabase.com/docs/guides/database/postgres/enums#querying-data-with-enums))
### Creating Enums
```
create type mood as enum (
  'happy',
  'sad',
  'excited',
  'calm'
);
```


### Using in a Table
```
create table person (
  id serial primary key,
  name text,
  current_mood mood
);
```

### Updating Enums

```
insert into person
  (name, current_mood)
values
  ('Alice', 'happy');
```

### Querying data with enums

```
select * 
from person 
where current_mood = 'sad';
```


### Deleting 
```sql
drop type if exists role;
```