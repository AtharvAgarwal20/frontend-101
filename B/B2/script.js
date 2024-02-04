const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const userName = document.querySelector('#userName')
    const pfp = document.querySelector('#avatar')
    const bio = document.querySelector('#bio')
    const textBox = document.querySelector('input')
    const content = document.querySelector('#content')
    const notFound = document.querySelector('#error')
    content.style.display = 'none'
    notFound.style.display = 'none'
    let userInput = textBox.value.trim()

    fetch(`https://api.github.com/users/${userInput}`).then(response => {
        if (response.ok) {
            console.log("SUCCESS")
            // CALLING FETCH API AGAIN SINCE DOING RES.JSON() DIRECTLY RETURNS A PENDING PROMISE
            fetch(`https://api.github.com/users/${userInput}`).then(res => res.json()).then(user => {
                pfp.src = user['avatar_url']
                bio.textContent = `${user['bio']}`
                userName.textContent = user['login']
                content.style.display = 'block'
            })
        }
        else {
            console.log("FAIL")
            notFound.style.display = 'block'
        }
    })
})