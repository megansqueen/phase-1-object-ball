function gameObject() {
const gameStats =
    {home: {
        teamName: `Brooklyn Nets`,
        colors: `Black, White`,
        players: {
            AlanAnderson: {
                number: `0`,
                shoe: `16`,
                points: `22`,
                rebounds: `12`,
                assists: `12`,
                steals: `3`,
                blocks: `1`,
                slamDunks: `1`
            },
            ReggieEvans: {
                number: `30`,
                shoe: `14`,
                points: `12`,
                rebounds: `12`,
                assists: `12`,
                steals: `12`,
                blocks: `12`,
                slamDunks: `7`
            },
            BrookLopez: {
                number: `11`,
                shoe: `17`,
                points: `17`,
                rebounds: `19`,
                assists: `10`,
                steals: `3`,
                blocks: `1`,
                slamDunks: `15`
            },
            MasonPlumlee: {
                number: `1`,
                shoe: `19`,
                points: `26`,
                rebounds: `12`,
                assists: `6`,
                steals: `3`,
                blocks: `8`,
                slamDunks: `5`
            },
            JasonTerry: {
                number: `31`,
                shoe: `15`,
                points: `19`,
                rebounds: `2`,
                assists: `2`,
                steals: `4`,
                blocks: `11`,
                slamDunks: `1`
            }
            }
        
        },
    away: {
        teamName: ``,
        colors: ``,
        players: {
            JeffAdrien: {
                number: `4`,
                shoe: `18`,
                points: `10`,
                rebounds: `1`,
                assists: `1`,
                steals: `2`,
                blocks: `7`,
                slamDunks: `2`
        },
            BismakBiyombo: {
                number: `0`,
                shoe: `16`,
                points: `12`,
                rebounds: `4`,
                assists: `7`,
                steals: `7`,
                blocks: `15`,
                slamDunks: `10`
        },
            BenGordon: {
                number: `8`,
                shoe: `15`,
                points: `33`,
                rebounds: `3`,
                assists: `2`,
                steals: `1`,
                blocks: `1`,
                slamDunks: `0`
        },
            BrendanHaywood: {
                number: `33`,
                shoe: `15`,
                points: `6`,
                rebounds: `12`,
                assists: `12`,
                steals: `22`,
                blocks: `5`,
                slamDunks: `12`
        }}}}
        return gameStats}


    // function numPointsScored(playersName) {
    //     for (let player in gameObject()) {
    //         let points = gameObject()[points];
    //         console.log(`key:`, key, `value:`, value);
    //     }
    // }

    // function numPointsScored(playersName) {
    //     let game = gameobject();
    //     for (let gameKey in game) {
    //         let teamObj = game[gameKey];
    //         for (let teamKey in teamObj) {
    //             let stats = teamObj.player;
    //             for (let key in stats) {
    //                 let points = teamObj.player.points;
    //                 for (let num in points)
    //                 return num
    //             }
    //         }
    //     }
    // }

    
        return gameStats;
    }

    function numPointsScored() {
        let team = gameObject();
        for (let object in team) {
          debugger;
          if (players = true) {
            let player = team[object];
            for (let points in player) {
              debugger;
              return points
            }
          }
          }
        }