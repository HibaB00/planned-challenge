import { db } from "../db.js"

export function index(req, res) {
	const { userId } = req.body

	db.all('SELECT * FROM memories WHERE user_id = ?', [userId], (err, rows) => {
		if (err) {
			res.status(500).json({ error: err.message })
			return
		}
		res.json(rows)
	})
}

export function show(req, res) {
	const { id } = req.params
	db.get('SELECT * FROM memories WHERE id = ?', [id], (err, row) => {
		if (err) {
			res.status(500).json({ error: err.message })
			return
		}
		if (!row) {
			res.status(404).json({ error: 'Memory not found' })
			return
		}
		res.json(row)
	})
}

export function create(req, res) {
	const { name, description, timestamp, user_id, image_url } = req.body

	if (!name || !description || !timestamp || !image_url) {
		res.status(400).json({
			error: 'Please provide all fields: name, description, timestamp',
		})
		return
	}

	const stmt = db.prepare(
		'INSERT INTO memories (name, description, timestamp, user_id, image_url) VALUES (?, ?, ?, ?, ?)'
	)
	stmt.run(name, description, timestamp, user_id, image_url, (err) => {
		if (err) {
			res.status(500).json({ error: err.message })
			return
		}
		res.status(201).json({ message: 'Memory created successfully' })
	})
}

export function update(req, res) {
	const { id } = req.params
	const { name, description, timestamp } = req.body

	if (!name || !description || !timestamp) {
		res.status(400).json({
			error: 'Please provide all fields: name, description, timestamp',
		})
		return
	}

	const stmt = db.prepare(
		'UPDATE memories SET name = ?, description = ?, timestamp = ? WHERE id = ?'
	)
	stmt.run(name, description, timestamp, id, (err) => {
		if (err) {
			res.status(500).json({ error: err.message })
			return
		}
		res.json({ message: 'Memory updated successfully' })
	})
}

export function remove(req, res) {
	const { id } = req.params
	db.run('DELETE FROM memories WHERE id = ?', [id], (err) => {
		if (err) {
			res.status(500).json({ error: err.message })
			return
		}
		res.json({ message: 'Memory deleted successfully' })
	})
}