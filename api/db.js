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
			('David Miller', 'David is an adventurous traveler who has explored various countries and experienced diverse cultures. He is a talented photographer, capturing moments that tell compelling stories. David is also an advocate for sustainable travel and environmental conservation.', 'https://uwaterloo.ca/math-business-accounting-programs/sites/default/files/styles/large/public/uploads/images/uwdavidlandriaultbykwheadshots-2.jpg?itok=ghF4_wtO'),
			('Eva Robinson', 'Eva is a dedicated educator with a passion for inspiring young minds. She believes in fostering creativity and critical thinking in her students. Outside of the classroom, Eva enjoys gardening and volunteering in her local community.', 'https://m.media-amazon.com/images/S/amzn-author-media-prod/ir4vgm42d7f4nmcloa3ubooaqe._SY300_.jpg'),
			('Frank Turner', 'Frank is a skilled chef known for his culinary expertise in international cuisine. He enjoys creating innovative dishes that delight the taste buds of his patrons. In his spare time, Frank loves experimenting with new recipes and ingredients.', 'https://pbs.twimg.com/profile_images/1623019309613056002/ZsyHYUuK_400x400.jpg'),
			('Grace Williams', 'Grace is a successful entrepreneur who founded a sustainable fashion brand. She is committed to promoting ethical practices in the fashion industry and believes in the power of conscious consumerism. Grace also enjoys hiking and practicing mindfulness.', 'https://upload.wikimedia.org/wikipedia/en/b/bb/GraceWilliamscomposer.jpg'),
			('Henry Martinez', 'Henry is a talented musician who plays multiple instruments. His passion for music extends to composing original pieces and collaborating with other artists. Henry also values community engagement and frequently organizes music events for local charities.', 'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/650493/headshot/67/current'),
			('Ivy Turner', 'Ivy is a skilled graphic designer who brings creativity and innovation to every project. She enjoys exploring the intersection of art and technology. Outside of the design studio, Ivy loves attending art exhibitions and experimenting with various artistic mediums.', 'https://a.espncdn.com/combiner/i?img=/i/headshots/womens-college-basketball/players/full/4595443.png&w=350&h=254'),
			('Jack Anderson', 'Jack is a dedicated environmentalist working towards sustainable solutions for a greener planet. He actively engages in community projects and advocates for eco-friendly practices. Jack also enjoys outdoor activities, including hiking and camping.', 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/MSNBC/Components/Photo/2010/September/100911/100913-jackAnderson-vmed-224p.jpg');
	`)

	db.run(`
		INSERT INTO memories (user_id, name, description, timestamp, image_url) VALUES
			(1, 'Memorable Trip to Paris', 'Spent a magical week exploring the beautiful streets of Paris with breathtaking views of the Eiffel Tower.', '2015-11-29', 'https://www.campingfrance.com/asset/cms/600x337/158005/config/110123'),
			(1, 'Art Exhibition Success', 'Showcased my latest art collection at a prestigious gallery, receiving positive reviews and connecting with fellow artists.', '2003-08-02', 'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_200,q_60,w_400/v1/clients/toronto/indigenous_art_toronto_gallery_f0488b93-5dd6-47cf-9dac-013e7f3a95c8.jpg'),
			(1, 'Sunset Yoga by the Beach', 'Hosted a serene yoga session by the beach during sunset, creating a peaceful and rejuvenating experience for participants.', '1993-04-11', 'https://www.waterfront-properties.com/images/new/yoga_in_delray_beach_by_waterfront_properties_600.jpeg'),
			(1, 'Hiking Adventure', 'Conquered a challenging hiking trail, reaching the summit to witness a panoramic view of the surrounding mountains.', '1985-10-15', 'https://media.gadventures.com/media-server/cache/76/dc/76dcc71a350b8ec1450f2ed8ca23edfe.jpg'),
			(1, 'Cozy Reading Nook', 'Created a cozy reading nook at home, spending quiet evenings immersed in captivating novels.', '1978-06-20', 'https://assets.hgtv.ca/wp-content/uploads/2022/03/reading-nook-hanging-chair-adrien-olichon-unsplash.jpg');
	`)

	db.run(`
		INSERT INTO memories (user_id, name, description, timestamp, image_url) VALUES
			(2, 'Weekend Coding Marathon', 'Spent a productive weekend coding a new feature for a personal project and achieved a major milestone.', '2015-11-29', 'https://dummyimage.com/400x200'),
			(2, 'Guitar Jam Session', 'Hosted an impromptu guitar jam session with friends, creating a lively and enjoyable musical experience.', '2003-08-02', 'https://dummyimage.com/400x200'),
			(2, 'Tech Meetup Highlights', 'Attended a local tech meetup, where industry experts shared insights on the latest trends and innovations.', '1993-04-11', 'https://dummyimage.com/400x200'),
			(2, 'Scenic Mountain Bike Ride', 'Explored scenic trails on a mountain bike, enjoying breathtaking views and the thrill of downhill rides.', '1985-10-15', 'https://dummyimage.com/400x200'),
			(2, 'Family Movie Night', 'Organized a cozy family movie night with popcorn and favorite films, creating cherished memories together.', '1978-06-20', 'https://dummyimage.com/400x200');
	`)

	db.run(`
		INSERT INTO memories (user_id, name, description, timestamp, image_url) VALUES
			(3, 'Fitness Challenge Success', 'Completed a month-long fitness challenge, achieving personal goals and fostering a healthy lifestyle.', '2015-11-29', 'https://dummyimage.com/400x200'),
			(3, 'Mindfulness Meditation Retreat', 'Attended a mindfulness meditation retreat, finding inner peace and tranquility in the midst of nature.', '2003-08-02', 'https://dummyimage.com/400x200'),
			(3, 'Healthy Cooking Workshop', 'Learned new recipes and cooking techniques at a healthy cooking workshop, promoting nutritious meals.', '1993-04-11', 'https://dummyimage.com/400x200'),
			(3, 'Artistic Yoga Poses', 'Mastered advanced yoga poses, combining strength and flexibility in a dedicated practice.', '1985-10-15', 'https://dummyimage.com/400x200'),
			(3, 'Volunteering at the Community Garden', 'Contributed time to a community garden, fostering a sense of community and sustainable living.', '1978-06-20', 'https://dummyimage.com/400x200');
	`)

	db.run(`
		INSERT INTO memories (user_id, name, description, timestamp, image_url) VALUES
			(4, 'Photography Expedition to Iceland', 'Embarked on a photography expedition to Iceland, capturing stunning landscapes and natural wonders.', '2015-11-29', 'https://dummyimage.com/400x200'),
			(4, 'Wildlife Conservation Project', 'Participated in a wildlife conservation project, advocating for the protection of endangered species.', '2003-08-02', 'https://dummyimage.com/400x200'),
			(4, 'Culinary Adventures in Tokyo', 'Explored the diverse culinary scene in Tokyo, savoring traditional Japanese dishes and street food.', '1993-04-11', 'https://dummyimage.com/400x200'),
			(4, 'Capturing Northern Lights', 'Witnessed the mesmerizing display of the Northern Lights and captured the celestial phenomenon on camera.', '1985-10-15', 'https://dummyimage.com/400x200'),
			(4, 'Documentary Photography Exhibition', 'Showcased a documentary photography exhibition, shedding light on environmental issues and conservation efforts.', '1978-06-20', 'https://dummyimage.com/400x200');
	`)

	db.run(`
		INSERT INTO memories (user_id, name, description, timestamp, image_url) VALUES
			(5, 'Inspiring Students Through Art', 'Organized an art workshop for students, encouraging creativity and self-expression through artistic endeavors.', '2015-11-29', 'https://dummyimage.com/400x200'),
			(5, 'Educational Nature Hike', 'Led students on an educational nature hike, combining learning about the environment with outdoor exploration.', '2003-08-02', 'https://dummyimage.com/400x200'),
			(5, 'Community Book Club', 'Facilitated a community book club, fostering a love for literature and intellectual discussions.', '1993-04-11', 'https://dummyimage.com/400x200'),
			(5, 'Creative Classroom Projects', 'Engaged students in creative classroom projects, promoting teamwork and critical thinking skills.', '1985-10-15', 'https://dummyimage.com/400x200'),
			(5, 'Volunteer Teaching Abroad', 'Taught art to students in a volunteer program abroad, creating cross-cultural connections through artistic expression.', '1978-06-20', 'https://dummyimage.com/400x200');
	`)

	db.run(`
		INSERT INTO memories (user_id, name, description, timestamp, image_url) VALUES
			(6, 'Gastronomic Delights in Italy', 'Embarked on a culinary journey through Italy, savoring regional specialties and culinary traditions.', '2015-11-29', 'https://dummyimage.com/400x200'),
			(6, 'Innovative Menu Launch', 'Launched a new and innovative menu at the restaurant, receiving positive feedback and attracting food enthusiasts.', '2003-08-02', 'https://dummyimage.com/400x200'),
			(6, 'Culinary Masterclass', 'Conducted a culinary masterclass, sharing expertise and techniques with aspiring chefs and culinary enthusiasts.', '1993-04-11', 'https://dummyimage.com/400x200'),
			(6, 'Sustainable Cooking Practices', 'Advocated for sustainable cooking practices, emphasizing the use of locally sourced and eco-friendly ingredients.', '1985-10-15', 'https://dummyimage.com/400x200'),
			(6, 'Food and Art Fusion Event', 'Collaborated with local artists to host a food and art fusion event, celebrating the intersection of culinary and visual arts.', '1978-06-20', 'https://dummyimage.com/400x200');
	`)

	db.run(`
		INSERT INTO memories (user_id, name, description, timestamp, image_url) VALUES
			(7, 'Sustainable Fashion Showcase', 'Organized a sustainable fashion showcase, featuring eco-friendly and ethically produced clothing brands.', '2015-11-29', 'https://dummyimage.com/400x200'),
			(7, 'Empowering Women in Fashion', 'Advocated for empowerment in the fashion industry, highlighting the achievements of female designers and entrepreneurs.', '2003-08-02', 'https://dummyimage.com/400x200'),
			(7, 'Green Living Expo', 'Participated in a green living expo, promoting sustainable lifestyle choices and environmentally conscious fashion.', '1993-04-11', 'https://dummyimage.com/400x200'),
			(7, 'Community Clothing Swap', 'Facilitated a community clothing swap, encouraging the reuse and recycling of clothing items for a more sustainable wardrobe.', '1985-10-15', 'https://dummyimage.com/400x200'),
			(7, 'Fashion and Nature Photo Shoot', 'Conducted a photo shoot blending fashion and nature, creating visually striking images that celebrate the beauty of both.', '1978-06-20', 'https://dummyimage.com/400x200');
	`)

	db.run(`
		INSERT INTO memories (user_id, name, description, timestamp, image_url) VALUES
			(8, 'Music Festival Performance', 'Performed at a music festival, captivating the audience with a dynamic and energetic musical set.', '2015-11-29', 'https://dummyimage.com/400x200'),
			(8, 'Collaborative Music Video', 'Collaborated with other musicians to produce a visually stunning music video, showcasing creativity and artistic expression.', '2003-08-02', 'https://dummyimage.com/400x200'),
			(8, 'Music Production Workshop', 'Hosted a music production workshop, sharing insights and techniques on music composition and production.', '1993-04-11', 'https://dummyimage.com/400x200'),
			(8, 'Local Community Concert', 'Organized a concert for the local community, featuring diverse musical acts and fostering a sense of unity through music.', '1985-10-15', 'https://dummyimage.com/400x200'),
			(8, 'Musical Exploration in Jazz', 'Explored the world of jazz music, experimenting with improvisation and intricate musical arrangements.', '1978-06-20', 'https://dummyimage.com/400x200');
	`)

	db.run(`
		INSERT INTO memories (user_id, name, description, timestamp, image_url) VALUES
			(9, 'Graphic Design Exhibition', 'Showcased a collection of graphic design works at an exhibition, exploring innovative and visually striking design concepts.', '2015-11-29', 'https://dummyimage.com/400x200'),
			(9, 'Interactive Design Project', 'Collaborated on an interactive design project, creating engaging user experiences through thoughtful design and functionality.', '2003-08-02', 'https://dummyimage.com/400x200'),
			(9, 'Design Thinking Workshop', 'Led a design thinking workshop, encouraging participants to approach problems with a creative and user-centric mindset.', '1993-04-11', 'https://dummyimage.com/400x200'),
			(9, 'Typography Exploration', 'Explored the art of typography, experimenting with letterforms and creating visually impactful text designs.', '1985-10-15', 'https://dummyimage.com/400x200'),
			(9, 'Digital Art Installation', 'Created a digital art installation, blending technology and art to deliver a unique and immersive visual experience.', '1978-06-20', 'https://dummyimage.com/400x200');
	`)

	db.run(`
		INSERT INTO memories (user_id, name, description, timestamp, image_url) VALUES
			(10, 'Tree Planting Event', 'Organized a successful tree planting event in the community, contributing to environmental conservation efforts.', '2015-11-29', 'https://dummyimage.com/400x200'),
			(10, 'Musical Collaboration', 'Collaborated with fellow musicians on a new and exciting project, combining diverse musical influences.', '2003-08-02', 'https://dummyimage.com/400x200'),
			(10, 'Culinary Experimentation', 'Explored new culinary horizons by experimenting with exotic ingredients and creating unique flavor combinations.', '1993-04-11', 'https://dummyimage.com/400x200'),
			(10, 'Tech Innovation Expo', 'Attended a technology innovation expo, gaining insights into the latest advancements and networking with industry leaders.', '1985-10-15', 'https://dummyimage.com/400x200'),
			(10, 'Stargazing Night', 'Hosted a stargazing night, sharing the wonders of the cosmos with friends and family.', '1978-06-20', 'https://dummyimage.com/400x200');
	`)
}