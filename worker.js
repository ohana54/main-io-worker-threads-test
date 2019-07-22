(function() {
    setTimeout(async () => {
        console.log('starting importScripts')
        // console.log('starting fetch')
        // const response = await fetch('./external-script.js')
        // const text = await response.text()
        // console.log('got text: ' + text.substring(0, 20))
        importScripts('./external-script.js')
        console.log('finished')
    }, 2000)
})()