import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./index.css";
import localize from "../../localization";
import setupRouter from "./router";

import { getConfig, setConfig } from "../../config";
import { initRadioButtons } from "./radio-button";
import { initCheckbox } from "./checkbox";
import { initSlider } from "./slider";

const initialConfig = getConfig();

initCheckbox(
  "helper_stay_in_branch_for_all",
  initialConfig.helper_stay_in_branch_for_all,
  (val) => setConfig({ helper_stay_in_branch_for_all: val })
);

initRadioButtons(
  "onscreen_navigation",
  initialConfig.onscreen_navigation,
  (newOnScreenNavigation) =>
    setConfig({ onscreen_navigation: newOnScreenNavigation })
);

initRadioButtons(
  "helper_back_option",
  initialConfig.helper_back_option,
  (helper_back_option) => setConfig({ helper_back_option: helper_back_option })
);

initRadioButtons("mode", initialConfig.mode, (newMode) =>
  setConfig({ mode: newMode })
);

initSlider(
  "auditory_cue_voice_options.pitch",
  initialConfig.auditory_cue_voice_options.pitch,
  {
    step: 0.01,
    min: 0.01,
    max: 2,
    textDisplayId: "disp-auditory_cue_voice_options__pitch",
  },
  (newPitch) => setConfig({ auditory_cue_voice_options: { pitch: newPitch } })
);

initSlider(
  "auditory_cue_voice_options.volume",
  initialConfig.auditory_cue_voice_options.volume,
  {
    step: 0.01,
    min: 0,
    max: 1,
    textDisplayId: "disp-auditory_cue_voice_options__volume",
  },
  (newVolume) =>
    setConfig({ auditory_cue_voice_options: { volume: newVolume } })
);

initSlider(
  "auditory_cue_voice_options.rateMul",
  initialConfig.auditory_cue_voice_options.rateMul,
  {
    step: 0.01,
    min: 0.01,
    max: 4,
    textDisplayId: "disp-auditory_cue_voice_options__rateMul",
  },
  (newRateMul) =>
    setConfig({ auditory_cue_voice_options: { rateMul: newRateMul } })
);

initSlider(
  "auditory_main_voice_options.pitch",
  initialConfig.auditory_main_voice_options.pitch,
  {
    step: 0.01,
    min: 0.01,
    max: 2,
    textDisplayId: "disp-auditory_main_voice_options__pitch",
  },
  (newPitch) => setConfig({ auditory_main_voice_options: { pitch: newPitch } })
);

initSlider(
  "auditory_main_voice_options.volume",
  initialConfig.auditory_main_voice_options.volume,
  {
    step: 0.01,
    min: 0,
    max: 1,
    textDisplayId: "disp-auditory_main_voice_options__volume",
  },
  (newVolume) =>
    setConfig({ auditory_main_voice_options: { volume: newVolume } })
);

initSlider(
  "auditory_main_voice_options.rateMul",
  initialConfig.auditory_main_voice_options.rateMul,
  {
    step: 0.01,
    min: 0.01,
    max: 4,
    textDisplayId: "disp-auditory_main_voice_options__rateMul",
  },
  (newRateMul) =>
    setConfig({ auditory_main_voice_options: { rateMul: newRateMul } })
);

initSlider(
  "minimum_cue_time_range",
  initialConfig.minimum_cue_time,
  { step: 100, min: 0, max: 3000, numberInputId: "minimum_cue_time" },
  (value) => setConfig({ minimum_cue_time: value })
);

initSlider(
  "ignore_second_hits_time_range",
  initialConfig.ignore_second_hits_time,
  { step: 100, min: 0, max: 2000, numberInputId: "ignore_second_hits_time" },
  (value) => setConfig({ ignore_second_hits_time: value })
);

initSlider(
  "ignore_key_release_time_range",
  initialConfig.ignore_key_release_time,
  { step: 100, min: 0, max: 2000, numberInputId: "ignore_key_release_time" },
  (value) => setConfig({ ignore_key_release_time: value })
);

setupRouter();
localize();
