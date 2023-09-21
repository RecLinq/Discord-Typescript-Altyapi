import { event } from '../../utils'
import { mongoConnect, mongoEvents } from "../../database";

export default event('ready', ({ log }, client) => {
    log(`${client.user.tag} olarak giriş yaptı!`)
    mongoEvents()
    mongoConnect()
})