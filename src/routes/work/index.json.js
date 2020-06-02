import fs from 'fs'
import path from 'path'
import grayMatter from 'gray-matter'

const route = 'src/routes/work'
const posts = fs.readdirSync(route)
	.filter(file => file.includes('.md'))
	.map(file => {
		const post = fs.readFileSync(path.resolve(route, file), 'utf-8')
		return {...grayMatter(post).data, slug: file.replace('.md', '')}
	})
	.sort((a, b) => (a.order > b.order) ? 1 : -1)

const contents = JSON.stringify(posts.map(post => {
	return ({...post})
	// return {
	// 	title: post.title,
	// 	slug: post.slug,
	// 	thumbnail: post.thumbnail,
	// 	order: post.order
	// }
}))

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	})

	res.end(contents)
}