import { connection } from "mongoose";

// export default async () => {
//     connection.on('connecting', () => {
//         console.log("[DATABASE STATUS]: Bağlanılıyor...")
//     })
// }

export default {
    name: "connecting",
    execute() {
        console.log("[DATABASE STATUS] Bağlanılıyor...")
    }
}