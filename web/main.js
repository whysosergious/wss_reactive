import "./src/terminal/mod.js";
import msgpack from "https://cdn.jsdelivr.net/npm/msgpack-js@0.3.0/+esm";
globalThis.msgpack = msgpack; // Keeping msgpack globally available as it might be used by other parts or for debugging.

