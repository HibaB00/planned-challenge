import { db } from "../db.js"

export function index(req, res) {
	db.all('SELECT * FROM users', (err, rows) => {
		if (err) {
			res.status(500).json({ error: err.message })
			return
		}
		res.json(rows)
	})
}

export function show(req, res) {
	const { id } = req.params

	db.get('SELECT * FROM users WHERE id = ?', [id], (err, row) => {
		if (err) {
			res.status(500).json({ error: err.message })
			return
		}
		if (!row) {
			res.status(404).json({ error: 'User not found' })
			return
		}

		db.all('SELECT * FROM memories WHERE user_id = ?', [id], (err, rows) => {
			row.memories = rows || [];

			res.json(row)
		})
	})
}