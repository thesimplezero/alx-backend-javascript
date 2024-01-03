// Optimizes download performance by racing China and US download promises
// Returns the fastest resolving promise, regardless of origin
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
