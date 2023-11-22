import { SportsEsports, SportsEsportsOutlined } from '@mui/icons-material'
import {
  Alert,
  Box,
  // Button,
  CircularProgress,
  Collapse,
  Dialog,
  DialogContent,
  DialogTitle,
  Fab,
  MenuItem,
  Select,
  Stack,
  Tab,
  Tabs,
  Tooltip
} from '@mui/material'
import { useState, SyntheticEvent as ev, useEffect } from 'react'
import { useGamepads } from 'react-gamepads'
import useStore from '../../store/useStore'
import { CustomTabPanel as PN, a11yProps } from './Gamepad.props'
import PD from './PadData'
import PT from './PadTitle'
import Assign from './Assign'
// import GamepadSvg from './GamepadSvg'
import GamepadSvgPs3 from './GamepadSvgPs3'
import GamepadSvgPs4 from './GamepadSvgPs4'
import GamepadSvgPs5 from './GamepadSvgPs5'
import { sleep } from '../../utils/helpers'

const Gamepad = ({ setScene, bottom }: any) => {
  const infoAlerts = useStore((state) => state.ui.infoAlerts)
  const setInfoAlerts = useStore((state) => state.ui.setInfoAlerts)
  const setFeatures = useStore((state) => state.setFeatures)
  const smartBarPadOpen = useStore((state) => state.ui.bars.smartBarPad.open)
  const setSmartBarPadOpen = useStore(
    (state) => state.ui.bars && state.ui.setSmartBarPadOpen
  )
  const [open, setOpen] = useState<boolean>(false)
  const [pad0, setPad0] = useState<any>()
  const [pad1, setPad1] = useState<any>()
  const [pad2, setPad2] = useState<any>()
  const [pad3, setPad3] = useState<any>()
  const [gp, setGp] = useState<any>()
  const [currentPad, setCurrentPad] = useState<number>(0)

  const mapping = useStore((state) => state.mapping)
  const setMapping = useStore((state) => state.setMapping)
  const padTypes = ['generic', 'ps3', 'ps4', 'ps5']
  // const padTypes = ['generic', 'ps3', 'ps4', 'ps5', 'xbox']
  const [padType, setPadType] = useState('generic')

  const handleChange = (_e: ev, v: number) => setCurrentPad(v)
  const togglePause = useStore((state) => state.togglePause)
  const getSystemConfig = useStore((state) => state.getSystemConfig)
  const setSystemConfig = useStore((state) => state.setSystemConfig)
  const brightness = useStore((state) => state.config.global_brightness)
  const setSystemSetting = (setting: string, value: any) => {
    setSystemConfig({ [setting]: value }).then(() => getSystemConfig())
  }
  const [scanning, setScanning] = useState(-1)
  const scanForDevices = useStore((state) => state.scanForDevices)
  const getDevices = useStore((state) => state.getDevices)
  const getVirtuals = useStore((state) => state.getVirtuals)
  const toggleScenePLplay = useStore((state) => state.toggleScenePLplay)

  const features = useStore((state) => state.features)

  const handleScan = () => {
    setScanning(0)
    scanForDevices()
      .then(async () => {
        // eslint-disable-next-line no-plusplus
        for (let sec = 1; sec <= 30; sec++) {
          if (scanning === -1) break
          sleep(1000).then(() => {
            getDevices()
            getVirtuals()
            if (scanning !== -1) setScanning(sec)
          })
        }
      })
      .then(() => {
        setScanning(-1)
      })
  }

  useGamepads((g) => {
    if (g[0]) setPad0(g[0])
    if (g[1]) setPad1(g[1])
    if (g[2]) setPad2(g[2])
    if (g[3]) setPad3(g[3])
    setGp(pad0?.id || pad1?.id || pad2?.id || pad3?.id)
    if (
      Object.keys(g).some(
        (k: any) => g[k]?.buttons[8].pressed && g[k]?.buttons[9].pressed
      )
    ) {
      // eslint-disable-next-line no-alert
      alert('DevMode activated!')
      setFeatures('dev', true)
    }
  })

  useEffect(() => {
    ;[pad0, pad1, pad2, pad3].map(
      (pad: any) =>
        pad?.buttons.map((b: any, i: number) => {
          if (
            b.pressed &&
            mapping[pad.index][i] &&
            mapping[pad.index][i].mode &&
            mapping[pad.index][i].scene &&
            mapping[pad.index][i].mode === 'scene' &&
            mapping[pad.index][i].scene !== 'none'
          ) {
            setScene(mapping[pad.index][i].scene)
          } else if (
            b.pressed &&
            mapping[pad.index][i] &&
            mapping[pad.index][i].mode &&
            mapping[pad.index][i].command &&
            mapping[pad.index][i].mode === 'command' &&
            mapping[pad.index][i].command !== 'none'
          ) {
            if (mapping[pad.index][i].command === 'padscreen') {
              setOpen(!open)
            }
            if (mapping[pad.index][i].command === 'smartbar') {
              setSmartBarPadOpen(!smartBarPadOpen)
            }
            if (mapping[pad.index][i].command === 'play/pause') {
              togglePause()
            }
            if (mapping[pad.index][i].command === 'brightness-up') {
              setSystemSetting(
                'global_brightness',
                Math.min(brightness + 0.1, 1).toFixed(2)
              )
            }
            if (mapping[pad.index][i].command === 'brightness-down') {
              setSystemSetting(
                'global_brightness',
                Math.max(brightness - 0.1, 0).toFixed(2)
              )
            }
            if (mapping[pad.index][i].command === 'scan-wled') {
              handleScan()
            }
            if (mapping[pad.index][i].command === 'copy-to') {
              setFeatures('streamto', !features.streamto)
            }
            if (mapping[pad.index][i].command === 'transitions') {
              setFeatures('transitions', !features.transitions)
            }
            if (mapping[pad.index][i].command === 'frequencies') {
              setFeatures('frequencies', !features.frequencies)
            }
            if (mapping[pad.index][i].command === 'scene-playlist') {
              toggleScenePLplay()
            }
          }
          return null
        })
    )
  }, [pad0, pad1, pad2, pad3])

  return gp ? (
    <div style={{ position: 'fixed', left: '1rem', bottom }}>
      <Tooltip title="Gamepad detected">
        <Fab color="primary" aria-label="gamepad" onClick={() => setOpen(true)}>
          <SportsEsports />
        </Fab>
      </Tooltip>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { maxWidth: 750, minWidth: 750 } }}
      >
        <DialogTitle display="flex" alignItems="center">
          <SportsEsports sx={{ mr: 2 }} /> Gamepad detected
        </DialogTitle>
        <DialogContent>
          <Collapse in={infoAlerts.gamepad} unmountOnExit sx={{ mb: 2 }}>
            <Alert
              severity="info"
              onClose={() => {
                setInfoAlerts('gamepad', false)
              }}
            >
              1&#41; LedFx window must be in focus for gamepad to work
              <br />
              2&#41; Button 16 & 17 might conflict with OS
            </Alert>
          </Collapse>
          <Tabs value={currentPad} onChange={handleChange} variant="fullWidth">
            {[pad0, pad1, pad2, pad3].map((pad: any, padIndex: number) => (
              <Tab
                {...a11yProps(padIndex)}
                icon={pad?.id ? <SportsEsports /> : <SportsEsportsOutlined />}
                key={padIndex}
                value={pad?.index || padIndex}
                label={`Pad ${pad?.index || padIndex + 1}`}
                sx={{ flexDirection: 'column' }}
              />
            ))}
          </Tabs>
          {[pad0, pad1, pad2, pad3].map((pad: any, pi: number) => (
            <PN value={currentPad} index={pi} key={pi} minHeight={gp ? 875 : 0}>
              {pad?.id ? (
                <Stack direction="row" justifyContent="space-between">
                  <Stack direction="column">
                    <PT label={pad.id} />
                    <Stack direction="row" justifyContent="space-between">
                      <PD label="connected" value={pad.connected} />
                      <PD label="index" value={pad.index} />
                      <PD label="mapping" value={pad.mapping} />
                      <PD label="timestamp" value={pad.timestamp.toFixed(2)} />
                    </Stack>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      marginTop={2}
                      marginBottom={2}
                    >
                      <PD label="axes 0" value={pad.axes[0].toFixed(5)} />
                      <PD label="axes 1" value={pad.axes[1].toFixed(5)} />
                      <PD label="axes 2" value={pad.axes[2].toFixed(5)} />
                      <PD label="axes 3" value={pad.axes[3].toFixed(5)} />
                    </Stack>
                    <Stack
                      direction="row"
                      marginTop={2}
                      marginBottom={2}
                      spacing={5}
                    >
                      <PD
                        label="Motor"
                        value={pad.vibrationActuator?.type || 'No Motor'}
                      />
                      <Stack direction="column">
                        <span
                          style={{
                            color: '#999',
                            fontSize: '0.8rem'
                          }}
                        >
                          Type
                        </span>
                        <Select
                          fullWidth
                          disableUnderline
                          id="pad-type"
                          value={padType}
                          onChange={(e) => setPadType(e.target.value)}
                        >
                          {padTypes.map((t: string, i: number) => (
                            <MenuItem key={i} value={t}>
                              {t.toUpperCase()}
                            </MenuItem>
                          ))}
                        </Select>
                      </Stack>
                      {/* {pad.vibrationActuator && (
                        <Button
                          onClick={() =>
                            pad.vibrationActuator.playEffect('dual-rumble', {
                              duration: 1000
                            })
                          }
                        >
                          Test Motor
                        </Button>
                      )} */}
                    </Stack>
                    {/* {padType === 'xbox' && <GamepadSvg pad={pad} />} */}
                    {padType === 'ps5' && <GamepadSvgPs5 pad={pad} />}
                    {padType === 'ps4' && <GamepadSvgPs4 pad={pad} />}
                    {padType === 'ps3' && <GamepadSvgPs3 pad={pad} />}
                    {padType === 'generic' && (
                      <GamepadSvgPs3 pad={pad} type="generic" />
                    )}
                  </Stack>
                  <Stack direction="column" spacing={1} sx={{ mt: 2 }}>
                    {pad?.buttons.map((b: any, i: number) => {
                      return (
                        <Assign
                          // disabled={i === 16}
                          padIndex={pad.index}
                          mapping={mapping}
                          setMapping={setMapping}
                          pressed={b.pressed}
                          index={i}
                          key={i}
                        />
                      )
                    })}
                  </Stack>
                </Stack>
              ) : (
                <Stack direction="column" alignItems="center">
                  <h3>Connect a gamepad and press buttons to begin</h3>
                  <Box sx={{ display: 'flex' }}>
                    <CircularProgress size={100} />
                  </Box>
                </Stack>
              )}
            </PN>
          ))}
        </DialogContent>
      </Dialog>
    </div>
  ) : null
}

export default Gamepad
