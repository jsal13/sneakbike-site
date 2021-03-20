<template>
<div class="runner-troubleshooting">
    <h1>Runner Troubleshooting & FAQ</h1>
    <ul>
      <li><a href="#expect">What should I expect before/on race day?</a></li>
      <li><a href="#pause">Emulator Paused/Stuck and I can't Unpause.</a></li>
      <li><a href="#resize">How do I resize the emulator?</a></li>
      <li><a href="#savestate">How to Save State/Load State.</a></li>
    </ul>

    <br />
    <hr />
    <br />

    <h2 id="expect">What should I expect before/on race day?</h2>

    <p>You're in the race, great! Now what?</p>

    <h3>Before Raceday...</h3>
    <ol>
      <li>If you haven't done <a href="runner_setup.html">Runner Setup</a> yet, go and do that.
        <ul>
          <li>If you have problems, feel free to ask us about it in the discord beforehand.</li>
        </ul>
      </li>
    </ol>

    <h3>On Raceday, Before the Race...</h3>
    <ol>
      <li>You'll be expected to come into the racer prep room around an hour early (2pm EST) on
        Saturday to get everything set up. We'll ping the racers letting them know we're starting setup.</li>
      <li>Once we begin setup, a few things will happen:
        <ul>
          <li>We will link you to a sample game to make sure your emulator/controller is working correctly.</li>
          <li>We will give you the address for the Sneakbike server; we'll instruct you on how to put this into your OBS
            and begin streaming to the Sneakbike server.</li>
          <li>Once we've captured your stream from our server, we will give you the OK and you can relax for a bit.</li>
        </ul>
      </li>
      <li>After everyone is set up, around ten minutes before the race starts (3pm EST) we will send out the game(s) and
        the README file in a ZIP bundle.</li>
      <li>We will tell you to open up the first game but <i>DO NOT PLAY IT YET</i> and we will also go through the
        README with you to make sure there are no questions.</li>

    </ol>

    <h3>During the Race...</h3>
    <ol>
      <li>You will be server-muted in a discord voice channel so that the commentators or ops can give you race
        instructions.</li>
      <li>We will begin the Sneakbike stream which has a five minute startup plus two-or-so minutes of
        commentator
        intro.</li>
      <li>After this time, we will have one of the commentators come into the voice chat (and into the text chat) and
        give you the <b>3, 2, 1, GO!</b> countdown to begin the race.</li>
      <li>At this point, you'll start playing.</li>
    </ol>

    <h3>After the Race...</h3>
    <ol>
      <li>We will usually have an after-race brief interview with the runners. We will tell you beforehand, and we will
        pull you into the commentator room and unmute you. We'll probably ask you how the game was, etc.</li>
      <li>After the interviews are over, we will raid someone. We will have a quick debrief with the
        runners/commentators/ops after which is <i>optional, but very helpful for us</i>. This is usually around five
        minutes of us asking what we can do better, what was good and what was bad, etc.</li>
    </ol>

    <p>And that's it!</p>

    <h2 id="pause">Emulator Paused/Stuck and I can't Unpause.</h2>
    <p>Sometimes, especially after typing while using BizHawk, the emulator seems to pause and you can't get out of it
      with the controller. This is because one of the hotkeys for Pause is probably set to something you've typed
      (see:
      <b>Config > Hotkeys > "Pause"</b>).
    </p>

    <p>The way to fix this is to go into <b>Emulation</b> and see if "Pause" is selected, and unselecting it if it is.
      See the
      GIF below:</p>

    <br />
    <img src="../assets/old_site/pauseunpause.gif" />

    <h2 id="resize">How do I resize the emulator?</h2>
    <p><b>Since going into Full-Screen will mess with your capture of the emulator,</b> you'll need to instead use a
      scaling factor. Go to <b>View > Window Size</b> and select the desired scaling. It doesn't matter what you use,
      but runners will generally use 3x or 4x to hit that sweet-spot between too pixelated and too tiny.</p>

    <br />
    <img src="../assets/old_site/resizing.gif" />

    <h2 id="savestate">How to Save/Load State.</h2>

    <p>When playing a game, you can Save State to make the emulator remember where you were at that specific time.
      When
      you Load State it is like "rewinding" to that time with everything exactly as it was. This is useful in many
      situations, including trying to practice difficult parts of games.</p>

    <p>To save state, go to <b>File > Save State</b> and pick out any of the slots. To load state, go to <b>File >
        Load
        State</b> and pick out the slot you saved state in.</p>

    <br />
    <img src="../assets/old_site/savestates.gif" />

  <div style="height: 10rem;"></div>
</div>
</template>

<script>
export default {
  name: 'RunnerTroubleshooting',
};
</script>
