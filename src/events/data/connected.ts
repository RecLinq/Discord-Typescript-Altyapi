import { connection } from "mongoose";

// export default async () => {
//     connection.on('connected', () => {
//         console.log("[DATABASE STATUS]: Bağlanıldı.")
//     })
// }

export default {
    name: "connected",
    execute() {
        console.log("[DATABASE STATUS] Bağlanıldı.")
    }
}