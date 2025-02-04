[For more info](https://www.prisma.io/docs/orm/prisma-migrate/getting-started)
### Perform migration
- The name can be changed
```
npx prisma migrate dev --name add_name_email_to_user
```

### Schema prisma.schema
- the file name `schema.prisma`
- Re-check the schema file, this was created by chatGPT

```
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
	provider = "prisma-client-js"
}

datasource db {
	provider = "postgresql"
	url = env("DATABASE_URL")
}

model User {
	id BigInt @id @default(autoincrement())
	name String // New field for the user's name
	email String @unique // New field for the user's email, marked as unique
	sessions Session[]
	createdAt DateTime @default(now())
	updatedAt DateTime @updatedAt
} 

model Session {
	id BigInt @id @default(autoincrement())
	userId BigInt
	user User @relation(fields: [userId], references: [id])
	sessionExercises SessionExercise[]
	createdAt DateTime @default(now())
	updatedAt DateTime @updatedAt
}

model Exercise {
	id BigInt @id @default(autoincrement())
	name String
	sessionExercises SessionExercise[]
	exerciseFocusAreas ExerciseFocusArea[]
	createdAt DateTime @default(now())
	updatedAt DateTime @updatedAt
}

model SessionExercise {
	id BigInt @id @default(autoincrement())
	sessionId BigInt
	exerciseId BigInt
	session Session @relation(fields: [sessionId], references: [id])
	exercise Exercise @relation(fields: [exerciseId], references: [id])
	sessionExerciseSets SessionExerciseSet[]
	createdAt DateTime @default(now())
	updatedAt DateTime @updatedAt
}

model FocusArea {
	id BigInt @id @default(autoincrement())
	name String
	muscleGroup String
	exerciseFocusAreas ExerciseFocusArea[]
	createdAt DateTime @default(now())
	updatedAt DateTime @updatedAt
}

model ExerciseFocusArea {
	id BigInt @id @default(autoincrement())
	exerciseId BigInt
	focusAreaId BigInt
	exercise Exercise @relation(fields: [exerciseId], references: [id])
	focusArea FocusArea @relation(fields: [focusAreaId], references: [id])
	createdAt DateTime @default(now())
	updatedAt DateTime @updatedAt
}

model SessionExerciseSet {
	id BigInt @id @default(autoincrement())
	sessionExerciseId BigInt
	roundCount Int
	weight BigInt
	weightUnitId Int
	sessionExercise SessionExercise @relation(fields: [sessionExerciseId], references: [id])
	weightUnit WeightUnit @relation(fields: [weightUnitId], references: [id])
	createdAt DateTime @default(now())
	updatedAt DateTime @updatedAt
} 

model WeightUnit {
	id Int @id @default(autoincrement())
	name String
	sessionExerciseSets SessionExerciseSet[]
	createdAt DateTime @default(now())
	updatedAt DateTime @updatedAt
}
```


### Seed file
- in the `seed.js` file
```
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
console.log(`Start seeding ...`);

  

// Seed Users

const users = [];
const list = ["vedant1", "anjali1", "trainer1"];

for (const item of list) {
	const user = await prisma.user.create({
		data: { name: item, email: `${item}@gymapp.com` },
	});
	users.push(user);
}

// Seed Sessions
const sessions = [];
for (let i = 1; i <= 5; i++) {
	const session = await prisma.session.create({
		data: { userId: users[i % users.length].id },
	});
	sessions.push(session);
}

// Seed Exercises

const exercises = [];
for (let i = 1; i <= 5; i++) {
const exercise = await prisma.exercise.create({
		data: { name: `Exercise ${i}` },
	});
	exercises.push(exercise);
}

  

// Seed SessionExercises

for (const session of sessions) {
	for (const exercise of exercises) {
	await prisma.sessionExercise.create({
		data: {
			sessionId: session.id,
			exerciseId: exercise.id,
			},
		});
	}
}

  

// Seed FocusAreas
const focusAreaData = [
	{ name: "Chest", muscleGroup: "Upper Body" },
	{ name: "Back", muscleGroup: "Upper Body" },
	{ name: "Legs", muscleGroup: "Lower Body" },
	{ name: "Arms", muscleGroup: "Upper Body" },
	{ name: "Shoulders", muscleGroup: "Upper Body" },
];

  

for (const { name, muscleGroup } of focusAreaData) {
	await prisma.focusArea.create({
		data: { name, muscleGroup },
	});
}

// Seed ExerciseFocusAreas
for (const exercise of exercises) {
	for (let i = 1; i <= 5; i++) {
		await prisma.exerciseFocusArea.create({
			data: { exerciseId: exercise.id, focusAreaId: i },
		});
	}
}

  

// Seed WeightUnits
for (const name of ["kg", "lbs"]) {
	await prisma.weightUnit.create({
		data: { name },
	});
}

  

// Seed SessionExerciseSets

const sessionExercises = await prisma.sessionExercise.findMany();
for (const sessionExercise of sessionExercises) {
	await prisma.sessionExerciseSet.create({
		data: {
			sessionExerciseId: sessionExercise.id,
			roundCount: Math.floor(Math.random() * 5) + 1, // Random rounds between 1 and 5
			weight: Math.floor(Math.random() * 100), // Random weight
			weightUnitId: Math.floor(Math.random() * 2) + 1, // Randomly select between 1 and 2
		},
	});
}


console.log(`Seeding finished.`);
}

  

main()
.then(async () => {
	await prisma.$disconnect();
})
.catch(async (e) => {
	console.error(e);
	await prisma.$disconnect();
	process.exit(1);
});
```
- In the `package.json`
```
{
	"prisma": {
		"seed": "node prisma/seed.js"
	},
}
```

- Run the seeds file
```
npx prisma db seed
```


- Run studio
```
npx prisma studio
```