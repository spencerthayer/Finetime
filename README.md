# Finetime 0.6.1 [DEMO](http://finetimeios.heroku.com) [![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/spencerthayer/Finetime)

[![Finetime](https://raw.githubusercontent.com/spencerthayer/Finetime/master/www/img/favicon.png?raw=true "TorchNoteJS")](http://finetimeios.heroku.com)

#Information

An IOS/Android Clock.

#ToDo
A list of tasks that must be done before v1 launch.

### Critical
- [ ] Stars do not redraw when IOS viewport flips to horizontal and vise versa.

### DESIGN
- [ ] Starfield sparkles in Safari, not Firefox & Chrome.
- [ ] Rain effect
- [ ] Storm effect
- [ ] Snow / Hale effect
- [ ] Wind effect
- [ ] Humid effect
- [ ] Thunder/Lightning
- [ ] Gradient based on sky time, clock time as GPS fallback.
- [x] Sun and Moon positioning
- [x] Star Maps
- [x] Moon Phases
- [x] Make text dependent on browser sizing.
- [x] Starfield only active between 9pm-4am. (**Line 74** */js/time.js*)
- [x] Safari browser display is totally fucked update and not absolutely centered.
- [x] *stellar.js* functions are not launching when their corresponding time is active.
- [x] Text shadow should follow path of sun no mouse.

### Server
- [x] Heroku deployment debug.

### Scripts
- [x] Break each script into a seperate JS file.
- [x] Better GPS detection.
- [x] Better GPS failure fallback.

### UI/UX
- [ ] Build sidebar menues.
- [ ] Slide up and down brightness.
- [ ] Countdown timer "HH:MM until alarm."

### MVC
- [ ] Build “Alarm” CRUD:
 - [ ] Slide up and down timer.
 - [ ] Daily repeating alarms.
      - Time [HH:MM]
      - Repeat: MON TUE WEN THU FRI SAT SUN
      - Active [True/False]
- [ ] Build “Settings” CRUD:
 - 24 Hour : Boolean
 - Stars : Numeric (10:100)
 - Brightness : Numeric (10:100)
 - Lock Landscape : Boolean
 - Show Weather : Boolean
 
### Audio
- [ ] Build alarm sounds DB.
- [ ] Tone.JS integration

### Content
- [ ] Write user instruction tutorial in app.

#Installation

Be sure to run `npm install` before running `ionic serve`.

You must have Cordova and Ionic installed, run `npm install -g cordova ionic`.

http://forum.ionicframework.com/t/has-anyone-deployed-an-ionic-app-to-heroku/8284/5

#Indebtedness

[LIST OF CODE AND CODERS I WAS INSPIRED BY]