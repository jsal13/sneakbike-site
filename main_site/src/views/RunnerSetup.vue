<template>
<div class="runner-setup">
<h1>Runner Setup</h1>

    <h2>Before you begin...</h2>

    <p>We assume you're running Windows 10. If not, check in with us and we'll get you compatible software. If you'd
      rather see the <a href="https://www.youtube.com/watch?v=qtB0n4RuBGo" target="_blank">video tutorial</a>, that's
      available here.</p>

    <h2>Getting the EmuHawk (BizHawk) Emulator</h2>

    <p>In order to emulate retro games, we use the EmuHawk Emulator in the BizHawk suite of tools. If you find there are
      issues with this (eg, controller acting strangely, etc.) please let us know in the discord and we'll help you
      debug.</p>
    <ol>
      <li>
        Download the <a href="https://github.com/TASVideos/BizHawk-Prereqs/releases" target="_blank">bizhawk_prereqs</a>
        ZIP file, which is listed under Assets. After downloading, unzip and install.</li>
      <li>
        Download <a href="https://github.com/TASVideos/BizHawk/releases" target="_blank">Bizhawk</a>, which is listed
        under Assets and looks something like Bizhawk-Numbers.zip (similar to the
        image
        below). <b>Unzip the file once it has downloaded.</b>
        <br /><img src="../assets/old_site/bizhawk_download.png" />
      </li>

      <li>Warning: There is currently an issue where Windows 10 thinks that BizHawk is a virus. This is a false
        positive. Try downloading <a href="https://github.com/TASVideos/BizHawk/releases/tag/2.4.2">Version 2.4.2</a> if
        your Windows refuses to let you open the latest.</li>

      <li>In the unzipped Bizhawk folder, you'll find a program called EmuHawk.exe. This is the emulator and you can
        double-click to run it.</li>
    </ol>

    <h2>Configuring the EmuHawk Emulator</h2>

    <p><b>Note</b>:
      If you'd rather see the video of the config, check <a href="https://youtu.be/J_WM3zYQVH0" target="_blank">our
        video tutorial</a>.</p>

    <p>We'll configure three things in BizHawk.</p>

    <ul>
      <li>Hotkeys</li>
      <li>Display</li>
      <li>Sound</li>
    </ul>

    <p>Each of these items can be found in the Config menu at the top of the EmuHawk program. The screenshots below show
      you what each screen should look like.</p>

    <p>For the Sound menu, if you uncheck the box we've circled in red, this will
      mute the emulator. <i>Note that your sound device might be different than in the image.</i></p>
    <br />
    <img src="../assets/old_site/emuhawk_hotkeys_config.png" />
    <br />
    <img src="../assets/old_site/emuhawk_SNES_display_config.png" />
    <br />
    <img src="../assets/old_site/emuhawk_sound_config.png" />

    <h2>Setting Up OBS</h2>

    <p>OBS is what we use to stream the game to the Sneakbike server (and what many people use to stream to Twitch).
    </p>

    <ol>
      <li>Download and install <a href="https://obsproject.com/" target="_blank">OBS</a>.</li>
      <li>Download the <a href="https://drive.google.com/file/d/16uHzUpr4XAinq1Do_KP3-I_ptS1bJCrB/view?usp=sharing"
          target="_blank">Sneakbike Profile for OBS</a>. Unzip this once
        it is downloaded.</li>
    </ol>

    <p>To import this profile, follow the directions below, using the gif below as a guide if you need to.</p>

    <img src="../assets/old_site/sneakbike_import_profile.gif" />

    <h2>OBS Profile Import</h2>

    <ol>
      <li>In OBS, Go into Profile > Import, navigate to the unzipped Sneakbike folder from the previous steps, click
        the
        Sneakbike_Profile folder and hit "open".</li>
      <li>Still in OBS, go into the Profile menu again. You should see (at least) two profiles at the bottom,
        including
        Sneakbike.</li>
      <li>
        <ul>
          <li>Clicking on Sneakbike will bring you to the Sneakbike profile we require for racers.</li>
          <li>You can click the original Profile (usually called Untitled) to go back to your normal streaming
            profile, if you had one.</li>
        </ul>
      </li>
    </ol>

    <h2>Racing</h2>

    <p>Before the race, usually the day-of, we'll give you instructions on how to stream to the correct location and
      how to set up a scene to have your gameplay broadcast correctly. Don't worry about it for now, but if you're
      interested ask us in the discord!
    </p>

  <div style="height: 10rem;"></div>
</div>
</template>

<script>
export default {
  name: 'RunnerSetup',
};
</script>
