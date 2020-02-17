const Discord = require('discord.js');
const client = new Discord.Client();
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./STG.db', sqlite3.OPEN_READWRITE);
db.run('CREATE TABLE IF NOT EXISTS users(userid TEXT NOT NULL, username TEXT NOT NULL, dmchannelid TEXT NOT NULL, cmdchannelid TEXT NOT NULL, cmdpassenter INTEGER NOT NULL, cmdnumber INTEGER NOT NULL, commandnumber INTEGER NOT NULL, commandtext TEXT NOT NULL, chatid INTEGER NOT NULL, chatnum TEXT NOT NULL, sgscore INTEGER NOT NULL, sghighscore INTEGER NOT NULL, rpsbotscore INTEGER NOT NULL, rpsuserscore INTEGER NOT NULL, rpsgame INTEGER NOT NULL, doggocreate INTEGER NOT NULL, doggocreatedtime INTEGER NOT NULL, doggoname TEXT NOT NULL, currentdoggo TEXT NOT NULL, breed TEXT NOT NULL, money INTEGER NOT NULL, foodnum INTEGER NOT NULL, energynum INTEGER NOT NULL, poopcooldown INTEGER NOT NULL, jobcooldown INTEGER NOT NULL, breedcooldown INTEGER NOT NULL, statsupdatetime INTEGER NOT NULL, sleeping INTEGER NOT NULL, sleeptime INTEGER NOT NULL, doggosex TEXT NOT NULL, foodservings INTEGER NOT NULL, applytime INTEGER NOT NULL, appliedjob TEXT NOT NULL, currentjob TEXT NOT NULL, working INTEGER NOT NULL, workstarttime INTEGER NOT NULL, workendtime INTEGER NOT NULL, status TEXT NOT NULL, quit INTEGER NOT NULL, playnum INTEGER NOT NULL, sleepstatgain INTEGER NOT NULL, sleepstatlose INTEGER NOT NULL, foodstatlose INTEGER NOT NULL, playstatlose INTEGER NOT NULL, playstatgain INTEGER NOT NULL, bed TEXT NOT NULL, doggotime INTEGER NOT NULL, playtime INTEGER NOT NULL, totalservings INTEGER NOT NULL, totalworkhours INTEGER NOT NULL, totalplaytime INTEGER NOT NULL, totalmoney INTEGER NOT NULL, exp TEXT NOT NULL, salary INTEGER NOT NULL, naptime INTEGER NOT NULL, lastinttime INTEGER NOT NULL, gifttime INTEGER NOT NULL, giftboxes INTEGER NOT NULL, killdog INTEGER NOT NULL, house TEXT NOT NULL, notif TEXT NOT NULL, privacy TEXT NOT NULL, device TEXT NOT NULL, playtimer INTEGER NOT NULL, worktimer INTEGER NOT NULL, sleeptimer INTEGER NOT NULL, applytimer INTEGER NOT NULL, lottery TEXT NOT NULL, lotterynumber INTEGER NOT NULL, lbpoints INTEGER NOT NULL, pregnant INTEGER NOT NULL, pregnanttime INTEGER NOT NULL, pups INTEGER NOT NULL, pupshunger INTEGER NOT NULL, bredpups INTEGER NOT NULL, achievements TEXT NOT NULL, achnum INTEGER NOT NULL, energyshots INTEGER NOT NULL, shotcd INTEGER NOT NULL, shotdailycd INTEGER NOT NULL, shotbought INTEGER NOT NULL, totalshots INTEGER NOT NULL, geckopoints INTEGER NOT NULL, totalplays INTEGER NOT NULL, totalfeeds INTEGER NOT NULL, bathnum INTEGER NOT NULL, bathstatlose INTEGER NOT NULL, notifmsgs TEXT NOT NULL, streakstart INTEGER NOT NULL)');
db.run('CREATE TABLE IF NOT EXISTS servers(guildid TEXT NOT NULL, password INTEGER NOT NULL, passwordnum INTEGER NOT NULL, lock INTEGER NOT NULL, glevel INTEGER NOT NULL, glevelmin INTEGER NOT NULL, ggnum INTEGER NOT NULL, mute INTEGER NOT NULL, cooldowntime INTEGER NOT NULL, interval INTEGER NOT NULL, intletter TEXT NOT NULL, lockenter INTEGER NOT NULL, locknum INTEGER NOT NULL, cmdnumber INTEGER NOT NULL, talkchance INTEGER NOT NULL)');
db.run('CREATE TABLE IF NOT EXISTS serverdata(testdata INTEGER NOT NULL, datatime INTEGER NOT NULL, saleprice INTEGER NOT NULL, saletime INTEGER NOT NULL, salemsgid TEXT NOT NULL, ebprice INTEGER NOT NULL, ebtime INTEGER NOT NULL, ebmsgid TEXT NOT NULL, boxprice INTEGER NOT NULL, boxtime INTEGER NOT NULL, boxmsgid TEXT NOT NULL, person TEXT NOT NULL, botstatus TEXT NOT NULL)');
db.close();
var botstatus = "on"
var members = 0
var servers = 0
var channels = 0
var serverchannels = ""
var chatid = 0
var chatnum = 0
var cmdchannelid = 0
var version = "Steve The Gecko® v6.0.4"
var guildid = "0"
var today = new Date;
var future = new Date;
var todayms = today.getTime();
var ttemptoday = new Date();
var ttemptodayms = ttemptoday.getTime();
var jsondata = 0
var newjsondata = 0
var mention = 0
var mentionusername = 0
var messagementions = false
var username = ""
var username2 = ""
var userid = 0
var userid2 = 0
var datatime = 0
var temptoday = new Date();
var temptodayms = temptoday.getTime();
var stopcode = 0
var person = "none"
var threeplus = ""
var fourplus = ""
var fiveplus = ""
var hours = 0
var minutes = 0
var dmmessages = ""
var dmchannelid = 0
var msgsize = 0
var MetalRain = "448516707879747635"
var permissionmsg = "```You don't have permission to do that```"
var testdata = "1234"
var space = " "
var space2 = " "
var talkchance = 0
var talknumber = 0
var directmessage = false
var personset = false

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
var arraypeeps = new Array();
var arraypeepsparams = new Array();

var interval = 1
var intletter = "s"
var cooldown = 0
var letter = "second(s)"

var mute = 0
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
var sghighscore = 0
var geckopoints = 0
var geckopoints2 = 0

var regulardoggo = "^..^      /\n/_/\\_____/\n   /\\   /\\ \n  /  \\ /  \\"
var poopingdoggo = "^..^      /\n/_/\\_____/\n   /\\   /\\•\n  /  \\ /  \\ •"
var breedingdoggo = "\\      ^..^    **    **    ^..^      /\n \\_____/\\_\\   **********   /_/\\_____/\n /\\   /\\       ********       /\\   /\\\n/  \\ /  \\        ****        /  \\ /  \\\n                  **"
var eatingdoggo = "             /\n ^..^_______/\n /_/ /\\   /\\ \n|__|/  \\ /  \\"
var boxgift = "    \\/  \n   ____\n  |   |\n  |   |\n   ----"
var money = 0
var money2 = 0
var doggoname = "none"
var doggoname2 = "none"
const statbars = ["[----------]", "[#---------]", "[##--------]", "[###-------]", "[####------]", "[#####-----]", "[######----]", "[#######---]", "[########--]", "[#########-]", "[##########]"];
var foodnum = 100
var foodnum2 = 100
var energynum = 100
var energynum2 = 100
var doggowords = "her"
var doggowords2 = "her"
var doggonoun = "she"
var doggonoun2 = "she"
var doggoobject = "her"
var doggoobject2 = "her"
var statsupdate = 1
var statsupdate2 = 1
var status = "none"
var status2 = "none"
var currentjob = "none"
var playnum = 100
var playnum2 = 100
var playstatgain = 12000
var playstatgain2 = 12000
var bsleepstatgain = 360000
var bsleepstatlose = 432000
var bfoodlosestat = 300000
var bpupfoodlosestat = 1500000
var bplaystatlose = 250000
var bplaystatgain = 12000
var bbathstatlose = 1800000
var injurynum = 0
var playtime = 0
var playtime2 = 0
var totalservings = 0
var totalservings2 = 0
var totalworkhours = 0
var totalworkhours2 = 0
var totalplaytime = 0
var totalplaytime2 = 0
var totalplays = 0
var totalplays2 = 0
var totalmoney = 0
var totalmoney2 = 0
var salary = 0
var salary2 = 0
var naptime = 0
var naptime2 = 0
var gifttime = 0
var gifttime2 = 0
var giftboxes = 0
var giftboxes2 = 0
var foodprice = 5
var shotprice = 50
var saleprice = 1
var saletime = 0
var salemsgid = ""
var ebprice = 0
var ebtime = 0
var ebmsgid = ""
var boxprice = 0
var boxtime = 0
var boxmsgid = ""
var eventid = "641514186781884416"
var notif = "ON"
var notif2 = "ON"
var notifnumber = 0
var device = "PC"
var device2 = "PC"
var doggovalue = ""
var doggovalue2 = ""
var lbpoints = 0
var lbpoints2 = 0
var pups = 0
var pups2 = 0
var pupshunger = 100
var pupshunger2 = 100
var pregdays = 0
var pregdays2 = 0
var preghours = 0
var preghours2 = 0
var achievements = ""
var achievements2 = ""
var newanum = 0
var achnum = 0

//"          ^..^      /\n          /_/\\_____/\n             /\\   /\\ \n            /  \\ /  \\"
var box = "   ____\n  |    |\n  |    |"
var boxdog = "                  ^..^      /\n   ____           /_/\\_____/\n  |    |             /\\   /\\ \n  |    |            /  \\ /  \\"
var doghouse = "    __\n   /  \\\n  /____\\\n  |    |\n  |  * |"
var shed = "  _____\n /     \\\n|       |\n|    *  |"
var shack = "  _______\n /       \\\n|         |\n|      *  |"
var story1 = "  __________\n /          \\\n|            |\n|         *  |"
var story2 = "  _____________\n /             \\\n|               |\n|               |\n|            *  |"
var story3 = "  _______________\n /               \\\n|                 |\n|                 |\n|                 |\n|              *  |"
var mansion = "          .-------.\n         /\`'\`'\`'\`'\`\\\n        /\`'\`'\`'\`'\`'\`\\\n       /\`'\`'\`'\`'\`'\`'\`\\\n   .--.\`|\`\` \`\` \`\` \`\`|\`  .\n  /,^, \\|   ,^^^,   |  / \\\n / |_|  \\   |___|   | /   \\\n/________\\  |   |   |/     \\\n |  __  |   '==='   /.......\\\n | (  ) |  //\`_\`\\\\  |,^, ,^,|\n | |--| |  ||(O)||  ||_| |_||\n | |__| |  || \" ||  ||_| |_||\n |      |  ||   ||  |       |\n '======'==''===''=='======='";

var castle2 = "    /\\                                                        /\\\n   |  |                                                      |  |\n  /----\\                                                    /----\\\n [______]                                                  [______]\n  |    |         _____                        _____         |    |\n  |[]  |        [     ]                      [     ]        |  []|\n  |    |       [_______][ ][ ][ ][][ ][ ][ ][_______]       |    |\n  |    [ ][ ][ ]|     |  ,----------------,  |     |[ ][ ][ ]    |\n  |             |     |/'    ____..____    '\|     |             |\n   \\  []        |     |    /'    ||    '\\    |     |        []  /\n    |      []   |     |   |o     ||     o|   |     |  []       |\n    |           |  _  |   |     _||_     |   |  _  |           |\n    |   []      | (_) |   |    (_||_)    |   | (_) |       []  |\n    |           |     |   |     (||)     |   |     |           |\n    |           |     |   |      ||      |   |     |           |\n  /''           |     |   |o     ||     o|   |     |           ''\\\n [_____________[_______]--'------''------'--[_______]_____________]"
var castle = "     >>                  >>\n     |                   |\n  _ _*_ _             _ _*_ _\n | U U U |           | U U U |\n  \\=====/             \\=====/\n  |     |             |     |\n  |     |_ _ _ _ _ _ _|     |\n  |   I | U U U U U U | I   |\n  |     |=============|     |\n  | I   |    I        |   I |\n  |     | +         + |     |\n  |     |       I     |     |\n  |_____|-------------|_____|\n /_______\\           /_______\\\n|_________|---------|_________|"
var dogpup = "^..^_____/\n`  / \\ / \\"
var dogandpup = "^..^      /\n/_/\\_____/\n   /\\   /\\      ^..^_____/\n  /  \\ /  \\     `  / \\ / \\"

const jobsobj = {"none": {jobabv: "none",jobname: "none", jobnumber: 0,jobsalary: 0,jobtime: 0,jobindex: 0},"cg": {jobabv: "cg",jobname: "crossing guard dog",jobnumber: 5,jobsalary: 10,jobtime: 3600000,jobindex: 0},"md": {jobabv: "md",jobname: "mail delivery dog",jobnumber: 6,jobsalary: 15,jobtime: 7200000,jobindex: 1},"brd": {jobabv: "brd",jobname: "baseball retrieving dog",jobnumber: 7,jobsalary: 20,jobtime: 10800000,jobindex: 2},"dd": {jobabv: "dd",jobname: "drug detection dog",jobnumber: 18,jobsalary: 50,jobtime: 14400000,jobindex: 3},"pd": {jobabv: "pd",jobname: "k-9 police dog",jobnumber: 12,jobsalary: 35,jobtime: 10800000,jobindex: 4},"sd": {jobabv: "sd",jobname: "sled dog",jobnumber: 10,jobsalary: 25,jobtime: 21600000,jobindex: 5}};

//var {jobname, jobnumber, jobsalary, jobtime, jobindex} = jobsobj[nameOfJob];

const bedobj = {"none": {"bedcost": 0,"bedincrease" : 1},"bedsheet": {"bedcost": 25,"bedincrease": 1.1,},"mat": {"bedcost": 100,"bedincrease": 1.2,},"twin": {"bedcost": 500,"bedincrease": 1.4,},"full": {"bedcost": 1250,"bedincrease": 1.6,},"queen": {"bedcost": 2000,"bedincrease": 1.75,},"king": {"bedcost": 4000,"bedincrease": 2,}};

//var {bedcost, bedincrease} = bedobj[nameofBed];

const houseobj = {"none": {"housecost": 0, "visiblehouse": "","housename": "none"},"box": {"housecost": 15,"visiblehouse": box, "housename": "box"},"doghouse": {"housecost": 100,"visiblehouse": doghouse, "housename": "doghouse"},"shed": {"housecost": 500,"visiblehouse": shed, "housename": "shed"},"shack": {"housecost": 1500,"visiblehouse": shack, "housename": "shack"},"onestory": {"housecost": 3000,"visiblehouse": story1, "housename": "one story"},"twostory": {"housecost": 10000,"visiblehouse": story2, "housename": "two story"},"threestory": {"housecost": 15000,"visiblehouse": story3, "housename": "three story"},"mansion": {"housecost": 50000,"visiblehouse": mansion, "housename": "mansion"},"castle": {"housecost": 100000,"visiblehouse": castle, "housename": "castle"}};

//var {housecost, visiblehouse, housename} = houseobj[nameofHouse];

var safercrosswalks = "Safer Crosswalk - become a level 2 crossing guard dog"
var childsaver = "Child Saver - become a level 5 crossing guard dog"
var carstoppingmaster = "Car Stopping Master - become a level 10 crossing guard dog"
var elitecg = "Elite Crossing Guard Dog - become a level 20 crossing guard dog"

var shipthis = "Ship This - become a level 2 mail delivery dog"
var mailmaster = "Mail Master - become a level 5 mail delivery dog"
var santaclaus = "Santa Claus - become a level 10 mail delivery dog"
var elitemd = "Elite Mail Delivery Dog - become a level 20 mail delivery dog"

var littleleague = "Little League - become a level 2 baseball retrieving dog"
var majorleague = "Major League - become a level 5 baseball retrieving dog"
var grandslam = "Grand Slam - become a level 10 baseball retrieving dog"
var elitebrd = "Elite Baseball Retrieving Dog - become a level 20 baseball retrieving dog"

var veryfirstbust = "First Bust - become a level 2 drug detection dog"
var majorbust = "Major Bust - become a level 5 drug detection dog"
var mastersniffer = "Master Sniffer - become a level 10 drug detection dog"
var elitedd = "Elite Drug Detection Dog- become a level 20 drug detection dog"

var lieutenant = "Lieutenant - become a level 2 k-9 police dog"
var captain = "Captain - become a level 5 k-9 police dog"
var general = "General - become a level 10 k-9 police dog"
var elitepd = "Elite K-9 Police Dog - become a level 20 k-9 police dog"

var firstwin = "First Win - become a level 2 sled dog"
var racechampion = "Race Champion - become a level 5 sled dog"
var malamute = "Malamute - become a level 10 sled dog"
var elitesd = "Elite Sled Dog - become a level 20 sled dog"

var makingmoney = "Making Money - have more than $500 at one time"
var fourofakind = "Four of a Kind - have more than $1,000 at one time"
var bigbucks = "Big Bucks - have more than $10,000 at one time"
var castlecrasher = "Castle Crasher - have more than $100,000 at one time"

var familytime = "Family Time - have at least one puppy"
var doglover = "Dog Lover - have at least 10 puppies"
var dogapocalypse = "Dog Apocalypse - have 20 puppies at one time"

var imbroke = "I'm Broke - have a good person give you $10"
var househunter = "House Hunter - buy your first house"
var sharingcaring = "Sharing is Caring - feed someone else's dog"
var teamplayer = "Team Player - play with someone else's dog"
var maxachievements = 31

client.on('ready' , (ready) => {
    let db = new sqlite3.Database('./STG.db', sqlite3.OPEN_READWRITE);
    let getdatafs = (`SELECT * FROM serverdata WHERE testdata = ?`);
    db.get(getdatafs, [testdata], (err, row) => {
        if (err) {
            console.log(err)
        }
        if (row === undefined) {
        let dataforserver = db.prepare('INSERT INTO serverdata VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)')
        dataforserver.run(1234, 0, 1, 0, "0", 1, 0, "0", 1, 0, "0", "none", "on")
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
        serverchannels += ("\n\n" + guild.name +"\nMembers = " + guild.memberCount + "\nServer created on " + guild.createdAt + "\n")
        members += (guild.memberCount)
        servers += 1
        guild.channels.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
            serverchannels += (channel.name + " " + channel.type + " " + channel.id + "\n")
            channels += 1
        })
    })
    setInterval(function(){
        ttemptoday = new Date();
        ttemptodayms = ttemptoday.getTime();
        var timer1 = checktimer1cmd();
        var timer2 = checktimer2cmd();
        }, 30000);
function checktimer1cmd() {
    let tdb = new sqlite3.Database('./STG.db', sqlite3.OPEN_READWRITE);
    let timeruserinfo = `SELECT * FROM users`
    tdb.all(timeruserinfo, [], (err, row) => {
        if (err) {
            console.log(err);
        }
        if (row === undefined) {
            console.log("error");
            return;
        } else {
            var i = 0;
            do {
                var tempuserid = row[i].userid;
                var tempdoggoname = row[i].doggoname;
                var tempplaytimer = row[i].playtimer;
                var tempworktimer = row[i].worktimer;
                var tempsleeptimer = row[i].sleeptimer;
                var tempapplytimer = row[i].applytimer;
                var dmdone = sendnotifs(tempuserid, tempdoggoname, tempplaytimer, tempworktimer, tempsleeptimer, tempapplytimer);
                i ++;
            } while (i < row.length);
}
});
}
function sendnotifs(userid, doggoname, tempplaytimer, tempworktimer, tempsleeptimer, tempapplytimer) {
    let tdb = new sqlite3.Database('./STG.db', sqlite3.OPEN_READWRITE);
    var dmmsg = "";
    var anything = 0;
    if ((tempplaytimer != 0) && (ttemptodayms > tempplaytimer)) {
        tempplaytimer = 0;
        anything ++;
        dmmsg += (doggoname + " is ready to be done playing\n");
    }
    if ((tempworktimer != 0) && (ttemptodayms > tempworktimer)) {
        tempworktimer = 0;
        anything ++;
        dmmsg += (doggoname + "'s shift is over\n");
    }
    if ((tempsleeptimer != 0) && (ttemptodayms > tempsleeptimer)) {
        tempsleeptimer = 0;
        anything ++;
        dmmsg += (doggoname + " is at full energy\n");
    }
    if ((tempapplytimer != 0) && (ttemptodayms > tempapplytimer)) {
        tempapplytimer = 0;
        anything ++;
        dmmsg += (doggoname + "'s application is ready to be checked by using `//application`\n");
    }

    if (anything > 0) {
        tdb.run(`UPDATE users SET playtimer = ?, worktimer = ?, sleeptimer = ?, applytimer = ? WHERE userid = ?`, [tempplaytimer, tempworktimer, tempsleeptimer, tempapplytimer, userid]);
        client.fetchUser(userid).then((user) => {
            user.send(dmmsg);
            return "done";
        });
    } else {
        return "done";
    }

}
function checktimer2cmd() {
    let tdb = new sqlite3.Database('./STG.db', sqlite3.OPEN_READWRITE);
    var tempuserid = 0
    var tempshotdailycd = 0
    let shotuserinfo = `SELECT * FROM users`
    tdb.all(shotuserinfo, [], (err, row) => {
        if (err) {
            console.log(err)
        }
        if (row === undefined) {
            console.log("error")
            return
        } else {
            row.forEach((row) => {
                tempuserid = row.userid
                tempshotdailycd = row.shotdailycd
                if ((tempshotdailycd != 0) && (ttemptodayms > tempshotdailycd)) {
                    tdb.run(`UPDATE users SET shotdailycd = ? WHERE userid = ?`, [(ttemptodayms + 86400000), tempuserid]);
                    tdb.run(`UPDATE users SET shotbought = ? WHERE userid = ?`, [0, tempuserid]);
                } else if (tempshotdailycd == 0) {
                    tdb.run(`UPDATE users SET shotdailycd = ? WHERE userid = ?`, [(ttemptodayms + 86400000), tempuserid]);
                    tdb.run(`UPDATE users SET shotbought = ? WHERE userid = ?`, [0, tempuserid]);
                }
    });
}
});
}
});

client.on('message' , (message) => {    //Tells bot not to respond to self
    if ((message.author == client.user) || (message.author.bot == true)) {
        return
    }
    let datachannel = client.channels.get("622658650640744498")
    temptoday = new Date();
    temptodayms = temptoday.getTime();
    let sdb = new sqlite3.Database('./STG.db', sqlite3.OPEN_READWRITE);
    let getdatas = (`SELECT datatime FROM serverdata WHERE testdata = ?`);
    sdb.get(getdatas, [testdata], (err, row) => {
        if (err) {
            console.log(err)
        }
        if (row === undefined) {
           console.log("error")
        } else {
            if (temptodayms > row.datatime) {
                sdb.run(`UPDATE serverdata SET datatime = ? WHERE testdata = ?`, [(temptodayms + 21600000), 1234]);
                datachannel.send(version + "\n" + temptoday + "\n").then(datachannel.send( {files: ["./STG.db"]} ))
            }
        }
    });
    // if (datatime < temptodayms) {
    //     datachannel.send((temptoday.toString()) + "\n" + version);
    //     jsondata = fs.readFileSync('./STG.json', 'utf8');
    //     for(let i = 0; i < jsondata.length; i += 1975) {
    //         const toSend = jsondata.substring(i, Math.min(jsondata.length, i + 1975));
    //         datachannel.send(toSend);
    //     }
    // }

    //let customemoji = message.guild.emojis.get("599641675832229889")
    //message.react(customemoji)

        processcommand(message)
    
})

// client.on('messageDelete', (deletedmessage) => {
//     console.log(deletedmessage)
//     console.log("here")
// });

function processcommand(message) {                          //Command prompt
    let db = new sqlite3.Database('./STG.db', sqlite3.OPEN_READWRITE);
    let fullcommand = message.content.toLowerCase();
    if (fullcommand.startsWith("..")) {
        fullcommand = ("//" + fullcommand.slice(2));
    }
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
    var threeplus;
    var fourplus;
    var fiveplus;
    let twoplus = casecommand.slice(firstcommand.length + 1)
    if (secondcommand !== undefined) {
        threeplus = casecommand.slice(firstcommand.length + secondcommand.length + 2)
    }
    if (thirdcommand !== undefined) {
        fourplus = casecommand.slice(firstcommand.length + secondcommand.length + thirdcommand.length + 3)
    }
    if (fourthcommand !== undefined) {
        fiveplus = casecommand.slice(firstcommand.length + secondcommand.length + thirdcommand.length + fourthcommand.length + 4)
    }

    let botmessageschannel = client.channels.get("653831551468961822")

    number = (Math.ceil(Math.random() * 10))
    today = new Date();
    future = new Date();
    todayms = today.getTime();
    stopcode = 0
        if (message.channel.type == "dm") {
            username = message.author.tag
            userid = message.author.id
            directmessage = true
            dmmessagecmd(message)
        return
        } else {
        guildid = message.guild.id
        username = message.author.tag
        userid = message.author.id
        directmessage = false
        }
    if (message.mentions.users.first() !== undefined) {
        mention = message.mentions.users.first()
        mentionusername = message.mentions.users.first().tag
        messagementions = true
    } else {
        messagementions = false
    }
    let serverinfo = `SELECT * FROM servers WHERE guildid = ?`;
    db.get(serverinfo, [guildid], (err, row) => {
        if (err) {
            console.log(err)
            botmessageschannel.send(err)
        }
        if (row === undefined) {
            console.log("Server data added")
            botmessageschannel.send("Server data added")
            serverinfo = db.prepare('INSERT INTO servers VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)');
            serverinfo.run(guildid, 0, 0, 1, 0, 0, 0, 0, 0, 1, "s", 0, 0, 0, 100);
            serverinfo.finalize();
            return
        } else {
            password = row.password
            passwordnum = row.passwordnum
            lock = row.lock
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
            talkchance = row.talkchance

            persondatacmd1(message)
        }
    });

    function persondatacmd1(message) {
        let sdatainfo = `SELECT * FROM serverdata WHERE testdata = ?`
        db.get(sdatainfo, ["1234"], (err, row) => {
            if (err) {
                console.log(err)
                botmessageschannel.send(err)
            }
            if (row !== undefined) {
            datatime = row.datatime
            saleprice = row.saleprice
            saletime = row.saletime
            salemsgid = row.salemsgid
            ebprice = row.ebprice
            ebtime = row.ebtime
            ebmsgid = row.ebmsgid
            boxprice = row.boxprice
            boxtime = row.boxtime
            boxmsgid = row.boxmsgid
            person = row.person
            botstatus = row.botstatus
            
            if ((!person.includes("none")) && (userid == MetalRain))
                userid = person
                personset = true
            } else {
                personset = false
                userid = message.author.id
                username = message.author.tag
            }
            
            persondatacmd2(message)
        });
    }

    function persondatacmd2(message) {

        let userinfo = `SELECT * FROM users WHERE userid = ?`
        db.get(userinfo, [userid], (err, row) => {
            if (err) {
                console.log(err)
                botmessageschannel.send(err)
            }
            if (row === undefined) {
                console.log("User data added")
                botmessageschannel.send("User data added")
                userinfo = db.prepare('INSERT INTO users VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)');
                userinfo.run(userid, username, 0, 0, 0, 0, 0, "none", 0, 0, 0, 0, 0, 0, 0, 0, todayms, "none", "regulardoggo", "lab", 10, 100, 100, 0, 0, 0, todayms, 0, 0, "none", 0, 0, "none", "none", 0, 0, 0, "none", 0, 100, bsleepstatgain, bsleepstatlose, bfoodlosestat, bplaystatlose, bplaystatgain, "none", 0, 0, 0, 0, 0, 10, ("0,0,0,0,0,0"), 0, 0, todayms, 0, 0, 0, "none", "ON", "OPEN", "PC", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, "<", 0, 0, 0, todayms, 0, 0, 0, 0, 0, 0, bbathstatlose, "none");
                userinfo.finalize();
                return;
            } else {
                if (personset == true) {
                    username = row.username
                }
                var dmchannelid = row.dmchannelid
                var cmdchannelid = row.cmdchannelid
                var cmdpassenter = row.cmdpassenter
                var cmdnumber = row.cmdnumber
                var commandnumber = row.commandnumber
                var commandtext = row.commandtext
                var chatid = row.chatid
                var chatnum = row.chatnum
                var sgscore = row.sgscore
                var sghighscore = row.sghighscore
                var rpsbotscore = row.rpsbotscore
                var rpsuserscore = row.rpsuserscore
                var rpsgame = row.rpsgame
                var doggocreate = row.doggocreate
                var doggocreatedtime = row.doggocreatedtime
                var doggoname = row.doggoname
                var currentdoggo = row.currentdoggo
                var breed = row.breed
                var money = row.money
                var foodnum = row.foodnum
                var energynum = row.energynum
                var poopcooldown = row.poopcooldown
                var jobcooldown = row.jobcooldown
                var breedcooldown = row.breedcooldown
                var statsupdatetime = row.statsupdatetime
                var sleeping = row.sleeping
                var sleeptime = row.sleeptime
                var doggosex = row.doggosex
                var foodservings = row.foodservings
                var applytime = row.applytime
                var appliedjob = row.appliedjob
                var currentjob = row.currentjob
                var working = row.working
                var workstarttime = row.workstarttime
                var workendtime = row.workendtime
                var status = row.status
                var quit = row.quit
                var playnum = row.playnum
                var sleepstatgain = row.sleepstatgain
                var sleepstatlose = row.sleepstatlose
                var foodstatlose = row.foodstatlose
                var playstatlose = row.playstatlose
                var playstatgain = row.playstatgain
                var bed = row.bed
                var doggotime = row.doggotime
                var playtime = row.playtime
                var totalservings = row.totalservings
                var totalworkhours = row.totalworkhours
                var totalplaytime = row.totalplaytime
                var totalmoney = row.totalmoney
                var rawexp = row.exp
                var exp = (rawexp.split(",").map(Number));
                var salary = row.salary
                var naptime = row.naptime
                var lastinttime = row.lastinttime
                var gifttime = row.gifttime
                var giftboxes = row.giftboxes
                var killdog = row.killdog
                var house = row.house
                var notif = row.notif
                var privacy = row.privacy
                var device = row.device
                var playtimer = row.playtimer
                var worktimer = row.worktimer
                var sleeptimer = row.sleeptimer
                var applytimer = row.applytimer
                var lottery = row.lottery
                var lotterynumber = row.lotterynumber
                var lbpoints = row.lbpoints
                var pregnant = row.pregnant
                var pregnanttime = row.pregnanttime
                var pups = row.pups
                var pupshunger = row.pupshunger
                var bredpups = row.bredpups
                var achievements = row.achievements
                var achnum = row.achnum
                var energyshots = row.energyshots
                var shotcd = row.shotcd
                var shotdailycd = row.shotdailycd
                var shotbought = row.shotbought
                var totalshots = row.totalshots
                var geckopoints = row.geckopoints
                var totalplays = row.totalplays
                var totalfeeds = row.totalfeeds
                var bathnum = row.bathnum
                var bathstatlose = row.bathstatlose
                var rawnotifmsgs = row.notifmsgs
                var notifmsgs = (rawnotifmsgs.split(","));
                var streakstart = row.streakstart
                console.log("playnum1: " + playnum);
            }

        if (firstcommand.includes("//bot")) {
            botstatuscmd(message)
            return
        }

        if (botstatus == "off") {
            return
        }

        if (firstcommand.includes("//doglb")) {
            doglb(message);
        }

        if ((message.channel.name.includes("gecko")) && ((firstcommand.includes("//")) == false)) {
            geckogamecmd(message)
            return
        }

        if (message.channel.name.includes("survival")) {
            survivalgamecmd(message)
            return
        }

        if (firstcommand.includes("//filldog")) {
                filldogcmd(message)
                return
        }

        if (firstcommand.includes("//gift")) {
            giftcmd(message, firstcommand, secondcommand, casesecondcommand, thirdcommand, threeplus);
            return;
        }

        if ((firstcommand == "//killdog") || (firstcommand == "//savedog")) {
            killdogcmd(message)
            return
        }

        if (firstcommand.includes("//") && (firstcommand.includes("echo"))) {
            echocmd(message, firstcommand, secondcommand, thirdcommand, casecommand, fullcommand);
            return;
        }

        if (firstcommand.includes("//post")) {
            message.delete(1);
            if (fourthcommand === undefined) {
                message.channel.send("```Use //post [userid] [name] [what to say]```");
                return;
            }
            if (secondcommand != "me") {
                userid2 = secondcommand;
            } else {
                userid2 = userid;
            }
            var msgtosend = fourplus;
            dogagram(userid2, casethirdcommand, msgtosend);
            return;
        }

        if ((message.channel.name.includes("doggo")) && (firstcommand != "//clear")) {
            doggogamecmd(userid, message, firstcommand, secondcommand, thirdcommand, fourthcommand, fifthcommand, fullcommand, dmchannelid, cmdchannelid, cmdpassenter, cmdnumber, commandtext, chatid, chatnum, sgscore, sghighscore, rpsbotscore, rpsuserscore, rpsgame, doggocreate, doggocreatedtime, doggoname, currentdoggo, breed, money, foodnum, energynum, poopcooldown, jobcooldown, breedcooldown, statsupdatetime, sleeping, sleeptime, doggosex, foodservings, applytime, appliedjob, currentjob, working, workstarttime, workendtime, status, quit, playnum, sleepstatgain, sleepstatlose, foodstatlose, playstatlose, playstatgain, bed, doggotime, playtime, totalservings, totalworkhours, totalplaytime, totalmoney, exp, salary, naptime, lastinttime, gifttime, giftboxes, killdog, house, notif, privacy, device, playtimer, worktimer, sleeptimer, applytimer, lottery, lotterynumber, lbpoints, pregnant, pregnanttime, pups, pupshunger, bredpups, achievements, achnum, energyshots, shotcd, shotdailycd, shotbought, totalshots, geckopoints, totalplays, totalfeeds, bathnum, bathstatlose, notifmsgs, streakstart);
            return;
        }

        if (firstcommand == "//annoy") {
            message.delete(1);
            var msgq = "false";
            if (userid != MetalRain) {
                return;
            } else {
                if ((secondcommand !== undefined) && (secondcommand.includes("clear"))) {
                    annoy(secondcommand, "false", true);
                } else {
                    if (thirdcommand !== undefined) {
                        msgq = thirdcommand;
                    }
                    annoy(secondcommand, msgq, false);
                }
            }
            return;
        }

        if ((firstcommand == "//serverinfo") || (firstcommand == "//channelinfo")) {
            serverinfocmd(message, firstcommand, fullcommand, userid);
            return
        }

        if (firstcommand == "//ss") {
            setstatuscmd(message, secondcommand, fullcommand);
            return;
        }

        if (firstcommand == "//getdm") {
            getdmcmd(message)
            return
        }

        if (firstcommand == "//sale") {
            salecmd(message, firstcommand, secondcommand, thirdcommand, fourthcommand);
            return;
        }

        if (firstcommand == "//eb") {
            earnboostcmd(message, firstcommand, secondcommand, thirdcommand, fourthcommand);
            return;
        }
        
        if (firstcommand == "//box") {
            boxeventcmd(message, firstcommand, secondcommand, thirdcommand, fourthcommand);
            return;
        }

        if (message.channel.id == "626100159436161045") {
            testcmd(message)
            return
        }


        if ((message.channel.name.includes("general")) || (message.channel.name.includes("command")) || (message.channel.name.includes("test"))) {
            talkcmd(message, fullcommand, splitcommand, chatid, chatnum, userid);
        }

            if (firstcommand.includes("//ver")) {
                versioncmd(message)
                return
            }
            if (firstcommand == "//gd") {
                getdatacmd(message)
                return
            }

            if (firstcommand.includes("//ud")) {
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

            if (firstcommand == "//settalk") {
                settalkcmd(message)
                return
            }

            if (firstcommand.includes("//setpass") || (firstcommand.includes("//lock")) || (firstcommand.includes("//unlock")) || (passwordnum == 1) || (cmdpassenter != 0)) {
                passwordcmd(message)
            }

            function passwordcmd(message) {

                    if (firstcommand.includes("//setpassword") && (passwordnum == 0)) {
                        message.delete(1)
                        db.run(`UPDATE servers SET passwordnum = ?, cmdchannelid = ? WHERE guildid = ?`, [1, (message.channel.id), guildid]);
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

            if (((lock == 0) || (userid == MetalRain)) && (passwordnum != 0))  {

                if (firstcommand.includes("//clear")) {
                    message.delete(1)
                    commandnumber = parseInt(secondcommand, 10)
                   clearcmd(message, commandnumber);
                   return;
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

                if ((firstcommand.includes("//help")) && (secondcommand == "admin")) {
                    message.delete(1)
                    adminhelpcmd(message)
                    return
                }

                if (firstcommand.includes("//setcd")) {
                    message.delete(1)
                    commandnumber = parseInt(secondcommand, 10);
                    commandtext = thirdcommand
                    cooldowncmd(message, commandtext, commandnumber);
                    return;
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
                if ((cmdchannelid == message.channel.id) && (firstcommand != "//rps") && ((firstcommand.includes("roc")) || (firstcommand.includes("pap")) || (firstcommand.includes("scis")))) {
                    message.delete(1)
                    rpstempbscore = 0
                    rpstempuscore = 0
                    if (firstcommand.includes("roc")) {
                        rpsuseranswer = "rock"
                    } else if (firstcommand.includes("pap")) {
                        rpsuseranswer = "paper"
                    } else if (firstcommand.includes("scis")) {
                        rpsuseranswer = "scissors"
                    }
                    do {
                        rpsnum = Math.ceil(Math.random() * 3)
                    } while ((rpsnum < 1) && (rpsnum > 3))
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
                                message.channel.send("You chose **" + rpsuseranswer + "** and I chose **" + rpsanswer + "**, **You win** this round!\n**I win** the game **" + rpsbotscore + "** to **" + rpsuserscore + "**.")
                            } else if (rpsbotscore < rpsuserscore) {
                                message.channel.send("You chose **" + rpsuseranswer + "** and I chose **" + rpsanswer + "**, **You win** this round!\n**You win** the game **" + rpsuserscore + "** to **" + rpsbotscore + "**.")
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
        message.channel.send("```Type in a number (0-9) and if you guess correctly Steve earns 10 levels, but guess incorrectly and Steve loses 1 level. Every 25 levels Steve hits a goal and can't go below that, get him as high as possible!```")
        return
    }
    if (fullcommand == ggnum) {
        glevel += 10
        geckopoints += 10
        message.channel.send("Correct, Steve is now level **" + glevel + ("**!"))
        ggnum = (Math.round(Math.random() * 9));
        if (glevel >= (glevelmin + 25)) {
            glevelmin += 25
            db.run(`UPDATE servers SET glevelmin = ? WHERE guildid = ?`, [glevelmin, guildid])
        }
        db.run(`UPDATE servers SET ggnum = ? WHERE guildid = ?`, [ggnum, guildid]);
        db.run(`UPDATE servers SET glevel = ? WHERE guildid = ?`, [glevel, guildid]);
        db.run(`UPDATE users SET geckopoints = ? WHERE guildid = ?`, [geckopoints, guildid]);
        return
    } else if ((fullcommand != ggnum) && (isNaN(fullcommand) == false) && (fullcommand < 10) && (fullcommand >= 0)) {
        if (glevel > glevelmin) {
            glevel -= 1
            db.run(`UPDATE servers SET glevel = ? WHERE guildid = ?`, [glevel, guildid]);
        }
        message.channel.send("Wrong, Steve is now level **" + glevel + "**!")
        return
    }
    
    if ((isNaN(fullcommand) == true) && (fullcommand.includes("!") == false) && (fullcommand.includes("//") == false)) {
        message.delete(1)
        message.channel.send("```Type in a number (0-9) and if you guess correctly Steve earns 10 levels, but guess incorrectly and Steve loses 1 level.  Every 25 levels Steve hits a goal and can't go below that, get him as high as possible!```")
        return
    } else if (((fullcommand > 9) || (fullcommand < 0)) && (isNaN(fullcommand) == false)) {
        message.delete(1)
        message.channel.send("```Type in a number (0-9) and if you guess correctly Steve earns 10 levels, but guess incorrectly and Steve loses 1 level.  Every 25 levels Steve hits a goal and can't go below that, get him as high as possible!```")
        return
    }

}
    //End gecko game/////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Begin survival game////////////////////////////////////////////////////////////////////////////////////////////////////////

function survivalgamecmd(message) {

    if (firstcommand.includes("//leaderboard")) {
        survivalleaderboardcmd(message)
        return
    }

    if (firstcommand.includes("//help")) {
        message.delete(1)
        message.channel.send("```Use //start to begin the game or start over. Use //resume to resend the choices. Then type the number corresponding to the choise you want to make.```")
        return
    }

    if (((isNaN(fullcommand) == true) && (fullcommand.includes("!") == false) && (fullcommand.includes("//") == false)) || (fullcommand > 4) || (fullcommand < 1)) {
        message.delete(1)
        message.channel.send("```Use //start to begin the game or start over. Use //resume to resend the choices. Then type the number corresponding to the choice you want to make.```")
        return
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
        return
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
        message.channel.send("```//aoc [Radius] - calculates the area of circle\n//coc [Radius] - calculates the circumference of a circle\n//sqrt [Number] - calculates the square root of a number\n//flipcoin - flips a coin\n//rolldice - rolls a die\n//rps [odd number] - plays a rock, paper, scissors game```")
    }

    function mutecmd(message) {
        mute = 1
        message.channel.send("I will stop talking now.")
        muter = 0;
        db.run(`UPDATE servers SET mute = ? WHERE guildid = ?`, [1, guildid]);
    }

    function unmutecmd(message) {
        mute = 0
        message.channel.send("Thanks! It was so hard not to talk to you guys")
        unmuter = 0;
        db.run(`UPDATE servers SET mute = ? WHERE guildid = ?`, [0, guildid]);
    }

    function clearcmd(message, commandnumber) {
        commandnumber = parseInt(commandnumber, 10)
        commandnumber += 1
        if ((commandnumber <= 100) && (commandnumber > 0)) {
            message.channel.bulkDelete(commandnumber)
            message.channel.send("```I deleted " + (commandnumber - 1) + " message(s).```").then(msg => msg.delete(5000))
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

    function cooldowncmd(message, commandtext, commandnumber) {
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
        db.run(`UPDATE users SET cmdnumber = ?, cmdpassenter = ?, cmdchannelid = ? WHERE userid = ?`, [0, 0, 0, userid]);
        db.run(`UPDATE servers SET interval = ?, intletter = ? WHERE guildid = ?`, [interval, intletter, guildid]);
        message.channel.send("```Interval set to " + interval + " " + letter + ".```");
    } else {
        message.channel.send("```Use //setcd [number] [seconds/minutes/hours] to set the cooldown.```");
    }
    return;
    }

    function survivalleaderboardcmd(message) {
        message.delete(1)
        message.channel.send("```Your personal high score is " + sgscore + " points.```")
        message.channel.send("```1st: " + hsname1 + " with " + highscore1 + " points\n2nd: " + hsname2 + " with " + highscore2 + " points\n3rd: " + hsname3 + " with " + highscore3 + " points```")
        return
    }

    function diecmd(message) {
        if (sgscore > sghighscore) {
            db.run(`UPDATE users SET sghighscore = ? WHERE userid = ?`, [sgscore, userid]);
            message.channel.send("That was your new highscore!")
        }
        db.run(`UPDATE users SET sgscore = ? WHERE userid = ?`, [0, userid]);
    }

    function getdatacmd(message) {
        message.delete(1)
        if (userid != MetalRain) {
            message.channel.send(permissionmsg)
            botmessageschannel.send(username + " tried to use " + fullcommand)
            return
        }
        if ((thirdcommand === undefined) && (secondcommand != "db")) {
            message.channel.send("```Please use //gd [servers/serverdata/user's parameter] [ID/other parameter]```")
            return
        }
    if (secondcommand != "db") {
        if (secondcommand == "servers") {
            if (thirdcommand == "here") {
                thirdcommand = guildid
            }
            let serverinfo = `SELECT * FROM servers WHERE guildid = ?`;
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
            talkchance = row.talkchance

            message.channel.send("```Password:       " + password + "\nPasswordnum:    " + passwordnum + "\nlock:           " + lock + "\nGlevel:         " + glevel + "\nGlevelmin:      " + glevelmin + "\nGgnum:          " + ggnum + "\nMute:           " + mute + "\nCooldowntime:   " + cooldowntime + "\nInterval:       " + interval + "\nIntletter:      " + intletter + "\nLockenter:      " + lockenter + "\nLocknum:        " + locknum + "\nCmdnumber:      " + cmdnumber + "\nTalkchance:     " + talkchance + "```")
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
        message.channel.send(version + "\n" + today + "\n").then(message.channel.send( {files: ["./STG.db"]} ))
    }
    return
}

    function updatedatacmd(message) {
        message.delete(1)
        var table = "users"
        var uservalue = ""
        var minus = 0
        var plus = 0
        var addsub = 0
        var selection = ""
        var equationsub = ""
        var equationadd = ""
        if (userid != MetalRain) {
            message.channel.send(permissionmsg)
            botmessageschannel.send(username + " tried to use " + fullcommand)
            return
        }
        if (fourthcommand === undefined) {
            message.channel.send("```Please use //ud [what to change] [new value] [username/ID/doggoname] {users/servers/serverdata}```")
            return
        }
        if (fifthcommand === undefined) {
            table = "users"
        } else {
            if ((fifthcommand != "users") && (fifthcommand != "servers") && (fifthcommand != "serverdata")) {
                casefourthcommand = fourplus
            } else {
                table = fifthcommand
            }
        }
        if (table == "users") {
            selection = (secondcommand + ", username")
        } else {
            selection = secondcommand
        }
        if (fourthcommand == "me") {
            casefourthcommand = username
        }
        if (fourthcommand == "person") [
            casefourthcommand = person
        ]
        if (messagementions == true) {
            casefourthcommand = mentionusername
        }
        if (table == "users") {
            if (isNaN(casefourthcommand) == false) {
                uservalue = "userid"
            } else if (casefourthcommand.includes("#")) {
                uservalue = "username"
            } else {
                uservalue = "doggoname"
            }
        } else if (table == "servers") {
            uservalue = "guildid"
        } else if (table == "serverdata") {
            uservalue = "testdata"
        }
        let uduserinfo = `SELECT ` + selection + ` FROM ` + table + ` WHERE ` + uservalue + ` = ?`
        db.get(uduserinfo, [casefourthcommand], (err, row) => {
            if (err) {
                console.log(err)
            }
            if (row === undefined) {
                message.channel.send("```Bad parameters.```")
                return
            } else {
                if (table == "users") {
                    username2 = row.username
                }
                jsondata = row[secondcommand]
                newjsondata = casethirdcommand
            if (thirdcommand.includes("-")) {
                minus = 1
                casethirdcommand = casethirdcommand.slice(1)
            } else if (thirdcommand.includes("+")) {
                plus = 1
                casethirdcommand = casethirdcommand.slice(1)
            }
        if (isNaN(casethirdcommand) == false) {
            addsub = parseInt(casethirdcommand, 10);
        } else if ((minus == 1) || (plus == 1)) {
            message.channel.send("```Data type is not a number.```")
            return
        }
        if (casethirdcommand == "todayms") {
            newjsondata = todayms
        } else if (casethirdcommand == "bsleepstatgain") {
            newjsondata = bsleepstatgain
        } else if (casethirdcommand == "bsleepstatlose") {
            newjsondata = bsleepstatlose
        } else if (casethirdcommand == "bfoodstatlose") {
            newjsondata = bfoodlosestat
        } else if (casethirdcommand == "bplaystatlose") {
            newjsondata = bplaystatlose
        } else if (casethirdcommand == "bplaystatgain") {
            newjsondata = bplaystatgain
        }
        if (minus == 1) {
            newjsondata = (jsondata - addsub);
        } else if (plus == 1) {
            newjsondata = (jsondata + addsub);
        }
        db.run(`UPDATE ` + table + ` SET ` + secondcommand + ` = ? WHERE ` + uservalue + ` = ?`, [newjsondata, casefourthcommand]);
        if (table == "users") {
            casefourthcommand = username2
        }
        equationadd = ((newjsondata - jsondata).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
        equationsub = ((jsondata - newjsondata).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
        if ((isNaN(jsondata) == false) && (isNaN(newjsondata) == false)) {
            if (newjsondata > jsondata) {
                message.channel.send("```" + casefourthcommand + "'s " + secondcommand + " updated from " + jsondata + " to " + newjsondata + " (+" + equationadd + ")```")
            } else {
                message.channel.send("```" + casefourthcommand + "'s " + secondcommand + " updated from " + jsondata + " to " + newjsondata + " (-" + equationsub + ")```")
            }
        } else {
            message.channel.send("```" + casefourthcommand + "'s " + secondcommand + " updated from " + jsondata + " to " + newjsondata + "```")
        }
            }
        });
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
                return
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
            return
        } else {
            client.users.get((secondcommand) => {
                user.send(commandtext)
                return
            })
        }
       
        } else {
            message.channel.send(permissionmsg)
            botmessageschannel.send(username + " tried to use " + fullcommand)
            return
        }
    }

    //Start doggo game///////////////////////////////////////////////////////////////////////////////////////////////////////////

    function doggogamecmd(userid, message, firstcommand, secondcommand, thirdcommand, fourthcommand, fifthcommand, fullcommand, dmchannelid, cmdchannelid, cmdpassenter, cmdnumber, commandtext, chatid, chatnum, sgscore, sghighscore, rpsbotscore, rpsuserscore, rpsgame, doggocreate, doggocreatedtime, doggoname, currentdoggo, breed, money, foodnum, energynum, poopcooldown, jobcooldown, breedcooldown, statsupdatetime, sleeping, sleeptime, doggosex, foodservings, applytime, appliedjob, currentjob, working, workstarttime, workendtime, status, quit, playnum, sleepstatgain, sleepstatlose, foodstatlose, playstatlose, playstatgain, bed, doggotime, playtime, totalservings, totalworkhours, totalplaytime, totalmoney, exp, salary, naptime, lastinttime, gifttime, giftboxes, killdog, house, notif, privacy, device, playtimer, worktimer, sleeptimer, applytimer, lottery, lotterynumber, lbpoints, pregnant, pregnanttime, pups, pupshunger, bredpups, achievements, achnum, energyshots, shotcd, shotdailycd, shotbought, totalshots, geckopoints, totalplays, totalfeeds, bathnum, bathstatlose, notifmsgs, streakstart) {

        if ((!firstcommand.includes("//")) && (!firstcommand.includes("yes")) && (!firstcommand.includes("no")) && (doggocreate != 1) && (doggocreate != 2) && (doggoname != "none")) {
            return
        }
        if ((todayms - lastinttime) > 86400000) {
            streakstart = 0;
        }
        if (streakstart <= 1000) {
            db.run(`UPDATE users SET streakstart = ? WHERE userid = ?`, [todayms, userid]);
            message.channel.send("```" + doggoname + "'s streak was restarted :(```");
        }
        var streaklength = (Math.floor((todayms - streakstart) / 86400000));
        number = (Math.ceil(Math.random() * 10))
        injurynum = (Math.ceil(Math.random() * 100))
        username2 = "none"
        newanum = 0
        maxxp = false
        fpplay = 0
        console.log("playnum2: " + playnum);
        

        if (currentdoggo == "regulardoggo") {
            currentdoggo = regulardoggo
        }

        if (pregnant == 1) {
            sleepstatlose = (sleepstatlose * 0.8)
        }

        var {bedcost, bedincrease} = bedobj[bed];

        var {housecost, visiblehouse, housename} = houseobj[house];

        if (house == "none") {
            housename = "none"
            visiblehouse = "";
        }

        if ((killdog == 1) && (firstcommand.includes("//"))) {
            message.channel.send("```" + doggoname + " has been destroyed.```")
            return
        }
        if ((saleprice != 1) && (saletime <= todayms)) {
            if (salemsgid < 100) {
                botmessageschannel.send("error getting sale event message")
                return
            }
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
        } else {
            botmessageschannel.send("error getting sale event message")
        }
        });
        } else {
            botmessageschannel.send("error getting #events channel")
        }
        }
        if ((ebprice != 1) && (ebtime <= todayms)) {
            ebprice = 1
        if (ebmsgid < 100) {
            botmessageschannel.send("error getting sale event message")
            return
        }
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
        } else {
            botmessageschannel.send("error getting earning bonus event message")
        }
        });
        } else {
            botmessageschannel.send("error getting #events channel")
        }
        }
        if ((boxprice != 1) && (boxtime <= todayms)) {
            boxprice = 1
        if (boxmsgid < 100) {
            botmessageschannel.send("error getting sale event message")
            return
        }
        const salechannel = client.channels.get(eventid);
        if (salechannel) {
            salechannel.fetchMessages({ limit: 2 })
            .then(messages => {
                msgsize = messages.size
        if (msgsize >= 1) {
            salechannel.fetchMessage(boxmsgid)
            .then(messages => {
            messages.delete(1);
            db.run(`UPDATE serverdata SET boxprice = ? WHERE testdata = ?`, [1, 1234]);
            db.run(`UPDATE serverdata SET boxtime = ? WHERE testdata = ?`, [0, 1234]);
            db.run(`UPDATE serverdata SET boxmsgid = ? WHERE testdata = ?`, [0, 1234]);
        });
        } else {
            botmessageschannel.send("error getting box event message")
        }
        });
        } else {
            botmessageschannel.send("error getting #events channel")
        }
        }

        var {jobname, jobnumber, jobsalary, jobtime, jobindex} = jobsobj[currentjob];
        var maxxp = false;
        var workenergy;
        var experience;

        if (currentjob == "none") {
            jobname = "none";
            experience = 0;
        } else {
            experience = exp[jobindex];
            workenergy = ((jobtime / sleepstatlose) + 5)
            if (pregnant == 1) {
                jobtime = (jobtime / 2)
                workenergy = (workenergy / 2)
            }
            if (experience >= 490) {
                maxxp = true
            }
        }

        var explevel = ((Math.floor(experience / 10)) + 1)

        if (doggosex == "female") {
            doggonoun = "she"
            doggowords = "her"
            doggoobject = "her"
            if (pregnant == 1) {
                pregdays = (Math.floor((pregnanttime - todayms) / 86400000))
                preghours = (Math.floor(((pregnanttime - todayms) - (pregdays * 86400000)) / 3600000))
                if (pregdays > 0) {
                    doggosex += ("        (pregnant " + pregdays + " days " + preghours + " hours left)")
                } else {
                    doggosex += ("        (pregnant " + preghours + " hours left)")
                }
            }
        } else if (doggosex == "male") {
            doggonoun = "he"
            doggowords = "his"
            doggoobject = "him"
        }

        var agetime = (Math.round((todayms - doggocreatedtime)))
        var ageyears = (Math.floor((agetime / 51840000)))
        var agemonths = (Math.floor(((agetime - (ageyears * 51840000)) / 4320000)))
        var age = (ageyears + " years " + agemonths + " months")

        if ((todayms > gifttime) && (firstcommand.includes("//")) && (firstcommand != "//open") && (doggoname != "none") && (working == 0) && (firstcommand != "//help") && (firstcommand != "//work")) {
            message.channel.send("```" + doggoname + " has a daily gift box to open! use //open gift to open it.```")
        }

        if ((playtime != 0) && (((todayms - playtime) / 60000) > 20)) {
            var dpresult = doneplayingcmd(message, doggoname, "none", playnum, 0, playstatgain, 0, playtime, 0, totalplaytime, 0, userid, 0, 0, notif, 0, playtimer, 0, status, 0);
            playnum = dpresult[0];
            console.log("playnum3: " + playnum);
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
                db.run(`UPDATE users SET doggotime = ? WHERE userid = ?`, [0, userid]);
            }
            message.channel.send("```" + doggoname + "'s 48 hour 1.5x energy boost has worn off.```")
        }

        if ((todayms > pregnanttime) && (pregnanttime != 0) && (pregnant == 1)) {
            message.delete(1)
            var puppies = (Math.ceil(Math.random() * 8))
            if (puppies == 0) {
                puppies = 1
            }
            pups += puppies
            bredpups += puppies
            if (puppies > 1) {
                message.channel.send("```" + dogpup + "\n\n" + doggoname + " gave birth to " + puppies + " puppies!. You can sell them, each one for $750 or keep them. Keep in mind you'll have to feed your young ones!```")
            } else {
                message.channel.send("```" + dogpup + "\n\n" + doggoname + " gave birth to 1 puppy!. You can sell them, each one for $750 or keep them. Keep in mind you'll have to feed your young ones!```")
            }
            db.run(`UPDATE users SET pregnanttime = ? WHERE userid = ?`, [0, userid]);
            db.run(`UPDATE users SET pregnant = ? WHERE userid = ?`, [0, userid]);
            db.run(`UPDATE users SET pups = ? WHERE userid = ?`, [pups, userid]);
            db.run(`UPDATE users SET bredpups = ? WHERE userid = ?`, [bredpups, userid]);
            return
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
            totalmoney += 10
            db.run(`UPDATE users SET money = ? WHERE userid = ?`, [money, userid]);
            db.run(`UPDATE users SET totalmoney = ? WHERE userid = ?`, [totalmoney, userid]);
            newanum = 1
            achievementscmd(message, achievements, exp, money, giftboxes, foodservings, achnum, house, pups, newanum, doggoname, userid);
        }

        if ((doggocreate == 1) && (message.channel.id == cmdchannelid)) { //making dog stage 2
            message.delete(1)
            if ((firstcommand == "none") || (firstcommand.includes("#") == true) || (!isNaN(firstcommand))) {
                message.channel.send("```You can't use that name, please pick a different name:```")
                return
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
                db.run(`UPDATE users SET statsupdatetime = ? WHERE userid = ?`, [todayms, userid]);
                message.channel.send("```Congrats! " + doggoname + " is " + doggosex + " and can now go out into the world! Your body has been transformed into a dog and you can now do what dogs do.\nFor 48 hours you will have 1.5x energy earned to help you get on your feet...      or should I say paws. Use //help for help.```")
            } else {
                message.channel.send("```Please choose male/female:```")
            }
            
        }

        if (firstcommand.includes("//")) {
            db.run(`UPDATE users SET lastinttime = ? WHERE userid = ?`, [todayms, userid]);
            db.run(`UPDATE users SET naptime = ? WHERE userid = ?`, [(todayms + 21600000), userid]);
        }

        srnotif(message, notifmsgs, userid);
        console.log("playnum4: " + playnum);

        var upresult = updatestats(firstcommand, secondcommand, statsupdatetime, sleeping, naptime, energynum, foodnum, playnum, status, sleepstatgain, sleepstatlose, foodstatlose, playstatlose, pupshunger, pups, bathnum, bathstatlose, userid);
        statsupdatetime = upresult[0];
        energynum = upresult[1];
        foodnum = upresult[2];
        playnum = upresult[3];
        status = upresult[4];
        pupshunger = upresult[5];
        bathnum = upresult[6];
        console.log("playnum5: " + playnum);

        var wantsall = getwants(status, playnum, foodnum, energynum, bathnum);

        if ((firstcommand.includes("//sleep")) && (sleeping == 0) && (working == 0)) {
            message.delete(1)
            db.run(`UPDATE users SET naptime = ?, status = ?, sleeping = ?, sleeptime = ? WHERE userid = ?`, [0, "sleeping", 1, todayms, userid]);
            var dpresult = doneplayingcmd(message, doggoname, "none", playnum, 0, playstatgain, 0, playtime, 0, totalplaytime, 0, userid, 0, 0, notif, 0, playtimer, 0, status, 0);
            playnum = dpresult[0];
            message.channel.send("```" + doggoname + " is now sleeping.```")
            if (notif == "ON") {
                notifnumber = (todayms + Math.round((100 - energynum) * (sleepstatgain)))
                db.run(`UPDATE users SET sleeptimer = ? WHERE userid = ?`, [notifnumber, userid]);
            }
            return
        } else if ((firstcommand.includes("//sleep")) && (sleeping == 1)) {
            message.delete(1)
            message.channel.send("```" + doggoname + " is already sleeping.```")
            return
        } else if ((firstcommand.includes("//sleep")) && (working == 1)) {
            message.delete(1);
            message.channel.send("```" + doggoname + " is at work and can't sleep right now.```");
            return;
        }
        
        if ((firstcommand.includes("//wake")) && (sleeping == 1)) {
            message.delete(1);
            db.run(`UPDATE users SET status = ?, sleeping = ?, sleeptime = ? WHERE userid = ?`, ["awake", 0, todayms, userid]);
            message.channel.send("```" + doggoname + " is now awake.```");
            if ((notif == "ON") && (sleeptimer != 0)) {
                db.run(`UPDATE users SET sleeptimer = ? WHERE userid = ?`, [0, userid]);
            }
            return;
        } else if ((firstcommand.includes("//wake")) && (sleeping == 0)) {
            message.delete(1);
            message.channel.send("```" + doggoname + " is already awake.```");
            return;
        }

        if ((firstcommand == "//set") && (secondcommand == "name")) {
            message.delete(1);
            if ((casethirdcommand !== undefined) && (thirdcommand != "none") && (thirdcommand.includes("#") == false) && (isNaN(thirdcommand) == true)) {
            doggoname = casethirdcommand;
            db.run(`UPDATE users SET doggoname = ? WHERE userid = ?`, [doggoname, userid]);
            message.channel.send("```Your dog is now named " + doggoname + ".```");
            return;
            } else {
                message.channel.send("```That name doesn't work, use //set name [name] to name your dog.```")
                return;
            }
        }

        if ((firstcommand == "//set") && (secondcommand == "gender")) {
            message.delete(1);
            message.channel.send("```As of right now, you can no longer change your gender.```");
            return;
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

        if (firstcommand == "//who") {
            message.delete(1);
            if (secondcommand === undefined) {
                message.channel.send("```Specify who using //who [username/ID/dog's name]```");
                return;
            }
            username2 = twoplus;
            if (isNaN(username2) == false) {
                doggovalue = "userid";
            } else if (username2.includes("#")) {
                doggovalue = "username";
            } else {
                doggovalue = "doggoname";
            }
        let seconduserinfo = `SELECT * FROM users WHERE ` + doggovalue +` = ?`
            db.get(seconduserinfo, [username2], (err, row) => {
                if (err) {
                    console.log(err);
                }
                if (row === undefined) {
                    message.channel.send("```" + username2 + " does not currently have a dog.```");
                    return;
                }

                doggoname2 = row.doggoname;
                username2 = row.username;

                if (doggoname2 == "none") {
                    message.channel.send("```" + username2 + " does not currently have a dog.```");
                    return;
                }
                message.channel.send("```" + username2 + "'s dog is named " + doggoname2 + ".```");
            });
        }

        var happinessnum = 100;
        happinessnum -= Math.round((100 - energynum) / 3);
        happinessnum -= Math.round((100 - foodnum) / 3);
        happinessnum -= Math.round((100 - playnum) / 3);

        var barsresult = getstatbars(happinessnum, foodnum, energynum, playnum, pupshunger);
        var happiness = barsresult[0];
        var food = barsresult[1];
        var energy = barsresult[2];
        var play = barsresult[3];
        var pupshungerbar = barsresult[4];

        if ((energynum <= 15) && (energynum > 0) && (sleeping == 0) && (firstcommand != "//sleep") && (firstcommand.includes("//"))) {
            message.channel.send("```" + doggoname + "'s energy is low, consider letting " + doggoobject + " sleep.```")
        }
        if ((foodnum <= 15) && (foodnum > 0) && (firstcommand != "//eat") && (firstcommand.includes("//"))) {
            message.channel.send("```" + doggoname + " is hungry, you should feed " + doggoobject + ".```")
        }
        if ((pupshunger <= 15) && (pups != 0) && (firstcommand.includes("//")) && (firstcommand != "//feed")) {
            message.channel.send("```" + doggoname + "'s family is hungry, you should feed them.```")
        }

        if ((firstcommand.includes("//poop")) || (firstcommand.includes("//breed")) || (firstcommand.includes("//work")) || (firstcommand.includes("//play")) || (firstcommand.includes("//buy")) || (firstcommand.includes("//sell")) || (firstcommand.includes("//appl")) || (firstcommand.includes("//feed")) || (firstcommand.includes("//open")) || (firstcommand.includes("//bath"))) {
        if ((energynum <= 0) && (!firstcommand.includes("open")) && (secondcommand != "food")) {
            message.channel.send("```" + doggoname + " has no energy, let " + doggoobject + " sleep.```")
            stopcode = 1
        }
        if ((foodnum <= 0) && (!firstcommand.includes("open")) && (secondcommand != "food")) {
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
            message.channel.send("```Help:\n\nWelcome to the doggo game! Here you can take care of your own dog. I will be fixing things and adding new things all the time. Check out all the help commands to get some helpful info about the game.\n\n//help doggo - shows help for your doggo\n//help family - shows help for breeding and your family\n//help jobs - shows help for jobs\n//help buy - shows all the things you can buy\n//help other - shows other miscellaneous commands\n//help faq - has some answers to frequently asked questions\n//settings - shows settings you can change\n\nTip: commands in [] are required, while commands in {} are not.```")
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
            message.channel.send("```Doggo Help:\n\nYour dog loses food and energy  when awake, you gain energy and lose less food if your dog is sleeping. If you leave your dog awake for six hours or right after their job shift is over, they will take a nap. When they start napping they no longer lose energy, but everything else is normal. Don't forget to let your dog sleep and feed them! Happiness is dependent on food, energy, and how much your dog wants to play. You can start playing by yourself or with another peron's dog, once you do something else such as eat or sleep, your play number goes up based on how long you were playing for. You can also view other dog's stats, jobs, inventory etc. by doing //[command] [username/ID/dog's name]\n\n//doggo - shows your current dog and some info about them\n//set name [name] - names your dog\n//set gender [male/female] - sets the gender of your dog\n//sleep - makes your dog sleep\n//wake - wakes up your dog\n//eat {2} - makes your dog eat one serving of food\n//drink - drinks an energy shot\n//play {username/ID/dog's name}\n//stop play - makes your dog stop playing, this can also be accomplished by eating, sleeping etc.\n//bath - makes your dog go to the groomer and take a bath, costs $25\n//feed {2} {username/ID/dog's name} - feeds someone else's dog one serving of food\n//stats - shows detailed stats about your dog\n//inventory - shows the inventory of your dog\n//all dogs - shows all the dog's names and their status```")
            return
        } else if ((firstcommand == "//help") && (secondcommand.includes("buy"))) {
            message.delete(1)
            message.channel.send("```Buy/Sell Help:\n\nBuying food helps keep your dog full, each food serving gives you 50 points of hunger and 5 energy. Energy shots add 15 points of energy instantly, but you can only use 1 every hour and only can buy 10 a day. Beds increase the rate you gain energy.\n\n//buy food [amount or blank for 1] - buys servings of food for your dog ($" + (foodprice * saleprice) + " each)\n//buy shot {number} - buys energy shots for your dog ($" + (shotprice * saleprice) + " each)\n//buy bed [type] - buys a bed\n//sell bed - sells your current bed for 50% cost\n\nAvailabe beds:\n- bed sheet -    1.1x energy   ($" + (25 * saleprice) + ")       [bedsheet]\n- mat -          1.2x energy   ($" + (100 * saleprice) + ")      [mat]\n- twin -         1.4x energy   ($" + (500 * saleprice) + ")      [twin]\n- full -         1.6x energy   ($" + ((1250 * saleprice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + ")    [full]\n- queen -        1.75x energy  ($" + ((2000 * saleprice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + ")    [queen]\n- king -         2.0x energy   ($" + ((4000 * saleprice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + ")    [king]\n\nHouses are a way to show off your money, as of right now they do not have any benefit.\n//buy house [type]\n//sell house - sells your house for 50% cost\n\nAvailable houses:\n- box -          ($" + (15 * saleprice) + ")        [box]\n- doghouse       ($" + (100 * saleprice) + ")       [doghouse]\n- shed -         ($" + (500 * saleprice) + ")       [shed]\n- shack -        ($" + ((1500 * saleprice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + ")     [shack]\n- one story -    ($" + ((3000 * saleprice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + ")     [onestory]\n- two story -    ($" + ((10000 * saleprice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + ")    [twostory]\n- three story -  ($" + ((15000 * saleprice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + ")    [threestory]\n- mansion -      ($" + ((50000 * saleprice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + ")    [mansion]\n- castle -       ($" + ((100000 * saleprice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + ")   [castle]```")
            return
        } else if ((firstcommand == "//help") && (secondcommand.includes("other"))) {
            message.delete(1)
            message.channel.send("```Other Help:\n\nEvery 24 hours you can open your daily gift, you can also receive them from an anonymous person. The overall leaderboard is calculated based on your place in the other 4 leaderboards. You get 10 points for first, 9 points for second etc.\n\nCurrent possible rewards from gifts:\nFood servings:  3-9\nMoney:          $50-$150\nJob XP:         1-3\n//open gift {all} - opens your gift boxes\n//who [username/ID/dog's name] - tells you who's dog is whoevers if you forget\n//lb {overall/money/work/play/food}- shows the leaderboard standings\n//achievements - shows your achievements you have earned```")
            return
        } else if (((firstcommand == "//help") && ((secondcommand == "faq"))) || (firstcommand == "//faq")) {
            message.delete(1)
            message.channel.send("FAQ:\n\n**Question: Will I ever be able to buy cosmetic items for my dog?**\nAnswer: Not right now, making the dogs out of text with cosmetic items will be very hard for me, so maybe later down the road I will implement them.\n\n**Question: Why did my dogs energy go up from eating?**\nAnswer: Each food serving gives you 50 points of food, but it also gives you 5 points of energy as well.\n\n**Question: Why can't I change my dog's gender anymore?**\nAnswer: I am working on breeding which will be different depending on your gender, so I don't want people switching genders.\n\n**Question: How am I getting free gift boxes?**\nAnswer: I can't tell you :)")
            return
        } else if ((firstcommand == "//help") && (secondcommand.includes("fam"))) {
            message.delete(1)
            message.channel.send("```Family Help:\n\nBreeding works differently between males and females. For males you can breed every two days and get paid $500. Females can breed, but must pay $500 to the male mate. Then they will become pregnant for 7 days, during this time your energy will decrease faster and you can only work half shifts at work. After the gestation period, you will have 1-8 puppies. You can also adopt puppies, up to 20. Keep in mind you'll have to feed them and the more you have, the more food they'll need. You can also sell your bred puppies, not adopted ones for $750 each.\n\n//my family - shows your family\n//breed - breeds your dog with a mate\n//adopt puppies {amount} - adopt puppies into your family\n//feed family {amount} - feeds your puppies\n//sell puppies {amount} - sells bred puppies for $750 each```")
            return
        } else if ((firstcommand.includes("//")) && (secondcommand == "help")) {
            message.delete(1)
            message.channel.send("```That is not a help command, try //" + secondcommand + " " + (firstcommand.slice(2)) + ".```")
            return
        } else if (firstcommand == "//help") {
            message.delete(1)
            message.channel.send("```That is not a help command.```")
            return
        }

        if ((firstcommand.includes("//dog")) && (secondcommand === undefined)) {
            message.delete(1)
            if (working == 1) {
                if (todayms > workendtime) {
                    status += ("       (shift over)")
                } else {
                    hours = Math.floor((workendtime - todayms) / 3600000)
                    if (hours > 0) {
                        minutes = Math.floor(((workendtime - todayms) - (hours * 3600000)) / 60000)
                    } else {
                        minutes = Math.floor(((workendtime - todayms) / 60000))
                    }
                    if (hours > 0) {
                        status += ("       (" + hours + " hours " + minutes + " minutes left in shift)")
                    } else {
                        status += ("       (" + minutes + " minutes left in shift)")
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
                    status += ("      (" + hours + " hours " + minutes + " minutes until full energy)")
                } else {
                    status += ("      (" + minutes + " minutes until full energy)")
                }
            } else {
                status += ("      (full energy)")
            }
            } else if (status == "awake") {
                if (energynum != 0) {
                    hours = Math.floor((energynum * (sleepstatlose / 60000)) / 60)
                if (hours > 0) {
                    minutes = Math.floor(((energynum * (sleepstatlose / 60000)) - (hours * 60)))
                } else {
                    minutes = Math.floor((energynum * (sleepstatlose / 60000)))
                }
                if (device == "PC") {
                if (hours > 0) {
                    status += ("         (" + hours + " hours " + minutes + " minutes until energy depleted)")
                } else {
                    status += ("         (" + minutes + " minutes until energy depleted)")
                }
                } else if (device == "MOBILE") {
                    if (hours > 0) {
                        status += ("\n(" + hours + " hours " + minutes + " minutes until energy depleted)")
                    } else {
                        status += ("\n(" + minutes + " minutes until energy depleted)")
                    }
                }
            } else {
                status += ("         (energy depleted)")
            }
            }
            if (device == "PC") {
                if (currentjob != "none") {
                    message.channel.send("```" + doggoname + ":\n\n" + currentdoggo + "\n\nAge:         " + age + " (" + streaklength + " day streak)\nGender:      " + doggosex + "\nStatus:      " + status + "\nHappiness:   " + happiness + "  (" + happinessnum + "/100)\nHunger:      " + food + "  (" + foodnum + "/100)\nEnergy:      " + energy + "  (" + energynum + "/100)\nPlay Number: " + play + "  (" + playnum + "/100)\nWants:       " + wantsall + "\nMoney:       $" + (money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "\nJob:         Level "+ explevel + " " + jobname + " ($" + salary + "/hour)```")
                } else {
                    message.channel.send("```" + doggoname + ":\n\n" + currentdoggo + "\n\nAge:         " + age + " (" + streaklength + " day streak)\nGender:      " + doggosex + "\nStatus:      " + status + "\nHappiness:   " + happiness + "  (" + happinessnum + "/100)\nHunger:      " + food + "  (" + foodnum + "/100)\nEnergy:      " + energy + "  (" + energynum + "/100)\nPlay Number: " + play + "  (" + playnum + "/100)\nWants:       " + wantsall + "\nMoney:       $" + (money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "\nJob:         none```")
                }
            } else if (device == "MOBILE") {
                if (currentjob != "none") {
                    message.channel.send("```" + doggoname + ":\n\n" + currentdoggo + "\n\nAge:         " + age + " (" + streaklength + " day streak)\nGender:      " + doggosex + "\nStatus:      " + status + "\n\nHappiness:  " + happiness + "(" + happinessnum + "/100)\n\nHunger:     " + food + "(" + foodnum + "/100)\n\nEnergy:     " + energy + "(" + energynum + "/100)\n\nPlay Number:" + play + "(" + playnum + "/100)\n\nWants:       " + wantsall + "\nMoney:       $" + (money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "\nJob:         Level "+ explevel + " " + jobname + " ($" + salary + "/hour)```")
                } else {
                    message.channel.send("```" + doggoname + ":\n\n" + currentdoggo + "\n\nAge:         " + age + " (" + streaklength + " day streak)\nGender:      " + doggosex + "\nStatus:      " + status + "\n\nHappiness:  " + happiness + "(" + happinessnum + "/100)\n\nHunger:     " + food + "(" + foodnum + "/100)\n\nEnergy:     " + energy + "(" + energynum + "/100)\n\nPlay Number:" + play + "(" + playnum + "/100)\n\nWants:       " + wantsall + "\nMoney:       $" + (money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "\nJob:         none```")
                }
            }
            achievementscmd(message, achievements, exp, money, giftboxes, foodservings, achnum, house, pups, 0, doggoname, userid);
            return
        } else if ((firstcommand.includes("//dog")) && (secondcommand !== undefined)) {
            otherdogcmd(message, doggoname, userid, playnum, foodservings, notif, playtimer, exp);
            return;
        }

        if (firstcommand.includes("//ach")) {
            message.delete(1)
            getachievementscmd(message, achievements, doggoname);
            return
        }

        if ((firstcommand.includes("//all")) && (secondcommand != undefined) && (secondcommand.includes("dog"))) {
            message.delete(1)
            alldogscmd(message)
            return
        }

        if (firstcommand.includes("//setting")) {
            message.delete(1)
            message.channel.send("```Settings Menu:\n\nI will be adding more settings as I go, but here are the options you have currently. Strict privacy disables people to even view your dog, moderate allows people to only see your dog's stats, inventory etc. and open privacy allows people to do everything they can with your dog.\n\n//privacy [strict/moderate/open] - allows people being able to interact with your dog by feeding, playing etc.\n//notifications [on/off] - turn on or off receiving dms when your dog is done with work, playing etc.\n//device [pc/mobile] - doggo page and other things visually optimized based on device\n\nPrivacy -          [" + privacy + "]\nNotifications -    [" + notif + "]\nDevice -           [" + device + "]```")
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
        if (firstcommand.includes("//device")) {
            message.delete(1)
            if ((secondcommand != "pc") && (secondcommand != "mobile")) {
                message.channel.send("```Please use //device [pc/mobile] to set your default device.```")
                return
            }
            if (((device).toLocaleLowerCase()) == secondcommand) {
                message.channel.send("```Privacy is already set to " + device + ".```")
                return
            }
            if (secondcommand == "pc") {
                message.channel.send("```Device set to PC.```")
                db.run(`UPDATE users SET device = ? WHERE userid = ?`, ["PC", userid]);
                return
            } else if (secondcommand == "mobile") {
                message.channel.send("```Device set to MOBILE.```")
                db.run(`UPDATE users SET device = ? WHERE userid = ?`, ["MOBILE", userid]);
                return
            }
        }

        if ((firstcommand.includes("//stat")) && (secondcommand === undefined)) {
            message.delete(1)
            message.channel.send("```" + doggoname + "'s Stats:\n\nHappiness:   " + happiness + "  (" + happinessnum + "/100)\nHunger:      " + food + "  (" + foodnum + "/100)\nEnergy:      " + energy + "  (" + energynum + "/100)\nPlay Number: " + play + "  (" + playnum + "/100)\n\nEnergy Gain Rate:      +1 / " + (Math.round((sleepstatgain / 60000) * 100) / 100) + " min      (" + (Math.ceil(((sleepstatgain / 60000) * 100) / 60)) + " hours to fill energy bar)\nEnergy Lose Rate:      -1 / " + (Math.round((sleepstatlose / 60000) * 100) / 100) + " min    (" + (Math.ceil(((sleepstatlose / 60000) * 100) / 60)) + " hours to deplete energy bar)\nFood Lose Rate Asleep: -1 / " + (Math.round(((foodstatlose * 3) / 60000) * 100) / 100) + " min     (" + (Math.round((((foodstatlose * 3) / 60000) * 100) / 60)) + " hours to deplete food bar)\nFood Lose Rate Awake:  -1 / " + (Math.round((foodstatlose / 60000) * 100) / 100) + " min      (" + (Math.round(((foodstatlose / 60000) * 100) / 60)) + " hours to deplete food bar)\nPlay Lose Rate Asleep: -1 / " + (Math.round((playstatlose / 60000) * 100) / 100) + " min   (" + (Math.round(((playstatlose / 60000) * 100) / 60)) + " hours to deplete play number)\nPlay Lose Rate Awake:  -1 / " + (Math.round(((playstatlose * 1.2) / 60000) * 100) / 100) + " min      (" + (Math.round(((playstatlose / 60000) * 100) / 60)) + " hours to deplete play number)\nPlay Gain Rate:        +1 / " + (Math.round((playstatgain / 60000) * 100) / 100) + " min    (" + (Math.round((playstatgain / 60000) * 100)) + " minutes to fill play number)\n\nTotal income:                    $" + (totalmoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "\nTotal hours worked:              " + (totalworkhours.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "\nTotal minutes played:            " + (totalplaytime.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "\nTotal servings of food eaten:    " + (totalservings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "\nTotal energy shots drank:        " + (totalshots.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "```")
            achievementscmd(message, achievements, exp, money, giftboxes, foodservings, achnum, house, pups, 0, doggoname, userid);
            return
        } else if ((firstcommand.includes("//stat")) && (secondcommand !== undefined)) {
            otherdogcmd(message, doggoname, userid, playnum, foodservings, notif, playtimer, exp);
            return;
        }

        if ((firstcommand.includes("//stop")) && (secondcommand !== undefined) && (secondcommand.includes("play"))) {
            message.delete(1)
            var dpresult = doneplayingcmd(message, doggoname, "none", playnum, 0, playstatgain, 0, playtime, 0, totalplaytime, 0, userid, 0, 0, notif, 0, playtimer, 0, status, 0);
            playnum = dpresult[0];
            return;
        }

        if ((firstcommand == "//my") && ((secondcommand == "jobs") || (secondcommand == "job")) && (thirdcommand === undefined)) {
            message.delete(1)
            var toSend = myjobslist(doggoname, exp);
            message.channel.send(toSend);
            achievementscmd(message, achievements, exp, money, giftboxes, foodservings, achnum, house, pups, 0, doggoname, userid);
        } else if ((firstcommand == "//my") && ((secondcommand == "jobs") || (secondcommand == "job")) && (thirdcommand !== undefined)) {
            otherdogcmd(message, doggoname, userid, playnum, foodservings, notif, playtimer, exp);
            return;
        }

        if ((firstcommand.includes("//my")) && (secondcommand != undefined) && (secondcommand.includes("fam")) && (thirdcommand === undefined)) {
            message.delete(1)
            if (pups > 0) {
                message.channel.send("```" + doggoname + "'s Family:\n\n" + dogandpup + "  x" + pups + "\n\nPuppies' hunger:   " + pupshungerbar + "  (" + pupshunger + "/100)" + "```")
            } else if (pups <= 0) {
                message.channel.send("```" + doggoname + "'s Family:\n\n" + regulardoggo + "```")
            }
            achievementscmd(message, achievements, exp, money, giftboxes, foodservings, achnum, house, pups, 0, doggoname, userid)
            return
        } else if ((firstcommand.includes("//my")) && (secondcommand != undefined) && (secondcommand.includes("fam")) && (thirdcommand !== undefined)) {
            otherdogcmd(message, doggoname, userid, playnum, foodservings, notif, playtimer, exp);
            return;
        }

        if ((firstcommand.includes("//buy")) && (secondcommand != undefined) && (secondcommand.includes("food"))) {
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
                var dpresult = doneplayingcmd(message, doggoname, "none", playnum, 0, playstatgain, 0, playtime, 0, totalplaytime, 0, userid, 0, 0, notif, 0, playtimer, 0, status, 0);
                playnum = dpresult[0];
                if (working == 0) {
                    message.channel.send("```" + doggoname + " bought " + commandnumber + " serving(s) of food for $" + (Math.round(((commandnumber * foodprice) * saleprice))) + ".```")
                    return
                } else if (working == 1) {
                    message.channel.send("```" + doggoname + " bought " + commandnumber + " serving(s) of food for $" + (Math.round(((commandnumber * foodprice) * saleprice))) + " while on break at work.```")
                    return
                }
                
            } else {
                message.channel.send("```" + doggoname + " needs $" + (Math.round((((commandnumber * foodprice) * saleprice) - money))) + " more to buy " + commandnumber + " servings of food.```")
            }
        }
        if ((firstcommand.includes("//buy")) && (secondcommand != undefined) && (secondcommand.includes("house"))) {
            message.delete(1)
            if (house != "none") {
                message.channel.send("```Please use //sell house to sell your current house before buying a new one.```")
                return
            }
            house = thirdcommand;
            var {housecost, visiblehouse, housename} = houseobj[house];
            if (thirdcommand !== undefined) {
                if (money >= Math.round((housecost * saleprice))) {
                    money -= Math.round((housecost * saleprice))
                    db.run(`UPDATE users SET money = ? WHERE userid = ?`, [money, userid]);
                    db.run(`UPDATE users SET house = ? WHERE userid = ?`, [house, userid]);
                    var dpresult = doneplayingcmd(message, doggoname, "none", playnum, 0, playstatgain, 0, playtime, 0, totalplaytime, 0, userid, 0, 0, notif, 0, playtimer, 0, status, 0);
                    playnum = dpresult[0];
                    message.channel.send("```" + doggoname + " bought the " + housename + " for $" + (Math.round((housecost * saleprice))) + ".```")
                    newanum = 2
                    achievementscmd(message, achievements, exp, money, giftboxes, foodservings, achnum, house, pups, newanum, doggoname, userid);
                } else {
                    message.channel.send("```" + doggoname + " needs $" + ((housecost * saleprice) - money) + " more to buy the " + housename + ".```")
                }
            } else if (thirdcommand === undefined) {
                message.channel.send("```Please specify which house you want by using //buy house [type] or use //help buy to see what house you can buy.```")
                return
            }
        }
        if ((firstcommand.includes("//buy")) && (secondcommand != undefined) && (secondcommand.includes("crate"))) {
            message.delete(1)
            if (money >= 20) {
                message.channel.send("```You bought a crate.```")
            } else if (money < 20) {
                message.channel.send("```" + doggoname + " needs $" + (20 - money) + " more to but a loot crate.```")
            }
        }
        if ((firstcommand.includes("//buy")) && (secondcommand != undefined) && (secondcommand.includes("bed"))) {
            message.delete(1)
            if (bed != "none") {
                message.channel.send("```Please use //sell bed to sell your current bed before buying a new one.```")
                return
            }
            if (thirdcommand !== undefined) {
                bed = (thirdcommand + "name, " + thirdcommand + "cost, " + thirdcommand + "increase")
                var {bedcost, bedincrease} = bedobj[bed];
                if (bedobj[bed] === undefined) {
                    message.channel.send("```Please specify which bed you want by using //buy bed [type] or use //help buy to see what beds you can buy.```")
                    return
                } else {
                if (money >= Math.round((bedcost * saleprice))) {
                    money -= Math.round((bedcost * saleprice))
                    bed = thirdcommand
                    sleepstatgain = Math.round((360000 * ((1/bedincrease))));
                    db.run(`UPDATE users SET money = ? WHERE userid = ?`, [money, userid]);
                    db.run(`UPDATE users SET bed = ? WHERE userid = ?`, [bed, userid]);
                    db.run(`UPDATE users SET sleepstatgain = ? WHERE userid = ?`, [sleepstatgain, userid]);
                    var dpresult = doneplayingcmd(message, doggoname, "none", playnum, 0, playstatgain, 0, playtime, 0, totalplaytime, 0, userid, 0, 0, notif, 0, playtimer, 0, status, 0);
                    playnum = dpresult[0];
                    message.channel.send("```" + doggoname + " bought the " + bed + " for $" + (Math.round(bedcost * saleprice)) + ".```")
                } else {
                    message.channel.send("```" + doggoname + " needs $" + ((bedcost * saleprice) - money) + " more to buy the " + bed + ".```")
                }
                }
            } else if (thirdcommand === undefined) {
                message.channel.send("```Please specify which bed you want by using //buy bed [type] or use //help buy to see what beds you can buy.```")
                return
            }
        }
        if ((firstcommand.includes("//buy")) && (secondcommand !== undefined) && (secondcommand.includes("shot"))) {
            message.delete(1)
            if (thirdcommand === undefined) {
                commandnumber = 1
            } else {
                if (isNaN(thirdcommand) == true) {
                    message.channel.send("```Use //buy shot {number} to buy energy shots.```")
                    return
                }
                commandnumber = parseInt(thirdcommand, 10)
            }
        if ((shotbought + commandnumber) > 10) {
            if (shotbought == 10) {
                message.channel.send("```" + doggoname + " can't buy any more energy shots today.```")
                return
            } else {
                message.channel.send("```" + doggoname + " can only buy " + (10 - shotbought) + " more energy shot(s) today.```")
                return
            }
        }
        if (money >= Math.round(((commandnumber * shotprice) * saleprice))) {
            money -= (Math.round(((commandnumber * shotprice) * saleprice)))
            energyshots += commandnumber;
            shotbought += commandnumber
            db.run(`UPDATE users SET money = ? WHERE userid = ?`, [money, userid]);
            db.run(`UPDATE users SET shotbought = ? WHERE userid = ?`, [shotbought, userid]);
            db.run(`UPDATE users SET energyshots = ? WHERE userid = ?`, [energyshots, userid]);
            var dpresult = doneplayingcmd(message, doggoname, "none", playnum, 0, playstatgain, 0, playtime, 0, totalplaytime, 0, userid, 0, 0, notif, 0, playtimer, 0, status, 0);
            playnum = dpresult[0];
            if (working == 0) {
                message.channel.send("```" + doggoname + " bought " + commandnumber + " energy shot(s) for $" + (Math.round(((commandnumber * shotprice) * saleprice))) + ".```")
                return
            } else if (working == 1) {
                message.channel.send("```" + doggoname + " bought " + commandnumber + " energy shot(s) for $" + (Math.round(((commandnumber * shotprice) * saleprice))) + " while on break at work.```")
                return
            }
            
        } else {
            message.channel.send("```" + doggoname + " needs $" + (Math.round((((commandnumber * shotprice) * saleprice) - money))) + " more to buy " + commandnumber + " energy shots.```")
            return
        }
        }
        if ((firstcommand == "//sell") && (secondcommand == "bed")) {
            message.delete(1)
            if (bed != "none") {
                commandtext = bed
                var {bedcost, bedincrease} = bedobj[bed];
                money += (bedcost / 2)
                totalmoney += (bedcost / 2)
                db.run(`UPDATE users SET money = ? WHERE userid = ?`, [money, userid]);
                db.run(`UPDATE users SET totalmoney = ? WHERE userid = ?`, [totalmoney, userid]);
                db.run(`UPDATE users SET bed = ? WHERE userid = ?`, ["none", userid]);
                db.run(`UPDATE users SET sleepstatgain = ? WHERE userid = ?`, [bsleepstatgain, userid]);
                var dpresult = doneplayingcmd(message, doggoname, "none", playnum, 0, playstatgain, 0, playtime, 0, totalplaytime, 0, userid, 0, 0, notif, 0, playtimer, 0, status, 0);
                playnum = dpresult[0];
                message.channel.send("```" + doggoname + " sold the " + commandtext + " for $" + (bedcost / 2) + ".```")
            } else if (bed == "none") {
                message.channel.send("```" + doggoname + " doesn't have a bed.```")
            }
            return
        }
        if ((firstcommand == "//sell") && (secondcommand == "house")) {
            message.delete(1)
            if (house != "none") {
                commandtext = house
                var {housecost, visiblehouse, housename} = houseobj[house];
                money += (housecost / 2)
                totalmoney += (housecost / 2)
                db.run(`UPDATE users SET money = ? WHERE userid = ?`, [money, userid]);
                db.run(`UPDATE users SET totalmoney = ? WHERE userid = ?`, [totalmoney, userid]);
                db.run(`UPDATE users SET house = ? WHERE userid = ?`, ["none", userid]);
                var dpresult = doneplayingcmd(message, doggoname, "none", playnum, 0, playstatgain, 0, playtime, 0, totalplaytime, 0, userid, 0, 0, notif, 0, playtimer, 0, status, 0);
                playnum = dpresult[0];
                message.channel.send("```" + doggoname + " sold the " + housename + " for $" + (housecost / 2) + ".```")
            } else if (bed == "none") {
                message.channel.send("```" + doggoname + " doesn't have a house.```")
            }
            return
        }
        if ((firstcommand.includes("//sell")) && (secondcommand != undefined) && (secondcommand.includes("pup"))) {
            message.delete(1)
            if (thirdcommand === undefined) {
                commandnumber = 1
            } else {
                if (isNaN(thirdcommand) == true) {
                    message.channel.send("```Use //sell puppies {amount} to sell your bred puppies.```")
                    return
                }
                commandnumber = parseInt(thirdcommand, 10)
            }
            if (bredpups < commandnumber) {
                if (commandnumber > 1) {
                    message.channel.send("```" + doggoname + " doesn't have " + commandnumber + " bred puppies to sell.```")
                    return
                } else {
                    message.channel.send("```" + doggoname + " doesn't have any bred puppies to sell.```")
                }
            } else {
                bredpups -= commandnumber
                pups -= commandnumber
                money += (commandnumber * 750)
                totalmoney += (commandnumber * 750)
                db.run(`UPDATE users SET bredpups = ? WHERE userid = ?`, [bredpups, userid]);
                db.run(`UPDATE users SET money = ? WHERE userid = ?`, [money, userid]);
                db.run(`UPDATE users SET totalmoney = ? WHERE userid = ?`, [totalmoney, userid]);
                db.run(`UPDATE users SET pups = ? WHERE userid = ?`, [pups, userid]);
                if (commandnumber > 1) {
                    message.channel.send("```" + doggoname + " sold " + commandnumber + " puppies for $" + ((commandnumber * 750).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "```")
                    return
                } else {
                    message.channel.send("```" + doggoname + " sold 1 puppy for $750```")
                    return
                }
            }
        }
        if ((firstcommand.includes("//eat")) && (sleeping == 0)) {
            message.delete(1).then(() => {
            let db = new sqlite3.Database('./STG.db', sqlite3.OPEN_READWRITE);
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
                foodservings -= commandnumber
                db.run(`UPDATE users SET totalservings = ? WHERE userid = ?`, [totalservings, userid]);
                db.run(`UPDATE users SET foodservings = ? WHERE userid = ?`, [foodservings, userid]);
                db.run(`UPDATE users SET energynum = ? WHERE userid = ?`, [energynum, userid]);
                db.run(`UPDATE users SET foodnum = ? WHERE userid = ?`, [foodnum, userid]);
                if (working == 1) {
                    message.channel.send("```" + eatingdoggo + "\n\n" + doggoname + " ate " + commandnumber + " serving(s) of food on " + doggowords + " lunch break.```")
                    return
                } else {
                    var dpresult = doneplayingcmd(message, doggoname, "none", playnum, 0, playstatgain, 0, playtime, 0, totalplaytime, 0, userid, 0, 0, notif, 0, playtimer, 0, status, 0);
                    playnum = dpresult[0];
                    message.channel.send("```" + eatingdoggo + "\n\n" + doggoname + " ate " + commandnumber + " serving(s) of food.```")
                    return
                }
            } else if (foodservings <= 0) {
                message.channel.send("```" + doggoname + " doesn't have " + commandnumber + " serving(s) of food.```")
                return
            }
        });
        } else if ((sleeping == 1) && (firstcommand.includes("//eat"))) {
            message.delete(1)
            message.channel.send("```" + doggoname + " is sleeping, wake " + doggoobject + " up to do things.```")
            return
        }
        if (firstcommand.includes("//drink")) {
            message.delete(1)
            if (sleeping == 1) {
                message.channel.send("```" + doggoname + " is sleeping, wake " + doggoobject + " up to do things.```")
                return
            }
            if (energyshots == 0) {
                message.channel.send("```" + doggoname + " doesn't have 1 energy shot.```")
                return
            }
            if (todayms < shotcd) {
                message.channel.send("```" + doggoname + " can't drink an energy shot for another " + (Math.floor((shotcd - todayms) / 60000)) + " minutes.```")
                return
            }
            energyshots -= 1
            shotcd = (todayms + 3600000)
            energynum += 15
            if (energynum > 100) {
                energynum = 100
            }
            totalshots += 1
            db.run(`UPDATE users SET energyshots = ? WHERE userid = ?`, [energyshots, userid]);
            db.run(`UPDATE users SET shotcd = ? WHERE userid = ?`, [shotcd, userid]);
            db.run(`UPDATE users SET energynum = ? WHERE userid = ?`, [energynum, userid]);
            db.run(`UPDATE users SET totalshots = ? WHERE userid = ?`, [totalshots, userid]);
            message.channel.send("```" + doggoname + " drank an energy shot.```")
            return
        }

        if ((firstcommand == "//feed") && (secondcommand != undefined) && (!secondcommand.includes("fam"))) {
            otherdogcmd(message, doggoname, userid, playnum, foodservings, notif, playtimer, exp);
            return;
        } else if ((firstcommand.includes("//feed")) && (secondcommand != undefined) && (secondcommand.includes("fam"))) {
            message.delete(1)
            let db = new sqlite3.Database('./STG.db', sqlite3.OPEN_READWRITE);
            if (pups < 1) {
                message.channel.send("```" + doggoname + " doesn't have any puppies to feed.```")
                return
            }
            if (thirdcommand === undefined) {
                commandnumber = 1
            } else {
                if (isNaN(thirdcommand) == true) {
                    message.channel.send("```Use //feed family {amount} to feed your puppies.```")
                    return
                }
                commandnumber = parseInt(thirdcommand, 10)
            }
            if (foodservings < commandnumber) {
                message.channel.send("```" + doggoname + " doesn't have " + commandnumber + " serving(s) of food.```")
                return
            }
                pupshunger += (Math.round((100 * commandnumber) / pups))
                if (pupshunger > 100) {
                    pupshunger = 100
                }
                foodservings -= commandnumber
                db.run(`UPDATE users SET pupshunger = ? WHERE userid = ?`, [pupshunger, userid]);
                db.run(`UPDATE users SET foodservings = ? WHERE userid = ?`, [foodservings, userid]);
                if (pups > 1) {
                   message.channel.send("```" + dogpup + "\n\n" + doggoname + " fed " + doggowords + " puppies " + commandnumber + " serving(s) of food.```")
                   return
                } else {
                    message.channel.send("```" + dogpup + "\n\n" + doggoname + " fed " + doggowords + " puppy " + commandnumber + " serving(s) of food.```")
                    return
                }
                
        }
        if ((firstcommand.includes("//apply")) && (secondcommand !== undefined) && (currentjob == "none") && (appliedjob == "none")) {
            message.delete(1)
            var job = secondcommand;
                var {jobname, jobnumber, jobsalary, jobtime, jobindex} = jobsobj[job];
                if (jobsobj[job] !== undefined) {
                applytime = (todayms + 1800000);
                db.run(`UPDATE users SET applytime = ? WHERE userid = ?`, [applytime, userid]);
                db.run(`UPDATE users SET appliedjob = ? WHERE userid = ?`, [job, userid]);
                doneplayingcmd(message, doggoname, "none", playnum, 0, playstatgain, 0, playtime, 0, totalplaytime, 0, userid, 0, 0)
                message.channel.send("```" + doggoname + " applied for " + jobname + ", check back in 30 minutes to see if your application is accepted or not using //application.```")
                if (notif == "ON") {
                    notifnumber =  (todayms + 1800000)
                    db.run(`UPDATE users SET applytimer = ? WHERE userid = ?`, [notifnumber, userid]);
                }
            } else {
                message.channel.send("```That is not a available job, you can use //jobs to find the list of available jobs.```");
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
        if (firstcommand.includes("//appli")) {
            message.delete(1)
            var {jobname, jobnumber, jobsalary, jobtime, jobindex} = jobsobj[appliedjob];
            if ((todayms >= applytime) && (appliedjob != "none")) {
                var dpresult = doneplayingcmd(message, doggoname, "none", playnum, 0, playstatgain, 0, playtime, 0, totalplaytime, 0, userid, 0, 0, notif, 0, playtimer, 0, status, 0);
                playnum = dpresult[0];
                if ((Math.random() * 25) >= jobnumber) {
                    db.run(`UPDATE users SET currentjob = ? WHERE userid = ?`, [appliedjob, userid]);
                    db.run(`UPDATE users SET appliedjob = ? WHERE userid = ?`, ["none", userid]);
                    message.channel.send("```Congrats! " + doggoname + " now has a job as a " + jobname + ".\nJob details:\n\nSalary = $" + jobsalary + "/hour\nShift length = " + (Math.round(jobtime / 3600000)) + "```")
                    var msgtosend = ("I just got a job working as a " + jobname + "!");
                    dogagram(userid, doggoname, msgtosend);
                } else {
                    db.run(`UPDATE users SET appliedjob = ? WHERE userid = ?`, ["none", userid]);
                    message.channel.send("```Sorry, " + doggoname + "'s application was not accepted.```")
                }
                if ((notif == "ON") && (applytimer != 0)) {
                    db.run(`UPDATE users SET applytimer = ? WHERE userid = ?`, [0, userid]);
                }
            } else if (todayms <= applytime) {
                message.channel.send("```" + doggoname + " still has " + Math.round(((applytime - todayms) / 60000)) + " minutes before " + doggowords + " application is processed.```")
            } else if (appliedjob == "none") {
                message.channel.send("```" + doggoname + " doesn't have any application awaiting processing currently.```")
            }
        }

        if ((firstcommand == "//quit") && (secondcommand == "job") && ((currentjob != "none")) || (quit == 1)) {
            message.delete(1)
            if (quit == 0) {
                var dpresult = doneplayingcmd(message, doggoname, "none", playnum, 0, playstatgain, 0, playtime, 0, totalplaytime, 0, userid, 0, 0, notif, 0, playtimer, 0, status, 0);
                playnum = dpresult[0];
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
        }

            if ((firstcommand == ("//go")) && (secondcommand == "home") && (working == 1) && (todayms >= workendtime)) {
                var tempsalary = 0
                message.delete(1);
                if (maxxp == false) {
                if (pregnant == 1) {
                    experience += 0.5
                } else if (pregnant == 0) {
                    experience += 1
                }
                }
                tempsalary = salary
                salary = ((jobsalary) + (Math.floor(experience / 10)) * (0.1 * jobsalary));
                money += (Math.round((salary * (jobtime / 3600000)) * ebprice))
                totalmoney += (Math.round((salary * (jobtime / 3600000)) * ebprice))
                status = "awake"
                working = 0;
                totalworkhours += (jobtime / 3600000)
                exp[jobindex] = experience;
                var expstr = exp.toString();
                db.run(`UPDATE users SET salary = ? WHERE userid = ?`, [salary, userid]);
                db.run(`UPDATE users SET exp = ? WHERE userid = ?`, [expstr, userid]);
                db.run(`UPDATE users SET money = ? WHERE userid = ?`, [(Math.round(money)), userid]);
                db.run(`UPDATE users SET totalmoney = ? WHERE userid = ?`, [(Math.round(totalmoney)), userid]);
                db.run(`UPDATE users SET status = ? WHERE userid = ?`, ["awake", userid]);
                db.run(`UPDATE users SET working = ? WHERE userid = ?`, [0, userid]);
                db.run(`UPDATE users SET totalworkhours = ? WHERE userid = ?`, [totalworkhours, userid]);
                message.channel.send("```" + visiblehouse + "\n\n" + doggoname + " worked for " + (jobtime / 3600000) + " hour(s) and earned $" + (Math.round((((salary * (jobtime / 3600000)))) * ebprice)) + ".```")
                if ((notif == "ON") && (worktimer != 0)) {
                    db.run(`UPDATE users SET worktimer = ? WHERE userid = ?`, [0, userid]);
                }
                if ((experience > 0) && (salary > tempsalary) && (tempsalary != 0)) {
                    message.channel.send("```Congrats! " + doggoname + " was promoted at work and now earns $" + salary + "/hour.```");
                    var msgtosend = ("Great day at work, got promoted to $" + salary + "/hour!")
                    dogagram(userid, doggoname, msgtosend);
                }
                return
            } else if ((firstcommand == ("//go")) && (secondcommand == "home") && (working == 0)) {
                message.delete(1)
                message.channel.send("```" + doggoname + " is not currently working.```")
                return
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
                return
            }

            if (firstcommand.includes("//work")) {
            message.delete(1)
            if ((working == 0) && (sleeping == 0) && (energynum > workenergy) && (currentjob != "none")) {
                var dpresult = doneplayingcmd(message, doggoname, "none", playnum, 0, playstatgain, 0, playtime, 0, totalplaytime, 0, userid, 0, 0, notif, 0, playtimer, 0, status, 0);
                playnum = dpresult[0];
                status = "working"
                working = 1
                workstarttime = todayms
                workendtime = (todayms + jobtime);
                db.run(`UPDATE users SET workendtime = ? WHERE userid = ?`, [workendtime, userid]);
                db.run(`UPDATE users SET naptime = ? WHERE userid = ?`, [workendtime, userid]);
                db.run(`UPDATE users SET working = ? WHERE userid = ?`, [1, userid]);
                db.run(`UPDATE users SET status = ? WHERE userid = ?`, ["working", userid]);
                db.run(`UPDATE users SET workstarttime = ? WHERE userid = ?`, [workstarttime, userid]);
                message.channel.send("```" + doggoname + " is now working as a " + jobname + " for " + (jobtime / 3600000) + " hour(s).```")
                if (notif == "ON") {
                notifnumber = workendtime
                db.run(`UPDATE users SET worktimer = ? WHERE userid = ?`, [notifnumber, userid]);
                }
            } else if (currentjob == "none") {
                message.channel.send("```" + doggoname + " does not have a job, " + doggoname + " can apply for one using //apply or //help jobs for job help.```")
            } else if ((firstcommand.includes("//work")) && (energynum < workenergy)) {
                message.channel.send("```" + doggoname + " needs more energy before " + doggonoun + " can work.```")
            } else if ((firstcommand.includes("//work")) && (working == 1)) {
                message.channel.send("```" + doggoname + " is already working, use //go home to go home from work.```")
            }
        }

        if ((firstcommand.includes("//inv")) && (secondcommand === undefined)) {
            message.delete(1)
            if (todayms > gifttime) {
                giftboxes += boxprice
            }
            message.channel.send("```" + doggoname + "'s Inventory:\n\nMoney:           $" + (money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "\nFood servings:   " + (foodservings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "\nEnergy shots:    " + (energyshots.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "\nHouse:           " + housename + "\nBed:             " + bed + "\nGift Boxes:      " + giftboxes + "```")
            achievementscmd(message, achievements, exp, money, giftboxes, foodservings, achnum, house, pups, 0, doggoname, userid);
            return
        } else if ((firstcommand.includes("//inv")) && (secondcommand !== undefined)) {
            otherdogcmd(message, doggoname, userid, playnum, foodservings, notif, playtimer, exp);
            return;
        }

        if (firstcommand.includes("//bath")) {
            message.delete(1)
            if (money < 25) {
                message.channel.send("```" + doggoname + " needs $" + (25 - money) + " to go get a bath at the dog groomer.```")
                return
            }
            var dpresult = doneplayingcmd(message, doggoname, "none", playnum, 0, playstatgain, 0, playtime, 0, totalplaytime, 0, userid, 0, 0, notif, 0, playtimer, 0, status, 0);
            playnum = dpresult[0];
            message.channel.send("```" + regulardoggo + "\n\n" + doggoname + " got a bath at the dog groomer for $25.```")
            bathnum = 100
            money -= 25
            db.run(`UPDATE users SET bathnum = ? WHERE userid = ?`, [bathnum, userid]);
            db.run(`UPDATE users SET money = ? WHERE userid = ?`, [money, userid]);
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
        } 
            if (firstcommand.includes("//breed")) {
            message.delete(1)
            if ((todayms >= breedcooldown) && (pregnant == 0)) {
                if (doggosex.toString().startsWith("male")) {
                    breedcooldown = (todayms + 172800000)
                    money += 500
                    totalmoney += 500
                    db.run(`UPDATE users SET money = ? WHERE userid = ?`, [money, userid]);
                    db.run(`UPDATE users SET totalmoney = ? WHERE userid = ?`, [totalmoney, userid]);
                    db.run(`UPDATE users SET breedcooldown = ? WHERE userid = ?`, [breedcooldown, userid]);
                    message.channel.send("```" + breedingdoggo + "\n\n" + doggoname + " served as a mate for another owner's dog and got paid $500.```")
                    return
                } else if (doggosex.includes("female")) {
                    if (money >= 500) {
                    breedcooldown = (todayms + 864000000)
                    pregnanttime = (todayms + 604800000)
                    money -= 500
                    db.run(`UPDATE users SET money = ? WHERE userid = ?`, [money, userid]);
                    db.run(`UPDATE users SET breedcooldown = ? WHERE userid = ?`, [breedcooldown, userid]);
                    db.run(`UPDATE users SET pregnanttime = ? WHERE userid = ?`, [pregnanttime, userid]);
                    db.run(`UPDATE users SET pregnant = ? WHERE userid = ?`, [1, userid]);
                    message.channel.send("```" + breedingdoggo + "\n" + doggoname + " paid $500 to the mate and is now pregnant.```")
                    return
                    } else {
                        message.channel.send("```" + doggoname + " needs $" + (500 - money) + " more to pay the male mate.```")
                        return
                    }
                }
                } else if (pregnant == 0) {
                    var breedtime = 0
                    var breedcddays = 0
                    var breedcdhours = 0
                    var breedcdminutes = 0
                    var sub1 = 0
                    var sub2 = 0
                    breedtime = (breedcooldown - todayms)
                    breedcddays = (Math.floor((breedtime) / 86400000))
                    sub1 = (Math.floor((breedtime) / 86400000))
                    breedcdhours = (Math.floor((((breedtime) - (sub1)) / 3600000)))
                    sub2 = (Math.floor((((breedtime) - (sub1)) / 3600000)))
                    breedcdminutes = (Math.floor(((breedtime) - (sub1) - (sub2)) / 60000))
                    if (breedcddays > 0) {
                        message.channel.send("```" + doggoname + " can't breed for another " + breedcddays + " day(s) " + breedcdminutes + " hour(s) " + breedcdminutes + " minute(s).```")
                        return
                    } else if (breedcdhours > 0) {
                        message.channel.send("```" + doggoname + " can't breed for another " + breedcdminutes + " hour(s) " + breedcdminutes + " minute(s).```")
                        return
                    } else {
                        message.channel.send("```" + doggoname + " can't breed for another " + breedcdminutes + " minute(s).```")
                        return
                    }
            } else {
                message.channel.send("```" + doggoname + " is already pregnant.```")
                return
            }
        }
        if ((firstcommand.includes("//play")) && (working == 0) && (secondcommand === undefined)) {
            message.delete(1)
            if (status == "playing") {
                message.channel.send("```" + doggoname + " is already playing.```")
                return
            }
            db.run(`UPDATE users SET status = ?, playtime = ? WHERE userid = ?`, ["playing", todayms, userid]);
            if (number <= 3) {
                 message.channel.send("```" + doggoname + " is playing around at the dog park.```")
            } else if ((number > 3) && (number < 7)) {
                message.channel.send("```" + doggoname + " is running around chasing cars.```")
            } else if (number > 6) {
                message.channel.send("```" + doggoname + " is playing by chasing " + doggowords + " tail in circles.```")
            }
            if (notif == "ON") {
            notifnumber = (todayms + (Math.round(((100 - playnum) * playstatgain))))
            db.run(`UPDATE users SET playtimer = ? WHERE userid = ?`, [notifnumber, userid]);
            }
        } else if ((firstcommand.includes("//play")) && (working == 1) && (secondcommand === undefined)) {
            message.delete(1)
            message.channel.send("```" + doggoname + " can't play at work.```")
            return
        } else if ((firstcommand.includes("//play")) && (secondcommand !== undefined)) {
            otherdogcmd(message, doggoname, userid, playnum, foodservings, notif, playtimer, exp);
            return;
        }
        if ((firstcommand.includes("//open")) && (secondcommand != undefined) && (secondcommand.includes("gift"))) {
            message.delete(1).then(() => {
            if ((todayms > gifttime) || (giftboxes > 0)) {
                opengiftcmd(message, thirdcommand, money, totalmoney, giftboxes, foodservings, experience, exp, currentjob, jobindex, doggoname, playnum, playstatgain, playtime, totalplaytime, maxxp, playtimer, userid);
            } else {
                message.channel.send("```" + doggoname + " doesn't have any gift boxes to open :(```")
            }
            return;
        });
        }
        if ((firstcommand.includes("//adopt")) && (secondcommand != undefined) && (secondcommand.includes("pup"))) {
            var someword = ""
            message.delete(1)
            if (thirdcommand === undefined) {
                commandnumber = 1
            } else {
                if (isNaN(thirdcommand) == true) {
                    message.channel.send("```Please use //adopt puppies {amount} to adopt puppies.```")
                }
                commandnumber = parseInt(thirdcommand, 10)
            }
            pups += commandnumber
            if (pups > 20) {
                message.channel.send("```You cannot adopt more than 20 puppies.```")
                return
            } else {
                if (pups == 1) {
                    someword = "it"
                } else if (pups > 1) {
                    someword = "them"
                }
                db.run(`UPDATE users SET pups = ? WHERE userid = ?`, [pups, userid]);
                if (commandnumber == 1) {
                    message.channel.send("```Congrats, " + doggoname + " adopted a puppy! Don't forget to feed " + someword + "!```")
                    return
                } else if (commandnumber > 1) {
                    message.channel.send("```Congrats, " + doggoname + " adopted " + commandnumber + " puppies! Don't forget to feed " + someword + "!```")
                }
            }
        }

    }

    function testcmd(message) {
        console.log("testcmd")
    //    message.channel.send("<@448516707879747635>")
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
    // setInterval(function(){
    // let db = new sqlite3.Database('./STG.db', sqlite3.OPEN_READWRITE);
    // let testuserinfo = `SELECT userid, playtimer FROM users`
    //     db.all(testuserinfo, [], (err, row) => {
    //         if (err) {
    //             console.log(err)
    //         }
    //         if (row === undefined) {
    //             message.channel.send("```" + username2 + " does not currently have a dog.```")
    //             return
    //         } else {
    //             row.forEach((row) => {
    //                 if (row.playtimer != 0) {
    //                     console.log(row.userid + ` ` + row.playtimer)
    //                     client.fetchUser(row.userid).then((user) => {
    //                         user.send("My Message");
    //                     });
    //                     db.run(`UPDATE users SET playtimer = ? WHERE userid = ?`, [0, row.userid]);
    //                 } 
    //             });
    //         }
    //     });
    //     db.close();
    // }, 10000);
    // tdb.close();
        // var fdsaf = 12321313
        // fdsaf2 = fdsaf.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        // console.log(fdsaf2)
    }

    function settalkcmd(message) {
        message.delete(1)
        if (userid != MetalRain) {
            message.channel.send(permissionmsg)
            botmessageschannel.send(username + " tried to use " + fullcommand)
            return
        }
        if (secondcommand === undefined) {
            message.channel.send("```Please use //settalk [percentage]```")
            return
        }
        talkchance = parseInt(secondcommand, 10)
        db.run(`UPDATE servers SET talkchance = ? WHERE guildid = ?`, [talkchance, guildid]);
        message.channel.send("```Talk percentage set to " + talkchance + "%.```")
        return
    }

    function talkcmd(message, fullcommand, splitcommand, chatid, chatnum, userid) {
    //[you asked question][type of response][which question we asked]

    var negative = false;
    var hello = false;
    var steve = false;
    var night = false;
    var where = false;
    var who = false;
    var when = false;
    var time = false;
    var timenum = 0;
    var time = false;
    var tired = false;
    var tirednum = 0;
    var bad = false;
    var badnum = 0;
    var good = false;
    var stop = false;

    talknumber = (Math.ceil(Math.random() * 100));
    var hellos = ["Hi", "Hello", "Sup", "Hello there", "Bye", "Yellow", "Hey there, how are you?"];
    var byes = ["Bye!", "Bye", "See ya", "See ya later", "See ya later!", "It's about time you left", "Bye"];
    var nights = ["Goodnight", "Have a good night!", "Get some sleep", "Sweet dreams"];
    var angrys = ["Shut up", "No one likes you", "Get a life", "Keep telling yourself that"];
    var goodnewss = ["That is good to hear!", "Congrats!", "Congragulations!", "Nice job!"];
    var tireds = ["Aren't we all :(", "Can you go to sleep?", "Can you take a nap?"];
    var nottireds = ["That's good to hear!", "Good to see you are well rested!", "That's a first"];
    var nos = ["I didn't think so either", "Nopers", "Nope", "Are you sure?"];
    var goodsteves = ["Aw, thank you!", "You're too nice", "You're not too bad yourself"];
    var stops = ["STG.exe has stopped working...", "Ok, I will stop doing whatever I am doing"];
    var whosteves = ["A bot that was named after MetalRain682237#4905's gecko named Steve.", "That is classified!"];

    if (chatnum == 0) {
        if (directmessage == false) {
            if ((mute == 1) || (todayms < cooldowntime) || (talkchance < talknumber)) {
                return;
            }
        }
    for (i = 0; i < splitcommand.length; i ++) {
        var word = splitcommand[i];
        if ((word.includes("don't")) || (word.includes("don`t")) || (word.includes("dont")) || (word == ("not") || (word == ("no")))) {
            negative = true;
        }
        if ((word == ("hi")) || (word == ("hey")) || (word == ("hello")) || (word == ("herro"))) {
            hello = true;
        }
        if ((word == ("bot")) || (word == ("robot")) || ((word == ("ai"))) || (word.includes("stev")) || (word.includes("stg"))) {
            steve = true;
        }
        if ((word.includes("night")) || ((word == ("bed")))) {
            night = true;
        }
        if (word.includes("wher")) {
            where = true;
        }
        if ((word.includes("who")) || (word.includes("what"))) {
            who = true;
        }
        if (word.includes("when")) {
            when = true;
        }
        if ((word.includes("what")) || (word.includes("time"))) {
            timenum ++;
            if (timenum >= 2) {
                time = true;
            }
        }
        if ((word.includes("tired")) || (word.includes("need")) || (word.includes("want")) || (word.includes("sleep"))) {
            if (word.includes("tired")) {
                tired = true;
            } else {
                tirednum ++;
                if (tirednum >= 2) {
                    tired = true;
                }
            }
        }
        if ((word == ("bad")) || (word == ("not")) || (word.includes("good")) || (word.includes("dislike")) || (word.includes("hate"))) {
            if (word == ("bad")) {
                bad = true;
            } else {
                badnum ++;
                if (badnum >= 2) {
                    bad = true;
                }
            }
        }
        if ((word.includes("good")) || (word.includes("great")) || (word.includes("love")) || (word.includes("like"))) {
            good = true;
        }
        if (word.includes("stop")) {
            stop = true;
        }
    }

        if ((night == true) && (negative == false)) {
            var rndnum = Math.round(Math.random() * (nights.length - 1));
            message.channel.send(nights[rndnum]);
            cdcmd();
            return;
        }
        if (hello == true) {
            var rndnum = Math.round(Math.random() * (hellos.length - 1));
            message.channel.send(hellos[rndnum]);
            if (rndnum == 6) {
            db.run(`UPDATE users SET chatnum = ?, chatid = ? WHERE userid = ?`, [1, (message.channel.id), userid]);
            }
            cdcmd();
            return;
        }
        if ((steve == true) && (negative == false) && (bad == true)) {
            var rndnum = Math.round(Math.random() * (angrys.length - 1));
            message.channel.send(angrys[rndnum]);
            cdcmd();
            return;
        } else if ((steve == true) && (good == true) && (negative == false) && (bad == false)) {
            var rndnum = Math.round(Math.random() * (goodsteves.length - 1));
            message.channel.send(goodsteves[rndnum]);
            cdcmd();
            return;
        } else if ((steve == true) && (stop == true)) {
            var rndnum = Math.round(Math.random() * (stops.length - 1));
            message.channel.send(stops[rndnum]);
            cdcmd();
            return;
        } else if ((steve == true) && (who == true)) {
            var rndnum = Math.round(Math.random() * (whosteves.length - 1));
            message.channel.send(whosteves[rndnum]);
            cdcmd();
            return;
        }
        if ((tired == true) && (negative == false)) {
            var rndnum = Math.round(Math.random() * (tireds.length - 1));
            message.channel.send(tireds[rndnum]);
            if (rndnum != 0) {
            db.run(`UPDATE users SET chatnum = ?, chatid = ? WHERE userid = ?`, [2, (message.channel.id), userid]);
            }
            return;
        } else if ((tired == true) && (negative == true)) {
            var rndnum = Math.round(Math.random() * (nottireds.length - 1));
            message.channel.send(nottireds[rndnum]);
            cdcmd();
            return;
        }





    } else if ((message.channel.id == chatid) && (chatnum == 1)) {

        if (fullcommand.includes("well")) {
                if (number >= 6) {
            message.channel.send("That's good to hear!");
            } else if (number < 6) {
                message.channel.send("How unfortunate.");
                }
                db.run(`UPDATE users SET chatnum = ?, chatid = ? WHERE userid = ?`, [0, 0, userid]);
                return;
        }

        if (fullcommand.includes("bad")) {
                if (number >= 6) {
            message.channel.send("Sorry to hear that :(");
            } else if (number < 6) {
                message.channel.send("It'll get better.");
                }
                db.run(`UPDATE users SET chatnum = ?, chatid = ? WHERE userid = ?`, [0, 0, userid]);
                return;
        }

        if ((fullcommand.includes("good")) || (fullcommand.includes("great"))) {
            message.channel.send("Well*")
            db.run(`UPDATE users SET chatnum = ?, chatid = ? WHERE userid = ?`, [0, 0, userid]);
            return;
        }

        if ((fullcommand.includes("fine")) || (fullcommand.includes("ok"))) {
                if (number >= 6) {
            message.channel.send("That's better than bad.")
            } else if (number < 6) {
                message.channel.send("Sucks to suck!")
                }
                db.run(`UPDATE users SET chatnum = ?, chatid = ? WHERE userid = ?`, [0, 0, userid]);
                return;
        }
        message.channel.send("Hmmm, that is interesting.")
        db.run(`UPDATE users SET chatnum = ?, chatid = ? WHERE userid = ?`, [0, 0, userid]);
        return;
    } else if ((message.channel.id == chatid) && (chatnum == 2)) {
        if ((fullcommand.includes("yes")) || (fullcommand.includes("yeah"))) {
            message.channel.send("Then go do it!")
            db.run(`UPDATE users SET chatnum = ?, chatid = ? WHERE userid = ?`, [0, 0, userid]);
            return;
        } else if (fullcommand.includes("no")) {
            message.channel.send("That is no bueno :(")
            db.run(`UPDATE users SET chatnum = ?, chatid = ? WHERE userid = ?`, [0, 0, userid]);
            return;
        } else {
            message.channel.send("I see...")
            db.run(`UPDATE users SET chatnum = ?, chatid = ? WHERE userid = ?`, [0, 0, userid]);
            return;
        }
    }
        
        if (firstcommand.includes("no")) {
            if (number < 5) {
        message.channel.send("I think yes.")
            } else if (number > 4 && number < 8 ) {
            message.channel.send("No is right, I mean, no is correct.")
                } else if (number > 7){
                message.channel.send("Nopers!")
                    }
                    cdcmd()
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
                    cdcmd()
                    return
    }

    if ((fullcommand.includes("how are you")) || (fullcommand.includes("how you doing")) || (fullcommand.includes("how goes it"))) {
        message.channel.send("As well as a bot can be, how are you?");
        db.run(`UPDATE users SET chatnum = ?, chatid = ? WHERE userid = ?`, [1, (message.channel.id), userid]);
        cdcmd();
        return;
    }

    if (fullcommand.includes("bye") || (fullcommand.includes("see ya")) || (fullcommand.includes("adios")) || (fullcommand.includes("see you"))) {
            if (number >= 6) {
        message.channel.send("It's about time you left!");
        } else if (number < 6) {
            message.channel.send("Bye bye.")
            }
            cdcmd();
            return;
    }

    if (((fullcommand.includes("what")) && (fullcommand.includes("up"))) || (fullcommand.includes("sup"))) {
        message.channel.send("The clouds, the same place I am stored.")
        cdcmd();
        return;
    }

    if ((fullcommand.includes("cat ")) || (fullcommand.includes("kitten"))) {
        message.channel.send("**NO.** Dogs are better.")
        cdcmd();
        return;
    }

    if ((fullcommand.includes("what")) && (fullcommand.includes("do")) && (fullcommand.includes("today"))) {
        message.channel.send("I've been reading code all day, I need a nap.")
        cdcmd();
        return;
    }

    if (firstcommand.includes("thank")) {
        message.channel.send("You're welcome!")
        cdcmd();
        return;
    }

    if (fullcommand.includes("stop ")) {
        if (number < 6) {
            message.channel.send("You stop.")
            cdcmd();
            return;
        } else {
            message.channel.send("STG.exe has stopped working...")
            cdcmd();
            return;
        }
    }

    if (fullcommand.includes("steve")) {
        if (number >= 6) {
    message.channel.send("That's my name, don't overuse it!")
    } else {
        message.channel.send("Did someone call me?")
    }
        cdcmd();
        return;
    }

    if (((fullcommand.includes("i ")) || (fullcommand.includes("i'm")) || (fullcommand.includes("i`m"))) && ((fullcommand.includes("tired")) || (fullcommand.includes("sleep")))) {
        if (number >= 6) {
            message.channel.send("Get some rest!");
        } else {
            message.channel.send("I want to sleep, but MetalRain won't let me :(");
        }
        cdcmd();
        return;
    }

    if ((fullcommand.includes("go")) && (fullcommand.includes("home"))) {
        message.channel.send("No, you go home.");
        cdcmd();
        return;
    }

}

function cdcmd() {
    if (directmessage == false) {
    future = new Date();
    if (intletter == "s") {
        future = (todayms + (interval * 1000))
    } else if (intletter == "m") {
        future = (todayms + (interval * 60000))
    } else if (intletter == "h") {
        future = (todayms + (interval * 3600000))
    }
    db.run(`UPDATE servers SET cooldowntime = ? WHERE guildid = ?`, [future, guildid]);
    }
    return
}

function setpersoncmd(message) {
    message.delete(1)
    if (message.author.id != MetalRain) {
        message.channel.send(permissionmsg)
        botmessageschannel.send(username + " tried to use " + fullcommand)
        return
    }
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
    if (userid != MetalRain) {
        message.channel.send(permissionmsg)
        botmessageschannel.send(username + " tried to use " + fullcommand)
        return
    }
    if (secondcommand != "all") {
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
    let seconduserinfo = `SELECT * FROM users WHERE ` + doggovalue +` = ?`
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

    db.run(`UPDATE users SET foodnum = ?, energynum = ?, playnum = ?, pupshunger = ?, statsupdatetime = ? WHERE userid = ?`, [100, 100, 100, 100, todayms, userid2]);
    message.channel.send("```" + username2 + "'s " + doggoname2 + " stats were filled up.```");
    }
});
    } else {
        var sendingmessage = "```"
        let alluserinfo = `SELECT * FROM users`
        db.all(alluserinfo, [], (err, row) => {
            if (err) {
                console.log(err)
            }
            if (row === undefined) {
                console.log("error")
                return
            } else {
                row.forEach((row) => {
                    userid2 = row.userid
                    doggoname2 = row.doggoname
                    foodnum2 = row.foodnum
                    energynum2 = row.energynum
                    playnum2 = row.playnum
                    pupshunger2 = row.pupshunger
                    if (doggoname2 != "none") {
                    if (foodnum2 < 100) {
                        db.run(`UPDATE users SET foodnum = ? WHERE userid = ?`, [100, userid2]);
                    }
                    if (energynum2 < 100) {
                        db.run(`UPDATE users SET energynum = ? WHERE userid = ?`, [100, userid2]);
                    }
                    if (playnum2 < 100) {
                        db.run(`UPDATE users SET playnum = ? WHERE userid = ?`, [100, userid2]);
                    }
                    if (pupshunger2 < 100) {
                        db.run(`UPDATE users SET pupshunger = ? WHERE userid = ?`, [100, userid2]);
                    }
                    db.run(`UPDATE users SET statsupdatetime = ? WHERE userid = ?`, [todayms, userid2]);
                    sendingmessage += (doggoname2 + " ")
                    }
                });
                setTimeout(() => {
                    sendingmessage += "were all filled up.```"
                    for(let i = 0; i < sendingmessage.length; i += 1975) {
                                const toSend = sendingmessage.substring(i, Math.min(sendingmessage.length, i + 1975));
                                message.channel.send(toSend);
                    }
                }), 3000
            }
        });
    }
}

function otherdogcmd(message, doggoname, userid, playnum, foodservings, notif, playtimer, exp) {
    if (messagementions == true) {
        username2 = mentionusername
    } else {
        if ((firstcommand.includes("play")) || (firstcommand.includes("inv")) || (firstcommand.includes("stat")) || (firstcommand.includes("dog"))) {
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
    let seconduserinfo = `SELECT * FROM users WHERE ` + doggovalue +` = ?`
        db.get(seconduserinfo, [username2], (err, row) => {
            if (err) {
                console.log(err)
            }
            if (row === undefined) {
                message.channel.send("```" + username2 + " does not currently have a dog.```")
                return
            } else {
                // var dmchannelid = row.dmchannelid
                // var cmdchannelid = row.cmdchannelid
                // var cmdpassenter = row.cmdpassenter
                // var cmdnumber = row.cmdnumber
                // var commandnumber = row.commandnumber
                // var commandtext = row.commandtext
                // var chatid = row.chatid
                // var chatnum = row.chatnum
                // var sgscore = row.sgscore
                // var rpsbotscore = row.rpsbotscore
                // var rpsuserscore = row.rpsuserscore
                // var rpsgame = row.rpsgame
                var userid2 = row.userid
                var username2 = row.username
                var doggocreate2 = row.doggocreate
                var doggocreatedtime2 = row.doggocreatedtime
                var doggoname2 = row.doggoname
                var currentdoggo2 = row.currentdoggo
                var breed2 = row.breed
                var money2 = row.money
                var foodnum2 = row.foodnum
                var energynum2 = row.energynum
                var poopcooldown2 = row.poopcooldown
                var jobcooldown2 = row.jobcooldown
                var breedcooldown2 = row.breedcooldown
                var statsupdatetime2 = row.statsupdatetime
                var sleeping2 = row.sleeping
                var sleeptime2 = row.sleeptime
                var doggosex2 = row.doggosex
                var foodservings2 = row.foodservings
                var applytime2 = row.applytime
                var appliedjob2 = row.appliedjob
                var currentjob2 = row.currentjob
                var working2 = row.working
                var workstarttime2 = row.workstarttime
                var workendtime2 = row.workendtime
                var status2 = row.status
                var quit2 = row.quit
                var playnum2 = row.playnum
                var sleepstatgain2 = row.sleepstatgain
                var sleepstatlose2 = row.sleepstatlose
                var foodstatlose2 = row.foodstatlose
                var playstatlose2 = row.playstatlose
                var playstatgain2 = row.playstatgain
                var bed2 = row.bed
                var doggotime2 = row.doggotime
                var playtime2 = row.playtime
                var totalservings2 = row.totalservings
                var totalworkhours2 = row.totalworkhours
                var totalplaytime2 = row.totalplaytime
                var totalmoney2 = row.totalmoney
                var rawexp2 = row.exp
                var exp2 = (rawexp2.split(",").map(Number));
                var mdexp2 = row.mdexp
                var brdexp2 = row.brdexp
                var ddexp2 = row.ddexp
                var pdexp2 = row.pdexp
                var sdexp2 = row.sdexp
                var salary2 = row.salary
                var naptime2 = row.naptime
                var lastinttime2 = row.lastinttime
                var gifttime2 = row.gifttime
                var giftboxes2 = row.giftboxes
                var killdog2 = row.killdog
                var house2 = row.house
                var notif2 = row.notif
                var privacy2 = row.privacy
                var device2 = row.device
                var playtimer2 = row.playtimer
                var worktimer2 = row.worktimer
                var sleeptimer2 = row.sleeptimer
                var applytimer2 = row.applytimer
                var lottery2 = row.lottery
                var lotterynumber2 = row.lotterynumber
                var lbpoints2 = row.lbpoints
                var pregnant2 = row.pregnant
                var pregnanttime2 = row.pregnanttime
                var pups2 = row.pups
                var pupshunger2 = row.pupshunger
                var bredpups2 = row.bredpups
                var achievements2 = row.achievements
                var achnum2 = row.achnum
                var energyshots2 = row.energyshots
                var shotcd2 = row.shotcd
                var shotdailycd2 = row.shotdailycd
                var shotbought2 = row.shotbought
                var totalshots2 = row.totalshots
                var geckopoints2 = row.geckopoints
                var totalplays = row.totalplays
                var totalfeeds = row.totalfeeds
                var bathnum2 = row.bathnum
                var bathstatlose2 = row.bathstatlose
                var rawnotifmsgs2 = row.notifmsgs
                var notifmsgs2 = (rawnotifmsgs2.split(","));
                var streakstart2 = row.streakstart;
            }

        if (currentdoggo2 == "regulardoggo") {
            currentdoggo2 = regulardoggo
        }

        var streaklength2 = (Math.floor((todayms - streakstart2) / 86400000));

        if (privacy2 == "STRICT") {
            message.channel.send("```" + username2 + "'s dog is private.```")
            return
        }
        if (pregnant2 == 1) {
            sleepstatlose2 = (Math.round(sleepstatlose2 * 0.9))
        }

        var {jobname, jobnumber, jobsalary, jobtime, jobindex} = jobsobj[currentjob2];
        var jobname2 = jobname;
        var jobnumber2 = jobnumber;
        var jobsalary2 = jobsalary;
        var jobtime2 = jobtime;
        var jobindex2 = jobindex;
        var maxxp2 = false;
        var workenergy2;
        var experience2;

        if (currentjob2 == "none") {
            jobname2 = "none";
            experience2 = 0;
        } else {
            experience2 = exp2[jobindex2];
            workenergy2 = ((jobtime2 / sleepstatlose2) + 5)
            if (pregnant2 == 1) {
                jobtime2 = (jobtime2 / 2)
                workenergy2 = (workenergy2 / 2)
            }
            if (experience2 >= 490) {
                maxxp2 = true
            }
        }

        explevel2 = ((Math.floor(experience2 / 10)) + 1)

        var {housecost, visiblehouse, housename} = houseobj[house2];

        var housecost2 = housecost;
        var visiblehouse2 = visiblehouse;
        var housename2 = housename;

        if (house2 == "none") {
            housename2 = "none"
            visiblehouse2 = ""
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
            var dpresult = doneplayingcmd(message, doggoname, doggoname2, playnum, playnum2, playstatgain, playstatgain2, playtime, playtime2, totalplaytime, totalplaytime2, userid, userid2, 1, notif, notif2, playtimer, playtimer2, status, status2);
            playnum = dpresult[0];
            playnum2 = dpresult[1];
        }

        if (doggosex2 == "female") {
            doggonoun2 = "she"
            doggowords2 = "her"
            doggoobject2 = "her"
            if (pregnant2 == 1) {
                pregdays2 = (Math.floor((pregnanttime2 - todayms) / 86400000))
                preghours2 = (Math.floor(((pregnanttime2 - todayms) - (pregdays2 * 86400000)) / 3600000))
                if (pregdays2 > 0) {
                    doggosex2 += ("        (pregnant " + pregdays2 + " days and " + preghours2 + " hours left)")
                } else {
                    doggosex2 += ("        (pregnant " + preghours2 + " hours left)")
                }
            }
        } else if (doggosex2 == "male") {
            doggonoun2 = "he"
            doggowords2 = "his"
            doggoobject2 = "him"
        }

        var agetime2 = (Math.round((todayms - doggocreatedtime2)))
        var ageyears2 = (Math.floor((agetime2 / 51840000)))
        var agemonths2 = (Math.floor(((agetime2 - (ageyears2 * 51840000)) / 4320000)))
        var age2 = (ageyears2 + " years " + agemonths2 + " months old")

        var upresult = updatestats(firstcommand, secondcommand, statsupdatetime2, sleeping2, naptime2, energynum2, foodnum2, playnum2, status2, sleepstatgain2, sleepstatlose2, foodstatlose2, playstatlose2, pupshunger2, pups2, bathnum2, bathstatlose2, userid2);
        statsupdatetime2 = upresult[0];
        energynum2 = upresult[1];
        foodnum2 = upresult[2];
        playnum2 = upresult[3];
        status2 = upresult[4];
        pupshunger2 = upresult[5];
        bathnum2 = upresult[6];

        var wantsall2 = getwants(status2, playnum2, foodnum2, energynum2, bathnum2);

        var happinessnum2 = 100;
        happinessnum2 -= Math.round((100 - energynum2) / 3)
        happinessnum2 -= Math.round((100 - foodnum2) / 3)
        happinessnum2 -= Math.round((100 - playnum2) / 3)

        var barsresult = getstatbars(happinessnum2, foodnum2, energynum2, playnum2, pupshunger2);
        var happiness2 = barsresult[0];
        var food2 = barsresult[1];
        var energy2 = barsresult[2];
        var play2 = barsresult[3];
        var pupshungerbar2 = barsresult[4];

    message.delete(1).then(() => {

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
        if (device == "PC") {
            if (currentjob2 != "none") {
                message.channel.send("```" + username2 + "'s " + doggoname2 + ":\n\n" + currentdoggo2 + "\n\nAge:         " + age2 + " (" + streaklength2 + " day streak)\nGender:      " + doggosex2 + "\nStatus:      " + status2 + "\nHappiness:   " + happiness2 + "  (" + happinessnum2 + "/100)\nHunger:      " + food2 + "  (" + foodnum2 + "/100)\nEnergy:      " + energy2 + "  (" + energynum2 + "/100)\nPlay Number: " + play2 + "  (" + playnum2 + "/100)\nWants:       " + wantsall2 + "\nMoney:       $" + (money2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "\nJob:         Level "+ explevel2 + " " + jobname2 + " ($" + salary2 + "/hour)```")
            } else {
                message.channel.send("```" + username2 + "'s " + doggoname2 + ":\n\n" + currentdoggo2 + "\n\nAge:         " + age2 + " (" + streaklength2 + " day streak)\nGender:      " + doggosex2 + "\nStatus:      " + status2 + "\nHappiness:   " + happiness2 + "  (" + happinessnum2 + "/100)\nHunger:      " + food2 + "  (" + foodnum2 + "/100)\nEnergy:      " + energy2 + "  (" + energynum2 + "/100)\nPlay Number: " + play2 + "  (" + playnum2 + "/100)\nWants:       " + wantsall2 + "\nMoney:       $" + (money2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "\nJob:         none```")
            }
        } else if (device == "MOBILE") {
            if (currentjob2 != "none") {
                message.channel.send("```" + username2 + "'s " + doggoname2 + ":\n\n" + currentdoggo2 + "\n\nAge:         " + age2 + " (" + streaklength2 + " day streak)\nGender:      " + doggosex2 + "\nStatus:      " + status2 + "\n\nHappiness:  " + happiness2 + "(" + happinessnum2 + "/100)\n\nHunger:     " + food2 + "(" + foodnum2 + "/100)\n\nEnergy:     " + energy2 + "(" + energynum2 + "/100)\n\nPlay Number:" + play2 + "(" + playnum2 + "/100)\n\nWants:       " + wantsall2 + "\nMoney:       $" + (money2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "\nJob:         Level "+ explevel2 + " " + jobname2 + " ($" + salary2 + "/hour)```")
            } else {
                message.channel.send("```" + username2 + "'s " + doggoname2 + ":\n\n" + currentdoggo2 + "\n\nAge:         " + age2 + " (" + streaklength2 + " day streak)\nGender:      " + doggosex2 + "\nStatus:      " + status2 + "\n\nHappiness:  " + happiness2 + "(" + happinessnum2 + "/100)\n\nHunger:     " + food2 + "(" + foodnum2 + "/100)\n\nEnergy:     " + energy2 + "(" + energynum2 + "/100)\n\nPlay Number:" + play2 + "(" + playnum2 + "/100)\n\nWants:       " + wantsall2 + "\nMoney:       $" + (money2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "\nJob:         none```")
            }
        }
    }
    if (firstcommand.includes("//stat")) {
        message.channel.send("```" + username2 + "'s " + doggoname2 + "'s Stats:\n\nHappiness:   " + happiness2 + "  (" + happinessnum2 + "/100)\nHunger:      " + food2 + "  (" + foodnum2 + "/100)\nEnergy:      " + energy2 + "  (" + energynum2 + "/100)\nPlay Number: " + play2 + "  (" + playnum2 + "/100)\n\nEnergy Gain Rate:      +1 / " + (Math.round((sleepstatgain2 / 60000) * 100) / 100) + " min      (" + (Math.ceil(((sleepstatgain2 / 60000) * 100) / 60)) + " hours to fill energy bar)\nEnergy Lose Rate:      -1 / " + (Math.round((sleepstatlose2 / 60000) * 100) / 100) + " min    (" + (Math.ceil(((sleepstatlose2 / 60000) * 100) / 60)) + " hours to deplete energy bar)\nFood Lose Rate Asleep: -1 / " + (Math.round(((foodstatlose2 * 3) / 60000) * 100) / 100) + " min     (" + (Math.round((((foodstatlose2 * 3) / 60000) * 100) / 60)) + " hours to deplete food bar)\nFood Lose Rate Awake:  -1 / " + (Math.round((foodstatlose2 / 60000) * 100) / 100) + " min      (" + (Math.round(((foodstatlose2 / 60000) * 100) / 60)) + " hours to deplete food bar)\nPlay Lose Rate Asleep: -1 / " + (Math.round((playstatlose2 / 60000) * 100) / 100) + " min   (" + (Math.round(((playstatlose2 / 60000) * 100) / 60)) + " hours to deplete play number)\nPlay Lose Rate Awake:  -1 / " + (Math.round(((playstatlose2 * 1.2) / 60000) * 100) / 100) + " min      (" + (Math.round(((playstatlose2 / 60000) * 100) / 60)) + " hours to deplete play number)\nPlay Gain Rate:        +1 / " + (Math.round((playstatgain2 / 60000) * 100) / 100) + " min    (" + (Math.round((playstatgain2 / 60000) * 100)) + " minutes to fill play number)\n\nTotal income:                    $" + (totalmoney2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "\nTotal hours worked:              " + (totalworkhours2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "\nTotal minutes played:            " + (totalplaytime2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "\nTotal servings of food eaten:    " + (totalservings2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "\nTotal energy shots drank:        " + (totalshots2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "```")
    }
    if ((firstcommand == "//my") && ((secondcommand == "job") || (secondcommand == "jobs"))) {
        var toSend = myjobslist(doggoname2, exp2);
            message.channel.send(toSend);
            return;
    }
    if ((firstcommand.includes("//my")) && (secondcommand != undefined) && (secondcommand.includes("fam"))) {
        if (pups2 > 0) {
            message.channel.send("```" + username2 + "'s " + doggoname2 + "'s Family:\n\n" + dogandpup + "  x" + pups2 + "\n\nPuppies' hunger:   " + pupshungerbar2 + "  (" + pupshunger2 + "/100)" + "```")
        } else if (pups <= 0) {
            message.channel.send("```" + username2 + "'s " + doggoname2 + "'s Family:\n\n" + regulardoggo + "```")
        }
        return
    }
    if (firstcommand.includes("//inv")) {
        message.channel.send("```" + username2 + "'s " + doggoname2 + "'s Inventory:\n\nMoney:           $" + (money2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "\nFood servings:   " + (foodservings2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "\nEnergy shots:    " + (energyshots2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "\nHouse:           " + housename2 + "\nBed:             " + bed2 + "\nGift Boxes:      " + giftboxes2 + "```")
        return
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
        var dpresult = doneplayingcmd(message, doggoname, doggoname2, playnum, playnum2, playstatgain, playstatgain2, playtime, playtime2, totalplaytime, totalplaytime2, userid, userid2, 0, notif, notif2, playtimer, playtimer2, status, status2);
        playnum = dpresult[0];
        playnum2 = dpresult[1];
        energynum2 += (5 * commandnumber)
        foodnum2 += (50 * commandnumber)
        if (foodnum2 > 100) {
            foodnum2 = 100
        }
        if (energynum2 > 100) {
            energynum2 = 100
        }
        totalservings2 += commandnumber
        foodservings -= commandnumber
        totalfeeds += 1
        db.run(`UPDATE users SET totalservings = ? WHERE userid = ?`, [totalservings2, userid2]);
        db.run(`UPDATE users SET energynum = ? WHERE userid = ?`, [energynum2, userid2]);
        db.run(`UPDATE users SET foodnum = ? WHERE userid = ?`, [foodnum2, userid2]);
        db.run(`UPDATE users SET foodservings = ? WHERE userid = ?`, [foodservings, userid2]);
        db.run(`UPDATE users SET totalfeeds = ? WHERE userid = ?`, [totalfeeds, userid]);
        if (sleeping2 == 1) {
            message.channel.send("```" + eatingdoggo + "\n\n" + doggoname +  " woke up " + username2 + "'s " + doggoname2 + " and fed " + doggoobject2 + " " + commandnumber + " serving(s) of food.```")
        } else if ((sleeping2 == 0) && (working2 == 0)) {
            message.channel.send("```" + eatingdoggo + "\n\n" + doggoname + " fed " + username2 + "'s " + doggoname2 + " " + commandnumber + " serving(s) of food.```")
        } else if (working2 == 1) {
            message.channel.send("```" + eatingdoggo + "\n\n" + doggoname + " fed " + username2 + "'s " + doggoname2 + " " + commandnumber + " serving(s) of food while on " + doggowords2 + " lunch break.```")
        }
        if (notifmsgs2[0] == "none") {
            notifmsgs2 = new Array();
        }
        notifmsgs2.push("" + doggoname + " fed you while you were gone.");
        var strnotifmsgs = notifmsgs2.toString();
        db.run(`UPDATE users SET notifmsgs = ? WHERE userid = ?`, [strnotifmsgs, userid2]);
        newanum = 3
        achievementscmd(message, achievements, exp, money, giftboxes, foodservings, achnum, "none", pups, newanum, doggoname, userid);
    } else if (foodservings < 1) {
        message.channel.send("```" + doggoname + " doesn't have any food to give to " + doggoname2 + ".```")
    }
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
        totalplays += 1
        totalplays2 += 1
        notifnumber = (todayms + (Math.round(((100 - playnum) * 12000))))
        notifnumber2 = (todayms + (Math.round(((100 - playnum2) * 12000))))
        db.run(`UPDATE users SET status = ? WHERE userid = ?`, ["playing", userid]);
        db.run(`UPDATE users SET status = ? WHERE userid = ?`, ["playing", userid2]);
        db.run(`UPDATE users SET playtime = ? WHERE userid = ?`, [todayms, userid]);
        db.run(`UPDATE users SET playtime = ? WHERE userid = ?`, [todayms, userid2]);
        db.run(`UPDATE users SET playtimer = ? WHERE userid = ?`, [notifnumber, userid]);
        db.run(`UPDATE users SET playtimer = ? WHERE userid = ?`, [notifnumber2, userid2]);
        db.run(`UPDATE users SET totalplays = ? WHERE userid = ?`, [totalplays, userid]);
        db.run(`UPDATE users SET totalplays = ? WHERE userid = ?`, [totalplays2, userid2]);
        if (number <= 3) {
             message.channel.send("```" + doggoname +" and " + doggoname2 + " are playing around at the dog park.```")
        } else if ((number > 3) && (number < 6)) {
            message.channel.send("```" + doggoname + " and " + doggoname2 + " are racing each other around the block.```")
        } else if ((number > 5) && (number < 8)) {
            message.channel.send("```" + doggoname + " is chasing squirrels while " + doggoname2 + " decides to run into trees.```")
        } else if (number > 7) {
            message.channel.send("```" + doggoname + " and " + doggoname2 + " are chasing after drones.```")
        }
        // if (number <= 5) {
        //     setTimeout(() => {
        //         var msgtosend = ("Went to the park today. It was good to play and catch up with " + doggoname2 + "");
        //         dogagram(userid, doggoname, msgtosend);
        //     }, 900000);
        // }
        if (notifmsgs2[0] == "none") {
            notifmsgs2 = new Array();
        }
        notifmsgs2.push("" + doggoname + " played with you while you were gone.");
        var strnotifmsgs = notifmsgs2.toString();
        db.run(`UPDATE users SET notifmsgs = ? WHERE userid = ?`, ["none", strnotifmsgs]);
        newanum = 4
        achievementscmd(message, achievements, exp, money, giftboxes, foodservings, achnum, "none", pups, newanum, doggoname, userid);
    } else if (working2 == 1) {
        message.channel.send("```" + doggoname2 + " can't play while at work.```");
    } else if (sleeping2 == 1) {
        message.channel.send("```" + doggoname2 + " didn't want to play because " + doggonoun2 + " was tired.```");
    }
}
});
});
}

function doneplayingcmd(message, doggoname, doggoname2, playnum, playnum2, playstatgain, playstatgain2, playtime, playtime2, totalplaytime, totalplaytime2, userid, userid2, fpplay, notif, notif2, playtimer, playtimer2, status, status2) {
    var playminutes = 0
    var playminutes2 = 0
    var beforeplaynum = 0
    var beforeplaynum2 = 0
    if (fpplay != 1) {
    if ((playtime != 0) && (playtime < todayms)) {
        beforeplaynum = playnum
        if (playnum < 0) {
            playnum = 0;
        }
        playnum += (Math.round((todayms - playtime) / playstatgain))
        if (playnum > 100) {
            playnum = 100
        }
        if ((status == "playing") && ((firstcommand.includes("work")) == false) && ((firstcommand.includes("sleep")) == false)) {
            status = "awake"
            db.run(`UPDATE users SET status = ? WHERE userid = ?`, ["awake", userid]);
        }
        playminutes = (Math.round((100 - beforeplaynum) / 5))
        if (playminutes > 20) {
            totalplaytime += 20
        } else {
            totalplaytime += playminutes
        }
        db.run(`UPDATE users SET playtime = ?, playnum = ?, totalplaytime = ? WHERE userid = ?`, [0, playnum, totalplaytime, userid]);
        if ((notif == "ON") && (playtimer != 0)) {
            db.run(`UPDATE users SET playtimer = ? WHERE userid = ?`, [0, userid]);
        }
        message.channel.send("```" + doggoname + " played for " + (Math.round((todayms - playtime) / 60000)) + " minutes.```")
    }
    }
    if (username2 == "none") {
        return [playnum, playnum2];
    }
    if ((playtime2 != 0) && (playtime2 < todayms)) {
        beforeplaynum2 = playnum2
        playnum2 += (Math.round((todayms - playtime2) / playstatgain2))
        if (playnum2 > 100) {
            playnum2 = 100;
        }
        if (status2 == "playing") {
            status2 = "awake";
        }
        playminutes2 += (Math.round((100 - beforeplaynum2) / 5))
        if (playminutes2 > 20) {
            totalplaytime2 += 20
        } else {
            totalplaytime2 += playminutes2
        }
        db.run(`UPDATE users SET status = ? WHERE userid = ?`, [status2, userid2]);
        db.run(`UPDATE users SET playtime = ? WHERE userid = ?`, [0, userid2]);
        db.run(`UPDATE users SET playnum = ? WHERE userid = ?`, [playnum2, userid2]);
        db.run(`UPDATE users SET totalplaytime = ? WHERE userid = ?`, [totalplaytime2, userid2]);
        if ((notif2 == "ON") && (playtimer2 != 0)) {
            db.run(`UPDATE users SET playtimer = ? WHERE userid = ?`, [0, userid2]);
        }
        message.channel.send("```" + doggoname2 + " played for " + (Math.round((todayms - playtime2) / 60000)) + " minutes.```")
    }
    return [playnum, playnum2];
}

function serverinfocmd(message, firstcommand, fullcommand, userid) {
    message.delete(1)
    if (userid != MetalRain) {
        message.channel.send(permissionmsg)
        botmessageschannel.send(username + " tried to use " + fullcommand)
        return
    }
    if (firstcommand == "//serverinfo") {
    message.channel.send("```Total Servers:    " + servers + "\nTotal Channels:   " + channels + "\nTotal Members:    " + members + "```")
    return
    } else {
        for(let i = 0; i < serverchannels.length; i += 1975) {
            const toSend = serverchannels.substring(i, Math.min(serverchannels.length, i + 1975));
            message.channel.send("```" + toSend + "```");
        }
        return
    }
}

function opengiftcmd(message, thirdcommand, money, totalmoney, giftboxes, foodservings, experience, exp, currentjob, jobindex, doggoname, playnum, playstatgain, playtime, totalplaytime, maxxp, playtimer, userid) {
    let db = new sqlite3.Database('./STG.db', sqlite3.OPEN_READWRITE);
    var dpresult = doneplayingcmd(message, doggoname, "none", playnum, playnum2, playstatgain, 0, playtime, 0, totalplaytime, 0, userid, 0, 0, notif, 0, playtimer, 0, status, 0);
    playnum = dpresult[0];
    var giftnum = (Math.round((Math.random() * 3)))
    var giftitemnum = (Math.ceil(Math.random() * 3))
    var gift = 0
    var giftmoney = 0
    var giftfoodservings = 0
    var giftxp = 0
    if (experience >= 490) {
        maxxp = true
    }
    if (todayms > gifttime) {
        giftboxes += (boxprice);
        db.run(`UPDATE users SET gifttime = ? WHERE userid = ?`, [(todayms + 86400000), userid]);
    }
    if (giftitemnum == 0) {
        giftitemnum = 1
    }
    if (giftnum == 0) {
        giftnum = 1
    }
    if (thirdcommand != "all") {
        if (giftnum == 1) {
            gift = (giftitemnum * 50)
            money += gift
            totalmoney += gift
            giftboxes -= 1;
            message.channel.send("```" + doggoname + " got $" + gift + " from the gift box.```")
        } else if (giftnum == 2) {
            gift = (giftitemnum * 3)
            foodservings += gift
            giftboxes -= 1;
            message.channel.send("```" + doggoname + " got " + gift + " servings of food from the gift box.```")
        } else if (giftnum == 3) {
            if ((currentjob == "none") || (maxxp == true)) {
            gift = (giftitemnum * 50)
            money += gift
            totalmoney += gift
            giftboxes -= 1;
            message.channel.send("```" + doggoname + " got $" + gift + " from the gift box.```")
            return
            } else if ((currentjob != "none") && (maxxp == false)) {
            gift = giftitemnum
            experience += gift
            giftboxes -= 1;
            if (experience > 490) {
                experience = 490
            }
            message.channel.send("```" + doggoname + " got " + gift + " XP applied to " + doggowords + " current job from the gift box.```")
        }
        }
        exp[jobindex] = experience;
        var expstr = exp.toString();
        db.run(`UPDATE users SET giftboxes = ?, money = ?, totalmoney = ?, foodservings = ?, exp = ? WHERE userid = ?`, [giftboxes, money, totalmoney, foodservings, expstr, userid]);
    } else if (thirdcommand == "all") {
    do {
        giftnum = (Math.ceil((Math.random() * 3)))
        giftitemnum = (Math.ceil(Math.random() * 3))
        if (giftitemnum == 0) {
            giftitemnum = 1
        }
        if (giftnum == 0) {
            giftnum = 1
        }
    if (giftnum == 1) {
        gift = (giftitemnum * 50)
        giftmoney += gift
        giftboxes -= 1;
    } else if (giftnum == 2) {
        gift = (giftitemnum * 3)
        giftfoodservings += gift
        giftboxes -= 1;
    } else if (giftnum == 3) {
        if ((currentjob == "none") || (maxxp == true)) {
        gift = (giftitemnum * 50)
        giftmoney += gift
        giftboxes -= 1;
        } else if ((currentjob != "none") && (maxxp = false)) {
        gift = giftitemnum
        giftxp += gift
        giftboxes -= 1;
    }
    }
    } while (giftboxes > 0)
    if (giftmoney > 0) {
    message.channel.send("```" + doggoname + " got $" + giftmoney + " from the gift boxes.```")
    }
    if (giftfoodservings > 0) {
    message.channel.send("```" + doggoname + " got " + giftfoodservings + " servings of food from the gift boxes.```")
    }
    if (giftxp > 0) {
    message.channel.send("```" + doggoname + " got " + giftxp + " XP applied to " + doggowords + " current job from the gift boxes.```")
    }
    money += giftmoney
    totalmoney += giftmoney
    foodservings += giftfoodservings
    experience += giftxp
    if (experience > 490) {
        experience = 490
    }
    exp[jobindex] = experience;
    var expstr = exp.toString();
    db.run(`UPDATE users SET giftboxes = ?, money = ?, totalmoney = ?, foodservings = ?, exp = ? WHERE userid = ?`, [giftboxes, money, totalmoney, foodservings, expstr, userid]);
}
}

function giftcmd(message, firstcommand, secondcommand, casesecondcommand, thirdcommand, threeplus) {
    var otherchannel = false
    var numgifts = 1
    var nummm = 1
    var sendingmessage = "```"
    message.delete(1)
    if (userid != MetalRain) {
        message.channel.send(permissionmsg)
        botmessageschannel.send(username + " tried to use " + fullcommand)
        return
    }
    if (secondcommand != "all") {
    if (secondcommand == "me") {
        casesecondcommand = username
    }
    if (secondcommand === undefined) {
        message.channel.send("```Please specify who you want to give gifts too.```")
        return
    }
    if (firstcommand.slice(6) != 0) {
        nummm = (firstcommand.slice(6))
        numgifts = parseInt(nummm, 10)
    } else {
        numgifts = 1
    }
    if (messagementions == true) {
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
    let seconduserinfo = `SELECT * FROM users WHERE ` + doggovalue +` = ?`
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

    db.run(`UPDATE users SET giftboxes = ? WHERE userid = ?`, [giftboxes2, userid2]);
    if (otherchannel == true) {
        client.channels.get(secondcommand).send("```" + username2 + "'s " + doggoname2 + " was sent " + numgifts + " gift box from an anonymous person!```")
    } else {
        message.channel.send("```" + username2 + "'s " + doggoname2 + " was sent " + numgifts + " gift box(es) from an anonymous person!```")
    }
    }
});
    } if (secondcommand == "all") {
        if (firstcommand.slice(6) != 0) {
            nummm = (firstcommand.slice(6))
            numgifts = parseInt(nummm, 10)
        } else {
            numgifts = 1
        }
        let alluserinfo = `SELECT * FROM users`
        db.all(alluserinfo, [], (err, row) => {
        if (err) {
            console.log(err)
        }
        if (row === undefined) {
            console.log("error")
            return
        } else {
            row.forEach((row) => {
                userid2 = row.userid
                doggoname2 = row.doggoname
                giftboxes2 = row.giftboxes
                giftboxes2 += numgifts

                if (doggoname2 != "none") {
                db.run(`UPDATE users SET giftboxes = ? WHERE userid = ?`, [giftboxes2, userid2]);
                sendingmessage += (doggoname2 + " ")
                }
            });
            setTimeout(() => {
                sendingmessage += "all received " + numgifts + " gift(s).```"
                for(let i = 0; i < sendingmessage.length; i += 1975) {
                            const toSend = sendingmessage.substring(i, Math.min(sendingmessage.length, i + 1975));
                            message.channel.send(toSend);
                }
            }, 3000);
        }
    });
    }
}

function echocmd(message, firstcommand, secondcommand, thirdcommand, casecommand, fullcommand) {
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
    if (userid != MetalRain) {
            message.channel.send(permissionmsg)
            botmessageschannel.send(username + " tried to use " + fullcommand)
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
    if (userid != MetalRain) {
        message.channel.send(permissionmsg)
        botmessageschannel.send(username + " tried to use " + fullcommand)
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
    let seconduserinfo = `SELECT * FROM users WHERE ` + doggovalue +` = ?`
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

        if (firstcommand.includes("kill")) {
        db.run(`UPDATE users SET killdog = ? WHERE userid = ?`, [1, username2]);
        message.channel.send("```Destroying " + username2 + "'s " + doggoname2 + " in 10 seconds...```")
        setTimeout(function(){ message.channel.send("```" + doggoname2 + " destroyed!```"); }, 10000);
        } else if (firstcommand.includes("save")) {
        db.run(`UPDATE users SET killdog = ? WHERE userid = ?`, [0, username2]);
        message.channel.send("```" + username2 + "'s " + doggoname2 + " was revived!```")
        }
    }
    });   
}

function setstatuscmd(message, secondcommand, fullcommand) {
    message.delete(1)
    if (userid != MetalRain) {
        message.channel.send(permissionmsg)
        botmessageschannel.send(username + " tried to use " + fullcommand)
        return
    }
    if ((secondcommand != undefined) && (secondcommand.includes("test"))) {
        const testchannel = client.channels.get("640046708830633985")
        const doggogame1 = client.channels.get("625531951977332741")
        const doggogame2 = client.channels.get("625531987230457877")
        if ((doggogame1) && (doggogame2)) {

        } else {
            message.channel.send("```Can't find doggo-game channels.```")
            return
        }
        if (testchannel) {
            testchannel.setName("TESTING")
            doggogame1.overwritePermissions(message.guild.defaultRole, {
                SEND_MESSAGES: false
            })
            doggogame2.overwritePermissions(message.guild.defaultRole, {
                SEND_MESSAGES: false
            })
        } else {
                message.channel.send("```Channel not found.```")
                return
        }
    } else if ((secondcommand != undefined) && (secondcommand.includes("on"))) {
        const testchannel = client.channels.get("640046708830633985")
        const doggogame1 = client.channels.get("625531951977332741")
        const doggogame2 = client.channels.get("625531987230457877")
        if ((doggogame1) && (doggogame2)) {

        } else {
            message.channel.send("```Can't find doggo-game channels.```")
            return
        }
        if (testchannel) {
            testchannel.setName("ONLINE")
            doggogame1.overwritePermissions(message.guild.defaultRole, {
                SEND_MESSAGES: true
            })
            doggogame2.overwritePermissions(message.guild.defaultRole, {
                SEND_MESSAGES: true
            })
        } else {
            message.channel.send("```Channel not found.```")
            return
        }
    } else if ((secondcommand != undefined) && (secondcommand.includes("off"))) {
        const testchannel = client.channels.get("640046708830633985")
        const doggogame1 = client.channels.get("625531951977332741")
        const doggogame2 = client.channels.get("625531987230457877")
        if ((doggogame1) && (doggogame2)) {

        } else {
            message.channel.send("```Can't find doggo-game channels.```")
            return
        }
        if (testchannel) {
            testchannel.setName("OFFLINE")
            doggogame1.overwritePermissions(message.guild.defaultRole, {
                SEND_MESSAGES: false
            })
            doggogame2.overwritePermissions(message.guild.defaultRole, {
                SEND_MESSAGES: false
            })
        } else {
                message.channel.send("```Channel not found.```")
        }
    }
}

function getdmcmd(message) {
    message.delete(1)
    message.author.createDM().then(dm => message.channel.send(dm.id))
    return
    if (userid != MetalRain) {
        message.channel.send(permissionmsg)
        botmessageschannel.send(username + " tried to use " + fullcommand)
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
        if (commandnumber > 100) {
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

function salecmd(message, firstcommand, secondcommand, thirdcommand, fourthcommand) {
    let db = new sqlite3.Database('./STG.db', sqlite3.OPEN_READWRITE);
    message.delete(1)
    if (userid != MetalRain) {
        message.channel.send(permissionmsg)
        botmessageschannel.send(username + " tried to use " + fullcommand)
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

function earnboostcmd(message, firstcommand, secondcommand, thirdcommand, fourthcommand) {
    let db = new sqlite3.Database('./STG.db', sqlite3.OPEN_READWRITE);
    message.delete(1)
    if (userid != MetalRain) {
        message.channel.send(permissionmsg)
        botmessageschannel.send(username + " tried to use " + fullcommand)
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

function boxeventcmd(message, firstcommand, secondcommand, thirdcommand, fourthcommand) {
    let db = new sqlite3.Database('./STG.db', sqlite3.OPEN_READWRITE);
    message.delete(1)
    if (userid != MetalRain) {
        message.channel.send(permissionmsg)
        botmessageschannel.send(username + " tried to use " + fullcommand)
        return
    }
    if ((secondcommand == "end") && (boxprice != 1)) {
        db.run(`UPDATE serverdata SET boxprice = ? WHERE testdata = ?`, [1, 1234]);
        db.run(`UPDATE serverdata SET boxtime = ? WHERE testdata = ?`, [0, 1234]);
        db.run(`UPDATE serverdata SET boxmsgid = ? WHERE testdata = ?`, [0, 1234]);
        const salechannel = client.channels.get(eventid);
        if (salechannel) {
            salechannel.fetchMessages({ limit: 2 })
            .then(messages => {
                msgsize = messages.size
        if (msgsize >= 1) {
            salechannel.fetchMessage(boxmsgid).catch()
            .then(messages => {
            messages.delete(1)
            .catch();
            message.channel.send("```Box event ended.```")
            })
        } else {
            message.channel.send("```Can't get box event message.```")
        }
        });
        } else {
            message.channel.send("```Error getting event channel.```")
            return
        }
        return
    } else if (secondcommand == "end") {
        message.channel.send("```There is no box event going on right now.```")
        return
    }
    if ((fourthcommand === undefined) || (isNaN(secondcommand) == true) || (isNaN(thirdcommand) == true)) {
        message.channel.send("```Use //box [# of boxes] [number] [seconds/minutes/hours]```")
        return
    }
    if (boxprice != 1) {
        message.channel.send("```There already is a box event going on.```")
        return
    }
    var box = ""
    future = new Date();
    commandtext = fourthcommand
    interval = thirdcommand
    boxprice = parseInt(secondcommand, 10)
    box = ("" + secondcommand + "x")
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
            testchannel.send("```Current Daily Gift Box Event:\n\n+" + box + " boxes gained!\nEnds: " + futuredate + "```").then(messages => {
            boxmsgid = messages.id;
            db.run(`UPDATE serverdata SET boxprice = ? WHERE testdata = ?`, [boxprice, 1234]);
            db.run(`UPDATE serverdata SET boxtime = ? WHERE testdata = ?`, [future, 1234]);
            db.run(`UPDATE serverdata SET boxmsgid = ? WHERE testdata = ?`, [boxmsgid, 1234]);
        })
        message.channel.send("```" + box + " box event started for " + interval + " " + letter + ".```")
    }
    } else {
        message.channel.send("```Bad ID number.```");
        return
    }
}

function dmmessagecmd(message) {
    const dmchannel = client.channels.get("639140486468337664")
    const dmfromchannel = message.channel
    userid = message.author.id
    dmfromchannel.fetchMessages({ limit: 2 })
    .then(messages => dmchannel.send("Last message by " + (messages.first(2)[1].author) + ": " + (messages.first(2)[1].content) + "\n" + (messages.first().author) + ": " + (messages.first().content) + "\nChannel ID: " + message.channel.id));
    let userinfo = `SELECT chatid, chatnum, dmchannelid FROM users WHERE userid = ?`
        db.each(userinfo, [userid], (err, row) => {
            if (err) {
                console.log(err)
            }
            chatid = row.chatid
            chatnum = row.chatnum
            if (row.dmchannelid == 0) {
            db.run(`UPDATE users SET dmchannelid = ? WHERE userid = ?`, [(message.channel.id), userid]);
            }
            talkcmd(message, fullcommand, splitcommand, chatid, chatnum, userid);
        });
        return
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
        message.channel.send("I'm over 6,500 lines long!")
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
        botmessageschannel.send(username + " tried to use " + fullcommand)
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

async function doglb(message) {
    message.delete(1);
    let lbarray = new Array();
    let namearray = new Array();
    let pointarray = new Array();
    let i = 0;
    lbarray[0] = "```Total Income Leaderboard:\n\n";
    lbarray[1] = "```Total Work Hours Leaderboard:\n\n";
    lbarray[2] = "```Total Play Time Minutes:\n\n";
    lbarray[3] = "```Total Servings Eaten:\n\n";
    lbarray[4] = "```Overall Leaderboard:\n\n";
    let lbnames = ["totalmoney", "totalworkhours", "totalplaytime", "totalservings", "lbpoints"];
    do {
        let result = await calclbs(lbnames, lbarray, i, namearray, pointarray);
            lbarray = result[0];
            namearray = result[1];
            pointarray = result[2];
            i ++;
        if (i == 4) {
            await addpoints(namearray, pointarray);
        }
        if (i == 5) {
            for (let index = 0; index < lbarray.length; index++) {
                message.channel.send(lbarray[index]);
            }
        }
    } while (i < 5);
}

async function calclbs(lbnames, lbarray, i, namearray, pointarray) {
    return new Promise(resolve => {
    let i2 = 0;
    let place = 1;
    let points = 10;
    let getlbstats = `SELECT * FROM users ORDER BY ${lbnames[i]} DESC`;
    db.all(getlbstats, [], (err, row) => {
        if (err) {
            console.log(err)
        }
        if (row === undefined) {
            console.log("error");
            botmessageschannel.send("Error getting leaderboards");
            return
        } else {
        do {
            let value;
            var lbpoints2 = 0;
            userid2 = row[i2].userid;
            doggoname2 = row[i2].doggoname;
            totalmoney = row[i2].totalmoney;
            totalmoney2 = (totalmoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            totalworkhours2 = row[i2].totalworkhours;
            totalplaytime = row[i2].totalplaytime;
            totalplaytime2 = (totalplaytime.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            totalservings2 = row[i2].totalservings;
            lbpoints = row[i2].lbpoints;
            if (lbnames[i] == "totalmoney") {
                value = totalmoney2;
            } else if (lbnames[i] == "totalworkhours") {
                value = totalworkhours2;
            } else if (lbnames[i] == "totalplaytime") {
                value = totalplaytime2;
            } else if (lbnames[i] == "totalservings") {
                value = totalservings2;
            } else if (lbnames[i] == "lbpoints") {
                value = lbpoints;
            }
            var ind = namearray.indexOf(userid2);
            if (ind == -1) {
                namearray.push(userid2);
                pointarray.push(0);
                lbpoints2 = 0;
                ind = (namearray.length - 1)
            } else {
                lbpoints2 = pointarray[ind];
            }
            if (doggoname2.length >= 12) {
                doggoname2 = doggoname2.substring(0, 12);
            }
            var space = (new Array(15 - (doggoname2.length)).join(" "));
            if (place.toString().length == 1) {
                space2 = ":   "
            } else if (place.toString().length == 2) {
                space2 = ":  "
            }
            if ((doggoname2 != "none") && (totalmoney > 10) && (userid2 != MetalRain)) {
                lbpoints2 += points;
                lbarray[i] += (place + space2 + doggoname2 + ":" + space + value + "\n");
                place += 1;
                pointarray[ind] = lbpoints2;
                if (points > 0) {
                    points --;
                }
            }
            i2 ++;
            if (i2 == (row.length)) {
                lbarray[i] += "```";
                resolve([lbarray, namearray, pointarray]);
            }
        } while (i2 < (row.length));
        }
        });
    });
}

async function addpoints(namearray, pointarray) {
    return new Promise(resolve => {
        var i = 0;
    do {
        db.run(`UPDATE users SET lbpoints = ? WHERE userid = ?`, [pointarray[i], namearray[i]]);
        i ++;
    } while (i < namearray.length);
    resolve("done");
    });
}

function achievementscmd(message, achievements, exp, money, giftboxes, foodservings, achnum, house, pups, newanum, doggoname, userid) {
    var tempachievements = ""
    var achievementsmessage = ""
    var achievementsnum = 0
    var achmoney = 0
    var achfoodservings = 0
    var achboxes = 0
    var achcgexp = 0
    var achmdexp = 0
    var achbrdexp = 0
    var achddexp = 0
    var achpdexp = 0
    var achsdexp = 0
    var cgexp = exp[0];
    var mdexp = exp[1];
    var brdexp = exp[2];
    var ddexp = exp[3];
    var pdexp = exp[4];
    var sdexp = exp[5];

    if ((cgexp >= 10) && (!achievements.includes("sfcw"))) {
        tempachievements += "sfcw"
        achievementsmessage += (safercrosswalks + "\n")
        achievementsnum += 1
        achcgexp += 5
    }
    if ((cgexp >= 40) && (!achievements.includes("csv"))) {
        tempachievements += "csv"
        achievementsmessage += (childsaver + "\n")
        achievementsnum += 1
        achcgexp += 10
    }
    if ((cgexp >= 90) && (!achievements.includes("csm"))) {
        tempachievements += "csm"
        achievementsmessage += (carstoppingmaster + "\n")
        achievementsnum += 1
        achcgexp += 15
    }
    if ((cgexp >= 190) && (!achievements.includes("ecg"))) {
        tempachievements += "ecg"
        achievementsmessage += (elitecg + "\n")
        achievementsnum += 1
        achmoney += 5000
    }

    if ((mdexp >= 10) && (!achievements.includes("spts"))) {
        tempachievements += "spts"
        achievementsmessage += (shipthis + "\n")
        achievementsnum += 1
        achmdexp += 5
    }
    if ((mdexp >= 40) && (!achievements.includes("mama"))) {
        tempachievements += "mama"
        achievementsmessage += (mailmaster + "\n")
        achievementsnum += 1
        achmdexp += 10
    }
    if ((mdexp >= 90) && (!achievements.includes("sacs"))) {
        tempachievements += "sacs"
        achievementsmessage += (santaclaus + "\n")
        achievementsnum += 1
        achmdexp += 15
    }
    if ((mdexp >= 190) && (!achievements.includes("emd"))) {
        tempachievements += "emd"
        achievementsmessage += (elitemd + "\n")
        achievementsnum += 1
        achmoney += 5000
    }

    if ((brdexp >= 10) && (!achievements.includes("lele"))) {
        tempachievements += "lele"
        achievementsmessage += (littleleague + "\n")
        achievementsnum += 1
        achbrdexp += 5
    }
    if ((brdexp >= 40) && (!achievements.includes("mrle"))) {
        tempachievements += "mrle"
        achievementsmessage += (majorleague + "\n")
        achievementsnum += 1
        achbrdexp += 10
    }
    if ((brdexp >= 90) && (!achievements.includes("gdsm"))) {
        tempachievements += "gdsm"
        achievementsmessage += (grandslam + "\n")
        achievementsnum += 1
        achbrdexp += 15
    }
    if ((brdexp >= 190) && (!achievements.includes("ebrd"))) {
        tempachievements += "ebrd"
        achievementsmessage += (elitebrd + "\n")
        achievementsnum += 1
        achmoney += 5000
    }

    if ((ddexp >= 10) && (!achievements.includes("ftbt"))) {
        tempachievements += "ftbt"
        achievementsmessage += (veryfirstbust + "\n")
        achievementsnum += 1
        achddexp += 5
    }
    if ((ddexp >= 40) && (!achievements.includes("majb"))) {
        tempachievements += "majb"
        achievementsmessage += (majorbust + "\n")
        achievementsnum += 1
        achddexp += 10
    }
    if ((ddexp >= 90) && (!achievements.includes("mas"))) {
        tempachievements += "mas"
        achievementsmessage += (mastersniffer + "\n")
        achievementsnum += 1
        achddexp += 15
    }
    if ((ddexp >= 190) && (!achievements.includes("edd"))) {
        tempachievements += "edd"
        achievementsmessage += (elitedd + "\n")
        achievementsnum += 1
        achmoney += 5000
    }

    if ((pdexp >= 10) && (!achievements.includes("liet"))) {
        tempachievements += "liet"
        achievementsmessage += (lieutenant + "\n")
        achievementsnum += 1
        achpdexp += 5
    }
    if ((pdexp >= 40) && (!achievements.includes("cap"))) {
        tempachievements += "cap"
        achievementsmessage += (captain + "\n")
        achievementsnum += 1
        achpdexp += 10
    }
    if ((pdexp >= 90) && (!achievements.includes("gen"))) {
        tempachievements += "gen"
        achievementsmessage += (general + "\n")
        achievementsnum += 1
        achpdexp += 15
    }
    if ((pdexp >= 190) && (!achievements.includes("epd"))) {
        tempachievements += "epd"
        achievementsmessage += (elitepd + "\n")
        achievementsnum += 1
        achmoney += 5000
    }

    if ((sdexp >= 10) && (!achievements.includes("fwin"))) {
        tempachievements += "fwin"
        achievementsmessage += (firstwin + "\n")
        achievementsnum += 1
        achsdexp += 5
    }
    if ((sdexp >= 40) && (!achievements.includes("recn"))) {
        tempachievements += "recn"
        achievementsmessage += (racechampion + "\n")
        achievementsnum += 1
        achsdexp += 10
    }
    if ((sdexp >= 90) && (!achievements.includes("mute"))) {
        tempachievements += "mute"
        achievementsmessage += (malamute + "\n")
        achievementsnum += 1
        achsdexp += 15
    }
    if ((sdexp >= 190) && (!achievements.includes("esd"))) {
        tempachievements += "esd"
        achievementsmessage += (elitesd + "\n")
        achievementsnum += 1
        achmoney += 5000
    }

    if ((money >= 500) && (!achievements.includes("mgmy"))) {
        tempachievements += "mgmy"
        achievementsmessage += (makingmoney + "\n")
        achievementsnum += 1
        achmoney += 250
    }
    if ((money >= 1000) && (!achievements.includes("foak"))) {
        tempachievements += "foak"
        achievementsmessage += (fourofakind + "\n")
        achievementsnum += 1
        achmoney + 500
    }
    if ((money >= 10000) && (!achievements.includes("bgbs"))) {
        tempachievements += "bgbs"
        achievementsmessage += (bigbucks + "\n")
        achievementsnum += 1
        achmoney += 2500
    }
    if ((money >= 100000) && (!achievements.includes("cecr"))) {
        tempachievements += "cecr"
        achievementsmessage += (castlecrasher + "\n")
        achievementsnum += 1
        achmoney += 10000
    }

    if ((pups >= 1) && (!achievements.includes("fyte"))) {
        tempachievements += "fyte"
        achievementsmessage += (familytime + "\n")
        achievementsnum += 1
        achfoodservings += 10
    }
    if ((pups >= 10) && (!achievements.includes("dglr"))) {
        tempachievements += "dglr"
        achievementsmessage += (doglover + "\n")
        achievementsnum += 1
        achfoodservings += 25
    }
    if ((pups >= 20) && (!achievements.includes("dgae"))) {
        tempachievements += "dgae"
        achievementsmessage += (dogapocalypse + "\n")
        achievementsnum += 1
        achfoodservings += 100
    }

    if ((newanum == 1) && (!achievements.includes("noob"))) {
        tempachievements += "noob"
        achievementsmessage += (imbroke + "\n")
        achievementsnum += 1
        achboxes += 5
    }
    if (((newanum == 2) || (house != "none")) && (!achievements.includes("hehr"))) {
        tempachievements += "hehr"
        achievementsmessage += (househunter + "\n")
        achievementsnum += 1
        achboxes += 10
    }
    if ((newanum == 3) && (!achievements.includes("sic"))) {
        tempachievements += "sic"
        achievementsmessage += (sharingcaring + "\n")
        achievementsnum += 1
        achmoney += 250
    }
    if ((newanum == 4) && (!achievements.includes("tmpr"))) {
        tempachievements += "tmpr"
        achievementsmessage += (teamplayer + "\n")
        achievementsnum += 1
        achmoney += 250
    }

    if ((tempachievements.length > 0) && (achievementsnum != 0)) {
        achievements += tempachievements
        achnum += achievementsnum
        if ((achmoney > 0) || (achfoodservings > 0) || (achboxes > 0) || (achcgexp > 0) || (achmdexp > 0) || (achbrdexp > 0) || (achddexp > 0) || (achpdexp > 0) || (achsdexp > 0)) {
            achievementsmessage += "\nRewards:\n\n"
        }
        if (achmoney > 0) {
            money += achmoney
            totalmoney += achmoney
            achievementsmessage += ("+$" + (achmoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "\n")
            db.run(`UPDATE users SET money = ?, totalmoney = ? WHERE userid = ?`, [money, totalmoney, userid]);
        }
        if (achfoodservings > 0) {
            foodservings += achfoodservings
            achievementsmessage += ("+" + achfoodservings + " food servings\n")
            db.run(`UPDATE users SET foodservings = ? WHERE userid = ?`, [foodservings, userid]);
        }
        if (achboxes > 0) {
            giftboxes += achboxes
            achievementsmessage += ("+" + achboxes + " gift boxes\n")
            db.run(`UPDATE users SET giftboxes = ? WHERE userid = ?`, [giftboxes, userid]);
        }
        if (cgexp > 0) {
            exp[0] += achcgexp
            achievementsmessage += ("+" + achcgexp + " crossing guard dog xp\n")
        }
        if (achmdexp > 0) {
            exp[1] += achmdexp
            achievementsmessage += ("+" + achmdexp + " mail delivery dog xp\n")
        }
        if (achbrdexp > 0) {
            exp[2] += achbrdexp
            achievementsmessage += ("+" + achbrdexp + " baseball retrieving dog xp\n")
        }
        if (achddexp > 0) {
            exp[3] += achddexp
            achievementsmessage += ("+" + achddexp + " drug detection dog xp\n")
        }
        if (achpdexp > 0) {
            exp[4] += achpdexp
            achievementsmessage += ("+" + achpdexp + " k-9 police dog xp\n")
        }
        if (achsdexp > 0) {
            exp[5] += achsdexp
            achievementsmessage += ("+" + achsdexp + " sled dog xp\n")
        }
        var expstr = exp.toString();
        message.channel.send("```" + doggoname + " earned " + achievementsnum + " achievement(s)!\nNew achievements:\n\n" + achievementsmessage + "```")
        db.run(`UPDATE users SET achievements = ?, achnum = ?, exp = ? WHERE userid = ?`, [achievements, achnum, expstr, userid]);
    }
}

function getachievementscmd(message, achievements, doggoname) {
    var achievementsmessage = ""
    var achievementsnum = 0

    if (achievements.includes("sfcw")) {
        achievementsmessage += (safercrosswalks + "\n")
        achievementsnum += 1
    }
    if (achievements.includes("csv")) {
        achievementsmessage += (childsaver + "\n")
        achievementsnum += 1
    }
    if (achievements.includes("csm")) {
        achievementsmessage += (carstoppingmaster + "\n")
        achievementsnum += 1
    }
    if (achievements.includes("ecg")) {
        achievementsmessage += (elitecg + "\n")
        achievementsnum += 1
    }

    if (achievements.includes("spts")) {
        achievementsmessage += (shipthis + "\n")
        achievementsnum += 1
    }
    if (achievements.includes("mama")) {
        achievementsmessage += (mailmaster + "\n")
        achievementsnum += 1
    }
    if ((achievements.includes("sacs"))) {
        achievementsmessage += (santaclaus + "\n")
        achievementsnum += 1
    }
    if ((achievements.includes("emd"))) {
        achievementsmessage += (elitemd + "\n")
        achievementsnum += 1
    }

    if ((achievements.includes("lele"))) {
        achievementsmessage += (littleleague + "\n")
        achievementsnum += 1
    }
    if ((achievements.includes("mrle"))) {
        achievementsmessage += (majorleague + "\n")
        achievementsnum += 1
    }
    if ((achievements.includes("gdsm"))) {
        achievementsmessage += (grandslam + "\n")
        achievementsnum += 1
    }
    if ((achievements.includes("ebrd"))) {
        achievementsmessage += (elitebrd + "\n")
        achievementsnum += 1
    }

    if ((achievements.includes("ftbt"))) {
        achievementsmessage += (veryfirstbust + "\n")
        achievementsnum += 1
    }
    if ((achievements.includes("majb"))) {
        achievementsmessage += (majorbust + "\n")
        achievementsnum += 1
    }
    if ((achievements.includes("mas"))) {
        achievementsmessage += (mastersniffer + "\n")
        achievementsnum += 1
    }
    if ((achievements.includes("edd"))) {
        achievementsmessage += (elitedd + "\n")
        achievementsnum += 1
    }

    if ((achievements.includes("liet"))) {
        achievementsmessage += (lieutenant + "\n")
        achievementsnum += 1
    }
    if ((achievements.includes("cap"))) {
        achievementsmessage += (captain + "\n")
        achievementsnum += 1
    }
    if ((achievements.includes("gen"))) {
        achievementsmessage += (general + "\n")
        achievementsnum += 1
    }
    if ((achievements.includes("epd"))) {
        achievementsmessage += (elitepd + "\n")
        achievementsnum += 1
    }

    if ((achievements.includes("fwin"))) {
        achievementsmessage += (firstwin + "\n")
        achievementsnum += 1
    }
    if ((achievements.includes("recn"))) {
        achievementsmessage += (racechampion + "\n")
        achievementsnum += 1
    }
    if ((achievements.includes("mute"))) {
        achievementsmessage += (malamute + "\n")
        achievementsnum += 1
    }
    if ((achievements.includes("esd"))) {
        achievementsmessage += (elitesd + "\n")
        achievementsnum += 1
    }

    if ((achievements.includes("mgmy"))) {
        achievementsmessage += (makingmoney + "\n")
        achievementsnum += 1
    }
    if ((achievements.includes("foak"))) {
        achievementsmessage += (fourofakind + "\n")
        achievementsnum += 1
    }
    if ((achievements.includes("bgbs"))) {
        achievementsmessage += (bigbucks + "\n")
        achievementsnum += 1
    }
    if ((achievements.includes("cecr"))) {
        achievementsmessage += (castlecrasher + "\n")
        achievementsnum += 1
    }

    if ((achievements.includes("fyte"))) {
        achievementsmessage += (familytime + "\n")
        achievementsnum += 1
    }
    if ((achievements.includes("dglr"))) {
        achievementsmessage += (doglover + "\n")
        achievementsnum += 1
    }
    if ((achievements.includes("dgae"))) {
        achievementsmessage += (dogapocalypse + "\n")
        achievementsnum += 1
    }

    if ((achievements.includes("noob"))) {
        achievementsmessage += (imbroke + "\n")
        achievementsnum += 1
    }
    if ((achievements.includes("hehr"))) {
        achievementsmessage += (househunter + "\n")
        achievementsnum += 1
    }
    if ((achievements.includes("sic"))) {
        achievementsmessage += (sharingcaring + "\n")
        achievementsnum += 1
    }
    if ((achievements.includes("tmpr"))) {
        achievementsmessage += (teamplayer + "\n")
        achievementsnum += 1
    }
    if (achievementsnum > 0) {
    message.channel.send("```" + doggoname + "'s Achievements (" + achievementsnum + "/" + maxachievements + ")\n\n" + achievementsmessage + "```")
    } else {
        message.channel.send("```" + doggoname + " doesn't have any achievements.```")
    }
    return
}

function alldogscmd(message) {
    var sendingmessage = ""
    let lbuserinfo = `SELECT * FROM users ORDER BY status`
        db.all(lbuserinfo, [], (err, row) => {
            if (err) {
                console.log(err)
            }
            if (row === undefined) {
                console.log("error")
                return
            } else {
                var i = 0;
                do {
                    var userid2 = row[i].userid;
                    var doggoname2 = row[i].doggoname;
                    var privacy2 = row[i].privacy;
                    var status2 = row[i].status;
                    var energynum2 = row[i].energynum;
                    var foodnum2 = row[i].foodnum;
                    var playnum2 = row[i].playnum;
                    var statsupdatetime2 = row[i].statsupdatetime;
                    var sleeping2 = row[i].sleeping;
                    var sleepstatgain2 = row[i].sleepstatgain;
                    var sleepstatlose2 = row[i].sleepstatlose;
                    var foodstatlose2 = row[i].foodstatlose;
                    var playstatlose2 = row[i].playstatlose;
                    var pupshunger2 = row[i].pupshunger;
                    var pups2 = row[i].pups;
                    var bathnum2 = row[i].bathnum;
                    var bathstatlose2 = row[i].bathstatlose;

                    var upresult = updatestats("//feed", "blank", statsupdatetime2, sleeping2, naptime2, energynum2, foodnum2, playnum2, status2, sleepstatgain2, sleepstatlose2, foodstatlose2, playstatlose2, pupshunger2, pups2, bathnum2, bathstatlose2, userid2);
                    statsupdatetime2 = upresult[0];
                    energynum2 = upresult[1];
                    foodnum2 = upresult[2];
                    playnum2 = upresult[3];
                    status2 = upresult[4];
                    pupshunger2 = upresult[5];
                    bathnum2 = upresult[6];

                    var wantsall2 = getwants(status2, playnum2, foodnum2, energynum2, bathnum2);
                    if (doggoname2.length >= 9) {
                        doggoname2 = doggoname2.substring(0, 9);
                    }

                    var space = (new Array(12 - (doggoname2.length)).join(" "));
                    var space2 = (new Array(14 - (status2.length)).join(" "));

                    if ((doggoname2 != "none") && (privacy2 != "STRICT")) {
                        sendingmessage += (doggoname2 + space + status2 + space2 + wantsall2 + "\n");
                    }
                    if (i == (row.length - 1)) {
                    sendingmessage = ("```All dogs:\nName       Status       Wants\n\n" + sendingmessage + "```");
                    for(let i = 0; i < sendingmessage.length; i += 1975) {
                                const toSend = sendingmessage.substring(i, Math.min(sendingmessage.length, i + 1975));
                                message.channel.send(toSend);
                    }
                    }
                    i ++;
                } while (i < row.length);
            }
        });
}

function getwants(status, playnum, foodnum, energynum, bathnum) {
        var wants1 = "none"
        var wants2 = "none"
        var wants3 = "none"
        var wants4 = "none"
        var wantsall = "none"
        if ((playnum <= 35) && (status != "playing")) {
            wants1 = "to play";
            wantsall = ("" + wants1 + "");
        }
        if (foodnum <= 35) {
            if (wants1 != "none") {
                wants2 = "food";
                wantsall = ("" + wants1 + ", " + wants2 + "");
            } else if (wants1 == "none") {
                wants1 = "food";
                wantsall = ("" + wants1 + "");
            }
        }
        if (energynum <= 35) {
            if (wants2 != "none") {
                wants3 = "sleep";
                wantsall = ("" + wants1 + ", " + wants2 + ", " + wants3 + "");
            } else if (wants1 != "none") {
                wants2 = "sleep";
                wantsall = ("" + wants1 + ", " + wants2 + "");
            } else if (wants3 == "none") {
                wants1 = "sleep";
                wantsall = ("" + wants1 + "");
            }
        }
        if (bathnum <= 15) {
            if (wants3 != "none") {
                wants4 = "a bath";
                wantsall = ("" + wants1 + ", " + wants2 + ", " + wants3 + ", " + wants4 + "");
            } else if (wants2 != "none") {
                wants3 = "a bath";
                wantsall = ("" + wants1 + ", " + wants2 + ", " + wants3 + "");
            } else if (wants1 != "none") {
                wants2 = "a bath";
                wantsall = ("" + wants1 + ", " + wants2 + "");
            } else if (wants4 == "none") {
                wants1 = "a bath";
                wantsall = ("" + wants1 + "");
            }
        }
        return wantsall;
}

function getsalary(nameOfJobs, experiences) {
    var jobarray = new Array();
    var i = 0;
    do {
        var {jobsalary} = jobsobj[(nameOfJobs[i])];
        var experience = (experiences[i]);
        var salary = ((jobsalary) + (Math.floor(experience / 10)) * (0.1 * jobsalary));
        jobarray.push(salary);
        i ++;
    } while (i < nameOfJobs.length);
    return jobarray;
}

function myjobslist(doggoname, exp) {
            var cgs = new Array(2);
            var mds = new Array(2);
            var brds = new Array(2);
            var dds = new Array(2);
            var pds = new Array(2);
            var sds = new Array(2);
            var cgsn = (((Math.floor((exp[0])/10) + 1).toString().length));
            var cglevel = (Math.floor((exp[0])/10) + 1);
            cgs[0] = (new Array(7 - cgsn).join(" "));
            cgs[1] = (new Array(8 - (exp[0].toString().length)).join(" "));

            var mdsn = (((Math.floor((exp[1])/10) + 1).toString().length));
            var mdlevel = (Math.floor((exp[1])/10) + 1);
            mds[0] = (new Array(7 - mdsn).join(" "));
            mds[1] = (new Array(8 - (exp[1].toString().length)).join(" "));

            var brdsn = (((Math.floor((exp[2])/10) + 1).toString().length));
            var brdlevel = (Math.floor((exp[2])/10) + 1);
            brds[0] = (new Array(7 - brdsn).join(" "));
            brds[1] = (new Array(8 - (exp[2].toString().length)).join(" "));

            var ddsn = (((Math.floor((exp[3])/10) + 1).toString().length));
            var ddlevel = (Math.floor((exp[3])/10) + 1);
            dds[0] = (new Array(7 - ddsn).join(" "));
            dds[1] = (new Array(8 - (exp[3].toString().length)).join(" "));

            var pdsn = (((Math.floor((exp[4])/10) + 1).toString().length));
            var pdlevel = (Math.floor((exp[4])/10) + 1);
            pds[0] = (new Array(7 - pdsn).join(" "));
            pds[1] = (new Array(8 - (exp[4].toString().length)).join(" "));

            var sdsn = (((Math.floor((exp[5])/10) + 1).toString().length));
            var sdlevel = (Math.floor((exp[5])/10) + 1);
            sds[0] = (new Array(7 - sdsn).join(" "));
            sds[1] = (new Array(8 - (exp[5].toString().length)).join(" "));
            
            var salaries = getsalary(["cg", "md", "brd", "dd", "pd", "sd"], exp);
            var totalxp = ((exp[0]) + (exp[1]) + (exp[2]) + (exp[3]) + (exp[4]) + (exp[5]));
            return ("```" + doggoname + "'s Jobs:     (" + totalxp + "/2,940 XP)\n\nCrossing Guard Dog:          Level " + cglevel + cgs[0] + "(" + (exp[0]) + " XP)" + cgs[1] + "$" + (salaries[0]) + "/hour\nMail Delivery Dog:           Level " + mdlevel + mds[0] + "(" + (exp[1]) + " XP)" + mds[1] + "$" + (salaries[1]) + "/hour\nBaseball Retrieving Dog:     Level " + brdlevel + brds[0] + "(" + (exp[2]) + " XP)" + brds[1] + "$" + (salaries[2]) + "/hour\nDrug Detection Dog:          Level " + ddlevel + dds[0] + "(" + (exp[3]) + " XP)" + dds[1] + "$" + (salaries[3]) + "/hour\nK-9 Police Dog:              Level " + pdlevel + pds[0] + "(" + (exp[4]) + " XP)" + pds[1] +  "$" + (salaries[4]) + "/hour\nSled Dog:                    Level " + sdlevel + sds[0] +"(" + [exp[5]] + " XP)" + sds[1] +  "$" + (salaries[5]) + "/hour```");
}

function updatestats(firstcommand, secondcommand, statsupdatetime, sleeping, naptime, energynum, foodnum, playnum, status, sleepstatgain, sleepstatlose, foodstatlose, playstatlose, pupshunger, pups, bathnum, bathstatlose, userid) {
    var realstatsupdatetime;
    if ((todayms >= (statsupdatetime + 900000)) || (firstcommand.includes("wake")) || (firstcommand.includes("sleep")) || (firstcommand.includes("play")) || (firstcommand.includes("eat")) || ((firstcommand.includes("feed")) && ((secondcommand == "fam") || (secondcommand == "family")))) { //let's the stats update code know to update the stats
            statsupdate = 1;
        } else {
            statsupdate = 0;
        }
        if (statsupdate == 1) {
            realstatsupdatetime = statsupdatetime;
            pupshunger -= ((Math.round((todayms - statsupdatetime) / bpupfoodlosestat)) * pups)
            if (pupshunger < 0) {
                pupshunger = 0
            }
            bathnum -= (Math.round((todayms - statsupdatetime) / bathstatlose))
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
            } else if (sleeping == 0) {
                    if ((todayms > naptime) && (naptime != 0)) {
                        statsupdatetime = (todayms - (naptime - statsupdatetime))
                    }
                    if (energynum > 0) {
                    energynum -= (Math.round((todayms - statsupdatetime) / sleepstatlose))
                    if (energynum < 0) {
                    energynum = 0
                    } else if (energynum > 100) {
                        energynum = 100
                    }
                }
                statsupdatetime = realstatsupdatetime;
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
            }
            statsupdatetime = todayms;
            db.run(`UPDATE users SET energynum = ?, foodnum = ?, playnum = ?, pupshunger = ?, bathnum = ?, statsupdatetime = ? WHERE userid = ?`, [energynum, foodnum, playnum, pupshunger, bathnum, statsupdatetime, userid]);
        }
        return [statsupdatetime, energynum, foodnum, playnum, status, pupshunger, bathnum];
}

function getstatbars(stat1, stat2, stat3, stat4, stat5) {
    var statbar1 = statbars[(Math.floor((stat1 - (Math.floor(stat1 / 10) * 10)) / 5) + (Math.floor(stat1 / 10)))];
    var statbar2 = statbars[(Math.floor((stat2 - (Math.floor(stat2 / 10) * 10)) / 5) + (Math.floor(stat2 / 10)))];
    var statbar3 = statbars[(Math.floor((stat3 - (Math.floor(stat3 / 10) * 10)) / 5) + (Math.floor(stat3 / 10)))];
    var statbar4 = statbars[(Math.floor((stat4 - (Math.floor(stat4 / 10) * 10)) / 5) + (Math.floor(stat4 / 10)))];
    var statbar5 = statbars[(Math.floor((stat5 - (Math.floor(stat5 / 10) * 10)) / 5) + (Math.floor(stat5 / 10)))];
    return [statbar1, statbar2, statbar3, statbar4, statbar5];
}

function dogagram(userid, doggoname, msgtosend) {
    let gramchannel = client.channels.get("673350294075211789");
    var gramday = new Date;
    var gramweek = gramday.getDay();
    var gramhours = gramday.getHours();
    var gramtime = gramday.getMinutes();
    var dayofweek = new Array(7);
    dayofweek[0] = "Sunday";
    dayofweek[1] = "Monday";
    dayofweek[2] = "Tuesday";
    dayofweek[3] = "Wednesday";
    dayofweek[4] = "Thursday";
    dayofweek[5] = "Friday";
    dayofweek[6] = "Saturday";
    var timetitle = ((dayofweek[gramweek]) + ", at " + gramhours + ":" + gramtime);
    client.fetchUser(userid).then(user => {
        var image = user.avatarURL;

        const msgforgram = new Discord.RichEmbed();
        msgforgram.setColor("#001aff");
        msgforgram.setAuthor("Dogagram");
        msgforgram.setThumbnail(image);
        msgforgram.setTitle(doggoname);
        msgforgram.addField(timetitle, msgtosend);
        gramchannel.send(msgforgram).then(msg => {
            msg.react('❤️');
        });
        return;
    });
}

function srnotif(message, notifmsgs, userid) {
    var msgtosend = "```";
    var i = 0;
    if (notifmsgs[i] != "none") {
    do {
        if (notifmsgs[i] != "none") {
        msgtosend += (notifmsgs[i] + "\n");
        }
        i ++;
    } while (i < notifmsgs.length);
    message.channel.send(msgtosend + "```");
    db.run(`UPDATE users SET notifmsgs = ? WHERE userid = ?`, ["none", userid]);
}
}












//7404























































}
client.on('error', (clienterror) => {
    console.log(clienterror)
});
client.on('typingStart', (channel, typer) => {
    type(channel, true, typer);
});

client.on('typingStop', (channel, typer) => {
    type(channel, false, typer);
});

function annoy(person, msg, clear) {
    if (clear == true) {
        arraypeeps = new Array();
        arraypeepsparams = new Array();
    } else {
        arraypeeps.push(person);
        arraypeepsparams.push(msg);
    }
    return;
}

function type (message, tf, who) {
    var i = 0;
    var found = false;
    var msgq = false;
    if (tf == false) {
        message.stopTyping();
        return;
    }
    {
        if ((arraypeeps[i] == (who.id)) || (arraypeeps[i] == "all")) {
            found = true
            if (arraypeepsparams[i] == "true") {
                msgq = true;
            }
        }
        i ++;
    } while ((i < arraypeeps.length) && (found = false));
    if ((found == true)) {
        if (msgq == true) {
            message.send("I see you typing" + who.tag).then(msgg => {msgg.delete(5000)});
        } else {
            message.startTyping();
        }
        return;
    }
    return;
}
client.login("token")