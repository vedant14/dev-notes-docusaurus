
### Anons can only read all values of a table

```
alter table public.profiles enable row level security;
create policy "memory_gb are viewable by everyone"
on memory for select
to anon
using ( true );
```
