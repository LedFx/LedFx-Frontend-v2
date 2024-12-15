import { spDevice } from './SpState'
import { SpotifyState } from './SpotifyState'

const storeSpotify = () => ({
  spotifyEmbedUrl:
    'https://open.spotify.com/embed/playlist/4sXMBGaUBF2EjPvrq2Z3US?',
  spotifyAuthToken: '',
  player: null as any,
  swSize: 'small',
  swX: 50,
  swY: 200,
  swWidth: 300,
  spNetworkTime: 1000,
  spAuthenticated: false,
  spotifyData: {} as any,
  spotifyDevice: {} as any,
  spotifyDevices: [] as spDevice[],
  spotifytriggers: {},
  spTriggersList: [] as any,
  spActTriggers: [] as string[],
  playlist: [] as any,
  me: {} as any,
  spotifyState: {} as SpotifyState,
  spotifyVol: 0,
  spotifyPos: null as any,
  spotify: null as any,
  currentTrack: '',
  sendSpotifyTrack: false,
  spotifyTexter: {
    gradient:
      'linear-gradient(90deg, rgb(255, 0, 0) 0%, rgb(255, 120, 0) 14%, rgb(255, 200, 0) 28%, rgb(0, 255, 0) 42%, rgb(0, 199, 140) 56%, rgb(0, 0, 255) 70%, rgb(128, 0, 128) 84%, rgb(255, 0, 178) 98%)',
    option_2: false,
    flip: false,
    blur: 0,
    flip_horizontal: true,
    speed_option_1: 2,
    resize_method: 'Fast',
    gradient_roll: 0,
    alpha: false,
    value_option_1: 0.5,
    font: 'Blade-5x8',
    use_gradient: false,
    diag: false,
    test: false,
    impulse_decay: 0.1,
    mirror: false,
    flip_vertical: false,
    text_effect: 'Side Scroll',
    multiplier: 1,
    brightness: 1,
    text_color: '#ff0000',
    background_brightness: 1,
    rotate: 2,
    dump: false,
    option_1: false,
    height_percent: 100,
    background_color: '#000000'
  }
})

export default storeSpotify
