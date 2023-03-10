
import "../index.css"
// // GraphQL

//  - Field
// {
//     waifu
// }

// -Argument
// {
//     waifu(id:2)
//     {
//         name
//         height(unit : FOOT)
//     }
// }

// -Alias
// {
//     Nino: waifu(id:2){
//         name,
//         height
//     }
//     Miku: waifu(id:3){
//         name
//         height
//     }
// }

// -Fragment
// {
//     Nino: waifu(id:2){
//         ...waifuInfo
//     }
//     Miku: waifu(id:3){
//         ...waifuInfo
//     }
// }
// fragment waifuInfo on Character{
//     name
//     height
//     appear
// }

// -Operation name
// {
//    query findWaifu{
//         waifu{
//             name
//             height
//         }
//     }
// }

// -Variable
// {
//     query findWaifu($episode:Episode = 3)
//         waifu(episode:$episode)
//             {
//             name
//             height
//         }
// }