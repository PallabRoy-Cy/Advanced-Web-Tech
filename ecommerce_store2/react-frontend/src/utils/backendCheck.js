import axios from 'axios';

export async function isBackendReachable(timeout = 2000) {
  try {
    // Try to hit the common Laravel CSRF endpoint; if server is up this should succeed
    await axios.get('http://localhost:8000/sanctum/csrf-cookie', { timeout });
    return true;
  } catch (err) {
    return false;
  }
}

export default isBackendReachable;
