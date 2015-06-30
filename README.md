# Finetime 0.6.1 [DEMO](http://finetimeios.heroku.com) [![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/spencerthayer/Finetime)

[![Finetime](https://raw.githubusercontent.com/spencerthayer/Finetime/master/www/img/favicon.png?raw=true "TorchNoteJS")](http://finetimeios.heroku.com)

#Information

An IOS/Android Clock.

#ToDo


## Critical
- [ ] Stars do not redraw when IOS viewport flips to horizontal and vise versa.

## DESIGN
- [x] Sun and Moon positioning
- [x] Star Maps
- [x] Moon Phases
- [x] Make text dependent on browser sizing.
- [x] Starfield only active between 9pm-4am. (**Line 74** */js/time.js*)
- [x] Safari browser display is totally fucked update and not absolutely centered.
- [x] Moon phases script generating infinite #moon divs.
- [x] *stellar.js* functions are not launching when their corresponding time is active.
- [ ] Starfield sparkles in Safari, not Firefox & Chrome.
- [x] Text shadow should follow path of sun no mouse.

## Server
- [x] Heroku deployment debug.

## Scripts
- [x] Better GPS detection.
- [x] Better GPS failure fallback.

## UI/UX
- [ ] Build sidebar menues.
- [ ] Slide up and down brightness.
- [ ] Countdown timer "HH:MM until alarm."

## MVC
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
- [ ] Build alarm sounds DB.

## Content
- [ ] Write user instruction tutorial in app.

#Installation

Be sure to run `npm install` before running `ionic serve`.

You must have Cordova and Ionic installed, run `npm install -g cordova ionic`.

http://forum.ionicframework.com/t/has-anyone-deployed-an-ionic-app-to-heroku/8284/5

#Indebtedness

[LIST OF CODE AND CODERS I WAS INSPIRED BY]