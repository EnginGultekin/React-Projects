import io from 'socket.io-client'

let socket

export const init = () => {
    console.log("Sunucuya Bağlanıyor ...")
    socket = io('http://localhost:3001', {
        transports: ["websocket"],
    })

    socket.on('connect', () => console.log("Sunucuya Bağlantı Sağlandı."))
}

// Eğer client'taysak  backend'e , backend'te isek Client' veri gönderimini sağlıyor
// Hangi kanal üzerinden gönderdiğimizede bakmamız lazım backend app.js dosyasından (newColor)
export const send = (color) => {
    socket.emit('newColor', color)
}

// Gönderilen rengin tutulması için yazıldı
export const subscribe = (cb) => {
    socket.on('receive', (color) => {
        console.log(color)
        cb(color)
    })
}