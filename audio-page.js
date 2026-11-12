(() => {
  const whiteKeys = {
    C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880, B5: 987.77,
    C6: 1046.5, D6: 1174.66, E6: 1318.51, F6: 1396.9, G6: 1568, A6: 1760, B6: 1979.5,
  };
  const blackKeys = {
    '#C5': 554.37, '#D5': 622.25, '#F5': 739.99, '#G5': 830.61, '#A5': 932.33,
    '#C6': 1108.7, '#D6': 1244.5, '#E6': 1396.9, '#F6': 1480,
    L7: 988, M2: 1175, M5: 1568, M6: 1760, M7: 1976, H5: 3136,
  };
  const frequencies = { ...whiteKeys, ...blackKeys };

  // Note order and durations (ms) follow the June 26, 2026 reference and the corrected forward sequence.
  const sequence = (codes, duration) => codes.split(' ').map((code, index) => ({
    code,
    hz: frequencies[code],
    ms: Array.isArray(duration) ? duration[index] : duration,
  }));
  const start = sequence('G5 C6 D6 G6', [90, 90, 90, 100]);
  const invalid = sequence('C6 #G5 E5', [90, 90, 100]);
  const lock = sequence('M7 M5 M2 L7', [80, 80, 80, 500]);
  const unlock = sequence('L7 M2 M5 M7', [80, 80, 80, 500]);

  const groups = [
    {
      title: ['基础状态反馈音', 'Basic Status'],
      sounds: [
        {
          title: ['上电音', 'Power Connected'],
          description: ['产品接通电源时播放，提示设备已上电。', 'Plays when the appliance is connected to power.'],
          file: '01海尔 上电音.wav',
          spectrum: sequence('M5 H5', 250),
        },
        {
          title: ['开机音', 'Power On'],
          description: ['按下电源键并成功开机时播放，提示设备已开启。', 'Confirms that pressing the power button has turned the appliance on.'],
          file: '02海尔  开机音.wav',
          spectrum: sequence('C6 C6 A5 C6 F6', [420, 420, 420, 420, 500]),
        },
        {
          title: ['关机音', 'Power Off'],
          description: ['按下电源键并关闭设备时播放，确认关机。', 'Confirms that pressing the power button has turned the appliance off.'],
          file: '03海尔  关机音.wav',
          spectrum: sequence('A5 A5 C6 A5 F5', [420, 420, 420, 420, 500]),
        },
      ],
    },
    {
      title: ['操作交互反馈音', 'Interaction Feedback'],
      sounds: [
        {
          title: ['有效点触', 'Valid Touch'],
          description: ['触碰可操作区域时播放，确认设备已接收输入。', 'Confirms that the appliance has received a touch in an interactive area.'],
          file: '07海尔 有效点触.wav',
          spectrum: sequence('D6 C6', 450),
        },
        {
          title: ['无效点触', 'Invalid Touch'],
          description: ['触碰不可操作区域时播放，提示当前输入无效。与操作失败共用音效。', 'Signals a touch in an inactive area. It shares the Operation Failed tone.'],
          file: '08海尔 无效点触（同操作失败音）.wav',
          spectrum: invalid,
        },
        {
          title: ['旋钮正旋／参数上滑', 'Knob Forward / Swipe Up'],
          description: ['正向旋转旋钮或向上滑动调参时播放，以升调反馈调节方向。', 'A rising tone accompanies forward knob rotation or an upward swipe to adjust a setting.'],
          file: '09、10海尔 旋钮正旋 （升调）、参数滑控操作 (上划).wav',
          spectrum: sequence('F5 A5 C6 A5 F6 A5 C6 A5', 480),
        },
        {
          title: ['旋钮反旋／参数下滑', 'Knob Reverse / Swipe Down'],
          description: ['反向旋转旋钮或向下滑动调参时播放，以降调反馈调节方向。', 'A falling tone accompanies reverse knob rotation or a downward swipe to adjust a setting.'],
          file: '09、10海尔 旋钮反旋（降调）、 参数化空操作（下滑).wav',
          spectrum: sequence('F6 A5 C6 A5 F5 A5 C6 A5 F5', 480),
        },
        {
          title: ['程序启动', 'Program Start'],
          description: ['程序开始运行时播放，与操作成功共用音效。', 'Plays when a program starts and shares the Operation Succeeded tone.'],
          file: '06海尔 程序启动（同操作成功）.wav',
          spectrum: start,
        },
        {
          title: ['程序暂停', 'Program Pause'],
          description: ['程序进入暂停状态时播放，确认运行已暂停。', 'Confirms that the running program has paused.'],
          file: '06海尔 暂停音.wav',
          spectrum: sequence('G5 C6', 200),
        },
        {
          title: ['门锁上锁', 'Door Locked'],
          description: ['设备门锁锁定时播放，与锁屏／息屏共用音效。', 'Confirms that the door has locked and shares the Screen Lock / Sleep tone.'],
          file: '11海尔 门锁上锁提示音（同04）.wav',
          spectrum: lock,
        },
        {
          title: ['门锁解锁', 'Door Unlocked'],
          description: ['设备门锁解除时播放，与解锁／亮屏共用音效。', 'Confirms that the door has unlocked and shares the Screen Unlock / Wake tone.'],
          file: '12海尔 门锁解锁提示音（同05）.wav',
          spectrum: unlock,
        },
        {
          title: ['操作成功', 'Operation Succeeded'],
          description: ['配网、收藏或预约等操作完成时播放，配合成功提示。', 'Accompanies a success message after setup, saving a favorite, or scheduling.'],
          file: '14海尔 操作成功音（同程序启动音）.wav',
          spectrum: start,
        },
        {
          title: ['操作失败', 'Operation Failed'],
          description: ['配网、购买或检测等操作失败时播放，配合失败提示。', 'Accompanies a failure message when setup, a purchase, or a check fails.'],
          file: '15海尔 操作失败音 （同无效点触音）.wav',
          spectrum: invalid,
        },
        {
          title: ['锁屏／息屏', 'Screen Lock / Sleep'],
          description: ['设备锁定或屏幕自动熄灭时播放。', 'Plays when the appliance locks or the screen goes to sleep.'],
          file: '04 海尔 锁定、息屏音.wav',
          spectrum: lock,
        },
        {
          title: ['解锁／亮屏', 'Screen Unlock / Wake'],
          description: ['设备解锁或屏幕自动点亮时播放。', 'Plays when the appliance unlocks or the screen wakes.'],
          file: '05 海尔 解锁、亮屏音.wav',
          spectrum: unlock,
        },
      ],
    },
    {
      title: ['运行状态反馈音', 'Program Status'],
      sounds: [
        {
          title: ['程序完成', 'Program Complete'],
          description: ['整项程序运行结束时播放，提示用户查看运行结果。', 'Plays at the end of a program and prompts the user to check the result.'],
          file: '16-17海尔 程序完成提醒音.wav',
          spectrum: [
            ...sequence('G5 G6 G5 G6 G6 #F6 E6', [250, 250, 250, 250, 300, 130, 130]),
            ...sequence('D6 C6 B5 A5 G5 A5 B5', [130, 130, 130, 130, 300, 130, 130]),
            ...sequence('C6 D6 E6 #F6 G6 D6 G6', [130, 130, 130, 130, 245, 250, 250]),
          ],
        },
      ],
    },
    {
      title: ['系统提醒或警告反馈音', 'Notifications and Alerts'],
      sounds: [
        {
          title: ['新消息', 'New Message'],
          description: ['收到系统推送或新消息时播放，提示用户查看。', 'Draws attention to a new message or system notification.'],
          file: '13海尔 新消息.wav',
          spectrum: sequence('M7 M2 M6', 130),
        },
        {
          title: ['闹钟', 'Alarm Clock'],
          description: ['到达用户设置的提醒时间时播放。', 'Plays when the time set by the user arrives.'],
          file: '19海尔 闹钟提醒音.wav',
          spectrum: [
            ...sequence('G5 D6 C6 B5 A5 G5 #F5', [240, 240, 240, 240, 235, 245, 240]),
            ...sequence('E6 D6 C6 B5 A5 G5 A5', [235, 240, 245, 240, 240, 230, 245]),
            ...sequence('B5 D6 E6 D6 G6', [240, 235, 240, 250, 330]),
          ],
        },
        {
          title: ['报警', 'Warning'],
          description: ['设备发生异常或出现需要关注的情况时播放。', 'Draws attention to an abnormal condition or a situation that requires attention.'],
          file: '20 21 22海尔 报警音.wav',
          spectrum: sequence('D6 C6 D6 C6', 100),
        },
      ],
    },
  ];

  const english = document.documentElement.lang === 'en';
  const localize = ([zh, en]) => english ? en : zh;
  const labels = {
    play: localize(['试听', 'Preview']),
    stop: localize(['停止', 'Stop']),
    download: localize(['下载 WAV', 'Download WAV']),
    downloading: localize(['正在准备…', 'Preparing…']),
    downloadError: localize(['下载失败，请重试', 'Download failed. Try again.']),
    copy: localize(['复制频谱', 'Copy sequence']),
    copied: localize(['已复制', 'Copied']),
    copyError: localize(['复制失败，请重试', 'Copy failed. Try again.']),
    playError: localize(['无法播放，请重试', 'Playback failed. Try again.']),
    sequence: localize(['频谱', 'Tone sequence']),
    copiedHeader: localize(['序号\t音符代码\t频率 (Hz)\t时长 (ms)', 'No.\tNote code\tFrequency (Hz)\tDuration (ms)']),
  };
  const icons = {
    play: '<path d="M8 5v14l11-7z" fill="currentColor" stroke="none"/>',
    stop: '<rect x="6" y="6" width="12" height="12" rx="1.5" fill="currentColor" stroke="none"/>',
    download: '<path d="M12 3v12m-4-4 4 4 4-4M5 16v4h14v-4"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
  };
  const action = (icon, label) => `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${icons[icon]}</svg><span>${label}</span>`;
  const sounds = groups.flatMap(group => group.sounds);
  const assetUrl = sound => `assets/audio/${encodeURIComponent(sound.file)}`;

  function renderCard(sound, buzzer) {
    const index = sounds.indexOf(sound);
    const title = localize(sound.title);
    const description = localize(sound.description);
    const heading = `<div><h3 class="audio-label">${title}</h3>
      <p class="audio-card-description mt-2 text-sm leading-6">${description}</p></div>`;

    if (!buzzer) {
      return `<article class="audio-card">${heading}
        <div class="audio-card-actions">
          <button type="button" class="audio-action audio-action-play" data-preview="${index}" aria-label="${labels.play} · ${title}">${action('play', labels.play)}</button>
          <button type="button" class="audio-action" data-download="${index}" aria-label="${labels.download} · ${title}">${action('download', labels.download)}</button>
        </div>
      </article>`;
    }

    const tones = sound.spectrum.map(({ code, ms }) =>
      `<li class="audio-tone"><strong>${code}</strong><span>${ms} ms</span></li>`
    ).join('');
    return `<article class="audio-card">${heading}
      <ol class="audio-tone-sequence" role="list" aria-label="${labels.sequence} · ${title}">${tones}</ol>
      <div class="audio-card-actions">
        <button type="button" class="audio-action" data-copy="${index}" aria-label="${labels.copy} · ${title}">${action('copy', labels.copy)}</button>
      </div>
    </article>`;
  }

  function renderLibrary(type) {
    const buzzer = type === 'buzzer';
    document.getElementById(`${type}-library`).innerHTML = groups.map(group => `
      <section class="glass-panel p-5 sm:p-6 md:p-8 mb-6">
        <h2 class="text-xl font-bold mb-4 text-gray-900">${localize(group.title)}</h2>
        <div class="audio-card-grid">${group.sounds.map(sound => renderCard(sound, buzzer)).join('')}</div>
      </section>
    `).join('');
  }

  renderLibrary('speaker');
  renderLibrary('buzzer');
  const whiteRows = Object.entries(whiteKeys);
  document.getElementById('audio-frequency-reference').innerHTML = Object.entries(blackKeys).map(([blackCode, blackHz], index) => {
    const [whiteCode = '', whiteHz = ''] = whiteRows[index] || [];
    return `<tr>
      <td class="font-semibold text-gray-900">${whiteCode}</td><td>${whiteHz}</td>
      <td class="font-semibold text-gray-900">${blackCode}</td><td>${blackHz}</td>
    </tr>`;
  }).join('');

  const tabs = [...document.querySelectorAll('.audio-tab')];
  function selectTab(selected) {
    tabs.forEach(tab => {
      const active = tab === selected;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      document.getElementById(tab.getAttribute('aria-controls')).hidden = !active;
    });
    if (selected.id === 'buzzer-tab') player.pause();
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(tab));
    tab.addEventListener('keydown', event => {
      let nextTab;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') nextTab = tabs[1 - index];
      else if (event.key === 'Home') nextTab = tabs[0];
      else if (event.key === 'End') nextTab = tabs[tabs.length - 1];
      else return;
      event.preventDefault();
      selectTab(nextTab);
      nextTab.focus();
    });
  });

  const status = document.getElementById('audio-status');
  const player = new Audio();
  player.preload = 'none';
  let currentPreview;
  let previewRequest = 0;

  function updateButton(button, icon, label, sound) {
    button.innerHTML = action(icon, label);
    button.setAttribute('aria-label', `${label} · ${localize(sound.title)}`);
  }

  function resetPreview() {
    if (!currentPreview) return;
    updateButton(currentPreview, 'play', labels.play, sounds[currentPreview.dataset.preview]);
    currentPreview = null;
  }

  player.addEventListener('pause', () => {
    if (player.paused) resetPreview();
  });
  player.addEventListener('ended', () => {
    if (player.ended) resetPreview();
  });
  player.addEventListener('error', () => {
    if (!currentPreview || !player.error) return;
    status.textContent = labels.playError;
    updateButton(currentPreview, 'play', labels.playError, sounds[currentPreview.dataset.preview]);
    currentPreview = null;
  });

  document.getElementById('speaker-library').addEventListener('click', async event => {
    const download = event.target.closest('[data-download]');
    if (download) {
      await downloadSound(download);
      return;
    }
    const button = event.target.closest('[data-preview]');
    if (!button) return;
    if (button === currentPreview) {
      previewRequest++;
      player.pause();
      resetPreview();
      return;
    }

    const sound = sounds[button.dataset.preview];
    const request = ++previewRequest;
    resetPreview();
    player.src = assetUrl(sound);
    currentPreview = button;
    updateButton(button, 'stop', labels.stop, sound);
    try {
      await player.play();
    } catch (error) {
      if (request !== previewRequest || error.name === 'AbortError') return;
      resetPreview();
      updateButton(button, 'play', labels.playError, sound);
      status.textContent = labels.playError;
    }
  });

  async function loadWav(sound) {
    if (location.protocol !== 'file:') {
      const response = await fetch(assetUrl(sound));
      if (!response.ok) throw new Error(`WAV request failed (${response.status})`);
      return response.blob();
    }

    // Browsers block fetch() from file pages. Load the equivalent bytes as a local script.
    const script = document.createElement('script');
    script.src = `assets/audio/local/${encodeURIComponent(sound.file)}.js`;
    try {
      const bytes = await new Promise((resolve, reject) => {
        script.onload = () => resolve(script.dataset.wav);
        script.onerror = reject;
        document.head.append(script);
      });
      return new Blob([Uint8Array.from(atob(bytes), character => character.charCodeAt(0))], { type: 'audio/wav' });
    } finally {
      script.remove();
    }
  }

  async function downloadSound(button) {
    const sound = sounds[button.dataset.download];
    button.disabled = true;
    updateButton(button, 'download', labels.downloading, sound);
    try {
      const url = URL.createObjectURL(await loadWav(sound));
      const link = document.createElement('a');
      link.href = url;
      link.download = sound.file;
      document.body.append(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 30_000);
      updateButton(button, 'download', labels.download, sound);
    } catch {
      updateButton(button, 'download', labels.downloadError, sound);
      status.textContent = `${labels.downloadError} · ${localize(sound.title)}`;
    } finally {
      button.disabled = false;
    }
  }

  async function copySequence(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Support the site's direct-file entry point and older clipboard APIs.
      const field = document.createElement('textarea');
      field.value = text;
      field.readOnly = true;
      field.style.cssText = 'position:fixed;top:0;left:0;opacity:0;pointer-events:none';
      const focus = document.activeElement;
      document.body.append(field);
      field.select();
      try {
        return document.execCommand('copy');
      } catch {
        return false;
      } finally {
        field.remove();
        focus?.focus({ preventScroll: true });
      }
    }
  }

  const copyTimers = new WeakMap();
  document.getElementById('buzzer-library').addEventListener('click', async event => {
    const button = event.target.closest('[data-copy]');
    if (!button) return;
    const sound = sounds[button.dataset.copy];
    const rows = sound.spectrum.map(({ code, hz, ms }, index) => [index + 1, code, hz, ms].join('\t'));
    const copied = await copySequence([labels.copiedHeader, ...rows].join('\n'));
    const message = copied ? labels.copied : labels.copyError;
    status.textContent = `${message} · ${localize(sound.title)}`;
    updateButton(button, 'copy', message, sound);
    clearTimeout(copyTimers.get(button));
    copyTimers.set(button, setTimeout(() => updateButton(button, 'copy', labels.copy, sound), 2400));
  });
})();
