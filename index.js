function loop(t) {
    console.log(`starting loop of ${t} seconds`)
    const startTime = Date.now()
    while (Date.now() - startTime <= 1000 * t) {
        
    }
    console.log('ending loop')
}

(function() {
    console.log('starting worker')
    new Worker('worker.js')
    setTimeout(() => loop(10), 1000)
    // console.log('set timeout')
    // setTimeout(() => loop(10))
})()