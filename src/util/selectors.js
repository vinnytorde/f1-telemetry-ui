import { createSelector } from 'reselect'

export const getAvailableSessions = state => state.session

export const getDrivers = state => state.drivers

export const getCompareLaps = state => state.compareLap

// export const getCompareLapData = createSelector(getCompareLaps)

// const getRangeByFrame = (array, start, end) => {
//   return array.filter(
//     item =>
//       item.m_header.m_frameIdentifier >= start &&
//       item.m_header.m_frameIdentifier < end
//   )
// }

// const getSession = state => state.session
// const getParticipants = state => state.participants
// const getLapData = state => state.lapData
// const getCarTelemetry = state => state.carTelemetry

// export const getLatestSession = createSelector(getSession, getLast)
// const getControllingDriverIndex = createSelector(
//   getLatestSession,
//   session => session?.m_header.m_playerCarIndex
// )
// const getLatestLapData = createSelector(getLapData, getLast)
// const getLatestParticipants = createSelector(getParticipants, getLast)

// export const getControllingDriver = createSelector(
//   getLatestParticipants,
//   getControllingDriverIndex,
//   (participants, index) => {
//     return participants?.m_participants[index]
//   }
// )

// const getControllingDriverLapData = createSelector(
//   getLapData,
//   getControllingDriverIndex,
//   (lapData, index) => {
//     return lapData.map(lData => lData.m_lapData[index]).filter(item => item)
//   }
// )

// export const getLatestControllingDriverLapData = createSelector(
//   getLatestLapData,
//   getControllingDriverIndex,
//   (lapData, index) => {
//     return lapData?.m_lapData[index]
//   }
// )

// const getControllingDriverTelemetry = createSelector(
//   getCarTelemetry,
//   getControllingDriverIndex,
//   (telemetry, index) => {
//     return telemetry
//       .map(tData => tData.m_carTelemetryData[index])
//       .filter(item => item)
//   }
// )

// const getLatestControllingDriverTelemetry = createSelector(
//   getControllingDriverTelemetry,
//   getLast
// )

// export const getControllingDriverAvailableTelemetryLaps = createSelector(
//   getControllingDriverLapData,
//   lapData => {
//     const availableLaps = new Set()
//     lapData.forEach(lData => availableLaps.add(lData.m_currentLapNum))
//     const [last, ...laps] = [...availableLaps].reverse()
//     return laps.reverse()
//   }
// )

// export const getTelemetryForLap = createSelector(
//   getCarTelemetry,
//   getLapData,
//   getArgumentFromFunction(1),
//   getArgumentFromFunction(2),
//   (telemetry, lapData, lapNumber, driverIndex) => {
//     let startFrame, endFrame
//     lapData.forEach(lData => {
//       const frame = lData.m_header.m_frameIdentifier
//       if (
//         lData.m_lapData[driverIndex].m_currentLapNum === lapNumber &&
//         !startFrame &&
//         lData.m_lapData[driverIndex].m_lapDistance > 0
//       ) {
//         startFrame = frame
//       }
//       if (
//         lData.m_lapData[driverIndex].m_currentLapNum === lapNumber + 1 &&
//         !endFrame
//       ) {
//         endFrame = frame
//       }
//     })

//     const telemetryRange = getRangeByFrame(telemetry, startFrame, endFrame)
//     const lapDataRange = getRangeByFrame(lapData, startFrame, endFrame)
//     return telemetryRange.map((tData, index) => ({
//       ...tData.m_carTelemetryData[driverIndex],
//       m_lapDistance: lapDataRange[index].m_lapData[driverIndex].m_lapDistance,
//       m_currentLapTime:
//         lapDataRange[index].m_lapData[driverIndex].m_currentLapTime,
//       m_header: tData.m_header,
//     }))
//   }
// )

// export const getLapDataForLap = createSelector(
//   getLapData,
//   getArgumentFromFunction(1),
//   getArgumentFromFunction(2),
//   (lapData, lapNumber, driverIndex) => {
//     return lapData
//       .filter(lData => {
//         return (
//           lData.m_lapData[driverIndex].m_currentLapNum === lapNumber &&
//           lData.m_lapData[driverIndex].m_lapDistance > 0
//         )
//       })
//       .map(lData => {
//         return lData.m_lapData[driverIndex]
//       })
//   }
// )
