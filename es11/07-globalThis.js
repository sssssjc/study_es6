console.log(globalThis);

/*
node .\07-globalThis.js  
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 36.23240000009537,
      nodeStart: 0.6842999998480082,
      v8Start: 2.341300000436604,
      bootstrapComplete: 26.079800000414252,
      environment: 12.548600000329316,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1659228661616.542
  },
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
}

*/