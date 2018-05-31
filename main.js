const divMain = document.getElementById('main')

const render = (html) => divMain.innerHtml = html

const content = `
<b>Bonjour sympathiques visiteurs</b>
`
	
render(content)