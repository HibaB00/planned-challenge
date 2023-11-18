import sqlite3 from 'sqlite3'

const db = new sqlite3.Database('memories.db')

db.serialize(() => {
	setup(db)
})

export { db };

function setup(db) {
	reset(db);
	initialize(db);
	seed(db);

	return db;
}

function reset(db) {
	db.run(`DROP TABLE IF EXISTS users`)
	db.run(`DROP TABLE IF EXISTS memories`)
}

function initialize(db) {
	db.run(`
		CREATE TABLE IF NOT EXISTS users (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			name TEXT,
			image_url TEXT,
			description TEXT
		)
	`)

	db.run(`
		CREATE TABLE IF NOT EXISTS memories (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			user_id INTEGER,
			name TEXT,
			description TEXT,
			image_url TEXT,
			timestamp DATE
		)
	`)
}

function seed(db) {
	db.run(`
		INSERT INTO users (name, description, image_url) VALUES
			('Alice Johnson', 'Alice is a passionate artist who enjoys painting landscapes and experimenting with different art forms. In her free time, she loves exploring nature and finding inspiration for her next masterpiece.', 'https://image.kpopmap.com/2019/02/ALICE-SoHee.jpg'),
			('Bob Smith', 'Bob is a software engineer with a knack for solving complex problems. He is dedicated to writing clean and efficient code and is always eager to learn about new technologies. Outside of work, he enjoys playing guitar and participating in local coding meetups.', 'https://yt3.googleusercontent.com/ZJGwKd4H-lsmPo6cZ2WJ7aaU6uRJYOAmj-MDIDy_Se0sUu3iM41hG3KXgVz690DeEPRqxaKx=s900-c-k-c0x00ffffff-no-rj'),
			('Claire Davis', 'Claire is a fitness enthusiast and certified yoga instructor. She is committed to helping others achieve their health and wellness goals. Claire is also an avid reader and enjoys spending quiet evenings with a good book.', 'https://www.earwolf.com/wp-content/uploads/2022/03/Screen-Shot-2022-03-05-at-11.47.04-AM.png'),
			('David Miller', 'David is an adventurous traveler who has explored various countries and experienced diverse cultures. He is a talented photographer, capturing moments that tell compelling stories. David is also an advocate for sustainable travel and environmental conservation.', 'https://cdn.accademia.org/wp-content/uploads/2014/01/david-face-760x985.jpg'),
			('Eva Robinson', 'Eva is a dedicated educator with a passion for inspiring young minds. She believes in fostering creativity and critical thinking in her students. Outside of the classroom, Eva enjoys gardening and volunteering in her local community.', ''),
			('Frank Turner', 'Frank is a skilled chef known for his culinary expertise in international cuisine. He enjoys creating innovative dishes that delight the taste buds of his patrons. In his spare time, Frank loves experimenting with new recipes and ingredients.', ''),
			('Grace Williams', 'Grace is a successful entrepreneur who founded a sustainable fashion brand. She is committed to promoting ethical practices in the fashion industry and believes in the power of conscious consumerism. Grace also enjoys hiking and practicing mindfulness.', ''),
			('Henry Martinez', 'Henry is a talented musician who plays multiple instruments. His passion for music extends to composing original pieces and collaborating with other artists. Henry also values community engagement and frequently organizes music events for local charities.', ''),
			('Ivy Turner', 'Ivy is a skilled graphic designer who brings creativity and innovation to every project. She enjoys exploring the intersection of art and technology. Outside of the design studio, Ivy loves attending art exhibitions and experimenting with various artistic mediums.', ''),
			('Jack Anderson', 'Jack is a dedicated environmentalist working towards sustainable solutions for a greener planet. He actively engages in community projects and advocates for eco-friendly practices. Jack also enjoys outdoor activities, including hiking and camping.', '');
	`)

	db.run(`
		INSERT INTO memories (user_id, name, description, timestamp) VALUES
			(1, 'Memorable Trip to Paris', 'Spent a magical week exploring the beautiful streets of Paris with breathtaking views of the Eiffel Tower.', CURRENT_TIMESTAMP),
			(1, 'Art Exhibition Success', 'Showcased my latest art collection at a prestigious gallery, receiving positive reviews and connecting with fellow artists.', CURRENT_TIMESTAMP),
			(1, 'Sunset Yoga by the Beach', 'Hosted a serene yoga session by the beach during sunset, creating a peaceful and rejuvenating experience for participants.', CURRENT_TIMESTAMP),
			(1, 'Hiking Adventure', 'Conquered a challenging hiking trail, reaching the summit to witness a panoramic view of the surrounding mountains.', CURRENT_TIMESTAMP),
			(1, 'Cozy Reading Nook', 'Created a cozy reading nook at home, spending quiet evenings immersed in captivating novels.', CURRENT_TIMESTAMP);
	`)
}