### Getting TimeZones

```
select name, abbrev, utc_offset, is_dst
from pg_timezone_names()
order by name;
```



```
export async function getBookingFromSearch(query, callback) {
	let pattern = /@/g;
	let filterByEmail = null;
	let filterByPhone = null;
	let result = pattern.test(query);
	
	if (result) {
		filterByEmail = query;
	} else {
		filterByPhone = query;
	}
	
	let query = supabase
		.from("bookings")
		.select(`*, brands(name)`)
		.order("inserted_at", { ascending: false });
	
	if (filterByEmail) {
		query = query.eq("booking_email", filterByEmail);
	}
	if (filterByPhone) {
		query = query.eq("booking_phone", filterByPhone);
	}
	
	let { data: bookings, error } = await query;
	if (error) {
		return callback(error);
	} else {
		return callback(bookings);
	}
}
```