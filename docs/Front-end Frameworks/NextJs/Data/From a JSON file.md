### Create a data folder and paste the JSON there

```
mkdir data
```


```
touch data/statements.json
```


- In the file paste the following JSON

```
[
  {
    "right": [
      "Genius. How did you guess that :O",
      "You rode your luck that time :P",
      "How did you get that :)"
    ],
    "wrong": [
      "Better luck in the next question :|",
      "You can do better :)",
      "I thought that was right too :/"
    ]
  }
]
```

### Importing JSON
```
import statements from "../data/statement.json";
```

- You can now use the variable `tests`inside your file. The format is the same as you created it. 