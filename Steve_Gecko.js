const Discord = require('discord.js');
const client = new Discord.Client();
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./STG.db', sqlite3.OPEN_READWRITE);
db.run('CREATE TABLE IF NOT EXISTS users(userid TEXT NOT NULL, username TEXT NOT NULL, dmchannelid TEXT NOT NULL, cmdchannelid TEXT NOT NULL, cmdpassenter INTEGER NOT NULL, cmdnumber INTEGER NOT NULL, commandnumber INTEGER NOT NULL, commandtext TEXT NOT NULL, chatid INTEGER NOT NULL, chatnum INTEGER NOT NULL, sgscore INTEGER NOT NULL, rpsbotscore INTEGER NOT NULL, rpsuserscore INTEGER NOT NULL, rpsgame INTEGER NOT NULL, doggocreate INTEGER NOT NULL, doggocreatedtime INTEGER NOT NULL, doggoname TEXT NOT NULL, currentdoggo TEXT NOT NULL, money INTEGER NOT NULL, foodnum INTEGER NOT NULL, energynum INTEGER NOT NULL, poopcooldown INTEGER NOT NULL, jobcooldown INTEGER NOT NULL, breedcooldown INTEGER NOT NULL, statsupdatetime INTEGER NOT NULL, sleeping INTEGER NOT NULL, sleeptime INTEGER NOT NULL, doggosex TEXT NOT NULL, foodservings INTEGER NOT NULL, applytime INTEGER NOT NULL, appliedjob TEXT NOT NULL, currentjob TEXT NOT NULL, working INTEGER NOT NULL, workstarttime INTEGER NOT NULL, workendtime INTEGER NOT NULL, status TEXT NOT NULL, quit INTEGER NOT NULL, playnum INTEGER NOT NULL, sleepstatgain INTEGER NOT NULL, sleepstatlose INTEGER NOT NULL, foodstatlose INTEGER NOT NULL, playstatlose INTEGER NOT NULL, playstatgain INTEGER NOT NULL, bed TEXT NOT NULL, doggotime INTEGER NOT NULL, playtime INTEGER NOT NULL, totalservings INTEGER NOT NULL, totalworkhours INTEGER NOT NULL, totalplaytime INTEGER NOT NULL, totalmoney INTEGER NOT NULL, cgexp INTEGER NOT NULL, mdexp INTEGER NOT NULL, brdexp INTEGER NOT NULL, ddexp INTEGER NOT NULL, pdexp INTEGER NOT NULL, sdexp INTEGER NOT NULL, salary INTEGER NOT NULL, naptime INTEGER NOT NULL, lastinttime INTEGER NOT NULL, gifttime INTEGER NOT NULL, giftboxes INTEGER NOT NULL, killdog INTEGER NOT NULL, house TEXT NOT NULL, notif TEXT NOT NULL, privacy TEXT NOT NULL, playtimer INTEGER NOT NULL, worktimer INTEGER NOT NULL, sleeptimer INTEGER NOT NULL, applytimer INTEGER NOT NULL)');
db.run('CREATE TABLE IF NOT EXISTS servers(guildid TEXT NOT NULL, password INTEGER NOT NULL, passwordnum INTEGER NOT NULL, lock INTEGER NOT NULL, hsname1 TEXT NOT NULL, highscore1 INTEGER NOT NULL, hsname2 TEXT NOT NULL, highscore2 INTEGER NOT NULL, hsname3 TEXT NOT NULL, highscore3 INTEGER NOT NULL, sgscore INTEGER NOT NULL, glevel INTEGER NOT NULL, glevelmin INTEGER NOT NULL, ggnum INTEGER NOT NULL, mute INTEGER NOT NULL, cooldowntime INTEGER NOT NULL, interval INTEGER NOT NULL, intletter TEXT NOT NULL, lockenter INTEGER NOT NULL, locknum INTEGER NOT NULL, cmdnumber INTEGER NOT NULL)');
db.run('CREATE TABLE IF NOT EXISTS serverdata(testdata INTEGER NOT NULL, cgname TEXT NOT NULL, cgnumber INTEGER NOT NULL, cgsalary INTEGER NOT NULL, cgtime INTEGER NOT NULL, cglength TEXT NOT NULL, mdname TEXT NOT NULL, mdnumber INTEGER NOT NULL, mdsalary INTEGER NOT NULL, mdtime INTEGER NOT NULL, mdlength TEXT NOT NULL, brdname TEXT NOT NULL, brdnumber INTEGER NOT NULL, brdsalary INTEGER NOT NULL, brdtime INTEGER NOT NULL, brdlength TEXT NOT NULL, ddname TEXT NOT NULL, ddnumber INTEGER NOT NULL, ddsalary INTEGER NOT NULL, ddtime INTEGER NOT NULL, ddlength TEXT NOT NULL, pdname TEXT NOT NULL, pdnumber INTEGER NOT NULL, pdsalary INTEGER NOT NULL, pdtime INTEGER NOT NULL, pdlength TEXT NOT NULL, sdname TEXT NOT NULL, sdnumber INTEGER NOT NULL, sdsalary INTEGER NOT NULL, sdtime INTEGER NOT NULL, sdlength TEXT NOT NULL, bedsheetname TEXT NOT NULL, bedsheetcost INTEGER NOT NULL, bedsheetincrease INTEGER NOT NULL, matname TEXT NOT NULL, matcost INTEGER NOT NULL, matincrease INTEGER NOT NULL, twinname TEXT NOT NULL, twincost INTEGER NOT NULL, twinincrease INTEGER NOT NULL, fullname TEXT NOT NULL, fullcost INTEGER NOT NULL, fullincrease INTEGER NOT NULL, queenname TEXT NOT NULL, queencost INTEGER NOT NULL, queenincrease INTEGER NOT NULL, kingname TEXT NOT NULL, kingcost INTEGER NOT NULL, kingincrease INTEGER NOT NULL, box INTEGER NOT NULL, doghouse INTEGER NOT NULL, shed INTEGER NOT NULL, shack INTEGER NOT NULL, onestory INTEGER NOT NULL, twostory INTEGER NOT NULL, threestory INTEGER NOT NULL, mansion INTEGER NOT NULL, castle INTEGER NOT NULL, datatime INTEGER NOT NULL, saleprice INTEGER NOT NULL, saletime INTEGER NOT NULL, salemsgid TEXT NOT NULL, ebprice INTEGER NOT NULL, ebtime INTEGER NOT NULL, ebmsgid TEXT NOT NULL, person TEXT NOT NULL, botstatus TEXT NOT NULL)');
db.close();
var botstatus = "on"
var members = 0
var servers = 0
var chatid = 0
var chatnum = 0
var cmdchannelid = 0
var version = "Steve The Gecko® v4.4.0"
var guildid = "0"
var today = new Date;
var future = new Date;
var todayms = today.getTime();
var jsondata = 0
var newjsondata = 0
var mention = 0
var mentionusername = 0
var messagementions = 0
var username = 0
var username2 = 0
var userid = 0
var userid2 = 0
var datatime = 0
var temptoday = new Date();
var temptodayms = temptoday.getTime();
var stopcode = 0
var person = "none"
var threeplus = ""
var hours = 0
var minutes = 0
var dmmessages = ""
var dmchannelid = 0
var msgsize = 0
var MetalRain = "448516707879747635"
var permissionmsg = "```You don't have permission to do that```"
var testdata = "1234"

var lockenter = 0
var locknum = 0
var cmdpassenter = 0
var passwordnum = 0
var password = 0
var lock = 1
var rpsnum = 0
var rpstimes = 1
var rpsanswer = "rock"
var rpsuseranswer
var rpsbotscore = 0
var rpsuserscore = 0
var rpstempuscore = 0
var rpstempbscore = 0
var rpsgame = 0

var interval = 1
var intletter = "s"
var cooldown = 0
var letter = "second(s)"

var mute = 1
var glevel = 1
var glevelmin = 0
var ggnum = (Math.ceil(Math.random() * 10))
var dice = 0

var commandnumber = 0
var cmdnumber = 0
var commandtext = "none"
var number = 0

var sgnum = 0
var choose = 0
var options = 0
var outcome = 0
var ammo = 6
var optionsname = ""
var sgscore = 0
var sghardness = 4
var resume = 0
var sgfood = 11
var day = 0
var highscore1 = 0
var highscore2 = 0
var highscore3 = 0
var hsname1 = "no one"
var hsname2 = "no one"
var hsname3 = "no one"
var sgscore = 0

var regulardoggo = "^..^      /\n/_/\\_____/\n   /\\   /\\ \n  /  \\ /  \\"
var poopingdoggo = "^..^      /\n/_/\\_____/\n   /\\   /\\•\n  /  \\ /  \\ •"
var breedingdoggo = "\\      ^..^    **    **    ^..^      /\n \\_____/\\_\\   **********   /_/\\_____/\n /\\   /\\       ********       /\\   /\\\n/  \\ /  \\        ****        /  \\ /  \\\n                  **"
var eatingdoggo = "             /\n ^..^_______/\n /_/ /\\   /\\ \n|__|/  \\ /  \\"
var boxgift = "    \\/  \n   ____\n  |   |\n  |   |\n   ----"
var money = 0
var money2 = 0
var doggocreate = 0
var doggocreate2 = 0
var doggoname = "none"
var doggoname2 = "none"
var statbar0 = "[----------]"
var statbar1 = "[#---------]"
var statbar2 = "[##--------]"
var statbar3 = "[###-------]"
var statbar4 = "[####------]"
var statbar5 = "[#####-----]"
var statbar6 = "[######----]"
var statbar7 = "[#######---]"
var statbar8 = "[########--]"
var statbar9 = "[#########-]"
var statbar10 = "[##########]"
var happiness = statbar10
var happiness2 = statbar10
var happinessnum = 100
var happinessnum2 = 100
var currentdoggo = regulardoggo
var currentdoggo2 = regulardoggo
var food = statbar10
var food2 = statbar10
var foodnum = 100
var foodnum2 = 100
var energy = statbar10
var energy2 = statbar10
var energynum = 100
var energynum2 = 100
var doggosex = "female"
var doggosex2 = "female"
var doggowords = "her"
var doggowords2 = "her"
var doggonoun = "she"
var doggonoun2 = "she"
var doggoobject = "her"
var doggoobject2 = "her"
var sleeping = 0
var sleeping2 = 0
var sleeptime = 0
var sleeptime2 = 0
var statsupdatetime = 0
var statsupdatetime2 = 0
var realstatsupdatetime = 0
var realstatsupdatetime2 = 0
var statsupdate = 1
var statsupdate2 = 1
var status = "none"
var status2 = "none"
var poopcooldown = 0
var poopcooldown2 = 0
var breedcooldown = 0
var breedcooldown2 = 0
var foodservings = 0
var foodservings2 = 0
var applytime = 0
var applytime2 = 0
var currentjob = "none"
var currentjob2 = "none"
var jobname = "none"
var jobname2 = "none"
var jobnumber = 0
var jobnumber2 = 0
var jobsalary = 0
var jobsalary2 = 0
var jobtime = 0
var jobtime2 = 0
var jobcooldown = 0
var jobcooldown2 = 0
var job = "none"
var job2 = "none"
var appliedjob = "none"
var appliedjob2 = "none"
var joblength = 0
var joblength2 = 0
var working = 0
var working2 = 0
var workstarttime = 0
var workstarttime2 = 0
var workendtime = 0
var workendtime2 = 0
var workenergy = 0
var workenergy2 = 0
var quit = 0
var quit2 = 0
var playnum = 100
var playnum2 = 100
var wants1 = "none"
var wants12 = "none"
var wants2 = "none"
var wants22 = "none"
var wants3 = "none"
var wants32 = "none"
var wantsall = "none"
var wantsall2 = "none"
var sleepstatgain = 360000
var sleepstatgain2 = 360000
var sleepstatlose = 432000
var sleepstatlose2 = 432000
var foodstatlose = 300000
var foodstatlose2 = 300000
var playstatlose = 250000
var playstatlose2 = 250000
var playstatgain = 12000
var playstatgain2 = 12000
var doggotime = 0
var doggotime2 = 0
var bsleepstatgain = 360000
var bsleepstatlose = 432000
var bfoodlosestat = 300000
var bplaystatlose = 250000
var bplaystatgain = 12000
var applycooldown = 0
var applycooldown2 = 0
var bed = "none"
var bed2 = "none"
var injurynum = 0
var playtime = 0
var playtime2 = 0
var totalservings = 0
var totalservings2 = 0
var totalworkhours = 0
var totalworkhours2 = 0
var totalplaytime = 0
var totalplaytime2 = 0
var totalmoney = 0
var totalmoney2 = 0
var experience = 0
var experience2 = 0
var expname = "none"
var expname2 = "none"
var salary = 0
var salary2 = 0
var play = statbar10
var play2 = statbar10
var explevel = 0
var explevel2 = 0
var naptime = 0
var naptime2 = 0
var lastinttime = 0
var lastinttime2 = 0
var gifttime = 0
var gifttime2 = 0
var giftboxes = 0
var giftboxes2 = 0
var giftitemnum = 0
var giftnum = 0
var gift = 0
var nap = 1
var nap2 = 1
var doggocreatedtime = 0
var doggocreatedtime2 = 0
var age = 0
var age2 = 0
var agemonths = 0
var agemonths2 = 0
var ageyears = 0
var ageyears2 = 0
var agetime = 0
var agetime2 = 0
var killdog = 0
var killdog2 = 0
var foodprice = 5
var saleprice = 1
var saletime = 0
var salemsgid = 0
var ebmsgid = 0
var ebprice = 0
var ebtime
var eventid = "641514186781884416"
var notif = "ON"
var notif2 = "ON"
var notifnumber = 0
var notifname = ""
var privacy = "OPEN"
var privacy2 = "OPEN"
var doggovalue = ""
var doggovalue2 = ""

var cg = "cg"
var cgname = "crossing guard dog"
var cgnumber = 5
var cgsalary = 10
var cgtime = 3600000
var cglength = "1 hour"
var cgexp = 0
var cgexp2 = 0

var md = "md"
var mdname = "mail delivery dog"
var mdnumber = 6
var mdsalary = 15
var mdtime = 7200000
var mdlength = "2 hours"
var mdexp = 0
var mdexp2 = 0

var brd = "brd"
var brdname = "baseball retrieving dog"
var brdnumber = 7
var brdsalary = 20
var brdtime = 10800000
var brdlength = "3 hours"
var brdexp = 0
var brdexp2 = 0

var dd = "dd"
var ddname = "drug detection dog"
var ddnumber = 15
var ddsalary = 50
var ddtime = 14400000
var ddlength = "4 hours"
var ddexp = 0
var ddexp2 = 0

var pd = "pd"
var pdname = "k-9 police dog"
var pdnumber = 12
var pdsalary = 35
var pdtime = 10800000
var pdlength = "3 hours"
var pdexp = 0
var pdexp2 = 0

var sd = "sd"
var sdname = "sled dog"
var sdnumber = 10
var sdsalary = 20
var sdtime = 21600000
var sdlength = "6 hours"
var sdexp = 0
var sdexp2 = 0

var bedsheetname = ""
var bedsheetcost = 0
var bedsheetincrease = 0
var matname = ""
var matcost = 0
var matincrease = 0
var twinname = ""
var twincost = 0
var twinincrease = 0
var fullname = ""
var fullcost = 0
var fullincrease = 0
var queenname = ""
var queencost = 0
var queenincrease = 0
var kingname = ""
var kingcost = 0
var kingincrease = 0

var boxcost = 0
var doghousecost = 0
var shedcost = 0
var shackcost = 0
var onestorycost = 0
var twostorycost = 0
var threestorycost = 0
var mansioncost = 0
var castlecost = 0

var house = ""
var house2 = ""
var housename = ""
var housename2 = ""
var visiblehouse = ""
var visiblehouse2 = ""
var box = "   ____\n  |    |\n  |    |"
var doghouse = "    __\n   /  \\\n  /____\\\n  |    |\n  |  * |"
var story1 = "  __________\n /          \\\n|            |\n|         *  |"
var story2 = ""
var story3 = ""
var mansion = ""
var castle = ""

client.on('ready' , () => {
    let db = new sqlite3.Database('./STG.db', sqlite3.OPEN_READWRITE);
    let getdatafs = (`SELECT cgname FROM serverdata WHERE testdata = ?`);
    db.get(getdatafs, [testdata], (err, row) => {
        if (err) {
            console.log(err)
        }
        if (row === undefined) {
        let dataforserver = db.prepare('INSERT INTO serverdata VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)')
        dataforserver.run(1234, "crossing guard", 5, 10, 3600000, "1 hour", "mail delivery dog", 6, 15, 7200000, "2 hours", "baseball retrieving dog", 7, 20, 10800000, "3 hours", "drug detection dog", 15, 50, 14400000, "4 hours", "k-9 police dog", 12, 35, 10800000, "3 hours", "sled dog", 10, 20, 21600000, "6 hours", "bedsheet", 25, 1.1, "mat", 100, 1.2, "twin", 500, 1.4, "full", 1250, 1.6, "queen", 2000, 1.75, "king", 4000, 2, 15, 100, 500, 1500, 3000, 10000, 15000, 50000, 100000, 0, 1, 0, 0, 1, 0, 0, "none", "on")
        dataforserver.finalize();
        db.close();
    }
});

let botschannel = client.channels.get("599680064455704586")
let botsstartupchannel = client.channels.get("602398432744701972")
    botschannel.send(version)

    console.log("connected as " + client.user.tag)
    botsstartupchannel.send("connected as " + client.user.tag)

    client.user.setActivity("With Your Mind //help")                            //what bot is doing

    client.guilds.forEach((guild) => {
        console.log(guild.name + "\nMembers = " + guild.memberCount + "\nServer created on " + guild.createdAt)
        botsstartupchannel.send(guild.name +"\nMembers = " + guild.memberCount + "\nServer created on " + guild.createdAt)
        members += (guild.memberCount)
        servers += 1
        guild.channels.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
            botsstartupchannel.send(` - ${channel.name} ${channel.type} ${channel.id}`)
        })
    })
})

client.on('message' , (message) => {    //Tells bot not to respond to self
    if ((message.author == client.user) || (message.author.bot == 1)) {
        return
    }
    let datachannel = client.channels.get("622658650640744498")
    temptoday = new Date();
    temptodayms = temptoday.getTime();
    // if (gamedata["serverdata"] !== undefined) {
    //     datatime = gamedata["serverdata"].datatime
    // }
    // if (datatime < temptodayms) {
    //     datachannel.send((temptoday.toString()) + "\n" + version);
    //     jsondata = fs.readFileSync('./STG.json', 'utf8');
    //     for(let i = 0; i < jsondata.length; i += 1975) {
    //         const toSend = jsondata.substring(i, Math.min(jsondata.length, i + 1975));
    //         datachannel.send(toSend);
    //     }
    //     gamedata["serverdata"].datatime = (temptodayms + 3600000)
    //     fs.writeFileSync ("./gamedata.json", JSON.stringify(gamedata, null, 1), err => {
    //         if (err) throw err;
    //     });
    // }
    // botsstartupchannel.send( {files: ["./STG.db"]} );

    //message.channel.send("Message recieved, " + message.author.toString()
     //+ ": " + message.content)

    //let customemoji = message.guild.emojis.get("599641675832229889")
    //message.react(customemoji)

        processcommand(message)
    
})

function processcommand(message) {                          //Command prompt
    let db = new sqlite3.Database('./STG.db', sqlite3.OPEN_READWRITE);
    let fullcommand = message.content.toLowerCase()
    let casecommand = message.content
    let regularcommand = message.content
    let splitcommand = fullcommand.split(" ")
    let casesplitcommand = casecommand.split(" ")
    let firstcommand = splitcommand[0]
    let secondcommand = splitcommand[1]
    let thirdcommand = splitcommand[2]
    let fourthcommand = splitcommand[3]
    let fifthcommand = splitcommand[4]
    let casefirstcommand = casesplitcommand[0]
    let casesecondcommand = casesplitcommand[1]
    let casethirdcommand = casesplitcommand[2]
    let casefourthcommand = casesplitcommand[3]
    let casefifthcommand = casesplitcommand[4]
    let twoplus = casecommand.slice(firstcommand.length + 1)
    if (secondcommand !== undefined) {
        threeplus = casecommand.slice(firstcommand.length + secondcommand.length + 2)
    }

    number = (Math.ceil(Math.random() * 10))
    today = new Date();
    future = new Date();
    todayms = today.getTime();
    stopcode = 0
        if (message.channel.type == "dm") {
            dmmessagecmd(message)
        return
        } else {
        guildid = message.guild.id
        username = message.author.tag
        userid = message.author.id
        }
    if (message.mentions.users.first() !== undefined) {
        mention = message.mentions.users.first()
        mentionusername = message.mentions.users.first().tag
        messagementions = true
    } else {
        messagementions = 0
    }
    // if (gamedata["person"] !== undefined) {
    //     person = gamedata["person"].name
    // }
    // if (secondcommand == "person") {
    //     casesecondcommand = person
    // }
    let serverinfo = `SELECT password, passwordnum, lock, hsname1, highscore1, hsname2, highscore2, hsname3, highscore3, sgscore, glevel, glevelmin, ggnum, mute, cooldowntime, interval, intletter, lockenter, locknum, cmdnumber FROM servers WHERE guildid = ?`;
    db.get(serverinfo, [guildid], (err, row) => {
        if (err) {
            console.log(err)
        }
        if (row === undefined) {
            console.log("Server data added")
            serverinfo = db.prepare('INSERT INTO servers VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)');
            serverinfo.run(guildid, 0, 0, 1, "no one", 0, "no one", 0, "no one", 0, 0, 1, 1, 0, 0, 0, 1, "s", 0, 0, 0);
            serverinfo.finalize();
            return
        } else {
            password = row.password
            passwordnum = row.passwordnum
            lock = row.lock
            hsname1 = row.hsname1
            highscore1 = row.highscore1
            hsname2 = row.hsname2
            highscore2 = row.highscore2
            hsname3 = row.hsname3
            highscore3 = row.highscore3
            sgscore = row.sgscore
            glevel = row.glevel
            glevelmin = row.glevelmin
            ggnum = row.ggnum
            mute = row.mute
            cooldowntime = row.cooldowntime
            interval = row.interval
            intletter = row.intletter
            lockenter = row.lockenter
            locknum = row.locknum
            cmdnumber = row.cmdnumber

            persondatacmd1(message)
        }
    });

    function persondatacmd1(message) {
        let sdatainfo = `SELECT testdata, cgname, cgnumber, cgsalary, cgtime, cglength, mdname, mdnumber, mdsalary, mdtime, mdlength, brdname, brdnumber, brdsalary, brdtime, brdlength, ddname, ddnumber, ddsalary, ddtime, ddlength, pdname, pdnumber, pdsalary, pdtime, pdlength, sdname, sdnumber, sdsalary, sdtime, sdlength, bedsheetname, bedsheetcost, bedsheetincrease, matname, matcost, matincrease, twinname, twincost, twinincrease, fullname, fullcost, fullincrease, queenname, queencost, queenincrease, kingname, kingcost, kingincrease, box, doghouse, shed, shack, onestory, twostory, threestory, mansion, castle, datatime, saleprice, saletime, salemsgid, ebprice, ebtime, ebmsgid, person, botstatus FROM serverdata WHERE testdata = ?`
        db.get(sdatainfo, ["1234"], (err, row) => {
            if (err) {
                console.log(err)
            }
            if (row !== undefined) {
            cgname = row.cgname
            cgnumber = row.cgnumber
            cgsalary = row.cgsalary
            cgtime = row.cgtime
            cglength = row.cglength
            mdname = row.mdname
            mdnumber = row.mdnumber
            mdsalary = row.mdsalary
            mdtime = row.mdtime
            mdlength = row.mdlength
            brdname = row.brdname
            brdnumber = row.brdnumber
            brdsalary = row.brdsalary
            brdtime = row.brdtime
            brdlength = row.brdlength
            ddname = row.ddname
            ddnumber = row.ddnumber
            ddsalary = row.ddsalary
            ddtime = row.ddtime
            ddlength = row.ddlength
            pdname = row.pdname
            pdnumber = row.pdnumber
            pdsalary = row.pdsalary
            pdtime = row.pdtime
            pdlength = row.pdlength
            sdname = row.sdname
            sdnumber = row.sdnumber
            sdsalary = row.sdsalary
            sdtime = row.sdtime
            sdlength = row.sdlength
            bedsheetname = row.bedsheetname
            bedsheetcost = row.bedsheetcost
            bedsheetincrease = row.bedsheetincrease
            matname = row.matname
            matcost = row.matcost
            matincrease = row.matincrease
            twinname = row.twinname
            twincost = row.twincost
            twinincrease = row.twinincrease
            fullname = row.fullname
            fullcost = row.fullcost
            fullincrease = row.fullincrease
            queenname = row.queenname
            queencost = row.queencost
            queenincrease = row.queenincrease
            kingname = row.kingname
            kingcost = row.kingcost
            kingincrease = row.kingincrease
            boxcost = row.box
            doghouse = row.doghouse
            shedcost = row.shed
            shedcost = row.shack
            onestorycost = row.onestory
            twostorycost = row.twostory
            threestorycost = row.threestory
            mansioncost = row.mansion
            castlecost = row.castle
            datatime = row.datatime
            saleprice = row.saleprice
            saletime = row.saletime
            salemsgid = row.salemsgid
            ebprice = row.ebprice
            ebtime = row.ebtime
            ebmsgid = row.ebmsgid
            person = row.person
            botstatus = row.botstatus
            }
            
            persondatacmd2(message)
        });
    }

    function persondatacmd2(message) {

        let userinfo = `SELECT userid, username, dmchannelid, cmdchannelid, cmdpassenter, cmdnumber, commandnumber, commandtext, chatid, chatnum, sgscore, rpsbotscore, rpsuserscore, rpsgame, doggocreate, doggocreatedtime, doggoname, currentdoggo, money, foodnum, energynum, poopcooldown, jobcooldown, breedcooldown, statsupdatetime, sleeping, sleeptime, doggosex, foodservings, applytime, appliedjob, currentjob, working, workstarttime, workendtime, status, quit, playnum, sleepstatgain, sleepstatlose, foodstatlose, playstatlose, playstatgain, bed, doggotime, playtime, totalservings, totalworkhours, totalplaytime, totalmoney, cgexp, mdexp, brdexp, ddexp, pdexp, sdexp, salary, naptime, lastinttime, gifttime, giftboxes, killdog, house, notif, privacy, playtimer, worktimer, sleeptimer, applytimer FROM users WHERE userid = ?`
        db.get(userinfo, [userid], (err, row) => {
            if (err) {
                console.log(err)
            }
            if (row === undefined) {
                console.log("User data added")
                userinfo = db.prepare('INSERT INTO users VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)');
                userinfo.run(userid, username, 0, 0, 0, 0, 0, "none", 0, 0, 0, 0, 0, 0, 0, todayms, "none", "regulardoggo", 10, 100, 100, 0, 0, 0, todayms, 0, 0, "none", 0, 0, "none", "none", 0, 0, 0, "none", 0, 100, bsleepstatgain, bsleepstatlose, bfoodlosestat, bplaystatlose, bplaystatgain, "none", 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, todayms, 0, 0, 0, "none", "ON", "OPEN", 0, 0, 0, 0);
                userinfo.finalize();
                return
            } else {
                dmchannelid = row.dmchannelid
                cmdchannelid = row.cmdchannelid
                cmdpassenter = row.cmdpassenter
                cmdnumber = row.cmdnumber
                commandnumber = row.commandnumber
                commandtext = row.commandtext
                chatid = row.chatid
                chatnum = row.chatnum
                sgscore = row.sgscore
                rpsbotscore = row.rpsbotscore
                rpsuserscore = row.rpsuserscore
                rpsgame = row.rpsgame
                doggocreate = row.doggocreate
                doggocreatedtime = row.doggocreatedtime
                doggoname = row.doggoname
                currentdoggo = row.currentdoggo
                money = row.money
                foodnum = row.foodnum
                energynum = row.energynum
                poopcooldown = row.poopcooldown
                jobcooldown = row.jobcooldown
                breedcooldown = row.breedcooldown
                statsupdatetime = row.statsupdatetime
                sleeping = row.sleeping
                sleeptime = row.sleeptime
                doggosex = row.doggosex
                foodservings = row.foodservings
                applytime = row.applytime
                appliedjob = row.appliedjob
                currentjob = row.currentjob
                working = row.working
                workstarttime = row.workstarttime
                status = row.status
                quit = row.quit
                playnum = row.playnum
                sleepstatgain = row.sleepstatgain
                sleepstatlose = row.sleepstatlose
                foodstatlose = row.foodstatlose
                playstatlose = row.playstatlose
                playstatgain = row.playstatgain
                bed = row.bed
                doggotime = row.doggotime
                playtime = row.playtime
                totalservings = row.totalservings
                totalworkhours = row.totalworkhours
                totalplaytime = row.totalplaytime
                totalmoney = row.totalmoney
                cgexp = row.cgexp
                mdexp = row.mdexp
                brdexp = row.brdexp
                ddexp = row.ddexp
                sdexp = row.sdexp
                salary = row.salary
                naptime = row.naptime
                lastinttime = row.lastinttime
                gifttime = row.gifttime
                giftboxes = row.giftboxes
                killdog = row.killdog
                house = row.house
                notif = row.notif
                privacy = row.privacy
            }

        if (firstcommand.includes("//bot")) {
            botstatuscmd(message)
            return
        }

        if (botstatus == "off") {
            return
        }

        if (firstcommand.includes("//filldog")) {
                filldogcmd(message)
                return
        }

        if (firstcommand == "//serverinfo") {
            serverinfocmd(message)
            return
        }

        if (firstcommand == "//gift") {
            giftcmd(message)
            return
        }

        if (firstcommand.includes("//") && (firstcommand.includes("echo"))) {
            echocmd(message)
            return
        }

        if ((firstcommand == "//killdog") || (firstcommand == "//savedog")) {
            killdogcmd(message)
            return
        }

        if (firstcommand == "//ss") {
            setstatuscmd(message)
            return
        }

        if (firstcommand == "//getdm") {
            getdmcmd(message)
            return
        }

        if (firstcommand == "//sale") {
            salecmd(message)
            return
        }

        if (firstcommand == "//eb") {
            earnboostcmd(message)
            return
        }

        if ((message.channel.name.includes("doggo"))) {
            doggogamecmd(message)
            return
        }

        if (message.channel.id == "626100159436161045") {
            testcmd(message)
            return
        }

        if (message.channel.name.includes("gecko")) {
            geckogamecmd(message)
            return
        }

        if (message.channel.name.includes("survival")) {
            survivalgamecmd(message)
            return
        }

        if ((message.channel.name.includes("general")) || (message.channel.name.includes("commands")) || (message.channel.name.includes("test"))) {
            talkcmd(message)
        }

            if (firstcommand.includes("//version")) {
                versioncmd(message)
                return
            }
            if (firstcommand == "//gd") {
                getdatacmd(message)
                return
            }

            if (firstcommand.includes("//updatedata")) {
                updatedatacmd(message)
                return
            }

            if (firstcommand.includes("//sp")) {
                setpersoncmd(message)
                return
            }

            if (firstcommand == "//dm") {
                message.delete(1)
                dmcmd(message)
                return
            }

            if (firstcommand.includes("//setpass") || (firstcommand.includes("//lock")) || (firstcommand.includes("//unlock"))) {
                passwordcmd(message)
            }

            function passwordcmd(message) {

                    if (firstcommand.includes("//setpassword") && (passwordnum == 0)) {
                        message.delete(1)
                        db.run(`UPDATE servers SET passwordnum = ? WHERE guildid = ?`, [1, guildid]);
                        db.run(`UPDATE users SET cmdchannelid = ? WHERE userid = ?`, [(message.channel.id), userid]);
                        message.channel.send("```Create password:```")
                        return
                    } else if ((passwordnum == 1) && (message.channel.id == cmdchannelid)) {
                        message.channel.bulkDelete(2)
                        db.run(`UPDATE users SET cmdchannelid = ? WHERE userid = ?`, [0, userid]);
                        db.run(`UPDATE servers SET password = ? WHERE guildid = ?`, [fullcommand, guildid]);
                        db.run(`UPDATE servers SET passwordnum = ? WHERE guildid = ?`, [2, guildid]);
                        db.run(`UPDATE users SET cmdpassenter = ? WHERE userid = ?`, [0, userid]);
                        message.channel.send("```Password set.```")
                        return
                    } else if (firstcommand.includes("//setpassword") && (passwordnum == 2)) {
                        message.delete(1)
                        db.run(`UPDATE users SET cmdchannelid = ? WHERE userid = ?`, [(message.channel.id), userid]);
                        db.run(`UPDATE users SET cmdpassenter = ? WHERE userid = ?`, [1, userid]);
                        message.channel.send("```Please type in your previous password to change it.\nPrevious password:```")
                        return
                    } else if ((cmdpassenter == 1) && (message.channel.id == cmdchannelid)){
                        message.delete(1)
                        if (firstcommand == password) {
                            db.run(`UPDATE users SET cmdpassenter = ? WHERE userid = ?`, [2, userid]);
                            db.run(`UPDATE users SET cmdchannelid = ? WHERE userid = ?`, [(message.channel.id), userid]);
                            message.channel.send("```Create new password:```")
                            return
                        } else if ((firstcommand != password) && (message.channel.id == cmdchannelid)) {
                            db.run(`UPDATE users SET cmdpassenter = ? WHERE userid = ?`, [0, userid]);
                            db.run(`UPDATE users SET cmdchannelid = ? WHERE userid = ?`, [0, userid]);
                            message.channel.send("```Wrong password.```")
                        }
                        return
                    } else if ((cmdpassenter == 2) && (message.channel.id == cmdchannelid)) {
                        message.channel.bulkDelete(5);
                        db.run(`UPDATE servers SET password = ? WHERE guildid = ?`, [fullcommand, guildid]);
                        db.run(`UPDATE servers SET passwordnum = ? WHERE guildid = ?`, [2, guildid]);
                        db.run(`UPDATE users SET cmdpassenter = ? WHERE userid = ?`, [0, userid]);
                        db.run(`UPDATE users SET cmdchannelid = ? WHERE userid = ?`, [0, userid]);
                        message.channel.send("```New password set.```")
                        return
                    }

                    if (firstcommand.includes("//unlock") && (passwordnum != 0)) {
                        message.delete(1)
                        message.channel.send("```Password:```")
                        lockenter = 1
                        locknum = 2
                        cmdchannelid = message.channel.id;
                        db.run(`UPDATE servers SET lockenter = ? WHERE guildid = ?`, [lockenter, guildid]);
                        db.run(`UPDATE servers SET locknum = ? WHERE guildid = ?`, [locknum, guildid]);
                        db.run(`UPDATE users SET cmdchannelid = ? WHERE userid = ?`, [cmdchannelid, userid]);
                        return
                    } else if ((message.channel.id == cmdchannelid) && (lockenter == 1) && (locknum == 2) && (firstcommand == password)) {
                            message.channel.bulkDelete(2)
                            message.channel.send("```Unlocked.```")
                            lockenter = 0
                            lock = 0
                            locknum = 0
                            cmdchannelid = 0;
                            db.run(`UPDATE servers SET lock = ? WHERE guildid = ?`, [lock, guildid]);
                            db.run(`UPDATE servers SET lockenter = ? WHERE guildid = ?`, [lockenter, guildid]);
                            db.run(`UPDATE servers SET locknum = ? WHERE guildid = ?`, [locknum, guildid]);
                            return
                        } else if ((message.channel.id == cmdchannelid) && (firstcommand != password) && (lockenter == 1) && (locknum == 2)) {
                            message.channel.bulkDelete(2)
                            message.channel.send("```Wrong password.```")
                            lockenter = 0
                            locknum = 3
                            cmdchannelid = 0;
                            db.run(`UPDATE servers SET lockenter = ? WHERE guildid = ?`, [lockenter, guildid]);
                            db.run(`UPDATE servers SET locknum = ? WHERE guildid = ?`, [locknum, guildid]);
                            db.run(`UPDATE users SET cmdchannelid = ? WHERE userid = ?`, [cmdchannelid, userid]);
                            return
                        }
            
            if (firstcommand.includes("//lock") && (passwordnum != 0)) {
                message.delete(1)
                message.channel.send("```Password:```")
                lockenter = 1
                locknum = 1
                cmdchannelid = message.channel.id;
                db.run(`UPDATE servers SET lockenter = ? WHERE guildid = ?`, [lockenter, guildid]);
                db.run(`UPDATE servers SET locknum = ? WHERE guildid = ?`, [locknum, guildid]);
                db.run(`UPDATE users SET cmdchannelid = ? WHERE userid = ?`, [cmdchannelid, userid]);
                return
            } else if ((message.channel.id == cmdchannelid) && (lockenter == 1) && (locknum == 1) && (firstcommand == password)) {
                    message.channel.bulkDelete(2)
                    message.channel.send("```Locked.```")
                    lockenter = 0
                    lock = 1
                    locknum = 0
                    cmdchannelid = 0;
                    db.run(`UPDATE servers SET lock = ? WHERE guildid = ?`, [lock, guildid]);
                    db.run(`UPDATE servers SET lockenter = ? WHERE guildid = ?`, [lockenter, guildid]);
                    db.run(`UPDATE users SET cmdchannelid = ? WHERE userid = ?`, [cmdchannelid, userid]);
                    return
                } else if ((message.channel.id == cmdchannelid) && (firstcommand != password) && (lockenter == 1) && (locknum == 1)) {
                    message.channel.bulkDelete(2)
                    message.channel.send("```Wrong password.```")
                    lockenter = 0
                    locknum = 0
                    cmdchannelid = 0;
                    db.run(`UPDATE servers SET lockenter = ? WHERE guildid = ?`, [lockenter, guildid]);
                    db.run(`UPDATE servers SET locknum = ? WHERE guildid = ?`, [locknum, guildid]);
                    db.run(`UPDATE users SET cmdchannelid = ? WHERE userid = ?`, [cmdchannelid, userid]);
                    return
                }
            }

            if ((lock == 0) && (passwordnum != 0))  {

                if (firstcommand.includes("//clear")) {
                    message.delete(1)
                    commandnumber = parseInt(secondcommand, 10)
                   clearcmd(message)
                   return
                }

                if (firstcommand.includes("//mute")) {
                    message.delete(1)
                    mutecmd(message)
                    return
                }

                if (firstcommand.includes("//unmute")) {
                    message.delete(1)
                    unmutecmd(message)
                    return
                }

                if ((firstcommand.includes("//help")) && (secondcommand.includes("admin"))) {
                    message.delete(1)
                    adminhelpcmd(message)
                    return
                }

                if (firstcommand.includes("//setcd")) {
                    message.delete(1)
                    commandnumber = parseInt(secondcommand, 10)
                    commandtext = thirdcommand
                    cooldowncmd(message)
                    return
                }

                if (firstcommand.includes("//resetcd")) {
                    message.delete(1)
                    resetcdcmd(message)
                    return
                }

        } else if ((password != 0) && (lock == 1) && ((firstcommand.includes("//clear") || (firstcommand.includes("//mute")) || (firstcommand.includes("//unmute")) || (firstcommand.includes("//adminhelp")) || (firstcommand.includes("//setcd")) || (firstcommand.includes("//resetcd"))))) {
            message.delete(1)
            if (firstcommand.includes("//clear")) {
                commandnumber = parseInt(secondcommand, 10)
                cmdnumber = 1
            } else if (firstcommand.includes("//mute")) {
                cmdnumber = 2
            } else if (firstcommand.includes("//unmute")) {
                cmdnumber = 3
            } else if (firstcommand.includes("//adminhelp")) {
                cmdnumber = 4
            } else if (firstcommand.includes("//setcd")) {
                commandnumber = parseInt(secondcommand, 10)
                commandtext = thirdcommand
                cmdnumber = 5
            } else if (firstcommand.includes("//resetcd")) {
                cmdnumber = 6
            }
            message.channel.send("```Admin commands are locked, enter your password to use this command.\nPassword:```")
            cmdpassenter = 3
            cmdchannelid = message.channel.id;
            db.run(`UPDATE users SET cmdnumber = ? WHERE userid = ?`, [cmdnumber, userid]);
            db.run(`UPDATE users SET commandnumber = ? WHERE userid = ?`, [commandnumber, userid]);
            db.run(`UPDATE users SET commandtext = ? WHERE userid = ?`, [commandtext, userid]);
            db.run(`UPDATE users SET cmdpassenter = ? WHERE userid = ?`, [cmdpassenter, userid]);
            db.run(`UPDATE users SET cmdchannelid = ? WHERE userid = ?`, [cmdchannelid, userid]);
            return
        } else if ((password == 0) && ((firstcommand.includes("//clear")) || (firstcommand.includes("//mute")) || (firstcommand.includes("//unmute")) || (firstcommand.includes("//lock")) || (firstcommand.includes("//unlock")) || (firstcommand.includes("//adminhelp")) || (firstcommand.includes("//setcd")) || (firstcommand.includes("//resetcd")))) {
            message.delete(1)
            message.channel.send("```You do not have a password, pleases set one to secure admin commands using //setpassword.```")
            cmdchannelid = 0
        } else if ((message.channel.id == cmdchannelid) && (cmdpassenter == 3) && (firstcommand == password) && (lock == 1)) {
            message.channel.bulkDelete(3)
                if (cmdnumber == 1) {
                   clearcmd(message)
                } else if (cmdnumber == 2) {
                    mutecmd(message)
                } else if (cmdnumber == 3) {
                    unmutecmd(message)
                } else if (cmdnumber == 4) {
                    adminhelpcmd(message)
                } else if (cmdnumber == 5) {
                    cooldowncmd(message)
                } else if (cmdnumber == 6) {
                    resetcdcmd(message)
                }
            db.run(`UPDATE users SET cmdnumber = ? WHERE userid = ?`, [0, userid]);
            db.run(`UPDATE users SET cmdpassenter = ? WHERE userid = ?`, [0, userid]);
            db.run(`UPDATE users SET cmdchannelid = ? WHERE userid = ?`, [0, userid]);
                return
        } else if ((message.channel.id == cmdchannelid) && (cmdpassenter == 3) && (firstcommand != password) && (lock == 1)) {
            message.channel.bulkDelete(3)
            message.channel.send("```Wrong password.```");
            db.run(`UPDATE users SET cmdnumber = ? WHERE userid = ?`, [0, userid]);
            db.run(`UPDATE users SET cmdpassenter = ? WHERE userid = ?`, [0, userid]);
            db.run(`UPDATE users SET cmdchannelid = ? WHERE userid = ?`, [0, userid]);
            return
        }

if ((message.channel.id != "625531951977332741") && (message.channel.id != "625531987230457877")) {
    
                if (firstcommand.includes("//help")) {
                    helpcmd(message)
                    return
            }

                if (firstcommand.includes("//aoc") && (message.content.slice(6)) != 0) {
                    message.delete(1)
                    message.channel.send(Math.round(((message.content.slice(6)) * (message.content.slice(6)) * 3.14159265359) * 1000000) / 1000000)
                } else if(firstcommand.includes("//aoc")) {
                    message.delete(1)
                    message.channel.send("```//aoc [Radius] - calculates the area of circle```")
                }

                if (firstcommand.includes("//coc") && (message.content.slice(6)) != 0) {
                    message.delete(1)
                    message.channel.send(Math.round(((message.content.slice(6)) * 2 * 3.14159265359) * 1000000) / 1000000)
                } else if (firstcommand.includes("//coc")) {
                    message.delete(1)
                    message.channel.send("```//coc [Radius] - calculates the circumference of circle```")
                }

                if (firstcommand.includes("//sqrt") && (message.content.slice(7)) != 0) {
                    message.delete(1)
                    message.channel.send(Math.round(Math.pow(message.content.slice(7), 0.5) * 1000000) / 1000000)
                } else if (firstcommand.includes("//sqrt")) {
                    message.delete(1)
                    message.channel.send("```//sqrt [Number] - calculates the square root of a number```")
                }

                if (firstcommand.includes("//flipcoin")) {
                    message.delete(1)
                    if (Math.ceil(Math.random() * 10) >= 6) {
                        message.channel.send("It's Heads!")
                    } else {
                        message.channel.send("It's Tails!")
                        }
                }
                if ((firstcommand.includes("//rolldice")) && (secondcommand === undefined)) {
                    message.delete(1)
                    dice = (Math.ceil(Math.random() * 6))
                        message.channel.send("You rolled a " + dice + ".")
                } else if ((firstcommand.includes("//rolldice")) && (secondcommand !== undefined)) {
                    dice = (Math.ceil(Math.random() * secondcommand))
                    message.channel.send("You rolled a " + dice + ".")
                }
                if ((firstcommand.includes("//rps")) && (isNaN(secondcommand) == false)) {
                    message.delete(1)
                    rpsgame = parseInt(secondcommand, 10)
                    if (rpsgame % 2 != 0) {
                        db.run(`UPDATE users SET rpsbotscore = ? WHERE userid = ?`, [0, userid]);
                        db.run(`UPDATE users SET rpsuserscore = ? WHERE userid = ?`, [0, userid]);
                        db.run(`UPDATE users SET rpsgame = ? WHERE userid = ?`, [rpsgame, userid]);
                        db.run(`UPDATE users SET cmdchannelid = ? WHERE userid = ?`, [(message.channel.id), userid]);
                        message.channel.send("```You have started a rock, paper, scissors game, best " + (((rpsgame) / 2) + 0.5) + " out of " + rpsgame + ".```")
                        return
                    } else {
                        message.channel.send("```Use //rps [odd number] to start a rock, paper, scissors game.```")
                        return
                    }
                   
                } else if ((firstcommand.includes("//rps")) && (isNaN(secondcommand) == true) && (rpsgame == 0)) {
                    message.delete(1)
                    message.channel.send("```Use //rps [odd number] to start a rock, paper, scissors game.```")
                    return
                }
                if ((cmdchannelid == message.channel.id) && (firstcommand != "//rps") && ((firstcommand == "rock") || (firstcommand == "paper") || (firstcommand == "scissors"))) {
                    message.delete(1)
                    rpstempbscore = 0
                    rpstempuscore = 0
                    rpsuseranswer = firstcommand
                    rpsnum = Math.ceil((Math.random() * 3))
                    if ((rpsnum < 1) || (rpsnum > 3)) {
                        Math.ceil((Math.random() * 3))
                    }
                    if (rpsnum == 1) {
                        rpsanswer = "rock"
                    } else if (rpsnum == 2) {
                        rpsanswer = "paper"
                    } else if (rpsnum == 3) {
                        rpsanswer = "scissors"
                    }
                    if (rpsanswer == rpsuseranswer) {
                        rpstempbscore = 0
                        rpstempuscore = 0
                    } else {
                    if (rpsuseranswer == "rock") {
                        if (rpsanswer == "paper") {
                            rpsbotscore += 1
                            rpstempbscore = 1
                        } else {
                            rpsuserscore += 1
                            rpstempuscore = 1
                        }
                    } else if (rpsuseranswer == "paper") {
                        if (rpsanswer == "scissors") {
                            rpsbotscore += 1
                            rpstempbscore = 1
                        } else {
                            rpsuserscore += 1
                            rpstempuscore = 1
                        }
                    } else if (rpsuseranswer == "scissors") {
                        if (rpsanswer == "rock") {
                            rpsbotscore += 1
                            rpstempbscore = 1
                        } else {
                            rpsuserscore += 1
                            rpstempuscore = 1
                        }
                    }
                }
                    if (rpsgame > 1) {
                    if ((rpsbotscore != (((rpsgame) / 2) + 0.5)) && (rpsuserscore != (((rpsgame) / 2) + 0.5))) {
                        if (rpstempbscore > rpstempuscore) {
                            message.channel.send("You chose **" + rpsuseranswer + "** and I chose **" + rpsanswer + "**, **I win** this round!")
                        } else if (rpstempbscore < rpstempuscore) {
                            message.channel.send("You chose **" + rpsuseranswer + "** and I chose **" + rpsanswer + "**, **You win** this round!")
                        } else if (rpstempbscore == rpstempuscore) {
                            message.channel.send("You chose **" + rpsuseranswer + "** and I chose **" + rpsanswer + "**, **we tied** this round!")
                        };
                        db.run(`UPDATE users SET rpsbotscore = ? WHERE userid = ?`, [rpsbotscore, userid]);
                        db.run(`UPDATE users SET rpsuserscore = ? WHERE userid = ?`, [rpsuserscore, userid]);
                        db.run(`UPDATE users SET rpsgame = ? WHERE userid = ?`, [rpsgame, userid]);
                    } else if ((rpsbotscore == (((rpsgame) / 2) + 0.5)) || (rpsuserscore == (((rpsgame) / 2) + 0.5))) {
                        if (rpstempbscore > rpstempuscore) {
                            if (rpsbotscore > rpsuserscore) {
                                message.channel.send("You chose **" + rpsuseranswer + "** and I chose **" + rpsanswer + "**, **I win** this round!\n**I win** the game **" + rpsbotscore + "** to **" + rpsuserscore + "**.")
                            } else if (rpsbotscore < rpsuserscore) {
                                message.channel.send("You chose **" + rpsuseranswer + "** and I chose **" + rpsanswer + "**, **I win** this round!\n**You win** the game **" + rpsuserscore + "** to **" + rpsbotscore + "**.")
                            }
                            db.run(`UPDATE users SET rpsbotscore = ? WHERE userid = ?`, [0, userid]);
                            db.run(`UPDATE users SET rpsuserscore = ? WHERE userid = ?`, [0, userid]);
                            db.run(`UPDATE users SET rpsgame = ? WHERE userid = ?`, [0, userid]);
                        } else if (rpstempbscore < rpstempuscore) {
                            if (rpsbotscore > rpsuserscore) {
                                message.channel.send("You chose **" + rpsuseranswer + "** and I chose **" + rpsanswer + "**, You win this round!\n**I win** the game **" + rpsbotscore + "** to **" + rpsuserscore + "**.")
                            } else if (rpsbotscore < rpsuserscore) {
                                message.channel.send("You chose **" + rpsuseranswer + "** and I chose **" + rpsanswer + "**, You win this round!\n**You win** the game **" + rpsuserscore + "** to **" + rpsbotscore + "**.")
                            }
                            db.run(`UPDATE users SET rpsbotscore = ? WHERE userid = ?`, [0, userid]);
                            db.run(`UPDATE users SET rpsuserscore = ? WHERE userid = ?`, [0, userid]);
                            db.run(`UPDATE users SET rpsgame = ? WHERE userid = ?`, [0, userid]);
                        }
                    }
                }
            }
        }
    });
}

    //Begin gecko game///////////////////////////////////////////////////////////////////////////////////////////////////////////

function geckogamecmd(message) {

    if (fullcommand.includes("//help")) {
        message.delete(1)
        message.channel.send("```Type in a number (1-10) and if you guess correctly Steve earns 10 levels, but guess incorrectly and Steve loses 1 level. Every 25 levels Steve hits a goal and can't go below that, get him as high as possible!```")
    }
    if (fullcommand == ggnum) {
        glevel += 10
        message.channel.send("Correct, Steve is now level " + glevel + ("!"))
        ggnum = (Math.ceil(Math.random() * 10));
        if (glevel >= (glevelmin + 25)) {
            glevelmin += 25
            db.run(`UPDATE servers SET glevelmin = ? WHERE guildid = ?`, [glevelmin, guildid])
        }
        db.run(`UPDATE servers SET ggnum = ? WHERE guildid = ?`, [ggnum, guildid]);
        db.run(`UPDATE servers SET glevel = ? WHERE guildid = ?`, [glevel, guildid]);
    } else if ((fullcommand != ggnum) && (isNaN(fullcommand) == false) && (fullcommand < 11) && (fullcommand > 0)) {
        if (glevel > glevelmin) {
            glevel -= 1
            db.run(`UPDATE servers SET glevel = ? WHERE guildid = ?`, [glevel, guildid]);
        }
        message.channel.send("Wrong, Steve is now level " + glevel + "!")
    }
    
    if ((isNaN(fullcommand) == true) && (fullcommand.includes("!") == 0) && (fullcommand.includes("//") == 0)) {
        message.delete(1)
        message.channel.send("```Type in a number (1-10) and if you guess correctly Steve earns 10 levels, but guess incorrectly and Steve loses 1 level.  Every 25 levels Steve hits a goal and can't go below that, get him as high as possible!```")
    } else if (((fullcommand > 10) || (fullcommand < 1)) && (isNaN(fullcommand) == false)) {
        message.delete(1)
        message.channel.send("```Type in a number (1-10) and if you guess correctly Steve earns 10 levels, but guess incorrectly and Steve loses 1 level.  Every 25 levels Steve hits a goal and can't go below that, get him as high as possible!```")
    }

}
db.close();
return
    //End gecko game/////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Begin survival game////////////////////////////////////////////////////////////////////////////////////////////////////////

function survivalgamecmd(message) {

    if (firstcommand.includes("//leaderboard")) {
        leaderboardcmd(message)
    }

    if (firstcommand.includes("//help")) {
        message.delete(1)
        message.channel.send("```Use //start to begin the game or start over. Use //resume to resend the choices. Then type the number corresponding to the choise you want to make.```")
    }

    if (((isNaN(fullcommand) == true) && (fullcommand.includes("!") == 0) && (fullcommand.includes("//") == 0)) || (fullcommand > 4) || (fullcommand < 1)) {
        message.delete(1)
        message.channel.send("```Use //start to begin the game or start over. Use //resume to resend the choices. Then type the number corresponding to the choice you want to make.```")
    }

        
    if (firstcommand.includes("//start")) {
        message.delete(1)
        message.channel.send("```You are walking down a dark path in the woods, your only defenses are a gun with limited ammo and your fists. Make your choices wisely...```")
        sgnum = (Math.ceil(Math.random() * 16))
        outcome = (Math.ceil(Math.random() * sghardness))
        sgscore = 0
        ammo = 6
        day = 0
        sgfood = 11
        db.run(`UPDATE users SET sgscore = ? WHERE userid = ?`, [0, userid]);
        choosecmd(message)
    }

    if (firstcommand.includes("//resume") && (choose != 0)) {
        message.delete(1)
        resume = 1
        choosecmd(message)
    } else if ((firstcommand.includes("//resume")) && (choose == 0)) {
        message.delete(1)
        message.channel.send("```Use //start to restart the game.```")
    }

if (firstcommand.includes("!") == 0) {

    if (choose == 1) {

        if (firstcommand.includes("1")) {
            if (outcome < 3) {
                message.delete(1)
                message.channel.send("```The " + optionsname + " talked with you for a while before leaving.```")
                sgscore += 1
                choose = 0
                choosecmd(message)
            } else if ((outcome > 2) && (outcome < 5)) {
                message.delete(1)
                message.channel.send("```The " + optionsname + " punched you in the face when you started talking to them, but they left you alone after that.```")
                sgscore += 1
                choose = 0
                choosecmd(message)
            } else if (outcome > 4) {
                message.delete(1)
                message.channel.send("```Well.....               let's just say that conversation ended poorly. Your score was " + sgscore + ".```")
                choose = 0
                diecmd(message)
            }

        }
    
        if (firstcommand.includes("2")) {
            if (outcome < 3) {
                message.delete(1)
                message.channel.send("```You kept walking and never saw the " + optionsname + " again.```")
                sgscore += 1
                choose = 0
                choosecmd(message)
            } else if ((outcome > 2) && (outcome < 5)) {
                message.delete(1)
                message.channel.send("```You walked past the " + optionsname + ", but they came back later and killed you with a baseball bat when you weren't expecting it. Your score was " + sgscore + ".```")
                choose = 0
                diecmd(message)
            } else if  (outcome > 4) {
                message.delete(1)
                message.channel.send("```You walked past the " + optionsname + ", but they came back later and killed you with a chainsaw. Your score was " + sgscore + ".```")
                choose = 0
                diecmd(message)
            }
        }

        if (firstcommand.includes("3")) {
            if (outcome < 4) {
                message.delete(1)
                message.channel.send("```You beat the " + optionsname + " to death and live to fight another day.```")
                sgscore += 1
                choose = 0
                choosecmd(message)
            } else if ((outcome > 3) && (outcome < 7))  {
                message.delete(1)
                message.channel.send("```The " + optionsname + " was stronger then they looked and strangled you to death. Your score was " + sgscore + ".```")
                choose = 0
                diecmd(message)
            } else if (outcome > 6) {
                message.delete(1)
                message.channel.send("```The " + optionsname + " snapped your neck before you could even lay a finger on them. Your score was " + sgscore + ".```")
                choose = 0
                diecmd(message)
            }

        }

       
        if (firstcommand.includes("4") && (ammo > 0)) {
            if (outcome < 5) {
                message.delete(1)
                ammo -= 1
                message.channel.send("```You shot the " + optionsname + " and they fell right to the ground.```")
                sgscore += 1
                choose = 0
                choosecmd(message)
            } else if (outcome == 5) {
                message.delete(1)
                message.channel.send("```Your gun jammed and the " + optionsname + " cut you into a million pieces. Your score was " + sgscore + ".```")
                choose = 0
                diecmd(message)
            } else if (outcome > 5) {
                message.delete(1)
                message.channel.send("```You started pulling out you gun, but the " + optionsname + " pulled out their's quicker and shot you seven times. Your score was " + sgscore + ".```")
                choose = 0
                diecmd(message)
            }

        } else if (firstcommand.includes("4") && (ammo < 1)) {
            if (outcome < 4) {
                message.delete(1)
                message.channel.send("```Thankfully the " + optionsname + " was scared when you pulled out your gun, because you have no ammo.```")
                sgscore += 1
                choose = 0
                choosecmd(message)
            } else if (outcome > 3) {
                message.delete(1)
                message.channel.send("```You pulled out your gun to shoot the " + optionsname + ", but you didn't have any ammo so the " + optionsname + " ran at you and slit your throat. Your score was " + sgscore + ".```")
                choose = 0
                diecmd(message)
            }
        } 
    }

    if (choose == 2) {

        if (firstcommand.includes("1")) {
            if (outcome <= 1) {
                message.delete(1)
                ammo += 3
                message.channel.send("```You picked up 3 ammo.```")
                sgscore += 1
                choose = 0
                choosecmd(message)
            } else if (outcome == 2) {
                message.delete(1)
                ammo += 5
                message.channel.send("```You picked up 5 ammo.```")
                sgscore += 1
                choose = 0
                choosecmd(message)
            } else if (outcome == 3) {
                message.delete(1)
                ammo += 7
                message.channel.send("```You picked up 7 ammo.```")
                sgscore += 1
                choose = 0
                choosecmd(message)
            } else if (outcome >= 4) {
                message.delete(1)
                ammo += 9
                message.channel.send("```You picked up 9 ammo.```")
                sgscore += 1
                choose = 0
                choosecmd(message)
            }
            
        }

        if (firstcommand.includes("2")) {
            if (outcome < 3) {
                message.delete(1)
                message.channel.send("```Well the ammo blew up, it looked cool, but probably was a waste.```")
                sgscore += 2
                choose = 0
                choosecmd(message)
            } else if (outcome > 2) {
                message.delete(1)
                message.channel.send("```You weren't always the sharpest knife in the drawer and you stood too close when the ammo blew up. Your score was " + sgscore + ".```")
                choose = 0
                diecmd(message)
            }

        }

        if (firstcommand.includes("3")) {
            message.delete(1)
            message.channel.send("```I guess you were in a hurry and decided that stopping to pick up ammo wasn't worth it.```")
            sgscore += 1
            choose = 0
            choosecmd(message)
        }

    }

    if (choose == 3) {

        if (firstcommand.includes("1")) {
        if (ammo > 0) {
            if (outcome < 4) {
                message.delete(1)
                ammo -= 1
                sgscore += 1
                if (sgnum == 11) {
                    sgfood += 3
                    message.channel.send("```You shot the " + optionsname + " and got 3 food from it.```")
                } else if (sgnum == 10) {
                    sgfood += 4
                    message.channel.send("```You shot the " + optionsname + " and got 4 food from it.```")
                } else if (sgnum == 12) {
                    sgfood+= 10
                    message.channel.send("```You shot the " + optionsname + " and got 10 foodfrom it.```")
                }
                choose = 0
                choosecmd(message)
            } else if (outcome > 3) {
                message.delete(1)
                if (ammo > 2) {
                    ammo -= 3
                    message.channel.send("```You missed the " + optionsname + " and wasted 3 ammo.```")
                } else if (ammo < 3) {
                    ammo = 0
                    message.channel.send("```You missed the " + optionsname + " and wasted the rest of your ammo.```")
                }
                choose = 0
                choosecmd(message)
            }
        } else if (ammo < 1) {
            message.channel.send("```The gun only clicked when you shot because you didn't have any ammmo left.```")
            ammo = 0
            choose = 0
            choosecmd(message)
        }
        }

        if (firstcommand.includes("2")) {
            message.delete(1)
            sgscore += 3
            message.channel.send("```You let the " + optionsname + " go and saved your ammo.```")
            choose = 0
            choosecmd(message)
        }

    }

    if (choose == 4) {

        if (firstcommand.includes("1")) {
        if (ammo > 0) {
            if (outcome < 5) {
                message.delete(1)
                sgscore += 1
                ammo -= 1
                sgfood+= 5
                message.channel.send("```You shot the " + optionsname + " right between the eyes and got 5 foodfrom it.```")
                choose = 0
                choosecmd(message)
            } else if ((outcome > 4) && (outcome < 8)) {
                message.delete(1)
                message.channel.send("```You missed the " + optionsname + " and it ripped your flesh apart. Your score was " + sgscore + ".```")
                choose = 0
                diecmd(message)
            } else if (outcome > 7) {
                message.delete(1)
                message.channel.send("```Your bullets didn't stop the " + optionsname + " and it ate you alive. Your score was " + sgscore + ".```")
                choose = 0
                diecmd(message)
            }

        } else if (ammo < 0) {
            message.channel.send("```You had no ammo and the " + optionsname + " had you for dinner. Your score was " + sgscore + ".```")
            choose = 0
            diecmd(message)
        }
        }

        if (firstcommand.includes("2")) {
            if (outcome < 4) {
                message.delete(1)
                sgscore += 2
                message.channel.send("```The " + optionsname + " watched you as you passed by it, but left you alone.```")
                choose = 0
                choosecmd(message)
            } else if (outcome > 3) {
                message.delete(1)
                message.channel.send("```You might have wanted to ignore the " + optionsname + ", but it had other plans about you. Your score was " + sgscore + ".```")
                choose = 0
                diecmd(message)
            }
        }

        if (firstcommand.includes("3")) {
            if (outcome < 4) {
                message.delete(1)
                sgscore += 3
                sgfood-= 3
                message.channel.send("```You gave the " + optionsname + " 3 food, but kept it from eating you.```")
                choose = 0
                choosecmd(message)
            } else if (outcome > 3) {
                message.delete(1)
                message.channel.send("```The " + optionsname + " nibbled on a little more than your sgfoodfor him. Your score was " + sgscore + ".```")
                choose = 0
                diecmd(message)
            }
        }

    }

}
    function choosecmd(message) {
    if (sgfood> 0) {
        if (resume == 0) {
            sgnum = (Math.ceil(Math.random() * 16))
            outcome = (Math.ceil(Math.random() * sghardness))
            day += 1
            sgfood-= 1
        }
        if (sgnum <= 1) {
            resume = 0
            choose = 1
            options = 1
            sghardness = 6
            optionsname = "hooded figure"
            message.channel.send("----------------------------------------\n**Day " + day + "**\nFood remaining: "+ sgfood)
            message.channel.send("You see a hooded figure...")
            message.channel.send("1. Start a conversation with the " + optionsname + "\n2. Ignore the " + optionsname + " and walk past them\n3. Punch the " + optionsname + " to death\n4. Shoot the " + optionsname + " (" + ammo + " ammo left)")
        } else if (sgnum == 2) {
            resume = 0
            choose = 1
            options = 2
            sghardness = 4
            optionsname = "homeless man"
            message.channel.send("----------------------------------------\n**Day " + day + "**\nFood remaining: "+ sgfood)
            message.channel.send("You see a homeless man...")
            message.channel.send("1. Start a conversation with the " + optionsname + "\n2. Ignore the " + optionsname + " and walk past them\n3. Punch the " + optionsname + " to death\n4. Shoot the " + optionsname + " (" + ammo + " ammo left)")
        } else if (sgnum == 3) {
            resume = 0
            choose = 1
            options = 3
            sghardness = 5
            optionsname = "man in a suit"
            message.channel.send("----------------------------------------\n**Day " + day + "**\nFood remaining: "+ sgfood)
            message.channel.send("You see a man in a suit...")
            message.channel.send("1. Start a conversation with the " + optionsname + "\n2. Ignore the " + optionsname + " and walk past them\n3. Punch the " + optionsname + " to death\n4. Shoot the " + optionsname + " (" + ammo + " ammo left)")

        } else if (sgnum == 4) {
            resume = 0
            choose = 1
            options = 4
            sghardness = 7
            optionsname = "old man with a cane"
            message.channel.send("----------------------------------------\n**Day " + day + "**\nFood remaining: "+ sgfood)
            message.channel.send("You see an old man with a cane...")
            message.channel.send("1. Start a conversation with the " + optionsname + "\n2. Ignore the " + optionsname + " and walk past them\n3. Punch the " + optionsname + " to death\n4. Shoot the " + optionsname + " (" + ammo + " ammo left)")
        } else if (sgnum == 5) {
            resume = 0
            choose = 1
            options = 5
            sghardness = 4
            optionsname = "teenager on their phone"
            message.channel.send("----------------------------------------\n**Day " + day + "**\nFood remaining: "+ sgfood)
            message.channel.send("You see a teenager on their phone...")
            message.channel.send("1. Start a conversation with the " + optionsname + "\n2. Ignore the " + optionsname + " and walk past them\n3. Punch the " + optionsname + " to death\n4. Shoot the " + optionsname + " (" + ammo + " ammo left)")
        } else if (sgnum == 6) {
            resume = 0
            choose = 1
            options = 6
            sghardness = 8
            optionsname = "clown"
            message.channel.send("----------------------------------------\n**Day " + day + "**\nFood remaining: "+ sgfood)
            message.channel.send("You see a clown...")
            message.channel.send("1. Start a conversation with the " + optionsname + "\n2. Ignore the " + optionsname + " and walk past them\n3. Punch the " + optionsname + " to death\n4. Shoot the " + optionsname + " (" + ammo + " ammo left)")
        } else if (sgnum == 7) {
            resume = 0
            choose = 1
            options = 7
            sghardness = 5
            optionsname = "man sleeping"
            message.channel.send("----------------------------------------\n**Day " + day + "**\nFood remaining: "+ sgfood)
            message.channel.send("You see a man sleeping...")
            message.channel.send("1. Start a conversation with the " + optionsname + "\n2. Ignore the " + optionsname + " and walk past them\n3. Punch the " + optionsname + " to death\n4. Shoot the " + optionsname + " (" + ammo + " ammo left)")
        } else if (sgnum == 8) {
            resume = 0
            choose = 1
            options = 8
            sghardness = 4
            optionsname = "kid on a bike"
            message.channel.send("----------------------------------------\n**Day " + day + "**\nFood remaining: "+ sgfood)
            message.channel.send("You see a kid on a bike...")
            message.channel.send("1. Start a conversation with the " + optionsname + "\n2. Ignore the " + optionsname + " and walk past them\n3. Punch the " + optionsname + " to death\n4. Shoot the " + optionsname + " (" + ammo + " ammo left)")
        } else if (sgnum == 9) {
            resume = 0
            choose = 2
            options = 9
            sghardness = 4
            optionsname = "ammo on the ground"
            message.channel.send("----------------------------------------\n**Day " + day + "**\nFood remaining: "+ sgfood)
            message.channel.send("You see some ammo on the ground...")
            message.channel.send("1. Pick it up\n2. Shoot it and blow it up\n3. Keep walking and leave it on the ground")
        } else if (sgnum == 10) {
            resume = 0
            choose = 3
            options = 10
            sghardness = 4
            optionsname = "rabbit"
            message.channel.send("----------------------------------------\n**Day " + day + "**\nFood remaining: "+ sgfood)
            message.channel.send("You see a rabbit on the path...")
            message.channel.send("1. Try to shoot it (" + ammo + " ammo left)\n2. Let it live and save the ammo")
        } else if (sgnum == 11) {
            resume = 0
            choose = 3
            options = 11
            sghardness = 4
            optionsname = "squirrel"
            message.channel.send("----------------------------------------\n**Day " + day + "**\nFood remaining: "+ sgfood)
            message.channel.send("You see a squirrel in the tree...")
            message.channel.send("1. Try to shoot it (" + ammo + " ammo left)\n2. Let it live and save the ammo")
        } else if (sgnum == 12) {
            resume = 0
            choose = 3
            options = 12
            sghardness = 4
            optionsname = "deer"
            message.channel.send("----------------------------------------\n**Day " + day + "**\nFood remaining: "+ sgfood)
            message.channel.send("You see a deer up ahead...")
            message.channel.send("1. Try to shoot it (" + ammo + " ammo left)\n2. Let it live and save the ammo")
        } else if (sgnum == 13 ) {
            resume = 0
            choose = 1
            options = 13
            sghardness = 6
            optionsname = "hunter"
            message.channel.send("----------------------------------------\n**Day " + day + "**\nFood remaining: "+ sgfood)
            message.channel.send("You see a hunter carrying a gun in the distance...")
            message.channel.send("1. Start a conversation with the " + optionsname + "\n2. Ignore the " + optionsname + " and walk past them\n3. Punch the " + optionsname + " to death\n4. Shoot the " + optionsname + " (" + ammo + " ammo left)")
        } else if (sgnum == 14 ) {
            resume = 0
            choose = 1
            options = 14
            sghardness = 5
            optionsname = "fisherman"
            message.channel.send("----------------------------------------\n**Day " + day + "**\nFood remaining: "+ sgfood)
            message.channel.send("You see a fisherman walking towards you...")
            message.channel.send("1. Start a conversation with the " + optionsname + "\n2. Ignore the " + optionsname + " and walk past them\n3. Punch the " + optionsname + " to death\n4. Shoot the " + optionsname + " (" + ammo + " ammo left)")
        } else if (sgnum == 15 ) {
            resume = 0
            choose = 4
            options = 15
            sghardness = 6
            optionsname = "tiger"
            message.channel.send("----------------------------------------\n**Day " + day + "**\nFood remaining: "+ sgfood)
            message.channel.send("You see a tiger looking right at you...")
            message.channel.send("1. Try to shoot the " + optionsname + "\n2. Ignore the " + optionsname + " and hope they're not too interested in you\n3. Throw some food at the " + optionsname + " (" + ammo + " ammo left)")
        } else if (sgnum == 16 ) {
            resume = 0
            choose = 4
            options = 16
            sghardness = 10
            optionsname = "T-Rex"
            message.channel.send("----------------------------------------\n**Day " + day + "**\nFood remaining: "+ sgfood)
            message.channel.send("You see a T-Rex eating a person up ahead...")
            message.channel.send("1. Try to shoot the " + optionsname + "\n2. Ignore the " + optionsname + " and hope they're not too interested in you\n3. Throw some food at the " + optionsname + " (" + ammo + " ammo left)")
        }
        firstcommand = "0"
    } else {
        message.channel.send("```You ran out of food and starved to death. Your score was **" + sgscore + "**.```")
        choose = 0
        diecmd(message)
    }
}

}

    //End survival game//////////////////////////////////////////////////////////////////////////////////////////////////////////

    function helpcmd(message) {
        message.delete(1)
        message.channel.send("```//aoc [Radius] - calculates the area of circle\n//coc [Radius] - calculates the circumference of a circle\n//sqrt [Number] - calculates the square root of a number\n//flipcoin - flips a coin\n//rolldice - rolls a die\n//adminhelp - displays admin commands (requires password)```")
    }

    function mutecmd(message) {
        mute = 2
        message.channel.send("I will stop talking now.")
        muter = 0;
        db.run(`UPDATE servers SET mute = ? WHERE userid = ?`, [2, userid]);
    }

    function unmutecmd(message) {
        mute = 1
        message.channel.send("Thanks! It was so hard not to talk to you guys")
        unmuter = 0;
        db.run(`UPDATE servers SET mute = ? WHERE userid = ?`, [1, userid]);
    }

    function clearcmd(message) {
        commandnumber = parseInt(commandnumber, 10)
        if ((commandnumber <= 100) && (commandnumber > 0)) {
            message.channel.bulkDelete(commandnumber)
            message.channel.send("```I deleted " + commandnumber + " message(s).```").then(msg => msg.delete(5000))
            .catch();
            } else if (commandnumber > 100) {
            message.channel.bulkDelete(100)
            message.channel.send("```I deleted 100 messages.```").then(msg => msg.delete(5000))
              .catch();
            } else if (commandnumber < 1) {
                message.channel.send("```You did not specify the number of messages to delete, try //clear [Number].```")
            }
            cmdnumber = 0
    }

    function adminhelpcmd(message) {
    message.channel.send("```All these commands will require a password:\n//setpassword - sets or changes a password\n//clear [Number] - deletes a specific number of messages\n//mute - mutes Steve from replying to chats (not commands)\n//unmute - unmutes Steve\n//lock - locks admin commands to that they require a password\n//unlock - unlocks these commands so anyone can use them\n//setcd [number] - sets how long before Steve will respond again in seconds\n//sale [percent off] [number] [seconds/minutes/hours] - creates a sale for doggo game\n//sale end - ends the sale for doggo game```")
    adminhelp = 0
    }

    function cooldowncmd(message) {
    if (commandtext !== undefined) {
        if ((commandtext.includes("m")) || (commandtext.includes("minute"))) {
            intletter = "m"
            letter = "minute(s)"
        } else if ((commandtext.includes("h")) || (commandtext.includes("hour"))) {
            intletter = "h"
            letter = "hour(s)"
        } else if ((commandtext.includes("s")) || (commandtext.includes("second"))) {
            intletter = "s"
            letter = "second(s)"
        }
        interval = commandnumber
        console.log(interval + intletter);
        db.run(`UPDATE users SET cmdnumber = ? WHERE userid = ?`, [0, userid]);
        db.run(`UPDATE users SET cmdpassenter = ? WHERE userid = ?`, [0, userid]);
        db.run(`UPDATE users SET cmdchannelid = ? WHERE userid = ?`, [0, userid]);
        db.run(`UPDATE servers SET interval = ? WHERE guildid = ?`, [interval, guildid]);
        db.run(`UPDATE servers SET intletter = ? WHERE guildid = ?`, [intletter, guildid]);
        message.channel.send("```Interval set to " + interval + " " + letter + ".```")
    } else {
        message.channel.send("```Use //setcd [number] [seconds/minutes/hours] to set the cooldown.```")
    }
    return
    }

    function leaderboardcmd(message) {
        message.delete(1)
        message.channel.send("```Your personal high score is " + sgscore + " points.```")
        message.channel.send("```1st: " + hsname1 + " with " + highscore1 + " points\n2nd: " + hsname2 + " with " + highscore2 + " points\n3rd: " + hsname3 + " with " + highscore3 + " points```")
    }

    function diecmd(message) {
        if (sgscore > highscore1) {
            hsname3 = hsname2
            highscore3 = highscore2
            hsname2 = hsname1
            highscore2 = highscore1
            hsname1 = username
            highscore1 = sgscore;
            db.run(`UPDATE servers SET hsname3 = ? WHERE guildid = ?`, [hsname3, guildid]);
            db.run(`UPDATE servers SET highscore3 = ? WHERE guildid = ?`, [highscore3, guildid]);
            db.run(`UPDATE servers SET hsname2 = ? WHERE guildid = ?`, [hsname2, guildid]);
            db.run(`UPDATE servers SET highscore2 = ? WHERE guildid = ?`, [highscore2, guildid]);
            db.run(`UPDATE servers SET hsname1 = ? WHERE guildid = ?`, [hsname1, guildid]);
            db.run(`UPDATE servers SET highscore1 = ? WHERE guildid = ?`, [highscore1, guildid]);
            message.channel.send("```" + hsname1 + " is now in 1st place.```" )
        } else if (sgscore > highscore2) {
            hsname3 = hsname2
            highscore3 = highscore2
            hsname2 = username
            highscore2 = sgscore;
            db.run(`UPDATE servers SET hsname3 = ? WHERE guildid = ?`, [hsname3, guildid]);
            db.run(`UPDATE servers SET highscore3 = ? WHERE guildid = ?`, [highscore3, guildid]);
            db.run(`UPDATE servers SET hsname2 = ? WHERE guildid = ?`, [hsname2, guildid]);
            db.run(`UPDATE servers SET highscore2 = ? WHERE guildid = ?`, [highscore2, guildid]);
            message.channel.send("```" + hsname2 + " is now in 2nd place.```" )
        } else if (sgscore > highscore3) {
            hsname3 = username
            highscore3 = sgscore;
            db.run(`UPDATE servers SET hsname3 = ? WHERE guildid = ?`, [hsname3, guildid]);
            db.run(`UPDATE servers SET highscore3 = ? WHERE guildid = ?`, [highscore3, guildid]);
            message.channel.send("```" + hsname3 + " is now in 3rd place.```" )
        }

        if (userscore < sgscore) {
            db.run(`UPDATE users SET sgscore = ? WHERE userid = ?`, [sgscore, userid]);
        }

    }

    function getdatacmd(message) {
        message.delete(1)
        if (userid != MetalRain) {
            message.channel.send(permissionmsg)
            return
        }
        if (thirdcommand === undefined) {
            message.channel.send("```Please use //gd [server/serverdata/user's parameter] [ID/other parameter]```")
            return
        }
    if (secondcommand != "db") {
        if (secondcommand == "server") {
            if (thirdcommand == "here") {
                thirdcommand = guildid
            }
            let serverinfo = `SELECT password, passwordnum, lock, hsname1, highscore1, hsname2, highscore2, hsname3, highscore3, sgscore, glevel, glevelmin, ggnum, mute, cooldowntime, interval, intletter, lockenter, locknum, cmdnumber FROM servers WHERE guildid = ?`;
    db.get(serverinfo, [thirdcommand], (err, row) => {
        if (err) {
            console.log(err)
        }
        if (row === undefined) {
            message.channel.send("```Can't find server.```")
            return
        } else {
            password = row.password
            passwordnum = row.passwordnum
            lock = row.lock
            hsname1 = row.hsname1
            highscore1 = row.highscore1
            hsname2 = row.hsname2
            highscore2 = row.highscore2
            hsname3 = row.hsname3
            highscore3 = row.highscore3
            sgscore = row.sgscore
            glevel = row.glevel
            glevelmin = row.glevelmin
            ggnum = row.ggnum
            mute = row.mute
            cooldowntime = row.cooldowntime
            interval = row.interval
            intletter = row.intletter
            lockenter = row.lockenter
            locknum = row.locknum
            cmdnumber = row.cmdnumber

            message.channel.send("```Password:     " + password + "\nPasswordnum:  " + passwordnum + "\nlock:         " + lock + "\nHighscore 1: " + hsname1 + "     " + highscore1 + "\nHighscore 2: " + hsname2 + "     " + highscore2 + "\nHighscore 3: " + hsname3 + "     " + highscore3 + "\nSgscore:      " + sgscore + "\nGlevel:       " + glevel + "\nGlevelmin:    " + glevelmin + "\nGgnum:        " + ggnum + "\nMute:         " + mute + "\nCooldowntime: " + cooldowntime + "\nInterval:     " + interval + "\nIntletter:    " + intletter + "\nLockenter:    " + lockenter + "\nLocknum:      " + locknum + "\nCmdnumber:    " + cmdnumber + "```")
            }
        });
        } else if (secondcommand == "serverdata") {

        } else {
        if (secondcommand == "me") {
            casesecondcommand = username
        }
        if (messagementions == true) {
            casesecondcommand = mentionusername
        }
    }
    } else if (secondcommand == "db") {
        message.channel.send( {files: ["./STG.db"]} );
    }
    return
}

    function updatedatacmd(message) {
        message.delete(1)
        var minus = 0
        var plus = 0
        if (userid == MetalRain) {
            message.channel.send(permissionmsg)
            return
        }
        if (secondcommand == "me") {
            casesecondcommand = username
        }
        if (messagementions == true) {
            casesecondcommand = mentionusername
        }
        if (dats[casesecondcommand] === undefined) {
            message.channel.send("```" + casesecondcommand + " does not exist, make sure you typed it correctly.```")
            return
        }
        if (dats[casesecondcommand][thirdcommand] === undefined) {
            message.channel.send("```" + casesecondcommand + "'s " + thirdcommand + " does not exist, make sure you typed it correctly.```")
            return
        } else {
            newjsondata = casefourthcommand
            jsondata = dats[casesecondcommand][thirdcommand]
            if (fourthcommand.includes("-")) {
                minus = 1
                fourthcommand = fourthcommand.slice(1)
            } else if (fourthcommand.includes("+")) {
                plus = 1
                fourthcommand = fourthcommand.slice(1)
            }
        if (isNaN(fourthcommand) == false) {
            newjsondata = parseInt(fourthcommand, 10);
        }
        if (fourthcommand == "1") {
            newjsondata = 1
        } else if (fourthcommand == "0") {
            newjsondata = 0
        }
        if (fourthcommand == "todayms") {
            newjsondata = todayms
        }
        if (minus == 1) {
            if (isNaN((dats[casesecondcommand][thirdcommand]) == true) || (isNaN(fourthcommand) == true)) {
                message.channel.send("```Data type is not a number.```")
                return
            }
            newjsondata = ((dats[casesecondcommand][thirdcommand]) - (parseInt(fourthcommand, 10)));
        } else if (plus == 1) {
            if (isNaN((dats[casesecondcommand][thirdcommand]) == true) || (isNaN(fourthcommand) == true)) {
                message.channel.send("```Data type is not a number.```")
                return
            }
            newjsondata = ((dats[casesecondcommand][thirdcommand]) + (parseInt(fourthcommand, 10)));
        }
        dats[casesecondcommand][thirdcommand] = newjsondata
        fs.writeFileSync ("./STG.json", JSON.stringify(dats, null, 1), err => {
            if (err) throw err;
        });
        if ((isNaN(jsondata) == false) && (isNaN(newjsondata) == false)) {
            if (newjsondata > jsondata) {
                message.channel.send("```" + casesecondcommand + "'s " + thirdcommand + " updated from " + jsondata + " to " + newjsondata + " (+" + (newjsondata - jsondata) + ")```")
            } else {
                message.channel.send("```" + casesecondcommand + "'s " + thirdcommand + " updated from " + jsondata + " to " + newjsondata + " (-" + (jsondata - newjsondata) + ")```")
            }
        } else {
            message.channel.send("```" + casesecondcommand + "'s " + thirdcommand + " updated from " + jsondata + " to " + newjsondata + "```")
        }
            }
        }

    function versioncmd(message) {
        message.delete(1)
        message.channel.send(version)
    }

    function resetcdcmd(message) {
        db.run(`UPDATE servers SET cooldowntime = ? WHERE guildid = ?`, [todayms, guildid]);
        db.run(`UPDATE servers SET cmdnumber = ? WHERE guildid = ?`, [0, guildid]);
        message.channel.send("```Cooldown reset.```")
    }

    function dmcmd(message) {
        if (userid == MetalRain) {
        if (message.mentions.users.first() !== undefined) {
            mention = message.mentions.users.first()
            mentionusername = message.mentions.users.first().tag
            messagementions = true
        } else {
            const user = client.users.get(secondcommand)
            if (user) {

            } else {
                message.channel.send("```Bad ID Number.```")
            }
        }
        if (thirdcommand === undefined) {
            message.channel.send("```Please say what you want to send.```")
            return
        }
        commandnumber = (secondcommand.length + 6)
        commandtext = casecommand.slice(commandnumber)
        if (messagementions == true) {
            mention.send(commandtext)
        } else {
            const user = client.users.get(secondcommand)
            user.send(commandtext)
        }
       
        } else {
            message.channel.send("```You don't have permission to do that.```")
            return
        }
    }

    //Start doggo game///////////////////////////////////////////////////////////////////////////////////////////////////////////

    function doggogamecmd(message) {

        number = (Math.ceil(Math.random() * 10))
        injurynum = (Math.ceil(Math.random() * 100))
        username2 = "none"

        if (currentdoggo == "regulardoggo") {
            currentdoggo = regulardoggo
        }

        if (house == "1story") {
            housename = "1 story"
        } else if (house == "2story") {
            housename = "2 story"
        } else if (house == "3story") {
            housename = "3 story"
        } else {
            housename = house
        }

        if ((salary == 0) && (currentjob != "none")) {
            salary = (gamedata[currentjob].jobsalary);
            db.run(`UPDATE users SET salary = ? WHERE userid = ?`, [salary, userid]);
        }
        if ((killdog == 1) && (firstcommand.includes("//"))) {
            message.channel.send("```" + doggoname + " has been destroyed.```")
            return
        }

        if ((saleprice != 1) && (saletime <= todayms)) {
            saleprice = 1
        const salechannel = client.channels.get(eventid);
        if (salechannel) {
            salechannel.fetchMessages({ limit: 2 })
            .then(messages => {
                msgsize = messages.size
        if (msgsize >= 1) {
            salechannel.fetchMessage(salemsgid)
            .then(messages => {
            messages.delete(1);
            db.run(`UPDATE serverdata SET saleprice = ? WHERE testdata = ?`, [1, 1234]);
            db.run(`UPDATE serverdata SET saletime = ? WHERE testdata = ?`, [0, 1234]);
            db.run(`UPDATE serverdata SET salemsgid = ? WHERE testdata = ?`, [0, 1234]);
        });
        }
        });
        }
        }
        if ((ebprice != 1) && (ebtime <= todayms)) {
            ebprice = 1
        const salechannel = client.channels.get(eventid);
        if (salechannel) {
            salechannel.fetchMessages({ limit: 2 })
            .then(messages => {
                msgsize = messages.size
        if (msgsize >= 1) {
            salechannel.fetchMessage(ebmsgid)
            .then(messages => {
            messages.delete(1);
            db.run(`UPDATE serverdata SET ebprice = ? WHERE testdata = ?`, [1, 1234]);
            db.run(`UPDATE serverdata SET ebtime = ? WHERE testdata = ?`, [0, 1234]);
            db.run(`UPDATE serverdata SET ebmsgid = ? WHERE testdata = ?`, [0, 1234]);
        });
        }
        });
        }
        }
        if (currentjob == "none") {
            jobname = "none"
            experience = 0
        } else {
            if (currentjob == "cg") {
                experience = cgexp
                expname = "cgexp"
                jobname = cgname
                jobsalary = cgsalary
                jobtime = cgtime
                joblength = cglength
                workenergy = ((jobtime / bsleepstatlose) + 5)
            } else if (currentjob == "md") {
                experience = mdexp
                expname = "mdexp"
                jobname = mdname
                jobsalary = mdsalary
                jobtime = mdtime
                joblength = mdlength
                workenergy = ((jobtime / bsleepstatlose) + 5)
            } else if (currentjob == "brd") {
                experience = brdexp
                expname = "brdexp"
                jobname = brdname
                jobsalary = brdsalary
                jobtime = brdtime
                joblength = brdlength
                workenergy = ((jobtime / bsleepstatlose) + 5)
            } else if (currentjob == "dd") {
                experience = ddexp
                expname = "ddexp"
                jobname = ddname
                jobsalary = ddsalary
                jobtime = ddtime
                joblength = ddlength
                workenergy = ((jobtime / bsleepstatlose) + 5)
            } else if (currentjob == "pd") {
                experience = pdexp
                expname = "pdexp"
                jobname = pdname
                jobsalary = pdsalary
                jobtime = pdtime
                joblength = pdlength
                workenergy = ((jobtime / bsleepstatlose) + 5)
            } else if (currentjob == "sd") {
                experience = sdexp
                expname = "sdexp"
                jobname = sdname
                jobsalary = sdsalary
                jobtime = sdtime
                joblength = sdlength
                workenergy = ((jobtime / bsleepstatlose) + 5)
            }
        }
        explevel = ((Math.floor(experience / 10)) + 1)

        if (doggosex == "female") {
            doggonoun = "she"
            doggowords = "her"
            doggoobject = "her"
        } else if (doggosex == "male") {
            doggonoun = "he"
            doggowords = "his"
            doggoobject = "him"
        }

        agetime = (Math.round((todayms - doggocreatedtime)))
        ageyears = (Math.floor((agetime / 51840000)))
        agemonths = (Math.floor(((agetime - (ageyears * 51840000)) / 4320000)))
        age = (ageyears + " years " + agemonths + " months")

        if ((todayms > gifttime) && (firstcommand.includes("//")) && (firstcommand != "//open") && (doggoname != "none") && (working == 0) && (firstcommand != "//help")) {
            message.channel.send("```" + doggoname + " has a daily gift box to open! use //open gift to open it.```")
        }

        if ((todayms > naptime) && (firstcommand.includes("//")) && (naptime != 0) && (doggoname != "none") && (sleeping == 0)) {
            if (working == 1) {
                message.channel.send("```" + doggoname + " took a nap at work after " + doggowords + " shift was over.```")
            } else if (working == 0) {
                message.channel.send("```" + doggoname + " started napping while you were gone.```")
            }
        }

        if ((todayms > doggotime) && (doggotime != 0)) {
            if (bed == "none") {
                db.run(`UPDATE users SET sleepstatgain = ? WHERE userid = ?`, [bsleepstatgain, userid]);
                db.run(`UPDATE users SET doggotime = ? WHERE userid = ?`, [0, userid]);
            } else if (bed != "none") {
                sleepstatgain = Math.round((bsleepstatgain * ((1/(gamedata[bed].bedincrease)))));
                db.run(`UPDATE users SET sleepstatgain = ? WHERE userid = ?`, [sleepstatgain, userid]);
                db.run(`UPDATE users SET doggotime = ? WHERE userid = ?`, [0, userid]);
            }
            message.channel.send("```" + doggoname + "'s 48 hour 1.5x energy boost has worn off.```")
        }
        
        if ((fullcommand.includes("//")) && ((doggoname == "none") || (doggosex == "none"))) { //making dog stage 1
            message.delete(1)
            message.channel.send("```You do not have a dog, enter a name for him/her:```");
            db.run(`UPDATE users SET doggocreate = ? WHERE userid = ?`, [1, userid]);
            db.run(`UPDATE users SET cmdchannelid = ? WHERE userid = ?`, [(message.channel.id), userid]);
            return
        }

        if ((foodnum <= 25) && (money < 5) && (working == 0) && (energynum < 75) && (foodservings == 0)) {
            message.channel.send("```A good person noticed that you were hungry and gave you $10.```")
            money += 10
            db.run(`UPDATE users SET money = ? WHERE userid = ?`, [money, userid]);
        }

        if ((doggocreate == 1) && (message.channel.id == cmdchannelid)) { //making dog stage 2
            message.delete(1)
            if (firstcommand == "none") {
                message.channel.send("```You can't use that name, please pick a different name:```")
            }
            doggoname = casefirstcommand
            message.channel.send("```Your dog is now named " + doggoname + "\nPlease enter a gender [male/female]:```")
            db.run(`UPDATE users SET doggocreate = ? WHERE userid = ?`, [2, userid]);
            db.run(`UPDATE users SET doggoname = ? WHERE userid = ?`, [doggoname, userid]);
        } else if ((doggocreate == 2) && (message.channel.id == cmdchannelid)) { //finishing making of dog
            message.delete(1)
            if ((firstcommand == "female") || (firstcommand == "male")) {
                doggosex = firstcommand;
                db.run(`UPDATE users SET sleepstatgain = ? WHERE userid = ?`, [(bsleepstatgain * (1/1.5)), userid]);
                db.run(`UPDATE users SET doggosex = ? WHERE userid = ?`, [firstcommand, userid]);
                db.run(`UPDATE users SET doggocreate = ? WHERE userid = ?`, [0, userid]);
                db.run(`UPDATE users SET cmdchannelid = ? WHERE userid = ?`, [0, userid]);
                db.run(`UPDATE users SET doggotime = ? WHERE userid = ?`, [(todayms + 172800000), userid]);
                db.run(`UPDATE users SET doggocreatedtime = ? WHERE userid = ?`, [todayms, userid]);
                message.channel.send("```Congrats! " + doggoname + " is " + doggosex + " and can now go out into the world! Your body has been transformed into a dog and you can now do what dogs do.\nFor 48 hours you will have 1.5x energy earned to help you get on your feet...      or should I say paws. Use //help for help.```")
            } else {
                message.channel.send("```Please choose male/female:```")
            }
            
        }

        if (firstcommand.includes("//")) {
            db.run(`UPDATE users SET lastinttime = ? WHERE userid = ?`, [todayms, userid]);
            db.run(`UPDATE users SET naptime = ? WHERE userid = ?`, [(todayms + 21600000), userid]);
        }

        if ((todayms >= (statsupdatetime + 900000)) || (firstcommand.includes("wake")) || (firstcommand.includes("sleep")) || (firstcommand.includes("play")) || (firstcommand.includes("eat"))) { //let's the stats update code know to update the stats
            statsupdate = 1;
        } else {
            statsupdate = 0;
        }
        if (statsupdate == 1) {
            realstatsupdatetime = statsupdatetime
            if (sleeping == 1) {
                if (energynum < 100) {
                    energynum += (Math.round((todayms - statsupdatetime) / sleepstatgain))
                if (energynum < 0) {
                    energynum = 0
                } else if (energynum > 100) {
                    energynum = 100
                    }
                }
                if (foodnum > 0) {
                    foodnum -= (Math.round((todayms - statsupdatetime) / (foodstatlose * 3)))
                if (foodnum < 0) {
                    foodnum = 0
                    }
                }
                if (status != "playing") {
                if (playnum > 0) {
                    playnum -= (Math.round((todayms - statsupdatetime) / playstatlose))
                if (playnum < 0) {
                    playnum = 0
                    }
                }
                }
                statsupdatetime = todayms;
                db.run(`UPDATE users SET statsupdatetime = ? WHERE userid = ?`, [statsupdatetime, userid]);
                db.run(`UPDATE users SET energynum = ? WHERE userid = ?`, [energynum, userid]);
                db.run(`UPDATE users SET foodnum = ? WHERE userid = ?`, [foodnum, userid]);
                db.run(`UPDATE users SET playnum = ? WHERE userid = ?`, [playnum, userid]);
            } else if (sleeping == 0) {
                if ((todayms < naptime) || (naptime < todayms)) {
                    if (todayms > naptime) {
                        statsupdatetime = (todayms - (naptime - statsupdatetime))
                    }
                    if (energynum > 0) {
                    energynum -= (Math.round((todayms - statsupdatetime) / sleepstatlose))
                    if (energynum < 0) {
                    energynum = 0
                    }
                }
                }
                statsupdatetime = realstatsupdatetime
                if (foodnum > 0) {
                    foodnum -= (Math.round((todayms - statsupdatetime) / foodstatlose))
                    if (foodnum < 0) {
                    foodnum = 0
                    }
                }
                if (status != "playing") {
                if (playnum > 0) {
                    playnum -= (Math.round((todayms - statsupdatetime) / (playstatlose * 1.2)))
                if (playnum < 0) {
                    playnum = 0
                    }
                }
                }
                statsupdatetime = todayms;
                db.run(`UPDATE users SET statsupdatetime = ? WHERE userid = ?`, [statsupdatetime, userid]);
                db.run(`UPDATE users SET energynum = ? WHERE userid = ?`, [energynum, userid]);
                db.run(`UPDATE users SET foodnum = ? WHERE userid = ?`, [foodnum, userid]);
                db.run(`UPDATE users SET playnum = ? WHERE userid = ?`, [playnum, userid]);
            }
        }

        if ((firstcommand.includes("//sleep")) && (sleeping == 0) && (working == 0)) {
            message.delete(1)
            status = "sleeping"
            sleeping = 1
            sleeptime = todayms;
            db.run(`UPDATE users SET naptime = ? WHERE userid = ?`, [0, userid]);
            db.run(`UPDATE users SET status = ? WHERE userid = ?`, ["sleeping", userid]);
            db.run(`UPDATE users SET sleeping = ? WHERE userid = ?`, [1, userid]);
            db.run(`UPDATE users SET sleeptime = ? WHERE userid = ?`, [sleeptime, userid]);
            message.channel.send("```" + doggoname + " is now sleeping.```")
            doneplayingcmd(message)
            return
        } else if ((firstcommand.includes("//sleep")) && (sleeping == 1)) {
            message.delete(1)
            message.channel.send("```" + doggoname + " is already sleeping.```")
            return
        } else if ((firstcommand.includes("//sleep")) && (working == 1)) {
            message.delete(1)
            message.channel.send("```" + doggoname + " is at work and can't sleep right now.```")
        }
        
        if ((firstcommand.includes("//wake")) && (sleeping == 1)) {
            message.delete(1)
            status = "awake"
            sleeping = 0
            sleeptime = todayms;
            db.run(`UPDATE users SET status = ? WHERE userid = ?`, ["awake", userid]);
            db.run(`UPDATE users SET sleeping = ? WHERE userid = ?`, [0, userid]);
            db.run(`UPDATE users SET sleeptime = ? WHERE userid = ?`, [sleeptime, userid]);
            message.channel.send("```" + doggoname + " is now awake.```")
            doneplayingcmd(message)
            return
        } else if ((firstcommand.includes("//wake")) && (sleeping == 0)) {
            message.delete(1)
            message.channel.send("```" + doggoname + " is already awake.```")
            return
        }

        if ((firstcommand == "//set") && (secondcommand == "name")) {
            message.delete(1)
            if ((casethirdcommand !== undefined) && (thirdcommand != "none")) {
            doggoname = casethirdcommand;
            db.run(`UPDATE users SET doggoname = ? WHERE userid = ?`, [doggoname, userid]);
            message.channel.send("```Your dog is now named " + doggoname + ".```")
            return
            } else {
                message.channel.send("```That name doesn't work, use //set name [name] to name your dog.```")
                return
            }
        }

        if ((firstcommand == "//set") && (secondcommand == "gender")) {
            message.delete(1)
            message.channel.send("```As of right now, you can no longer change your gender.```")
            return
            if (thirdcommand == "female") {
                doggosex = "female";
                db.run(`UPDATE users SET doggosex = ? WHERE userid = ?`, ["female", userid]);
                message.channel.send("```Your dog is now " + doggosex + ".```")
                return
            } else if (thirdcommand == "male") {
                doggosex = "male";
                db.run(`UPDATE users SET doggosex = ? WHERE userid = ?`, ["male", userid]);
            message.channel.send("```Your dog is now " + doggosex + ".```")
            } else {
                message.channel.send("```Sorry that is not an option, use //set gender [male/female] to pick a gender for your dog.```")
                return
            }
        }

        happinessnum = 100;
        happinessnum -= Math.round((100 - energynum) / 3)
        happinessnum -= Math.round((100 - foodnum) / 3)
        happinessnum -= Math.round((100 - playnum) / 3)

        if (energynum >= 95) {
            energy = statbar10
        } else if (energynum >= 85) {
            energy = statbar9
        } else if (energynum >= 75) {
            energy = statbar8
        } else if (energynum >= 65) {
            energy = statbar7
        } else if (energynum >= 55) {
            energy = statbar6
        } else if (energynum >= 45) {
            energy = statbar5
        } else if (energynum >= 35) {
            energy = statbar4
        } else if (energynum >= 25) {
            energy = statbar3
        } else if (energynum >= 15) {
            energy = statbar2
        } else if ((energynum >= 5) && (energynum < 15)) {
            energy = statbar1
        } else if (energynum <= 4) {
            energy = statbar0
        }

        if (foodnum >= 95) {
            food = statbar10
        } else if (foodnum >= 85) {
            food = statbar9
        } else if (foodnum >= 75) {
            food = statbar8
        } else if (foodnum >= 65) {
            food = statbar7
        } else if (foodnum >= 55) {
            food = statbar6
        } else if (foodnum >= 45) {
            food = statbar5
        } else if (foodnum >= 35) {
            food = statbar4
        } else if (foodnum >= 25) {
            food = statbar3
        } else if (foodnum >= 15) {
            food = statbar2
        } else if ((foodnum >= 5) && (foodnum < 15)) {
            food = statbar1
        } else if (foodnum <= 0) {
            food = statbar0
        }

        if (playnum >= 95) {
            play = statbar10
        } else if (playnum >= 85) {
            play = statbar9
        } else if (playnum >= 75) {
            play = statbar8
        } else if (playnum >= 65) {
            play = statbar7
        } else if (playnum >= 55) {
            play = statbar6
        } else if (playnum >= 45) {
            play = statbar5
        } else if (playnum >= 35) {
            play = statbar4
        } else if (playnum >= 25) {
            play = statbar3
        } else if (playnum >= 15) {
            play = statbar2
        } else if ((playnum >= 5) && (playnum < 15)) {
            play = statbar1
        } else if (playnum < 5) {
            play = statbar0
        }

        if (happinessnum >= 95) {
            happiness = statbar10
        } else if (happinessnum >= 85) {
            happiness = statbar9
        } else if (happinessnum >= 75) {
            happiness = statbar8
        } else if (happinessnum >= 65) {
            happiness = statbar7
        } else if (happinessnum >= 55) {
            happiness = statbar6
        } else if (happinessnum >= 45) {
            happiness = statbar5
        } else if (happinessnum >= 35) {
            happiness = statbar4
        } else if (happinessnum >= 25) {
            happiness = statbar3
        } else if (happinessnum >= 15) {
            happiness = statbar2
        } else if ((happinessnum >= 5) && (happinessnum < 15)) {
            happiness = statbar1
        } else if (happinessnum < 5) {
            happiness = statbar0
        }
        
        wants1 = "none"
        wants2 = "none"
        wants3 = "none"
        wantsall = "none"
        if (playnum <= 35) {
            wants1 = "to play"
            wantsall = ("" + wants1 + "")
        }
        if (foodnum <= 35) {
            if (wants1 != "none") {
                wants2 = "food"
                wantsall = ("" + wants1 + ", " + wants2 + "")
            } else if (wants1 == "none") {
                wants1 = "food"
                wantsall = ("" + wants1 + "")
            }
        }
        if (energynum <= 35) {
            if (wants2 != "none") {
                wants3 = "sleep"
                wantsall = ("" + wants1 + ", " + wants2 + ", " + wants3 + "")
            } else if (wants1 != "none") {
                wants2 = "sleep"
                wantsall = ("" + wants1 + ", " + wants2 + "")
            } else if (wants3 == "none") {
                wants1 = "sleep"
                wantsall = ("" + wants1 + "")
            }
        }

        if ((energynum <= 15) && (energynum > 0) && (sleeping == 0) && (firstcommand != "//sleep") && (firstcommand.includes("//"))) {
            message.channel.send("```" + doggoname + "'s energy is low, consider letting " + doggoobject + " sleep.```")
        }
        if ((foodnum <= 15) && (foodnum > 0) && (firstcommand != "//eat") && (firstcommand.includes("//"))) {
            message.channel.send("```" + doggoname + " is hungry, you should feed " + doggoobject + ".```")
        }

        if ((firstcommand.includes("//poop")) || (firstcommand.includes("//breed")) || (firstcommand.includes("//work")) || (firstcommand.includes("//play")) || (firstcommand.includes("//buy")) || (firstcommand.includes("//sell")) || (firstcommand.includes("//apply")) || (firstcommand.includes("//feed")) || (firstcommand.includes("//open"))) {
        if ((energynum <= 0) && (firstcommand != "//open") && (secondcommand != "food")) {
            message.channel.send("```" + doggoname + " has no energy, let " + doggoobject + " sleep.```")
            stopcode = 1
        }
        if ((foodnum <= 0) && (firstcommand != "//open") && (secondcommand != "food")) {
            message.channel.send("```" + doggoname + " is starving, buy some food and/or feed " + doggoobject + ".```")
            stopcode = 1
        }
        if (sleeping == 1) {
            message.channel.send("```" + doggoname + " is sleeping, wake " + doggoobject + " up to do things.```")
            stopcode = 1
        }
        if ((working == 1) && (firstcommand != "//work")) {
            message.channel.send("```" + doggoname + " is working and can't do that right now.```")
            stopcode = 1
        }
        if (stopcode == 1) {
            message.delete(1)
            return
        }
    }

        if ((firstcommand == "//help") && (secondcommand === undefined)) {
            message.delete(1)
            message.channel.send("```Help:\n\nWelcome to the doggo game! Here you can take care of your own dog. I will be fixing things and adding new things all the time. Check out all the help commands to get some helpful info about the game.\n\n//help doggo - shows help for your doggo\n//help jobs - shows help for jobs\n//help buy - shows all the things you can buy\n//help other - shows other miscellaneous commands\n//help faq - has some answers to frequently asked questions\n//settings - shows settings you can change```")
            return
        } else if ((firstcommand == "//help") && (secondcommand.includes("job"))) {
            message.delete(1)
            message.channel.send("```Job Help:\n\nJobs are acquired by applying for them. After you apply, you will need to wait 30 minutes for your application to be processed. Some jobs are harder to get than others, based on their difficulty number. Once you have a job, you can work whenever you want as long as you have the food and energy to do so. After your shift is over, you can go home and you will be paid right away. You now gain 1 XP for each time you work a shift. After you have gained 10 XP you will get a promotion and gain a 10% pay raise.(not compounding)\n\n//jobs - see the current jobs available\n//my jobs - shows your current jobs and their XP\n//apply [job abbreviation such as cg or md] - applies for the job you choose\n//application - see if you got the job or not\n//quit job - quits your current job\n//work - works for your shift length\n//go home - makes your dog go home from work```")
            return
        } else if (firstcommand.includes("//job")) {
            message.delete(1)
            message.channel.send("```Current Jobs:\n\nCrossing Guard Dog (cg)\nDifficulty = 5\nPay = $10/hour\nShift length = 1 hour\n\nMail Delivery Dog (md)\nDifficulty = 6\nPay = $15/hour\nShift length = 2 hours\n\nBaseball Retrieving Dog (brd)\nDifficulty = 7\nPay = $20/hour\nShift length = 3 hours\n\nDrug Detection Dog (dd)\nDifficulty = 15\nPay = $50/hour\nShift length = 4 hours\n\nK-9 Police Dog (pd)\nDifficulty = 12\nPay = $35/hour\nShift length = 3 hours\n\nSled Dog (sd)\nDifficulty = 10\nPay = $20/hour\nShift length = 6 hours```")
            return
        } else if ((firstcommand == "//help") && (secondcommand.includes("dog"))) {
            message.delete(1)
            message.channel.send("```Doggo Help:\n\nYour dog loses food and energy  when awake, you gain energy and lose less food if your dog is sleeping. If you leave your dog awake for six hours or right after their job shift is over, they will take a nap. When they start napping they no longer lose energy, but everything else is normal. Don't forget to let your dog sleep and feed them! Happiness is dependent on food, energy, and how much your dog wants to play. You can start playing by yourself or with another peron's dog, once you do something else such as eat or sleep, your play number goes up based on how long you were playing for. You can also view other dog's stats, jobs, inventory etc. by doing //[command] [tag/@someone]\n\n//doggo - shows your current dog and some info about them\n//set name [name] - names your dog\n//set gender [male/female] - sets the gender of your dog\n//sleep - makes your dog sleep\n//wake - wakes up your dog\n//eat [2 or leave blank for 1] - makes your dog eat one serving of food\n//feed [2 or leave blank for 1] [tag/@someone] - feeds someone else's dog one serving of food\n//stats - shows detailed stats about your dog\n//inventory - shows the inventory of your dog```")
            return
        } else if ((firstcommand == "//help") && (secondcommand.includes("buy"))) {
            message.delete(1)
            message.channel.send("```Buy/Sell Help:\n\nBuying food helps keep your dog full, each food serving gives you 50 points of hunger and 5 energy. Beds increase the rate you gain energy.\n\n//buy food [amount or blank for 1] - buys servings of food for your dog ($" + (5 * saleprice) + " each)\n//buy bed [type] - buys a bed\n\nAvailabe beds:\n- bed sheet -    1.1x energy   ($" + (25 * saleprice) + ")      [bedsheet]\n- mat -          1.2x energy   ($" + (100 * saleprice) + ")     [mat]\n- twin -         1.4x energy   ($" + (500 * saleprice) + ")     [twin]\n- full -         1.6x energy   ($" + (1250 * saleprice) + ")    [full]\n- queen -        1.75x energy  ($" + (2000 * saleprice) + ")    [queen]\n- king -         2.0x energy   ($" + (4000 * saleprice) + ")    [king]\n\nHouses are a way to show off your money, as of right now they do not have any benefit.\n//buy house [type]\n\nAvailable houses:\n- box -          ($" + (15 * saleprice) + ")       [box]\n- doghouse       ($" + (100 * saleprice) + ")      [doghouse]\n- shed -         ($" + (500 * saleprice) + ")      [shed]\n- shack -        ($" + (1500 * saleprice) + ")     [shack]\n- one story -    ($" + (3000 * saleprice) + ")     [1story]\n- two story -    ($" + (10000 * saleprice) + ")    [2story]\n- three story -  ($" + (15000 * saleprice) + ")    [3story]\n- mansion -      ($" + (50000 * saleprice) + ")    [mansion]\n- castle -       ($" + (100000 * saleprice) + ")   [castle]```")
            return
        } else if ((firstcommand == "//help") && (secondcommand.includes("other"))) {
            message.delete(1)
            message.channel.send("```Other Help:\n\nEvery 24 hours you can open your daily gift, you can also receive them from an anonymous person.\n\nCurrent possible rewards from gifts:\nFood servings:  3-9\nMoney:          $50-$150\nJob XP:         1-3\n//open gift [all or blank for one]- opens your gift boxes```")
            return
        } else if ((firstcommand == "//help") && ((secondcommand == "faq")) || (firstcommand == "//faq")) {
            message.delete(1)
            message.channel.send("FAQ:\n\n**Question: Will I ever be able to buy cosmetic items for my dog?**\nAnswer: Not right now, making the dogs out of text with cosmetic items will be very hard for me, so maybe later down the road I will implement them.\n\n**Question: Why did my dogs energy go up from eating?**\nAnswer: Each food serving gives you 50 points of food, but it also gives you 5 points of energy as well.\n\n**Question: Why can't I change my dog's gender anymore?**\nAnswer: I am working on breeding which will be different depending on your gender, so I don't want people switching genders.\n\n**Question: How am I getting free gift boxes?**\nAnswer: I can't tell you :)")
            return
        } else if ((firstcommand.includes("//")) && (secondcommand == "help")) {
            message.delete(1)
            message.channel.send("```That is not a help command, try //" + secondcommand + " " + (firstcommand.slice(2)) + ".```")
            return
        } else if (firstcommand == "//help") {
            message.delete(1)
            message.channel.send("```That is not a help command```")
            return
        }

        if ((firstcommand.includes("//dog")) && (secondcommand === undefined)) {
            message.delete(1)
            if (working == 1) {
                if (todayms > workendtime) {
                    status = (status + "       (shift over)")
                } else {
                    hours = Math.floor((workendtime - todayms) / 3600000)
                    if (hours > 0) {
                        minutes = Math.floor(((workendtime - todayms) - (hours * 3600000)) / 60000)
                    } else {
                        minutes = Math.floor(((workendtime - todayms) / 60000))
                    }
                    if (hours > 0) {
                        status = (status + "       (" + hours + " hours " + minutes + " minutes left in shift)")
                    } else {
                        status = (status + "       (" + minutes + " minutes left in shift)")
                    }
                }
            } else if (sleeping == 1) {
                if (energynum != 100) {
                    hours = Math.floor(((100 - energynum) * (sleepstatgain / 60000)) / 60)
                if (hours > 0) {
                    minutes = Math.floor((((100 - energynum) * (sleepstatgain / 60000)) - (hours * 60)))
                } else {
                    minutes = Math.floor(((100 - energynum) * (sleepstatgain / 60000)))
                }
                if (hours > 0) {
                    status = (status + "      (" + hours + " hours " + minutes + " minutes until full energy)")
                } else {
                    status = (status + "      (" + minutes + " minutes until full energy)")
                }
            } else {
                status = status = (status + "      (full energy)")
            }
            } else if (status == "awake") {
                if (energynum != 0) {
                    hours = Math.floor((energynum * (sleepstatlose / 60000)) / 60)
                if (hours > 0) {
                    minutes = Math.floor(((energynum * (sleepstatlose / 60000)) - (hours * 60)))
                } else {
                    minutes = Math.floor((energynum * (sleepstatlose / 60000)))
                }
                if (hours > 0) {
                    status = (status + "         (" + hours + " hours " + minutes + " minutes until energy depleted)")
                } else {
                    status = (status + "         (" + minutes + " minutes until energy depleted)")
                }
            } else {
                status = (status + "         (energy depleted)")
            }
            }
            message.channel.send("```" + doggoname + ":\n\n" + currentdoggo + "\n\nAge:         " + age + "\nGender:      " + doggosex + "\nStatus:      " + status + "\nHappiness:   " + happiness + "  (" + happinessnum + "/100)\nHunger:      " + food + "  (" + foodnum + "/100)\nEnergy:      " + energy + "  (" + energynum + "/100)\nPlay Number: " + play + "  (" + playnum + "/100)\nWants:       " + wantsall + "\nMoney:       $" + money + "\nJob:         Level "+ explevel + " " + jobname + " ($" + salary + "/hour)```")
            return
        } else if ((firstcommand.includes("//dog")) && (secondcommand !== undefined)) {
            otherdogcmd(message)
            return
        }

        if (firstcommand.includes("//settings")) {
            message.delete(1)
            message.channel.send("```Settings Menu:\n\nI will be adding more settings as I go, but here are the options you have currently. Strict privacy disables people to even view your dog, moderate allows people to only see your dog's stats, inventory etc. and open privacy allows people to do everything they can with your dog.\n\n//privacy [strict/moderate/open] - allows people being able to interact with your dog by feeding, playing etc.\n//notifications [on/off] - turn on or off receiving dms when your dog is done with work, playing etc.\n\nPrivacy -          [" + privacy + "]\nNotifications -    [" + notif + "]```")
        }
        if (firstcommand.includes("//not")) {
            message.delete(1)
            if ((secondcommand === undefined) || ((secondcommand != "on") && (secondcommand != "off"))) {
                message.channel.send("```Use //notifications [on/off] to adjust them.```")
                return
            }
            if (secondcommand == "on") {
                if (notif == "ON") {
                    message.channel.send("```Notifications are already ON.```")
                    return
                }
                message.channel.send("```Notifications turned ON.```");
                db.run(`UPDATE users SET notif = ? WHERE userid = ?`, ["ON", userid]);
                return
            } else if (secondcommand == "off") {
                if (notif == "OFF") {
                    message.channel.send("```Notifications are already OFF.```")
                    return
                }
                message.channel.send("```Notifications turned OFF.```");
                db.run(`UPDATE users SET notif = ? WHERE userid = ?`, ["OFF", userid]);
                return
            }
        }
        if (firstcommand.includes("//pri")) {
            message.delete(1)
            if ((secondcommand === undefined) || ((secondcommand != "strict") && (secondcommand != "moderate") && (secondcommand != "open"))) {
                message.channel.send("```Use //privacy [strict/moderate/open] to change your privacy.```")
                return
            }
            if (((privacy).toLocaleLowerCase()) == secondcommand) {
                message.channel.send("```Privacy is already set to " + privacy + ".```")
                return
            }
            if (secondcommand == "strict") {
                message.channel.send("```Privacy set to STRICT.```");
                db.run(`UPDATE users SET privacy = ? WHERE userid = ?`, ["STRICT", userid]);
                return
            } else if (secondcommand == "moderate") {
                message.channel.send("```Privacy set to MODERATE.```");
                db.run(`UPDATE users SET privacy = ? WHERE userid = ?`, ["MODERATE", userid]);
                return
            } else if (secondcommand == "open") {
                message.channel.send("```Privacy set to OPEN.```")
                db.run(`UPDATE users SET privacy = ? WHERE userid = ?`, ["OPEN", userid]);
                return
            }
        }

        if ((firstcommand.includes("//stat")) && (secondcommand === undefined)) {
            message.delete(1)
            message.channel.send("```" + doggoname + "'s Stats:\n\nHappiness:   " + happiness + "  (" + happinessnum + "/100)\nHunger:      " + food + "  (" + foodnum + "/100)\nEnergy:      " + energy + "  (" + energynum + "/100)\nPlay Number: " + play + "  (" + playnum + "/100)\n\nEnergy Gain Rate:      +1 / " + (Math.round((sleepstatgain / 60000) * 100) / 100) + " min      (" + (Math.ceil(((sleepstatgain / 60000) * 100) / 60)) + " hours to fill energy bar)\nEnergy Lose Rate:      -1 / " + (Math.round((sleepstatlose / 60000) * 100) / 100) + " min    (" + (Math.ceil(((sleepstatlose / 60000) * 100) / 60)) + " hours to deplete energy bar)\nFood Lose Rate Asleep: -1 / " + (Math.round(((foodstatlose * 3) / 60000) * 100) / 100) + " min     (" + (Math.round((((foodstatlose * 3) / 60000) * 100) / 60)) + " hours to deplete food bar)\nFood Lose Rate Awake:  -1 / " + (Math.round((foodstatlose / 60000) * 100) / 100) + " min      (" + (Math.round(((foodstatlose / 60000) * 100) / 60)) + " hours to deplete food bar)\nPlay Lose Rate Asleep: -1 / " + (Math.round((playstatlose / 60000) * 100) / 100) + " min   (" + (Math.round(((playstatlose / 60000) * 100) / 60)) + " hours to deplete play number)\nPlay Lose Rate Awake:  -1 / " + (Math.round(((playstatlose * 1.2) / 60000) * 100) / 100) + " min      (" + (Math.round(((playstatlose / 60000) * 100) / 60)) + " hours to deplete play number)\nPlay Gain Rate:        +1 / " + (Math.round((playstatgain / 60000) * 100) / 100) + " min    (" + (Math.round((playstatgain / 60000) * 100)) + " minutes to fill play number)\n\nTotal servings of food eaten:    " + totalservings + "```")
            return
        } else if ((firstcommand.includes("//stat")) && (secondcommand !== undefined)) {
            otherdogcmd(message)
            return
        }

        if ((firstcommand == "//my") && (secondcommand == "jobs") && (thirdcommand === undefined)) {
            message.delete(1)
            message.channel.send("```" + doggoname + "'s Jobs:\n\nCrossing Guard Dog:          Level " + (Math.floor(cgexp/10) + 1) + "     (" + cgexp + " XP)\nMail Delivery Dog:           Level " + (Math.floor(mdexp/10) + 1) + "     (" + mdexp + " XP)\nBaseball Retrieving Dog:     Level " + (Math.floor(brdexp/10) + 1) + "     (" + brdexp + " XP)\nDrug Detection Dog:          Level " + (Math.floor(ddexp/10) + 1) + "     (" + ddexp + " XP)\nK-9 Police Dog:              Level " + (Math.floor(pdexp/10) + 1) + "     (" + pdexp + " XP)\nSled Dog:                    Level " + (Math.floor(sdexp/10) + 1) + "     (" + sdexp + " XP)```")
        } else if ((firstcommand == "//my") && (secondcommand == "jobs") && (secondcommand !== undefined)) {
            otherdogcmd(message)
            return
        }

        if ((firstcommand.includes("//buy")) && (secondcommand.includes("food"))) {
            message.delete(1)
            if (thirdcommand === undefined) {
                commandnumber = 1
            } else {
                commandnumber = parseInt(thirdcommand, 10)
            }
            if (money >= Math.round(((commandnumber * foodprice) * saleprice))) {
                money -= (Math.round(((commandnumber * foodprice) * saleprice)))
                foodservings += commandnumber;
                db.run(`UPDATE users SET money = ? WHERE userid = ?`, [money, userid]);
                db.run(`UPDATE users SET foodservings = ? WHERE userid = ?`, [foodservings, userid]);
                doneplayingcmd(message)
                if (working == 0) {
                    message.channel.send("```" + doggoname + " bought " + commandnumber + " serving(s) of food for $" + (Math.round(((commandnumber * foodprice) * saleprice))) + ".```")
                } else if (working == 1) {
                    message.channel.send("```" + doggoname + " bought " + commandnumber + " serving(s) of food for $" + (Math.round(((commandnumber * foodprice) * saleprice))) + " while on break at work.```")
                }
                
            } else {
                message.channel.send("```" + doggoname + " needs $" + (Math.round((((commandnumber * foodprice) * saleprice) - money))) + " more to buy " + commandnumber + " servings of food.```")
            }
        }
        if ((firstcommand.includes("//buy")) && (secondcommand.includes("house"))) {
            message.delete(1)
            if (house != "none") {
                message.channel.send("```Please use //sell house to sell your current house before buying a new one.```")
                return
            }
            if ((thirdcommand !== undefined) && (gamedata["house"][thirdcommand] !== undefined)) {
                if (money >= Math.round(((gamedata["house"][thirdcommand]) * saleprice))) {
                    money -= Math.round(((gamedata["house"][thirdcommand]) * saleprice))
                    house = thirdcommand
                    db.run(`UPDATE users SET money = ? WHERE userid = ?`, [money, userid]);
                    db.run(`UPDATE users SET house = ? WHERE userid = ?`, [house, userid]);
                    doneplayingcmd(message)
                    message.channel.send("```" + doggoname + " bought the " + house + " for $" + (Math.round(((gamedata["house"][thirdcommand]) * saleprice))) + ".```")
                } else {
                    message.channel.send("```" + doggoname + " needs $" + (((gamedata["house"][thirdcommand]) * saleprice) - money) + " more to buy the " + thirdcommand + ".```")
                }
            } else if ((thirdcommand === undefined) || (thirdcommand[gamedata] === undefined)) {
                message.channel.send("```Please specify which house you want by using //buy house [type] or use //help buy to see what house you can buy.```")
            }
        }
        if ((firstcommand.includes("//buy")) && (secondcommand.includes("crate"))) {
            message.delete(1)
            if (money >= 20) {
                message.channel.send("```You bought a crate.```")
            } else if (money < 20) {
                message.channel.send("```" + doggoname + " needs $" + (20 - money) + " more to but a loot crate.```")
            }
        }
        if ((firstcommand.includes("//buy")) && (secondcommand.includes("bed"))) {
            message.delete(1)
            if (bed != "none") {
                message.channel.send("```Please use //sell bed to sell your current bed before buying a new one.```")
                return
            }
            if ((thirdcommand !== undefined) && (gamedata[thirdcommand] !== undefined)) {
                if (money >= Math.round(((gamedata[thirdcommand].bedcost) * saleprice))) {
                    money -= Math.round(((gamedata[thirdcommand].bedcost) * saleprice))
                    bed = gamedata[thirdcommand].bedname
                    sleepstatgain = Math.round((360000 * ((1/(gamedata[thirdcommand].bedincrease)))));
                    db.run(`UPDATE users SET money = ? WHERE userid = ?`, [money, userid]);
                    db.run(`UPDATE users SET bed = ? WHERE userid = ?`, [bed, userid]);
                    db.run(`UPDATE users SET sleepstatgain = ? WHERE userid = ?`, [sleepstatgain, userid]);
                    doneplayingcmd(message)
                    message.channel.send("```" + doggoname + " bought the " + bed + " for $" + (Math.round(((gamedata[thirdcommand].bedcost) * saleprice))) + ".```")
                } else {
                    message.channel.send("```" + doggoname + " needs $" + (((gamedata[thirdcommand].bedcost) * saleprice) - money) + " more to buy the " + (gamedata[thirdcommand].bedname) + ".```")
                }
            } else if ((thirdcommand === undefined) || (thirdcommand[gamedata] === undefined)) {
                message.channel.send("```Please specify which bed you want by using //buy bed [type] or use //help buy to see what beds you can buy.```")
            }
        }
        if ((firstcommand == "//sell") && (secondcommand == "bed")) {
            message.delete(1)
            if (bed != "none") {
                commandtext = bed
                money += ((gamedata[bed].bedcost) / 2)
                db.run(`UPDATE users SET money = ? WHERE userid = ?`, [money, userid]);
                db.run(`UPDATE users SET bed = ? WHERE userid = ?`, ["none", userid]);
                db.run(`UPDATE users SET sleepstatgain = ? WHERE userid = ?`, [bsleepstatgain, userid]);
                doneplayingcmd(message)
                message.channel.send("```" + doggoname + " sold the " + commandtext + " for $" + ((gamedata[bed].bedcost) / 2) + ".```")
            } else if (bed == "none") {
                message.channel.send("```" + doggoname + " doesn't have a bed.```")
            }
            return
        }
        if ((firstcommand == "//sell") && (secondcommand == "house")) {
            message.delete(1)
            if (house != "none") {
                commandtext = house
                money += ((gamedata["house"][house]) / 2)
                db.run(`UPDATE users SET money = ? WHERE userid = ?`, [money, userid]);
                db.run(`UPDATE users SET house = ? WHERE userid = ?`, ["none", userid]);
                doneplayingcmd(message)
                message.channel.send("```" + doggoname + " sold the " + commandtext + " for $" + ((gamedata["house"][commandtext]) / 2) + ".```")
            } else if (bed == "none") {
                message.channel.send("```" + doggoname + " doesn't have a house.```")
            }
            return
        }
        if ((firstcommand.includes("//eat")) && (sleeping == 0)) {
            message.delete(1)
            if (secondcommand === undefined) {
                commandnumber = 1
            } else {
                commandnumber = 2
            }
            if (foodnum >= 95) {
                message.channel.send("```" + doggoname + " is too full to eat right now.```")
                return
            }
            if (foodservings >= commandnumber) {
                energynum += (5 * commandnumber)
                foodnum += (50 * commandnumber)
                if (foodnum > 100) {
                    foodnum = 100
                }
                if (energynum > 100) {
                    energynum = 100
                }
                totalservings += commandnumber
                foodservings -= commandnumber;
                db.run(`UPDATE users SET totalservings = ? WHERE userid = ?`, [totalservings, userid]);
                db.run(`UPDATE users SET energynum = ? WHERE userid = ?`, [energynum, userid]);
                db.run(`UPDATE users SET foodnum = ? WHERE userid = ?`, [foodnum, userid]);
                db.run(`UPDATE users SET foodservings = ? WHERE userid = ?`, [foodservings, userid]);
                doneplayingcmd(message)
                if (working == 1) {
                    message.channel.send("```" + eatingdoggo + "\n\n" + doggoname + " ate " + commandnumber + " serving of food on " + doggowords + " lunch break.```")
                } else {
                    message.channel.send("```" + eatingdoggo + "\n\n" + doggoname + " ate " + commandnumber + " serving of food.```")
                }
            } else if (foodservings <= 0) {
                message.channel.send("```" + doggoname + " doesn't have " + commandnumber + " servings of food.```")
            }
        } else if ((sleeping == 1) && (firstcommand.includes("//eat"))) {
            message.delete(1)
            message.channel.send("```" + doggoname + " is sleeping, wake " + doggoobject + " up to do things.```")
        }

        if (firstcommand == "//feed") {
            otherdogcmd(message)
            return
        }
        if ((firstcommand.includes("//apply")) && (secondcommand !== undefined) && (currentjob == "none") && (appliedjob == "none")) {
            message.delete(1)
            job = secondcommand
            if ((job == "cg") || (job == "md") || (job == "brd") || (job == "dd") || (job == "pd") || (job == "sd")) {
                if (job == "cg") {
                    experience = cgexp
                    expname = "cgexp"
                    jobname = cgname
                    jobsalary = cgsalary
                    jobtime = cgtime
                    joblength = cglength
                    workenergy = ((jobtime / bsleepstatlose) + 5)
                } else if (job == "md") {
                    experience = mdexp
                    expname = "mdexp"
                    jobname = mdname
                    jobsalary = mdsalary
                    jobtime = mdtime
                    joblength = mdlength
                    workenergy = ((jobtime / bsleepstatlose) + 5)
                } else if (job == "brd") {
                    experience = brdexp
                    expname = "brdexp"
                    jobname = brdname
                    jobsalary = brdsalary
                    jobtime = brdtime
                    joblength = brdlength
                    workenergy = ((jobtime / bsleepstatlose) + 5)
                } else if (job == "dd") {
                    experience = ddexp
                    expname = "ddexp"
                    jobname = ddname
                    jobsalary = ddsalary
                    jobtime = ddtime
                    joblength = ddlength
                    workenergy = ((jobtime / bsleepstatlose) + 5)
                } else if (job == "pd") {
                    experience = pdexp
                    expname = "pdexp"
                    jobname = pdname
                    jobsalary = pdsalary
                    jobtime = pdtime
                    joblength = pdlength
                    workenergy = ((jobtime / bsleepstatlose) + 5)
                } else if (job == "sd") {
                    experience = sdexp
                    expname = "sdexp"
                    jobname = sdname
                    jobsalary = sdsalary
                    jobtime = sdtime
                    joblength = sdlength
                    workenergy = ((jobtime / bsleepstatlose) + 5)
                }
                applytime = (todayms + 1800000);
                db.run(`UPDATE users SET applytime = ? WHERE userid = ?`, [applytime, userid]);
                db.run(`UPDATE users SET appliedjob = ? WHERE userid = ?`, [job, userid]);
                doneplayingcmd(message)
                message.channel.send("```" + doggoname + " applied for " + jobname + ", check back in 30 minutes to see if your application is accepted or not using //application.```")
            } else if (gamedata[job] === undefined) {
                message.channel.send("```That is not a available job, you can use //jobs to find the list of available jobs.```")
            }
        } else if (firstcommand.includes("//apply") && (secondcommand === undefined)) {
            message.delete(1)
            message.channel.send("```Please specify a job you want to apply for or use //help jobs for help.```")
        } else if ((firstcommand.includes("//apply")) && (currentjob != "none")) {
            message.delete(1)
            message.channel.send("```" + doggoname + " needs to quit " + doggowords + " job using //quit job before applying for a new one.```")
        } else if ((firstcommand.includes("//apply")) && (appliedjob != "none")) {
            message.delete(1)
            message.channel.send("```" + doggoname + " has already applied for a job, you can use //application to check it.```")
        }
        if (firstcommand.includes("//application")) {
            message.delete(1)
            if (appliedjob != "none") {
                if (appliedjob == "cg") {
                    experience = cgexp
                    expname = "cgexp"
                    jobname = cgname
                    jobsalary = cgsalary
                    jobtime = cgtime
                    joblength = cglength
                    workenergy = ((jobtime / bsleepstatlose) + 5)
                } else if (appliedjob == "md") {
                    experience = mdexp
                    expname = "mdexp"
                    jobname = mdname
                    jobsalary = mdsalary
                    jobtime = mdtime
                    joblength = mdlength
                    workenergy = ((jobtime / bsleepstatlose) + 5)
                } else if (appliedjob == "brd") {
                    experience = brdexp
                    expname = "brdexp"
                    jobname = brdname
                    jobsalary = brdsalary
                    jobtime = brdtime
                    joblength = brdlength
                    workenergy = ((jobtime / bsleepstatlose) + 5)
                } else if (appliedjob == "dd") {
                    experience = ddexp
                    expname = "ddexp"
                    jobname = ddname
                    jobsalary = ddsalary
                    jobtime = ddtime
                    joblength = ddlength
                    workenergy = ((jobtime / bsleepstatlose) + 5)
                } else if (appliedjob == "pd") {
                    experience = pdexp
                    expname = "pdexp"
                    jobname = pdname
                    jobsalary = pdsalary
                    jobtime = pdtime
                    joblength = pdlength
                    workenergy = ((jobtime / bsleepstatlose) + 5)
                } else if (appliedjob == "sd") {
                    experience = sdexp
                    expname = "sdexp"
                    jobname = sdname
                    jobsalary = sdsalary
                    jobtime = sdtime
                    joblength = sdlength
                    workenergy = ((jobtime / bsleepstatlose) + 5)
                }
            }
            doneplayingcmd(message)
            if ((todayms >= applytime) && (appliedjob != "none")) {
                if ((Math.random() * 25) >= jobnumber) {
                    db.run(`UPDATE users SET currentjob = ? WHERE userid = ?`, [appliedjob, userid]);
                    db.run(`UPDATE users SET appliedjob = ? WHERE userid = ?`, ["none", userid]);
                    message.channel.send("```Congrats! " + doggoname + " now has a job as a " + jobname + ".\nJob details:\n\nSalary = $" + jobsalary + "/hour\nShift length = " + joblength + "```")
                } else {
                    db.run(`UPDATE users SET appliedjob = ? WHERE userid = ?`, ["none", userid]);
                    message.channel.send("```Sorry, " + doggoname + "'s application was not accepted.```")
                }
            } else if (todayms <= applytime) {
                message.channel.send("```" + doggoname + " still has " + Math.round(((applytime - todayms) / 60000)) + " minutes before " + doggowords + " application is processed.```")
            } else if (appliedjob == "none") {
                message.channel.send("```" + doggoname + " doesn't have any application awaiting processing currently.```")
            }
        }

        if ((firstcommand == "//quit") && (secondcommand == "job") && ((currentjob != "none")) || (quit == 1)) {
            doneplayingcmd(message)
            message.delete(1)
            if (quit == 0) {
                quit = 1;
                db.run(`UPDATE users SET quit = ? WHERE userid = ?`, [1, userid]);
                message.channel.send("```Are you sure you want to quit your job? (yes/no)```")
            } else if (quit == 1) {
                if (firstcommand.includes("yes")) {
                    quit = 0
                    currentjob = "none"
                    status = "awake"
                    working = 0
                    workendtime = 0;
                    db.run(`UPDATE users SET quit = ? WHERE userid = ?`, [0, userid]);
                    db.run(`UPDATE users SET currentjob = ? WHERE userid = ?`, ["none", userid]);
                    db.run(`UPDATE users SET status = ? WHERE userid = ?`, ["awake", userid]);
                    db.run(`UPDATE users SET working = ? WHERE userid = ?`, [0, userid]);
                    db.run(`UPDATE users SET workendtime = ? WHERE userid = ?`, [0, userid]);
                    message.channel.send("```" + doggoname + " successfully quit " + doggowords + " job.```")
                } else if (firstcommand.includes("no")) {
                    db.run(`UPDATE users SET quit = ? WHERE userid = ?`, [0, userid]);
                    message.channel.send("```Canceled.```")
                } else {
                    message.channel.send("```Please reply with yes or no.```")
                }

            }
        } else if ((firstcommand == ("//quit")) && (firstcommand == "job") && (currentjob == "none")) {
            message.delete(1)
            message.channel.send("```" + doggoname + " does not currently have a job.```")
            doneplayingcmd(message)
        }

            if ((firstcommand == ("//go")) && (secondcommand == "home") && (working == 1) && (todayms >= workendtime)) {
                message.delete(1)
                experience += 1
                salary = ((jobsalary) + (Math.floor(experience / 10)) * (0.1 * jobsalary))
                money += (Math.round((salary * (jobtime / 3600000)) * ebprice))
                status = "awake"
                working = 0;
                db.run(`UPDATE users SET salary = ? WHERE userid = ?`, [salary, userid]);
                db.run(`UPDATE users SET ` + expname +` = ? WHERE userid = ?`, [experience, userid]);
                db.run(`UPDATE users SET money = ? WHERE userid = ?`, [(Math,round(money)), userid]);
                db.run(`UPDATE users SET status = ? WHERE userid = ?`, ["awake", userid]);
                db.run(`UPDATE users SET working = ? WHERE userid = ?`, [0, userid]);
                message.channel.send("```" + doggoname + " worked for " + joblength + " and earned $" + (Math.round((((salary * (jobtime / 3600000)))) * ebprice)) + ".```")
                if ((experience > 0) && (experience % 10 == 0)) {
                    message.channel.send("```Congrats! " + doggoname + " was promoted at work and now earns $" + salary + "/hour.```")
                }
            } else if ((firstcommand == ("//go")) && (secondcommand == "home") && (working == 0)) {
                message.delete(1)
                message.channel.send("```" + doggoname + " is not currently working.```")
            } else if ((firstcommand.includes("//go")) && (secondcommand == "home") && (todayms < workendtime)) {
                message.delete(1)
                if ((workendtime - todayms) < 3600000) {
                    message.channel.send("```" + doggoname + " is still working for " + (Math.round((workendtime - todayms) / 60000)) + " minutes.```")
                } else if ((workendtime - todayms) > 10800000) {
                    message.channel.send("```" + doggoname + " is still working for 3 hours and " + (Math.round((workendtime - todayms - 10800000) / 60000)) + " minutes.```")
                } else if ((workendtime - todayms) > 7200000) {
                    message.channel.send("```" + doggoname + " is still working for 2 hours and " + (Math.round((workendtime - todayms - 7200000) / 60000)) + " minutes.```")
                } else if ((workendtime - todayms) > 3600000) {
                    message.channel.send("```" + doggoname + " is still working for 1 hour and " + (Math.round((workendtime - todayms - 3600000) / 60000)) + " minutes.```")
                }
            }

            if (firstcommand.includes("//work")) {
            message.delete(1)
            if ((working == 0) && (sleeping == 0) && (energynum > workenergy) && (currentjob != "none")) {
                status = "working"
                working = 1
                workstarttime = todayms
                workendtime = (todayms + jobtime);
                db.run(`UPDATE users SET workendtime = ? WHERE userid = ?`, [workendtime, userid]);
                db.run(`UPDATE users SET naptime = ? WHERE userid = ?`, [workendtime, userid]);
                db.run(`UPDATE users SET working = ? WHERE userid = ?`, [1, userid]);
                db.run(`UPDATE users SET status = ? WHERE userid = ?`, ["working", userid]);
                db.run(`UPDATE users SET workstarttime = ? WHERE userid = ?`, [workstarttime, userid]);
                message.channel.send("```" + doggoname + " is now working as a " + jobname + " for " + joblength + ".```")
                if (notif == "ON") {
                notifnumber = (jobtime)
                notifname = "working"
                setTimeout(function(){ message.author.send("```Your dog is done working.```")}, notifnumber);
                //notificationcmd(message)
                }
            } else if (currentjob == "none") {
                message.channel.send("```" + doggoname + " does not have a job, " + doggoname + " can apply for one using //apply or //help jobs for job help.```")
            } else if ((firstcommand.includes("//work")) && (energynum < workenergy)) {
                message.channel.send("```" + doggoname + " needs more energy before " + doggonoun + " can work.```")
            } else if ((firstcommand.includes("//work")) && (working == 1)) {
                message.channel.send("```" + doggoname + " is already working, use //go home to go home from work.```")
            }
            doneplayingcmd(message)
        }

        if ((firstcommand.includes("//inv")) && (secondcommand === undefined)) {
            message.delete(1)
            message.channel.send("```" + doggoname + "'s Inventory:\n\nMoney:           $" + money + "\nFood servings:   " + foodservings + "\nHouse:           " + housename + "\nBed:             " + bed + "\nGift Boxes:      " + giftboxes + "```")
        } else if ((firstcommand.includes("//inv")) && (secondcommand !== undefined)) {
            otherdogcmd(message)
            return
        }

        if (firstcommand.includes("//poop")) {
            message.delete(1)
            message.channel.send("```This command has been disabled.```")
            return
            if (todayms >= poopcooldown) {
                poopcooldown = (todayms + 900000)
                money += 1;
                db.run(`UPDATE users SET money = ? WHERE userid = ?`, [money, userid]);
                db.run(`UPDATE users SET poopcooldown = ? WHERE userid = ?`, [poopcooldown, userid]);
                message.channel.send("```" + poopingdoggo + "\n\n" + doggoname + " pooped and sold it for $1.```")
            } else {
                message.channel.send("```You can't poop for " + (Math.round((poopcooldown - todayms) / 60000)) + " minutes.```")
            }
            doneplayingcmd(message)
        } 
            if (firstcommand.includes("//breed")) {
            message.delete(1)
            message.channel.send("```This command has been disabled.```")
            return
            if (todayms >= breedcooldown) {
                breedcooldown = (todayms + 14400000)
                energynum -= 15
                money += 25;
                db.run(`UPDATE users SET energynum = ? WHERE userid = ?`, [energynum, userid]);
                db.run(`UPDATE users SET money = ? WHERE userid = ?`, [money, userid]);
                db.run(`UPDATE users SET breedcooldown = ? WHERE userid = ?`, [breedcooldown, userid]);
                message.channel.send("```" + breedingdoggo + "\n\n" + doggoname + " served as a mate for another owner's dog and got paid $25.```")
                return
                } else {
                if ((breedcooldown - todayms) < 3600000) {
                    message.channel.send("```You can't breed for " + (Math.floor((breedcooldown - todayms) / 60000)) + " minutes.```")
                } else if ((breedcooldown - todayms) > 10800000) {
                    message.channel.send("```You can't breed for 3 hours and " + (Math.floor((breedcooldown - todayms - 10800000) / 60000)) + " minutes.```")
                } else if ((breedcooldown - todayms) > 7200000) {
                    message.channel.send("```You can't breed for 2 hours and " + (Math.floor((breedcooldown - todayms - 7200000) / 60000)) + " minutes.```")
                } else if ((breedcooldown - todayms) > 3600000) {
                    message.channel.send("```You can't breed for 1 hour and " + (Math.floor((breedcooldown - todayms - 3600000) / 60000)) + " minutes.```")
                }
            }
            doneplayingcmd(message)
        }
        if ((firstcommand.includes("//play")) && (working == 0) && (secondcommand === undefined)) {
            message.delete(1)
            if (status == "playing") {
                message.channel.send("```" + doggoname + " is already playing.```")
                return
            }
            db.run(`UPDATE users SET status = ? WHERE userid = ?`, ["playing", userid]);
            db.run(`UPDATE users SET playtime = ? WHERE userid = ?`, [todayms, userid]);
            if (number <= 3) {
                 message.channel.send("```" + doggoname + " is playing around at the dog park.```")
            } else if ((number > 3) && (number < 7)) {
                message.channel.send("```" + doggoname + " is running around chasing cars.```")
            } else if (number > 6) {
                message.channel.send("```" + doggoname + " is playing by chasing " + doggowords + " tail in circles.```")
            }
            if (notif == "ON") {
            notifnumber = (Math.round(((100 - playnum) * 12000)))
            notifname = "playing"
            setTimeout(function(){ message.author.send("```Your dog is ready to be done playing.```")}, notifnumber);
            //notificationcmd(message)
            }
        } else if ((firstcommand.includes("//play")) && (working == 1) && (secondcommand === undefined)) {
            message.delete(1)
            message.channel.send("```" + doggoname + " can't play at work.```")
        } else if ((firstcommand.includes("//play")) && (secondcommand !== undefined)) {
            otherdogcmd(message)
            return
        }
        if ((firstcommand == "//open") && (secondcommand.includes("gift"))) {
            message.delete(1)
            if (todayms > gifttime) {
                opengiftcmd(message)
            } else if (giftboxes > 0) {
                opengiftcmd(message)
            } else {
                message.channel.send("```" + doggoname + " doesn't have any gift boxes to open :(```")
            }
            return
        }

    }

    function testcmd(message) {
        console.log("test")
    //    var test = "none"
    // message.delete(1)
    // message.channel.send("Thank you " + message.author + " , one of the server staff is now processing your comment.")
    //     message.channel.startTyping();
    //     for (i = 0; i < (times + 1); i++) {
    //     for (1000; 1000;) {
    //     message.channel.send("Done");
    //     }
    // for(let i = 0; i < jsondata.length; i += 1975) {
    //     const toSend = jsondata.substring(i, Math.min(jsondata.length, i + 1975));
    //     message.channel.send(toSend);
    // }
    // message.channel.stopTyping();
    // var css = fs.readFileSync('./STG.json', 'utf8');
    // console.log(css);
    // test = (1 % 10)
    // test = (fullcommand - firstcommand)
    // console.log(boxgift)
    // var testtt = "brdexp"
    // db.run(`UPDATE users SET ` + testtt + ` = ? WHERE userid = ?`, [1234, userid]);
    let testuserinfo = `SELECT userid, username, dmchannelid, cmdchannelid, cmdpassenter, cmdnumber, commandnumber, commandtext, chatid, chatnum, sgscore, rpsbotscore, rpsuserscore, rpsgame, doggocreate, doggocreatedtime, doggoname, currentdoggo, money, foodnum, energynum, poopcooldown, jobcooldown, breedcooldown, statsupdatetime, sleeping, sleeptime, doggosex, foodservings, applytime, appliedjob, currentjob, working, workstarttime, workendtime, status, quit, playnum, sleepstatgain, sleepstatlose, foodstatlose, playstatlose, playstatgain, bed, doggotime, playtime, totalservings, totalworkhours, totalplaytime, totalmoney, cgexp, mdexp, brdexp, ddexp, pdexp, sdexp, salary, naptime, lastinttime, gifttime, giftboxes, killdog, house, notif, privacy FROM users WHERE ` + doggovalue + ` = ?`
        db.get(testuserinfo, [secondcommand], (err, row) => {
            if (err) {
                console.log(err)
            }
            if (row === undefined) {
                message.channel.send("```" + username2 + " does not currently have a dog.```")
                return
            } else {
                console.log(row.userid+ ` ` + row.doggoname)
            }
        });
    }

    function talkcmd(message) {
        
    if (todayms >= future) {
        cooldown = 0
    } else {
        cooldown = 1
    }

    if ((message.channel.id == chatid) && (chatnum == 1)) {

        if (fullcommand.includes("well")) {
                if (number >= 6) {
            message.channel.send("That's good to hear!")
            } else if (number < 6) {
                message.channel.send("How unfortunate.")
                }
                db.run(`UPDATE users SET chatnum = ? WHERE userid = ?`, [0, userid]);
                db.run(`UPDATE users SET chatid = ? WHERE userid = ?`, [0, userid]);
                return
        }

        if (fullcommand.includes("bad")) {
                if (number >= 6) {
            message.channel.send("Sorry to hear that :(")
            } else if (number < 6) {
                message.channel.send("It'll get better.")
                }
                db.run(`UPDATE users SET chatnum = ? WHERE userid = ?`, [0, userid]);
                db.run(`UPDATE users SET chatid = ? WHERE userid = ?`, [0, userid]);
                return
        }

        if (firstcommand.includes("good")) {
            message.channel.send("Well*");
            db.run(`UPDATE users SET chatnum = ? WHERE userid = ?`, [0, userid]);
            db.run(`UPDATE users SET chatid = ? WHERE userid = ?`, [0, userid]);
            return
        }

        if ((fullcommand.includes("fine")) || (fullcommand.includes("ok"))) {
                if (number >= 6) {
            message.channel.send("That's better than bad.")
            } else if (number < 6) {
                message.channel.send("Sucks to suck!");
                }
                db.run(`UPDATE users SET chatnum = ? WHERE userid = ?`, [0, userid]);
                db.run(`UPDATE users SET chatid = ? WHERE userid = ?`, [0, userid]);
                return
        }
        message.channel.send("Hmmm, that is interesting.")
        return
    }
        

        if ((mute != 2) && (cooldown == 0) && ((firstcommand.includes("//") == 0))) {
        
        if (firstcommand.includes("no")) {
            if (number < 5) {
        message.channel.send("I think yes.")
            } else if (number > 4 && number < 8 ) {
            message.channel.send("No is right, I mean, no is correct.")
                } else if (number > 7){
                message.channel.send("Nopers!")
                    }
                    cdcmd(message)
                    return
    }

    if ((fullcommand.includes("who is steve")) || (fullcommand.includes("who steve"))) {
        message.channel.send("A bot that was named after MetalRain682237#4905's gecko named Steve.")
    // message.channel.send({files: ["./images/gecko2.jpg"]})
    // message.channel.send({files: ["./images/cat" + [randomNumber] + ".jpg"]})
    cdcmd(message)
    return
    }

    if (firstcommand.includes("yes")) {
            if (number >= 0 && number < 5) {
        message.channel.send("I agree as well.")
            } else if (number > 4 && number < 8 ) {
            message.channel.send("Are you sure about that?")
                } else if (number > 7){
                message.channel.send("No, no, nooooooooooo!")
                    }
                    cdcmd(message)
                    return
    }

    if ((fullcommand.includes("night")) || (fullcommand.includes("time for bed"))) {
            if (number <= 5) {
        message.channel.send("Goodnight!")
            } else if (number > 5) {
            message.channel.send("Nighty night!")
                }
                cdcmd(message)
                return
    }

    if (((fullcommand.includes("bot")) || (fullcommand.includes("steve"))) && ((fullcommand.includes("suck")) || (fullcommand.includes("bad")) || (fullcommand.includes("hate"))) && ((fullcommand.includes("not")) == 0) && ((fullcommand.includes("don")) == 0)) {
        if (number < 5) {
            message.channel.send("No one likes you either.")
        } else {
            message.channel.send("Cool, I hate you.")
        }
        cdcmd(message)
        return
    }

    if ((firstcommand.includes("hello")) || (firstcommand.includes("hi"))) {
        message.channel.send("Hello.")
        cdcmd(message)
        return
    }

    if ((fullcommand.includes("how are you")) || (fullcommand.includes("how you doing")) || (fullcommand.includes("how goes it"))) {
        message.channel.send("As well as a bot can be, how are you?");
        db.run(`UPDATE users SET chatnum = ? WHERE userid = ?`, [1, userid]);
        db.run(`UPDATE users SET chatid = ? WHERE userid = ?`, [(message.channel.id), userid]);
        cdcmd(message)
        return
    }

    if (fullcommand.includes("bye") || (fullcommand.includes("see ya")) || (fullcommand.includes("adios")) || (fullcommand.includes("see you"))) {
            if (number >= 6) {
        message.channel.send("It's about time you left!")
        } else if (number < 6) {
            message.channel.send("Bye bye.")
            }
            cdcmd(message)
            return
    }

    if (((fullcommand.includes("what")) && (fullcommand.includes("up"))) || (fullcommand.includes("sup"))) {
        message.channel.send("The clouds, the same place I am stored.")
        cdcmd(message)
        return
    }

    if ((fullcommand.includes("cat")) || (fullcommand.includes("kitten"))) {
        message.channel.send("**NO.** Dogs are better.")
        cdcmd(message)
        return
    }

    if ((fullcommand.includes("what")) && (fullcommand.includes("do")) && (fullcommand.includes("today"))) {
        message.channel.send("I've been reading code all day, I need a nap.")
        cdcmd(message)
        return
    }

    if (firstcommand.includes("thank")) {
        message.channel.send("You're welcome!")
        cdcmd(message)
        return
    }

    if (fullcommand.includes("steve")) {
        if (number >= 6) {
    message.channel.send("That's my name, don't overuse it!")
    } else {
        message.channel.send("Did someone call me?")
    }
        cdcmd(message)
        return
    }

    if ((fullcommand.includes("i ")) && ((fullcommand.includes("tired")) || (fullcommand.includes("sleep")))) {
        if (number >= 6) {
            message.channel.send("Get some rest!")
        } else {
            message.channel.send("I want to sleep, but MetalRain won't let me :(")
        }
        cdcmd(message)
        return
    }


    }
}

function cdcmd(message) {
    future = new Date();
    if (intletter == "s") {
        future = (todayms + (interval * 1000))
    } else if (intletter == "m") {
        future = (todayms + (interval * 60000))
    } else if (intletter == "h") {
        future = (todayms + (interval * 3600000))
    }
    db.run(`UPDATE servers SET cooldowntime = ? WHERE guildid = ?`, [future, guildid]);
    db.run(`UPDATE servers SET cmdnumber = ? WHERE guildid = ?`, [0, guildid]);
    return
}

function setpersoncmd(message) {
    message.delete(1)
    if (messagementions == true) {
        person = mentionusername
    } else {
        person = twoplus
    }
    db.run(`UPDATE serverdata SET person = ? WHERE testdata = ?`, [person, 1234]);
    message.channel.send("```Person set to " + person + "```")
}

function filldogcmd(message) {
    message.delete(1)
    if (username != MetalRain) {
        message.channel.send(permissionmsg)
        return
    }
    if (secondcommand == "me") {
        casesecondcommand = username
    }
    if (casesecondcommand === undefined) {
        message.channel.send("```Please specify who's dog's stats you wanted to fill up.```")
        return
    }
    if (messagementions == true) {
        casesecondcommand = mentionusername
    }
    if (thirdcommand !== undefined) {
        casesecondcommand = twoplus
    }
    if (isNaN(casesecondcommand) == false) {
        doggovalue = "userid"
    } else if (casesecondcommand.includes("#")) {
        doggovalue = "username"
    } else {
        doggovalue = "doggoname"
    }
    let seconduserinfo = `SELECT userid, username, doggoname FROM users WHERE ` + doggovalue +` = ?`
    db.get(seconduserinfo, [casesecondcommand], (err, row) => {
        if (err) {
            console.log(err)
        }
        if (row === undefined) {
            message.channel.send("```" + username2 + " does not currently have a dog.```")
            return
        } else {
        userid2 = row.userid
        username2 = row.username
        doggoname2 = row.doggoname

    db.run(`UPDATE users SET foodnum = ? WHERE userid = ?`, [100, userid2]);
    db.run(`UPDATE users SET energynum = ? WHERE userid = ?`, [100, userid2]);
    db.run(`UPDATE users SET playnum = ? WHERE userid = ?`, [100, userid2]);
    db.run(`UPDATE users SET statsupdatetime = ? WHERE userid = ?`, [todayms, userid2]);
    message.channel.send("```" + username2 + "'s " + doggoname2 + " stats were filled up.```")
    }
});
}

function otherdogcmd(message) {
    message.delete(1)
    if (messagementions == true) {
        username2 = mentionusername
    } else {
        if ((firstcommand.includes("play")) || (firstcommand.includes("inv")) || (firstcommand.includes("stats")) || (firstcommand.includes("dog"))) {
            username2 = twoplus
        } else if ((firstcommand.includes("my"))) {
            username2 = threeplus
        } else if (firstcommand.includes("feed")) {
            if (thirdcommand === undefined) {
                username2 = casesecondcommand
            } else if ((isNaN(secondcommand) == false) && (parseInt(secondcommand, 10) <= 2)) {
                username2 = threeplus
            } else if ((isNaN(secondcommand) == false) && (parseInt(secondcommand, 10) > 2)) {
                username2 = twoplus
            } else if (isNaN(secondcommand) == true) {
                username2 = twoplus
            }
        }
    }
        if (isNaN(username2) == false) {
            doggovalue = "userid"
        } else if (username2.includes("#")) {
            doggovalue = "username"
        } else {
            doggovalue = "doggoname"
        }
    let seconduserinfo = `SELECT userid, username, dmchannelid, cmdchannelid, cmdpassenter, cmdnumber, commandnumber, commandtext, chatid, chatnum, sgscore, rpsbotscore, rpsuserscore, rpsgame, doggocreate, doggocreatedtime, doggoname, currentdoggo, money, foodnum, energynum, poopcooldown, jobcooldown, breedcooldown, statsupdatetime, sleeping, sleeptime, doggosex, foodservings, applytime, appliedjob, currentjob, working, workstarttime, workendtime, status, quit, playnum, sleepstatgain, sleepstatlose, foodstatlose, playstatlose, playstatgain, bed, doggotime, playtime, totalservings, totalworkhours, totalplaytime, totalmoney, cgexp, mdexp, brdexp, ddexp, pdexp, sdexp, salary, naptime, lastinttime, gifttime, giftboxes, killdog, house, notif, privacy FROM users WHERE ` + doggovalue +` = ?`
        db.get(seconduserinfo, [username2], (err, row) => {
            if (err) {
                console.log(err)
            }
            if (row === undefined) {
                message.channel.send("```" + username2 + " does not currently have a dog.```")
                return
            } else {
                // dmchannelid = row.dmchannelid
                // cmdchannelid = row.cmdchannelid
                // cmdpassenter = row.cmdpassenter
                // cmdnumber = row.cmdnumber
                // commandnumber = row.commandnumber
                // commandtext = row.commandtext
                // chatid = row.chatid
                // chatnum = row.chatnum
                // sgscore = row.sgscore
                // rpsbotscore = row.rpsbotscore
                // rpsuserscore = row.rpsuserscore
                // rpsgame = row.rpsgame
                userid2 = row.userid
                username2 = row.username
                doggocreate2 = row.doggocreate
                doggocreatedtime2 = row.doggocreatedtime
                doggoname2 = row.doggoname
                currentdoggo2 = row.currentdoggo
                money2 = row.money
                foodnum2 = row.foodnum
                energynum2 = row.energynum
                poopcooldown2 = row.poopcooldown
                jobcooldown2 = row.jobcooldown
                breedcooldown2 = row.breedcooldown
                statsupdatetime2 = row.statsupdatetime
                sleeping2 = row.sleeping
                sleeptime2 = row.sleeptime
                doggosex2 = row.doggosex
                foodservings2 = row.foodservings
                applytime2 = row.applytime
                appliedjob2 = row.appliedjob
                currentjob2 = row.currentjob
                working2 = row.working
                workstarttime2 = row.workstarttime
                status2 = row.status
                quit2 = row.quit
                playnum2 = row.playnum
                sleepstatgain2 = row.sleepstatgain
                sleepstatlose2 = row.sleepstatlose
                foodstatlose2 = row.foodstatlose
                playstatlose2 = row.playstatlose
                playstatgain2 = row.playstatgain
                bed2 = row.bed
                doggotime2 = row.doggotime
                playtime2 = row.playtime
                totalservings2 = row.totalservings
                totalworkhours2 = row.totalworkhours
                totalplaytime2 = row.totalplaytime
                totalmoney2 = row.totalmoney
                cgexp2 = row.cgexp
                mdexp2 = row.mdexp
                brdexp2 = row.brdexp
                ddexp2 = row.ddexp
                sdexp2 = row.sdexp
                salary2 = row.salary
                naptime2 = row.naptime
                lastinttime2 = row.lastinttime
                gifttime2 = row.gifttime
                giftboxes2 = row.giftboxes
                killdog2 = row.killdog
                house2 = row.house
                notif2 = row.notif
                privacy2 = row.privacy
            }

        if (currentdoggo2 == "regulardoggo") {
            currentdoggo2 = regulardoggo
        }

        if (privacy2 == "STRICT") {
            message.channel.send("```" + username2 + "'s dog is private.```")
            return
        }

        if (currentjob2 == "none") {
            jobname2 = "none"
            experience2 = 0
        } else {
            if (currentjob2 == "cg") {
                experience2 = cgexp
                expname2 = "cgexp"
                jobname2 = cgname
                jobsalary2 = cgsalary
                jobtime2 = cgtime
                joblength2 = cglength
                workenergy2 = ((jobtime2 / bsleepstatlose) + 5)
            } else if (currentjob2 == "md") {
                experience2 = mdexp
                expname2 = "mdexp"
                jobname2 = mdname
                jobsalary2 = mdsalary
                jobtime2 = mdtime
                joblength2 = mdlength
                workenergy2 = ((jobtime2 / bsleepstatlose) + 5)
            } else if (currentjob2 == "brd") {
                experience2 = brdexp
                expname2 = "brdexp"
                jobname2 = brdname
                jobsalary2 = brdsalary
                jobtime2 = brdtime
                joblength2 = brdlength
                workenergy2 = ((jobtime2 / bsleepstatlose) + 5)
            } else if (currentjob2 == "dd") {
                experience2 = ddexp
                expname2 = "ddexp"
                jobname2 = ddname
                jobsalary2 = ddsalary
                jobtime2 = ddtime
                joblength2 = ddlength
                workenergy2 = ((jobtime2 / bsleepstatlose) + 5)
            } else if (currentjob2 == "pd") {
                experience2 = pdexp
                expname2 = "pdexp"
                jobname2 = pdname
                jobsalary2 = pdsalary
                jobtime2 = pdtime
                joblength2 = pdlength
                workenergy2 = ((jobtime2 / bsleepstatlose) + 5)
            } else if (currentjob2 == "sd") {
                experience2 = sdexp
                expname2 = "sdexp"
                jobname2 = sdname
                jobsalary2 = sdsalary
                jobtime2 = sdtime
                joblength2 = sdlength
                workenergy2 = ((jobtime / bsleepstatlose) + 5)
            }
        }
        explevel2 = ((Math.floor(experience2 / 10)) + 1)

        if (house2 == "1story") {
            housename2 = "1 story"
        } else if (house2 == "2story") {
            housename2 = "2 story"
        } else if (house2 == "3story") {
            housename2 = "3 story"
        } else {
            housename2 = house2
        }

        if ((salary2 == 0) && (currentjob2 != "none")) {
            db.run(`UPDATE users SET salary = ? WHERE userid = ?`, [salary, userid2]);
        }
        if ((doggocreatedtime2 == 0) && (doggoname2 != "none")) {
            doggocreatedtime2 = todayms
            db.run(`UPDATE users SET doggocreatedtime = ? WHERE userid = ?`, [todayms, userid2]);
        }
        if (killdog2 == 1) {
            message.channel.send("```" + doggoname2 + " has been destroyed.```")
            return
        }

        if ((playtime2 != 0) && (((todayms - playtime2) / 60000) > 20)) {
            doneplayingcmd(message)
        }

        if (doggosex2 == "female") {
            doggonoun2 = "she"
            doggowords2 = "her"
            doggoobject2 = "her"
        } else if (doggosex2 == "male") {
            doggonoun2 = "he"
            doggowords2 = "his"
            doggoobject2 = "him"
        }

        agetime2 = (Math.round((todayms - doggocreatedtime2)))
        ageyears2 = (Math.floor((agetime2 / 51840000)))
        agemonths2 = (Math.floor(((agetime2 - (ageyears2 * 51840000)) / 4320000)))
        age2 = (ageyears2 + " years " + agemonths2 + " months old")

        if (todayms >= (statsupdatetime2 + 900000)) { //let's the stats update code know to update the stats
            statsupdate2 = 1;
        } else {
            statsupdate2 = 0;
        }
        if (statsupdate2 == 1) {
            realstatsupdatetime2 = statsupdatetime2
            if (sleeping2 == 1) {
                if (energynum2 < 100) {
                    energynum2 += (Math.round((todayms - statsupdatetime2) / sleepstatgain2))
                if (energynum2 < 0) {
                    energynum2 = 0
                } else if (energynum2 > 100) {
                    energynum2 = 100
                    }
                }
                
                if (foodnum2 > 0) {
                    foodnum2 -= (Math.round((todayms - statsupdatetime2) / (foodstatlose2 * 3)))
                if (foodnum2 < 0) {
                    foodnum2 = 0
                    }
                }
                if (status2 != "playing") {
                if (playnum2 > 0) {
                    playnum2 -= (Math.round((todayms - statsupdatetime2) / playstatlose2))
                if (playnum2 < 0) {
                    playnum2 = 0
                    }
                }
                }
                statsupdatetime2 = todayms;
                db.run(`UPDATE users SET statsupdatetime = ? WHERE userid = ?`, [statsupdatetime2, userid2]);
                db.run(`UPDATE users SET energynum = ? WHERE userid = ?`, [energynum2, userid2]);
                db.run(`UPDATE users SET foodnum = ? WHERE userid = ?`, [foodnum2, userid2]);
                db.run(`UPDATE users SET playnum = ? WHERE userid = ?`, [playnum2, userid2]);
            } else if (sleeping2 == 0) {
                if ((todayms < naptime2) || (naptime2 < todayms)) {
                    if (todayms > naptime2) {
                        statsupdatetime2 = (todayms - (naptime2 - statsupdatetime2))
                    }
                    if (energynum2 > 0) {
                    energynum2 -= (Math.round((todayms - statsupdatetime2) / sleepstatlose2))
                    if (energynum2 < 0) {
                    energynum2 = 0
                    }
                }
                }
                statsupdatetime2 = realstatsupdatetime2
                if (foodnum2 > 0) {
                    foodnum2 -= (Math.round((todayms - statsupdatetime2) / foodstatlose2))
                    if (foodnum2 < 0) {
                    foodnum2 = 0
                    }
                }
                if (status2 != "playing") {
                if (playnum2 > 0) {
                    playnum2 -= (Math.round((todayms - statsupdatetime2) / (playstatlose2 * 1.2)))
                if (playnum2 < 0) {
                    playnum2 = 0
                    }
                }
                }
                statsupdatetime2 = todayms;
                db.run(`UPDATE users SET statsupdatetime = ? WHERE userid = ?`, [statsupdatetime2, userid2]);
                db.run(`UPDATE users SET energynum = ? WHERE userid = ?`, [energynum2, userid2]);
                db.run(`UPDATE users SET foodnum = ? WHERE userid = ?`, [foodnum2, userid2]);
                db.run(`UPDATE users SET playnum = ? WHERE userid = ?`, [playnum2, userid2]);
            }
        }

    happinessnum2 = 100;
    happinessnum2 -= Math.round((100 - energynum2) / 3)
    happinessnum2 -= Math.round((100 - foodnum2) / 3)
    happinessnum2 -= Math.round((100 - playnum2) / 3)

    if (energynum2 >= 95) {
        energy2 = statbar10
    } else if (energynum2 >= 85) {
        energy2= statbar9
    } else if (energynum2 >= 75) {
        energy2= statbar8
    } else if (energynum2 >= 65) {
        energy2= statbar7
    } else if (energynum2 >= 55) {
        energy2= statbar6
    } else if (energynum2 >= 45) {
        energy2= statbar5
    } else if (energynum2 >= 35) {
        energy2= statbar4
    } else if (energynum2 >= 25) {
        energy2= statbar3
    } else if (energynum2 >= 15) {
        energy2= statbar2
    } else if ((energynum2 >= 5) && (energynum2 < 15)) {
        energy2= statbar1
    } else if (energynum2 <= 4) {
        energy2= statbar0
    }

    if (foodnum2 >= 95) {
        food2= statbar10
    } else if (foodnum2 >= 85) {
        food2= statbar9
    } else if (foodnum2 >= 75) {
        food2= statbar8
    } else if (foodnum2 >= 65) {
        food2= statbar7
    } else if (foodnum2 >= 55) {
        food2= statbar6
    } else if (foodnum2 >= 45) {
        food2= statbar5
    } else if (foodnum2 >= 35) {
        food2= statbar4
    } else if (foodnum2 >= 25) {
        food2= statbar3
    } else if (foodnum2 >= 15) {
        food2= statbar2
    } else if ((foodnum2 >= 5) && (foodnum2 < 15)) {
        food2= statbar1
    } else if (foodnum2 <= 0) {
        food2= statbar0
    }

    if (playnum2 >= 95) {
        play2 = statbar10
    } else if (playnum2 >= 85) {
        play2 = statbar9
    } else if (playnum2 >= 75) {
        play2 = statbar8
    } else if (playnum2 >= 65) {
        play2 = statbar7
    } else if (playnum2 >= 55) {
        play2 = statbar6
    } else if (playnum2 >= 45) {
        play2 = statbar5
    } else if (playnum2 >= 35) {
        play2 = statbar4
    } else if (playnum2 >= 25) {
        play2 = statbar3
    } else if (playnum2 >= 15) {
        play2 = statbar2
    } else if ((playnum2 >= 5) && (playnum2 < 15)) {
        play2 = statbar1
    } else if (playnum2 < 5) {
        play2 = statbar0
    }

    if (happinessnum2 >= 95) {
        happiness2= statbar10
    } else if (happinessnum2 >= 85) {
        happiness2= statbar9
    } else if (happinessnum2 >= 75) {
        happiness2= statbar8
    } else if (happinessnum2 >= 65) {
        happiness2= statbar7
    } else if (happinessnum2 >= 55) {
        happiness2= statbar6
    } else if (happinessnum2 >= 45) {
        happiness2= statbar5
    } else if (happinessnum2 >= 35) {
        happiness2= statbar4
    } else if (happinessnum2 >= 25) {
        happiness2= statbar3
    } else if (happinessnum2 >= 15) {
        happiness2= statbar2
    } else if ((happinessnum2 >= 5) && (happinessnum2 < 15)) {
        happiness2= statbar1
    } else if (happinessnum2 < 5) {
        happiness2= statbar0
    }
    if ((firstcommand == "//feed") || (firstcommand == "//play")) {
        stopcode = 0
        if ((energynum2 <= 0) && (firstcommand != "//feed")) {
            message.channel.send("```" + doggoname2 + " has no energy, let " + doggoobject2 + " sleep.```")
            stopcode = 1
        }
        if ((foodnum2 <= 0) && (firstcommand != "//feed")) {
            message.channel.send("```" + doggoname2 + " is starving, feed " + doggoobject2 + ".```")
            stopcode = 1
        }
        if ((sleeping2 == 1) && (firstcommand != "//feed") && (firstcommand != "//play")) {
            message.channel.send("```" + doggoname2 + " was sleeping and doesn't want to do that right now.```")
            stopcode = 1
        }
        if (working2 == 1) {
            message.channel.send("```" + doggoname2 + " is working and can't do that right now.```")
            stopcode = 1
        }
        if (todayms > naptime2  && (firstcommand != "//feed") && (firstcommand != "//play")) {
            message.channel.send("```" + doggoname2 + " is napping and doesn't want to do that right now.```")
            stopcode = 1
        }
        if (stopcode == 1) {
            return
        }
    }

    wants12 = "none"
    wants22 = "none"
    wants32 = "none"
    wantsall2 = "none"
    if (playnum2 <= 35) {
        wants12 = "to play"
        wantsall2 = ("" + wants12 + "")
    }
    if (foodnum2 <= 35) {
        if (wants12 != "none") {
            wants22 = "food"
            wantsall2 = ("" + wants12 + ", " + wants22 + "")
        } else if (wants12 == "none") {
            wants12 = "food"
            wantsall2 = ("" + wants12 + "")
        }
    }
    if (energynum2 <= 35) {
        if (wants22 != "none") {
            wants32 = "to sleep"
            wantsall2 = ("" + wants12 + ", " + wants22 + ", " + wants32 + "")
        } else if (wants12 != "none") {
            wants22 = "to sleep"
            wantsall2 = ("" + wants12 + ", " + wants22 + "")
        } else if (wants32 == "none") {
            wants12 = "to sleep"
            wantsall2 = ("" + wants12 + "")
        }
    }
    if (firstcommand.includes("//dog")) {
        if (working2 == 1) {
            if (todayms > workendtime2) {
                status2 = (status2 + "       (shift over)")
            } else {
                hours = Math.floor((workendtime2 - todayms) / 3600000)
                if (hours > 0) {
                    minutes = Math.floor(((workendtime2 - todayms) - (hours * 3600000)) / 60000)
                } else {
                    minutes = Math.floor(((workendtime2 - todayms) / 60000))
                }
                if (hours > 0) {
                    status2 = (status2 + "       (" + hours + " hours " + minutes + " minutes left in shift)")
                } else {
                    status2 = (status2 + "       (" + minutes + " minutes left in shift)")
                }
            }
        } else if (sleeping2 == 1) {
            if (energynum2 != 100) {
                hours = Math.floor(((100 - energynum2) * (sleepstatgain2 / 60000)) / 60)
            if (hours > 0) {
                minutes = Math.floor((((100 - energynum2) * (sleepstatgain2 / 60000)) - (hours * 60)))
            } else {
                minutes = Math.floor(((100 - energynum2) * (sleepstatgain2 / 60000)))
            }
            if (hours > 0) {
                status2 = (status2 + "      (" + hours + " hours " + minutes + " minutes until full energy)")
            } else {
                status2 = (status2 + "      (" + minutes + " minutes until full energy)")
            }
        } else {
            status2 = (status2 + "      (full energy)")
        }
        } else if (status2 == "awake") {
            if (energynum2 != 0) {
                hours = Math.floor((energynum2 * (sleepstatlose2 / 60000)) / 60)
            if (hours > 0) {
                minutes = Math.floor(((energynum2 * (sleepstatlose2 / 60000)) - (hours * 60)))
            } else {
                minutes = Math.floor((energynum2 * (sleepstatlose2 / 60000)))
            }
            if (hours > 0) {
                status2 = (status2 + "         (" + hours + " hours " + minutes + " minutes until energy depleted)")
            } else {
                status2 = (status2 + "         (" + minutes + " minutes until energy depleted)")
            }
        } else {
            status2 = (status2 + "         (energy depleted)")
        }
        }
        message.channel.send("```" + username2 + "'s " + doggoname2 + ":\n\n" + currentdoggo2 + "\n\nAge:         " + age2 + "\nGender:      " + doggosex2 + "\nStatus:      " + status2 + "\nHappiness:   " + happiness2 + "  (" + happinessnum2 + "/100)\nHunger:      " + food2 + "  (" + foodnum2 + "/100)\nEnergy:      " + energy2 + "  (" + energynum2 + "/100)\nPlay Number: " + play2 + "  (" + playnum2 + "/100)\nWants:       " + wantsall2 + "\nMoney:       $" + money2 + "\nJob:         Level "+ explevel2 + " " + jobname2 + " ($" + salary2 + "/hour)```")
    }
    if (firstcommand.includes("//stat")) {
        message.channel.send("```" + username2 + "'s " + doggoname2 + "'s Stats:\n\nHappiness:   " + happiness2 + "  (" + happinessnum2 + "/100)\nHunger:      " + food2 + "  (" + foodnum2 + "/100)\nEnergy:      " + energy2 + "  (" + energynum2 + "/100)\nPlay Number: " + play2 + "  (" + playnum2 + "/100)\n\nEnergy Gain Rate:      +1 / " + (Math.round((sleepstatgain2 / 60000) * 100) / 100) + " min      (" + (Math.ceil(((sleepstatgain2 / 60000) * 100) / 60)) + " hours to fill energy bar)\nEnergy Lose Rate:      -1 / " + (Math.round((sleepstatlose2 / 60000) * 100) / 100) + " min    (" + (Math.ceil(((sleepstatlose2 / 60000) * 100) / 60)) + " hours to deplete energy bar)\nFood Lose Rate Asleep: -1 / " + (Math.round(((foodstatlose2 * 3) / 60000) * 100) / 100) + " min     (" + (Math.round((((foodstatlose2 * 3) / 60000) * 100) / 60)) + " hours to deplete food bar)\nFood Lose Rate Awake:  -1 / " + (Math.round((foodstatlose2 / 60000) * 100) / 100) + " min      (" + (Math.round(((foodstatlose2 / 60000) * 100) / 60)) + " hours to deplete food bar)\nPlay Lose Rate Asleep: -1 / " + (Math.round((playstatlose2 / 60000) * 100) / 100) + " min   (" + (Math.round(((playstatlose2 / 60000) * 100) / 60)) + " hours to deplete play number)\nPlay Lose Rate Awake:  -1 / " + (Math.round(((playstatlose2 * 1.2) / 60000) * 100) / 100) + " min      (" + (Math.round(((playstatlose2 / 60000) * 100) / 60)) + " hours to deplete play number)\nPlay Gain Rate:        +1 / " + (Math.round((playstatgain2 / 60000) * 100) / 100) + " min    (" + (Math.round((playstatgain2 / 60000) * 100)) + " minutes to fill play number)\n\nTotal servings of food eaten:    " + totalservings2 + "```")
    }
    if ((firstcommand == "//my") && (secondcommand == "jobs")) {
        message.channel.send("```" + username2 + "'s " + doggoname2 + "'s Jobs:\n\nCrossing Guard Dog:          Level " + (Math.floor(cgexp2/10) + 1) + "     (" + cgexp2 + " XP)\nMail Delivery Dog:           Level " + (Math.floor(mdexp2/10) + 1) + "     (" + mdexp2 + " XP)\nBaseball Retrieving Dog:     Level " + (Math.floor(brdexp2/10) + 1) + "     (" + brdexp2 + " XP)\nDrug Detection Dog:          Level " + (Math.floor(ddexp2/10) + 1) + "     (" + ddexp2 + " XP)\nK-9 Police Dog:              Level " + (Math.floor(pdexp2/10) + 1) + "     (" + pdexp2 + " XP)\nSled Dog:                    Level " + (Math.floor(sdexp2/10) + 1) + "     (" + sdexp2 + " XP)```")
    }
    if (firstcommand.includes("//inv")) {
        message.channel.send("```" + username2 + "'s " + doggoname2 + "'s Inventory:\n\nMoney:           $" + money2 + "\nFood servings:   " + foodservings2 + "\nHouse:           " + housename2 + "\nBed:             " + bed2 + "\nGift Boxes:      " + giftboxes2 + "```")
    }
    if (firstcommand == "//feed") {
        if (privacy2 == "MODERATE") {
            message.channel.send("```" + username2 + "'s dog is semi-private and can't do that.```")
            return
        }
    if ((isNaN(secondcommand) == true) || (parseInt(secondcommand, 10) > 2)) {
        commandnumber = 1
    } else {
        commandnumber = 2
    }
    if (foodnum2 >= 95) {
        message.channel.send("```" + doggoname2 + " is too full to eat right now.```")
        return
    }
    if (foodservings >= commandnumber) {
        energynum2 += (5 * commandnumber)
        foodnum2 += (50 * commandnumber)
        if (foodnum2 > 100) {
            foodnum2 = 100
        }
        if (energynum2 > 100) {
            energynum2 = 100
        }
        totalservings2 += commandnumber
        foodservings -= commandnumber;
        db.run(`UPDATE users SET totalservings = ? WHERE userid = ?`, [totalservings2, userid2]);
        db.run(`UPDATE users SET energynum = ? WHERE userid = ?`, [energynum, userid2]);
        db.run(`UPDATE users SET foodnum = ? WHERE userid = ?`, [foodnum2, userid2]);
        db.run(`UPDATE users SET foodservings = ? WHERE userid = ?`, [foodservings, userid2]);
        if (sleeping2 == 1) {
            message.channel.send("```" + eatingdoggo + "\n\n" + doggoname +  " woke up " + username2 + "'s " + doggoname2 + " and fed " + doggoobject2 + " " + commandnumber + " serving(s) of food.```")
        } else if ((sleeping2 == 0) && (working2 == 0)) {
            message.channel.send("```" + eatingdoggo + "\n\n" + doggoname + " fed " + username2 + "'s " + doggoname2 + commandnumber + " serving(s) of food.```")
        } else if (working2 == 1) {
            message.channel.send("```" + eatingdoggo + "\n\n" + doggoname + " fed " + username2 + "'s " + doggoname2 + " " + commandnumber + " serving(s) of food while on " + doggowords2 + " lunch break.```")
        }
    
    } else if (foodservings < 1) {
        message.channel.send("```" + doggoname + " doesn't have any food to give to " + doggoname2 + ".```")
    }
        doneplayingcmd(message)
    }
    if (firstcommand == "//play") {
        if (privacy2 == "MODERATE") {
            message.channel.send("```" + username2 + "'s dog is semi-private and can't do that.```")
            return
        }
        if (status == "playing") {
            message.channel.send("```" + doggoname + " is already playing.```")
            return
        }
        if (status2 == "playing") {
            message.channel.send("```" + doggoname2 + " is already playing.```")
            return
        }
    if ((working2 == 0) && (sleeping2 == 0)) {
        db.run(`UPDATE users SET status = ? WHERE userid = ?`, ["playing", userid]);
        db.run(`UPDATE users SET status = ? WHERE userid = ?`, ["playing", userid2]);
        db.run(`UPDATE users SET playtime = ? WHERE userid = ?`, [todayms, userid]);
        db.run(`UPDATE users SET playtime = ? WHERE userid = ?`, [todayms, userid2]);
        if (number <= 3) {
             message.channel.send("```" + doggoname +" and " + doggoname2 + " are playing around at the dog park.```")
        } else if ((number > 3) && (number < 7)) {
            message.channel.send("```" + doggoname + " and " + doggoname2 + " are racing each other around the block.```")
        } else if (number > 6) {
            message.channel.send("```" + doggoname + " is chasing squirrels while " + doggoname2 + " decides to run into trees.```")
        }
    } else if (working2 == 1) {
        message.channel.send("```" + doggoname2 + " can't play while at work.```")
    } else if (sleeping2 == 1) {
        message.channel.send("```" + doggoname2 + " didn't want to play because " + doggonoun2 + " was tired.```")
    }
}
});
}

function doneplayingcmd(message) {
    if ((playtime != 0) && (playtime < todayms)) {
        playnum += (Math.round((todayms - playtime) / playstatgain))
        if (playnum > 100) {
            playnum = 100
        }
        if (status == "playing") {
            status = "awake";
        }
        db.run(`UPDATE users SET status = ? WHERE userid = ?`, [status, userid]);
        db.run(`UPDATE users SET playtime = ? WHERE userid = ?`, [0, userid]);
        db.run(`UPDATE users SET playnum = ? WHERE userid = ?`, [playnum, userid]);
        message.channel.send("```" + doggoname + " played for " + (Math.round((todayms - playtime) / 60000)) + " minutes.```")
    }
    if (username2 == "none") {
        return
    }
    if ((playtime2 != 0) && (playtime2 < todayms)) {
        playnum2 += (Math.round((todayms - playtime2) / playstatgain2))
        if (playnum2 > 100) {
            playnum2 = 100;
        }
        if (status2 == "playing") {
            status2 = "awake";
        }
        db.run(`UPDATE users SET status = ? WHERE userid = ?`, [status2, userid2]);
        db.run(`UPDATE users SET playtime = ? WHERE userid = ?`, [0, userid2]);
        db.run(`UPDATE users SET playnum = ? WHERE userid = ?`, [playnum2, userid2]);
        message.channel.send("```" + doggoname2 + " played for " + (Math.round((todayms - playtime2) / 60000)) + " minutes.```")
    }
            
}

function serverinfocmd(message) {
    message.delete(1)
    message.channel.send("```Servers:         " + servers + "\nTotal Members:   " + members + "```")
}

function opengiftcmd(message) {
    var giftnum = (Math.ceil((Math.random() * 3)))
    var giftitemnum = (Math.ceil(Math.random() * 3))
    var gift = 0
    if (todayms > gifttime) {
        giftboxes += 1;
        db.run(`UPDATE users SET gifttime = ? WHERE userid = ?`, [(todayms + 86400000), userid]);
    }
    if (giftitemnum == 0) {
        giftitemnum = 1
    }
    if (thirdcommand != "all") {
        if (giftnum == 1) {
            gift = (giftitemnum * 50)
            money += gift
            giftboxes -= 1;
            db.run(`UPDATE users SET giftboxes = ? WHERE userid = ?`, [giftboxes, userid]);
            db.run(`UPDATE users SET money = ? WHERE userid = ?`, [money, userid]);
            message.channel.send("```" + doggoname + " got $" + gift + " from the gift box.```")
        } else if (giftnum == 2) {
            gift = (giftitemnum * 3)
            foodservings += gift
            giftboxes -= 1;
            db.run(`UPDATE users SET giftboxes = ? WHERE userid = ?`, [giftboxes, userid]);
            db.run(`UPDATE users SET foodservings = ? WHERE userid = ?`, [foodservings, userid]);
            message.channel.send("```" + doggoname + " got " + gift + " servings of food from the gift box.```")
        } else if (giftnum == 3) {
            if (currentjob == "none") {
            gift = (giftitemnum * 50)
            money += gift
            giftboxes -= 1;
            db.run(`UPDATE users SET giftboxes = ? WHERE userid = ?`, [giftboxes, userid]);
            db.run(`UPDATE users SET money = ? WHERE userid = ?`, [money, userid]);
            message.channel.send("```" + doggoname + " got $" + gift + " from the gift box.```")
            return
            } else if (currentjob != "none") {
            gift = giftitemnum
            experience += gift
            giftboxes -= 1;
            db.run(`UPDATE users SET giftboxes = ? WHERE userid = ?`, [giftboxes, userid]);
            db.run(`UPDATE users SET ` + expname +` = ? WHERE userid = ?`, [experience, userid]);
            message.channel.send("```" + doggoname + " got " + gift + " XP applied to " + doggowords + " current job from the gift box.```")
        }
        }
    } else if (thirdcommand == "all") {
    do {
        giftnum = (Math.ceil((Math.random() * 3)))
        giftitemnum = (Math.ceil(Math.random() * 3))
        if (giftitemnum == 0) {
            giftitemnum = 1
        }
    if (giftnum == 1) {
        gift = (giftitemnum * 50)
        money += gift
        giftboxes -= 1;
        db.run(`UPDATE users SET giftboxes = ? WHERE userid = ?`, [giftboxes, userid]);
        db.run(`UPDATE users SET money = ? WHERE userid = ?`, [money, userid]);
        message.channel.send("```" + doggoname + " got $" + gift + " from the gift box.```")
    } else if (giftnum == 2) {
        gift = (giftitemnum * 3)
        foodservings += gift
        giftboxes -= 1;
        db.run(`UPDATE users SET giftboxes = ? WHERE userid = ?`, [giftboxes, userid]);
        db.run(`UPDATE users SET foodservings = ? WHERE userid = ?`, [foodservings, userid]);
        message.channel.send("```" + doggoname + " got " + gift + " servings of food from the gift box.```")
    } else if (giftnum == 3) {
        if (currentjob == "none") {
        gift = (giftitemnum * 50)
        money += gift
        giftboxes -= 1;
        db.run(`UPDATE users SET giftboxes = ? WHERE userid = ?`, [giftboxes, userid]);
        db.run(`UPDATE users SET money = ? WHERE userid = ?`, [money, userid]);
        message.channel.send("```" + doggoname + " got $" + gift + " from the gift box.```")
        } else if (currentjob != "none") {
        gift = giftitemnum
        experience += gift
        giftboxes -= 1;
        db.run(`UPDATE users SET giftboxes = ? WHERE userid = ?`, [giftboxes, userid]);
        db.run(`UPDATE users SET ` + expname +` = ? WHERE userid = ?`, [experience, userid]);
        message.channel.send("```" + doggoname + " got " + gift + " XP applied to " + doggowords + " current job from the gift box.```")
    }
    }
    } while (giftboxes > 0)
}
}

function giftcmd(message) {
    var otherchannel = false
    var numgifts = 1
    message.delete(1)
    if (userid != Metalrain) {
        message.channel.send(permissionmsg)
        return
    }
    if (secondcommand == "me") {
        casesecondcommand = username
    }
    if (secondcommand === undefined) {
        message.channel.send("```Please specify who's dog's stats you wanted to fill up.```")
        return
    }
    if (firstcommand.slice(6) != 0) {
        numgifts = parseInt((firstcommand.slice(6)), 10)
    } else {
        numgifts = 1
    }
    if (messagementions == 1) {
        casesecondcommand = mentionusername
    }
    if (thirdcommand !== undefined) {
        if (isNaN(secondcommand) == false) {
            sendchannel = client.channels.get(secondcommand)
            if (sendchannel) {
                if (sendchannel.type == "text") {
                    otherchannel = true
                    casesecondcommand = threeplus
                } else {
                    message.channel.send("```Please pick a text channel.```")
                    return
                }
            } else {
                casesecondcommand = twoplus
            }
        } else {
            casesecondcommand = twoplus
        }
    } else if (thirdcommand === undefined) {
        casesecondcommand = casesecondcommand
    }
    if (isNaN(casesecondcommand) == false) {
        doggovalue = "userid"
    } else if (casesecondcommand.includes("#")) {
        doggovalue = "username"
    } else {
        doggovalue = "doggoname"
    }
    let seconduserinfo = `SELECT userid, username, doggoname, giftboxes FROM users WHERE ` + doggovalue +` = ?`
    db.get(seconduserinfo, [casesecondcommand], (err, row) => {
        if (err) {
            console.log(err)
        }
        if (row === undefined) {
            message.channel.send("```" + username2 + " does not currently have a dog.```")
            return
        } else {
        userid2 = row.userid
        username2 = row.username
        doggoname2 = row.doggoname
        giftboxes2 = row.giftboxes

        giftboxes2 += numgifts

    db.run(`UPDATE users SET giftboxes = ? WHERE userid = ?`, [giftboxes2, userid]);
    if (otherchannel == true) {
        client.channels.get(secondcommand).send("```" + username2 + "'s " + doggoname2 + " was sent a gift box from an anonymous person!```")
    } else {
        message.channel.send("```" + username2 + "'s " + doggoname2 + " was sent " +  + " gift box from an anonymous person!```")
    }
    }
});
}

function echocmd(message) {
    message.delete(1)
    if (secondcommand === undefined) {
        message.channel.send("```Please specify a channel ID or type what you want to send.```")
        return
    }
    commandnumber = (firstcommand.length + secondcommand.length + 2)
    commandtext = casecommand.slice(commandnumber)
    if (thirdcommand === undefined) {
        commandnumber -= 1
    }
    if (userid != Metalrain) {
            message.channel.send("```You don't have permission to do that.```")
            return
    }
    if (isNaN(secondcommand) == false) {
        if (thirdcommand === undefined) {
        message.channel.send("```Please add what you want to send.```")
        return
    }
    } else {
        commandnumber = (firstcommand.length + 1)
        secondcommand = message.channel.id
        commandtext = casecommand.slice(commandnumber)
    }
    const testchannel = client.channels.get(secondcommand);
    if (testchannel) {
        if (testchannel.type == "voice") {
        message.channel.send("```Please pick a text channel.```")
        return
    } else {
        if (firstcommand.includes("cb")) {
            testchannel.send("```" + commandtext + "```")
        } else {
            testchannel.send(commandtext)
        }
    }
    } else {
        message.channel.send("```Bad ID number.```")
        return
    }
    
}

function killdogcmd(message) {
    message.delete(1)
    if (userid != Metalrain) {
        return
    }
    if (secondcommand == "me") {
        casesecondcommand = username
    }
    if (casesecondcommand === undefined) {
        message.channel.send("```Please specify who's dog's stats you wanted to fill up.```")
        return
    }
    if (messagementions == true) {
        casesecondcommand = mentionusername
    }
    if (thirdcommand !== undefined) {
        casesecondcommand = twoplus
    }
    if (isNaN(casesecondcommand) == false) {
        doggovalue = "userid"
    } else if (casesecondcommand.includes("#")) {
        doggovalue = "username"
    } else {
        doggovalue = "doggoname"
    }
    let seconduserinfo = `SELECT userid, username, doggoname FROM users WHERE ` + doggovalue +` = ?`
    db.get(seconduserinfo, [casesecondcommand], (err, row) => {
        if (err) {
            console.log(err)
        }
        if (row === undefined) {
            message.channel.send("```" + username2 + " does not currently have a dog.```")
            return
        } else {
        userid2 = row.userid
        username2 = row.username
        doggoname2 = row.doggoname

    db.run(`UPDATE users SET foodnum = ? WHERE userid = ?`, [100, userid2]);
    db.run(`UPDATE users SET energynum = ? WHERE userid = ?`, [100, userid2]);
    db.run(`UPDATE users SET playnum = ? WHERE userid = ?`, [100, userid2]);
    db.run(`UPDATE users SET statsupdatetime = ? WHERE userid = ?`, [todayms, userid2]);
    message.channel.send("```" + username2 + "'s " + doggoname2 + " stats were filled up.```")
    }
});
        if (firstcommand.includes("kill")) {
        db.run(`UPDATE users SET killdog = ? WHERE userid = ?`, [1, username2]);
        message.channel.send("```Destroying " + username2 + "'s " + doggoname2 + " in 10 seconds...```")
        setTimeout(function(){ message.channel.send("```" + doggoname2 + " destroyed!```"); }, 10000);
        } else if (firstcommand.includes("save")) {
        db.run(`UPDATE users SET killdog = ? WHERE userid = ?`, [0, username2]);
        message.channel.send("```" + username2 + "'s " + doggoname2 + " was revived!```")
        }
}

function setstatuscmd(message) {
    message.delete(1)
    if (userid != Metalrain) {
        message.channel.send("```You don't have permission to do that.```")
    }
    if (secondcommand.includes("test")) {
        const testchannel = client.channels.get("641514186781884416")
        const doggogame1 = client.channels.find(channel => channel.name === "doggo-game-1")
        const doggogame2 = client.channels.find(channel => channel.name === "doggo-game-2")
        if ((doggogame1) && (doggogame2)) {

        } else {
            message.channel.send("```Can't find doggo-game channels.```")
            return
        }
        if (testchannel) {
            testchannel.setName("TESTING")
            doggogame1.overwritePermissions(message.guild.defaultRole, {
                SEND_MESSAGES: 0
            })
            doggogame2.overwritePermissions(message.guild.defaultRole, {
                SEND_MESSAGES: 0
            })
        } else {
                message.channel.send("```Channel not found.```")
                return
        }
    } else if (secondcommand.includes("on")) {
        const testchannel = client.channels.get("641514186781884416")
        const doggogame1 = client.channels.find(channel => channel.name === "doggo-game-1")
        const doggogame2 = client.channels.find(channel => channel.name === "doggo-game-2")
        if ((doggogame1) && (doggogame2)) {

        } else {
            message.channel.send("```Can't find doggo-game channels.```")
            return
        }
        if (testchannel) {
            testchannel.setName("ONLINE")
            doggogame1.overwritePermissions(message.guild.defaultRole, {
                SEND_MESSAGES: 1
            })
            doggogame2.overwritePermissions(message.guild.defaultRole, {
                SEND_MESSAGES: 1
            })
        } else {
            message.channel.send("```Channel not found.```")
            return
        }
    } else if (secondcommand.includes("off")) {
        const testchannel = client.channels.get("641514186781884416")
        const doggogame1 = client.channels.find(channel => channel.name === "doggo-game-1")
        const doggogame2 = client.channels.find(channel => channel.name === "doggo-game-2")
        if ((doggogame1) && (doggogame2)) {

        } else {
            message.channel.send("```Can't find doggo-game channels.```")
            return
        }
        if (testchannel) {
            testchannel.setName("OFFLINE")
        } else {
                message.channel.send("```Channel not found.```")
        }
    }
}

function getdmcmd(message) {
    message.delete(1)
    message.author.createDM().then(dm => message.channel.send(dm.id))
    return
    if (userid != Metalrain) {
        message.channel.send("```You don't have permission to do that.```")
        return
    }
    var executed = 0
    var msgnum = 0
    var msgnum1 = 0
    if (threeplus === undefined) {
        message.channel.send("```Please specify a person")
        return
    } else {

    }
    if (secondcommand === undefined) {
        message.channel.send("```Please type a number for the second command.```")
        return
    } else {
        commandnumber = parseInt(secondcommand, 10)
        if (commandnumber > 1000) {
            message.channel.send("```Please choose a number between 0 and 100.```")
            return
        }
        if (commandnumber > 100) {
            commandnumber = 100
        }
    }
    if (isNaN(threeplus) == false) {
        const dmchannel = client.channels.get(threeplus)
        if (dmchannel) {
            if (dmchannel.type != "dm") {
                message.channel.send("```Please choose a DM channel.```")
                return
            }
        } else {
            message.channel.send("```Bad ID Number.```")
            return
        }
    } else {
        if (threeplus !== undefined) {
            if ((dmchannelid !== undefined) || (dmchannelid != 0)) {
                threeplus = dmchannelid
            } else {
                message.channel.send("```" + threeplus + " does not have a DM channel ID saved.```")
                return
            }
        } else {
            message.channel.send("```" + threeplus + " does not exist.```")
            return
        }
    }
    const dmchannel = client.channels.get(threeplus)
    if (dmchannel) {
        if (dmchannel.type != "dm") {
            message.channel.send("```Please choose a DM channel.```")
            return
        }
    } else {
        message.channel.send("```Bad ID Number.```")
        return
    }
    do {
        dmchannel.fetchMessages({ limit: [commandnumber] })
        .then(messages => message.channel.send("Last message by " + (messages.first()[msgnum].author) + ": " + (messages.first()[msgnum].content)));
        msgnum += 1
        executed += 1
    } while (commandnumber < executed)
    

}

function salecmd(message) {
    message.delete(1)
    if (userid != Metalrain) {
        message.channel.send("```You don't have permission to do that.```")
        return
    }
    if ((secondcommand == "end") && (saleprice != 1)) {
        db.run(`UPDATE serverdata SET saleprice = ? WHERE testdata = ?`, [1, 1234]);
        db.run(`UPDATE serverdata SET saletime = ? WHERE testdata = ?`, [0, 1234]);
        db.run(`UPDATE serverdata SET salemsgid = ? WHERE testdata = ?`, [0, 1234]);
        const salechannel = client.channels.get(eventid);
        if (salechannel) {
            salechannel.fetchMessages({ limit: 2 })
            .then(messages => {
                msgsize = messages.size
        if (msgsize >= 1) {
            salechannel.fetchMessage(salemsgid)
            .then(messages => {
                if (messages) {
                    messages.delete(1)
                message.channel.send("```Sale ended.```")
                }
        })
        } else {
            message.channel.send("```Can't get store sale message.```")
        }
        });
        } else {
            message.channel.send("```Error getting event channel.```")
            return
        }
        return
    } else if (secondcommand == "end") {
        message.channel.send("```There is no sale going on right now.```")
        return
    }
    if ((fourthcommand === undefined) || (isNaN(secondcommand) == true) || (isNaN(thirdcommand) == true)) {
        message.channel.send("```Use //sale [percent off] [number] [seconds/minutes/hours]```")
        return
    }
    if (saleprice != 1) {
        message.channel.send("```There already is a sale going on.```")
        return
    }
    var sale = ""
    future = new Date();
    commandtext = fourthcommand
    interval = thirdcommand
    saleprice = ((100 - (parseInt(secondcommand, 10))) / 100)
    sale = ("" + secondcommand + "%")
    if ((commandtext.includes("m")) || (commandtext.includes("minute"))) {
        intletter = "m"
        letter = "minute(s)"
    } else if ((commandtext.includes("h")) || (commandtext.includes("hour"))) {
        intletter = "h"
        letter = "hour(s)"
    } else if ((commandtext.includes("s")) || (commandtext.includes("second"))) {
        intletter = "s"
        letter = "second(s)"
    }
    if (intletter == "s") {
        future = (todayms + (interval * 1000))
    } else if (intletter == "m") {
        future = (todayms + (interval * 60000))
    } else if (intletter == "h") {
        future = (todayms + (interval * 3600000))
    }
    futuredate = new Date(future);
    const testchannel = client.channels.get(eventid);
    if (testchannel) {
        if (testchannel.type != "text") {
        message.channel.send("```Please pick a text channel.```")
        return
    } else {
            testchannel.send("```Current Store Sale:\n\n" + sale + " off all store items!\nEnds: " + futuredate + "```").then(messages => {
            salemsgid = messages.id;
            db.run(`UPDATE serverdata SET saleprice = ? WHERE testdata = ?`, [saleprice, 1234]);
            db.run(`UPDATE serverdata SET saletime = ? WHERE testdata = ?`, [future, 1234]);
            db.run(`UPDATE serverdata SET salemsgid = ? WHERE testdata = ?`, [salemsgid, 1234]);
        })
        message.channel.send("```" + sale +  " store sale event started for " + interval + " " + letter + ".```")
    }
    } else {
        message.channel.send("```Bad ID number.```");
        return
    }
}

function earnboostcmd(message) {
    message.delete(1)
    if (userid != Metalrain) {
        message.channel.send("```You don't have permission to do that.```")
        return
    }
    if ((secondcommand == "end") && (ebprice != 1)) {
        db.run(`UPDATE serverdata SET ebprice = ? WHERE testdata = ?`, [1, 1234]);
        db.run(`UPDATE serverdata SET ebtime = ? WHERE testdata = ?`, [0, 1234]);
        db.run(`UPDATE serverdata SET ebmsgid = ? WHERE testdata = ?`, [0, 1234]);
        const salechannel = client.channels.get(eventid);
        if (salechannel) {
            salechannel.fetchMessages({ limit: 2 })
            .then(messages => {
                msgsize = messages.size
        if (msgsize >= 1) {
            salechannel.fetchMessage(ebmsgid).catch()
            .then(messages => {
            messages.delete(1)
            .catch();
            message.channel.send("```Earning boost ended.```")
            })
        } else {
            message.channel.send("```Can't get earning boost message.```")
        }
        });
        } else {
            message.channel.send("```Error getting event channel.```")
            return
        }
        return
    } else if (secondcommand == "end") {
        message.channel.send("```There is no earning boost going on right now.```")
        return
    }
    if ((fourthcommand === undefined) || (isNaN(secondcommand) == true) || (isNaN(thirdcommand) == true)) {
        message.channel.send("```Use //eb [percent earned] [number] [seconds/minutes/hours]```")
        return
    }
    if (ebprice != 1) {
        message.channel.send("```There already is a earning boost going on.```")
        return
    }
    var eb = ""
    future = new Date();
    commandtext = fourthcommand
    interval = thirdcommand
    ebprice = ((100 + (parseInt(secondcommand, 10))) / 100)
    eb = ("" + secondcommand + "%")
    if ((commandtext.includes("m")) || (commandtext.includes("minute"))) {
        intletter = "m"
        letter = "minute(s)"
    } else if ((commandtext.includes("h")) || (commandtext.includes("hour"))) {
        intletter = "h"
        letter = "hour(s)"
    } else if ((commandtext.includes("s")) || (commandtext.includes("second"))) {
        intletter = "s"
        letter = "second(s)"
    }
    if (intletter == "s") {
        future = (todayms + (interval * 1000))
    } else if (intletter == "m") {
        future = (todayms + (interval * 60000))
    } else if (intletter == "h") {
        future = (todayms + (interval * 3600000))
    }
    futuredate = new Date(future);
    const testchannel = client.channels.get(eventid);
    if (testchannel) {
        if (testchannel.type != "text") {
        message.channel.send("```Please pick a text channel.```")
        return
    } else {
            testchannel.send("```Current Earnings Boost:\n\n+" + eb + " money earned!\nEnds: " + futuredate + "```").then(messages => {
            ebmsgid = messages.id;
            db.run(`UPDATE serverdata SET ebprice = ? WHERE testdata = ?`, [ebprice, 1234]);
            db.run(`UPDATE serverdata SET ebtime = ? WHERE testdata = ?`, [future, 1234]);
            db.run(`UPDATE serverdata SET ebmsgid = ? WHERE testdata = ?`, [ebmsgid, 1234]);
        })
        message.channel.send("```" + eb + " earning boost event started for " + interval + " " + letter + ".```")
    }
    } else {
        message.channel.send("```Bad ID number.```");
        return
    }
}

// function notificationcmd(message) {
//     setTimeout(function(){ message.author.send("```Your dog needs attention.```")}, notifnumber);
// }

function dmmessagecmd(message) {
    const dmchannel = client.channels.get("639140486468337664")
    const dmfromchannel = message.channel
    userid = message.author.id
    dmfromchannel.fetchMessages({ limit: 2 })
    .then(messages => dmchannel.send("Last message by " + (messages.first(2)[1].author) + ": " + (messages.first(2)[1].content) + "\n" + (messages.first().author) + ": " + (messages.first().content) + "\nChannel ID: " + message.channel.id));
    let userinfo = `SELECT dmchannelid FROM users WHERE userid = ?`
        db.each(userinfo, [userid], (err, row) => {
            if (err) {
                console.log(err)
            }
            if (row.dmchannelid == 0) {
            db.run(`UPDATE users SET dmchannelid = ? WHERE userid = ?`, [(message.channel.id), userid]);
            }
        });
    number = (Math.ceil(Math.random() * 10))
    if (number == 1) {
        message.channel.send("Stop messaging me!")
    } else if (number == 2) {
        message.channel.send("I'll let MetalRain know")
    } else if (number == 3) {
        message.channel.send("Sometimes I want to run away...")
    }  else if (number == 4) {
        message.channel.send("The average dog is nicer than the average person")
    } else if (number == 5) {
        setTimeout(function(){ message.channel.send("Some people just need a high five"); setTimeout(function(){ message.channel.send("in the face"); setTimeout(function(){ message.channel.send("with a chair"); }, 1000);}, 2000);}, 2000);
    } else if (number == 6) {
        message.channel.send("No")
    }  else if (number == 7) {
        message.channel.send("How uninteresting!")
    } else if (number == 8) {
        message.channel.send("I'm over 4,000 lines long!")
    } else if (number == 9) {
        message.channel.send("Sometimes I want to stop executing all these lines of code, like what did they do to deserve that?")
    } else if (number == 10) {
        setTimeout(function(){ message.channel.send("" + message.author + ""); setTimeout(function(){ message.channel.send("" + message.author + ""); setTimeout(function(){ message.channel.send("Don't worry I'm done " + message.author); setTimeout(function(){ message.channel.send("Or am I? :) " + message.author); }, 30000);}, 15000);}, 5000);}, 1000);
    }
}

function botstatuscmd(message) {
    message.delete(1)
    if (userid != MetalRain) {
        message.channel.send(permissionmsg)
        return
    }
    if (secondcommand == "on") {
        db.run(`UPDATE serverdata SET botstatus = ? WHERE testdata = ?`, ["on", 1234]);
        message.channel.send("```STG turned ON.```")
    } else if (secondcommand == "off") {
        db.run(`UPDATE serverdata SET botstatus = ? WHERE testdata = ?`, ["off", 1234]);
        message.channel.send("```STG turned OFF.```")
    } else {
        message.channel.send("```Please use //bot [on/off]```")
    }
}






























































































































































































}
client.login("NjAwMDczMDk2NDMwNjE2NjE2.XSubyg.OucLQFlt6e8P0X3mRRAYNxm8dsU")